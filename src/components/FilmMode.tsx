import React, { useState, useEffect, useMemo, useRef } from "react";
import { filmsData, FilmItem } from "../data_films";
import FilmPlayer from "./FilmPlayer";
import { 
  ArrowLeft, Search, Sparkles, Volume2, 
  CheckCircle2, XCircle, Bookmark, BookmarkCheck,
  ChevronRight, Compass, HelpCircle, Flame, Play, Film,
  Globe, RotateCcw, Award, Check, Filter, Tv, Eye,
  Layers, ExternalLink, Loader2, Copy
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getFilmProgress } from "../services/filmWatchTracker";
import { 
  fetchNguoncFilmDetail, 
  searchNguoncFilms, 
  getEnrichedEpisodesFromNguonc, 
  createFilmItemFromNguoncMovie,
  NguoncSearchItem 
} from "../services/nguoncService";

interface FilmModeProps {
  onBack: () => void;
}

const FAVORITES_STORAGE_KEY = "vocab_favorite_films";
const COMPLETED_FILMS_STORAGE_KEY = "vocab_completed_films";

// Các từ khóa tìm kiếm phim nhanh phổ biến trên Nguồn C
const QUICK_SEARCH_CHIPS = [
  "Harry Potter", "Marvel", "Spider-Man", "Wednesday", 
  "Loki", "Sherlock", "Avatar", "Batman", "Stranger Things", 
  "Friends", "Fast & Furious", "Doctor Strange", "Top Gun"
];

