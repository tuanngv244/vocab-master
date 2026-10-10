import { useState, useEffect, useRef } from "react";
import { ListeningExercise } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, ChevronLeft, Play, Square, Headphones, FileText } from "lucide-react";

interface ListeningModeProps {
  exercises: ListeningExercise[];
  onBack: () => void;
}

export default function ListeningMode({ exercises, onBack }: ListeningModeProps) {
  const [selectedExercise, setSelectedExercise] = useState<ListeningExercise | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [filterLevel, setFilterLevel] = useState<"all" | "beginner" | "advanced">("all");
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.85);

  const synth = window.speechSynthesis;

  useEffect(() => {
    return () => {
      synth.cancel();
    };
  }, [synth]);

  const beginnerCount = exercises.filter(e => e.level.toLowerCase().includes("beginner")).length;
  const advancedCount = exercises.filter(e => !e.level.toLowerCase().includes("beginner")).length;

  const filteredExercises = exercises.filter(e => {
    if (filterLevel === "beginner") return e.level.toLowerCase().includes("beginner");
    if (filterLevel === "advanced") return !e.level.toLowerCase().includes("beginner");
    return true;
  });

  const togglePlay = () => {
    if (!selectedExercise) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(selectedExercise.script);
      utterance.lang = "en-US";
      utterance.rate = playbackSpeed;
      utterance.onend = () => setIsPlaying(false);
      synth.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleSelectAnswer = (qIndex: number, option: string) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIndex]: option });
  };

  const calculateScore = () => {
    if (!selectedExercise) return 0;
    let score = 0;
    selectedExercise.questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  if (!selectedExercise) {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12 min-h-full">
        <header className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Listening Practice 🎧</h1>
            <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 px-3 py-1 rounded-full">{exercises.length} bài nghe</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-base md:text-lg">Chọn bài nghe để kiểm tra khả năng nghe hiểu của bạn.</p>
        </header>

        {/* Level Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setFilterLevel("all")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shrink-0 ${
              filterLevel === "all"
                ? "bg-slate-900 dark:bg-slate-700 text-white shadow-md shadow-slate-900/20"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700"
            }`}
          >
            Tất cả ({exercises.length})
          </button>
          <button
            onClick={() => setFilterLevel("beginner")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              filterLevel === "beginner"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                : "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/60"
            }`}
          >
            <span>🌱</span> Người mới (A1-A2) ({beginnerCount})
          </button>
          <button
            onClick={() => setFilterLevel("advanced")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shrink-0 flex items-center gap-1.5 ${
              filterLevel === "advanced"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60"
            }`}
          >
            <span>⚡</span> Nâng cao (IELTS) ({advancedCount})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExercises.map((exercise, index) => {
            const isBeginner = exercise.level.toLowerCase().includes("beginner");
            return (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelectedExercise(exercise);
                  setAnswers({});
                  setSubmitted(false);
                  setShowTranscript(false);
                  setPlaybackSpeed(isBeginner ? 0.82 : 0.9);
                  synth.cancel();
                  setIsPlaying(false);
                }}
                className="bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 overflow-hidden cursor-pointer hover:shadow-xl dark:shadow-none transition-all p-6 sm:p-8 flex items-start gap-5 sm:gap-6 group"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${
                  isBeginner ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300" : "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300"
                }`}>
                  <Headphones size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isBeginner ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300" : "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300"
                    }`}>
                      {exercise.level}
                    </span>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{exercise.durationLabel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{exercise.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">{exercise.questions.length} câu hỏi</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">Luyện nghe →</span>
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
    <div className="flex flex-col min-h-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <div className="max-w-4xl mx-auto w-full bg-white dark:bg-slate-900 min-h-full border-x border-slate-200 dark:border-slate-800 shadow-sm">
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-4 flex items-center gap-4">
          <button 
            onClick={() => { synth.cancel(); setSelectedExercise(null); }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="truncate">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">{selectedExercise.title}</h2>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{selectedExercise.level} • {selectedExercise.durationLabel}</p>
          </div>
        </header>

        <div className="p-4 sm:p-8 md:p-12">
          {/* Audio Player UX */}
          <div className="bg-slate-900 rounded-[32px] p-8 sm:p-10 mb-12 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200">
            <div className={`absolute inset-0 bg-emerald-500/10 blur-[50px] transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <button
               onClick={togglePlay}
               className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white shadow-xl transition-all relative z-10 ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105'}`}
            >
              {isPlaying ? <Square fill="currentColor" size={32} /> : <Play fill="currentColor" size={40} className="ml-2" />}
            </button>
            <p className="mt-6 font-bold text-slate-300 uppercase tracking-widest text-sm sm:text-base">
              {isPlaying ? "Audio Playing..." : "Play Audio"}
            </p>

            {/* Speed Controls */}
            <div className="mt-4 flex items-center gap-2 bg-slate-800/80 rounded-full p-1 border border-slate-700 relative z-10">
              <span className="text-[11px] font-bold text-slate-400 px-2 uppercase">Speed:</span>
              {[0.75, 0.85, 1.0].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setPlaybackSpeed(s);
                    if (isPlaying) {
                      synth.cancel();
                      setIsPlaying(false);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    playbackSpeed === s
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          {/* Transcript Toggle */}
          <div className="mb-12">
            <button 
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-slate-800 dark:hover:text-slate-200 transition-colors mx-auto"
            >
              <FileText size={18} />
              {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </button>

            <AnimatePresence>
              {showTranscript && (
                <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: "auto", opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden"
                >
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl rounded-tr-none mt-4 text-slate-700 dark:text-slate-200 font-medium leading-relaxed border border-slate-100 dark:border-slate-700">
                    "{selectedExercise.script}"
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <hr className="border-slate-200 dark:border-slate-800 mb-12" />

          {/* Questions */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Comprehension Check</h3>
            <div className="space-y-8 sm:space-y-12">
              {selectedExercise.questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-slate-50 dark:bg-slate-800/80 rounded-[24px] p-6 sm:p-8 border border-slate-100 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6">{qIndex + 1}. {q.question}</h4>
                  <div className="space-y-3">
                    {q.options.map((option, optIdx) => {
                      const isSelected = answers[qIndex] === option;
                      const isCorrect = option === q.answer;
                      let btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200";
                      let icon = <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>;

                      if (submitted) {
                        if (isCorrect) {
                          btnClass = "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-800 dark:text-emerald-300";
                          icon = <CheckCircle2 className="text-emerald-500" strokeWidth={3} size={20} />;
                        } else if (isSelected && !isCorrect) {
                          btnClass = "bg-red-50 dark:bg-red-950/80 border-red-500 text-red-800 dark:text-red-300";
                          icon = <XCircle className="text-red-500" strokeWidth={3} size={20} />;
                        } else {
                           btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 opacity-50";
                        }
                      } else {
                        if (isSelected) {
                          btnClass = "bg-slate-800 dark:bg-emerald-600 border-slate-900 dark:border-emerald-600 text-white shadow-md";
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
                disabled={Object.keys(answers).length < selectedExercise.questions.length}
                className="w-full mt-12 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-300 dark:shadow-none hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:hover:bg-slate-900 dark:disabled:hover:bg-emerald-600"
              >
                Submit Answers
              </button>
            ) : (
              <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-8 text-center border-2 border-emerald-500 shadow-xl shadow-emerald-100 dark:shadow-none">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Practice Complete!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">You scored <strong className="text-emerald-600 dark:text-emerald-400">{score}</strong> out of {selectedExercise.questions.length}</p>
                <button
                   onClick={() => { synth.cancel(); setSelectedExercise(null); }}
                   className="mt-6 px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Back to Exercises
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
