import { useState, useEffect } from "react";
import { Word } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizModeProps {
  topicName: string;
  words: Word[];
  allWords: Word[];
  onBack: () => void;
  onComplete: (score: number) => void;
}

function shuffle<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function QuizMode({ topicName, words, allWords, onBack, onComplete }: QuizModeProps) {
  const [questions, setQuestions] = useState<Word[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // limit to 10
    const shuffledWords = shuffle(words).slice(0, 10);
    setQuestions(shuffledWords);
  }, [words]);

  useEffect(() => {
    if (questions.length > 0 && currentIndex < questions.length) {
      const currentWord = questions[currentIndex];
      const otherWords = allWords.filter((w) => w.id !== currentWord.id);
      const wrongAnswers = shuffle(otherWords).slice(0, 3).map(w => w.meaning);
      setOptions(shuffle([currentWord.meaning, ...wrongAnswers]));
      setSelectedAnswer(null);
    }
  }, [currentIndex, questions, allWords]);

  const handleSelect = (answer: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    
    if (answer === questions[currentIndex].meaning) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return null;

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto p-4 sm:p-6 flex flex-col items-center justify-center h-full">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-6 sm:p-10 text-center shadow-2xl shadow-slate-200 border border-slate-100 w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white -z-10"></div>
          <div className="text-7xl sm:text-8xl mb-4 sm:mb-6">🏆</div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2 tracking-tight">Quiz Complete!</h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium mb-8 sm:mb-10">
            You scored <span className="text-emerald-600 font-bold">{score}/{questions.length}</span> correct answers.
          </p>
          
          <div className="grid grid-cols-2 gap-2 sm:gap-4 p-4 sm:p-6 bg-white border border-slate-100 rounded-3xl mb-8 sm:mb-10 shadow-sm">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Accuracy</p>
              <p className="text-3xl font-black text-emerald-500">{Math.round((score / questions.length) * 100)}%</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Topic</p>
              <p className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2 h-full pb-1 truncate">{topicName}</p>
            </div>
          </div>
          
          <button
            onClick={() => {
              onComplete(score);
              onBack();
            }}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:bg-slate-800 transition active:scale-95"
          >
            Return to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const currentWord = questions[currentIndex];
  const progressPercent = ((currentIndex) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-12 flex flex-col min-h-full w-full">
      <header className="mb-8 w-full">
        <div className="flex justify-between text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-emerald-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </header>

      <div className="text-center mb-8 flex-1 flex flex-col justify-center min-h-[200px]">
        {/* Emoji with 50% opacity in Quiz Mode as requested */}
        <div className="inline-flex w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full items-center justify-center text-5xl sm:text-7xl shadow-xl shadow-slate-200 border border-slate-100 mb-6 sm:mb-8 mx-auto shrink-0 opacity-50 blur-[1px]">
          <motion.div
             key={currentWord.id}
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {currentWord.emoji}
          </motion.div>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">{currentWord.word}</h2>
        <p className="text-slate-400 font-medium mt-3 sm:mt-4 text-sm sm:text-base">Select the correct definition</p>
      </div>

      <div className="grid gap-3 sm:gap-4 mt-auto">
        <AnimatePresence mode="popLayout">
          {options.map((option, idx) => {
            let btnClass = "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md text-slate-800";
            let icon = null;

            if (selectedAnswer) {
              if (option === currentWord.meaning) {
                btnClass = "bg-emerald-50 border-emerald-500 text-emerald-800 z-10 shadow-lg shadow-emerald-100";
                icon = <CheckCircle2 className="text-emerald-500" strokeWidth={3} />;
              } else if (option === selectedAnswer) {
                btnClass = "bg-red-50 border-red-500 text-red-800 z-10 shadow-lg shadow-red-100";
                icon = <XCircle className="text-red-500" strokeWidth={3} />;
              } else {
                btnClass = "bg-slate-50 border-slate-200 opacity-50 scale-[0.98]";
              }
            }

            return (
              <motion.button
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                key={option}
                onClick={() => handleSelect(option)}
                disabled={!!selectedAnswer}
                className={`flex items-center justify-between w-full p-5 sm:p-6 rounded-[24px] border-2 font-bold text-base sm:text-lg transition-all ${btnClass}`}
              >
                <span className="text-left">{option}</span>
                {icon}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
