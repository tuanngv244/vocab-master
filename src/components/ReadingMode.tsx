import { useState } from "react";
import { ReadingArticle } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react";

interface ReadingModeProps {
  articles: ReadingArticle[];
  onBack: () => void;
}

export default function ReadingMode({ articles, onBack }: ReadingModeProps) {
  const [selectedArticle, setSelectedArticle] = useState<ReadingArticle | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (qIndex: number, option: string) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: option });
  };

  const calculateScore = () => {
    if (!selectedArticle) return 0;
    let score = 0;
    selectedArticle.questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  if (!selectedArticle) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12 min-h-full">
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Reading Practice 📖</h1>
          <p className="text-slate-500 font-medium text-base md:text-lg">Select an article to test your reading comprehension.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => { setSelectedArticle(article); setAnswers({}); setSubmitted(false); }}
              className="bg-white rounded-[24px] border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all group flex flex-col"
            >
              <div className="h-48 w-full bg-slate-200 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm border border-white/20">
                  {article.level}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 block">{article.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{article.title}</h3>
                <div className="mt-auto">
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">{article.questions.length} Questions</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const score = calculateScore();

  return (
    <div className="flex flex-col min-h-full bg-slate-50">
      <div className="max-w-4xl mx-auto w-full bg-white min-h-full border-x border-slate-200 shadow-sm">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-8 py-4 flex items-center gap-4">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 line-clamp-1">{selectedArticle.title}</h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{selectedArticle.level} • {selectedArticle.category}</p>
          </div>
        </header>

        <div className="p-4 sm:p-8 md:p-12">
          {/* Article Full Image */}
          <div className="w-full h-48 sm:h-64 md:h-80 rounded-[32px] overflow-hidden mb-10 border border-slate-100 shadow-sm">
             <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <article className="prose prose-slate prose-lg md:prose-xl max-w-none mb-16">
            {selectedArticle.content.map((paragraph, i) => (
              <p key={i} className="text-slate-700 leading-relaxed font-medium mb-6">{paragraph}</p>
            ))}
          </article>

          <hr className="border-slate-200 mb-12" />

          {/* Questions */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Comprehension Check</h3>
            <div className="space-y-12">
              {selectedArticle.questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-slate-50 rounded-[24px] p-6 sm:p-8 border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-800 mb-6">{qIndex + 1}. {q.question}</h4>
                  <div className="space-y-3">
                    {q.options.map((option, optIdx) => {
                      const isSelected = answers[qIndex] === option;
                      const isCorrect = option === q.answer;
                      let btnClass = "bg-white border-slate-200 hover:border-slate-300 text-slate-700";
                      let icon = <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>;

                      if (submitted) {
                        if (isCorrect) {
                          btnClass = "bg-emerald-50 border-emerald-500 text-emerald-800";
                          icon = <CheckCircle2 className="text-emerald-500" strokeWidth={3} size={20} />;
                        } else if (isSelected && !isCorrect) {
                          btnClass = "bg-red-50 border-red-500 text-red-800";
                          icon = <XCircle className="text-red-500" strokeWidth={3} size={20} />;
                        } else {
                           btnClass = "bg-white border-slate-200 opacity-50";
                        }
                      } else {
                        if (isSelected) {
                          btnClass = "bg-slate-800 border-slate-900 text-white shadow-md";
                          icon = <div className="w-5 h-5 rounded-full border-[6px] border-emerald-400 bg-white"></div>;
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(qIndex, option)}
                          disabled={submitted}
                          className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all ${btnClass}`}
                        >
                          <div className="mt-0.5 shrink-0">{icon}</div>
                          <span className="font-medium text-sm sm:text-base">{option}</span>
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
                className="w-full mt-12 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-300 hover:bg-slate-800 transition-all disabled:opacity-50 disabled:hover:bg-slate-900"
              >
                Submit Answers
              </button>
            ) : (
              <div className="mt-12 bg-white rounded-3xl p-8 text-center border-2 border-emerald-500 shadow-xl shadow-emerald-100">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Practice Complete!</h3>
                <p className="text-lg text-slate-600 font-medium">You scored <strong className="text-emerald-600">{score}</strong> out of {selectedArticle.questions.length}</p>
                <button
                   onClick={() => setSelectedArticle(null)}
                   className="mt-6 px-8 py-3 bg-slate-100 text-slate-800 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Back to Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
