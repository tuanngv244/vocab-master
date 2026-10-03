import { useState } from "react";
import { englishTenses, TenseDetail } from "../data_tenses";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, Volume2, CheckCircle2, XCircle, Sparkles, 
  Clock, AlertTriangle, Lightbulb, Check, Tag
} from "lucide-react";

interface TensesModeProps {
  onBack: () => void;
}

export default function TensesMode({ onBack }: TensesModeProps) {
  const [selectedTense, setSelectedTense] = useState<TenseDetail>(englishTenses[0]);
  const [categoryFilter, setCategoryFilter] = useState<"all" | "present" | "past" | "future">("all");
  const [activeTab, setActiveTab] = useState<"theory" | "practice">("theory");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  const filteredTenses = englishTenses.filter(t => {
    if (categoryFilter === "all") return true;
    return t.category === categoryFilter;
  });

  const speakText = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectOption = (quizId: string, option: string) => {
    if (quizSubmitted[quizId]) return;
    setQuizAnswers(prev => ({ ...prev, [quizId]: option }));
  };

  const handleSubmitQuiz = (quizId: string) => {
    setQuizSubmitted(prev => ({ ...prev, [quizId]: true }));
  };

  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      {/* Top Header - Compact & Responsive */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <button 
            onClick={onBack}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors shrink-0"
            title="Quay lại"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight truncate">12 Thì Tiếng Anh</h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-blue-100 text-blue-800 border border-blue-200 shrink-0">
                12 Tenses + Near Future
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block truncate">
              Trục thời gian tương tác, 3 thể công thức (+/-/?), dấu hiệu nhận biết & bài tập thực tế
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "theory" ? "bg-white text-blue-700 shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            ⏳ <span className="hidden sm:inline">Trục thời gian & Công thức</span><span className="sm:hidden">Lý thuyết</span>
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "practice" ? "bg-blue-600 text-white shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            🎯 <span className="hidden sm:inline">Luyện tập thực hành</span><span className="sm:hidden">Luyện tập ({selectedTense.quiz.length})</span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto w-full p-3.5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        {/* Mobile Horizontal Tense Scroller (< lg) */}
        <div className="lg:hidden space-y-2">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setCategoryFilter("all")}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${categoryFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setCategoryFilter("present")}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${categoryFilter === "present" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Hiện tại
            </button>
            <button
              onClick={() => setCategoryFilter("past")}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${categoryFilter === "past" ? "bg-amber-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Quá khứ
            </button>
            <button
              onClick={() => setCategoryFilter("future")}
              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${categoryFilter === "future" ? "bg-blue-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Tương lai
            </button>
          </div>

          {/* Tenses chip scroller */}
          <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
            {filteredTenses.map(tense => {
              const isActive = selectedTense.id === tense.id;
              return (
                <button
                  key={tense.id}
                  onClick={() => {
                    setSelectedTense(tense);
                    setQuizAnswers({});
                    setQuizSubmitted({});
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{tense.icon}</span>
                  <span className="truncate max-w-[150px]">{tense.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Left Sidebar: Tenses list with category filters (>= lg) */}
        <div className="hidden lg:block lg:w-72 shrink-0">
          {/* Category Filter Chips */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 mb-2.5">
            <button
              onClick={() => setCategoryFilter("all")}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all ${categoryFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setCategoryFilter("present")}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all ${categoryFilter === "present" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Hiện tại
            </button>
            <button
              onClick={() => setCategoryFilter("past")}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all ${categoryFilter === "past" ? "bg-amber-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Quá khứ
            </button>
            <button
              onClick={() => setCategoryFilter("future")}
              className={`flex-1 py-1 text-[10px] font-bold rounded-lg transition-all ${categoryFilter === "future" ? "bg-blue-600 text-white shadow-xs" : "text-slate-500"}`}
            >
              Tương lai
            </button>
          </div>

          <div className="space-y-1.5 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 scrollbar-thin">
            {filteredTenses.map(tense => {
              const isActive = selectedTense.id === tense.id;
              return (
                <button
                  key={tense.id}
                  onClick={() => {
                    setSelectedTense(tense);
                    setQuizAnswers({});
                    setQuizSubmitted({});
                  }}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                    isActive 
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                      : "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span className="text-xl shrink-0 p-1 bg-white/10 rounded-lg">{tense.icon}</span>
                  <div className="min-w-0 flex-1">
                    <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full inline-block mb-0.5 ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      {tense.badge}
                    </span>
                    <div className={`font-bold text-xs truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                      {tense.name}
                    </div>
                    <div className={`text-[11px] truncate mt-0.5 ${isActive ? "text-blue-100" : "text-slate-500"}`}>
                      {tense.nameVi}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTense.id + activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              {/* Header Box with Timeline and Formula */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-2xl sm:text-3xl">{selectedTense.icon}</span>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 truncate">{selectedTense.name}</h2>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 truncate">{selectedTense.nameVi}</p>
                  </div>
                </div>

                {/* Timeline Visualizer - Responsive on mobile */}
                <div className="mt-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white overflow-hidden">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-blue-300 mb-3">
                    <Clock size={14} />
                    <span>TRỤC THỜI GIAN HÀNH ĐỘNG</span>
                  </div>

                  {/* Visual Bar */}
                  <div className="relative py-4 px-2">
                    <div className="h-2 w-full bg-slate-700 rounded-full relative">
                      {/* Past marker */}
                      <div className="absolute left-0 -top-5 text-[9px] sm:text-[10px] font-bold text-slate-400">QUÁ KHỨ</div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-500"></div>

                      {/* Now marker */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-[9px] sm:text-[10px] font-black text-amber-400 whitespace-nowrap">HIỆN TẠI (NOW)</div>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 ring-4 ring-amber-400/20"></div>

                      {/* Future marker */}
                      <div className="absolute right-0 -top-5 text-[9px] sm:text-[10px] font-bold text-slate-400">TƯƠNG LAI</div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-500"></div>

                      {/* Active Span indicators */}
                      {selectedTense.timelinePoint === "now" && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-400/30 animate-ping"></div>
                      )}
                      {selectedTense.timelinePoint === "past" && (
                        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-red-400/40 animate-pulse"></div>
                      )}
                      {selectedTense.timelinePoint === "future" && (
                        <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-400/40 animate-pulse"></div>
                      )}
                      {selectedTense.timelinePoint === "span-past-now" && (
                        <div className="absolute left-1/4 right-1/2 top-0 bottom-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
                      )}
                      {selectedTense.timelinePoint === "span-past" && (
                        <div className="absolute left-1/8 right-2/3 top-0 bottom-0 bg-red-400 rounded-full"></div>
                      )}
                      {selectedTense.timelinePoint === "span-future" && (
                        <div className="absolute left-2/3 right-1/8 top-0 bottom-0 bg-blue-400 rounded-full"></div>
                      )}
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 mt-2 font-medium bg-white/10 p-2 sm:p-2.5 rounded-lg leading-relaxed">
                    💡 <strong>Ý nghĩa thời gian:</strong> {selectedTense.timelineLabel}
                  </p>
                </div>

                {/* 3 Forms Formula Grid - Responsive stacked on mobile */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] font-black uppercase text-emerald-800 tracking-wider block mb-0.5">
                      (+) Khẳng định
                    </span>
                    <p className="font-mono text-xs font-bold text-emerald-950 break-words">
                      {selectedTense.formula.positive}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200">
                    <span className="text-[10px] font-black uppercase text-rose-800 tracking-wider block mb-0.5">
                      (-) Phủ định
                    </span>
                    <p className="font-mono text-xs font-bold text-rose-950 break-words">
                      {selectedTense.formula.negative}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[10px] font-black uppercase text-blue-800 tracking-wider block mb-0.5">
                      (?) Nghi vấn
                    </span>
                    <p className="font-mono text-xs font-bold text-blue-950 break-words">
                      {selectedTense.formula.question}
                    </p>
                  </div>
                </div>
              </div>

              {activeTab === "theory" && (
                <>
                  {/* Detailed Usages with Audio */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-blue-600" />
                      <span>Các Cách Dùng Chi Tiết & Ngữ Cảnh</span>
                    </h3>
                    <div className="space-y-3">
                      {selectedTense.usages.map((use, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 inline-block">
                            Cách dùng {idx + 1}: {use.context}
                          </span>
                          <div className="flex items-start justify-between gap-2.5 pt-0.5">
                            <div className="min-w-0 flex-1">
                              <p className="text-slate-900 font-bold text-xs sm:text-sm leading-snug break-words">{use.exampleEn}</p>
                              <p className="text-slate-600 text-[11px] sm:text-xs mt-0.5">{use.exampleVi}</p>
                            </div>
                            <button
                              onClick={() => speakText(use.exampleEn)}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-slate-200 text-blue-600 hover:bg-blue-50 flex items-center justify-center shrink-0 shadow-2xs transition-colors"
                              title="Nghe phát âm"
                            >
                              <Volume2 size={15} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signal Words */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-2 flex items-center gap-2">
                      <Tag size={16} className="text-indigo-600" />
                      <span>Dấu Hiệu Nhận Biết Đặc Trưng</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 mb-2.5">
                      Từ khóa báo hiệu thì {selectedTense.nameVi}:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTense.signals.map((sig, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-xs">
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tips & Pitfalls */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-200/80 bg-amber-50/20 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-amber-900 mb-3 flex items-center gap-2">
                      <AlertTriangle size={16} className="text-amber-600" />
                      <span>Mẹo Tránh Bẫy & Lỗi Thường Gặp</span>
                    </h3>
                    <div className="space-y-2">
                      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-amber-200 shadow-2xs space-y-1.5">
                        <p className="text-xs font-semibold text-slate-700">
                          💡 <strong>Lời khuyên:</strong> {selectedTense.tipsAndPitfalls.tip}
                        </p>
                        {selectedTense.tipsAndPitfalls.wrong && (
                          <div className="flex items-start gap-1.5 text-red-600 font-mono text-xs sm:text-sm font-bold break-words">
                            <XCircle size={15} className="shrink-0 mt-0.5" />
                            <span>❌ Sai: {selectedTense.tipsAndPitfalls.wrong}</span>
                          </div>
                        )}
                        {selectedTense.tipsAndPitfalls.correct && (
                          <div className="flex items-start gap-1.5 text-emerald-700 font-mono text-xs sm:text-sm font-bold break-words">
                            <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
                            <span>✅ Đúng: {selectedTense.tipsAndPitfalls.correct}</span>
                          </div>
                        )}
                        <p className="text-[11px] sm:text-xs text-slate-600 pt-1 border-t border-slate-100">
                          {selectedTense.tipsAndPitfalls.explanationVi}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "practice" && (
                <div className="space-y-4">
                  {/* Practice Quick Jump Bar & Stats */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-900">
                            Bộ bài tập thực hành ({selectedTense.quiz.length} câu)
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                            20 bài tập thực tiễn
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Tiến độ: {Object.keys(quizSubmitted).filter(k => selectedTense.quiz.some(q => q.id === k)).length} / {selectedTense.quiz.length} câu đã làm
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          const tenseQuizIds: string[] = selectedTense.quiz.map(q => q.id);
                          setQuizAnswers(prev => {
                            const next = { ...prev };
                            tenseQuizIds.forEach((id: string) => delete next[id]);
                            return next;
                          });
                          setQuizSubmitted(prev => {
                            const next = { ...prev };
                            tenseQuizIds.forEach((id: string) => delete next[id]);
                            return next;
                          });
                        }}
                        className="text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        🔄 Làm lại bài tập thì này
                      </button>
                    </div>

                    {/* Question Jump Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                      {selectedTense.quiz.map((q, idx) => {
                        const isSub = quizSubmitted[q.id];
                        const sel = quizAnswers[q.id];
                        const isCorr = sel === q.answer;

                        let pillClass = "bg-slate-100 text-slate-600 hover:bg-slate-200";
                        if (isSub) {
                          pillClass = isCorr ? "bg-emerald-500 text-white font-bold" : "bg-red-500 text-white font-bold";
                        } else if (sel) {
                          pillClass = "bg-blue-100 text-blue-800 font-bold border border-blue-300";
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              const el = document.getElementById(`tense-q-${idx}`);
                              el?.scrollIntoView({ behavior: "smooth", block: "center" });
                            }}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${pillClass}`}
                            title={`Chuyển đến câu ${idx + 1}`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {selectedTense.quiz.map((q, idx) => {
                    const isSubmitted = quizSubmitted[q.id];
                    const selected = quizAnswers[q.id];
                    const isCorrect = selected === q.answer;

                    return (
                      <div key={q.id} id={`tense-q-${idx}`} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Thực hành chia thì
                          </span>
                          {q.contextScenario && (
                            <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                              {q.contextScenario}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-900 font-bold text-sm sm:text-base mb-3">{q.question}</p>

                        <div className="space-y-2 mb-4">
                          {q.options.map((opt, optIdx) => {
                            const isChosen = selected === opt;
                            let btnStyle = "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50";

                            if (isSubmitted) {
                              if (opt === q.answer) {
                                btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                              } else if (isChosen && opt !== q.answer) {
                                btnStyle = "bg-red-50 border-red-400 text-red-900 font-bold";
                              }
                            } else if (isChosen) {
                              btnStyle = "bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-2xs";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectOption(q.id, opt)}
                                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 text-xs sm:text-sm ${btnStyle}`}
                              >
                                <span className="break-words">{opt}</span>
                                {isSubmitted && opt === q.answer && <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />}
                                {isSubmitted && isChosen && opt !== q.answer && <XCircle size={16} className="text-red-500 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {!isSubmitted ? (
                          <button
                            onClick={() => handleSubmitQuiz(q.id)}
                            disabled={!selected}
                            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-2xs"
                          >
                            Xác nhận câu trả lời
                          </button>
                        ) : (
                          <div className={`p-3.5 rounded-xl border ${
                            isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-red-50 border-red-200 text-red-950"
                          }`}>
                            <p className="text-xs sm:text-sm font-bold mb-1">
                              {isCorrect ? "Chính xác tuyệt đối! 🎉" : "Chưa chính xác!"}
                            </p>
                            <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                              <strong>Giải thích:</strong> {q.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
