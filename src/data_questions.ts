export interface QuestionPattern {
  id: string;
  title: string;
  titleVi: string;
  badge: string;
  icon: string;
  formula: string;
  explanationVi: string;
  memoryHack?: {
    hook: string;
    descriptionVi: string;
  };
  rules: string[];
  examples: {
    en: string;
    vi: string;
    note?: string;
  }[];
  pitfalls: {
    wrong: string;
    correct: string;
    reasonVi: string;
  }[];
  quiz: {
    id: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    type: "choice" | "reorder";
    scrambledWords?: string[];
  }[];
}

export const questionPatterns: QuestionPattern[] = [
  {
    id: "wh-questions",
    title: "Wh- Questions (Information Questions)",
    titleVi: "Câu hỏi lấy thông tin với từ để hỏi Wh-",
    badge: "Phổ biến nhất",
    icon: "🔍",
    formula: "Wh-word + Auxiliary / Modal + Subject + Main Verb + (Object/Complement)?",
    explanationVi: "Dùng để hỏi thông tin chi tiết (ai, cái gì, ở đâu, khi nào, tại sao, bằng cách nào...). Khác với Yes/No, câu hỏi Wh- luôn hạ giọng ở cuối câu. Điểm mấu chốt: Luôn phân biệt rạch ròi giữa 'Hỏi cho Tân ngữ' và 'Hỏi cho Chủ ngữ'.",
    memoryHack: {
      hook: "🎯 Thần chú 'QUASI' & Tuyệt chiêu 'Thay He/She bằng Who'",
      descriptionVi: "1. Thần chú QUASI: QU (Question word: Where/What/Why) + A (Auxiliary: do/does/did/can) + S (Subject: you/he/they) + I (Infinitive verb: go/live/eat).\n2. Tuyệt chiêu hỏi Chủ ngữ: Khi muốn hỏi ai thực hiện hành động, hãy viết câu khẳng định bình thường (ví dụ: 'Tom broke the vase') rồi thay chữ 'Tom' bằng 'Who' là xong ('Who broke the vase?') -> Tuyệt đối KHÔNG mượn did/does!"
    },
    rules: [
      "Quy tắc QUASI: Wh-word + Trợ ĐT (do/does/did) + Chủ ngữ + Động từ NGUYÊN THỂ. VD: Where does he work? (KHÔNG chia works).",
      "Hỏi chủ ngữ (Subject Question): 'Who / What' đóng vai trò là chủ thể của hành động -> Chia động từ trực tiếp theo thì, CẤM dùng trợ động từ did/does. VD: Who invited you? (Ai mời bạn?), What happened? (Chuyện gì xảy ra?).",
      "Hỏi tân ngữ (Object Question): Người/vật bị tác động -> BẮT BUỘC mượn trợ động từ. VD: Who(m) did you invite? (Bạn đã mời ai?).",
      "Hỏi số lượng & khoảng cách: How much (tiền / không đếm được: water, time, luggage), How many (đếm được số nhiều: books, days), How far (khoảng cách), How long (thời gian bao lâu)."
    ],
    examples: [
      { en: "Where do you work?", vi: "Bạn làm việc ở đâu?", note: "Hỏi nơi chốn, thì Hiện tại đơn" },
      { en: "What did you do yesterday?", vi: "Hôm qua bạn đã làm gì?", note: "Hỏi hành động quá khứ, dùng trợ động từ 'did'" },
      { en: "Who called you last night?", vi: "Ai đã gọi cho bạn tối qua?", note: "Hỏi chủ ngữ: 'Who' là chủ thể thực hiện hành động, không mượn did" },
      { en: "How long have you lived in this city?", vi: "Bạn đã sống ở thành phố này bao lâu rồi?", note: "Hiện tại hoàn thành với 'How long'" },
      { en: "Which color do you prefer, blue or green?", vi: "Bạn thích màu nào hơn, xanh dương hay xanh lá?", note: "'Which' khi có số lượng lựa chọn giới hạn" }
    ],
    pitfalls: [
      {
        wrong: "Where you go yesterday?",
        correct: "Where did you go yesterday?",
        reasonVi: "Câu hỏi quá khứ thiếu trợ động từ 'did' đứng trước chủ ngữ 'you'."
      },
      {
        wrong: "Who did break the window?",
        correct: "Who broke the window?",
        reasonVi: "Hỏi chủ ngữ thực hiện hành động làm vỡ cửa sổ, không dùng trợ động từ 'did'."
      }
    ],
    quiz: [
      {
        id: "wh_q1",
        question: "Chọn câu hỏi đúng để hỏi về chủ ngữ: 'Ai đã viết cuốn sách này?'",
        options: [
          "Who did write this book?",
          "Who wrote this book?",
          "Who does write this book?",
          "Whom wrote this book?"
        ],
        answer: "Who wrote this book?",
        explanation: "Khi từ để hỏi (Who) đóng vai trò là CHỦ NGỮ của hành động (ai viết), ta chia thẳng động từ 'wrote' mà KHÔNG mượn trợ động từ 'did'.",
        type: "choice"
      },
      {
        id: "wh_q2",
        question: "Sắp xếp các từ sau thành câu hỏi hoàn chỉnh:",
        options: ["How", "often", "do", "you", "go", "swimming?"],
        answer: "How often do you go swimming?",
        explanation: "Cấu trúc: Từ để hỏi (How often) + Trợ động từ (do) + Chủ ngữ (you) + Động từ nguyên thể (go) + swimming?",
        type: "reorder",
        scrambledWords: ["go", "How", "you", "often", "swimming?", "do"]
      },
      {
        id: "wh_q3",
        question: "Điền vào chỗ trống: '_____ does it take to get to the airport by taxi?'",
        options: ["How far", "How long", "How much", "How often"],
        answer: "How long",
        explanation: "Cấu trúc 'How long does it take to...?' dùng để hỏi về độ dài thời gian cần thiết để làm việc gì.",
        type: "choice"
      }
    ]
  },
  {
    id: "yes-no-questions",
    title: "Yes / No Questions",
    titleVi: "Câu hỏi Có / Không (Đảo trợ động từ)",
    badge: "Căn bản",
    icon: "👍",
    formula: "Auxiliary Verb (Do/Does/Did/Be/Have) OR Modal + Subject + Main Verb...?",
    explanationVi: "Câu hỏi có câu trả lời là 'Yes' hoặc 'No'. Luôn ĐẢO trợ động từ hoặc động từ To Be / Động từ khiếm khuyết lên đầu câu trước chủ ngữ. Ngữ điệu luôn LÊN GIỌNG ở cuối câu.",
    memoryHack: {
      hook: "🎯 Thần chú 'ASI' & Nguyên tắc 'Đã vay là phải trả'",
      descriptionVi: "1. Thần chú ASI: A (Auxiliary: Do/Does/Did/Can/Will) + S (Subject: you/he) + I (Infinitive verb nguyên thể: understand/go).\n2. Nguyên tắc 'Đã vay là phải trả': Một khi đã mượn trợ động từ quá khứ 'Did' hoặc số ít 'Does', động từ chính BẮT BUỘC TRẢ VỀ NGUYÊN THỂ (Did you see? KHÔNG dùng Did you saw?)."
    },
    rules: [
      "Với động từ To Be (am/is/are/was/were): Đảo trực tiếp Be lên đầu câu (VD: Are you ready?).",
      "Với động từ thường: Mượn trợ động từ Do/Does (hiện tại) hoặc Did (quá khứ). Động từ chính về NGUYÊN THỂ (VD: Do you like coffee?).",
      "Với thì hoàn thành: Đảo Have/Has/Had lên đầu câu (VD: Have you ever visited Japan?).",
      "Với Modal Verbs (can, could, will, would, should, must): Đảo Modal lên đầu câu (VD: Can you swim?)."
    ],
    examples: [
      { en: "Are you interested in photography?", vi: "Bạn có hứng thú với nhiếp ảnh không?", note: "Đảo To Be 'Are' lên trước 'you'" },
      { en: "Did she finish her assignment on time?", vi: "Cô ấy có hoàn thành bài tập đúng hạn không?", note: "Quá khứ mượn 'Did', động từ chính 'finish' giữ nguyên mẫu" },
      { en: "Have you ever tasted durian?", vi: "Bạn đã từng ăn thử sầu riêng bao giờ chưa?", note: "Hiện tại hoàn thành với 'Have you ever + V3/ed'" },
      { en: "Should we book the train tickets in advance?", vi: "Chúng ta có nên đặt trước vé tàu không?", note: "Động từ khiếm khuyết 'Should'" }
    ],
    pitfalls: [
      {
        wrong: "Did you bought the tickets?",
        correct: "Did you buy the tickets?",
        reasonVi: "Khi đã mượn trợ động từ 'Did' ở quá khứ, động từ chính bắt buộc phải về nguyên thể ('buy', không dùng 'bought')."
      },
      {
        wrong: "You like spicy food?",
        correct: "Do you like spicy food?",
        reasonVi: "Trong văn viết và giao tiếp chuẩn, không được giữ nguyên thứ tự câu khẳng định mà phải thêm trợ động từ 'Do'."
      }
    ],
    quiz: [
      {
        id: "yn_q1",
        question: "Chọn câu hỏi đúng cho thì Quá khứ đơn:",
        options: [
          "Did she went to the party yesterday?",
          "Did she go to the party yesterday?",
          "Does she go to the party yesterday?",
          "Is she went to the party yesterday?"
        ],
        answer: "Did she go to the party yesterday?",
        explanation: "Trong câu hỏi quá khứ đơn với trợ động từ 'Did', động từ chính 'go' phải ở dạng nguyên thể không 'to'.",
        type: "choice"
      },
      {
        id: "yn_q2",
        question: "Sắp xếp các từ sau thành câu hỏi:",
        options: ["Have", "you", "ever", "been", "to", "London?"],
        answer: "Have you ever been to London?",
        explanation: "Have + S + ever + V3/ed (been) + to + O?",
        type: "reorder",
        scrambledWords: ["been", "Have", "London?", "to", "ever", "you"]
      }
    ]
  },
  {
    id: "tag-questions",
    title: "Tag Questions (Question Tags)",
    titleVi: "Câu hỏi đuôi (Xác nhận thông tin)",
    badge: "Giao tiếp tự nhiên",
    icon: "🏷️",
    formula: "Mệnh đề khẳng định (+), phần đuôi phủ định (-)?  |  Mệnh đề phủ định (-), phần đuôi khẳng định (+)?",
    explanationVi: "Câu hỏi đuôi đặt ở cuối câu để xác nhận lại thông tin hoặc tìm kiếm sự đồng tình. Nếu hạ giọng ở đuôi: mong đợi người nghe đồng ý. Nếu lên giọng ở đuôi: thực sự muốn hỏi xem có đúng không.",
    memoryHack: {
      hook: "⚖️ Nguyên tắc 'Chiếc Bập Bênh' (Trái ngược dấu) & 4 Ngoại lệ bỏ túi",
      descriptionVi: "1. Nguyên tắc Chiếc bập bênh: Vế trước (+) thì đuôi (-) (You are tired, AREN'T you?). Vế trước (-) thì đuôi (+) (You don't smoke, DO you?).\n2. 4 Ngoại lệ bỏ túi:\n   • 'I am...' -> đuôi là 'aren't I?' (Cấm dùng 'am not I')\n   • 'Let's...' (Rủ rê) -> đuôi là 'shall we?'\n   • 'Câu mệnh lệnh' (Open the door) -> đuôi là 'will you?'\n   • 'Nobody / Nothing / Never' mang sẵn nghĩa phủ định -> đuôi chia khẳng định (+)."
    },
    rules: [
      "Nguyên tắc nghịch dấu: Mệnh đề (+) thì đuôi (-), mệnh đề (-) thì đuôi (+).",
      "Chủ ngữ phần đuôi: Luôn là ĐẠI TỪ NHÂN XƯNG (he, she, it, they, we, you, I).",
      "Trường hợp ngoại lệ 1: 'I am' -> phần đuôi là 'aren't I?' (KHÔNG dùng 'am not I').",
      "Trường hợp ngoại lệ 2: Câu rủ rê 'Let's...' -> phần đuôi là 'shall we?'.",
      "Trường hợp ngoại lệ 3: Câu mệnh lệnh xin vui lòng / yêu cầu -> đuôi là 'will you? / would you?'.",
      "Trường hợp ngoại lệ 4: Khi chủ ngữ là đại từ bất định chỉ người (Everyone, Somebody, Nobody...) -> đại từ phần đuôi là 'they'. Nếu câu có từ mang nghĩa phủ định (never, rarely, seldom, hardly, nobody) -> phần đuôi chia khẳng định (+)."
    ],
    examples: [
      { en: "You speak Vietnamese fluently, don't you?", vi: "Bạn nói tiếng Việt lưu loát phải không?", note: "Mệnh đề (+), đuôi mượn trợ động từ 'don't you?'" },
      { en: "She hasn't seen this movie yet, has she?", vi: "Cô ấy vẫn chưa xem phim này đúng không?", note: "Mệnh đề (-), đuôi khẳng định 'has she?'" },
      { en: "I am late for the meeting, aren't I?", vi: "Tôi bị trễ cuộc họp rồi, đúng không nhỉ?", note: "Ngoại lệ: 'I am' -> 'aren't I?'" },
      { en: "Let's grab a cup of coffee, shall we?", vi: "Chúng mình đi uống cà phê nhé?", note: "Ngoại lệ: 'Let's' -> 'shall we?'" },
      { en: "Nobody knows the secret password, do they?", vi: "Không ai biết mật khẩu bí mật đó, phải không?", note: "'Nobody' mang nghĩa phủ định và đại từ quy về 'they' -> 'do they?'" }
    ],
    pitfalls: [
      {
        wrong: "I am your best friend, amn't I?",
        correct: "I am your best friend, aren't I?",
        reasonVi: "Trong tiếng Anh chuẩn ngữ pháp, phủ định đi với 'I am' ở câu hỏi đuôi luôn là 'aren't I?'."
      },
      {
        wrong: "He rarely exercises, doesn't he?",
        correct: "He rarely exercises, does he?",
        reasonVi: "Từ 'rarely' (hiếm khi) mang nghĩa bán phủ định, do đó phần đuôi phải ở dạng khẳng định 'does he?'."
      }
    ],
    quiz: [
      {
        id: "tag_q1",
        question: "Chọn phần đuôi thích hợp: 'Let's go for a walk in the park, _____?'",
        options: ["will we", "shall we", "don't we", "aren't we"],
        answer: "shall we",
        explanation: "Sau lời rủ rê 'Let's...', phần câu hỏi đuôi chuẩn ngữ pháp luôn là 'shall we?'.",
        type: "choice"
      },
      {
        id: "tag_q2",
        question: "Chọn phần đuôi thích hợp: 'She never eats fast food, _____?'",
        options: ["doesn't she", "does she", "is she", "isn't she"],
        answer: "does she",
        explanation: "Từ 'never' mang nghĩa phủ định tuyệt đối, do đó phần đuôi phải là thể khẳng định: 'does she?'.",
        type: "choice"
      },
      {
        id: "tag_q3",
        question: "Sắp xếp câu hỏi đuôi đúng:",
        options: ["You", "can", "swim,", "can't", "you?"],
        answer: "You can swim, can't you?",
        explanation: "Mệnh đề khẳng định với modal verb 'can' -> câu hỏi đuôi phủ định 'can't you?'.",
        type: "reorder",
        scrambledWords: ["can't", "You", "can", "you?", "swim,"]
      }
    ]
  },
  {
    id: "indirect-questions",
    title: "Indirect & Embedded Questions",
    titleVi: "Câu hỏi gián tiếp & Câu hỏi lồng (Lịch sự & Trang trọng)",
    badge: "Giao tiếp chuyên nghiệp",
    icon: "🤝",
    formula: "Polite phrase (Could you tell me / Do you know...) + Wh-word / if / whether + Subject + Verb (KHÔNG ĐẢO NGỮ)!",
    explanationVi: "Dùng để hỏi một cách lịch sự, nhã nhặn trong công việc, nơi công cộng hoặc với người lạ. QUY TẮC SỐNG CÒN: Sau từ để hỏi hoặc if/whether, trật tự từ trở về dạng CÂU TRẦN THUẬT (S + V), KHÔNG ĐƯỢC đảo trợ động từ!",
    memoryHack: {
      hook: "🎩 Thần chú 'Đã lịch sự thì viết thẳng'",
      descriptionVi: "Bởi vì câu đã có câu rào đón lịch sự ở đầu ('Could you tell me...', 'Do you know...'), nên phần sau KHÔNG CÒN LÀ CÂU HỎI ĐỘC LẬP nữa! Hãy viết thẳng như câu kể: S + V. Tuyệt đối KHÔNG mượn trợ động từ do/does/did!"
    },
    rules: [
      "Các cụm mở đầu thông dụng: Could you tell me..., Do you know..., I wonder if..., Would you mind telling me..., Can you let me know...?",
      "Với câu hỏi Wh-: Giữ nguyên từ để hỏi, theo sau là Chủ ngữ + Động từ (VD: Where is the bank? -> Could you tell me where the bank is?)",
      "Với câu hỏi Yes/No: Dùng liên từ 'if' hoặc 'whether' (VD: Is the shop open? -> Do you know if the shop is open?)",
      "Bỏ hoàn toàn trợ động từ 'do / does / did' và chia động từ chính theo chủ ngữ!"
    ],
    examples: [
      { en: "Direct: Where is the nearest ATM?\nIndirect: Could you tell me where the nearest ATM is?", vi: "Bạn có thể cho tôi biết cây ATM gần nhất ở đâu không?", note: "Từ 'is' chuyển ra sau chủ ngữ 'the nearest ATM'" },
      { en: "Direct: What time does the flight depart?\nIndirect: Do you know what time the flight departs?", vi: "Bạn có biết chuyến bay khởi hành lúc mấy giờ không?", note: "Bỏ 'does', động từ 'departs' thêm 's'" },
      { en: "Direct: Did she receive the email?\nIndirect: I wonder if she received the email.", vi: "Tôi tự hỏi không biết cô ấy đã nhận được email chưa.", note: "Dùng 'if' và động từ chia quá khứ 'received'" },
      { en: "Direct: Why was he absent?\nIndirect: Would you mind explaining why he was absent?", vi: "Bạn có phiền giải thích lý do tại sao anh ấy lại vắng mặt không?", note: "Trật tự 'why he was absent'" }
    ],
    pitfalls: [
      {
        wrong: "Could you tell me where does she live?",
        correct: "Could you tell me where she lives?",
        reasonVi: "Lỗi phổ biến nhất: Vẫn giữ trợ động từ 'does'. Trong câu hỏi gián tiếp, phải bỏ 'does' và chia động từ thành 'she lives'."
      },
      {
        wrong: "Do you know what is his name?",
        correct: "Do you know what his name is?",
        reasonVi: "To Be 'is' phải đứng sau danh từ 'his name', không đứng trước."
      }
    ],
    quiz: [
      {
        id: "ind_q1",
        question: "Chọn câu hỏi gián tiếp đúng của: 'Where does John work?'",
        options: [
          "Do you know where does John work?",
          "Do you know where John works?",
          "Do you know where John work?",
          "Do you know where works John?"
        ],
        answer: "Do you know where John works?",
        explanation: "Bỏ trợ động từ 'does', trật tự từ là Wh-word (where) + Chủ ngữ (John) + Động từ (works).",
        type: "choice"
      },
      {
        id: "ind_q2",
        question: "Sắp xếp thành câu hỏi gián tiếp lịch sự:",
        options: ["Could", "you", "tell", "me", "where", "the", "station", "is?"],
        answer: "Could you tell me where the station is?",
        explanation: "Could you tell me + where + S (the station) + V (is)?",
        type: "reorder",
        scrambledWords: ["station", "Could", "where", "you", "is?", "the", "me", "tell"]
      }
    ]
  },
  {
    id: "choice-questions",
    title: "Choice / Alternative Questions",
    titleVi: "Câu hỏi lựa chọn (với liên từ 'or')",
    badge: "Rất hay dùng",
    icon: "⚖️",
    formula: "Auxiliary + Subject + Verb + Option A + OR + Option B?",
    explanationVi: "Đưa ra hai hay nhiều lựa chọn cho người nghe để chọn một trong số đó. Ngữ điệu đặc biệt: Lên giọng ở lựa chọn đầu và Hạ giọng ở lựa chọn cuối cùng.",
    memoryHack: {
      hook: "⛰️ Ngữ điệu 'Núi Đồi' & Tuyệt đối CẤM trả lời Yes/No",
      descriptionVi: "1. Ngữ điệu: Lên giọng ở lựa chọn 1 (Are you free on Saturday ↗) và Xuống giọng ở lựa chọn cuối (or Sunday ↘?).\n2. Cách trả lời: Phải chọn thẳng 1 phương án ('I prefer tea'), hoặc chọn cả 2 ('Both, please'), hoặc từ chối cả 2 ('Neither, thanks'). Tuyệt đối không trả lời 'Yes' hay 'No'!"
    },
    rules: [
      "Không trả lời bằng 'Yes' hoặc 'No', mà phải chọn một trong các phương án hoặc từ chối cả hai (Either, Neither, Both).",
      "Có thể bắt đầu bằng trợ động từ (Would you like tea or coffee?) hoặc từ để hỏi (Which do you prefer, apples or oranges?)."
    ],
    examples: [
      { en: "Would you like still or sparkling water?", vi: "Quý khách muốn dùng nước suối thường hay nước có ga?", note: "Lên giọng ở 'still' và xuống giọng ở 'sparkling water'" },
      { en: "Are you traveling by train or by plane?", vi: "Bạn đi du lịch bằng tàu hỏa hay bằng máy bay?", note: "Lựa chọn phương tiện di chuyển" },
      { en: "Do we turn left or right at the intersection?", vi: "Ở ngã tư chúng ta rẽ trái hay rẽ phải?", note: "Hỏi phương hướng" }
    ],
    pitfalls: [
      {
        wrong: "Q: Would you like tea or coffee? - A: Yes, I would.",
        correct: "A: I'd prefer tea, please. / Either is fine.",
        reasonVi: "Câu hỏi lựa chọn không được trả lời 'Yes' hoặc 'No'."
      }
    ],
    quiz: [
      {
        id: "ch_q1",
        question: "Cách trả lời nào KHÔNG phù hợp cho câu hỏi: 'Do you want to study tonight or tomorrow morning?'",
        options: [
          "I'd rather study tonight.",
          "Tomorrow morning works better for me.",
          "Yes, I do.",
          "Either time is good for me."
        ],
        answer: "Yes, I do.",
        explanation: "Câu hỏi lựa chọn giữa hai thời điểm thì không thể trả lời đơn thuần là 'Yes, I do'.",
        type: "choice"
      }
    ]
  },
  {
    id: "negative-questions",
    title: "Negative Questions",
    titleVi: "Câu hỏi phủ định (Biểu cảm & Xác nhận)",
    badge: "Ngữ cảm cao",
    icon: "❗",
    formula: "Auxiliary + not (Aren't / Isn't / Don't / Didn't / Can't / Haven't) + Subject + Verb...?",
    explanationVi: "Dùng để diễn tả sự ngạc nhiên, ngờ vực hoặc đề nghị một cách lịch sự, mời gọi sự tán thành ('Aren't you cold?' - Bạn không thấy lạnh à?).",
    memoryHack: {
      hook: "⭐ Quy tắc 'Sự Thật Là Chân Lý' (Bỏ qua chữ Not khi trả lời)",
      descriptionVi: "Người Việt hay nhầm lẫn tai hại: Khi được hỏi 'Don't you like fish?' (Bạn không thích cá à?), nếu không thích người Việt hay nói 'Yes, I don't' (Ừ, tôi không thích). Trong tiếng Anh thế là SAI BÉT!\n-> Quy tắc chuẩn: Đừng quan tâm câu hỏi có 'Not' hay không. Nhìn vào sự thật: Nếu THÍCH -> Trả lời 'YES, I do'. Nếu KHÔNG THÍCH -> Luôn trả lời 'NO, I don't'!"
    },
    rules: [
      "Dạng viết tắt phổ biến: Don't you..., Didn't you..., Aren't you..., Won't you...",
      "Cách trả lời theo chuẩn tiếng Anh: Trả lời 'Yes' nếu sự thật là CÓ, trả lời 'No' nếu sự thật là KHÔNG (Không trả lời theo tư duy tiếng Việt)."
    ],
    examples: [
      { en: "Aren't you going to the party tonight?", vi: "Tối nay bạn không đi dự tiệc à? (Ngạc nhiên)", note: "Nếu đi -> trả lời: Yes, I am. Nếu không đi -> No, I'm not." },
      { en: "Didn't I tell you about the meeting?", vi: "Chẳng phải tôi đã nói với bạn về cuộc họp rồi sao?", note: "Nhắc nhở hoặc xác nhận sự việc" },
      { en: "Wouldn't it be better to leave early?", vi: "Chẳng phải sẽ tốt hơn nếu chúng ta rời đi sớm sao?", note: "Đưa ra lời gợi ý nhẹ nhàng" }
    ],
    pitfalls: [
      {
        wrong: "Don't you like pizza? - Yes, I don't like it. (Dịch theo lối Việt: Ừ, tôi không thích)",
        correct: "Don't you like pizza? - No, I don't. (Chuẩn tiếng Anh: 'No' khẳng định bạn không thích)",
        reasonVi: "Trong tiếng Anh, 'No' luôn gắn với mệnh đề phủ định ('No, I don't'), 'Yes' luôn gắn với khẳng định ('Yes, I do')."
      }
    ],
    quiz: [
      {
        id: "neg_q1",
        question: "Ai đó hỏi bạn: 'Haven't you eaten lunch yet?' và thực tế bạn CHƯA ăn. Bạn trả lời thế nào?",
        options: [
          "Yes, I haven't.",
          "No, I haven't.",
          "Yes, I have.",
          "No, I have."
        ],
        answer: "No, I haven't.",
        explanation: "Trong tiếng Anh, nếu hành động chưa diễn ra thì câu trả lời luôn là 'No, I haven't', không bị phụ thuộc vào câu hỏi phủ định.",
        type: "choice"
      }
    ]
  }
];

import { questionsPool } from "./data_questions_pool";

questionPatterns.forEach(pattern => {
  if (questionsPool[pattern.id] && questionsPool[pattern.id].length > 0) {
    pattern.quiz = questionsPool[pattern.id];
  }
});