export default function FilmMode({ onBack }: FilmModeProps) {
  const [selectedFilm, setSelectedFilm] = useState<FilmItem | null>(null);
  const [activeTab, setActiveTab] = useState<"watch" | "vocab" | "quotes" | "quiz">("watch");
  
  // Catalog view: 24 Phim Tuyển Chọn vs Kho Nguồn C Trực Tuyến
  const [catalogSource, setCatalogSource] = useState<"curated" | "nguonc_online">("curated");

  // Filters for Curated Catalog
  const [selectedType, setSelectedType] = useState<"all" | "animation" | "live_action">("all");
  const [selectedLevel, setSelectedLevel] = useState<"all" | "A1-A2" | "B1-B2" | "C1-C2">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showGuide, setShowGuide] = useState(false);

  // Online NguonC search state
  const [onlineKeyword, setOnlineKeyword] = useState("");
  const [onlineResults, setOnlineResults] = useState<NguoncSearchItem[]>([]);
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [isLoadingOnlineFilm, setIsLoadingOnlineFilm] = useState(false);
  const [onlineSearchSearched, setOnlineSearchSearched] = useState(false);

  // Loading state when enriching curated film with NguonC full episodes
  const [isEnrichingFilm, setIsEnrichingFilm] = useState(false);

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
  const [quizFilter, setQuizFilter] = useState<"all" | "unanswered" | "answered" | "wrong">("all");
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const quizContainerRef = useRef<HTMLDivElement | null>(null);

  // Vocab search filter
  const [vocabSearch, setVocabSearch] = useState("");
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

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

  // Initial popular search on NguonC when switching to online tab
  useEffect(() => {
    if (catalogSource === "nguonc_online" && onlineResults.length === 0 && !onlineSearchSearched) {
      executeOnlineSearch("Harry Potter");
    }
  }, [catalogSource]);

  const executeOnlineSearch = async (kw: string) => {
    if (!kw || !kw.trim()) return;
    setIsSearchingOnline(true);
    setOnlineSearchSearched(true);
    try {
      const res = await searchNguoncFilms(kw.trim());
      setOnlineResults(res || []);
    } catch (err) {
      console.warn("Lỗi tìm kiếm Nguồn C:", err);
      setOnlineResults([]);
    } finally {
      setIsSearchingOnline(false);
    }
  };

  const handleSelectCuratedFilm = async (film: FilmItem) => {
    setSelectedFilm(film);
    setActiveTab("watch");
    setQuizAnswers({});
    setQuizSubmitted({});
    setActiveQuizIndex(0);
    setQuizFilter("all");
    setVocabSearch("");

    // Tự động tải danh sách tập đầy đủ từ Nguồn C (VD: Suits 16 tập, HIMYM 24 tập,...)
    setIsEnrichingFilm(true);
    try {
      const enriched = await getEnrichedEpisodesFromNguonc(film.id, film.episodes);
      if (enriched && enriched.episodes && enriched.episodes.length > 0) {
        setSelectedFilm(prev => {
          if (!prev || prev.id !== film.id) return prev;
          return {
            ...prev,
            episodes: enriched.episodes
          };
        });
      }
    } catch (err) {
      console.warn("Không thể hợp nhất tập phim Nguồn C:", err);
    } finally {
      setIsEnrichingFilm(false);
    }
  };

  const handleSelectOnlineFilm = async (item: NguoncSearchItem) => {
    setIsLoadingOnlineFilm(true);
    try {
      const detail = await fetchNguoncFilmDetail(item.slug);
      if (detail) {
        const generatedFilm = createFilmItemFromNguoncMovie(detail);
        setSelectedFilm(generatedFilm);
        setActiveTab("watch");
        setQuizAnswers({});
        setQuizSubmitted({});
        setActiveQuizIndex(0);
        setQuizFilter("all");
        setVocabSearch("");
      }
    } catch (err) {
      console.warn("Lỗi tải chi tiết phim Nguồn C:", err);
    } finally {
      setIsLoadingOnlineFilm(false);
    }
  };

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedWord(text);
    setTimeout(() => setCopiedWord(null), 2000);
  };

  // Filtered films for curated catalog
  const filteredFilms = useMemo(() => {
    return filmsData.filter(film => {
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
  }, [selectedType, selectedLevel, searchQuery]);

  const handleSelectQuizOption = (qId: string, option: string) => {
    if (quizSubmitted[qId]) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: option }));
    setQuizSubmitted(prev => ({ ...prev, [qId]: true }));
  };

  const handleResetQuiz = () => {
    if (window.confirm("Bạn có chắc muốn làm lại toàn bộ câu hỏi thử thách của phim này không?")) {
      setQuizAnswers({});
      setQuizSubmitted({});
      setActiveQuizIndex(0);
    }
  };

  // Quiz Stats for Selected Film
  const currentQuizList = selectedFilm?.quiz || [];
  const totalQuizCount = currentQuizList.length;
  const answeredQuizCount = Object.keys(quizSubmitted).length;
  const correctQuizCount = currentQuizList.filter(q => quizSubmitted[q.id] && quizAnswers[q.id] === q.answer).length;
  const wrongQuizCount = answeredQuizCount - correctQuizCount;
  const accuracyPercent = answeredQuizCount > 0 ? Math.round((correctQuizCount / answeredQuizCount) * 100) : 0;
  const isQuizAllDone = totalQuizCount > 0 && answeredQuizCount === totalQuizCount;

  // Filtered quiz list according to quizFilter
  const filteredQuizQuestions = useMemo(() => {
    if (!selectedFilm) return [];
    return selectedFilm.quiz.filter(q => {
      const isSub = quizSubmitted[q.id];
      const isCorrect = quizAnswers[q.id] === q.answer;
      if (quizFilter === "unanswered") return !isSub;
      if (quizFilter === "answered") return isSub;
      if (quizFilter === "wrong") return isSub && !isCorrect;
      return true;
    });
  }, [selectedFilm, quizSubmitted, quizAnswers, quizFilter]);

  // Filtered vocabularies
  const filteredVocabularies = useMemo(() => {
    if (!selectedFilm) return [];
    if (!vocabSearch.trim()) return selectedFilm.keyVocabularies;
    const q = vocabSearch.toLowerCase().trim();
    return selectedFilm.keyVocabularies.filter(v => 
      v.word.toLowerCase().includes(q) || 
      v.meaningVi.toLowerCase().includes(q) ||
      v.exampleSentence.toLowerCase().includes(q)
    );
  }, [selectedFilm, vocabSearch]);

  return (
    <div className="flex flex-col min-h-full bg-slate-50 text-slate-800">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200 px-4 md:px-8 py-3.5 sticky top-0 z-30 shadow-2xs">
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
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
              title="Quay lại"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xl">🎬</span>
                <h1 className="text-base sm:text-lg md:text-xl font-black text-slate-900 truncate">
                  {selectedFilm ? selectedFilm.title : "Học Tiếng Anh Qua Phim (Films & Series)"}
                </h1>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-indigo-200">
                  Nguồn C Stream Full HD
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                {selectedFilm 
                  ? `${selectedFilm.titleVi} • ${selectedFilm.levelLabel} • ${selectedFilm.accent}`
                  : "Phim hoạt hình & phim thật với tập chiếu đầy đủ, phụ đề, từ vựng và 20 câu hỏi thử thách"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-start sm:justify-end flex-wrap">
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

      <div className="max-w-7xl mx-auto w-full p-3 sm:p-4 md:p-6 lg:p-8 flex-1">
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
                  <span className="text-xs text-indigo-300 font-medium">Bí quyết của người đa ngôn ngữ</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-2">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      1
                    </div>
                    <h4 className="font-bold text-sm text-amber-200 mb-1">Xem với Vietsub (Hiểu cốt truyện)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Lần đầu xem để nắm trọn bối cảnh, câu chuyện và cảm xúc của nhân vật mà không bị áp lực từ mới.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-sky-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      2
                    </div>
                    <h4 className="font-bold text-sm text-sky-200 mb-1">Xem với Engsub (Bắt từ mới & Slang)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Bật phụ đề tiếng Anh. Xem lại tab Từ vựng & Câu thoại để hiểu cách bản xứ dùng thành ngữ trong đời sống.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      3
                    </div>
                    <h4 className="font-bold text-sm text-emerald-200 mb-1">Tắt Sub (Thử thách đôi tai)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Tắt hoàn toàn phụ đề. Tập trung lắng nghe ngữ điệu, nối âm, nuốt âm và phản xạ bắt từ tức thì.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-xs">
                    <div className="w-8 h-8 rounded-xl bg-rose-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2.5">
                      4
                    </div>
                    <h4 className="font-bold text-sm text-rose-200 mb-1">Thử thách 20 câu hỏi (Quiz)</h4>
                    <p className="text-xs text-indigo-100/80 leading-relaxed">
                      Chinh phục 20 câu hỏi tình huống thực tế để kiểm tra khả năng nhớ từ, ngữ pháp và ngữ cảnh giao tiếp!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================== */}
        {/* MAIN CATALOG VIEW (WHEN NO FILM IS CURRENTLY SELECTED)        */}
        {/* ============================================================== */}
        {!selectedFilm && (
          <div className="space-y-6">
            {/* Catalog Switcher: 24 Curated Films vs NguonC Online Discovery */}
            <div className="bg-white rounded-3xl p-2 border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setCatalogSource("curated")}
                className={`flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                  catalogSource === "curated"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Award size={17} />
                <span>24 Phim Tiếng Anh Tuyển Chọn (3 Cấp Độ)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  catalogSource === "curated" ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-700"
                }`}>
                  20 Thử Thách/Phim
                </span>
              </button>

              <button
                onClick={() => setCatalogSource("nguonc_online")}
                className={`flex-1 py-3 px-4 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                  catalogSource === "nguonc_online"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Globe size={17} />
                <span>Kho Phim Nguồn C Trực Tuyến (phim.nguonc.com)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  catalogSource === "nguonc_online" ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-800"
                }`}>
                  Live API
                </span>
              </button>
            </div>

            {/* TAB 1: CURATED CATALOG */}
            {catalogSource === "curated" && (
              <div className="space-y-5">
                {/* Search and Filters Bar */}
                <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search box */}
                    <div className="relative flex-1">
                      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Tìm kiếm phim (Nemo, Suits, HIMYM, Friends, Oppenheimer, Sherlock...)..."
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
                      Mọi trình độ (24 phim)
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
                      Level A1-A2 (8 phim)
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
                      Level B1-B2 (8 phim)
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
                      Level C1-C2 (8 phim)
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
                        onClick={() => handleSelectCuratedFilm(film)}
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
                              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md font-bold">
                                Nguồn C Full HD
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
                              <span>{film.keyVocabularies.length} từ</span>
                              <span>•</span>
                              <span className="text-rose-600 font-black">{film.quiz.length} câu đố</span>
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

            {/* TAB 2: NGUON C ONLINE MOVIE DISCOVERY */}
            {catalogSource === "nguonc_online" && (
              <div className="space-y-5">
                {/* Search Bar for NguonC Online */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                        <Globe className="text-emerald-600" size={18} />
                        <span>Tìm Kiếm & Khám Phá Trực Tiếp Từ phim.nguonc.com</span>
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Tìm bất kỳ bộ phim điện ảnh hoặc phim truyền hình nhiều tập nào để xem và học tiếng Anh ngay lập tức
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      API phim.nguonc.com
                    </span>
                  </div>

                  <form 
                    onSubmit={e => {
                      e.preventDefault();
                      executeOnlineSearch(onlineKeyword);
                    }}
                    className="flex flex-col sm:flex-row gap-2.5"
                  >
                    <div className="relative flex-1">
                      <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={onlineKeyword}
                        onChange={e => setOnlineKeyword(e.target.value)}
                        placeholder="Nhập tên phim tiếng Anh hoặc tiếng Việt (vd: Harry Potter, Avengers, Sherlock, Spider-Man)..."
                        className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-slate-200 focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSearchingOnline || !onlineKeyword.trim()}
                      className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md shrink-0 cursor-pointer"
                    >
                      {isSearchingOnline ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Đang tìm...</span>
                        </>
                      ) : (
                        <>
                          <Search size={16} />
                          <span>Tìm kiếm</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Quick Search Suggestion Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Gợi ý phim hay học tiếng Anh:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {QUICK_SEARCH_CHIPS.map(chip => (
                        <button
                          key={chip}
                          onClick={() => {
                            setOnlineKeyword(chip);
                            executeOnlineSearch(chip);
                          }}
                          className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all border ${
                            onlineKeyword === chip
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-800"
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Loading state */}
                {isLoadingOnlineFilm && (
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-3 shadow-sm">
                    <Loader2 size={32} className="animate-spin text-emerald-600 mx-auto" />
                    <h4 className="text-base font-black text-slate-900">
                      Đang kết nối API Nguồn C & Chuẩn bị bài học...
                    </h4>
                    <p className="text-xs text-slate-500">
                      Đang lấy toàn bộ tập phim, tạo bộ từ vựng và 20 câu hỏi thử thách phản xạ tiếng Anh.
                    </p>
                  </div>
                )}

                {/* Online Search Results Grid */}
                {!isLoadingOnlineFilm && onlineResults.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-600 px-1 font-bold">
                      <span>Tìm thấy {onlineResults.length} kết quả từ Nguồn C:</span>
                      <span className="text-emerald-700 font-semibold">Bấm vào phim để mở toàn bộ tập & bắt đầu học</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {onlineResults.map(item => (
                        <div
                          key={item.slug}
                          onClick={() => handleSelectOnlineFilm(item)}
                          className="bg-white rounded-3xl border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                        >
                          {/* Image or Banner */}
                          <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                            {item.poster_url || item.thumb_url ? (
                              <img
                                src={item.poster_url || item.thumb_url}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                loading="lazy"
                                onError={(e) => {
                                  // Fallback gradient if poster blocked
                                  (e.target as HTMLElement).style.display = "none";
                                }}
                              />
                            ) : null}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-between">
                              <div className="flex items-center justify-between">
                                <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                                  {item.quality || "HD"} • {item.language || "Vietsub"}
                                </span>
                                <span className="bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                                  {item.year}
                                </span>
                              </div>

                              <div>
                                <h3 className="text-base font-black text-white drop-shadow-md leading-snug line-clamp-1">
                                  {item.original_name || item.name}
                                </h3>
                                <p className="text-xs text-emerald-300 font-semibold truncate mt-0.5">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Body */}
                          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs">
                                <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">
                                  {item.total_episodes > 1 ? `${item.total_episodes} Tập full` : "Bản Full Movie"}
                                </span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-500 font-medium">{item.time || "Trọn bộ"}</span>
                              </div>

                              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                                {item.description || "Thưởng thức bộ phim chất lượng cao từ Nguồn C cùng bài tập tiếng Anh tương tác."}
                              </p>
                            </div>

                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                              <span className="text-emerald-700 font-bold flex items-center gap-1">
                                <Play size={13} className="fill-emerald-700" />
                                <span>Xem & Học Tiếng Anh</span>
                              </span>
                              <ChevronRight size={16} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Empty state if searched but nothing found */}
                {!isLoadingOnlineFilm && onlineSearchSearched && onlineResults.length === 0 && !isSearchingOnline && (
                  <div className="bg-white rounded-3xl p-10 border border-slate-200 text-center space-y-3">
                    <p className="text-3xl">🔍</p>
                    <h4 className="text-base font-black text-slate-900">Không tìm thấy phim phù hợp</h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Hãy thử tìm với từ khóa ngắn gọn hơn (vd: "Harry", "Spider", "Loki", "Marvel") hoặc chọn từ danh sách 24 phim tuyển chọn có sẵn.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* DETAILED FILM STUDY VIEW (WHEN A FILM IS SELECTED)             */}
        {/* ============================================================== */}
        {selectedFilm && (
          <div className="space-y-6">
            {/* Film Overview Hero Box */}
            <div className={`bg-gradient-to-r ${selectedFilm.bannerGradient} rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 text-white shadow-xl relative overflow-hidden`}>
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
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 flex items-center gap-1 shadow-xs">
                      <Film size={12} />
                      <span>{selectedFilm.episodes.length} Tập Nguồn C Full HD</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight break-words">
                    {selectedFilm.title}
                  </h2>
                  <p className="text-base text-white/90 font-medium">
                    {selectedFilm.titleVi} ({selectedFilm.year})
                  </p>

                  <p className="text-xs sm:text-sm text-indigo-100 italic bg-black/20 p-2.5 rounded-xl border border-white/10 max-w-2xl mt-1">
                    "{selectedFilm.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-3xl leading-relaxed">
                    {selectedFilm.summaryVi}
                  </p>
                </div>

                {/* Action Buttons in Hero */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <button
                    onClick={() => setActiveTab("watch")}
                    className="w-full sm:w-auto px-5 py-3 md:py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 min-h-[44px]"
                  >
                    <Play size={15} className="fill-slate-950" />
                    <span>Xem phim & Các tập ({selectedFilm.episodes.length})</span>
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
                    ? "bg-rose-600 text-white shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>🎯</span>
                <span>Thử thách ({selectedFilm.quiz.length} câu)</span>
              </button>
            </div>

            {/* ============================================================== */}
            {/* SUB-TAB 0: WATCH FILM & EPISODES                               */}
            {/* ============================================================== */}
            {activeTab === "watch" && (
              <div className="space-y-4">
                {isEnrichingFilm && (
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 flex items-center gap-2">
                    <Loader2 size={15} className="animate-spin text-indigo-600" />
                    <span>Đang đồng bộ danh sách tập trọn vẹn từ phim.nguonc.com...</span>
                  </div>
                )}
                <FilmPlayer film={selectedFilm} />
              </div>
            )}

            {/* ============================================================== */}
            {/* SUB-TAB 1: VOCABULARY LIST                                     */}
            {/* ============================================================== */}
            {activeTab === "vocab" && (
              <div className="space-y-4">
                {/* Search & Study Tip */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-72">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={vocabSearch}
                      onChange={e => setVocabSearch(e.target.value)}
                      placeholder="Tìm từ vựng trong phim..."
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-indigo-400"
                    />
                  </div>

                  <div className="text-xs text-amber-900 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200 flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-base">💡</span>
                    <span>Bấm vào loa để nghe phát âm từ và câu ví dụ ngữ cảnh!</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredVocabularies.map((v, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs hover:border-indigo-300 transition-all space-y-3 relative group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-black text-slate-900">{v.word}</h4>
                            <button
                              onClick={() => speakEnglish(v.word)}
                              className="p-1.5 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                              title="Phát âm từ"
                            >
                              <Volume2 size={16} />
                            </button>
                            <button
                              onClick={() => copyToClipboard(v.word)}
                              className="p-1.5 rounded-full bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
                              title="Sao chép từ"
                            >
                              {copiedWord === v.word ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                            </button>
                          </div>
                          <span className="text-xs text-slate-400 font-mono font-medium">{v.phonetic}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                          Từ #{i + 1}
                        </span>
                      </div>

                      <div className="p-3 bg-emerald-50 text-emerald-950 font-bold text-xs sm:text-sm rounded-2xl border border-emerald-100">
                        {v.meaningVi}
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">
                            Câu thoại ngữ cảnh phim:
                          </span>
                          <button
                            onClick={() => speakEnglish(v.exampleSentence)}
                            className="text-[10px] text-indigo-600 font-bold hover:underline flex items-center gap-1"
                          >
                            <Volume2 size={12} />
                            <span>Nghe cả câu</span>
                          </button>
                        </div>
                        <p className="font-semibold text-slate-900 italic leading-relaxed">
                          "{v.exampleSentence}"
                        </p>
                        <p className="text-slate-500 leading-relaxed">{v.exampleVi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* SUB-TAB 2: ICONIC QUOTES                                       */}
            {/* ============================================================== */}
            {activeTab === "quotes" && (
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 text-xs text-purple-950 flex items-start gap-3">
                  <span className="text-xl shrink-0">✨</span>
                  <div>
                    <span className="font-bold">Học qua câu thoại kinh điển: </span>
                    Luyện kỹ thuật Shadowing (nhại giọng theo ngữ điệu và cảm xúc của nhân vật) giúp đôi tai nhạy bén và giọng nói tự nhiên hơn.
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedFilm.iconicQuotes.map((q, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-sm font-black">
                            {q.character.charAt(0)}
                          </span>
                          <div>
                            <span className="font-bold text-sm text-slate-900">{q.character}</span>
                            <p className="text-[11px] text-slate-400">Nhân vật trong {selectedFilm.title}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => speakEnglish(q.en)}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs transition-colors border border-indigo-200"
                          title="Nghe câu thoại"
                        >
                          <Volume2 size={16} />
                          <span>Nghe thoại</span>
                        </button>
                      </div>

                      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-indigo-50/50 rounded-2xl border border-indigo-100">
                        <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-relaxed">
                          "{q.en}"
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-800 mt-2">
                          "{q.vi}"
                        </p>
                      </div>

                      <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80 text-xs text-amber-950 leading-relaxed">
                        <span className="font-bold">Phân tích ngôn ngữ & Ngữ pháp: </span>
                        <span>{q.explanationVi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ============================================================== */}
            {/* SUB-TAB 3: INTERACTIVE CHALLENGE QUIZ (AT LEAST 20 QUESTIONS)  */}
            {/* ============================================================== */}
            {activeTab === "quiz" && (
              <div className="space-y-6" ref={quizContainerRef}>
                {/* Quiz Summary Stats Card & Progress */}
                <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎯</span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900">
                          Thử Thách Phản Xạ Ngôn Ngữ & Ngữ Cảnh ({totalQuizCount} câu)
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Điền từ vào câu thoại, xác định cấu trúc ngữ pháp và hiểu sâu sắc tình huống trong phim
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetQuiz}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
                        title="Làm lại từ đầu"
                      >
                        <RotateCcw size={13} />
                        <span>Làm lại</span>
                      </button>
                    </div>
                  </div>

                  {/* Progress Stats Numbers */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-xs text-slate-500 font-bold">Tiến độ</span>
                      <p className="text-lg font-black text-slate-900">
                        {answeredQuizCount} / {totalQuizCount}
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <span className="text-xs text-emerald-700 font-bold">Số câu đúng</span>
                      <p className="text-lg font-black text-emerald-700">{correctQuizCount}</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100">
                      <span className="text-xs text-rose-700 font-bold">Số câu sai</span>
                      <p className="text-lg font-black text-rose-700">{wrongQuizCount}</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100">
                      <span className="text-xs text-indigo-700 font-bold">Độ chính xác</span>
                      <p className="text-lg font-black text-indigo-700">{accuracyPercent}%</p>
                    </div>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(answeredQuizCount / totalQuizCount) * 100}%` }}
                    />
                  </div>

                  {/* 20-Question Number Jump Grid */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-600">Nhảy nhanh đến câu hỏi:</span>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Đúng
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Sai
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" /> Chưa làm
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {currentQuizList.map((q, idx) => {
                        const isSub = quizSubmitted[q.id];
                        const isRight = quizAnswers[q.id] === q.answer;
                        const isActive = activeQuizIndex === idx;

                        let pillClass = "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
                        if (isSub) {
                          if (isRight) {
                            pillClass = "bg-emerald-500 text-white border-emerald-600 font-black shadow-2xs";
                          } else {
                            pillClass = "bg-rose-500 text-white border-rose-600 font-black shadow-2xs";
                          }
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              setActiveQuizIndex(idx);
                              const el = document.getElementById(`quiz-item-${q.id}`);
                              el?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }}
                            className={`w-8 h-8 rounded-xl border text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${pillClass} ${
                              isActive ? "ring-2 ring-indigo-500 ring-offset-1" : ""
                            }`}
                            title={`Câu ${idx + 1}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto scrollbar-none">
                    <span className="text-xs font-bold text-slate-400 shrink-0">Lọc câu:</span>
                    <button
                      onClick={() => setQuizFilter("all")}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                        quizFilter === "all"
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Tất cả ({totalQuizCount})
                    </button>
                    <button
                      onClick={() => setQuizFilter("unanswered")}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                        quizFilter === "unanswered"
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Chưa làm ({totalQuizCount - answeredQuizCount})
                    </button>
                    <button
                      onClick={() => setQuizFilter("answered")}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                        quizFilter === "answered"
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Đã làm ({answeredQuizCount})
                    </button>
                    <button
                      onClick={() => setQuizFilter("wrong")}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                        quizFilter === "wrong"
                          ? "bg-rose-600 text-white border-rose-600"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Câu sai ({wrongQuizCount})
                    </button>
                  </div>
                </div>

                {/* Completion Celebration Banner when all 20 questions are done */}
                {isQuizAllDone && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 shadow-xl text-center space-y-4 border border-indigo-400/30"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center text-3xl font-black mx-auto shadow-lg">
                      🏆
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                        Tuyệt Vời! Bạn Đã Hoàn Thành Trọn Vẹn {totalQuizCount}/{totalQuizCount} Câu Thử Thách!
                      </h3>
                      <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                        Kết quả: {correctQuizCount} câu đúng • Độ chính xác {accuracyPercent}%
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => toggleCompleted(selectedFilm.id)}
                        className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md"
                      >
                        <CheckCircle2 size={16} />
                        <span>Đánh dấu đã hoàn thành phim này</span>
                      </button>

                      <button
                        onClick={handleResetQuiz}
                        className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
                      >
                        <RotateCcw size={15} />
                        <span>Làm lại để đạt điểm tuyệt đối</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Questions List */}
                <div className="space-y-5">
                  {filteredQuizQuestions.map((q) => {
                    const originalIndex = currentQuizList.findIndex(item => item.id === q.id);
                    const isSubmitted = quizSubmitted[q.id];
                    const selected = quizAnswers[q.id];
                    const isRight = selected === q.answer;

                    return (
                      <div
                        id={`quiz-item-${q.id}`}
                        key={q.id}
                        className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all space-y-4 shadow-sm ${
                          isSubmitted
                            ? isRight
                              ? "border-emerald-300 ring-2 ring-emerald-500/10"
                              : "border-rose-300 ring-2 ring-rose-500/10"
                            : "border-slate-200/90 hover:border-indigo-300"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-black shrink-0">
                              {originalIndex + 1}
                            </span>
                            <span className="text-xs font-semibold text-slate-500 italic">
                              {q.dialogueContext}
                            </span>
                          </div>

                          {isSubmitted && (
                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1 ${
                              isRight ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                            }`}>
                              {isRight ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                              <span>{isRight ? "Chính xác" : "Chưa đúng"}</span>
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
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
                                btnStyle = "bg-rose-500 text-white border-rose-600 font-bold";
                              } else {
                                btnStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectQuizOption(q.id, opt)}
                                className={`p-3.5 rounded-2xl border text-left transition-all text-xs sm:text-sm font-semibold flex items-center justify-between min-h-[44px] cursor-pointer ${btnStyle}`}
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
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                              isRight
                                ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                                : "bg-rose-50 border-rose-200 text-rose-950"
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
                                  <HelpCircle size={15} className="text-rose-600" />
                                  <span>Đáp án đúng là: "{q.answer}"</span>
                                </>
                              )}
                            </div>
                            <p className="mt-1">{q.explanationVi}</p>
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
