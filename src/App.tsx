/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { topics } from "./data";
import { Topic, Word } from "./types";
import Home from "./components/Home";
import StudyMode from "./components/StudyMode";
import QuizMode from "./components/QuizMode";
import { Menu, X, Sun, Moon } from "lucide-react";
import ReadingMode from "./components/ReadingMode";
import ListeningMode from "./components/ListeningMode";
import QuestionMasteryMode from "./components/QuestionMasteryMode";
import SyntaxMode from "./components/SyntaxMode";
import TensesMode from "./components/TensesMode";
import FilmMode from "./components/FilmMode";
import { readingArticles, listeningExercises } from "./data_advanced";
import { getInitialTheme, applyTheme, Theme } from "./services/theme";

type View = "home" | "study" | "quiz" | "reading" | "listening" | "questions" | "syntax" | "tenses" | "film";

export interface UserData {
  learned: Record<string, number>;
  activity: string[];
  reviews?: Record<string, { count: number; lastReviewAt: number }>;
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [quizWords, setQuizWords] = useState<Word[] | null>(null);
  const [quizTitle, setQuizTitle] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState<UserData>({ learned: {}, activity: [] });
  
  // Theme state: dark / light
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const saved = localStorage.getItem("vocab_user_data");
    if (saved) {
      setUserData(JSON.parse(saved));
    }
  }, []);

  const saveUserData = (newData: UserData) => {
    setUserData(newData);
    localStorage.setItem("vocab_user_data", JSON.stringify(newData));
  };

  const markActivityToday = (data: UserData) => {
    const todayStr = new Date().toISOString().split('T')[0];
    if (!data.activity.includes(todayStr)) {
      return { ...data, activity: [...data.activity, todayStr] };
    }
    return data;
  };

  const handleLearnWord = (wordId: string) => {
    setUserData((prev) => {
      let next = prev;
      if (!next.learned[wordId]) {
        next = { ...next, learned: { ...next.learned, [wordId]: Date.now() } };
      }
      next = markActivityToday(next);
      saveUserData(next);
      return next;
    });
  };

  const handleSelectStudy = (topic: Topic) => {
    setActiveTopic(topic);
    setView("study");
    setIsSidebarOpen(false);
  };

  const handleSelectQuiz = (topic: Topic) => {
    setActiveTopic(topic);
    setQuizWords(topic.words);
    setQuizTitle(topic.name);
    setView("quiz");
    setIsSidebarOpen(false);
  };

  const startDailyQuiz = () => {
    const now = Date.now();
    const ONE_DAY = 24 * 60 * 60 * 1000;
    
    let dueWords: Word[] = [];
    let otherLearned: Word[] = [];

    topics.forEach(t => {
      t.words.forEach(w => {
        const learnedAt = userData.learned[w.id];
        if (learnedAt) {
          const reviewInfo = userData.reviews?.[w.id];
          if (reviewInfo) {
            const { count, lastReviewAt } = reviewInfo;
            const delayMs = (count + 1) * ONE_DAY;
            if (now - lastReviewAt >= delayMs) {
              dueWords.push(w);
            } else {
              otherLearned.push(w);
            }
          } else {
            // First time review in daily quiz: 1 day after learning
            if (now - learnedAt >= ONE_DAY) {
              dueWords.push(w);
            } else {
              otherLearned.push(w);
            }
          }
        }
      });
    });

    let selected = [...dueWords].sort(() => Math.random() - 0.5);
    if (selected.length < 10) {
      const remaining = 10 - selected.length;
      const fillers = [...otherLearned].sort(() => Math.random() - 0.5).slice(0, remaining);
      selected = [...selected, ...fillers];
    }
    
    if (selected.length === 0) {
      selected = [...topics[0].words].sort(() => Math.random() - 0.5).slice(0, 10);
    }

    setQuizWords(selected.slice(0, 10));
    setQuizTitle("Daily Quiz");
    setActiveTopic(null);
    setView("quiz");
    setIsSidebarOpen(false);
  };

  const handleBackToHome = () => {
    setView("home");
    setActiveTopic(null);
    setQuizWords(null);
    setIsSidebarOpen(false);
  };

  const handleQuizComplete = (score: number) => {
    setUserData((prev) => {
       let next = markActivityToday(prev);
       if (quizTitle === "Daily Quiz" && quizWords) {
         let reviews = { ...(next.reviews || {}) };
         const now = Date.now();
         quizWords.forEach(w => {
           const r = reviews[w.id];
           if (r) {
             reviews[w.id] = { count: r.count + 1, lastReviewAt: now };
           } else {
             reviews[w.id] = { count: 1, lastReviewAt: now };
           }
         });
         next = { ...next, reviews };
       }
       saveUserData(next);
       return next;
    });
  };

  const calculateStreak = (activity: string[]) => {
    if (!activity || activity.length === 0) return 0;
    const sorted = [...new Set(activity)].sort((a,b) => b.localeCompare(a));
    const todayStr = new Date().toISOString().split('T')[0];
    let yesterdayObj = new Date();
    yesterdayObj.setDate(yesterdayObj.getDate() - 1);
    const yesterdayStr = yesterdayObj.toISOString().split('T')[0];

    let streak = 0;
    let expectedDate = todayStr;
    if (sorted[0] === todayStr) {
       // all good
    } else if (sorted[0] === yesterdayStr) {
       expectedDate = yesterdayStr;
    } else {
       return 0; // broken streak
    }

    let d = new Date(expectedDate);
    for (const date of sorted) {
       if (date === d.toISOString().split('T')[0]) {
           streak++;
           d.setDate(d.getDate() - 1);
       } else {
           break;
       }
    }
    return streak;
  };

  const currentStreak = calculateStreak(userData.activity);
  const currentTopicForNav = activeTopic || topics[0];
  const totalLearnedWords = Object.keys(userData.learned).length;
  const totalWords = topics.reduce((acc, t) => acc + t.words.length, 0);
  const progressPct = totalWords > 0 ? Math.round((totalLearnedWords / totalWords) * 100) : 0;

  return (
    <div className="flex h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-60 lg:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-3.5 sm:p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={handleBackToHome}>
              <img 
                src="/logo.svg" 
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.png"; }}
                alt="VocabMaster Logo" 
                className="w-9 h-9 object-contain drop-shadow-xs shrink-0 group-hover:scale-105 transition-transform" 
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white leading-none">VocabMaster</h1>
                <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">English Academy</span>
              </div>
            </div>
            <button 
              className="md:hidden p-1.5 -mr-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg" 
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          
          <nav className="space-y-0.5">
            <button 
              onClick={handleBackToHome} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'home' ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">📚</span> Từ vựng (Learn)
            </button>
            <button 
              onClick={() => handleSelectStudy(currentTopicForNav)} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'study' ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">⚡</span> Flashcards
            </button>
            <button 
              onClick={() => { setView('questions'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'questions' ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">❓</span> Cách viết câu hỏi
            </button>
            <button 
              onClick={() => { setView('syntax'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'syntax' ? 'bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">📐</span> Cú pháp câu
            </button>
            <button 
              onClick={() => { setView('tenses'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'tenses' ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">⏳</span> 12 Thì tiếng Anh
            </button>
            <button 
              onClick={() => { setView('film'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'film' ? 'bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">🎬</span> Học qua Phim (Films)
            </button>
            <button 
              onClick={() => { setView('reading'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'reading' ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">📖</span> Đọc song ngữ
            </button>
            <button 
              onClick={() => { setView('listening'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'listening' ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">🎧</span> Luyện nghe
            </button>
            <button 
              onClick={startDailyQuiz} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'quiz' && quizTitle === 'Daily Quiz' ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
            >
              <span className="text-base">🏆</span> Daily Quiz
            </button>
          </nav>
        </div>

        <div className="mt-auto p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 px-1">Chủ đề từ vựng ({topics.length})</h3>
          <div className="space-y-0.5 overflow-y-auto max-h-[180px] lg:max-h-[220px] pr-1 scrollbar-thin">
            {topics.map(t => {
              const completedCount = t.words.filter(w => userData.learned[w.id]).length;
              const isActive = activeTopic?.id === t.id && view === 'study';
              return (
                <button 
                  key={t.id} 
                  onClick={() => { setActiveTopic(t); setView('study'); setIsSidebarOpen(false); }} 
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-xs ${isActive ? 'bg-emerald-50 dark:bg-emerald-950/70 font-bold text-emerald-900 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-800/60' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'}`}
                >
                  <div className="flex items-center gap-2 truncate pr-1">
                    <span className="text-base shrink-0">{t.icon}</span>
                    <span className="truncate">{t.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0">{completedCount}/{t.words.length}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Learning Progress Summary */}
        <div className="p-3 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Tiến độ từ vựng</span>
              <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400">
                {totalLearnedWords}/{totalWords} ({progressPct}%)
              </span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(progressPct, 4))}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[10px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 font-medium">
                <span>🔥</span> {currentStreak} ngày chuỗi học
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Lưu tự động</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 w-full h-full overflow-hidden">
        {/* Compact Header */}
        <header className="h-13 md:h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-4 md:px-6 flex items-center justify-between shrink-0 z-10 transition-colors">
          <div className="flex items-center min-w-0">
            <button 
              className="mr-1.5 md:hidden p-1.5 -ml-1 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Mở menu điều hướng"
            >
              <Menu size={20} />
            </button>
            <img 
              src="/logo.svg" 
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/logo.png"; }}
              alt="Logo" 
              className="w-7 h-7 object-contain mr-2 md:hidden shrink-0 cursor-pointer" 
              referrerPolicy="no-referrer"
              onClick={handleBackToHome}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none">
                {view === 'home' ? 'Dashboard' : view === 'study' ? 'Học Thẻ Từ' : view === 'reading' ? 'Luyện Đọc' : view === 'listening' ? 'Luyện Nghe' : view === 'questions' ? 'Kỹ Năng Đặt Câu Hỏi' : view === 'syntax' ? 'Ngữ Pháp Cú Pháp' : view === 'tenses' ? '12 Thì' : view === 'film' ? 'Học Qua Phim' : 'Kiểm Tra'}
              </span>
              <h2 className="text-xs sm:text-sm md:text-base font-black text-slate-800 dark:text-slate-100 truncate mt-0.5">
                {view === 'quiz' ? quizTitle : view === 'reading' ? 'Reading Song Ngữ' : view === 'listening' ? 'Listening Comprehension' : view === 'questions' ? 'Học Cách Viết Câu Hỏi' : view === 'syntax' ? 'Cú Pháp & Mô Hình Câu' : view === 'tenses' ? '12 Thì Tiếng Anh' : view === 'film' ? 'Học Tiếng Anh Qua Phim (Films & Series)' : activeTopic ? activeTopic.name : 'Trang Chủ'}
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Streak */}
            <div className="flex items-center gap-1.5 bg-orange-50 dark:bg-orange-950/60 px-2 sm:px-2.5 py-1 rounded-full border border-orange-200/80 dark:border-orange-800/60">
              <span className="text-orange-500 text-sm leading-none flex items-center">🔥</span>
              <span className="font-bold text-xs text-orange-700 dark:text-orange-300 hidden sm:inline">{currentStreak} Ngày liên tục</span>
              <span className="font-bold text-xs text-orange-700 dark:text-orange-300 sm:hidden">{currentStreak}</span>
            </div>

            {/* Dark / Light Mode Switcher Icon (Requested Feature) */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 border border-slate-200/90 dark:border-slate-700 text-slate-700 dark:text-amber-400 active:scale-95 shadow-2xs cursor-pointer"
              title={theme === "dark" ? "Chuyển sang Chế độ sáng (Light Mode)" : "Chuyển sang Chế độ tối (Dark Mode)"}
              aria-label={theme === "dark" ? "Chuyển sang Chế độ sáng" : "Chuyển sang Chế độ tối"}
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon size={18} className="text-slate-600 transition-transform hover:-rotate-12" />
              )}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
          {view === "home" && (
            <Home 
              topics={topics} 
              onSelectStudy={handleSelectStudy} 
              onSelectQuiz={handleSelectQuiz} 
              userData={userData}
              onNavigateToQuestions={() => { setView('questions'); setIsSidebarOpen(false); }}
              onNavigateToSyntax={() => { setView('syntax'); setIsSidebarOpen(false); }}
              onNavigateToTenses={() => { setView('tenses'); setIsSidebarOpen(false); }}
              onNavigateToFilms={() => { setView('film'); setIsSidebarOpen(false); }}
            />
          )}
          {view === "study" && activeTopic && (
            <StudyMode 
              key={activeTopic.id}
              topic={activeTopic} 
              onBack={handleBackToHome} 
              onLearnWord={handleLearnWord}
              userData={userData}
            />
          )}
          {view === "quiz" && quizWords && (
            <QuizMode 
              topicName={quizTitle} 
              words={quizWords}
              allWords={topics.flatMap(t => t.words)}
              onBack={handleBackToHome} 
              onComplete={handleQuizComplete}
            />
          )}
          {view === "reading" && (
            <ReadingMode 
              articles={readingArticles} 
              onBack={handleBackToHome} 
            />
          )}
          {view === "listening" && (
            <ListeningMode 
              exercises={listeningExercises} 
              onBack={handleBackToHome} 
            />
          )}
          {view === "questions" && (
            <QuestionMasteryMode 
              onBack={handleBackToHome} 
            />
          )}
          {view === "syntax" && (
            <SyntaxMode 
              onBack={handleBackToHome} 
            />
          )}
          {view === "tenses" && (
            <TensesMode 
              onBack={handleBackToHome} 
            />
          )}
          {view === "film" && (
            <FilmMode 
              onBack={handleBackToHome} 
            />
          )}
        </div>
      </main>

    </div>
  );
}


