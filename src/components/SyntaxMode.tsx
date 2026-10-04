import { useState } from "react";
import { syntaxTopics, SyntaxTopic, SyntaxExercise } from "../data_syntax";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, Volume2, CheckCircle2, XCircle, Sparkles, 
  AlertTriangle, Lightbulb, BookOpen, Layers, Check, RotateCcw
} from "lucide-react";

interface SyntaxModeProps {
  onBack: () => void;
}

export default function SyntaxMode({ onBack }: SyntaxModeProps) {
  const [selectedTopic, setSelectedTopic] = useState<SyntaxTopic>(syntaxTopics[0]);
  const [activeTab, setActiveTab] = useState<"theory" | "practice">("theory");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  // Puzzle reordering state
  const [puzzleSelectedWords, setPuzzleSelectedWords] = useState<Record<string, string[]>>({});
  const [puzzleResult, setPuzzleResult] = useState<Record<string, boolean | null>>({});

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

  const handlePuzzleWordClick = (quizId: string, word: string) => {
    if (puzzleResult[quizId]) return;
    setPuzzleSelectedWords(prev => {
      const current = prev[quizId] || [];
      return { ...prev, [quizId]: [...current, word] };
    });
  };

  const handlePuzzleRemoveWord = (quizId: string, index: number) => {
    if (puzzleResult[quizId]) return;
    setPuzzleSelectedWords(prev => {
      const current = prev[quizId] || [];
      const updated = current.filter((_, i) => i !== index);
      return { ...prev, [quizId]: updated };
    });
  };

  const handleCheckPuzzle = (quizId: string, correctAnswer: string) => {
    const userBuilt = (puzzleSelectedWords[quizId] || []).join(" ");
    const isCorrect = userBuilt.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    setPuzzleResult(prev => ({ ...prev, [quizId]: isCorrect }));
  };

  const handleResetPuzzle = (quizId: string) => {
    setPuzzleSelectedWords(prev => ({ ...prev, [quizId]: [] }));
    setPuzzleResult(prev => ({ ...prev, [quizId]: null }));
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
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight truncate">Cú Pháp Câu</h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-purple-100 text-purple-800 border border-purple-200 shrink-0">
                Grammar & Syntax
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block truncate">
              5 mô hình cơ bản, đảo ngữ, câu chẻ, bị động nâng cao, câu điều kiện & so sánh kép
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "theory" ? "bg-white text-purple-700 shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            📖 <span className="hidden sm:inline">Cú pháp & Mô hình</span><span className="sm:hidden">Lý thuyết</span>
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "practice" ? "bg-purple-600 text-white shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            ✍️ <span className="hidden sm:inline">Luyện tập thực hành</span><span className="sm:hidden">Thực hành ({selectedTopic.quiz.length})</span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto w-full p-3.5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        {/* Mobile Horizontal Topic Scroller (< lg) */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-1 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {syntaxTopics.map(topic => {
            const isActive = selectedTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic);
                  setQuizAnswers({});
                  setQuizSubmitted({});
                  setPuzzleSelectedWords({});
                  setPuzzleResult({});
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{topic.icon}</span>
                <span className="truncate max-w-[160px]">{topic.title.split("(")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Left Sidebar: Topics list (>= lg) */}
        <div className="hidden lg:block lg:w-72 shrink-0">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 px-1">Chủ đề cú pháp</h2>
          <div className="space-y-1.5">
            {syntaxTopics.map(topic => {
              const isActive = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setQuizAnswers({});
                    setQuizSubmitted({});
                    setPuzzleSelectedWords({});
                    setPuzzleResult({});
                  }}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                    isActive 
                      ? "bg-purple-600 text-white border-purple-600 shadow-sm" 
                      : "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span className="text-xl shrink-0 p-1 bg-white/10 rounded-lg">{topic.icon}</span>
                  <div className="min-w-0 flex-1">
                    <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full inline-block mb-0.5 ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      {topic.badge}
                    </span>
                    <div className={`font-bold text-xs truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                      {topic.title}
                    </div>
                    <div className={`text-[11px] truncate mt-0.5 ${isActive ? "text-purple-100" : "text-slate-500"}`}>
                      {topic.titleVi}
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
              key={selectedTopic.id + activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="space-y-5"
            >
              {/* Header Box */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="text-2xl sm:text-3xl">{selectedTopic.icon}</span>
                  <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 truncate">{selectedTopic.title}</h2>
                    <p className="text-xs sm:text-sm font-semibold text-purple-600 truncate">{selectedTopic.titleVi}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {selectedTopic.explanationVi}
                </p>

                {/* Master Formula Box - Break words to avoid horizontal overflow */}
                <div className="mt-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-purple-800 mb-1">
                    <Sparkles size={13} className="text-purple-600" />
                    <span>CÚ PHÁP TỔNG QUÁT</span>
                  </div>
                  <div className="font-mono font-bold text-slate-900 text-xs sm:text-sm tracking-wide bg-white/90 p-2.5 rounded-lg border border-purple-100 shadow-2xs break-words overflow-x-auto">
                    {selectedTopic.formula}
                  </div>
                </div>

                {/* Memory Hack Box (Mẹo Nhớ Siêu Tốc) */}
                {selectedTopic.memoryHack && (
                  <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900 mb-1.5">
                      <span className="text-base">💡</span>
                      <span>{selectedTopic.memoryHack.hook}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-medium bg-white/80 p-3 rounded-xl border border-amber-100">
                      {selectedTopic.memoryHack.descriptionVi}
                    </p>
                  </div>
                )}
              </div>

              {activeTab === "theory" && (
                <>
                  {/* Detailed Structural Breakdown */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Layers size={16} className="text-purple-600" />
                      <span>Phân Tích Cấu Trúc Thành Phần</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedTopic.breakdown.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                          <span className="font-bold text-[11px] uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200 shrink-0 self-start">
                            {item.label}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {item.descriptionVi}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rules */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                      <Lightbulb size={16} className="text-amber-500" />
                      <span>Lưu Ý Cú Pháp & Quy Tắc Vàng</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedTopic.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <Check size={15} className="text-purple-600 shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concrete Real-life Examples with Context & Audio */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen size={16} className="text-emerald-600" />
                      <span>Ví Dụ Thực Tế Theo Ngữ Cảnh & Phát Âm</span>
                    </h3>
                    <div className="space-y-3">
                      {selectedTopic.examples.map((item, idx) => (
                        <div key={idx} className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            {item.context && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100/70 border border-purple-200 px-2 py-0.5 rounded-md">
                                📌 {item.context}
                              </span>
                            )}
                            <button
                              onClick={() => speakText(item.en)}
                              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-slate-200 text-purple-600 hover:bg-purple-50 flex items-center justify-center shrink-0 shadow-2xs transition-colors"
                              title="Nghe phát âm chuẩn"
                            >
                              <Volume2 size={15} />
                            </button>
                          </div>
                          <p className="text-slate-900 font-bold text-sm sm:text-base leading-snug mb-1">{item.en}</p>
                          <p className="text-slate-600 text-xs sm:text-sm font-medium mb-2">{item.vi}</p>
                          {item.analysis && (
                            <div className="text-[11px] sm:text-xs font-semibold text-purple-900 bg-purple-50 p-2 sm:p-2.5 rounded-lg border border-purple-100 break-words">
                              🔎 <strong>Phân tích cú pháp:</strong> {item.analysis}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pitfalls */}
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-200/80 bg-amber-50/20 shadow-xs">
                    <h3 className="text-sm sm:text-base font-black text-amber-900 mb-3 flex items-center gap-2">
                      <AlertTriangle size={16} className="text-amber-600" />
                      <span>Lỗi Ngữ Pháp Thường Gặp & Cách Khắc Phục</span>
                    </h3>
                    <div className="space-y-2.5">
                      {selectedTopic.pitfalls.map((pf, idx) => (
                        <div key={idx} className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-amber-200 shadow-2xs space-y-1.5">
                          <div className="flex items-start gap-1.5 text-red-600 font-mono text-xs sm:text-sm font-bold break-words">
                            <XCircle size={15} className="shrink-0 mt-0.5" />
                            <span>❌ Sai: {pf.wrong}</span>
                          </div>
                          <div className="flex items-start gap-1.5 text-emerald-700 font-mono text-xs sm:text-sm font-bold break-words">
                            <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
                            <span>✅ Đúng: {pf.correct}</span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 pt-1 border-t border-slate-100">
                            <strong>Lý do:</strong> {pf.reasonVi}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "practice" && (
                <div className="space-y-4">
                  {selectedTopic.quiz.map((q, idx) => {
                    const isSubmitted = quizSubmitted[q.id];
                    const selected = quizAnswers[q.id];
                    const isCorrect = selected === q.answer;

                    // Word Ordering Puzzle Exercise
                    if (q.type === "reorder" && q.scrambledWords) {
                      const selectedWords = puzzleSelectedWords[q.id] || [];
                      const isPuzzleChecked = puzzleResult[q.id] !== undefined && puzzleResult[q.id] !== null;
                      const isPuzzleCorrect = puzzleResult[q.id] === true;

                      return (
                        <div key={q.id} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded-full border border-purple-200">
                              Ghép từ chuẩn cú pháp
                            </span>
                            {q.contextScenario && (
                              <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                {q.contextScenario}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-900 font-bold text-sm sm:text-base mb-3">{q.question}</p>

                          {/* Words placed in the answer box */}
                          <div className="min-h-14 p-2.5 sm:p-3 rounded-xl border-2 border-dashed border-purple-200 bg-purple-50/40 mb-3 flex flex-wrap gap-1.5 items-center">
                            {selectedWords.length === 0 && (
                              <span className="text-slate-400 text-xs italic">Bấm các từ bên dưới để ghép vào đây theo thứ tự chuẩn cú pháp...</span>
                            )}
                            {selectedWords.map((word, wIdx) => (
                              <button
                                key={wIdx}
                                onClick={() => handlePuzzleRemoveWord(q.id, wIdx)}
                                className="px-2.5 py-1 rounded-lg bg-white border border-purple-300 font-bold text-xs sm:text-sm text-purple-900 shadow-2xs hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors"
                                title="Bấm để gỡ từ này"
                              >
                                {word} ✕
                              </button>
                            ))}
                          </div>

                          {/* Word Pool */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {q.scrambledWords.map((word, wIdx) => {
                              const usedCount = selectedWords.filter(w => w === word).length;
                              const totalAvailable = q.scrambledWords!.filter(w => w === word).length;
                              const isUsed = usedCount >= totalAvailable;

                              return (
                                <button
                                  key={wIdx}
                                  disabled={isUsed || isPuzzleChecked}
                                  onClick={() => handlePuzzleWordClick(q.id, word)}
                                  className={`px-2.5 py-1.5 rounded-lg font-bold text-xs sm:text-sm transition-all border ${
                                    isUsed
                                      ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                                      : "bg-white text-slate-800 border-slate-300 hover:border-purple-400 hover:bg-purple-50/50 shadow-2xs active:scale-95"
                                  }`}
                                >
                                  {word}
                                </button>
                              );
                            })}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2.5">
                            <button
                              onClick={() => handleCheckPuzzle(q.id, q.answer)}
                              disabled={selectedWords.length === 0 || isPuzzleChecked}
                              className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs sm:text-sm hover:bg-purple-700 disabled:opacity-50 transition-colors shadow-2xs"
                            >
                              Kiểm tra đáp án
                            </button>
                            <button
                              onClick={() => handleResetPuzzle(q.id)}
                              className="px-3 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors flex items-center gap-1"
                            >
                              <RotateCcw size={13} /> Làm lại
                            </button>
                          </div>

                          {isPuzzleChecked && (
                            <div className={`mt-3 p-3.5 rounded-xl border ${
                              isPuzzleCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-red-50 border-red-200 text-red-950"
                            }`}>
                              <div className="flex items-center gap-1.5 font-bold mb-1 text-xs sm:text-sm">
                                {isPuzzleCorrect ? <CheckCircle2 className="text-emerald-600" size={16} /> : <XCircle className="text-red-600" size={16} />}
                                <span>{isPuzzleCorrect ? "Chính xác tuyệt đối! 🎉" : "Chưa chuẩn cú pháp!"}</span>
                              </div>
                              <p className="text-xs sm:text-sm break-words"><strong>Đáp án chuẩn:</strong> {q.answer}</p>
                              <p className="text-[11px] text-slate-600 mt-1">{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Standard Multiple Choice Exercise
                    return (
                      <div key={q.id} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-xs">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            Trắc nghiệm ngữ cảnh
                          </span>
                          {q.contextScenario && (
                            <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
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
                              btnStyle = "bg-purple-50 border-purple-400 text-purple-900 font-bold shadow-2xs";
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
                            className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs sm:text-sm hover:bg-purple-700 disabled:opacity-50 transition-colors shadow-2xs"
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
