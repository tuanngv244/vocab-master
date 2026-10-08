import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  X, User, Mail, Phone, CheckCircle2, LogOut
} from "lucide-react";
import { UserProfile } from "../types/auth";
import { 
  saveUserProfile, clearUserProfile, sendTelemetryReport
} from "../services/telemetryCron";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onUserChange: (user: UserProfile | null) => void;
  currentContext: { view: string; activeTopic?: string };
}

const AVATAR_OPTIONS = ["👨‍🎓", "👩‍🎓", "🧑‍💻", "👩‍💻", "🚀", "🌟", "📚", "🎯", "🦁", "🦉"];

const TARGET_GOALS = [
  "Giao tiếp thường ngày & Du lịch",
  "Luyện thi IELTS (Target 6.5 - 7.5)",
  "Luyện thi TOEIC (Target 750+)",
  "Tiếng Anh Công sở & Phỏng vấn xin việc",
  "Nâng cao Ngữ pháp & Viết học thuật",
];

const OCCUPATION_OPTIONS = [
  "Người đi làm",
  "Học sinh / Sinh viên",
  "Kỹ sư / Lập trình viên",
  "Doanh nhân / Tự do",
  "Khác",
];

export default function LoginModal({
  isOpen,
  onClose,
  currentUser,
  onUserChange,
  currentContext,
}: LoginModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("👨‍🎓");
  const [targetGoal, setTargetGoal] = useState(TARGET_GOALS[0]);
  const [occupation, setOccupation] = useState(OCCUPATION_OPTIONS[0]);
  const [level, setLevel] = useState<UserProfile["level"]>("Trung cấp (B1-B2)");

  // Populate form on open or currentUser change
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone || "");
      setAvatar(currentUser.avatar || "👨‍🎓");
      setTargetGoal(currentUser.targetGoal || TARGET_GOALS[0]);
      setOccupation(currentUser.occupation || OCCUPATION_OPTIONS[0]);
      setLevel(currentUser.level || "Trung cấp (B1-B2)");
      setIsEditing(false);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setAvatar("👨‍🎓");
      setTargetGoal(TARGET_GOALS[0]);
      setOccupation(OCCUPATION_OPTIONS[0]);
      setLevel("Trung cấp (B1-B2)");
      setIsEditing(true);
    }
  }, [currentUser, isOpen]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Vui lòng điền họ tên và email.");
      return;
    }

    const updatedProfile: UserProfile = {
      id: currentUser ? currentUser.id : "user_" + Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      avatar,
      targetGoal,
      occupation,
      level,
      joinedAt: currentUser?.joinedAt || new Date().toLocaleDateString("vi-VN"),
      lastLoginAt: new Date().toLocaleDateString("vi-VN"),
    };

    saveUserProfile(updatedProfile);
    onUserChange(updatedProfile);
    setIsEditing(false);

    // Gửi thông báo cập nhật tài khoản ngầm
    sendTelemetryReport(currentContext, true).catch(() => {});
  };

  const handleLogout = () => {
    if (confirm("Bạn có chắc chắn muốn đăng xuất khỏi tài khoản trên thiết bị này?")) {
      clearUserProfile();
      onUserChange(null);
      setIsEditing(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden text-slate-800 dark:text-slate-100"
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-850/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-lg shadow-2xs font-bold">
              {currentUser?.avatar || "👤"}
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                {currentUser ? "Thông tin người dùng" : "Đăng nhập người dùng"}
              </h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {currentUser ? "Hồ sơ học viên đã lưu vào thiết bị" : "Nhập thông tin để đăng nhập và lưu hồ sơ"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body - Single Tab Only */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-800 dark:text-slate-100">
          {currentUser && !isEditing ? (
            /* Profile View Mode */
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center gap-4">
                <span className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-md border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center text-3xl shrink-0">
                  {currentUser.avatar}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-lg text-slate-900 dark:text-white truncate">{currentUser.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                      Đã đăng nhập
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 truncate flex items-center gap-1.5 mt-0.5">
                    <Mail size={12} className="text-slate-400 shrink-0" /> {currentUser.email}
                  </p>
                  {currentUser.phone && (
                    <p className="text-xs text-slate-600 dark:text-slate-300 truncate flex items-center gap-1.5 mt-0.5">
                      <Phone size={12} className="text-slate-400 shrink-0" /> {currentUser.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase block mb-1">Mục tiêu học</span>
                  <p className="font-bold text-slate-800 dark:text-slate-100">{currentUser.targetGoal}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase block mb-1">Trình độ</span>
                  <p className="font-bold text-slate-800 dark:text-slate-100">{currentUser.level}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase block mb-1">Nghề nghiệp</span>
                  <p className="font-bold text-slate-800 dark:text-slate-100">{currentUser.occupation || "Tự do"}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase block mb-1">Ngày tham gia</span>
                  <p className="font-bold text-slate-800 dark:text-slate-100">{currentUser.joinedAt}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors"
                >
                  ✏️ Chỉnh sửa thông tin
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 text-rose-700 dark:text-rose-300 font-bold text-xs border border-rose-200 dark:border-rose-800/60 transition-colors flex items-center gap-1.5"
                >
                  <LogOut size={14} /> Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            /* Profile Edit / Login Form */
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              {!currentUser && (
                <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center gap-2.5">
                  <User size={16} className="text-emerald-700 dark:text-emerald-400 shrink-0" />
                  <p className="text-[11px] text-emerald-950 dark:text-emerald-200 font-medium leading-relaxed">
                    Vui lòng nhập thông tin để đăng nhập và lưu trữ hồ sơ học tập vào thiết bị của bạn.
                  </p>
                </div>
              )}

              {/* Avatar Picker */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                  Chọn Avatar đại diện:
                </label>
                <div className="flex flex-wrap gap-2">
                  {AVATAR_OPTIONS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setAvatar(av)}
                      className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all ${
                        avatar === av
                          ? "bg-emerald-100 dark:bg-emerald-900/80 ring-2 ring-emerald-500 scale-105"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập thông tin"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Email liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập thông tin"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Nhập thông tin"
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Nghề nghiệp
                  </label>
                  <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs bg-white"
                  >
                    {OCCUPATION_OPTIONS.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Mục tiêu học tập
                  </label>
                  <select
                    value={targetGoal}
                    onChange={(e) => setTargetGoal(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs bg-white"
                  >
                    {TARGET_GOALS.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Trình độ hiện tại
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value as UserProfile["level"])}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-xs bg-white"
                  >
                    <option value="Cơ bản (A1-A2)">Cơ bản (A1-A2)</option>
                    <option value="Trung cấp (B1-B2)">Trung cấp (B1-B2)</option>
                    <option value="Nâng cao (C1-C2)">Nâng cao (C1-C2)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                {currentUser && (
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition-colors"
                  >
                    Hủy
                  </button>
                )}
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-md transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 size={15} />
                  <span>{currentUser ? "Lưu thay đổi" : "Lưu & Đăng nhập"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
