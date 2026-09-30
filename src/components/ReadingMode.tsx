import { useState } from "react";
import { ReadingArticle } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ChevronLeft, Volume2, Eye, EyeOff, BookOpen, Sparkles } from "lucide-react";

interface ReadingModeProps {
  articles: ReadingArticle[];
  onBack: () => void;
}

// Function to render text with **difficult words** bolded and highlighted
function renderHighlightedText(text: string, isVietnamese = false) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2);
          return (
            <strong
              key={index}
              className={`font-black tracking-wide px-1.5 py-0.5 mx-0.5 rounded-md inline-block transition-all ${
                isVietnamese
                  ? "bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-2xs"
                  : "bg-amber-100 text-amber-950 border border-amber-300 shadow-2xs"
              }`}
            >
              {content}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

export default function ReadingMode({ articles, onBack }: ReadingModeProps) {
  const [selectedArticle, setSelectedArticle] = useState<ReadingArticle | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [filterLevel, setFilterLevel] = useState<"all" | "beginner" | "advanced">("all");
  const [showTranslation, setShowTranslation] = useState(true);
  const [currentlySpeakingIdx, setCurrentlySpeakingIdx] = useState<number | null>(null);

  const beginnerCount = articles.filter(a => a.level.toLowerCase().includes("beginner")).length;
  const advancedCount = articles.filter(a => !a.level.toLowerCase().includes("beginner")).length;

  const filteredArticles = articles.filter(a => {
    if (filterLevel === "beginner") return a.level.toLowerCase().includes("beginner");
    if (filterLevel === "advanced") return !a.level.toLowerCase().includes("beginner");
    return true;
  });

  const handleSelectAnswer = (questionIndex: number, option: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionIndex]: option }));
  };

  const calculateScore = () => {
    if (!selectedArticle) return 0;
    return selectedArticle.questions.reduce((score, q, idx) => {
      return answers[idx] === q.answer ? score + 1 : score;
    }, 0);
  };

  const speakText = (text: string, paragraphIdx: number) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    if (currentlySpeakingIdx === paragraphIdx) {
      setCurrentlySpeakingIdx(null);
      return;
    }

    const cleanText = text.replace(/\*\*/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    utterance.onend = () => setCurrentlySpeakingIdx(null);
    utterance.onerror = () => setCurrentlySpeakingIdx(null);

    setCurrentlySpeakingIdx(paragraphIdx);
    window.speechSynthesis.speak(utterance);
  };

  if (!selectedArticle) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Luyện Đọc Song Ngữ</span>
                <span className="text-sm font-bold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Anh - Việt
                </span>
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                Các đoạn văn có bản dịch tiếng Việt bên dưới và in đậm từ khó để ghi nhớ dễ dàng
              </p>
            </div>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start sm:self-auto shrink-0">
            <button
              onClick={() => setFilterLevel("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterLevel === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Tất cả ({articles.length})
            </button>
            <button
              onClick={() => setFilterLevel("beginner")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                filterLevel === "beginner"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              <span>🌱 Người mới</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                filterLevel === "beginner" ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
              }`}>{beginnerCount}</span>
            </button>
            <button
              onClick={() => setFilterLevel("advanced")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                filterLevel === "advanced"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-indigo-700"
              }`}
            >
              <span>⚡ Nâng cao</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                filterLevel === "advanced" ? "bg-white/20 text-white" : "bg-indigo-100 text-indigo-800"
              }`}>{advancedCount}</span>
            </button>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => {
            const isBeginner = article.level.toLowerCase().includes("beginner");
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => { 
                  setSelectedArticle(article); 
                  setAnswers({}); 
                  setSubmitted(false); 
                  setShowTranslation(true);
                  setCurrentlySpeakingIdx(null);
                  if (typeof window !== "undefined" && window.speechSynthesis) {
                    window.speechSynthesis.cancel();
                  }
                }}
                className="bg-white rounded-[24px] border border-slate-200/90 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all group flex flex-col"
              >
                <div className="h-44 w-full bg-slate-200 overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 right-3 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black shadow-sm border ${
                    isBeginner 
                      ? "bg-emerald-500/95 text-white border-emerald-400" 
                      : "bg-indigo-600/95 text-white border-indigo-500"
                  }`}>
                    {article.level}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5">
                    <span>🇬🇧 ⇄ 🇻🇳 Song ngữ</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`text-[11px] font-black uppercase tracking-wider mb-1.5 block ${isBeginner ? "text-emerald-600" : "text-indigo-600"}`}>
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {article.questions.length} Câu hỏi
                    </span>
                    <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Đọc & Dịch →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  const score = calculateScore();

  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      <div className="max-w-4xl mx-auto w-full bg-white min-h-full border-x border-slate-200 shadow-sm">
        {/* Detail Header */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => {
                setSelectedArticle(null);
                if (typeof window !== "undefined" && window.speechSynthesis) {
                  window.speechSynthesis.cancel();
                }
              }}
              className="w-10 h-10 flex shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              title="Quay lại danh sách"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-black text-slate-900 truncate">{selectedArticle.title}</h2>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{selectedArticle.level} • {selectedArticle.category}</p>
            </div>
          </div>

          {/* Translation Toggle Button */}
          <button
            onClick={() => setShowTranslation(prev => !prev)}
            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shrink-0 border ${
              showTranslation
                ? "bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
                : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
            }`}
            title="Bật/Tắt hiển thị bản dịch tiếng Việt ở dưới mỗi đoạn"
          >
            {showTranslation ? <Eye size={15} /> : <EyeOff size={15} />}
            <span className="hidden sm:inline">{showTranslation ? "Ẩn bản dịch tiếng Việt" : "Hiện bản dịch tiếng Việt"}</span>
            <span className="sm:hidden">{showTranslation ? "Ẩn dịch" : "Hiện dịch"}</span>
          </button>
        </header>

        <div className="p-4 sm:p-8 md:p-10">
          {/* Article Full Image */}
          <div className="w-full h-44 sm:h-64 md:h-72 rounded-[28px] overflow-hidden mb-6 border border-slate-100 shadow-sm relative">
             <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
             <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {selectedArticle.category}
                </span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black drop-shadow-sm">{selectedArticle.title}</h1>
             </div>
          </div>

          {/* Bilingual Guide Banner */}
          <div className="mb-8 p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <BookOpen size={16} className="text-emerald-600 shrink-0" />
              <span>Cấu trúc: <strong>Tiếng Anh ở trên</strong>, <strong>Bản dịch tiếng Việt ở dưới</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-amber-100 border border-amber-300 inline-block shrink-0"></span>
                <span className="text-slate-600 font-semibold">Từ khó Tiếng Anh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-emerald-100 border border-emerald-300 inline-block shrink-0"></span>
                <span className="text-slate-600 font-semibold">Nghĩa Tiếng Việt</span>
              </div>
            </div>
          </div>

          {/* Bilingual Paragraphs Stack */}
          <article className="space-y-6 mb-16">
            {selectedArticle.content.map((paragraph, i) => {
              const viParagraph = selectedArticle.translationVi && selectedArticle.translationVi[i];
              const isSpeaking = currentlySpeakingIdx === i;

              return (
                <div 
                  key={i} 
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors bg-white"
                >
                  {/* English Section (Top) */}
                  <div className="p-5 sm:p-6 bg-slate-50/70">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-indigo-800 bg-indigo-100/70 border border-indigo-200/80 px-2.5 py-1 rounded-full">
                        <span>🇬🇧 Tiếng Anh</span>
                        <span className="text-indigo-400 font-normal">•</span>
                        <span>Đoạn {i + 1}</span>
                      </span>

                      <button
                        onClick={() => speakText(paragraph, i)}
                        className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 transition-all shadow-2xs border ${
                          isSpeaking
                            ? "bg-indigo-600 text-white border-indigo-600 animate-pulse"
                            : "bg-white text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 border-slate-200"
                        }`}
                        title="Nghe phát âm đoạn văn tiếng Anh này"
                      >
                        <Volume2 size={14} />
                        <span>{isSpeaking ? "Đang đọc..." : "Nghe đọc"}</span>
                      </button>
                    </div>

                    <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
                      {renderHighlightedText(paragraph, false)}
                    </p>
                  </div>

                  {/* Vietnamese Translation (Underneath) */}
                  {showTranslation && viParagraph && (
                    <div className="p-5 sm:p-6 bg-emerald-50/40 border-t border-emerald-100/80 transition-all">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full">
                          <span>🇻🇳 Bản dịch Tiếng Việt</span>
                        </span>
                      </div>

                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {renderHighlightedText(viParagraph, true)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </article>

          <hr className="border-slate-200 mb-12" />

          {/* Comprehension Questions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Kiểm tra độ hiểu bài</span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg border border-slate-200">
                    Comprehension Check
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Chọn câu trả lời đúng dựa trên nội dung bài đọc ở trên
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {selectedArticle.questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-slate-50 rounded-[24px] p-5 sm:p-7 border border-slate-200/80">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-5 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <span>{q.question}</span>
                  </h4>
                  <div className="space-y-2.5">
                    {q.options.map((option, optIdx) => {
                      const isSelected = answers[qIndex] === option;
                      const isCorrect = option === q.answer;
                      let btnClass = "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50";
                      let icon = <div className="w-4 h-4 rounded-full border-2 border-slate-300"></div>;

                      if (submitted) {
                        if (isCorrect) {
                          btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                          icon = <CheckCircle2 className="text-emerald-600 shrink-0" strokeWidth={3} size={18} />;
                        } else if (isSelected && !isCorrect) {
                          btnClass = "bg-red-50 border-red-500 text-red-900";
                          icon = <XCircle className="text-red-500 shrink-0" strokeWidth={3} size={18} />;
                        } else {
                          btnClass = "bg-white border-slate-200 opacity-50";
                        }
                      } else {
                        if (isSelected) {
                          btnClass = "bg-slate-900 border-slate-900 text-white shadow-md font-semibold";
                          icon = <div className="w-4 h-4 rounded-full border-4 border-emerald-400 bg-white"></div>;
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(qIndex, option)}
                          disabled={submitted}
                          className={`w-full text-left flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border-2 transition-all active:scale-99 ${btnClass}`}
                        >
                          <div className="mt-0.5 shrink-0">{icon}</div>
                          <span className="text-sm sm:text-base leading-snug">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < selectedArticle.questions.length}
                className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-slate-300 hover:bg-slate-800 transition-all disabled:opacity-40 disabled:hover:bg-slate-900 active:scale-98"
              >
                Nộp bài kiểm tra ({Object.keys(answers).length}/{selectedArticle.questions.length})
              </button>
            ) : (
              <div className="mt-10 bg-white rounded-3xl p-6 sm:p-8 text-center border-2 border-emerald-500 shadow-xl shadow-emerald-100">
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">Hoàn thành bài đọc!</h3>
                <p className="text-base text-slate-600 font-medium">
                  Bạn trả lời đúng <strong className="text-emerald-600 text-lg font-black">{score}</strong> / {selectedArticle.questions.length} câu
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    if (typeof window !== "undefined" && window.speechSynthesis) {
                      window.speechSynthesis.cancel();
                    }
                  }}
                  className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
                >
                  Quay lại danh sách bài đọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
