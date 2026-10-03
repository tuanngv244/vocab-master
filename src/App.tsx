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
import { Menu, X } from "lucide-react";
import ReadingMode from "./components/ReadingMode";
import ListeningMode from "./components/ListeningMode";
import QuestionMasteryMode from "./components/QuestionMasteryMode";
import SyntaxMode from "./components/SyntaxMode";
import TensesMode from "./components/TensesMode";
import { readingArticles, listeningExercises } from "./data_advanced";

type View = "home" | "study" | "quiz" | "reading" | "listening" | "questions" | "syntax" | "tenses";

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

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-60 lg:w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-3.5 sm:p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleBackToHome}>
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-md shadow-emerald-200 shrink-0">
                <span className="text-white font-black text-base">V</span>
              </div>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-900">VocabMaster</h1>
            </div>
            <button 
              className="md:hidden p-1.5 -mr-1 text-slate-500 hover:bg-slate-100 rounded-lg" 
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          
          <nav className="space-y-0.5">
            <button 
              onClick={handleBackToHome} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'home' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">📚</span> Từ vựng (Learn)
            </button>
            <button 
              onClick={() => handleSelectStudy(currentTopicForNav)} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'study' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">⚡</span> Flashcards
            </button>
            <button 
              onClick={() => { setView('questions'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'questions' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">❓</span> Cách viết câu hỏi
            </button>
            <button 
              onClick={() => { setView('syntax'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'syntax' ? 'bg-purple-50 text-purple-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">📐</span> Cú pháp câu
            </button>
            <button 
              onClick={() => { setView('tenses'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'tenses' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">⏳</span> 12 Thì tiếng Anh
            </button>
            <button 
              onClick={() => { setView('reading'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'reading' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">📖</span> Đọc song ngữ
            </button>
            <button 
              onClick={() => { setView('listening'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'listening' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">🎧</span> Luyện nghe
            </button>
            <button 
              onClick={startDailyQuiz} 
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${view === 'quiz' && quizTitle === 'Daily Quiz' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <span className="text-base">🏆</span> Daily Quiz
            </button>
          </nav>
        </div>

        <div className="mt-auto p-3.5 sm:p-4 border-t border-slate-100">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Chủ đề từ vựng ({topics.length})</h3>
          <div className="space-y-0.5 overflow-y-auto max-h-[180px] lg:max-h-[220px] pr-1 scrollbar-thin">
            {topics.map(t => {
              const completedCount = t.words.filter(w => userData.learned[w.id]).length;
              const isActive = activeTopic?.id === t.id;
              return (
                <button 
                  key={t.id} 
                  onClick={() => { setActiveTopic(t); if(view === 'home') setView('study'); setIsSidebarOpen(false); }} 
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors text-xs ${isActive ? 'bg-emerald-50 font-bold text-emerald-900 border border-emerald-100' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-2 truncate pr-1">
                    <span className="text-base shrink-0">{t.icon}</span>
                    <span className="truncate">{t.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">{completedCount}/{t.words.length}</span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 w-full h-full overflow-hidden">
        {/* Compact Header */}
        <header className="h-13 md:h-14 bg-white border-b border-slate-200 px-3.5 md:px-6 flex items-center justify-between shrink-0 z-10">
          <div className="flex items-center min-w-0">
            <button 
              className="mr-2 md:hidden p-1.5 -ml-1 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Mở menu điều hướng"
            >
              <Menu size={20} />
            </button>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                {view === 'home' ? 'Dashboard' : view === 'study' ? 'Học Thẻ Từ' : view === 'reading' ? 'Luyện Đọc' : view === 'listening' ? 'Luyện Nghe' : view === 'questions' ? 'Kỹ Năng Đặt Câu Hỏi' : view === 'syntax' ? 'Ngữ Pháp Cú Pháp' : view === 'tenses' ? '12 Thì' : 'Kiểm Tra'}
              </span>
              <h2 className="text-sm md:text-base font-black text-slate-800 truncate mt-0.5">
                {view === 'quiz' ? quizTitle : view === 'reading' ? 'Reading Song Ngữ' : view === 'listening' ? 'Listening Comprehension' : view === 'questions' ? 'Học Cách Viết Câu Hỏi' : view === 'syntax' ? 'Cú Pháp & Mô Hình Câu' : view === 'tenses' ? '12 Thì Tiếng Anh' : activeTopic ? activeTopic.name : 'Trang Chủ'}
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <div className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/80">
              <span className="text-orange-500 text-sm leading-none flex items-center">🔥</span>
              <span className="font-bold text-xs text-orange-700 hidden sm:inline">{currentStreak} Ngày liên tục</span>
              <span className="font-bold text-xs text-orange-700 sm:hidden">{currentStreak}</span>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=catbird" alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {view === "home" && (
            <Home 
              topics={topics} 
              onSelectStudy={handleSelectStudy} 
              onSelectQuiz={handleSelectQuiz} 
              userData={userData}
              onNavigateToQuestions={() => { setView('questions'); setIsSidebarOpen(false); }}
              onNavigateToSyntax={() => { setView('syntax'); setIsSidebarOpen(false); }}
              onNavigateToTenses={() => { setView('tenses'); setIsSidebarOpen(false); }}
            />
          )}
          {view === "study" && activeTopic && (
            <StudyMode 
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
        </div>
      </main>
    </div>
  );
}


