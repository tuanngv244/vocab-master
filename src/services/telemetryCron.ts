import { UserProfile, DeviceTelemetryInfo, CronLogEntry } from "../types/auth";

export const TARGET_EMAIL = "tuanngv24.4@gmail.com";
export const CRON_INTERVAL_MS = 4 * 60 * 60 * 1000; // 4 tiếng (14,400,000 ms)

export const STORAGE_KEY_LAST_RUN = "vocabmaster_cron_last_run";
export const STORAGE_KEY_LOGS = "vocabmaster_cron_logs";
export const STORAGE_KEY_USER = "vocabmaster_user_profile";

/**
 * Phân tích và trích xuất thông tin thiết bị chi tiết của người dùng
 */
export function getDeviceInfo(context: { view: string; activeTopic?: string }): DeviceTelemetryInfo {
  if (typeof window === "undefined") {
    return {
      deviceType: "Máy tính (Desktop)",
      deviceModel: "Server / Node.js",
      os: "Server",
      browser: "Node",
      userAgent: "Server Environment",
      screenResolution: "N/A",
      viewportSize: "N/A",
      pixelRatio: 1,
      language: "vi-VN",
      timezone: "UTC",
      onlineStatus: "Online",
      currentUrl: "/",
      currentView: context.view,
      openedAt: new Date().toISOString(),
    };
  }

  const ua = navigator.userAgent;
  let deviceType: DeviceTelemetryInfo["deviceType"] = "Máy tính (Desktop)";
  let deviceModel = "PC / Mac";
  let os = "Unknown OS";
  let browser = "Unknown Browser";

  // Phân loại Thiết bị
  const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(ua);
  const isMobile = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer/i.test(ua);

  if (isTablet) {
    deviceType = "Máy tính bảng (Tablet)";
  } else if (isMobile || window.innerWidth < 768) {
    deviceType = "Điện thoại (Mobile)";
  } else {
    deviceType = "Máy tính (Desktop)";
  }

  // Model & OS
  if (/iPhone/i.test(ua)) {
    deviceModel = "Apple iPhone";
    os = "iOS";
  } else if (/iPad/i.test(ua)) {
    deviceModel = "Apple iPad";
    os = "iPadOS";
  } else if (/Macintosh|Mac OS X/i.test(ua)) {
    deviceModel = "Apple Mac (MacBook/iMac)";
    os = "macOS";
  } else if (/Android/i.test(ua)) {
    const androidMatch = ua.match(/Android\s([0-9\.]+)/);
    os = androidMatch ? `Android ${androidMatch[1]}` : "Android";
    const modelMatch = ua.match(/;\s([^;]+)\sBuild/);
    deviceModel = modelMatch ? `Android Phone (${modelMatch[1]})` : "Thiết bị Android";
  } else if (/Windows NT 10.0/i.test(ua)) {
    os = "Windows 10 / 11";
    deviceModel = "Windows PC / Laptop";
  } else if (/Windows NT/i.test(ua)) {
    os = "Windows";
    deviceModel = "Windows PC";
  } else if (/Linux/i.test(ua)) {
    os = "Linux";
    deviceModel = "Linux Workstation";
  }

  // Trình duyệt
  if (/Edg\//i.test(ua)) {
    browser = "Microsoft Edge";
  } else if (/Chrome\//i.test(ua) && !/Edg\//i.test(ua)) {
    browser = "Google Chrome";
  } else if (/Safari\//i.test(ua) && !/Chrome\//i.test(ua)) {
    browser = "Apple Safari";
  } else if (/Firefox\//i.test(ua)) {
    browser = "Mozilla Firefox";
  } else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) {
    browser = "Opera";
  } else if (/SamsungBrowser/i.test(ua)) {
    browser = "Samsung Internet";
  }

  const connection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection;

  return {
    deviceType,
    deviceModel,
    os,
    browser,
    userAgent: ua,
    screenResolution: `${window.screen?.width || 0} x ${window.screen?.height || 0}`,
    viewportSize: `${window.innerWidth} x ${window.innerHeight}`,
    pixelRatio: window.devicePixelRatio || 1,
    language: navigator.language || "vi-VN",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Ho_Chi_Minh",
    onlineStatus: navigator.onLine ? "Online (Đang kết nối)" : "Offline (Mất mạng)",
    connectionType: connection?.effectiveType || "Wifi / Cable",
    hardwareConcurrency: navigator.hardwareConcurrency || 4,
    currentUrl: window.location.href,
    currentView: context.view,
    activeTopicOrLesson: context.activeTopic,
    openedAt: new Date().toLocaleString("vi-VN", { timeZoneName: "short" }),
  };
}

