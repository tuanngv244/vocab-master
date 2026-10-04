import React, { useState, useEffect, useRef } from "react";
import { FilmItem, FilmEpisode } from "../data_films";
import { 
  Play, Pause, RotateCcw, RotateCw, Maximize2, Minimize2, 
  ZoomIn, ZoomOut, Volume2, VolumeX, CheckCircle2, 
  Tv, Monitor, Sparkles, ChevronRight, Clock, Film
} from "lucide-react";
import { 
  getFilmProgress, getEpisodeProgress, saveEpisodeProgress, 
  markEpisodeCompleted, formatTime, EpisodeProgress 
} from "../services/filmWatchTracker";

interface FilmPlayerProps {
  film: FilmItem;
  initialEpisodeId?: string;
}

export default function FilmPlayer({ film, initialEpisodeId }: FilmPlayerProps) {
  const episodes = film.episodes && film.episodes.length > 0 ? film.episodes : [];
  const defaultEp = episodes.find(e => e.id === initialEpisodeId) || episodes[0];

  const [currentEpisode, setCurrentEpisode] = useState<FilmEpisode | undefined>(defaultEp);
  const [playerMode, setPlayerMode] = useState<"youtube" | "html5">("youtube");
  const [youtubeStartTime, setYoutubeStartTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTimestampIndex, setActiveTimestampIndex] = useState<number | null>(null);

  // Saved watch progress for all episodes in this film
  const [watchProgress, setWatchProgress] = useState<Record<string, EpisodeProgress>>(() => 
    getFilmProgress(film.id)
  );

  // Resume prompt state
  const [savedResumeTime, setSavedResumeTime] = useState<number | null>(null);

  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const saveThrottleRef = useRef<number>(0);

  // Whenever currentEpisode changes, check saved progress
  useEffect(() => {
    if (!currentEpisode) return;

    const prog = getEpisodeProgress(film.id, currentEpisode.id);
    if (prog && prog.currentTime > 5 && !prog.isCompleted) {
      setSavedResumeTime(prog.currentTime);
    } else {
      setSavedResumeTime(null);
    }

    // Reset video state
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveTimestampIndex(null);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [currentEpisode?.id, film.id]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(e => console.warn(e));
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      // Save on pause
      if (currentEpisode) {
        const prog = saveEpisodeProgress(
          film.id, 
          currentEpisode.id, 
          videoRef.current.currentTime, 
          videoRef.current.duration || currentEpisode.durationSeconds
        );
        setWatchProgress(prev => ({ ...prev, [currentEpisode.id]: prog }));
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !currentEpisode) return;
    const cur = videoRef.current.currentTime;
    setCurrentTime(cur);

    // Highlight active timestamp quote
    if (currentEpisode.timestamps && currentEpisode.timestamps.length > 0) {
      let matchedIdx: number | null = null;
      for (let i = 0; i < currentEpisode.timestamps.length; i++) {
        if (cur >= currentEpisode.timestamps[i].time) {
          matchedIdx = i;
        }
      }
      setActiveTimestampIndex(matchedIdx);
    }

    // Throttle progress saving every 2 seconds
    const now = Date.now();
    if (now - saveThrottleRef.current > 2000) {
      saveThrottleRef.current = now;
      const prog = saveEpisodeProgress(
        film.id, 
        currentEpisode.id, 
        cur, 
        videoRef.current.duration || currentEpisode.durationSeconds
      );
      setWatchProgress(prev => ({ ...prev, [currentEpisode.id]: prog }));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration;
    if (!isNaN(dur) && dur > 0) {
      setDuration(dur);
    } else if (currentEpisode) {
      setDuration(currentEpisode.durationSeconds);
    }
    videoRef.current.playbackRate = playbackSpeed;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current || !currentEpisode) return;
    const targetTime = parseFloat(e.target.value);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);

    const prog = saveEpisodeProgress(
      film.id, 
      currentEpisode.id, 
      targetTime, 
      videoRef.current.duration || currentEpisode.durationSeconds
    );
    setWatchProgress(prev => ({ ...prev, [currentEpisode.id]: prog }));
  };

  const handleSeekRelative = (seconds: number) => {
    if (!videoRef.current || !currentEpisode) return;
    const targetDuration = videoRef.current.duration || currentEpisode.durationSeconds || 100;
    const newTime = Math.max(0, Math.min(targetDuration, videoRef.current.currentTime + seconds));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);

    const prog = saveEpisodeProgress(film.id, currentEpisode.id, newTime, targetDuration);
    setWatchProgress(prev => ({ ...prev, [currentEpisode.id]: prog }));
  };

  const handleSeekToTimestamp = (seconds: number) => {
    if (!currentEpisode) return;
    if (playerMode !== "html5") {
      setPlayerMode("html5");
    }
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = seconds;
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
        setCurrentTime(seconds);
        setSavedResumeTime(null);
      }
    }, 50);
  };

  const handleResume = () => {
    if (!savedResumeTime || !videoRef.current) return;
    videoRef.current.currentTime = savedResumeTime;
    setCurrentTime(savedResumeTime);
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
    setSavedResumeTime(null);
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleZoomToggle = () => {
    setZoomLevel(prev => {
      if (prev === 1.0) return 1.2;
      if (prev === 1.2) return 1.4;
      return 1.0;
    });
  };

  const handleFullscreenToggle = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      if (playerContainerRef.current.requestFullscreen) {
        playerContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const newMute = !isMuted;
    setIsMuted(newMute);
    videoRef.current.muted = newMute;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (currentEpisode) {
      markEpisodeCompleted(film.id, currentEpisode.id, duration || currentEpisode.durationSeconds);
      const prog = getEpisodeProgress(film.id, currentEpisode.id);
      if (prog) {
        setWatchProgress(prev => ({ ...prev, [currentEpisode.id]: prog }));
      }
    }
  };

  const handleSelectEpisode = (ep: FilmEpisode) => {
    setCurrentEpisode(ep);
    setSavedResumeTime(null);
  };

  if (!currentEpisode) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-500">
        Chưa có tập phim nào được cập nhật cho phim này.
      </div>
    );
  }

  const currentEpProgress = watchProgress[currentEpisode.id];
  const speedOptions = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];

  return (
    <div className="space-y-6">
      {/* Resuming Banner Alert */}
      {savedResumeTime !== null && savedResumeTime > 5 && (
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-orange-500/10 border border-amber-300 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">⏱️</span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-amber-950">
                Bạn đã xem đến phút <span className="underline font-black text-amber-900">{formatTime(savedResumeTime)}</span> của tập này.
              </p>
              <p className="text-[11px] text-amber-800">
                Tiến độ xem đã được lưu tự động trên thiết bị. Bạn có muốn tiếp tục xem không?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto flex-wrap">
            <button
              onClick={() => setSavedResumeTime(null)}
              className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all border border-amber-200 flex-1 sm:flex-initial text-center"
            >
              Học từ đầu (00:00)
            </button>
            <button
              onClick={handleResume}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-sm flex-1 sm:flex-initial"
            >
              <Play size={13} className="fill-slate-950" />
              <span>Tiếp tục ({formatTime(savedResumeTime)})</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Video Player Box */}
      <div 
        ref={playerContainerRef}
        className={`bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 relative ${
          isTheaterMode ? "w-full max-w-none" : "w-full max-w-5xl mx-auto"
        } ${isFullscreen ? "rounded-none border-none" : ""}`}
      >
        {/* Top Mini Control Bar */}
        <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between text-xs text-white gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-black uppercase shrink-0">
              Tập {currentEpisode.episodeNumber}
            </span>
            <span className="font-bold truncate text-slate-200 text-xs sm:text-sm">
              {currentEpisode.title}
            </span>
            <span className="text-slate-400 text-[11px] hidden md:inline truncate">
              ({currentEpisode.titleVi})
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 ml-auto">
            {/* Mode Switch: HTML5 vs YouTube */}
            {currentEpisode.youtubeId && (
              <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-[10px] font-bold">
                <button
                  onClick={() => setPlayerMode("html5")}
                  className={`px-1.5 sm:px-2 py-1 rounded flex items-center gap-1 transition-all ${
                    playerMode === "html5" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                  title="Video học tập tương tác với điều khiển tốc độ & zoom"
                >
                  <Tv size={12} />
                  <span className="hidden xs:inline sm:inline">Học Tập</span>
                </button>
                <button
                  onClick={() => setPlayerMode("youtube")}
                  className={`px-1.5 sm:px-2 py-1 rounded flex items-center gap-1 transition-all ${
                    playerMode === "youtube" ? "bg-red-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                  title="Bản phát trực tiếp YouTube"
                >
                  <Monitor size={12} />
                  <span className="hidden xs:inline sm:inline">YouTube</span>
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <button
              onClick={handleZoomToggle}
              className="px-2 sm:px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center gap-1 border border-slate-700"
              title={`Thu phóng video: Hiện tại ${Math.round(zoomLevel * 100)}%`}
            >
              {zoomLevel > 1.0 ? <ZoomOut size={13} /> : <ZoomIn size={13} />}
              <span className="hidden sm:inline">Zoom</span> {Math.round(zoomLevel * 100)}%
            </button>

            {/* Theater Mode Toggle (Desktop only) */}
            {!isFullscreen && (
              <button
                onClick={() => setIsTheaterMode(prev => !prev)}
                className={`hidden md:inline-flex p-1.5 rounded-lg border transition-all ${
                  isTheaterMode 
                    ? "bg-indigo-600 text-white border-indigo-500" 
                    : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                }`}
                title={isTheaterMode ? "Thu hẹp khung nhìn chuẩn" : "Mở rộng chế độ Khung Rạp (Theater Mode)"}
              >
                <Film size={14} />
              </button>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreenToggle}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all border border-slate-700"
              title={isFullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình (Fullscreen)"}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
          {playerMode === "html5" ? (
            <div 
              className="w-full h-full flex items-center justify-center transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <video
                ref={videoRef}
                src={currentEpisode.videoUrl}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                onError={() => {
                  console.warn("HTML5 source error, switching to YouTube Stream");
                  setPlayerMode("youtube");
                }}
                onClick={handlePlayPause}
                className="w-full h-full object-contain cursor-pointer"
                playsInline
                preload="metadata"
              />
            </div>
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <iframe
                key={`${currentEpisode.id}-${youtubeStartTime}`}
                src={`https://www.youtube-nocookie.com/embed/${currentEpisode.youtubeId}?autoplay=1&start=${youtubeStartTime}&rel=0&modestbranding=1`}
                title={currentEpisode.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          )}

          {/* Big Center Play Overlay (when paused in html5 mode) */}
          {playerMode === "html5" && !isPlaying && (
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600/80 hover:bg-indigo-600 text-white backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-20 group"
              aria-label="Phát video"
            >
              <Play size={32} className="ml-1 fill-white" />
            </button>
          )}

          {/* Active Dialogue Subtitle Overlay in Fullscreen or Playback */}
          {playerMode === "html5" && activeTimestampIndex !== null && currentEpisode.timestamps && currentEpisode.timestamps[activeTimestampIndex] && (
            <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 pointer-events-none flex flex-col items-center justify-center z-20 text-center">
              <div className="bg-black/85 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl max-w-2xl shadow-2xl animate-fade-in">
                <p className="text-amber-300 font-extrabold text-xs sm:text-base tracking-wide drop-shadow-md">
                  "{currentEpisode.timestamps[activeTimestampIndex].en}"
                </p>
                <p className="text-white/90 font-medium text-[11px] sm:text-xs mt-0.5">
                  {currentEpisode.timestamps[activeTimestampIndex].vi}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Custom Video Controls Toolbar (Works for both HTML5 and YouTube mode) */}
        <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 text-white space-y-2.5 z-30">
          {/* Seek Slider Bar (HTML5 mode) */}
          {playerMode === "html5" && (
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold text-slate-300 w-12 text-right shrink-0">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration > 0 ? duration : currentEpisode.durationSeconds || 100}
                step="0.5"
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
              />
              <span className="text-[11px] font-mono font-bold text-slate-400 w-12 shrink-0">
                {formatTime(duration > 0 ? duration : currentEpisode.durationSeconds)}
              </span>
            </div>
          )}

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {playerMode === "html5" ? (
                <>
                  {/* Play / Pause */}
                  <button
                    onClick={handlePlayPause}
                    className="w-9 h-9 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                    title={isPlaying ? "Tạm dừng (Space)" : "Phát (Space)"}
                  >
                    {isPlaying ? <Pause size={18} className="fill-white" /> : <Play size={18} className="ml-0.5 fill-white" />}
                  </button>

                  {/* Rewind -10s */}
                  <button
                    onClick={() => handleSeekRelative(-10)}
                    className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all border border-slate-700 active:scale-95"
                    title="Tua lùi 10 giây để nghe lại câu thoại"
                  >
                    <RotateCcw size={14} />
                    <span className="text-[8px] font-black -ml-1">10</span>
                  </button>

                  {/* Forward +10s */}
                  <button
                    onClick={() => handleSeekRelative(10)}
                    className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-all border border-slate-700 active:scale-95"
                    title="Tua tới 10 giây"
                  >
                    <span className="text-[8px] font-black -mr-1">10</span>
                    <RotateCw size={14} />
                  </button>

                  {/* Volume & Mute */}
                  <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-750">
                    <button
                      onClick={handleToggleMute}
                      className="p-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Đang phát trực tiếp HD
                  </span>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="text-slate-400 text-[11px] hidden sm:inline">
                    Điều khiển phụ đề, âm lượng & tốc độ ngay trên thanh phát video
                  </span>
                </div>
              )}
            </div>

            {/* Speed Controller & Completion Action */}
            <div className="flex items-center gap-1.5 flex-wrap ml-auto">
              {playerMode === "html5" && (
                <div className="flex items-center gap-0.5 sm:gap-1 bg-slate-800/80 p-0.5 sm:p-1 rounded-xl border border-slate-700/80 text-[10px] sm:text-[11px] font-bold">
                  <span className="text-slate-400 px-1 text-[10px] hidden md:inline">Tốc độ:</span>
                  {speedOptions.map(spd => (
                    <button
                      key={spd}
                      onClick={() => handleSpeedChange(spd)}
                      className={`px-1.5 sm:px-2 py-0.5 rounded-lg transition-all ${
                        playbackSpeed === spd
                          ? "bg-indigo-600 text-white font-black shadow-xs"
                          : "text-slate-300 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              )}

              {/* Completion Action */}
              <button
                onClick={() => {
                  markEpisodeCompleted(film.id, currentEpisode.id, duration || currentEpisode.durationSeconds);
                  setWatchProgress(prev => ({
                    ...prev,
                    [currentEpisode.id]: {
                      currentTime: duration || currentEpisode.durationSeconds,
                      duration: duration || currentEpisode.durationSeconds,
                      progressPercent: 100,
                      isCompleted: true,
                      lastWatchedAt: Date.now()
                    }
                  }));
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                  currentEpProgress?.isCompleted 
                    ? "bg-emerald-600 text-white" 
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                }`}
                title="Đánh dấu hoàn thành tập này"
              >
                <CheckCircle2 size={13} className={currentEpProgress?.isCompleted ? "text-white" : "text-slate-400"} />
                <span>
                  {currentEpProgress?.isCompleted ? "Đã học" : "Đánh dấu đã xem"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Key Dialogue Timestamps of the Episode */}
      {currentEpisode.timestamps && currentEpisode.timestamps.length > 0 && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-600" />
              <h3 className="text-sm sm:text-base font-black text-slate-900">
                Mốc Thời Gian & Câu Thoại Then Chốt (Tập {currentEpisode.episodeNumber})
              </h3>
            </div>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
              Bấm vào để tua video đến đúng giây đối thoại
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentEpisode.timestamps.map((ts, idx) => {
              const isSelected = activeTimestampIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSeekToTimestamp(ts.time)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "bg-indigo-50 border-indigo-400 ring-2 ring-indigo-500/20 shadow-sm"
                      : "bg-slate-50/70 border-slate-200/80 hover:bg-indigo-50/40 hover:border-indigo-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 flex items-center gap-1">
                      <Clock size={10} />
                      {ts.label}
                    </span>
                    <span className="text-[10px] font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      ▶ Tua đến đây
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                    "{ts.en}"
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                    {ts.vi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Episode Selection List (Danh sách tập phim / Phân đoạn) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <Film size={18} className="text-indigo-600" />
              <span>Danh Sách Tập Phim & Phân Đoạn Học Tập</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Chọn tập để bắt đầu học. Tiến độ xem từng tập được lưu tự động.
            </p>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {episodes.length} Tập / Phân đoạn
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {episodes.map(ep => {
            const isCurrent = currentEpisode.id === ep.id;
            const prog = watchProgress[ep.id];
            const isDone = prog?.isCompleted;
            const percent = prog ? prog.progressPercent : 0;

            return (
              <div
                key={ep.id}
                onClick={() => handleSelectEpisode(ep)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isCurrent
                    ? "bg-gradient-to-br from-indigo-50/80 to-purple-50/50 border-indigo-400 shadow-md ring-2 ring-indigo-500/20"
                    : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                        isCurrent 
                          ? "bg-indigo-600 text-white" 
                          : "bg-slate-100 text-slate-700 group-hover:bg-indigo-100 group-hover:text-indigo-800"
                      }`}>
                        Tập {ep.episodeNumber}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                        <Clock size={11} /> {ep.duration}
                      </span>
                    </div>

                    {isDone ? (
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 size={11} /> Đã xong
                      </span>
                    ) : percent > 0 ? (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Đang xem {percent}%
                      </span>
                    ) : null}
                  </div>

                  <h4 className="font-black text-sm text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {ep.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 line-clamp-1 mt-0.5">
                    {ep.titleVi}
                  </p>

                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                    {ep.descriptionVi}
                  </p>
                </div>

                {/* Bottom Progress Bar & CTA */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isDone ? "bg-emerald-500" : "bg-indigo-600"
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] text-slate-400 font-medium">
                      {prog && prog.currentTime > 0 
                        ? `Đã xem ${formatTime(prog.currentTime)} / ${ep.duration}`
                        : "Chưa bắt đầu"}
                    </span>

                    <button className={`font-bold text-xs flex items-center gap-1 transition-transform group-hover:translate-x-0.5 ${
                      isCurrent ? "text-indigo-700 font-black" : "text-indigo-600"
                    }`}>
                      <span>{isCurrent ? "Đang mở" : prog && prog.currentTime > 0 ? "Xem tiếp" : "Phát tập này"}</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
