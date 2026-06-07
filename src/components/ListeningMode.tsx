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

  const synth = window.speechSynthesis;

  useEffect(() => {
    return () => {
      synth.cancel();
    };
  }, [synth]);

  const togglePlay = () => {
    if (!selectedExercise) return;

    if (isPlaying) {
      synth.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(selectedExercise.script);
      utterance.lang = "en-US";
      utterance.rate = 0.9; // slightly slower for listening practice
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
        <header className="mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Listening Practice 🎧</h1>
          <p className="text-slate-500 font-medium text-base md:text-lg">Select an exercise to test your listening comprehension.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => { setSelectedExercise(exercise); setAnswers({}); setSubmitted(false); setShowTranscript(false); synth.cancel(); setIsPlaying(false); }}
              className="bg-white rounded-[24px] border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-slate-200/50 transition-all p-6 sm:p-8 flex items-start gap-6 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Headphones size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                   <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{exercise.level}</span>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{exercise.durationLabel} lengths</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 line-clamp-2">{exercise.title}</h3>
                <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">{exercise.questions.length} Questions</span>
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
            onClick={() => { synth.cancel(); setSelectedExercise(null); }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors shrink-0"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="truncate">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 truncate">{selectedExercise.title}</h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{selectedExercise.level} • {selectedExercise.durationLabel}</p>
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
          </div>

          {/* Transcript Toggle */}
          <div className="mb-12">
            <button 
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors mx-auto"
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
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl rounded-tr-none mt-4 text-slate-700 font-medium leading-relaxed border border-slate-100">
                    "{selectedExercise.script}"
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <hr className="border-slate-200 mb-12" />

          {/* Questions */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Comprehension Check</h3>
            <div className="space-y-8 sm:space-y-12">
              {selectedExercise.questions.map((q, qIndex) => (
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
                disabled={Object.keys(answers).length < selectedExercise.questions.length}
                className="w-full mt-12 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-300 hover:bg-slate-800 transition-all disabled:opacity-50 disabled:hover:bg-slate-900"
              >
                Submit Answers
              </button>
            ) : (
              <div className="mt-12 bg-white rounded-3xl p-8 text-center border-2 border-emerald-500 shadow-xl shadow-emerald-100">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Practice Complete!</h3>
                <p className="text-lg text-slate-600 font-medium">You scored <strong className="text-emerald-600">{score}</strong> out of {selectedExercise.questions.length}</p>
                <button
                   onClick={() => { synth.cancel(); setSelectedExercise(null); }}
                   className="mt-6 px-8 py-3 bg-slate-100 text-slate-800 rounded-xl font-bold hover:bg-slate-200 transition-colors"
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