/**
 * Đọc thông tin người dùng đã đăng nhập từ localStorage
 */
export function getStoredUserProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (!raw) return null;
    return JSON.parse(raw) as UserProfile;
  } catch (err) {
    console.error("Lỗi đọc user profile:", err);
    return null;
  }
}

/**
 * Lưu thông tin người dùng vào localStorage
 */
export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
}

/**
 * Xóa thông tin người dùng (Đăng xuất)
 */
export function clearUserProfile(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY_USER);
}

/**
 * Kiểm tra xem đã đủ 4 tiếng kể từ lần gửi trước hay chưa
 */
export function shouldRunCron(): boolean {
  if (typeof window === "undefined") return false;
  const lastRunStr = localStorage.getItem(STORAGE_KEY_LAST_RUN);
  if (!lastRunStr) return true; // Chưa từng chạy lần nào -> Chạy ngay

  const lastRun = Number(lastRunStr);
  if (isNaN(lastRun)) return true;

  const diff = Date.now() - lastRun;
  return diff >= CRON_INTERVAL_MS;
}

/**
 * Lấy thời gian còn lại đến lần gửi tiếp theo (ms)
 */
export function getTimeUntilNextCron(): number {
  if (typeof window === "undefined") return CRON_INTERVAL_MS;
  const lastRunStr = localStorage.getItem(STORAGE_KEY_LAST_RUN);
  if (!lastRunStr) return 0;
  const lastRun = Number(lastRunStr);
  if (isNaN(lastRun)) return 0;
  const elapsed = Date.now() - lastRun;
  const remaining = CRON_INTERVAL_MS - elapsed;
  return Math.max(0, remaining);
}

/**
 * Lấy lịch sử các lần chạy cron từ localStorage
 */
export function getCronLogs(): CronLogEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LOGS);
    if (!raw) return [];
    return JSON.parse(raw) as CronLogEntry[];
  } catch {
    return [];
  }
}

/**
 * Ghi log lần chạy cron
 */
function recordCronLog(entry: Omit<CronLogEntry, "id">): void {
  if (typeof window === "undefined") return;
  try {
    const logs = getCronLogs();
    const newEntry: CronLogEntry = {
      ...entry,
      id: "log_" + Date.now(),
    };
    logs.unshift(newEntry);
    // Giới hạn lưu 50 logs gần nhất
    const trimmed = logs.slice(0, 50);
    localStorage.setItem(STORAGE_KEY_LOGS, JSON.stringify(trimmed));
  } catch (err) {
    console.error("Lỗi ghi cron log:", err);
  }
}

/**
 * Gửi email báo cáo thông tin người dùng truy cập về tuanngv24.4@gmail.com
 */
