export interface SyntaxExercise {
  id: string;
  type: "choice" | "reorder" | "correction";
  contextScenario?: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  scrambledWords?: string[];
  faultySentence?: string;
}

export interface SyntaxTopic {
  id: string;
  title: string;
  titleVi: string;
  badge: string;
  icon: string;
  formula: string;
  explanationVi: string;
  breakdown: {
    label: string;
    descriptionVi: string;
  }[];
  rules: string[];
  examples: {
    en: string;
    vi: string;
    context?: string;
    analysis?: string;
  }[];
  pitfalls: {
    wrong: string;
    correct: string;
    reasonVi: string;
  }[];
  quiz: SyntaxExercise[];
}

export const syntaxTopics: SyntaxTopic[] = [
  {
    id: "basic-5-patterns",
    title: "5 Cấu Trúc Câu Cốt Lõi (Basic Sentence Patterns)",
    titleVi: "5 Mô hình cấu trúc câu nền tảng trong tiếng Anh",
    badge: "Nền tảng căn bản",
    icon: "🏗️",
    formula: "1. S + V  |  2. S + V + O  |  3. S + V + C  |  4. S + V + IO + DO  |  5. S + V + O + C",
    explanationVi: "Mọi câu tiếng Anh dù dài hay ngắn đều được xây dựng từ 5 mô hình cơ bản này. Hiểu rõ từng thành phần giúp bạn không bao giờ viết sai thứ tự từ hoặc thiếu tân ngữ/bổ ngữ.",
    breakdown: [
      { label: "Mẫu 1: S + V", descriptionVi: "Chủ ngữ + Nội động từ (không cần tân ngữ). VD: The baby cried loudly. The plane landed safely." },
      { label: "Mẫu 2: S + V + O", descriptionVi: "Chủ ngữ + Ngoại động từ + Tân ngữ trực tiếp. VD: We signed the contract. She teaches mathematics." },
      { label: "Mẫu 3: S + V + C", descriptionVi: "Chủ ngữ + Động từ nối (Linking Verbs: be, become, feel, look, smell, taste, seem) + Bổ ngữ cho chủ ngữ. VD: The soup tastes delicious. He became an engineer." },
      { label: "Mẫu 4: S + V + IO + DO", descriptionVi: "Chủ ngữ + Động từ + Tân ngữ gián tiếp (chỉ người) + Tân ngữ trực tiếp (chỉ vật). VD: The company offered him a promotion (= offered a promotion TO him)." },
      { label: "Mẫu 5: S + V + O + C", descriptionVi: "Chủ ngữ + Động từ + Tân ngữ + Bổ ngữ cho tân ngữ (Tính từ / Danh từ / V-inf). VD: The board elected him CEO. The noise drove her crazy." }
    ],
    rules: [
      "Động từ nối (Linking Verbs) ở mẫu 3 đi kèm TÍNH TỪ (Adjective) bổ nghĩa cho chủ ngữ, KHÔNG đi kèm trạng từ (VD: He looks happy, KHÔNG dùng happily).",
      "Với mẫu 4: Nếu chuyển tân ngữ chỉ vật lên trước, bắt buộc dùng giới từ TO hoặc FOR (send sth TO sb; buy / make sth FOR sb).",
      "Các động từ đặc biệt như 'explain', 'suggest', 'recommend', 'describe' KHÔNG đi theo mẫu S + V + IO + DO (Phải nói: explain something to somebody)."
    ],
    examples: [
      { 
        en: "The morning flight to Tokyo departed on schedule.", 
        vi: "Chuyến bay sáng đi Tokyo đã khởi hành đúng giờ.", 
        context: "Giao thông & Di chuyển",
        analysis: "Mẫu S + V (The morning flight... là S, departed là V nội động từ, on schedule là trạng ngữ)" 
      },
      { 
        en: "Our marketing team launched the new campaign yesterday.", 
        vi: "Đội ngũ marketing của chúng tôi đã phát động chiến dịch mới ngày hôm qua.", 
        context: "Công việc & Doanh nghiệp",
        analysis: "Mẫu S + V + O (Our team là S, launched là V, the new campaign là O trực tiếp)" 
      },
      { 
        en: "The client sounded very satisfied with our presentation.", 
        vi: "Khách hàng nghe có vẻ rất hài lòng với bài thuyết trình của chúng tôi.", 
        context: "Đàm phán với đối tác",
        analysis: "Mẫu S + V + C (sounded là linking verb, satisfied là tính từ bổ ngữ cho S)" 
      },
      { 
        en: "The hotel manager gave us a complimentary room upgrade.", 
        vi: "Quản lý khách sạn đã tặng chúng tôi một lần nâng hạng phòng miễn phí.", 
        context: "Dịch vụ & Du lịch",
        analysis: "Mẫu S + V + IO + DO (us là IO chỉ người, a complimentary upgrade là DO chỉ vật)" 
      },
      { 
        en: "His outstanding dedication made the entire conference successful.", 
        vi: "Sự tận tụy vượt trội của anh ấy đã làm cho toàn bộ hội nghị thành công tốt đẹp.", 
        context: "Tổ chức sự kiện",
        analysis: "Mẫu S + V + O + C (the conference là O, successful là tính từ C bổ nghĩa cho O)" 
      }
    ],
    pitfalls: [
      {
        wrong: "The manager explained us the new company policy.",
        correct: "The manager explained the new company policy to us.",
        reasonVi: "Động từ 'explain' không cho phép dùng tân ngữ gián tiếp trực tiếp phía sau mà phải là 'explain sth to sb'."
      },
      {
        wrong: "The freshly baked bread smells deliciously.",
        correct: "The freshly baked bread smells delicious.",
        reasonVi: "'Smell' là động từ tri giác/nối (linking verb), theo sau phải là tính từ (delicious) chứ không dùng trạng từ (-ly)."
      }
    ],
    quiz: [
      {
        id: "syn_5p_q1",
        type: "choice",
        contextScenario: "📧 Email công việc thông báo kết quả cuộc họp",
        question: "Chọn câu viết đúng quy tắc ngữ pháp để báo cáo cho khách hàng:",
        options: [
          "I will explain you the project timeline in detail tomorrow.",
          "I will explain the project timeline to you in detail tomorrow.",
          "I will explain to you the project timeline tomorrow detail.",
          "I will explain the project timeline you in detail tomorrow."
        ],
        answer: "I will explain the project timeline to you in detail tomorrow.",
        explanation: "Cấu trúc chuẩn của 'explain' là: explain + SOMETHING (the project timeline) + TO SOMEONE (to you)."
      },
      {
        id: "syn_5p_q2",
        type: "reorder",
        contextScenario: "🏨 Khen ngợi dịch vụ tại một nhà hàng cao cấp",
        question: "Bấm xếp các từ theo đúng mô hình S + V + O + C:",
        options: ["The", "delicious", "food", "made", "all", "the", "guests", "extremely", "happy."],
        answer: "The delicious food made all the guests extremely happy.",
        explanation: "S (The delicious food) + V (made) + O (all the guests) + C (extremely happy).",
        scrambledWords: ["guests", "The", "happy.", "made", "delicious", "extremely", "all", "the", "food"]
      },
      {
        id: "syn_5p_q3",
        type: "choice",
        contextScenario: "💬 Giao tiếp hàng ngày khi nhận xét món ăn",
        question: "Điền từ thích hợp: 'This mushroom soup smells _____ and looks appetizing.'",
        options: ["wonderfully", "wonderful", "wondering", "wonder"],
        answer: "wonderful",
        explanation: "Sau linking verb 'smells' cần một tính từ ('wonderful') để bổ nghĩa cho chủ ngữ 'This mushroom soup'."
      }
    ]
  },
  {
    id: "inversion-structures",
    title: "Inversion (Cú Pháp Đảo Ngữ Nâng Cao)",
    titleVi: "Cú pháp Đảo ngữ nhấn mạnh văn phong chuyên nghiệp",
    badge: "IELTS & Báo chí",
    icon: "🔄",
    formula: "Negative/Limiting Adverbial + Auxiliary Verb + Subject + Main Verb...",
    explanationVi: "Đảo ngữ là biện pháp đưa trợ động từ lên trước chủ ngữ nhằm tạo ấn tượng mạnh mẽ, trang trọng và kịch tính cho câu nói hoặc văn bản.",
    breakdown: [
      { label: "1. Đảo ngữ từ phủ định", descriptionVi: "Never, Rarely, Seldom, Little, Barely, Hardly + Trợ ĐT + S + V. (VD: Rarely have we received such glowing feedback.)" },
      { label: "2. Hardly / Scarcely... when", descriptionVi: "Vừa mới... thì đã: Hardly had S + V3 when S + V2. (VD: Hardly had the CEO begun his speech when the fire alarm rang.)" },
      { label: "3. No sooner... than", descriptionVi: "Vừa mới... thì: No sooner had S + V3 than S + V2. (VD: No sooner had we landed than the storm hit.)" },
      { label: "4. Not only... but also", descriptionVi: "Không những... mà còn: Not only + Trợ ĐT + S + V, but S also V. (VD: Not only did they complete the project on time, but they also saved budget.)" },
      { label: "5. Only after / Only when", descriptionVi: "Chỉ sau khi / Chỉ khi: Mệnh đề theo sau Only KHÔNG đảo, ĐẢO Ở MỆNH ĐỀ CHÍNH! (VD: Only when the results were verified did the team celebrate.)" },
      { label: "6. Under no circumstances", descriptionVi: "Trong bất kỳ hoàn cảnh nào cũng không: Under no circumstances must staff share customer passwords." }
    ],
    rules: [
      "Cấu trúc đảo ngữ giống hệt cấu trúc câu hỏi nghi vấn (Trợ ĐT + S + V), nhưng câu là câu khẳng định/nhấn mạnh và kết thúc bằng dấu chấm (.).",
      "Lưu ý cặp liên từ chuẩn: 'No sooner' luôn đi với 'THAN'; còn 'Hardly / Scarcely' luôn đi với 'WHEN'. Rất nhiều người nhầm lẫn hai cặp này.",
      "Với 'Only by + V-ing', 'Only when + S + V': Đảo ngữ nằm ở vế thứ hai (mệnh đề kết quả)."
    ],
    examples: [
      { 
        en: "Rarely have I witnessed such exceptional teamwork in a corporate setting.", 
        vi: "Hiếm khi nào tôi được chứng kiến tinh thần làm việc nhóm xuất chúng đến thế trong môi trường doanh nghiệp.", 
        context: "Đánh giá nhân viên cuối năm",
        analysis: "Rarely + have (trợ ĐT) + I (S) + witnessed (V3)" 
      },
      { 
        en: "No sooner had we published the announcement than our servers were overloaded.", 
        vi: "Chúng tôi vừa mới đăng thông báo thì máy chủ đã lập tức bị quá tải.", 
        context: "Sự cố công nghệ thông tin",
        analysis: "No sooner had we published... than..." 
      },
      { 
        en: "Under no circumstances should sensitive customer information be sent via unencrypted email.", 
        vi: "Tuyệt đối trong bất kỳ hoàn cảnh nào thông tin nhạy cảm của khách hàng cũng không được gửi qua email không mã hóa.", 
        context: "Quy định bảo mật an ninh mạng",
        analysis: "Under no circumstances + should (modal) + sensitive customer info (S) + be sent (V bị động)" 
      },
      { 
        en: "Only after conducting thorough market research did the startup launch its mobile app.", 
        vi: "Chỉ sau khi tiến hành nghiên cứu thị trường kỹ lưỡng, startup mới cho ra mắt ứng dụng di động.", 
        context: "Chiến lược kinh doanh khởi nghiệp",
        analysis: "Only after... did (trợ ĐT) + the startup (S) + launch (V-inf)" 
      }
    ],
    pitfalls: [
      {
        wrong: "Hardly had I arrived at the station than the train left.",
        correct: "Hardly had I arrived at the station when the train left. (hoặc No sooner... than)",
        reasonVi: "'Hardly' bắt buộc đi với liên từ 'WHEN', không đi với 'THAN' (chỉ 'No sooner' mới đi với 'THAN')."
      },
      {
        wrong: "Only when did she call, I knew she was safe.",
        correct: "Only when she called did I know she was safe.",
        reasonVi: "Mệnh đề ngay sau 'Only when' giữ nguyên (she called), đảo ngữ phải nằm ở mệnh đề sau (did I know)."
      }
    ],
    quiz: [
      {
        id: "syn_inv_q1",
        type: "choice",
        contextScenario: "🛡️ Biên bản cam kết bảo mật thông tin trong hợp đồng",
        question: "Chọn câu viết lại đảo ngữ chính xác cho quy định cấm:",
        options: [
          "Under no circumstances employees may disclose trade secrets.",
          "Under no circumstances may employees disclose trade secrets.",
          "Under no circumstances employees disclose trade secrets.",
          "Under no circumstances does employees disclose trade secrets."
        ],
        answer: "Under no circumstances may employees disclose trade secrets.",
        explanation: "Sau cụm phủ định 'Under no circumstances', ta đảo động từ khiếm khuyết 'may' lên trước chủ ngữ 'employees'."
      },
      {
        id: "syn_inv_q2",
        type: "reorder",
        contextScenario: "🚀 Kể về sự kiện ra mắt sản phẩm thành công vang dội",
        question: "Sắp xếp các từ thành câu đảo ngữ với 'No sooner':",
        options: ["No", "sooner", "had", "we", "opened", "the", "doors", "than", "hundreds", "of", "customers", "rushed", "in."],
        answer: "No sooner had we opened the doors than hundreds of customers rushed in.",
        explanation: "Cấu trúc: No sooner had + S + V3/ed + than + S + V2/ed.",
        scrambledWords: ["than", "No", "doors", "sooner", "opened", "had", "we", "in.", "the", "rushed", "customers", "hundreds", "of"]
      },
      {
        id: "syn_inv_q3",
        type: "choice",
        contextScenario: "📊 Thuyết trình kết quả quý trước hội đồng quản trị",
        question: "Điền vế đảo ngữ: 'Not only _____ our quarterly sales targets, but we also entered two new markets.'",
        options: [
          "we exceeded",
          "did we exceed",
          "we did exceed",
          "have we exceeded"
        ],
        answer: "did we exceed",
        explanation: "Vế sau là quá khứ đơn 'entered', nên vế đầu đảo ngữ quá khứ đơn: 'did we exceed'."
      }
    ]
  },
  {
    id: "cleft-sentences",
    title: "Cleft Sentences (Câu Chẻ Nhấn Mạnh Trọng Tâm)",
    titleVi: "Cú pháp Câu chẻ It is/was... that để làm nổi bật thông tin",
    badge: "Diễn đạt sắc sảo",
    icon: "🎯",
    formula: "It is / was + [Thành phần cần nhấn mạnh] + that / who + S + V...",
    explanationVi: "Câu chẻ (Cleft sentence) tách câu thành hai phần để nhấn mạnh chính xác đối tượng, thời gian, địa điểm hoặc lý do gây ra sự việc ('Chính anh ấy chứ không phải ai khác', 'Chính vào thời điểm đó...').",
    breakdown: [
      { label: "Nhấn mạnh Chủ ngữ", descriptionVi: "It is / was + S (người/vật) + who / that + V... (VD: It was our senior developer who fixed the critical bug.)" },
      { label: "Nhấn mạnh Tân ngữ", descriptionVi: "It is / was + O + that + S + V... (VD: It was this eco-friendly material that the architect chose.)" },
      { label: "Nhấn mạnh Trạng ngữ thời gian / nơi chốn", descriptionVi: "It is / was + Trạng từ + that + S + V... (VD: It was in 2015 that our company was founded.)" },
      { label: "Wh- Cleft (What-clause)", descriptionVi: "What + S + V + is / was + [Thành phần trọng tâm]. (VD: What impressed the investors most was our sustainable vision.)" }
    ],
    rules: [
      "Trong cấu trúc 'It is/was... that': Dù nhấn mạnh nơi chốn hay thời gian, liên từ CHUẨN NGỮ PHÁP luôn là 'THAT' (KHÔNG dùng 'where' hay 'when' trong văn phong học thuật).",
      "Nếu câu gốc diễn ra ở quá khứ -> dùng 'It was'; nếu câu gốc ở hiện tại -> dùng 'It is'.",
      "Động từ sau 'who/that' chia theo danh từ đứng ngay trước nó nếu nhấn mạnh chủ ngữ."
    ],
    examples: [
      { 
        en: "It was in Paris that the international climate agreement was signed.", 
        vi: "Chính tại Paris thỏa thuận khí hậu quốc tế đã được ký kết.", 
        context: "Quan hệ ngoại giao quốc tế",
        analysis: "Nhấn mạnh nơi chốn 'in Paris', sử dụng liên từ chuẩn 'that'" 
      },
      { 
        en: "It was the feedback from end-users that guided our product redesign.", 
        vi: "Chính phản hồi từ người dùng cuối đã định hướng việc thiết kế lại sản phẩm của chúng tôi.", 
        context: "Phát triển phần mềm & Thiết kế UI/UX",
        analysis: "Nhấn mạnh chủ thể 'the feedback from end-users'" 
      },
      { 
        en: "What we really appreciate about this job is the flexible working schedule.", 
        vi: "Điều mà chúng tôi thực sự trân trọng ở công việc này chính là lịch trình làm việc linh hoạt.", 
        context: "Môi trường công sở hiện đại",
        analysis: "Wh- Cleft sentence nhấn mạnh khía cạnh được đánh giá cao" 
      }
    ],
    pitfalls: [
      {
        wrong: "It was in this restaurant where my parents first met.",
        correct: "It was in this restaurant that my parents first met.",
        reasonVi: "Trong câu chẻ 'It was... that', mốc nơi chốn vẫn dùng liên từ 'that' chứ không dùng 'where'."
      },
      {
        wrong: "It was in midnight when the power went out.",
        correct: "It was at midnight that the power went out.",
        reasonVi: "Vừa sai giới từ ('at midnight' chứ không phải 'in'), vừa sai liên từ câu chẻ ('that' thay vì 'when')."
      }
    ],
    quiz: [
      {
        id: "syn_cleft_q1",
        type: "choice",
        contextScenario: "🏆 Lễ trao giải thưởng công nghệ sáng tạo",
        question: "Chọn câu chẻ đúng ngữ pháp để nhấn mạnh người dẫn đầu dự án:",
        options: [
          "It was Dr. Alan who discovered the breakthrough vaccine.",
          "It was Dr. Alan whom discovered the breakthrough vaccine.",
          "It was Dr. Alan which discovered the breakthrough vaccine.",
          "Was Dr. Alan that discovered the breakthrough vaccine."
        ],
        answer: "It was Dr. Alan who discovered the breakthrough vaccine.",
        explanation: "Nhấn mạnh chủ ngữ chỉ người (Dr. Alan) -> dùng 'It was... who/that + V'."
      },
      {
        id: "syn_cleft_q2",
        type: "reorder",
        contextScenario: "💡 Phỏng vấn nhà sáng lập về bí quyết thành công",
        question: "Ghép thành câu chẻ What-cleft hoàn chỉnh:",
        options: ["What", "drove", "our", "rapid", "growth", "was", "unwavering", "customer", "loyalty."],
        answer: "What drove our rapid growth was unwavering customer loyalty.",
        explanation: "What + S + V (drove our rapid growth) + was + thành phần nhấn mạnh (unwavering customer loyalty).",
        scrambledWords: ["rapid", "What", "customer", "growth", "was", "unwavering", "drove", "loyalty.", "our"]
      }
    ]
  },
  {
    id: "passive-voice",
    title: "Advanced Passive Voice (Câu Bị Động Nâng Cao & Khách Quan)",
    titleVi: "Cú pháp Bị động khách quan, Bị động nhờ vả & Thể đặc biệt",
    badge: "Học thuật & Báo chí",
    icon: "🛡️",
    formula: "S + be + Past Participle (V3/ed)  |  Have/Get sth done  |  It is reported that...",
    explanationVi: "Bị động nâng cao được sử dụng rộng rãi trong báo chí khoa học, phóng sự điều tra và đời sống khi cần thể hiện tính khách quan hoặc nói về việc nhờ người khác làm dịch vụ cho mình.",
    breakdown: [
      { label: "1. Bị động khách quan báo chí", descriptionVi: "It is reported / believed / thought / alleged that S + V... HOẶC S + is/are reported + to V (hoặc to have V3 nếu xảy ra trước). (VD: The company is rumored to acquire a major competitor.)" },
      { label: "2. Bị động nhờ vả (Causative)", descriptionVi: "Have / Get + something + V3/ed (nhờ ai làm gì đó cho mình). (VD: We need to have the office painted this weekend.)" },
      { label: "3. Bị động với Need", descriptionVi: "Something needs V-ing = Something needs to be done. (VD: The server needs updating = needs to be updated.)" },
      { label: "4. Bị động động từ tri giác & Make", descriptionVi: "Chủ động: make/see + O + V-inf -> Bị động: be made / be seen + TO V. (VD: Employees were made to wear safety helmets.)" }
    ],
    rules: [
      "Với cấu trúc bị động cá nhân: Nếu hành động trong mệnh đề 'that' xảy ra trước thời điểm nói/tin đồn, phải dùng 'to have + V3'. (VD: He is believed to have left the country yesterday.)",
      "Động từ 'make' ở thể chủ động không có 'to' (make sb do sth), nhưng khi chuyển sang BỊ ĐỘNG thì BẮT BUỘC CÓ 'TO' (be made TO do sth)."
    ],
    examples: [
      { 
        en: "The ancient artifact is estimated to be over three thousand years old.", 
        vi: "Cổ vật này được ước tính là có niên đại hơn ba nghìn năm tuổi.", 
        context: "Khảo cổ học & Khoa học lịch sử",
        analysis: "Bị động khách quan: S + is estimated + to be..." 
      },
      { 
        en: "I am going to have my passport renewed before our trip abroad next month.", 
        vi: "Tôi dự định sẽ đi làm mới hộ chiếu trước chuyến đi nước ngoài vào tháng sau.", 
        context: "Chuẩn bị thủ tục du lịch",
        analysis: "Cấu trúc nhờ vả: have + my passport + renewed (V3)" 
      },
      { 
        en: "The suspect was seen to enter the jewelry store shortly before midnight.", 
        vi: "Nghi phạm được nhìn thấy đi vào cửa hàng trang sức ngay trước nửa đêm.", 
        context: "Điều tra hình sự",
        analysis: "Bị động với động từ giác quan 'see': was seen + TO enter" 
      }
    ],
    pitfalls: [
      {
        wrong: "The team was made stay late yesterday. (Thiếu 'to')",
        correct: "The team was made to stay late yesterday.",
        reasonVi: "Khi chuyển 'make' sang dạng bị động, bắt buộc phải thêm giới từ 'to': 'was made to stay'."
      }
    ],
    quiz: [
      {
        id: "syn_pass_q1",
        type: "choice",
        contextScenario: "🚗 Bảo dưỡng phương tiện đi lại",
        question: "Chọn câu diễn đạt tự nhiên theo cấu trúc nhờ vả:",
        options: [
          "I repaired my car brakes at the garage yesterday. (Tự tay mình sửa)",
          "I had my car brakes repaired at the garage yesterday.",
          "I had repaired my car brakes at the garage yesterday.",
          "I got repaired my car brakes yesterday."
        ],
        answer: "I had my car brakes repaired at the garage yesterday.",
        explanation: "Cấu trúc nhờ thợ sửa: have + something (my car brakes) + V3 (repaired)."
      },
      {
        id: "syn_pass_q2",
        type: "reorder",
        contextScenario: "📰 Bản tin tài chính về tập đoàn đa quốc gia",
        question: "Ghép thành câu bị động khách quan:",
        options: ["The", "tech", "giant", "is", "reported", "to", "have", "acquired", "the", "promising", "AI", "startup."],
        answer: "The tech giant is reported to have acquired the promising AI startup.",
        explanation: "S (The tech giant) + is reported + to have acquired (hành động thâu tóm đã xong) + O.",
        scrambledWords: ["acquired", "giant", "is", "startup.", "to", "The", "AI", "reported", "have", "the", "tech", "promising"]
      }
    ]
  },
  {
    id: "conditionals-inversion",
    title: "Conditionals & Inversion (Câu Điều Kiện & Đảo Ngữ Điều Kiện)",
    titleVi: "Cú pháp Điều kiện Loại 1, 2, 3, Hỗn hợp & Đảo ngữ Should/Were/Had",
    badge: "Tư duy logic",
    icon: "🔀",
    formula: "Type 1: Should S V  |  Type 2: Were S (to V)  |  Type 3: Had S V3",
    explanationVi: "Câu điều kiện dùng để đặt ra giả định và hệ quả. Đảo ngữ câu điều kiện giúp bỏ chữ 'If', giúp câu văn ngắn gọn, sắc bén và đậm chất văn bản chính thức.",
    breakdown: [
      { label: "Đảo ngữ Loại 1 (Should)", descriptionVi: "Should + S + V-inf, S + will/can/please + V... (VD: Should you require further clarification, please let me know = If you require...)" },
      { label: "Đảo ngữ Loại 2 (Were)", descriptionVi: "Were + S + to V... (hoặc Were + S + Adj/Noun), S + would + V... (VD: Were I in your position, I would renegotiate the terms.)" },
      { label: "Đảo ngữ Loại 3 (Had)", descriptionVi: "Had + S + V3/ed, S + would have + V3/ed... (VD: Had we detected the defect earlier, we wouldn't have shipped the products.)" },
      { label: "Điều kiện Hỗn hợp (Mixed 3-2)", descriptionVi: "Giả định quá khứ nhưng ảnh hưởng tới hiện tại: Had S V3, S would V-inf now. (VD: Had I accepted the scholarship, I would be studying in London now.)" }
    ],
    rules: [
      "Khi thực hiện đảo ngữ câu điều kiện, TỪ 'IF' HOÀN TOÀN BỊ LƯỢC BỎ.",
      "Ở loại 1, sau 'Should + S', động từ chính luôn ở dạng NGUYÊN THỂ KHÔNG CHIA dù chủ ngữ là ngôi thứ 3 số ít (VD: Should he CALL, KHÔNG dùng 'Should he calls').",
      "Ở loại 3 đảo ngữ dạng phủ định: 'Had + S + NOT + V3' (KHÔNG dùng 'Hadn't S V3')."
    ],
    examples: [
      { 
        en: "Should your flight be delayed, our airport representative will wait at the arrival hall.", 
        vi: "Nếu chuyến bay của quý khách bị trễ, đại diện của chúng tôi sẽ chờ tại sảnh đến.", 
        context: "Chăm sóc khách hàng lữ hành cao cấp",
        analysis: "Đảo ngữ loại 1: Should your flight be delayed (= If your flight is delayed)" 
      },
      { 
        en: "Were we to expand into overseas markets, our production capacity would need to double.", 
        vi: "Nếu chúng ta mở rộng sang các thị trường nước ngoài, năng lực sản xuất của chúng ta sẽ cần phải tăng gấp đôi.", 
        context: "Họp chiến lược ban giám đốc",
        analysis: "Đảo ngữ loại 2: Were we to expand (= If we expanded)" 
      },
      { 
        en: "Had the pilot not reacted so swiftly, a catastrophic collision might have occurred.", 
        vi: "Nếu phi công không phản xạ nhanh nhạy như vậy, một vụ va chạm thảm khốc có lẽ đã xảy ra.", 
        context: "Báo cáo an toàn hàng không",
        analysis: "Đảo ngữ loại 3 phủ định: Had the pilot not reacted (= If the pilot had not reacted)" 
      }
    ],
    pitfalls: [
      {
        wrong: "If should you have any questions, feel free to ask.",
        correct: "Should you have any questions, feel free to ask.",
        reasonVi: "Đã đảo 'Should' lên đầu câu thì phải bỏ 'If'."
      },
      {
        wrong: "Should she arrives late, call me.",
        correct: "Should she arrive late, call me.",
        reasonVi: "Sau 'Should', động từ chính bắt buộc ở dạng nguyên thể không chia ('arrive')."
      }
    ],
    quiz: [
      {
        id: "syn_cond_q1",
        type: "choice",
        contextScenario: "💼 Soạn thảo điều khoản hợp đồng thương mại quốc tế",
        question: "Chọn câu đảo ngữ điều kiện trang trọng nhất:",
        options: [
          "Should any dispute arise, both parties agree to arbitration.",
          "Should any dispute arises, both parties agree to arbitration.",
          "If should any dispute arise, both parties agree to arbitration.",
          "Were any dispute arise, both parties agree to arbitration."
        ],
        answer: "Should any dispute arise, both parties agree to arbitration.",
        explanation: "Đảo ngữ loại 1 trang trọng: Should + S (any dispute) + V-inf (arise)."
      },
      {
        id: "syn_cond_q2",
        type: "reorder",
        contextScenario: "🎓 Lời tâm sự của một sinh viên tốt nghiệp thủ khoa",
        question: "Sắp xếp thành câu điều kiện đảo ngữ loại 3:",
        options: ["Had", "I", "not", "received", "that", "scholarship,", "I", "could", "never", "have", "attended", "university."],
        answer: "Had I not received that scholarship, I could never have attended university.",
        explanation: "Had + S + not + V3 (Had I not received...) + S + could never have V3.",
        scrambledWords: ["scholarship,", "not", "attended", "never", "that", "received", "could", "Had", "I", "university.", "have", "I"]
      }
    ]
  },
  {
    id: "comparisons-syntax",
    title: "Double Comparisons (So Sánh Kép & Lũy Tiến)",
    titleVi: "Cú pháp So sánh kép 'Càng... thì càng...'",
    badge: "Mượt mà & Tự nhiên",
    icon: "📈",
    formula: "The + comparative (+ S + V), the + comparative (+ S + V)",
    explanationVi: "Diễn tả mối quan hệ nhân quả và tương quan cùng chiều hoặc ngược chiều giữa hai hiện tượng: Khi một vế biến chuyển thì vế kia cũng thay đổi theo tương ứng.",
    breakdown: [
      { label: "1. The more... the more...", descriptionVi: "The more time you invest in preparation, the more confident you will feel." },
      { label: "2. Tính từ ngắn dạng -er", descriptionVi: "The higher you climb, the colder the air becomes." },
      { label: "3. So sánh kép với danh từ", descriptionVi: "The more books children read, the richer their vocabulary becomes." },
      { label: "4. So sánh lũy tiến (Càng ngày càng)", descriptionVi: "Comparative AND Comparative: Mobile phones are getting smarter and smarter / more and more expensive." }
    ],
    rules: [
      "Bắt buộc phải có mạo từ 'THE' đứng trước dạng so sánh ở CẢ HAI VẾ.",
      "Thành phần so sánh (tính từ/trạng từ hoặc danh từ đi kèm) được đảo lên ngay sau chữ 'The' ở đầu mỗi mệnh đề."
    ],
    examples: [
      { 
        en: "The earlier we finalize the contract, the sooner production can commence.", 
        vi: "Chúng ta càng chốt hợp đồng sớm bao nhiêu, việc sản xuất càng có thể bắt đầu sớm bấy nhiêu.", 
        context: "Đẩy nhanh tiến độ dự án",
        analysis: "The earlier... the sooner..." 
      },
      { 
        en: "The more diverse the team is, the more innovative the solutions will be.", 
        vi: "Đội ngũ càng đa dạng bao nhiêu, các giải pháp đưa ra sẽ càng mang tính đổi mới bấy nhiêu.", 
        context: "Văn hóa doanh nghiệp",
        analysis: "The more diverse... the more innovative..." 
      }
    ],
    pitfalls: [
      {
        wrong: "More you practice, faster you learn.",
        correct: "The more you practice, the faster you learn.",
        reasonVi: "Thiếu mạo từ 'The' ở cả hai mệnh đề của cấu trúc so sánh kép."
      }
    ],
    quiz: [
      {
        id: "syn_comp_q1",
        type: "choice",
        contextScenario: "💡 Lời khuyên của chuyên gia dinh dưỡng và thể hình",
        question: "Chọn câu so sánh kép hoàn chỉnh và chuẩn ngữ pháp:",
        options: [
          "The healthier your diet is, the more energetic you will feel.",
          "Healthier your diet is, more energetic you will feel.",
          "The healthier your diet is, you will feel more energetic.",
          "The more healthy your diet is, the energetic you will feel."
        ],
        answer: "The healthier your diet is, the more energetic you will feel.",
        explanation: "Cấu trúc song hành đối xứng: The + comparative (The healthier...) ... the + comparative (the more energetic...)."
      }
    ]
  }
];
