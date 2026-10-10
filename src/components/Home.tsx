import { useState } from "react";
import { Topic } from "../types";
import { motion } from "motion/react";
import { BookOpen, Gamepad2, Check, Sparkles, HelpCircle, Layers, Clock, ArrowRight } from "lucide-react";
import { UserData } from "../App";

interface HomeProps {
  topics: Topic[];
  onSelectStudy: (topic: Topic) => void;
  onSelectQuiz: (topic: Topic) => void;
  userData: UserData;
  onNavigateToQuestions?: () => void;
  onNavigateToSyntax?: () => void;
  onNavigateToTenses?: () => void;
  onNavigateToFilms?: () => void;
}

export default function Home({ 
  topics, 
  onSelectStudy, 
  onSelectQuiz, 
  userData,
  onNavigateToQuestions,
  onNavigateToSyntax,
  onNavigateToTenses,
  onNavigateToFilms
}: HomeProps) {
  const [topicFilter, setTopicFilter] = useState<"all" | "specialized" | "daily" | "work">("all");

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

  const filteredTopics = topics.filter(t => {
    if (topicFilter === "specialized") {
      return t.id.startsWith("specialized-");
    }
    if (topicFilter === "daily") {
      return ["fruits-veggies", "everyday", "home", "kitchen", "clothing", "shopping"].includes(t.id);
    }
    if (topicFilter === "work") {
      return ["business", "jobs", "technology2", "finance", "education", "law"].includes(t.id);
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-3.5 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <header className="flex items-center justify-between gap-4 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-800/80">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-300/30">
              VocabMaster Official
            </span>
            <span className="text-[11px] font-medium text-slate-300 hidden sm:inline">• Song ngữ Anh - Việt</span>
          </div>
          <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight">
            Chào mừng bạn đến với VocabMaster! 🎓
          </h1>
          <p className="text-slate-300 font-medium text-xs sm:text-sm mt-1 leading-relaxed">
            Học từ vựng chuyên ngành, chinh phục các loại câu hỏi, cú pháp câu và toàn diện 12 thì tiếng Anh thực hành.
          </p>
        </div>
        <div className="shrink-0">
          <img 
            src="/logo.png" 
            alt="VocabMaster Logo Badge" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl hover:scale-105 transition-transform" 
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Week Streak Panel */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/30 dark:shadow-none">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100">Chuỗi ngày học tập</h2>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">Duy trì thói quen học mỗi ngày để đạt hiệu quả cao nhất</p>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-800/60">
            🔥 Tiến độ tuần
          </span>
        </div>
        <div className="flex justify-between items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {weekDays.map((d, i) => (
            <div key={i} className="flex flex-col items-center min-w-[32px] sm:min-w-[44px]">
              <span className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 ${d.isToday ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-slate-400 dark:text-slate-500'}`}>
                {d.dayName}
              </span>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                d.isCompleted 
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200 dark:shadow-none' 
                  : d.isToday ? 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800'
              }`}>
                {d.isCompleted ? <Check size={16} strokeWidth={3} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Major Learning Modules (Phần lớn mới bổ sung theo yêu cầu) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Phần Học Lớn Mới
            </h2>
          </div>
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 px-3 py-1 rounded-full">
            Toàn diện & Tương tác cao
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Question Mastery */}
          <div 
            onClick={onNavigateToQuestions}
            className="group bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-[24px] p-5 sm:p-6 shadow-md shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-white/15 backdrop-blur-md rounded-xl inline-block">❓</span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                  6 Thể loại
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1.5">Cách Viết Câu Hỏi</h3>
              <p className="text-indigo-100 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                Wh-questions, Yes/No, câu hỏi đuôi (Tag), gián tiếp, phủ định & mẹo nhớ thần thánh QUASI.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Học câu hỏi</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Card 2: Syntax Mastery */}
          <div 
            onClick={onNavigateToSyntax}
            className="group bg-gradient-to-br from-purple-600 to-indigo-900 text-white rounded-[24px] p-5 sm:p-6 shadow-md shadow-purple-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-white/15 backdrop-blur-md rounded-xl inline-block">📐</span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                  Cấu trúc câu
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1.5">Cú Pháp Câu</h3>
              <p className="text-purple-100 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                5 mô hình cốt lõi, Linking Verbs, đảo ngữ, câu chẻ, bị động & câu điều kiện dễ hiểu.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Khám phá cú pháp</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Card 3: Tenses Mastery */}
          <div 
            onClick={onNavigateToTenses}
            className="group bg-gradient-to-br from-blue-600 to-cyan-700 text-white rounded-[24px] p-5 sm:p-6 shadow-md shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-white/15 backdrop-blur-md rounded-xl inline-block">⏳</span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                  12 Thì
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1.5">12 Thì Tiếng Anh</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                Ma trận 3x4 bất biến, công thức (+/-/?), dấu hiệu nhận biết & mẹo phân biệt các thì dễ nhầm.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Làm chủ 12 thì</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Card 4: Film Section (NEW) */}
          <div 
            onClick={onNavigateToFilms}
            className="group bg-gradient-to-br from-rose-500 via-pink-600 to-rose-700 text-white rounded-[24px] p-5 sm:p-6 shadow-md shadow-rose-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 bg-white/15 backdrop-blur-md rounded-xl inline-block">🎬</span>
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-2 py-0.5 rounded-full shadow-xs">
                  Mới ra mắt
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1.5">Học Qua Phim (Films)</h3>
              <p className="text-rose-100 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                Tổng hợp phim hoạt hình & phim thật đủ mọi level A1-C2 (Nemo, Friends, Suits...). Từ vựng & câu thoại đắt giá!
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Xem phim & Học</span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary Topics Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>Chủ Đề Từ Vựng</span>
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                {topics.length} Chủ đề
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Bao gồm các chuyên mục thực phẩm đặc biệt: Các loại cá, rau củ, ốc sò, hải sản, nấm quý
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 text-xs font-bold overflow-x-auto max-w-full scrollbar-none w-full sm:w-auto">
            <button
              onClick={() => setTopicFilter("all")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "all" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-extrabold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Tất cả ({topics.length})
            </button>
            <button
              onClick={() => setTopicFilter("specialized")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1 ${topicFilter === "specialized" ? "bg-emerald-600 text-white shadow-xs font-extrabold" : "text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400"}`}
            >
              <span>🌟 Chuyên đề đặc sắc (Cá, Rau, Ốc, Hải sản)</span>
            </button>
            <button
              onClick={() => setTopicFilter("daily")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "daily" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-extrabold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Đời sống & Ẩm thực
            </button>
            <button
              onClick={() => setTopicFilter("work")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "work" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-extrabold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
            >
              Công việc & Xã hội
            </button>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredTopics.map((topic, index) => {
            const completedCount = topic.words.filter(w => userData.learned[w.id]).length;
            const percent = Math.min(100, Math.round((completedCount / topic.words.length) * 100));
            const isSpecialized = topic.id.startsWith("specialized-");

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.3) }}
                className={`rounded-[26px] sm:rounded-[30px] p-5 sm:p-7 border bg-white dark:bg-slate-900 hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden ${
                  isSpecialized 
                    ? "border-emerald-300 dark:border-emerald-600/80 shadow-md shadow-emerald-50 dark:shadow-none hover:shadow-emerald-100/50 ring-1 ring-emerald-200 dark:ring-emerald-700/60" 
                    : "border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-slate-200/50"
                }`}
              >
                {/* Decorative accent */}
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-50 to-emerald-50/20 dark:from-slate-800/40 dark:to-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-[40px]"></div>
                
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform">
                    {topic.icon}
                  </div>
                  <div className="text-right">
                    {isSpecialized ? (
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/70 block mb-1">
                        Chuyên mục mới 🌟
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Mastery
                      </span>
                    )}
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 block">{percent}%</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{topic.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium mb-6">{topic.words.length} từ vựng chuẩn kèm phát âm & ví dụ</p>
                
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-6 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => onSelectStudy(topic)}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-600 text-white py-3 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-emerald-500 transition active:scale-95 shadow-md text-sm"
                  >
                    <BookOpen size={16} /> Học từ
                  </button>
                  <button
                    onClick={() => onSelectQuiz(topic)}
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 py-3 rounded-2xl font-bold hover:bg-emerald-100 dark:hover:bg-slate-700 transition active:scale-95 text-sm"
                  >
                    <Gamepad2 size={16} /> Kiểm tra
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
