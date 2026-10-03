import { useState } from "react";
import { questionPatterns, QuestionPattern } from "../data_questions";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, Volume2, CheckCircle2, XCircle, HelpCircle, 
  Sparkles, AlertTriangle, ArrowRight, RotateCcw, Lightbulb, BookOpen
} from "lucide-react";

interface QuestionMasteryModeProps {
  onBack: () => void;
}

export default function QuestionMasteryMode({ onBack }: QuestionMasteryModeProps) {
  const [selectedPattern, setSelectedPattern] = useState<QuestionPattern>(questionPatterns[0]);
  const [activeTab, setActiveTab] = useState<"theory" | "practice">("theory");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  
  // Scrambled reordering state
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
              <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight truncate">Học Cách Viết Câu Hỏi</h1>
              <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                6 Thể loại
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block truncate">
              Nắm vững công thức, trật tự từ, ngữ điệu và bài tập tương tác cho từng thể loại câu hỏi
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "theory" ? "bg-white text-indigo-700 shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            📖 <span className="hidden sm:inline">Lý thuyết & Quy tắc</span><span className="sm:hidden">Lý thuyết</span>
          </button>
          <button
            onClick={() => setActiveTab("practice")}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${activeTab === "practice" ? "bg-indigo-600 text-white shadow-xs font-bold" : "text-slate-500 hover:text-slate-800"}`}
          >
            ✍️ <span className="hidden sm:inline">Luyện tập thực hành</span><span className="sm:hidden">Luyện tập ({selectedPattern.quiz.length})</span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-6xl mx-auto w-full p-3.5 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        {/* Mobile Horizontal Pattern Scroller (< lg) */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-1 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {questionPatterns.map(pattern => {
            const isActive = selectedPattern.id === pattern.id;
            return (
              <button
                key={pattern.id}
                onClick={() => {
                  setSelectedPattern(pattern);
                  setQuizAnswers({});
                  setQuizSubmitted({});
                  setPuzzleSelectedWords({});
                  setPuzzleResult({});
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{pattern.icon}</span>
                <span className="truncate max-w-[160px]">{pattern.title.split("(")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Left Sidebar: Pattern list (>= lg) */}
        <div className="hidden lg:block lg:w-72 shrink-0">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 px-1">Các thể loại câu hỏi</h2>
          <div className="space-y-1.5">
            {questionPatterns.map(pattern => {
              const isActive = selectedPattern.id === pattern.id;
              return (
                <button
                  key={pattern.id}
                  onClick={() => {
                    setSelectedPattern(pattern);
                    setQuizAnswers({});
                    setQuizSubmitted({});
                    setPuzzleSelectedWords({});
                    setPuzzleResult({});
                  }}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                    isActive 
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm" 
                      : "bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                  }`}
                >
                  <span className="text-xl shrink-0 p-1 bg-white/10 rounded-lg">{pattern.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        {pattern.badge}
                      </span>
                    </div>
                    <div className={`font-bold text-xs truncate ${isActive ? "text-white" : "text-slate-900"}`}>
                      {pattern.title}
                    </div>
                    <div className={`text-[11px] truncate mt-0.5 ${isActive ? "text-indigo-100" : "text-slate-500"}`}>
                      {pattern.titleVi}
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
              key={selectedPattern.id + activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedPattern.icon}</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">{selectedPattern.title}</h2>
                    <p className="text-sm font-semibold text-indigo-600">{selectedPattern.titleVi}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {selectedPattern.explanationVi}
                </p>

                {/* Formula Highlight Box */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-indigo-800 mb-1.5">
                    <Sparkles size={14} className="text-indigo-600" />
                    <span>CÔNG THỨC CHUẨN</span>
                  </div>
                  <div className="font-mono font-bold text-slate-900 text-xs sm:text-sm tracking-wide bg-white/90 p-3 rounded-xl border border-indigo-100 shadow-2xs break-words overflow-x-auto">
                    {selectedPattern.formula}
                  </div>
                </div>
              </div>

              {activeTab === "theory" && (
                <>
                  {/* Detailed Rules */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                    <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb size={18} className="text-amber-500" />
                      <span>Quy Tắc Vàng Cần Ghi Nhớ</span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedPattern.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples with Audio */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                    <h3 className="text-base font-black text-slate-900 mb-4 flex items-center gap-2">
                      <BookOpen size={18} className="text-emerald-600" />
                      <span>Ví Dụ Thực Tế & Phát Âm</span>
                    </h3>
                    <div className="space-y-3">
                      {selectedPattern.examples.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <p className="text-slate-900 font-bold text-base leading-snug">{item.en}</p>
                            <button
                              onClick={() => speakText(item.en)}
                              className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 flex items-center justify-center shrink-0 shadow-2xs transition-colors"
                              title="Nghe phát âm chuẩn"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                          <p className="text-slate-600 text-sm font-medium">{item.vi}</p>
                          {item.note && (
                            <span className="inline-block mt-2 text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                              💡 {item.note}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pitfalls & Mistakes */}
                  <div className="bg-white rounded-3xl p-6 border border-amber-200/80 bg-amber-50/20 shadow-sm">
                    <h3 className="text-base font-black text-amber-900 mb-4 flex items-center gap-2">
                      <AlertTriangle size={18} className="text-amber-600" />
                      <span>Lỗi Sai Kinh Điển Thường Gặp</span>
                    </h3>
                    <div className="space-y-3">
                      {selectedPattern.pitfalls.map((pf, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-amber-200 shadow-2xs space-y-2">
                          <div className="flex items-center gap-2 text-red-600 font-mono text-sm font-bold">
                            <XCircle size={16} className="shrink-0" />
                            <span>❌ Sai: {pf.wrong}</span>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-700 font-mono text-sm font-bold">
                            <CheckCircle2 size={16} className="shrink-0" />
                            <span>✅ Đúng: {pf.correct}</span>
                          </div>
                          <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                            <strong>Tại sao?</strong> {pf.reasonVi}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "practice" && (
                <div className="space-y-6">
                  {selectedPattern.quiz.map((q, idx) => {
                    const isSubmitted = quizSubmitted[q.id];
                    const selected = quizAnswers[q.id];
                    const isCorrect = selected === q.answer;

                    if (q.type === "reorder" && q.scrambledWords) {
                      const selectedWords = puzzleSelectedWords[q.id] || [];
                      const isPuzzleChecked = puzzleResult[q.id] !== undefined && puzzleResult[q.id] !== null;
                      const isPuzzleCorrect = puzzleResult[q.id] === true;

                      return (
                        <div key={q.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                              Sắp xếp từ thành câu hỏi
                            </span>
                          </div>
                          <p className="text-slate-900 font-bold text-base mb-4">{q.question}</p>

                          {/* Words placed in the answer box */}
                          <div className="min-h-16 p-3 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 mb-4 flex flex-wrap gap-2 items-center">
                            {selectedWords.length === 0 && (
                              <span className="text-slate-400 text-xs italic">Bấm các từ bên dưới để ghép vào đây theo thứ tự...</span>
                            )}
                            {selectedWords.map((word, wIdx) => (
                              <button
                                key={wIdx}
                                onClick={() => handlePuzzleRemoveWord(q.id, wIdx)}
                                className="px-3 py-1.5 rounded-xl bg-white border border-indigo-300 font-bold text-sm text-indigo-900 shadow-2xs hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors"
                                title="Bấm để gỡ từ này"
                              >
                                {word} ✕
                              </button>
                            ))}
                          </div>

                          {/* Word Pool */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {q.scrambledWords.map((word, wIdx) => {
                              const usedCount = selectedWords.filter(w => w === word).length;
                              const totalAvailable = q.scrambledWords!.filter(w => w === word).length;
                              const isUsed = usedCount >= totalAvailable;

                              return (
                                <button
                                  key={wIdx}
                                  disabled={isUsed || isPuzzleChecked}
                                  onClick={() => handlePuzzleWordClick(q.id, word)}
                                  className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-all border ${
                                    isUsed
                                      ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
                                      : "bg-white text-slate-800 border-slate-300 hover:border-indigo-400 hover:bg-indigo-50/50 shadow-2xs active:scale-95"
                                  }`}
                                >
                                  {word}
                                </button>
                              );
                            })}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleCheckPuzzle(q.id, q.answer)}
                              disabled={selectedWords.length === 0 || isPuzzleChecked}
                              className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-2xs"
                            >
                              Kiểm tra đáp án
                            </button>
                            <button
                              onClick={() => handleResetPuzzle(q.id)}
                              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                            >
                              <RotateCcw size={14} /> Làm lại
                            </button>
                          </div>

                          {isPuzzleChecked && (
                            <div className={`mt-4 p-4 rounded-2xl border ${
                              isPuzzleCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-red-50 border-red-200 text-red-950"
                            }`}>
                              <div className="flex items-center gap-2 font-bold mb-1">
                                {isPuzzleCorrect ? <CheckCircle2 className="text-emerald-600" /> : <XCircle className="text-red-600" />}
                                <span>{isPuzzleCorrect ? "Chính xác tuyệt đối! 🎉" : "Chưa đúng rồi!"}</span>
                              </div>
                              <p className="text-sm"><strong>Đáp án chuẩn:</strong> {q.answer}</p>
                              <p className="text-xs text-slate-600 mt-1">{q.explanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Standard Multiple Choice
                    return (
                      <div key={q.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Trắc nghiệm
                          </span>
                        </div>
                        <p className="text-slate-900 font-bold text-base mb-4">{q.question}</p>

                        <div className="space-y-2.5 mb-5">
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
                              btnStyle = "bg-indigo-50 border-indigo-400 text-indigo-900 font-bold shadow-2xs";
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectOption(q.id, opt)}
                                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 text-sm ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isSubmitted && opt === q.answer && <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />}
                                {isSubmitted && isChosen && opt !== q.answer && <XCircle size={18} className="text-red-500 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {!isSubmitted ? (
                          <button
                            onClick={() => handleSubmitQuiz(q.id)}
                            disabled={!selected}
                            className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-2xs"
                          >
                            Xác nhận câu trả lời
                          </button>
                        ) : (
                          <div className={`p-4 rounded-2xl border ${
                            isCorrect ? "bg-emerald-50 border-emerald-200 text-emerald-950" : "bg-red-50 border-red-200 text-red-950"
                          }`}>
                            <p className="text-sm font-bold mb-1">
                              {isCorrect ? "Rất xuất sắc! 🎉" : "Chưa chính xác!"}
                            </p>
                            <p className="text-xs text-slate-700 leading-relaxed">
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
