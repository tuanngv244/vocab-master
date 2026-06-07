import { useState, useEffect } from "react";
import { Topic } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Volume2 } from "lucide-react";
import { UserData } from "../App";

interface StudyModeProps {
  topic: Topic;
  onBack: () => void;
  onLearnWord: (wordId: string) => void;
  userData: UserData;
}

export default function StudyMode({ topic, onBack, onLearnWord, userData }: StudyModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleFlip();
      } else if (e.code === "Enter" || e.code === "ArrowRight") {
        e.preventDefault();
        if (currentIndex < topic.words.length - 1) {
          setIsFlipped(false);
          setCurrentIndex(prev => prev + 1);
        }
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (currentIndex > 0) {
          setIsFlipped(false);
          setCurrentIndex(prev => prev - 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, topic.words.length, isFlipped]);

  const word = topic.words[currentIndex];

  const handleFlip = () => {
    const newFlippedState = !isFlipped;
    setIsFlipped(newFlippedState);
    if (newFlippedState) {
      onLearnWord(topic.words[currentIndex].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < topic.words.length - 1) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const progressPercent = Math.round(((currentIndex + 1) / topic.words.length) * 100);
  const masteredCount = topic.words.filter(w => userData.learned[w.id]).length;

  return (
    <div className="flex flex-col min-h-full relative w-full items-center">
      <div className="flex-1 w-full max-w-[600px] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px]">
        {/* Progress Bar */}
        <div className="w-full max-w-[600px] mb-6 md:mb-8">
          <div className="flex justify-between mb-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase">
            <span>Step {currentIndex + 1} of {topic.words.length}</span>
            <span>{progressPercent}% Complete</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="relative group w-full max-w-[500px] flex-1 min-h-[300px] sm:min-h-[400px]" style={{ perspective: 1000 }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[40px] blur opacity-25"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (isFlipped ? "-flipped" : "-front")}
              initial={{ rotateY: isFlipped ? 180 : 0, opacity: 0, scale: 0.95 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: isFlipped ? 0 : -180, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={handleFlip}
              className="absolute inset-0 w-full h-full bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-6 sm:p-8 md:p-10 flex flex-col justify-between cursor-pointer"
            >
              {!isFlipped ? (
                <div className="text-center flex flex-col items-center justify-center h-full pt-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-slate-50 rounded-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl mb-6 shadow-inner mx-auto">
                    {word.emoji}
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">{word.word}</h3>
                  <p className="mt-8 text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Tap to flip</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-between h-full w-full overflow-y-auto">
                  <div className="text-center w-full mt-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-full flex items-center justify-center text-3xl sm:text-4xl sm:text-5xl mb-4 shadow-inner mx-auto shrink-0">
                      {word.emoji}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">{word.word}</h3>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-slate-400 font-mono text-sm sm:text-base md:text-lg">{word.pronunciation}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); speak(word.word); }}
                        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                      >
                        <Volume2 size={16} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="w-full pt-4 sm:pt-6 border-t border-slate-100 mt-4 sm:mt-6 shrink-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Definition</p>
                        <p className="text-base sm:text-xl font-bold text-slate-800 italic">{word.meaning}</p>
                      </div>
                      <div className="sm:max-w-[250px] sm:text-right">
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Example</p>
                        <p className="text-xs sm:text-sm font-medium text-slate-600 italic">"{word.example}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-8 mb-4 w-full max-w-[500px]">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-12 h-12 flex-shrink-0 sm:w-14 sm:h-14 rounded-full border-2 border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-50 disabled:hover:bg-transparent"
          >
            <span className="text-2xl leading-none">←</span>
          </button>
          
          <button
            onClick={handleFlip}
            className="flex-1 max-w-[200px] py-3 sm:py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm sm:text-lg shadow-xl shadow-slate-300 hover:translate-y-[-2px] transition-all active:scale-95"
          >
            Flip Card
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === topic.words.length - 1}
            className="w-12 h-12 flex-shrink-0 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all active:scale-95 disabled:opacity-50 disabled:hover:bg-emerald-500 disabled:hover:scale-100 disabled:hover:translate-y-0"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Footer */}
      <footer className="h-16 bg-white border-t border-slate-100 px-4 md:px-8 flex items-center gap-4 sm:gap-10 mt-auto shrink-0 overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-xs sm:text-sm font-semibold text-slate-600">Learned: <span className="text-slate-900">{masteredCount}</span></span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs sm:text-sm font-semibold text-slate-600">Total: <span className="text-slate-900">{topic.words.length}</span></span>
        </div>
        <div className="ml-auto text-xs text-slate-400 font-medium hidden lg:block shrink-0">
          Press <kbd className="bg-slate-100 px-1 rounded border border-slate-200 font-sans">Space</kbd> to flip • <kbd className="bg-slate-100 px-1 rounded border border-slate-200 font-sans">Enter</kbd> for next
        </div>
      </footer>
    </div>
  );
}
