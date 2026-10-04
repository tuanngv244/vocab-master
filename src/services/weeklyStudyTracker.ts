/**
 * Service quản lý ghi nhớ vị trí thẻ từ vựng (Card index) theo từng section/chủ đề trong tuần.
 * Tự động ghi nhớ vị trí card đang học dở cho từng topic.
 * Đến cuối tuần (hết ngày Thứ 7 lúc 23:59:59), toàn bộ vị trí sẽ tự động reset về 0 cho tuần mới.
 */

const STORAGE_KEY = "vocab_weekly_topic_card_positions";

export interface WeeklyTrackerData {
  expiresAt: number; // Timestamp hết hạn (Thứ 7 tuần này lúc 23:59:59.999)
  weekLabel: string;
  positions: Record<string, number>; // topicId -> index (0-based)
}

/**
 * Tính timestamp 23:59:59.999 của ngày Thứ 7 trong tuần hiện tại
 */
export function getUpcomingSaturdayExpiry(): number {
  const now = new Date();
  const day = now.getDay(); // 0: CN, 1: T2, 2: T3, 3: T4, 4: T5, 5: T6, 6: T7
  const daysUntilSaturday = (6 - day + 7) % 7;
  
  const targetSaturday = new Date(now);
  targetSaturday.setDate(now.getDate() + daysUntilSaturday);
  targetSaturday.setHours(23, 59, 59, 999);
  return targetSaturday.getTime();
}

/**
 * Tạo label hiển thị tuần (ví dụ: "Tuần 40 (Reset tối Thứ 7)")
 */
export function getCurrentWeekLabel(): string {
  const now = new Date();
  const oneJan = new Date(now.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((now.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((now.getDay() + 1 + numberOfDays) / 7);
  return `Tuần ${weekNumber} (Tự reset vào 24h Thứ 7)`;
}

/**
 * Lấy dữ liệu vị trí thẻ từ localStorage, tự kiểm tra nếu đã qua Thứ 7 thì tự reset toàn bộ về 0
 */
export function getWeeklyTopicPositions(): Record<string, number> {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (raw) {
      const data: WeeklyTrackerData = JSON.parse(raw);
      // Nếu chưa hết hạn (chưa qua cuối tuần thứ 7)
      if (data.expiresAt && now <= data.expiresAt && data.positions) {
        return data.positions;
      }
    }

    // Nếu chưa có hoặc đã hết tuần (qua Thứ 7) -> Tự động reset về 0 và cấp hạn mới
    const freshData: WeeklyTrackerData = {
      expiresAt: getUpcomingSaturdayExpiry(),
      weekLabel: getCurrentWeekLabel(),
      positions: {}
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(freshData));
    return freshData.positions;
  } catch (e) {
    console.error("Lỗi đọc weekly study tracker:", e);
    return {};
  }
}

/**
 * Lưu vị trí thẻ hiện tại của một chủ đề cụ thể
 */
export function saveTopicCardIndex(topicId: string, cardIndex: number): void {
  if (typeof window === "undefined" || !topicId) return;

  try {
    const currentPositions = getWeeklyTopicPositions();
    currentPositions[topicId] = Math.max(0, cardIndex);

    const data: WeeklyTrackerData = {
      expiresAt: getUpcomingSaturdayExpiry(),
      weekLabel: getCurrentWeekLabel(),
      positions: currentPositions
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Lỗi lưu vị trí thẻ topic:", e);
  }
}

/**
 * Lấy vị trí thẻ đã lưu cho một chủ đề cụ thể. Nếu chưa học thì trả về 0.
 */
export function getSavedTopicCardIndex(topicId: string, maxWords: number): number {
  if (!topicId) return 0;
  const positions = getWeeklyTopicPositions();
  const saved = positions[topicId];
  if (typeof saved === "number" && saved >= 0) {
    return Math.min(saved, Math.max(0, maxWords - 1));
  }
  return 0;
}
