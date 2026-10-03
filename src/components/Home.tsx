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
}

export default function Home({ 
  topics, 
  onSelectStudy, 
  onSelectQuiz, 
  userData,
  onNavigateToQuestions,
  onNavigateToSyntax,
  onNavigateToTenses
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
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
              VocabMaster Pro
            </span>
            <span className="text-[11px] font-bold text-slate-400">• Song ngữ Anh - Việt</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Chào mừng bạn quay lại! 👋
          </h1>
          <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
            Học từ vựng chuyên ngành, chinh phục các loại câu hỏi, cú pháp nâng cao và 12 thì tiếng Anh.
          </p>
        </div>
      </header>

      {/* Week Streak Panel */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-lg shadow-slate-200/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800">Chuỗi ngày học tập</h2>
            <p className="text-[11px] text-slate-400">Duy trì thói quen học mỗi ngày để đạt hiệu quả cao nhất</p>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
            🔥 Tiến độ tuần
          </span>
        </div>
        <div className="flex justify-between items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {weekDays.map((d, i) => (
            <div key={i} className="flex flex-col items-center min-w-[32px] sm:min-w-[44px]">
              <span className={`text-[9px] sm:text-xs font-bold uppercase tracking-wider mb-2 ${d.isToday ? 'text-emerald-600 font-black' : 'text-slate-400'}`}>
                {d.dayName}
              </span>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                d.isCompleted 
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200' 
                  : d.isToday ? 'bg-slate-100 border-2 border-slate-300' : 'bg-slate-50 border border-slate-200'
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
            <Sparkles size={20} className="text-indigo-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Phần Học Lớn Mới
            </h2>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            Toàn diện & Tương tác cao
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Question Mastery */}
          <div 
            onClick={onNavigateToQuestions}
            className="group bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-[28px] p-6 sm:p-7 shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 bg-white/15 backdrop-blur-md rounded-2xl inline-block">❓</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full text-white">
                  6 Thể loại
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2">Cách Viết Câu Hỏi</h3>
              <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Wh-questions, Yes/No, câu hỏi đuôi (Tag), câu hỏi gián tiếp, câu hỏi phủ định & xếp từ tương tác.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Bắt đầu học câu hỏi</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 2: Syntax Mastery */}
          <div 
            onClick={onNavigateToSyntax}
            className="group bg-gradient-to-br from-purple-600 to-indigo-900 text-white rounded-[28px] p-6 sm:p-7 shadow-lg shadow-purple-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 bg-white/15 backdrop-blur-md rounded-2xl inline-block">📐</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full text-white">
                  Ngữ pháp nâng cao
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2">Cú Pháp & Mô Hình Câu</h3>
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                5 mô hình cốt lõi, đảo ngữ (Inversion), câu chẻ (Cleft), bị động đặc biệt, câu điều kiện & so sánh kép.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Khám phá cú pháp câu</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 3: Tenses Mastery */}
          <div 
            onClick={onNavigateToTenses}
            className="group bg-gradient-to-br from-blue-600 to-cyan-700 text-white rounded-[28px] p-6 sm:p-7 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2.5 bg-white/15 backdrop-blur-md rounded-2xl inline-block">⏳</span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full text-white">
                  12 Thì + Tương lai gần
                </span>
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2">12 Thì Tiếng Anh</h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Trục thời gian tương tác trực quan, công thức (+/-/?), dấu hiệu nhận biết đặc trưng & trắc nghiệm chia thì.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
              <span>Làm chủ 12 thì</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary Topics Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Chủ Đề Từ Vựng</span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {topics.length} Chủ đề
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Bao gồm các chuyên mục thực phẩm đặc biệt: Các loại cá, rau củ, ốc sò, hải sản, nấm quý
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold overflow-x-auto max-w-full scrollbar-none w-full sm:w-auto">
            <button
              onClick={() => setTopicFilter("all")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
            >
              Tất cả ({topics.length})
            </button>
            <button
              onClick={() => setTopicFilter("specialized")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 flex items-center gap-1 ${topicFilter === "specialized" ? "bg-emerald-600 text-white shadow-xs" : "text-slate-600 hover:text-emerald-700"}`}
            >
              <span>🌟 Chuyên đề đặc sắc (Cá, Rau, Ốc, Hải sản)</span>
            </button>
            <button
              onClick={() => setTopicFilter("daily")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "daily" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
            >
              Đời sống & Ẩm thực
            </button>
            <button
              onClick={() => setTopicFilter("work")}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${topicFilter === "work" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
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
                className={`rounded-[30px] p-7 border bg-white hover:shadow-2xl transition-all flex flex-col group relative overflow-hidden ${
                  isSpecialized 
                    ? "border-emerald-300 shadow-md shadow-emerald-50 hover:shadow-emerald-100/50 ring-1 ring-emerald-200" 
                    : "border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-slate-200/50"
                }`}
              >
                {/* Decorative accent */}
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-50 to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-[40px]"></div>
                
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-100 group-hover:scale-105 transition-transform">
                    {topic.icon}
                  </div>
                  <div className="text-right">
                    {isSpecialized ? (
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 block mb-1">
                        Chuyên mục mới 🌟
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                        Mastery
                      </span>
                    )}
                    <span className="text-sm font-bold text-emerald-600 block">{percent}%</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{topic.name}</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-6">{topic.words.length} từ vựng chuẩn kèm phát âm & ví dụ</p>
                
                <div className="w-full bg-slate-100 rounded-full h-2 mb-6 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${percent}%` }}></div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => onSelectStudy(topic)}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-2xl font-bold hover:bg-slate-800 transition active:scale-95 shadow-md text-sm"
                  >
                    <BookOpen size={16} /> Học từ
                  </button>
                  <button
                    onClick={() => onSelectQuiz(topic)}
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 py-3 rounded-2xl font-bold hover:bg-emerald-100 transition active:scale-95 text-sm"
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