export async function sendTelemetryReport(
  context: { view: string; activeTopic?: string },
  force = false
): Promise<{ success: boolean; message: string }> {
  if (!force && !shouldRunCron()) {
    const minsLeft = Math.round(getTimeUntilNextCron() / (60 * 1000));
    return {
      success: false,
      message: `Chưa đến chu kỳ 4 tiếng (còn khoảng ${minsLeft} phút nữa).`,
    };
  }

  const user = getStoredUserProfile();
  const device = getDeviceInfo(context);
  const now = new Date();
  const timeFormatted = now.toLocaleString("vi-VN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const lessonName = context.activeTopic || context.view;

  // Dữ liệu chi tiết gửi qua email
  const payload = {
    _subject: `🔔 [VocabMaster 4H Cron] ${user ? `👤 ${user.name}` : "👥 Khách truy cập"} (${device.deviceType} - ${device.os})`,
    _template: "table",
    _captcha: "false",
    "=== 🎯 HỘP THƯ NHẬN ===": TARGET_EMAIL,
    "=== 🕒 THỜI GIAN TRUY CẬP ===": `${timeFormatted} (${device.timezone})`,
    
    // 1. THÔNG TIN NGƯỜI DÙNG
    "TRẠNG THÁI NGƯỜI DÙNG": user ? "✅ ĐÃ ĐĂNG NHẬP" : "⚠️ CHƯA ĐĂNG NHẬP (KHÁCH VÃNG LAI)",
    "Họ và tên người dùng": user ? user.name : "Khách chưa đăng nhập",
    "Email người dùng": user ? user.email : "Chưa có",
    "Số điện thoại": user?.phone || "Chưa cung cấp",
    "Mục tiêu học tập": user?.targetGoal || "Chưa thiết lập",
    "Trình độ người dùng": user?.level || "Cơ bản",
    "Nghề nghiệp": user?.occupation || "Không rõ",
    "Ngày tạo tài khoản": user?.joinedAt || "N/A",

    // 2. THIẾT BỊ VÀ PHẦN CỨNG
    "=== 📱 THÔNG TIN THIẾT BỊ ===": device.deviceType,
    "Loại thiết bị": device.deviceType,
    "Mẫu máy / Dòng máy": device.deviceModel,
    "Hệ điều hành (OS)": device.os,
    "Trình duyệt (Browser)": device.browser,
    "Độ phân giải màn hình": device.screenResolution,
    "Kích thước Viewport hiển thị": device.viewportSize,
    "Tỷ lệ Pixel (devicePixelRatio)": `${device.pixelRatio}x`,
    "Ngôn ngữ trình duyệt": device.language,
    "User Agent đầy đủ": device.userAgent,

    // 3. TRẠNG THÁI ỨNG DỤNG ĐANG MỞ
    "=== 📚 NỘI DUNG ĐANG XEM ===": context.view.toUpperCase(),
    "Mục / Tab đang mở": context.view,
    "Chủ đề / Bài học cụ thể": lessonName,
    "Trạng thái mạng": device.onlineStatus,
    "Loại kết nối mạng": device.connectionType || "N/A",
    "Đường dẫn URL": device.currentUrl,
  };

  let isSuccess = false;
  let statusMessage = "";

  try {
    // 1. Gửi qua formsubmit.co tới tuanngv24.4@gmail.com
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      isSuccess = true;
      statusMessage = "Đã gửi báo cáo thành công về email: " + TARGET_EMAIL;
    } else {
      statusMessage = `Server email phản hồi status: ${response.status}`;
    }
  } catch (err: unknown) {
    const error = err as Error;
    statusMessage = "Lỗi kết nối khi gửi email: " + (error?.message || String(err));
  }

  // 2. Gửi đồng thời tới proxy backend local /api/cron-report (nếu dev server đang chạy)
  try {
    await fetch("/api/cron-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Ignore if local api isn't active
    });
  } catch {
    // Safe ignore
  }

  // Lưu lại timestamp lần chạy cuối và ghi log
  localStorage.setItem(STORAGE_KEY_LAST_RUN, Date.now().toString());

  recordCronLog({
    timestamp: Date.now(),
    dateStr: timeFormatted,
    recipientEmail: TARGET_EMAIL,
    userStatus: user ? "Đã đăng nhập" : "Khách vãng lai",
    userName: user?.name,
    userEmail: user?.email,
    deviceType: device.deviceType,
    os: device.os,
    browser: device.browser,
    currentLesson: lessonName,
    status: isSuccess ? "success" : "failed",
  });

  return {
    success: isSuccess,
    message: isSuccess ? statusMessage : "Lỗi gửi: " + statusMessage,
  };
}

/**
 * Khởi động tiến trình cron job ngầm bằng JavaScript
 * - Kiểm tra ngay khi khởi động
 * - Lặp lại định kỳ mỗi 60 giây để xem đã đủ 4 tiếng chưa
 */
export function startCronWatcher(getContext: () => { view: string; activeTopic?: string }) {
  if (typeof window === "undefined") return () => {};

  // 1. Kiểm tra và kích hoạt ngay nếu đã quá 4 tiếng
  if (shouldRunCron()) {
    console.log("[VocabMaster Cron] Đã quá 4 tiếng từ lần gửi trước. Đang gửi báo cáo tới " + TARGET_EMAIL + "...");
    sendTelemetryReport(getContext(), false).catch((err) => {
      console.warn("[VocabMaster Cron] Gửi báo cáo định kỳ gặp sự cố:", err);
    });
  } else {
    const remainingMins = Math.round(getTimeUntilNextCron() / (60 * 1000));
    console.log(`[VocabMaster Cron] Cron job 4 tiếng đã bật. Lần gửi tiếp theo sau ~${remainingMins} phút.`);
  }

  // 2. Thiết lập interval kiểm tra mỗi phút
  const intervalId = window.setInterval(() => {
    if (shouldRunCron()) {
      console.log("[VocabMaster Cron] Kích hoạt chu kỳ 4 tiếng gửi thông tin...");
      sendTelemetryReport(getContext(), false).catch((err) => {
        console.warn("[VocabMaster Cron] Lỗi kích hoạt cron ngầm:", err);
      });
    }
  }, 60 * 1000); // 60 giây

  return () => {
    window.clearInterval(intervalId);
  };
}
