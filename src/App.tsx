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
import { readingArticles, listeningExercises } from "./data_advanced";

type View = "home" | "study" | "quiz" | "reading" | "listening";

export interface UserData {
  learned: Record<string, number>;
  activity: string[];
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
    const TWO_DAYS = 2 * 24 * 60 * 60 * 1000;
    
    let dueWords: Word[] = [];
    let otherLearned: Word[] = [];

    topics.forEach(t => {
      t.words.forEach(w => {
        const learnedAt = userData.learned[w.id];
        if (learnedAt) {
          if (now - learnedAt >= TWO_DAYS) {
            dueWords.push(w);
          } else {
            otherLearned.push(w);
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
       const next = markActivityToday(prev);
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
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleBackToHome}>
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">VocabMaster</h1>
            </div>
            <button 
              className="md:hidden p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-lg" 
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-1">
            <button 
              onClick={handleBackToHome} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${view === 'home' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className="text-lg">📚</span> Learn
            </button>
            <button 
              onClick={() => handleSelectStudy(currentTopicForNav)} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${view === 'study' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className="text-lg">⚡</span> Flashcards
            </button>
            <button 
              onClick={startDailyQuiz} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${view === 'quiz' && quizTitle === 'Daily Quiz' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className="text-lg">🏆</span> Daily Quiz
            </button>
            <button 
              onClick={() => { setView('reading'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${view === 'reading' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className="text-lg">📖</span> Reading
            </button>
            <button 
              onClick={() => { setView('listening'); setIsSidebarOpen(false); }} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${view === 'listening' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className="text-lg">🎧</span> Listening
            </button>
            <button 
              onClick={handleBackToHome} 
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors text-slate-500 hover:bg-slate-50"
            >
              <span className="text-lg">📊</span> Progress
            </button>
          </nav>
        </div>

        <div className="mt-auto p-4 sm:p-6 border-t border-slate-100 md:border-none">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Topic Categories</h3>
          <div className="space-y-1 overflow-y-auto max-h-[250px] md:max-h-[300px] pr-2">
            {topics.map(t => {
              const completedCount = t.words.filter(w => userData.learned[w.id]).length;
              const isActive = activeTopic?.id === t.id;
              return (
                <button 
                  key={t.id} 
                  onClick={() => { setActiveTopic(t); if(view === 'home') setView('study'); setIsSidebarOpen(false); }} 
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${isActive ? 'bg-white border border-slate-100 shadow-sm' : 'hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-3 truncate pr-2">
                    <span className="text-xl shrink-0">{t.icon}</span>
                    <span className={`text-sm font-semibold truncate ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>{t.name}</span>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0">{completedCount}/{t.words.length}</span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 w-full h-full">
        {/* Header */}
        <header className="h-16 md:h-20 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center">
            <button 
              className="mr-3 md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="flex flex-col min-w-0 mr-2 md:mr-4">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
                {view === 'home' ? 'Dashboard' : view === 'study' ? 'Currently Learning' : view === 'reading' ? 'Practice' : view === 'listening' ? 'Practice' : 'Quiz Mode'}
              </span>
              <h2 className="text-base md:text-lg font-bold text-slate-800 truncate">
                {view === 'quiz' ? quizTitle : view === 'reading' ? 'Reading' : view === 'listening' ? 'Listening' : activeTopic ? activeTopic.name : 'All Topics'}
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6 shrink-0">
            <div className="flex items-center gap-1.5 md:gap-2 bg-orange-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <span className="text-orange-500 text-base md:text-xl leading-none flex items-center">🔥</span>
              <span className="font-bold text-sm md:text-base text-orange-700 hidden sm:inline">{currentStreak} Day Streak</span>
              <span className="font-bold text-sm text-orange-700 sm:hidden">{currentStreak}</span>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 border-2 border-white shadow-sm shrink-0 flex items-center justify-center text-xl overflow-hidden">
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
        </div>
      </main>
    </div>
  );
}


