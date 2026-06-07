import { Topic } from "../types";
import { motion } from "motion/react";
import { BookOpen, Gamepad2, Check } from "lucide-react";
import { UserData } from "../App";

interface HomeProps {
  topics: Topic[];
  onSelectStudy: (topic: Topic) => void;
  onSelectQuiz: (topic: Topic) => void;
  userData: UserData;
}

export default function Home({ topics, onSelectStudy, onSelectQuiz, userData }: HomeProps) {

  const getWeekDays = () => {
    const today = new Date();
    const day = today.getDay(); // 0 is Sun, 1 is Mon...
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));

    return Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(monday);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      const isCompleted = userData.activity.includes(dateStr);
      const isToday = new Date().toISOString().split('T')[0] === dateStr;
      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
      
      return { dateStr, dayName, isCompleted, isToday };
    });
  };

  const weekDays = getWeekDays();

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">
      <header className="mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Pick up where you left off 👋</h1>
        <p className="text-slate-500 font-medium text-base md:text-lg">Continue building your vocabulary.</p>
      </header>

      {/* Week Streak Panel */}
      <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 mb-8 md:mb-12 border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">Weekly Streak</h2>
          <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Your Activity</span>
        </div>
        <div className="flex justify-between items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {weekDays.map((d, i) => (
            <div key={i} className="flex flex-col items-center min-w-[36px] sm:min-w-[48px]">
              <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 ${d.isToday ? 'text-emerald-600' : 'text-slate-400'}`}>
                {d.dayName}
              </span>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all ${
                d.isCompleted 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                  : d.isToday ? 'bg-slate-100 border-2 border-slate-300' : 'bg-slate-50 border border-slate-200'
              }`}>
                {d.isCompleted ? <Check size={20} strokeWidth={3} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {topics.map((topic, index) => {
          const completedCount = topic.words.filter(w => userData.learned[w.id]).length;
          const percent = Math.min(100, Math.round((completedCount / topic.words.length) * 100));
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[32px] p-8 border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col group relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-50 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-[40px]"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-100">
                  {topic.icon}
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-600 block">{percent}%</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Mastery</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-1">{topic.name}</h2>
              <p className="text-slate-500 text-sm font-medium mb-8">{topic.words.length} terms to learn</p>
              
              <div className="w-full bg-slate-100 rounded-full h-2 mb-8 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
              </div>

              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => onSelectStudy(topic)}
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-2xl font-bold hover:bg-slate-800 transition active:scale-95 shadow-md flex-wrap text-sm sm:text-base"
                >
                  <BookOpen size={18} /> Learn
                </button>
                <button
                  onClick={() => onSelectQuiz(topic)}
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-3.5 rounded-2xl font-bold hover:bg-emerald-100 transition active:scale-95 flex-wrap text-sm sm:text-base"
                >
                  <Gamepad2 size={18} /> Quiz
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
