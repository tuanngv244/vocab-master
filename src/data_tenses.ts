import { tensesPool } from "./data_tenses_pool";

export interface TenseExercise {
  id: string;
  type?: "choice" | "fill";
  contextScenario?: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hintVerb?: string;
}

export interface TenseDetail {
  id: string;
  name: string;
  nameVi: string;
  category: "present" | "past" | "future";
  icon: string;
  badge: string;
  formula: {
    positive: string;
    negative: string;
    question: string;
  };
  timelineLabel: string;
  timelinePoint: "past" | "now" | "future" | "span-past-now" | "span-past" | "span-future";
  memoryHack?: {
    hook: string;
    descriptionVi: string;
  };
  usages: {
    context: string;
    exampleEn: string;
    exampleVi: string;
  }[];
  signals: string[];
  tipsAndPitfalls: {
    tip: string;
    wrong?: string;
    correct?: string;
    explanationVi: string;
  };
  quiz: TenseExercise[];
}

const rawEnglishTenses: TenseDetail[] = [
  {
    id: "present-simple",
    name: "Present Simple",
    nameVi: "Hiện tại đơn",
    category: "present",
    icon: "🌱",
    badge: "Thì cơ bản nhất",
    formula: {
      positive: "S + V(s/es)  |  S + am/is/are",
      negative: "S + do/does not + V-inf  |  S + am/is/are not",
      question: "Do/Does + S + V-inf?  |  Am/Is/Are + S...?"
    },
    timelineLabel: "Hành động lặp đi lặp lại hoặc chân lý vĩnh cửu bao trùm cả quá khứ, hiện tại và tương lai",
    timelinePoint: "now",
    memoryHack: {
      hook: "🌱 Bản chất 'Hôm qua làm - Hôm nay làm - Ngày mai vẫn làm'",
      descriptionVi: "Hiện tại đơn KHÔNG PHẢI là việc đang làm lúc này! Bản chất của nó là THÓI QUEN, SỰ THẬT HIỂN NHIÊN hoặc LỊCH TRÌNH VĨNH CỬU. Hãy nhớ: 'Hôm qua mặt trời mọc hướng Đông, hôm nay vẫn mọc hướng Đông, ngày mai vẫn mọc hướng Đông' -> Dùng Hiện tại đơn!"
    },
    usages: [
      { context: "Sự thật hiển nhiên, quy luật tự nhiên", exampleEn: "Water boils at 100 degrees Celsius at sea level.", exampleVi: "Nước sôi ở 100 độ C tại mực nước biển." },
      { context: "Thói quen, lịch trình thường ngày", exampleEn: "I catch the 7:15 AM bus to the tech campus every morning.", exampleVi: "Tôi bắt chuyến xe buýt lúc 7:15 sáng đến khu công nghệ mỗi sáng." },
      { context: "Lịch trình tàu xe, sự kiện cố định", exampleEn: "The international flight from Tokyo lands at 9:30 tonight.", exampleVi: "Chuyến bay quốc tế từ Tokyo hạ cánh lúc 9:30 tối nay." }
    ],
    signals: ["always", "usually", "often", "sometimes", "never", "every day/week/month", "once a week", "seldom"],
    tipsAndPitfalls: {
      tip: "Chú ý thêm 's/es' khi chủ ngữ là ngôi thứ 3 số ít (He, She, It, Danh từ số ít). Khi đã mượn trợ động từ 'does/doesn't', động từ chính về NGUYÊN THỂ!",
      wrong: "He doesn't likes coffee.",
      correct: "He doesn't like coffee.",
      explanationVi: "Đã có trợ động từ 'doesn't' thì động từ chính 'like' phải ở dạng nguyên thể không chia."
    },
    quiz: [
      {
        id: "t_ps_1",
        type: "choice",
        contextScenario: "⏰ Thói quen sinh hoạt văn phòng",
        question: "Chọn dạng đúng: 'Our team leader usually _____ the daily stand-up meeting at 9:00 AM.'",
        options: ["host", "hosts", "is hosting", "hosted"],
        answer: "hosts",
        explanation: "Chủ ngữ 'Our team leader' là ngôi thứ 3 số ít, thói quen lặp lại có dấu hiệu 'usually' -> chia 'hosts'."
      },
      {
        id: "t_ps_2",
        type: "choice",
        contextScenario: "✈️ Tra cứu lịch trình tại quầy thông tin sân bay",
        question: "Chọn câu hỏi chuẩn ngữ pháp khi hỏi nhân viên mặt đất:",
        options: [
          "Does the last flight to Da Nang departs on time?",
          "Does the last flight to Da Nang depart on time?",
          "Is the last flight to Da Nang departs on time?",
          "Do the last flight to Da Nang depart on time?"
        ],
        answer: "Does the last flight to Da Nang depart on time?",
        explanation: "Chủ ngữ 'the last flight' số ít -> mượn 'Does', động từ chính 'depart' ở dạng nguyên thể."
      },
      {
        id: "t_ps_3",
        type: "choice",
        contextScenario: "🌐 Thuyết minh khoa học tự nhiên",
        question: "Điền động từ: 'The Earth _____ around the Sun in approximately 365 days.'",
        options: ["revolves", "is revolving", "revolve", "revolved"],
        answer: "revolves",
        explanation: "Quy luật thiên văn vĩnh viễn (chân lý khách quan) luôn chia ở thì Hiện tại đơn: 'revolves'."
      }
    ]
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    nameVi: "Hiện tại tiếp diễn",
    category: "present",
    icon: "⚡",
    badge: "Đang diễn ra",
    formula: {
      positive: "S + am/is/are + V-ing",
      negative: "S + am/is/are + not + V-ing",
      question: "Am/Is/Are + S + V-ing?"
    },
    timelineLabel: "Hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói",
    timelinePoint: "now",
    memoryHack: {
      hook: "⚡ Công thức bất biến: 'Không có BE hoặc thiếu ING là SAI'",
      descriptionVi: "Đã là tiếp diễn thì LUÔN LUÔN phải có 2 thành phần: Động từ TO BE (am/is/are) + V-ING (She IS workING, cấm nói 'She working'). Bản chất là hành động ĐANG DỞ DANG hoặc TẠM THỜI (tháng này tôi ở nhờ, tuần này tôi học online)."
    },
    usages: [
      { context: "Đang xảy ra ngay lúc nói", exampleEn: "Look! The technicians are testing the new backup generator.", exampleVi: "Nhìn kìa! Các kỹ thuật viên đang chạy thử máy phát điện dự phòng mới." },
      { context: "Kế hoạch chắc chắn trong tương lai gần", exampleEn: "We are meeting the foreign delegation tomorrow at 2 PM.", exampleVi: "Chúng tôi sẽ tiếp đón phái đoàn nước ngoài vào lúc 2 giờ chiều mai (đã lên lịch)." },
      { context: "Phàn nàn về thói quen xấu (với always)", exampleEn: "He is always interrupting colleagues during presentations!", exampleVi: "Anh ấy cứ luôn chen ngang lời đồng nghiệp trong lúc thuyết trình!" }
    ],
    signals: ["now", "right now", "at the moment", "at present", "Look!", "Listen!", "currently"],
    tipsAndPitfalls: {
      tip: "Các động từ chỉ trạng thái, tri giác, nhận thức (Stative Verbs: understand, know, believe, like, love, need, prefer, belong...) KHÔNG chia ở thì tiếp diễn!",
      wrong: "I am knowing how to configure the firewall.",
      correct: "I know how to configure the firewall.",
      explanationVi: "'Know' là động từ trạng thái nhận thức, không chia ở thì tiếp diễn."
    },
    quiz: [
      {
        id: "t_pc_1",
        type: "choice",
        contextScenario: "📞 Trả lời cuộc gọi khẩn cấp từ khách hàng",
        question: "Bạn nhấc máy và thông báo: 'Mr. Davis cannot talk right now because he _____ a client presentation.'",
        options: ["gives", "is giving", "was giving", "has given"],
        answer: "is giving",
        explanation: "Hành động đang diễn ra ngay lúc nói có dấu hiệu 'right now' -> dùng 'is giving'."
      },
      {
        id: "t_pc_2",
        type: "choice",
        contextScenario: "🏢 Nhận diện động từ trạng thái trong phòng họp",
        question: "Chọn câu đúng: 'Do not disturb Sarah, she _____ the financial report.'",
        options: ["analyzes", "is analyzing", "analyzed", "has analyzed"],
        answer: "is analyzing",
        explanation: "'Do not disturb' (Đừng làm phiền) cho thấy Sarah đang trong quá trình phân tích báo cáo -> dùng 'is analyzing'."
      }
    ]
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    nameVi: "Hiện tại hoàn thành",
    category: "present",
    icon: "💎",
    badge: "Trải nghiệm & Kết quả",
    formula: {
      positive: "S + have/has + Past Participle (V3/ed)",
      negative: "S + have/has + not + V3/ed",
      question: "Have/Has + S + V3/ed?"
    },
    timelineLabel: "Bắt đầu trong quá khứ kéo dài đến hiện tại, hoặc vừa mới xảy ra mà kết quả còn lưu lại ở hiện tại",
    timelinePoint: "span-past-now",
    memoryHack: {
      hook: "💎 Chiếc Cầu Nối 'Quá Khứ -> Hiện Tại' (Kết quả còn sờ sờ)",
      descriptionVi: "Đừng dịch là 'đã'! Hiện tại hoàn thành KHÔNG QUAN TÂM thời gian chính xác xảy ra lúc nào (tuyệt đối không đi với yesterday/ago). Nó chỉ quan tâm: KẾT QUẢ CÒN LƯU LẠI Ở HIỆN TẠI!\n• 'I lost my keys yesterday' (QKĐ) -> Hôm qua mất, có thể hôm nay đã tìm thấy.\n• 'I have lost my keys' (HTHT) -> Vẫn đang mất chìa khóa, hiện giờ chưa vào được nhà!"
    },
    usages: [
      { context: "Trải nghiệm từ trước tới nay (không nêu rõ thời gian)", exampleEn: "I have traveled to five Asian countries so far.", exampleVi: "Tính đến nay tôi đã đi du lịch qua 5 quốc gia châu Á." },
      { context: "Bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại", exampleEn: "Dr. Elena has worked at the national research institute since 2012.", exampleVi: "Tiến sĩ Elena đã làm việc tại viện nghiên cứu quốc gia từ năm 2012 (hiện vẫn đang làm)." },
      { context: "Hành động vừa mới hoàn tất để lại kết quả hiện hữu", exampleEn: "The engineering team has just deployed the latest software update.", exampleVi: "Đội ngũ kỹ thuật vừa mới triển khai bản cập nhật phần mềm mới nhất." }
    ],
    signals: ["already", "yet", "just", "ever", "never", "since (+ mốc)", "for (+ khoảng)", "recently", "so far", "up to now"],
    tipsAndPitfalls: {
      tip: "TUYỆT ĐỐI KHÔNG dùng Hiện tại hoàn thành với các mốc thời gian đã kết thúc hẳn trong quá khứ (yesterday, last month, in 2018, ago) -> Phải chuyển sang Quá khứ đơn!",
      wrong: "I have submitted the report yesterday afternoon.",
      correct: "I submitted the report yesterday afternoon. (hoặc I have already submitted the report.)",
      explanationVi: "Có 'yesterday afternoon' là thời điểm quá khứ đã kết thúc, bắt buộc chia Quá khứ đơn 'submitted'."
    },
    quiz: [
      {
        id: "t_pp_1",
        type: "choice",
        contextScenario: "📊 Kiểm tra tiến độ dự án trước kỳ hạn",
        question: "Chọn câu trả lời đúng: '_____ you ever _____ with international clients before?'",
        options: [
          "Did / worked",
          "Have / worked",
          "Were / working",
          "Had / work"
        ],
        answer: "Have / worked",
        explanation: "Hỏi về kinh nghiệm trải nghiệm từ trước đến nay dùng cấu trúc 'Have you ever + V3/ed (worked)'."
      },
      {
        id: "t_pp_2",
        type: "choice",
        contextScenario: "✉️ Phản hồi email kiểm tra tình trạng tài liệu",
        question: "Điền vào chỗ trống: 'We cannot proceed because the supplier _____ the parts yet.'",
        options: [
          "didn't deliver",
          "hasn't delivered",
          "isn't delivering",
          "hadn't delivered"
        ],
        answer: "hasn't delivered",
        explanation: "Có từ 'yet' ở cuối câu phủ định chỉ hành động chưa hoàn thành tính đến thời điểm hiện tại -> dùng 'hasn't delivered'."
      }
    ]
  },
  {
    id: "present-perfect-continuous",
    name: "Present Perfect Continuous",
    nameVi: "Hiện tại hoàn thành tiếp diễn",
    category: "present",
    icon: "⏳",
    badge: "Nhấn mạnh quá trình",
    formula: {
      positive: "S + have/has + been + V-ing",
      negative: "S + have/has + not + been + V-ing",
      question: "Have/Has + S + been + V-ing?"
    },
    timelineLabel: "Hành động diễn ra liên tục không ngừng từ quá khứ đến hiện tại, nhấn mạnh tính liên tục và thời lượng",
    timelinePoint: "span-past-now",
    memoryHack: {
      hook: "⏳ Nhấn mạnh 'Mồ hôi nước mắt' & Tính liên tục không ngừng",
      descriptionVi: "Dùng để nhấn mạnh sự nỗ lực làm liên tục suốt một khoảng thời gian: 'have/has + BEEN + V-ING'.\n• HTHT: Nhấn mạnh số lượng/kết quả ('I have written 3 reports' - Tôi đã viết xong 3 báo cáo).\n• HTHT tiếp diễn: Nhấn mạnh thời gian mệt mỏi ('I have been writing reports all morning' - Cả sáng nay tôi cắm mặt viết báo cáo!)."
    },
    usages: [
      { context: "Nhấn mạnh hành động diễn ra liên tục suốt một khoảng thời gian dài", exampleEn: "The programmers have been debugging this security glitch for six hours straight.", exampleVi: "Các lập trình viên đã miệt mài gỡ lỗi bảo mật này suốt 6 tiếng đồng hồ liên tục." },
      { context: "Hành động vừa dừng nhưng để lại dấu hiệu rõ rệt ở hiện tại", exampleEn: "The ground is completely soaked because it has been pouring rain.", exampleVi: "Mặt đất ướt sũng vì trời vừa mưa tầm tã suốt." }
    ],
    signals: ["all day", "all morning", "for hours", "since early morning", "how long...?"],
    tipsAndPitfalls: {
      tip: "Khi muốn nhấn mạnh SỐ LƯỢNG / KẾT QUẢ cụ thể (VD: 3 cuốn sách, 5 hợp đồng), dùng Hiện tại hoàn thành; khi nhấn mạnh THỜI GIAN KÉO DÀI LIÊN TỤC, dùng tiếp diễn.",
      wrong: "I have been sending 5 emails this morning.",
      correct: "I have sent 5 emails this morning.",
      explanationVi: "Có số lượng cụ thể '5 emails' phải dùng Hiện tại hoàn thành để chỉ kết quả."
    },
    quiz: [
      {
        id: "t_ppc_1",
        type: "choice",
        contextScenario: "💬 Hỏi thăm một đồng nghiệp trông rất kiệt sức",
        question: "Bạn nhận xét: 'Why are your eyes red? — Because I _____ at the computer screen all day.'",
        options: [
          "stared",
          "have been staring",
          "am staring",
          "had stared"
        ],
        answer: "have been staring",
        explanation: "Có dấu hiệu 'all day' và hậu quả mắt đỏ ở hiện tại -> nhấn mạnh hành động nhìn màn hình diễn ra liên tục."
      }
    ]
  },
  {
    id: "past-simple",
    name: "Past Simple",
    nameVi: "Quá khứ đơn",
    category: "past",
    icon: "📜",
    badge: "Kể chuyện & Sự kiện đã xong",
    formula: {
      positive: "S + V2/ed  |  S + was/were",
      negative: "S + did not + V-inf  |  S + was/were not",
      question: "Did + S + V-inf?  |  Was/Were + S...?"
    },
    timelineLabel: "Hành động đã bắt đầu và kết thúc hoàn toàn tại một thời điểm xác định trong quá khứ",
    timelinePoint: "past",
    memoryHack: {
      hook: "📜 Bản chất 'Đã chết hẳn trong quá khứ' & Có mốc thời gian",
      descriptionVi: "Quá khứ đơn diễn tả sự việc đã KẾT THÚC HOÀN TOÀN, không còn liên quan gì đến hiện tại. Bắt buộc có hoặc ngầm hiểu mốc thời gian (yesterday, in 2015, ago, last week). Ghi nhớ: Đã mượn 'did/didn't' thì động từ chính trả về nguyên thể!"
    },
    usages: [
      { context: "Sự việc hoàn tất tại một mốc thời gian cụ thể trong quá khứ", exampleEn: "Our company opened its European headquarters in Berlin in 2018.", exampleVi: "Công ty chúng tôi đã mở trụ sở châu Âu tại Berlin vào năm 2018." },
      { context: "Chuỗi hành động liên tiếp trong quá khứ", exampleEn: "He inspected the machine, spotted the crack, and turned off the power.", exampleVi: "Anh ấy kiểm tra chiếc máy, phát hiện vết nứt và tắt nguồn điện." }
    ],
    signals: ["yesterday", "last night/week/month/year", "ago", "in 2010", "when I was younger"],
    tipsAndPitfalls: {
      tip: "Khi dùng trợ động từ 'did / didn't', động từ chính bắt buộc phải trở về DẠNG NGUYÊN THỂ!",
      wrong: "Did you saw the news release yesterday?",
      correct: "Did you see the news release yesterday?",
      explanationVi: "Sau 'Did', động từ 'see' phải ở dạng nguyên thể, không chia 'saw'."
    },
    quiz: [
      {
        id: "t_pst_1",
        type: "choice",
        contextScenario: "🏛️ Bài kiểm tra lịch sử kinh tế thế giới",
        question: "Chọn dạng đúng: 'The World Health Organization _____ in 1948.'",
        options: ["founded", "was founded", "has been founded", "is founded"],
        answer: "was founded",
        explanation: "Sự kiện lịch sử đã diễn ra vào năm 1948 ở thể bị động -> 'was founded'."
      },
      {
        id: "t_pst_2",
        type: "choice",
        contextScenario: "💼 Hỏi thăm đồng nghiệp về kỳ nghỉ tuần trước",
        question: "Chọn câu hỏi đúng: 'Where _____ on vacation last week?'",
        options: [
          "did you go",
          "did you went",
          "were you go",
          "have you gone"
        ],
        answer: "did you go",
        explanation: "Có mốc 'last week', mượn trợ động từ 'did' và động từ nguyên thể 'go'."
      }
    ]
  },
  {
    id: "past-continuous",
    name: "Past Continuous",
    nameVi: "Quá khứ tiếp diễn",
    category: "past",
    icon: "🎬",
    badge: "Bối cảnh đang diễn ra",
    formula: {
      positive: "S + was/were + V-ing",
      negative: "S + was/were + not + V-ing",
      question: "Was/Were + S + V-ing?"
    },
    timelineLabel: "Hành động đang diễn ra tại một thời điểm chính xác trong quá khứ hoặc đang diễn ra thì bị hành động khác xen vào",
    timelinePoint: "span-past",
    memoryHack: {
      hook: "📸 Bức Ảnh Chụp 'Khoảnh Khắc Quá Khứ' & Chen Ngang When/While",
      descriptionVi: "• Đúng vào giờ đó trong quá khứ bạn đang làm gì? ('At 8 PM last night, I was watching TV').\n• Chen ngang: Hành động đang làm dở dang chia QK Tiếp diễn (While I was showering), hành động bất thình lình ập đến chia QK Đơn (the phone rang)."
    },
    usages: [
      { context: "Đang diễn ra tại một thời điểm chính xác trong quá khứ", exampleEn: "At exactly 8:30 PM last night, we were flying over the Alps.", exampleVi: "Vào đúng 8:30 tối qua, chúng tôi đang bay qua dãy Alps." },
      { context: "Hành động đang xảy ra (tiếp diễn) thì hành động khác xen vào (quá khứ đơn)", exampleEn: "While the technician was upgrading the system, a sudden power outage occurred.", exampleVi: "Trong khi kỹ thuật viên đang nâng cấp hệ thống thì xảy ra sự cố mất điện đột ngột." }
    ],
    signals: ["at that time", "at 9 PM yesterday", "while", "as", "when (+ Past Simple)"],
    tipsAndPitfalls: {
      tip: "Quy tắc kinh điển: Mệnh đề chứa 'While' thường chia Tiếp diễn; mệnh đề chứa 'When' cắt ngang thường chia Quá khứ đơn.",
      wrong: "While the phone rang, I cooked dinner.",
      correct: "While I was cooking dinner, the phone rang.",
      explanationVi: "Nấu ăn là hành động diễn ra kéo dài làm nền (was cooking), tiếng chuông điện thoại reo là hành động xen vào (rang)."
    },
    quiz: [
      {
        id: "t_pco_1",
        type: "choice",
        contextScenario: "🕵️ Điều tra nguyên nhân sự cố trong ca trực",
        question: "Điền vào chỗ trống: 'What _____ when the security alarm went off?'",
        options: [
          "did you do",
          "were you doing",
          "are you doing",
          "have you done"
        ],
        answer: "were you doing",
        explanation: "Hỏi hành động đang diễn ra tại thời điểm chuông báo động reo (went off) -> 'were you doing'."
      }
    ]
  },
  {
    id: "past-perfect",
    name: "Past Perfect",
    nameVi: "Quá khứ hoàn thành",
    category: "past",
    icon: "⏮️",
    badge: "Xảy ra trước quá khứ",
    formula: {
      positive: "S + had + Past Participle (V3/ed)",
      negative: "S + had + not + V3/ed",
      question: "Had + S + V3/ed?"
    },
    timelineLabel: "Hành động xảy ra và hoàn thành TRƯỚC một hành động khác hoặc một mốc thời gian trong quá khứ",
    timelinePoint: "past",
    memoryHack: {
      hook: "⏮️ Khái niệm 'Quá Khứ Của Quá Khứ' (Xảy ra trước mốc quá khứ khác)",
      descriptionVi: "Trong quá khứ có 2 việc: Việc nào xảy ra TRƯỚC -> dùng Quá khứ hoàn thành (had + V3/ed). Việc nào xảy ra SAU -> dùng Quá khứ đơn (V2/ed).\nVí dụ: Đến rạp phim lúc 8h (quá khứ), nhưng phim chiếu từ 7h30 -> 'The movie HAD STARTED before we arrived'."
    },
    usages: [
      { context: "Xảy ra trước một hành động quá khứ khác", exampleEn: "By the time the rescue helicopter landed, the medical team had already stabilized the patient.", exampleVi: "Trước lúc trực thăng cứu hộ đáp xuống, đội ngũ y tế đã ổn định xong tình trạng bệnh nhân." },
      { context: "Hoàn tất trước một mốc thời gian quá khứ", exampleEn: "By the end of 2019, the author had published four best-selling novels.", exampleVi: "Tính đến trước cuối năm 2019, tác giả đã xuất bản 4 cuốn tiểu thuyết bán chạy." }
    ],
    signals: ["before", "after", "by the time", "had already... when", "until then"],
    tipsAndPitfalls: {
      tip: "Hành động xảy ra TRƯỚC chia Quá khứ hoàn thành (had V3); hành động xảy ra SAU chia Quá khứ đơn (V2/ed).",
      wrong: "After the meeting ended, we had gone home.",
      correct: "After the meeting had ended, we went home.",
      explanationVi: "Cuộc họp kết thúc trước (had ended), sau đó mới đi về nhà (went home)."
    },
    quiz: [
      {
        id: "t_ppf_1",
        type: "choice",
        contextScenario: "🎬 Đến muộn tại buổi chiếu phim ra mắt",
        question: "Chọn câu đúng: 'When we arrived at the auditorium, the ceremony _____.'",
        options: [
          "already started",
          "had already started",
          "has already started",
          "was starting"
        ],
        answer: "had already started",
        explanation: "Buổi lễ đã bắt đầu từ TRƯỚC khi chúng tôi đến nơi (arrived) -> dùng 'had already started'."
      }
    ]
  },
  {
    id: "past-perfect-continuous",
    name: "Past Perfect Continuous",
    nameVi: "Quá khứ hoàn thành tiếp diễn",
    category: "past",
    icon: "⏪",
    badge: "Kéo dài trước quá khứ",
    formula: {
      positive: "S + had + been + V-ing",
      negative: "S + had + not + been + V-ing",
      question: "Had + S + been + V-ing?"
    },
    timelineLabel: "Hành động diễn ra liên tục, kéo dài suốt một khoảng thời gian cho tới trước một thời điểm hoặc hành động khác trong quá khứ",
    timelinePoint: "span-past",
    memoryHack: {
      hook: "⏪ Quá Trình Làm Việc Liên Tục Trước Mốc Quá Khứ",
      descriptionVi: "Dùng để giải thích lý do vì sao lúc đó trong quá khứ bạn lại mệt, ướt hoặc đói: 'Had + BEEN + V-ING'.\nVí dụ: 'He was out of breath because he had been running' (Lúc đó anh ấy thở hổn hển vì đã chạy bộ liên tục suốt 1 tiếng)."
    },
    usages: [
      { context: "Nhấn mạnh tính liên tục của hành động trước quá khứ", exampleEn: "He was out of breath because he had been running for an hour.", exampleVi: "Anh ấy thở hổn hển vì đã chạy bộ liên tục suốt một tiếng đồng hồ." },
      { context: "Chỉ nguyên nhân để lại kết quả trong quá khứ", exampleEn: "The pavement was wet because it had been raining heavily all morning.", exampleVi: "Vỉa hè bị ướt vì trời đã mưa tầm tã suốt cả buổi sáng trước đó." }
    ],
    signals: ["for (+ khoảng thời gian)", "since (+ mốc thời gian)", "until then", "by the time (+ QKĐ)", "before (+ QKĐ)"],
    tipsAndPitfalls: {
      tip: "Dùng để nhấn mạnh TÍNH LIÊN TỤC và KHOẢNG THỜI GIAN của hành động, hoặc để lại dấu vết rõ rệt trong quá khứ.",
      wrong: "When she arrived, I was waiting for two hours. (Không nhấn mạnh khoảng thời gian kéo dài trước quá khứ)",
      correct: "When she arrived, I had been waiting for two hours.",
      explanationVi: "Chờ đợi kéo dài suốt 2 tiếng trước khi cô ấy đến -> chia 'had been waiting'."
    },
    quiz: []
  },
  {
    id: "future-simple",
    name: "Future Simple (Will)",
    nameVi: "Tương lai đơn",
    category: "future",
    icon: "🚀",
    badge: "Quyết định tức thì",
    formula: {
      positive: "S + will + V-inf",
      negative: "S + will not (won't) + V-inf",
      question: "Will + S + V-inf?"
    },
    timelineLabel: "Hành động sẽ xảy ra trong tương lai, thường là quyết định bộc phát ngay lúc nói hoặc dự đoán chủ quan",
    timelinePoint: "future",
    memoryHack: {
      hook: "🚀 Quyết Định 'Tức Thì Bột Phát' Tại Thời Điểm Nói",
      descriptionVi: "'Will' dùng khi bạn vừa mới nghĩ ra ý định ngay trong tích tắc lúc nói: Chuông cửa reo -> 'I will open it'; Thấy bạn xách nặng -> 'I will carry it for you'; hoặc lời hứa/dự đoán chủ quan: 'I think it will rain'."
    },
    usages: [
      { context: "Quyết định đưa ra ngay tại thời điểm nói", exampleEn: "It is freezing in this conference room; I will turn down the AC.", exampleVi: "Trong phòng họp này lạnh quá; tôi sẽ chỉnh giảm điều hòa ngay." },
      { context: "Lời hứa, lời cam kết hỗ trợ", exampleEn: "I will email you the updated contract first thing tomorrow morning.", exampleVi: "Tôi cam đoan sẽ gửi email hợp đồng cập nhật cho bạn ngay đầu giờ sáng mai." },
      { context: "Dự đoán chủ quan cá nhân", exampleEn: "I believe technology will continue to transform education.", exampleVi: "Tôi tin rằng công nghệ sẽ tiếp tục biến đổi nền giáo dục." }
    ],
    signals: ["tomorrow", "next week/month", "in the future", "I think", "I promise", "probably"],
    tipsAndPitfalls: {
      tip: "Phân biệt 'Will' (quyết định tức thì, không chuẩn bị) với 'Be going to' (dự định đã lên kế hoạch từ trước hoặc có chứng cứ trước mắt).",
      wrong: "A: The doorbell is ringing. B: I am going to open it.",
      correct: "B: I will open it.",
      explanationVi: "Chuông cửa vừa reo, quyết định ra mở cửa nảy sinh ngay lúc đó -> dùng 'I will open it'."
    },
    quiz: [
      {
        id: "t_fs_1",
        type: "choice",
        contextScenario: "☕ Trong một quán cà phê khi thanh toán hóa đơn",
        question: "Bạn nói với người bạn: 'Put your wallet away! I _____ for the coffee.'",
        options: ["pay", "will pay", "am paying", "paid"],
        answer: "will pay",
        explanation: "Quyết định mời nước nảy sinh bộc phát ngay thời điểm nói -> dùng 'will pay'."
      }
    ]
  },
  {
    id: "near-future",
    name: "Near Future (Be Going To)",
    nameVi: "Tương lai gần",
    category: "future",
    icon: "🎯",
    badge: "Kế hoạch & Bằng chứng",
    formula: {
      positive: "S + am/is/are + going to + V-inf",
      negative: "S + am/is/are + not + going to + V-inf",
      question: "Am/Is/Are + S + going to + V-inf?"
    },
    timelineLabel: "Dự định đã được lên kế hoạch từ trước hoặc dự đoán có bằng chứng cụ thể rõ ràng trước mắt",
    timelinePoint: "future",
    memoryHack: {
      hook: "🎯 Kế Hoạch 'Đã Tính Trước' HOẶC 'Bằng Chứng Rành Rành Trước Mắt'",
      descriptionVi: "'Be going to' chỉ dùng trong 2 trường hợp cụ thể:\n1. Dự định đã lên kế hoạch sẵn: 'I am going to visit Da Lat next week' (đã mua vé, đặt phòng).\n2. Có bằng chứng rành rành trước mắt: Mây đen kịt -> 'It is going to rain!'; Bình hoa lung lay sắp rơi -> 'It is going to fall!'."
    },
    usages: [
      { context: "Kế hoạch đã chuẩn bị, có ý định từ trước", exampleEn: "We are going to move to our new office in District 1 next month.", exampleVi: "Chúng tôi dự định chuyển sang văn phòng mới ở Quận 1 vào tháng sau (đã thuê và ký hợp đồng)." },
      { context: "Dự đoán chắc chắn có chứng cứ trước mắt", exampleEn: "Look at those dark storm clouds gathering; it is going to rain heavily.", exampleVi: "Nhìn những đám mây giông đen kịt đang kéo tới kìa; trời chắc chắn sắp mưa to rồi." }
    ],
    signals: ["look at that", "have planned", "decided to", "in the near future"],
    tipsAndPitfalls: {
      tip: "Khi có bằng chứng trước mắt (mây đen, đồ vật sắp đổ, người mang thai), dùng 'be going to' chuẩn xác hơn 'will'.",
      wrong: "Be careful! That fragile vase will fall! (Có chứng cứ vase lung lay)",
      correct: "Be careful! That fragile vase is going to fall!",
      explanationVi: "Có dấu hiệu trước mắt về sự rơi vỡ -> dùng 'is going to fall'."
    },
    quiz: [
      {
        id: "t_nf_1",
        type: "choice",
        contextScenario: "✈️ Kế hoạch du lịch đã mua vé và đặt phòng",
        question: "Chọn câu diễn đạt kế hoạch đã chuẩn bị sẵn:",
        options: [
          "I will spend my vacation in Da Lat, I booked the hotel last week.",
          "I am going to spend my vacation in Da Lat, I booked the hotel last week.",
          "I spent my vacation in Da Lat last week.",
          "I am spending my vacation in Da Lat next week."
        ],
        answer: "I am going to spend my vacation in Da Lat, I booked the hotel last week.",
        explanation: "Đã đặt phòng khách sạn từ tuần trước nghĩa là kế hoạch đã dự định trước -> dùng 'am going to spend'."
      }
    ]
  },
  {
    id: "future-continuous",
    name: "Future Continuous",
    nameVi: "Tương lai tiếp diễn",
    category: "future",
    icon: "⏱️",
    badge: "Đang diễn ra ở tương lai",
    formula: {
      positive: "S + will + be + V-ing",
      negative: "S + will not (won't) + be + V-ing",
      question: "Will + S + be + V-ing?"
    },
    timelineLabel: "Hành động sẽ ĐANG diễn ra tại một thời điểm hoặc một khoảng thời gian xác định trong tương lai",
    timelinePoint: "span-future",
    memoryHack: {
      hook: "⏱️ Đang Diễn Ra Đúng Vào Giờ Đó Ở Tương Lai",
      descriptionVi: "Tương lai tiếp diễn: 'Will + BE + V-ING'.\nGiống như bạn nhìn vào tương lai và thấy mình ĐANG trong quá trình làm việc đó: 'At 9 AM tomorrow, I will be taking the exam' (9h sáng mai bạn đang cặm cụi ngồi làm bài thi)."
    },
    usages: [
      { context: "Đang diễn ra tại một thời điểm xác định ở tương lai", exampleEn: "This time next Monday, I will be attending an international conference in Singapore.", exampleVi: "Giờ này thứ Hai tuần sau, tôi sẽ đang tham dự một hội nghị quốc tế tại Singapore." },
      { context: "Hỏi lịch trình một cách nhã nhặn, lịch sự", exampleEn: "Will you be passing by the post office this afternoon?", exampleVi: "Chiều nay bạn có tiện đường đi ngang qua bưu điện không? (Ý nhờ gửi giúp bưu phẩm)" }
    ],
    signals: ["at this time tomorrow", "at 9 AM next Monday", "this time next week"],
    tipsAndPitfalls: {
      tip: "Cần thời điểm cụ thể ở tương lai đi kèm (VD: 'at 8 PM tonight', 'this time tomorrow').",
      wrong: "Tomorrow morning I will study at the library. (Chưa nhấn mạnh trạng thái đang làm)",
      correct: "Tomorrow at 9 AM, I will be studying at the library.",
      explanationVi: "Tại đúng thời điểm 9 AM mai, hành động học đang diễn ra -> 'will be studying'."
    },
    quiz: [
      {
        id: "t_fc_1",
        type: "choice",
        contextScenario: "📅 Lên lịch hẹn với đối tác qua điện thoại",
        question: "Điền vào chỗ trống: 'Please do not call me between 2 PM and 4 PM because I _____ an important client audit.'",
        options: [
          "conduct",
          "will conduct",
          "will be conducting",
          "have conducted"
        ],
        answer: "will be conducting",
        explanation: "Trong khoảng thời gian từ 2 PM đến 4 PM, hành động kiểm toán đang diễn ra liên tục -> dùng 'will be conducting'."
      }
    ]
  },
  {
    id: "future-perfect",
    name: "Future Perfect",
    nameVi: "Tương lai hoàn thành",
    category: "future",
    icon: "🏁",
    badge: "Hoàn tất trước tương lai",
    formula: {
      positive: "S + will + have + Past Participle (V3/ed)",
      negative: "S + will not + have + V3/ed",
      question: "Will + S + have + V3/ed?"
    },
    timelineLabel: "Hành động sẽ được hoàn tất TRƯỚC một thời điểm hoặc một hành động khác trong tương lai",
    timelinePoint: "future",
    memoryHack: {
      hook: "🏁 'Deadline Hoàn Tất Xong Xuôi Trước Giờ G'",
      descriptionVi: "Tương lai hoàn thành: 'Will + HAVE + V3/ed'.\nHãy tưởng tượng một Deadline: Trước thời điểm đó, mọi việc đã XONG XUÔI 100% rồi. Dấu hiệu siêu kinh điển là 'BY + mốc tương lai' hoặc 'BY THE TIME + hiện tại': 'By 10 PM tonight, I will have finished this report' (Trước 10h tối nay, tôi sẽ xong xuôi báo cáo này rồi)."
    },
    usages: [
      { context: "Hoàn tất trước một mốc thời gian tương lai (đi với By / By the time)", exampleEn: "By 2030, our factory will have transitioned completely to renewable solar energy.", exampleVi: "Trước năm 2030, nhà máy của chúng tôi sẽ đã chuyển đổi hoàn toàn sang năng lượng mặt trời tái tạo." },
      { context: "Hoàn thành trước một hành động khác ở tương lai", exampleEn: "By the time the inspectors arrive next week, we will have fixed all safety issues.", exampleVi: "Trước lúc các thanh tra đến vào tuần tới, chúng tôi sẽ đã khắc phục xong toàn bộ vấn đề an toàn." }
    ],
    signals: ["by (+ mốc tương lai)", "by the time (+ Hiện tại đơn)", "by the end of this month", "before"],
    tipsAndPitfalls: {
      tip: "Sau cụm 'By the time', động từ chỉ thời gian chia ở HIỆN TẠI ĐƠN, mệnh đề chính chia ở TƯƠNG LAI HOÀN THÀNH ('will have + V3').",
      wrong: "By the time you will finish, the train will have left.",
      correct: "By the time you finish, the train will have left.",
      explanationVi: "Mệnh đề trạng ngữ thời gian sau 'By the time' không dùng 'will', chia hiện tại đơn 'finish'."
    },
    quiz: [
      {
        id: "t_fp_1",
        type: "choice",
        contextScenario: "🎓 Kế hoạch lộ trình học tập và thăng tiến sự nghiệp",
        question: "Chọn câu đúng: 'By the time she turns thirty, she _____ her doctoral degree.'",
        options: [
          "completes",
          "will complete",
          "will have completed",
          "has completed"
        ],
        answer: "will have completed",
        explanation: "Trước mốc thời gian bước sang tuổi 30, bằng tiến sĩ sẽ đã được hoàn tất xong xuôi -> 'will have completed'."
      }
    ]
  },
  {
    id: "future-perfect-continuous",
    name: "Future Perfect Continuous",
    nameVi: "Tương lai hoàn thành tiếp diễn",
    category: "future",
    icon: "⏭️",
    badge: "Kéo dài đến tương lai",
    formula: {
      positive: "S + will + have + been + V-ing",
      negative: "S + will + not + have + been + V-ing",
      question: "Will + S + have + been + V-ing?"
    },
    timelineLabel: "Hành động đã và đang diễn ra liên tục, nhấn mạnh khoảng thời gian kéo dài tính đến một mốc thời điểm hoặc hành động khác trong tương lai",
    timelinePoint: "span-future",
    memoryHack: {
      hook: "⏭️ 'Cột Mốc Kỷ Niệm & Thâm Niên Ở Tương Lai'",
      descriptionVi: "Tương lai hoàn thành tiếp diễn: 'Will + HAVE + BEEN + V-ING'.\nDùng khi bạn muốn khoe một thâm niên/chuỗi kỷ lục đạt được tính đến một mốc tương lai: 'Tính đến tháng sau, tôi sẽ đã bơi liên tục 500 ngày rồi!'. Luôn có 'By + mốc tương lai' kèm 'FOR + khoảng thời gian'."
    },
    usages: [
      { context: "Nhấn mạnh khoảng thời gian tính đến mốc tương lai", exampleEn: "By next November, I will have been working at this company for ten years.", exampleVi: "Tính đến tháng 11 năm tới, tôi sẽ đã làm việc liên tục tại công ty này tròn 10 năm." },
      { context: "Nhấn mạnh tính liên tục của hành động kéo dài đến tương lai", exampleEn: "When you arrive at 6 PM, the crew will have been rehearsing for five hours.", exampleVi: "Khi bạn đến lúc 6 giờ tối, đoàn kịch sẽ đã tập luyện liên tục suốt 5 tiếng đồng hồ." }
    ],
    signals: ["by (+ mốc tương lai)... for (+ khoảng thời gian)", "by the time... for", "by then"],
    tipsAndPitfalls: {
      tip: "Thường đi kèm cả 2 thông tin: mốc thời gian trong tương lai (By...) VÀ khoảng thời gian kéo dài (for 5 years, for hours...).",
      wrong: "By next month, she will work here for 5 years. (Chưa nhấn mạnh hoàn thành tiếp diễn)",
      correct: "By next month, she will have been working here for 5 years.",
      explanationVi: "Nhấn mạnh tính liên tục và kéo dài suốt 5 năm tính tới mốc tương lai -> 'will have been working'."
    },
    quiz: []
  }
];

export const englishTenses: TenseDetail[] = rawEnglishTenses.map(t => ({
  ...t,
  quiz: tensesPool[t.id] && tensesPool[t.id].length > 0 ? tensesPool[t.id] : t.quiz
}));
