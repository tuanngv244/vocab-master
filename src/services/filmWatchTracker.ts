/**
 * Service lưu trữ và quản lý tiến độ xem phim / tập phim trong localStorage.
 * Cho phép ghi nhớ vị trí giây/phút đang xem dở, tỷ lệ % hoàn thành và tập xem gần nhất.
 */

export interface EpisodeProgress {
  currentTime: number; // giây hiện tại (ví dụ: 125.4)
  duration: number; // tổng thời lượng giây
  progressPercent: number; // 0 - 100
  isCompleted: boolean;
  lastWatchedAt: number; // timestamp
}

const STORAGE_KEY = "vocab_film_watch_progress";

type WatchProgressDatabase = Record<string, Record<string, EpisodeProgress>>; // filmId -> episodeId -> EpisodeProgress

export function getAllWatchProgress(): WatchProgressDatabase {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Lỗi đọc tiến độ xem phim:", e);
    return {};
  }
}

export function getFilmProgress(filmId: string): Record<string, EpisodeProgress> {
  const all = getAllWatchProgress();
  return all[filmId] || {};
}

export function getEpisodeProgress(filmId: string, episodeId: string): EpisodeProgress | null {
  const filmProg = getFilmProgress(filmId);
  return filmProg[episodeId] || null;
}

export function saveEpisodeProgress(
  filmId: string, 
  episodeId: string, 
  currentTime: number, 
  duration: number
): EpisodeProgress {
  if (typeof window === "undefined" || !filmId || !episodeId) {
    return {
      currentTime,
      duration,
      progressPercent: 0,
      isCompleted: false,
      lastWatchedAt: Date.now()
    };
  }

  const all = getAllWatchProgress();
  if (!all[filmId]) {
    all[filmId] = {};
  }

  const safeDuration = duration > 0 ? duration : 1;
  const progressPercent = Math.min(100, Math.round((currentTime / safeDuration) * 100));
  const isCompleted = progressPercent >= 90;

  const prog: EpisodeProgress = {
    currentTime: Math.max(0, currentTime),
    duration: safeDuration,
    progressPercent,
    isCompleted,
    lastWatchedAt: Date.now()
  };

  all[filmId][episodeId] = prog;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch (e) {
    console.error("Lỗi lưu tiến độ xem phim:", e);
  }

  return prog;
}

export function markEpisodeCompleted(filmId: string, episodeId: string, duration = 600): void {
  saveEpisodeProgress(filmId, episodeId, duration, duration);
}

export function getLastWatchedEpisodeId(filmId: string): string | null {
  const filmProg = getFilmProgress(filmId);
  const entries = Object.entries(filmProg);
  if (entries.length === 0) return null;

  // Sắp xếp theo lastWatchedAt mới nhất
  entries.sort((a, b) => b[1].lastWatchedAt - a[1].lastWatchedAt);
  return entries[0][0];
}

export function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const formattedMins = mins < 10 ? `0${mins}` : `${mins}`;
  const formattedSecs = secs < 10 ? `0${secs}` : `${secs}`;
  return `${formattedMins}:${formattedSecs}`;
}
