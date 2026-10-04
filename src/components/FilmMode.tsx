import React, { useState, useEffect } from "react";
import { filmsData, FilmItem } from "../data_films";
import FilmPlayer from "./FilmPlayer";
import { 
  ArrowLeft, Search, Sparkles, Volume2, 
  CheckCircle2, XCircle, Bookmark, BookmarkCheck,
  ChevronRight, Compass, HelpCircle, Flame, Play, Film
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getFilmProgress } from "../services/filmWatchTracker";

interface FilmModeProps {
  onBack: () => void;
}

const FAVORITES_STORAGE_KEY = "vocab_favorite_films";
const COMPLETED_FILMS_STORAGE_KEY = "vocab_completed_films";

export default function FilmMode({ onBack }: FilmModeProps) {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);
  const [activeTab, setActiveTab] = useState<"watch" | "vocab" | "quotes" | "quiz">("watch");
  
  // Filters
  const [selectedType, setSelectedType] = useState<"all" | "animation" | "live_action">("all");
  const [selectedLevel, setSelectedLevel] = useState<"all" | "A1-A2" | "B1-B2" | "C1-C2">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  // Favorites & completion state
  const [favoriteFilmIds, setFavoriteFilmIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedFilmIds, setCompletedFilmIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(COMPLETED_FILMS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Quiz state for selected film
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteFilmIds));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteFilmIds]);

  useEffect(() => {
    try {
      localStorage.setItem(COMPLETED_FILMS_STORAGE_KEY, JSON.stringify(completedFilmIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedFilmIds]);

  const toggleFavorite = (filmId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavoriteFilmIds(prev => 
      prev.includes(filmId) ? prev.filter(id => id !== filmId) : [...prev, filmId]
    );
  };

  const toggleCompleted = (filmId: string) => {
    setCompletedFilmIds(prev => 
      prev.includes(filmId) ? prev.filter(id => id !== filmId) : [...prev, filmId]
    );
  };

  const speakEnglish = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  // Filtered films
  const filteredFilms = filmsData.filter(film => {
    if (selectedType !== "all" && film.type !== selectedType) return false;
    if (selectedLevel !== "all" && film.level !== selectedLevel) return false;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchTitle = film.title.toLowerCase().includes(query) || film.titleVi.toLowerCase().includes(query);
      const matchGenre = film.genre.some(g => g.toLowerCase().includes(query));
      const matchTagline = film.tagline.toLowerCase().includes(query);
      return matchTitle || matchGenre || matchTagline;
    }
    return true;
  });

  const handleSelectQuizOption = (qId: string, option: string) => {
    if (quizSubmitted[qId]) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: option }));
    setQuizSubmitted(prev => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="flex flex-col min-h-full bg-slate-50 text-slate-800">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (selectedFilm) {
                  setSelectedFilm(null);
                } else {
                  onBack();
                }
              }}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Quay lại"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎬</span>
                <h1 className="text-lg md:text-xl font-black text-slate-900">
                  {selectedFilm ? selectedFilm.title : "Học Tiếng Anh Qua Phim (Films & Series)"}
                </h1>
                <span className="bg-rose-100 text-rose-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-rose-200">
                  New Section
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {selectedFilm 
                  ? `${selectedFilm.titleVi} • ${selectedFilm.levelLabel} • ${selectedFilm.accent}`
                  : "Tổng hợp các bộ phim hoạt hình và phim thật từ mọi level giúp tăng vọt phản xạ nghe nói"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end flex-wrap">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all border border-indigo-200"
            >
              <Compass size={14} />
              <span>{showGuide ? "Đóng hướng dẫn" : "Phương pháp 4 bước"}</span>
            </button>
            {selectedFilm && (
              <button
                onClick={() => toggleCompleted(selectedFilm.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  completedFilmIds.includes(selectedFilm.id)
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <CheckCircle2 size={14} />
                <span>{completedFilmIds.includes(selectedFilm.id) ? "Đã học xong" : "Đánh dấu đã học"}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full p-4 md:p-6 lg:p-8 flex-1">
        {/* 4-Step Method Collapsible Guide */}
        <AnimatePresence>
          {showGuide && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-5 md:p-7 shadow-xl border border-indigo-700/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="text-amber-400" size={20} />
                    <h3 className="text-base sm:text-lg font-black tracking-wide">
                      Phương Pháp 4 Bước Học Tiếng Anh Qua Phim Đỉnh Cao
                    </h3>
                  </div>
                  <span className="text-xs text-indigo-300 font-medium">Bí quyết của người đa ngôn ngữ (Polyglot)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-2">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      1
                    </div>
                    <h4 className="font-bold text-sm text-amber-200 mb-1">Xem với Vietsub (Hiểu cốt truyện)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Lần đầu tiên xem thoải mái để nắm trọn bối cảnh, tính cách nhân vật và cảm xúc của phân đoạn.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      2
                    </div>
                    <h4 className="font-bold text-sm text-sky-200 mb-1">Xem với Engsub (Bắt từ mới & Slang)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Bật phụ đề tiếng Anh. Ghi chép 3-5 cụm từ, câu thoại hay gặp mà người bản xứ hay dùng.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      3
                    </div>
                    <h4 className="font-bold text-sm text-emerald-200 mb-1">Tắt Sub (Thử thách đôi tai)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Tắt hoàn toàn phụ đề. Tập trung 100% lắng nghe ngữ điệu, nối âm, nuốt âm và cảm nhận ngữ cảnh.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-rose-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      4
                    </div>
                    <h4 className="font-bold text-sm text-rose-200 mb-1">Kỹ thuật Shadowing (Nhại giọng)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Dừng video và nhại lại câu thoại với đúng tốc độ, âm sắc và cảm xúc của diễn viên trong phim!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN FILM LIST VIEW */}
        {!selectedFilm && (
          <div className="space-y-6">
            {/* Search and Filters Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search box */}
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên phim (Nemo, Friends, Suits...), thể loại..."
                    className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Xóa
                    </button>
                  )}
                </div>

                {/* Type Filter */}
                <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold shrink-0">
                  <button
                    onClick={() => setSelectedType("all")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      selectedType === "all" ? "bg-white text-slate-900 shadow-2xs font-extrabold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Tất cả ({filmsData.length})
                  </button>
                  <button
                    onClick={() => setSelectedType("animation")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      selectedType === "animation" ? "bg-white text-indigo-700 shadow-2xs font-extrabold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🎨 Hoạt hình
                  </button>
                  <button
                    onClick={() => setSelectedType("live_action")}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      selectedType === "live_action" ? "bg-white text-indigo-700 shadow-2xs font-extrabold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    🎬 Phim thật
                  </button>
                </div>
              </div>

              {/* Level Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 text-xs scrollbar-none">
                <span className="text-slate-400 font-bold shrink-0 text-[11px] uppercase tracking-wider">Trình độ:</span>
                <button
                  onClick={() => setSelectedLevel("all")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border ${
                    selectedLevel === "all"
                      ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Mọi trình độ
                </button>
                <button
                  onClick={() => setSelectedLevel("A1-A2")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border flex items-center gap-1.5 ${
                    selectedLevel === "A1-A2"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                      : "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100/70"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Level A1-A2 (Cơ bản)
                </button>
                <button
                  onClick={() => setSelectedLevel("B1-B2")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border flex items-center gap-1.5 ${
                    selectedLevel === "B1-B2"
                      ? "bg-amber-600 text-white border-amber-600 shadow-2xs"
                      : "bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100/70"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Level B1-B2 (Trung cấp)
                </button>
                <button
                  onClick={() => setSelectedLevel("C1-C2")}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all shrink-0 border flex items-center gap-1.5 ${
                    selectedLevel === "C1-C2"
                      ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
                      : "bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100/70"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Level C1-C2 (Nâng cao)
                </button>
              </div>
            </div>

            {/* Films Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredFilms.map(film => {
                const isFavorite = favoriteFilmIds.includes(film.id);
                const isCompleted = completedFilmIds.includes(film.id);

                return (
                  <div
                    key={film.id}
                    onClick={() => {
                      setSelectedFilm(film);
                      setActiveTab("watch");
                      setQuizAnswers({});
                      setQuizSubmitted({});
                    }}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer relative"
                  >
                    {/* Film Banner Card Header */}
                    <div className={`h-36 bg-gradient-to-r ${film.bannerGradient} p-4 text-white flex flex-col justify-between relative overflow-hidden`}>
                      {/* Decorative Background Pattern */}
                      <div className="absolute -right-6 -bottom-6 text-7xl opacity-20 transform group-hover:scale-110 transition-transform">
                        {film.icon}
                      </div>

                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${
                            film.level === "A1-A2" 
                              ? "bg-emerald-400 text-emerald-950 font-black" 
                              : film.level === "B1-B2" 
                              ? "bg-amber-400 text-amber-950 font-black" 
                              : "bg-rose-400 text-rose-950 font-black"
                          }`}>
                            {film.level}
                          </span>
                          <span className="text-[10px] font-bold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                            {film.type === "animation" ? "🎨 Hoạt hình" : "🎬 Phim thật"}
                          </span>
                        </div>

                        <button
                          onClick={e => toggleFavorite(film.id, e)}
                          className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-xs transition-colors"
                          title="Lưu vào danh sách yêu thích"
                        >
                          {isFavorite ? (
                            <BookmarkCheck size={16} className="text-amber-300 fill-amber-300" />
                          ) : (
                            <Bookmark size={16} />
                          )}
                        </button>
                      </div>

                      <div className="z-10">
                        <span className="text-2xl mr-2">{film.icon}</span>
                        <h3 className="text-lg font-black tracking-tight leading-snug drop-shadow-xs inline">
                          {film.title}
                        </h3>
                        <p className="text-xs text-white/90 font-medium truncate mt-0.5">
                          {film.titleVi} ({film.year})
                        </p>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2.5 text-[11px]">
                          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                            {film.accent}
                          </span>
                          <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-md font-bold">
                            {film.rating}
                          </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-xs text-indigo-700 font-semibold italic bg-indigo-50/70 p-2 rounded-xl border border-indigo-100 mb-2">
                          "{film.tagline}"
                        </p>

                        {/* Summary */}
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {film.summaryVi}
                        </p>
                      </div>

                      {/* Card Footer Features */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <span className="text-indigo-600 font-bold">{film.episodes.length} tập</span>
                          <span>•</span>
                          <span>{film.keyVocabularies.length} từ vựng</span>
                          <span>•</span>
                          <span>{film.iconicQuotes.length} câu thoại</span>
                        </div>

                        <div className="flex items-center gap-1 text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">
                          <span>Học ngay</span>
                          <ChevronRight size={15} />
                        </div>
                      </div>

                      {/* Completed Ribbon */}
                      {isCompleted && (
                        <div className="absolute top-2 right-12 z-10 bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                          <CheckCircle2 size={10} />
                          <span>Đã học</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* DETAILED FILM STUDY VIEW */}
        {selectedFilm && (
          <div className="space-y-6">
            {/* Film Overview Hero Box */}
            <div className={`bg-gradient-to-r ${selectedFilm.bannerGradient} rounded-3xl p-5 sm:p-7 md:p-8 text-white shadow-xl relative overflow-hidden`}>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8">
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-3xl sm:text-4xl">{selectedFilm.icon}</span>
                    <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs border border-white/20">
                      {selectedFilm.level} • {selectedFilm.levelLabel}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs">
                      {selectedFilm.type === "animation" ? "Hoạt hình" : "Phim người đóng"}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/20">
                      {selectedFilm.accent}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                      {selectedFilm.rating}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight drop-shadow-xs">
                    {selectedFilm.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium">
                    {selectedFilm.titleVi} ({selectedFilm.year})
                  </p>

                  <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed pt-1">
                    {selectedFilm.summaryVi}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0 self-stretch md:self-center">
                  <button
                    onClick={() => setActiveTab("watch")}
                    className="w-full sm:w-auto px-5 py-3 md:py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 min-h-[44px]"
                  >
                    <Play size={15} className="fill-slate-950" />
                    <span>Xem phim & Các tập</span>
                  </button>

                  <button
                    onClick={() => toggleFavorite(selectedFilm.id)}
                    className="w-full sm:w-auto px-4 py-3 md:py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-md min-h-[44px]"
                  >
                    {favoriteFilmIds.includes(selectedFilm.id) ? (
                      <>
                        <BookmarkCheck size={16} className="text-amber-500 fill-amber-500" />
                        <span>Đã lưu yêu thích</span>
                      </>
                    ) : (
                      <>
                        <Bookmark size={16} />
                        <span>Lưu vào yêu thích</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex bg-white p-1 sm:p-1.5 rounded-2xl border border-slate-200 text-xs sm:text-sm font-bold shadow-2xs overflow-x-auto gap-1 scrollbar-none">
              <button
                onClick={() => setActiveTab("watch")}
                className={`flex-1 min-w-[130px] sm:min-w-[140px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 sm:shrink ${
                  activeTab === "watch"
                    ? "bg-indigo-600 text-white shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>🎬</span>
                <span>Xem phim & Tập ({selectedFilm.episodes.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("vocab")}
                className={`flex-1 min-w-[130px] sm:min-w-[140px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 sm:shrink ${
                  activeTab === "vocab"
                    ? "bg-indigo-600 text-white shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>📚</span>
                <span>Từ vựng ({selectedFilm.keyVocabularies.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("quotes")}
                className={`flex-1 min-w-[130px] sm:min-w-[140px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 sm:shrink ${
                  activeTab === "quotes"
                    ? "bg-indigo-600 text-white shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>💬</span>
                <span>Câu thoại ({selectedFilm.iconicQuotes.length})</span>
              </button>

              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex-1 min-w-[130px] sm:min-w-[140px] py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 shrink-0 sm:shrink ${
                  activeTab === "quiz"
                    ? "bg-indigo-600 text-white shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>🎯</span>
                <span>Thử thách ({selectedFilm.quiz.length})</span>
              </button>
            </div>

            {/* TAB 0: WATCH FILM & EPISODES */}
            {activeTab === "watch" && (
              <FilmPlayer film={selectedFilm} />
            )}

            {/* TAB 1: VOCABULARY */}
            {activeTab === "vocab" && (
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <span className="text-xl shrink-0">💡</span>
                  <div>
                    <span className="font-bold">Mẹo học từ vựng qua phim:</span> Hãy bấm vào biểu tượng loa để nghe phát âm chuẩn, sau đó đọc to câu ví dụ ngữ cảnh (Context sentence) 3 lần trước khi xem phim!
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedFilm.keyVocabularies.map((v, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-indigo-300 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-black text-slate-900">{v.word}</h4>
                            <button
                              onClick={() => speakEnglish(v.word)}
                              className="p-1.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                              title="Phát âm"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                          <span className="text-xs text-slate-400 font-mono">{v.phonetic}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          Từ #{i + 1}
                        </span>
                      </div>

                      <div className="p-2.5 bg-emerald-50 text-emerald-900 font-bold text-sm rounded-xl border border-emerald-100">
                        {v.meaningVi}
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-500 uppercase text-[9px]">Câu ví dụ trong phim:</span>
                          <button
                            onClick={() => speakEnglish(v.exampleSentence)}
                            className="text-[10px] text-indigo-600 font-semibold hover:underline flex items-center gap-1"
                          >
                            <Volume2 size={12} />
                            Nghe câu
                          </button>
                        </div>
                        <p className="font-semibold text-slate-800 italic">"{v.exampleSentence}"</p>
                        <p className="text-slate-500">{v.exampleVi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: ICONIC QUOTES */}
            {activeTab === "quotes" && (
              <div className="space-y-4">
                {selectedFilm.iconicQuotes.map((q, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-black">
                          {q.character.charAt(0)}
                        </span>
                        <div>
                          <span className="font-bold text-sm text-slate-900">{q.character}</span>
                          <p className="text-[10px] text-slate-400">Nhân vật trong {selectedFilm.title}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => speakEnglish(q.en)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs transition-colors border border-indigo-200"
                        title="Nghe câu thoại"
                      >
                        <Volume2 size={16} />
                        <span>Nghe thoại</span>
                      </button>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-slate-50 to-indigo-50/40 rounded-2xl border border-indigo-100/80">
                      <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-relaxed">
                        "{q.en}"
                      </p>
                      <p className="text-sm font-semibold text-indigo-700 mt-1.5">
                        "{q.vi}"
                      </p>
                    </div>

                    <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200/80 text-xs text-amber-900">
                      <span className="font-bold">Phân tích ngữ pháp & ngữ cảnh: </span>
                      <span>{q.explanationVi}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: DIALOGUE QUIZ */}
            {activeTab === "quiz" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-bold text-slate-800">
                    Bài tập tương tác: Điền từ vào câu thoại và phân xạ ngữ cảnh ({selectedFilm.quiz.length} câu)
                  </span>
                  <span className="text-indigo-600 font-semibold">Chọn đáp án để kiểm tra kết quả ngay</span>
                </div>

                <div className="space-y-5">
                  {selectedFilm.quiz.map((q, idx) => {
                    const isSubmitted = quizSubmitted[q.id];
                    const selected = quizAnswers[q.id];
                    const isRight = selected === q.answer;

                    return (
                      <div
                        key={q.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-black shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 italic">
                            {q.dialogueContext}
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {q.question}
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {q.options.map((opt, optIdx) => {
                            const isThisSelected = selected === opt;
                            const isThisCorrect = opt === q.answer;

                            let btnStyle = "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200";

                            if (isSubmitted) {
                              if (isThisCorrect) {
                                btnStyle = "bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs";
                              } else if (isThisSelected && !isRight) {
                                btnStyle = "bg-red-500 text-white border-red-600 font-bold";
                              } else {
                                btnStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectQuizOption(q.id, opt)}
                                className={`p-3.5 rounded-2xl border text-left transition-all text-xs sm:text-sm font-semibold flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isSubmitted && isThisCorrect && <CheckCircle2 size={16} />}
                                {isSubmitted && isThisSelected && !isRight && <XCircle size={16} />}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation Box */}
                        {isSubmitted && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                              isRight
                                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                                : "bg-red-50 border-red-200 text-red-950"
                            }`}
                          >
                            <div className="font-bold mb-1 flex items-center gap-1.5">
                              {isRight ? (
                                <>
                                  <CheckCircle2 size={15} className="text-emerald-600" />
                                  <span>Chính xác tuyệt đối!</span>
                                </>
                              ) : (
                                <>
                                  <HelpCircle size={15} className="text-red-600" />
                                  <span>Chưa chính xác. Đáp án đúng là: "{q.answer}"</span>
                                </>
                              )}
                            </div>
                            <p>{q.explanationVi}</p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
