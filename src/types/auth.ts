export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar: string;
  targetGoal: string; // e.g. "Giao tiếp hàng ngày", "IELTS 6.5+", "TOEIC 750+", "Tiếng Anh công sở"
  occupation?: string; // "Học sinh / Sinh viên", "Người đi làm", "Tự do"
  level: "Cơ bản (A1-A2)" | "Trung cấp (B1-B2)" | "Nâng cao (C1-C2)";
  joinedAt: string;
  lastLoginAt: string;
}

export interface DeviceTelemetryInfo {
  deviceType: "Điện thoại (Mobile)" | "Máy tính bảng (Tablet)" | "Máy tính (Desktop)";
  deviceModel: string;
  os: string;
  browser: string;
  userAgent: string;
  screenResolution: string;
  viewportSize: string;
  pixelRatio: number;
  language: string;
  timezone: string;
  onlineStatus: string;
  connectionType?: string;
  hardwareConcurrency?: number;
  currentUrl: string;
  currentView: string;
  activeTopicOrLesson?: string;
  openedAt: string;
}

export interface CronLogEntry {
  id: string;
  timestamp: number;
  dateStr: string;
  recipientEmail: string;
  userStatus: "Đã đăng nhập" | "Khách vãng lai";
  userName?: string;
  userEmail?: string;
  deviceType: string;
  os: string;
  browser: string;
  currentLesson: string;
  status: "success" | "failed";
}
