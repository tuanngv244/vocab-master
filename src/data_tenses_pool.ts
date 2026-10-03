import { TenseExercise } from "./data_tenses";

export const tensesPool: Record<string, TenseExercise[]> = {
  "present-simple": [
    {
      id: "t_ps_1",
      contextScenario: "⏰ Thói quen sinh hoạt văn phòng",
      question: "Chọn dạng đúng: 'Our team leader usually _____ the daily stand-up meeting at 9:00 AM.'",
      options: ["host", "hosts", "is hosting", "hosted"],
      answer: "hosts",
      explanation: "Chủ ngữ 'Our team leader' là ngôi thứ 3 số ít, thói quen lặp lại có dấu hiệu 'usually' -> chia 'hosts'."
    },
    {
      id: "t_ps_2",
      contextScenario: "✈️ Tra cứu lịch trình tại quầy thông tin sân bay",
      question: "Chọn câu hỏi chuẩn ngữ pháp khi hỏi nhân viên mặt đất:",
      options: ["Does the last flight to Da Nang departs on time?", "Does the last flight to Da Nang depart on time?", "Is the last flight to Da Nang departs on time?", "Do the last flight to Da Nang depart on time?"],
      answer: "Does the last flight to Da Nang depart on time?",
      explanation: "Chủ ngữ 'the last flight' số ít -> mượn 'Does', động từ chính 'depart' ở dạng nguyên thể."
    },
    {
      id: "t_ps_3",
      contextScenario: "🌐 Thuyết minh khoa học tự nhiên",
      question: "Điền động từ: 'The Earth _____ around the Sun in approximately 365 days.'",
      options: ["revolves", "is revolving", "revolve", "revolved"],
      answer: "revolves",
      explanation: "Quy luật thiên văn vĩnh viễn (chân lý khách quan) luôn chia ở thì Hiện tại đơn: 'revolves'."
    },
    {
      id: "t_ps_4",
      contextScenario: "☕ Trò chuyện về sở thích cá nhân",
      question: "Chọn câu phủ định đúng: 'David _____ milk in his coffee because he is lactose intolerant.'",
      options: ["doesn't put", "don't put", "isn't putting", "hasn't put"],
      answer: "doesn't put",
      explanation: "'David' là ngôi thứ 3 số ít, phủ định thì hiện tại đơn dùng 'doesn't put'."
    },
    {
      id: "t_ps_5",
      contextScenario: "🚆 Lịch trình tàu hỏa công cộng",
      question: "Điền dạng đúng: 'The morning express train _____ at 6:45 AM from Platform 3.'",
      options: ["leaves", "is leaving", "leave", "has left"],
      answer: "leaves",
      explanation: "Lịch trình phương tiện công cộng cố định dùng thì Hiện tại đơn: 'leaves'."
    },
    {
      id: "t_ps_6",
      contextScenario: "💼 Giới thiệu vai trò trong công ty",
      question: "Chọn câu đúng: 'My colleague Lan _____ two foreign languages fluently.'",
      options: ["speaks", "speak", "is speaking", "has spoken"],
      answer: "speaks",
      explanation: "Khả năng, năng lực bản thân thuộc về sự thật hiển nhiên -> dùng 'speaks'."
    },
    {
      id: "t_ps_7",
      contextScenario: "🏪 Giờ mở cửa trung tâm thương mại",
      question: "Chọn câu hỏi: 'What time _____ the shopping mall close on Sundays?'",
      options: ["does", "is", "do", "has"],
      answer: "does",
      explanation: "'The shopping mall' là danh từ số ít, mượn trợ động từ 'does'."
    },
    {
      id: "t_ps_8",
      contextScenario: "🩺 Lời khuyên sức khỏe của bác sĩ",
      question: "Điền vào chỗ trống: 'Regular exercise _____ your immune system against seasonal viruses.'",
      options: ["strengthens", "strengthen", "is strengthening", "strengthened"],
      answer: "strengthens",
      explanation: "'Regular exercise' (Việc tập thể dục thường xuyên) là danh từ không đếm được số ít -> chia 'strengthens'."
    },
    {
      id: "t_ps_9",
      contextScenario: "💻 Thao tác trên phần mềm kế toán",
      question: "Điền động từ: 'If you click this button, the system automatically _____ a receipt.'",
      options: ["generates", "generate", "is generating", "will generate"],
      answer: "generates",
      explanation: "Câu điều kiện loại 0 diễn tả quy luật máy móc lập trình sẵn: mệnh đề kết quả chia Hiện tại đơn 'generates'."
    },
    {
      id: "t_ps_10",
      contextScenario: "🌦️ Khí hậu vùng miền",
      question: "Điền động từ: 'It rarely _____ in this southern desert region.'",
      options: ["rains", "rain", "is raining", "rained"],
      answer: "rains",
      explanation: "Trạng từ tần suất 'rarely' đi với hiện tại đơn chủ ngữ 'It' -> 'rains'."
    },
    {
      id: "t_ps_11",
      contextScenario: "👨‍🍳 Công thức ẩm thực trong sách dạy nấu ăn",
      question: "Chọn dạng đúng: 'First, you _____ the garlic until it turns golden brown.'",
      options: ["sauté", "sautés", "are sautéing", "have sautéed"],
      answer: "sauté",
      explanation: "Các bước hướng dẫn trong công thức nấu ăn dùng Hiện tại đơn với ngôi 'you': 'sauté'."
    },
    {
      id: "t_ps_12",
      contextScenario: "👥 Nhận xét về đồng nghiệp",
      question: "Chọn câu đúng: 'Mr. Tanaka _____ very professional in all client communications.'",
      options: ["is", "are", "be", "being"],
      answer: "is",
      explanation: "Động từ To Be đi với ngôi thứ 3 số ít 'Mr. Tanaka' là 'is'."
    },
    {
      id: "t_ps_13",
      contextScenario: "🌍 Sự thật địa lý thế giới",
      question: "Chọn đáp án đúng: 'The Nile River _____ into the Mediterranean Sea.'",
      options: ["flows", "flow", "is flowing", "flowed"],
      answer: "flows",
      explanation: "Quy luật dòng chảy địa lý tự nhiên luôn chia Hiện tại đơn: 'flows'."
    },
    {
      id: "t_ps_14",
      contextScenario: "🏢 Quy định chấm công nhân sự",
      question: "Chọn câu phủ định: 'Employees who arrive late _____ the attendance bonus.'",
      options: ["do not receive", "does not receive", "are not receiving", "have not received"],
      answer: "do not receive",
      explanation: "'Employees' là danh từ số nhiều -> dùng 'do not receive'."
    },
    {
      id: "t_ps_15",
      contextScenario: "🚗 Phương tiện đi lại hàng ngày",
      question: "Hỏi về phương tiện: 'How _____ she usually commute to work?'",
      options: ["does", "do", "is", "has"],
      answer: "does",
      explanation: "Chủ ngữ 'she' mượn trợ động từ 'does'."
    },
    {
      id: "t_ps_16",
      contextScenario: "📚 Thời khóa biểu trường đại học",
      question: "Điền động từ: 'The autumn semester _____ in early September.'",
      options: ["begins", "begin", "is beginning", "began"],
      answer: "begins",
      explanation: "Lịch trình học kỳ theo niên giám giáo dục dùng Hiện tại đơn: 'begins'."
    },
    {
      id: "t_ps_17",
      contextScenario: "🌿 Quy luật sinh học của cây cỏ",
      question: "Điền động từ: 'Green plants _____ sunlight into chemical energy through photosynthesis.'",
      options: ["convert", "converts", "are converting", "converted"],
      answer: "convert",
      explanation: "Chủ ngữ số nhiều 'Green plants' đi với động từ nguyên thể 'convert'."
    },
    {
      id: "t_ps_18",
      contextScenario: "💳 Chính sách hoàn tiền thanh toán",
      question: "Điền động từ: 'Our store _____ refunds within 30 days of purchase.'",
      options: ["provides", "provide", "is providing", "provided"],
      answer: "provides",
      explanation: "'Our store' là danh từ số ít -> chia 'provides'."
    },
    {
      id: "t_ps_19",
      contextScenario: "🐾 Đặc tính sinh học của loài vật",
      question: "Điền động từ: 'Owls _____ at night and sleep during the day.'",
      options: ["hunt", "hunts", "are hunting", "hunted"],
      answer: "hunt",
      explanation: "'Owls' số nhiều diễn tả tập tính sinh học loài vật -> dùng 'hunt'."
    },
    {
      id: "t_ps_20",
      contextScenario: "🏠 Thói quen cuối tuần của gia đình",
      question: "Chọn câu đúng: 'Every Saturday, my family _____ dinner together at home.'",
      options: ["cooks", "cook", "is cooking", "cooked"],
      answer: "cooks",
      explanation: "'Every Saturday' chỉ thói quen lặp lại, 'my family' coi như đơn vị số ít -> 'cooks'."
    }
  ],
  "present-continuous": [
    {
      id: "t_pc_1",
      contextScenario: "📞 Trả lời cuộc gọi khẩn cấp từ khách hàng",
      question: "Bạn nhấc máy và thông báo: 'Mr. Davis cannot talk right now because he _____ a client presentation.'",
      options: ["gives", "is giving", "was giving", "has given"],
      answer: "is giving",
      explanation: "Hành động đang diễn ra ngay lúc nói có dấu hiệu 'right now' -> dùng 'is giving'."
    },
    {
      id: "t_pc_2",
      contextScenario: "🏢 Nhận diện động từ trạng thái trong phòng họp",
      question: "Chọn câu đúng: 'Do not disturb Sarah, she _____ the financial report.'",
      options: ["analyzes", "is analyzing", "analyzed", "has analyzed"],
      answer: "is analyzing",
      explanation: "'Do not disturb' (Đừng làm phiền) cho thấy Sarah đang trong quá trình phân tích báo cáo -> dùng 'is analyzing'."
    },
    {
      id: "t_pc_3",
      contextScenario: "⚡ Phát hiện sự cố tại nhà máy",
      question: "Kỹ sư kêu lên: 'Listen! The main turbine _____ a strange rattling noise!'",
      options: ["is making", "makes", "made", "has made"],
      answer: "is making",
      explanation: "Từ cảm thán 'Listen!' báo hiệu sự việc đang diễn ra ngay lúc nói -> 'is making'."
    },
    {
      id: "t_pc_4",
      contextScenario: "📈 Xu hướng thị trường kinh tế",
      question: "Điền vào chỗ trống: 'Global oil prices _____ steadily this quarter due to supply disruptions.'",
      options: ["are rising", "rise", "rose", "have risen"],
      answer: "are rising",
      explanation: "Diễn tả xu hướng đang biến chuyển xung quanh thời điểm hiện tại -> dùng 'are rising'."
    },
    {
      id: "t_pc_5",
      contextScenario: "🚫 Động từ chỉ nhận thức và cảm xúc",
      question: "Chọn câu dùng đúng động từ trạng thái (Stative Verb):",
      options: ["I understand the requirements clearly.", "I am understanding the requirements clearly.", "I am knowing the requirements clearly.", "I am liking this plan."],
      answer: "I understand the requirements clearly.",
      explanation: "'Understand', 'know', 'like' là động từ trạng thái nhận thức, không chia ở thì tiếp diễn."
    },
    {
      id: "t_pc_6",
      contextScenario: "🛫 Kế hoạch đã chốt vé máy bay",
      question: "Chọn câu diễn đạt kế hoạch chắc chắn: 'We _____ to Tokyo tomorrow morning for the expo.'",
      options: ["are flying", "fly", "will flying", "flew"],
      answer: "are flying",
      explanation: "Hiện tại tiếp diễn dùng để chỉ lịch trình đã được chuẩn bị chắc chắn trong tương lai gần: 'are flying'."
    },
    {
      id: "t_pc_7",
      contextScenario: "😤 Phàn nàn về thói quen gây khó chịu",
      question: "Chọn câu đúng: 'He _____ his dirty coffee mugs in the conference room!'",
      options: ["is always leaving", "always leaves", "leaves always", "is always leave"],
      answer: "is always leaving",
      explanation: "Cấu trúc 'is always + V-ing' dùng để phàn nàn về một thói quen xấu lặp đi lặp lại khiến người khác bực mình."
    },
    {
      id: "t_pc_8",
      contextScenario: "🏗️ Công trình đang xây dựng gần nhà",
      question: "Điền vào chỗ trống: 'They _____ a new suspension bridge across the river right now.'",
      options: ["are constructing", "construct", "constructed", "have constructed"],
      answer: "are constructing",
      explanation: "Dấu hiệu 'right now' -> dùng 'are constructing'."
    },
    {
      id: "t_pc_9",
      contextScenario: "💻 Tình trạng hệ thống máy chủ",
      question: "Chọn câu hỏi: 'Why _____ the computer fans _____ so loudly at the moment?'",
      options: ["are / spinning", "do / spin", "did / spin", "have / spun"],
      answer: "are / spinning",
      explanation: "Dấu hiệu 'at the moment' -> cấu trúc câu hỏi tiếp diễn: 'are the computer fans spinning'."
    },
    {
      id: "t_pc_10",
      contextScenario: "📱 Nâng cấp thiết bị cá nhân",
      question: "Chọn câu đúng: 'I _____ this temporary phone while mine is being repaired.'",
      options: ["am using", "use", "used", "have used"],
      answer: "am using",
      explanation: "Tình huống mang tính chất tạm thời (temporary situation) -> chia thì Hiện tại tiếp diễn: 'am using'."
    },
    {
      id: "t_pc_11",
      contextScenario: "🌧️ Quan sát thời tiết qua cửa sổ",
      question: "Người bạn nói: 'Take an umbrella! It _____ outside.'",
      options: ["is raining", "rains", "rained", "has rained"],
      answer: "is raining",
      explanation: "Trời đang đổ mưa ngay thời điểm nói -> 'is raining'."
    },
    {
      id: "t_pc_12",
      contextScenario: "🧑‍💼 Phỏng vấn về khóa học nâng cao",
      question: "Điền vào chỗ trống: 'She _____ German this semester to prepare for her master's program.'",
      options: ["is studying", "studies", "studied", "has studied"],
      answer: "is studying",
      explanation: "Hành động đang diễn ra xung quanh thời điểm nói (trong học kỳ này) -> 'is studying'."
    },
    {
      id: "t_pc_13",
      contextScenario: "🍳 Hoạt động nấu nướng trong bếp",
      question: "Chọn câu đúng: 'Chef Gordon _____ a special wine sauce for the roasted duck.'",
      options: ["is preparing", "prepares", "prepared", "prepare"],
      answer: "is preparing",
      explanation: "Đầu bếp đang chuẩn bị nước sốt -> 'is preparing'."
    },
    {
      id: "t_pc_14",
      contextScenario: "💬 Giao tiếp qua tin nhắn nhắn nhanh",
      question: "Bạn nhắn tin: 'Sorry for the delay, I _____ home through heavy traffic right now.'",
      options: ["am driving", "drive", "drove", "was driving"],
      answer: "am driving",
      explanation: "Có dấu hiệu 'right now' -> 'am driving'."
    },
    {
      id: "t_pc_15",
      contextScenario: "🔍 Kiểm tra phòng họp trống",
      question: "Chọn câu hỏi: '_____ anyone _____ the meeting room on the 4th floor currently?'",
      options: ["Is / using", "Does / use", "Has / used", "Did / use"],
      answer: "Is / using",
      explanation: "'Currently' (hiện tại) đi với Hiện tại tiếp diễn: 'Is anyone using'."
    },
    {
      id: "t_pc_16",
      contextScenario: "🌱 Quá trình sinh trưởng",
      question: "Điền vào chỗ trống: 'The young seedlings _____ rapidly after the spring rains.'",
      options: ["are growing", "grow", "grew", "have grown"],
      answer: "are growing",
      explanation: "Nhấn mạnh quá trình biến đổi đang diễn tiến -> 'are growing rapidly'."
    },
    {
      id: "t_pc_17",
      contextScenario: "⚠️ Cảnh báo an toàn trong phân xưởng",
      question: "Chọn câu đúng: 'Be cautious! The heavy machinery _____ right behind you.'",
      options: ["is operating", "operates", "operated", "has operated"],
      answer: "is operating",
      explanation: "Cảnh báo trước mắt 'Be cautious!' -> 'is operating'."
    },
    {
      id: "t_pc_18",
      contextScenario: "🏥 Tình trạng phục hồi của bệnh nhân",
      question: "Bác sĩ thông báo: 'His overall health condition _____ day by day.'",
      options: ["is improving", "improves", "improved", "has improved"],
      answer: "is improving",
      explanation: "Cụm 'day by day' (từng ngày một) diễn tả sự biến đổi dần dần -> dùng Hiện tại tiếp diễn."
    },
    {
      id: "t_pc_19",
      contextScenario: "👥 Họp nhóm trực tuyến",
      question: "Trưởng nhóm hỏi: 'Can everyone see the slides that I _____ right now?'",
      options: ["am sharing", "share", "shared", "was sharing"],
      answer: "am sharing",
      explanation: "Hành động chia sẻ màn hình đang diễn ra ngay lúc nói -> 'am sharing'."
    },
    {
      id: "t_pc_20",
      contextScenario: "🎨 Quá trình sáng tác nghệ thuật",
      question: "Điền vào chỗ trống: 'The painter _____ on a giant mural for the city gallery this week.'",
      options: ["is working", "works", "worked", "has worked"],
      answer: "is working",
      explanation: "Dấu hiệu 'this week' (tuần này) chỉ sự việc tạm thời đang tiến hành -> 'is working'."
    }
  ],
  "present-perfect": [
    {
      id: "t_pp_1",
      contextScenario: "📊 Kiểm tra tiến độ dự án trước kỳ hạn",
      question: "Chọn câu trả lời đúng: '_____ you ever _____ with international clients before?'",
      options: ["Did / worked", "Have / worked", "Were / working", "Had / work"],
      answer: "Have / worked",
      explanation: "Hỏi về kinh nghiệm trải nghiệm từ trước đến nay dùng cấu trúc 'Have you ever + V3/ed (worked)'."
    },
    {
      id: "t_pp_2",
      contextScenario: "✉️ Phản hồi email kiểm tra tình trạng tài liệu",
      question: "Điền vào chỗ trống: 'We cannot proceed because the supplier _____ the parts yet.'",
      options: ["didn't deliver", "hasn't delivered", "isn't delivering", "hadn't delivered"],
      answer: "hasn't delivered",
      explanation: "Có từ 'yet' ở cuối câu phủ định chỉ hành động chưa hoàn thành tính đến thời điểm hiện tại -> dùng 'hasn't delivered'."
    },
    {
      id: "t_pp_3",
      contextScenario: "🏆 Tuyên dương thành tích thâm niên",
      question: "Chọn câu đúng: 'Professor Thorne _____ at this university for more than thirty years.'",
      options: ["has taught", "teaches", "taught", "is teaching"],
      answer: "has taught",
      explanation: "Bắt đầu dạy từ 30 năm trước và hiện vẫn đang giảng dạy -> dùng Hiện tại hoàn thành: 'has taught'."
    },
    {
      id: "t_pp_4",
      contextScenario: "🔍 Mất chìa khóa và tìm kiếm",
      question: "Bạn hốt hoảng nói: 'I can't open my apartment door because I _____ my keys!'",
      options: ["have lost", "lost", "had lost", "am losing"],
      answer: "have lost",
      explanation: "Mất chìa khóa trong quá khứ nhưng để lại kết quả trực tiếp ở hiện tại (không mở được cửa) -> dùng 'have lost'."
    },
    {
      id: "t_pp_5",
      contextScenario: "✈️ Hỏi về trải nghiệm ẩm thực",
      question: "Chọn câu hỏi đúng: '_____ you ever tasted authentic Hanoi phở?'",
      options: ["Have", "Did", "Do", "Are"],
      answer: "Have",
      explanation: "Hỏi trải nghiệm với 'ever' dùng 'Have you ever + V3'."
    },
    {
      id: "t_pp_6",
      contextScenario: "🏢 Thông báo nhân sự vừa có hiệu lực",
      question: "Điền vào chỗ trống: 'The HR department _____ a new remote work policy recently.'",
      options: ["has announced", "announced", "announces", "had announced"],
      answer: "has announced",
      explanation: "Dấu hiệu 'recently' (gần đây) đi với thì Hiện tại hoàn thành: 'has announced'."
    },
    {
      id: "t_pp_7",
      contextScenario: "📦 Kiểm tra tình trạng giao hàng",
      question: "Khách hàng thông báo: 'Good news! The courier _____ the package at my front door.'",
      options: ["has just dropped off", "just dropped off", "drops off", "is just dropping off"],
      answer: "has just dropped off",
      explanation: "'Has just + V3' diễn tả hành động vừa mới xảy ra tức thì."
    },
    {
      id: "t_pp_8",
      contextScenario: "🎬 Thảo luận về một bộ phim bom tấn",
      question: "Chọn câu đúng: 'I _____ that documentary three times already because it's so inspiring.'",
      options: ["have watched", "watched", "watch", "am watching"],
      answer: "have watched",
      explanation: "Nêu số lần lặp lại trải nghiệm tính đến hiện tại ('three times already') -> 'have watched'."
    },
    {
      id: "t_pp_9",
      contextScenario: "🚫 Phân biệt với Quá khứ đơn",
      question: "Chọn câu SAI về mặt ngữ pháp:",
      options: ["I have seen him yesterday.", "I saw him yesterday.", "I have seen him recently.", "I have already seen him."],
      answer: "I have seen him yesterday.",
      explanation: "'Yesterday' là mốc thời gian quá khứ đã kết thúc, không được dùng thì Hiện tại hoàn thành."
    },
    {
      id: "t_pp_10",
      contextScenario: "📅 Mối quan hệ bạn bè lâu năm",
      question: "Điền vào chỗ trống: 'Emily and I _____ close friends since childhood.'",
      options: ["have been", "were", "are", "had been"],
      answer: "have been",
      explanation: "Có mốc 'since childhood' (từ thời thơ ấu) -> Hiện tại hoàn thành 'have been'."
    },
    {
      id: "t_pp_11",
      contextScenario: "💼 Báo cáo tiến độ kinh doanh tuần này",
      question: "Điền vào chỗ trống: 'So far this quarter, our team _____ over two hundred customer inquiries.'",
      options: ["has resolved", "resolved", "resolves", "had resolved"],
      answer: "has resolved",
      explanation: "Dấu hiệu 'So far' (cho đến nay) đi với Hiện tại hoàn thành: 'has resolved'."
    },
    {
      id: "t_pp_12",
      contextScenario: "☕ Lời mời dùng bữa trưa",
      question: "Đồng nghiệp rủ ăn trưa, bạn đáp: 'No thanks, I _____ a heavy breakfast already.'",
      options: ["have had", "had had", "had", "have"],
      answer: "have had",
      explanation: "Hành động ăn sáng đã xong và kết quả là giờ không đói -> dùng 'have had already'."
    },
    {
      id: "t_pp_13",
      contextScenario: "🏥 Quá trình hồi phục sức khỏe",
      question: "Bác sĩ nhận xét: 'The patient _____ remarkable progress since the surgery.'",
      options: ["has made", "made", "makes", "is making"],
      answer: "has made",
      explanation: "Kéo dài từ ca mổ (since the surgery) đến nay -> 'has made'."
    },
    {
      id: "t_pp_14",
      contextScenario: "🚗 Tình trạng sử dụng xe cộ",
      question: "Chọn câu hỏi đúng: 'How long _____ this hybrid car?'",
      options: ["have you owned", "did you own", "do you own", "are you owning"],
      answer: "have you owned",
      explanation: "Hỏi về khoảng thời gian sở hữu kéo dài đến hiện tại: 'have you owned'."
    },
    {
      id: "t_pp_15",
      contextScenario: "🌍 Sự kiện lịch sử đối sánh",
      question: "Điền vào chỗ trống: 'Humans _____ on Mars yet, but robotic rovers have explored its surface.'",
      options: ["have not walked", "did not walk", "do not walk", "had not walked"],
      answer: "have not walked",
      explanation: "Tính đến nay con người chưa từng đặt chân lên Sao Hỏa ('yet') -> 'have not walked'."
    },
    {
      id: "t_pp_16",
      contextScenario: "📖 Nhận xét cuốn sách đang đọc",
      question: "Chọn câu đúng: 'This is the most captivating novel I _____ in years.'",
      options: ["have read", "read", "am reading", "had read"],
      answer: "have read",
      explanation: "Cấu trúc so sánh nhất 'This is the most... that I have ever + V3': 'have read'."
    },
    {
      id: "t_pp_17",
      contextScenario: "🏢 Thay đổi cơ sở vật chất",
      question: "Người quản lý nói: 'We _____ the lighting system, so the room looks much brighter now.'",
      options: ["have upgraded", "upgraded", "upgrade", "had upgraded"],
      answer: "have upgraded",
      explanation: "Hành động nâng cấp đèn trong quá khứ để lại kết quả nhìn thấy rõ ở hiện tại ('looks brighter now') -> 'have upgraded'."
    },
    {
      id: "t_pp_18",
      contextScenario: "🎓 Bằng cấp học vấn",
      question: "Chọn câu đúng: 'She _____ her Master’s degree, so she is qualified for this position.'",
      options: ["has completed", "completed", "completes", "is completing"],
      answer: "has completed",
      explanation: "Đã hoàn thành xong và kết quả là hiện tại đủ tiêu chuẩn -> 'has completed'."
    },
    {
      id: "t_pp_19",
      contextScenario: "💬 Phản hồi về email thất lạc",
      question: "Người gửi hỏi: '_____ you checked your spam folder yet?'",
      options: ["Have", "Did", "Do", "Are"],
      answer: "Have",
      explanation: "Có từ 'yet' ở câu hỏi Hiện tại hoàn thành -> mượn 'Have you checked'."
    },
    {
      id: "t_pp_20",
      contextScenario: "📈 Thống kê lượng truy cập website",
      question: "Điền vào chỗ trống: 'Over one million users _____ our mobile application up to now.'",
      options: ["have downloaded", "downloaded", "download", "had downloaded"],
      answer: "have downloaded",
      explanation: "Dấu hiệu 'up to now' (cho đến tận bây giờ) -> 'have downloaded'."
    }
  ],
  "present-perfect-continuous": [
    {
      id: "t_ppc_1",
      contextScenario: "💬 Hỏi thăm một đồng nghiệp trông rất kiệt sức",
      question: "Bạn nhận xét: 'Why are your eyes red? — Because I _____ at the computer screen all day.'",
      options: ["stared", "have been staring", "am staring", "had stared"],
      answer: "have been staring",
      explanation: "Có dấu hiệu 'all day' và hậu quả mắt đỏ ở hiện tại -> nhấn mạnh hành động nhìn màn hình diễn ra liên tục."
    },
    {
      id: "t_ppc_2",
      contextScenario: "🌧️ Quan sát đường phố sau cơn mưa kéo dài",
      question: "Chọn câu đúng: 'The street is flooded because it _____ non-stop since dawn.'",
      options: ["has been raining", "rained", "rains", "is raining"],
      answer: "has been raining",
      explanation: "Mưa liên tục từ rạng sáng đến nay không ngắt quãng -> dùng Hiện tại hoàn thành tiếp diễn."
    },
    {
      id: "t_ppc_3",
      contextScenario: "⏳ Chờ đợi người thân tại sảnh sân bay",
      question: "Hành khách phàn nàn: 'We _____ for our luggage for more than an hour!'",
      options: ["have been waiting", "wait", "waited", "are waiting"],
      answer: "have been waiting",
      explanation: "Nhấn mạnh khoảng thời gian chờ đợi kéo dài liên tục suốt hơn 1 giờ đồng hồ -> 'have been waiting'."
    },
    {
      id: "t_ppc_4",
      contextScenario: "🎸 Luyện tập nhạc cụ chuẩn bị biểu diễn",
      question: "Điền vào chỗ trống: 'Alex has calluses on his fingers because he _____ the guitar all afternoon.'",
      options: ["has been practicing", "practiced", "practices", "had practiced"],
      answer: "has been practicing",
      explanation: "Dấu hiệu 'all afternoon' và vết chai tay ở hiện tại minh chứng cho quá trình luyện tập liên tục."
    },
    {
      id: "t_ppc_5",
      contextScenario: "🔍 Tìm kiếm hồ sơ bị thất lạc",
      question: "Thư ký mệt mỏi nói: 'I _____ for the missing invoice for three hours, but I still haven't found it.'",
      options: ["have been searching", "searched", "search", "had searched"],
      answer: "have been searching",
      explanation: "Quá trình tìm kiếm diễn ra liên tục suốt 3 giờ và hiện vẫn chưa tìm thấy -> 'have been searching'."
    },
    {
      id: "t_ppc_6",
      contextScenario: "🌐 Học ngoại ngữ dài hạn",
      question: "Chọn câu hỏi đúng: 'How long _____ Vietnamese?'",
      options: ["have you been learning", "did you learn", "do you learn", "are you learning"],
      answer: "have you been learning",
      explanation: "Hỏi về quá trình học tập kéo dài liên tục từ quá khứ đến hiện tại: 'How long have you been learning'."
    },
    {
      id: "t_ppc_7",
      contextScenario: "🏃 Vận động viên sau buổi chạy bộ",
      question: "Chọn câu đúng: 'She is out of breath because she _____ around the lake.'",
      options: ["has been jogging", "jogged", "jogs", "had jogged"],
      answer: "has been jogging",
      explanation: "Hành động vừa mới dừng nhưng để lại dấu hiệu thở hổn hển ở hiện tại -> 'has been jogging'."
    },
    {
      id: "t_ppc_8",
      contextScenario: "🔧 Sửa chữa hệ thống ống nước",
      question: "Bác thợ nói: 'I _____ on this pipe leak since 8 AM, and it is almost fixed.'",
      options: ["have been working", "worked", "am working", "had worked"],
      answer: "have been working",
      explanation: "Làm việc liên tục từ 8 giờ sáng đến nay -> 'have been working'."
    },
    {
      id: "t_ppc_9",
      contextScenario: "🏢 Tranh luận về chiến lược kinh doanh",
      question: "Điền vào chỗ trống: 'The board members _____ this proposal for two hours without reaching consensus.'",
      options: ["have been debating", "debated", "debate", "are debating"],
      answer: "have been debating",
      explanation: "Quá trình tranh luận diễn ra liên tục suốt 2 giờ -> 'have been debating'."
    },
    {
      id: "t_ppc_10",
      contextScenario: "💻 Lỗi máy chủ nóng máy",
      question: "Kỹ thuật viên giải thích: 'The computer chassis is very hot because the CPU _____ heavy render jobs.'",
      options: ["has been processing", "processed", "processes", "had processed"],
      answer: "has been processing",
      explanation: "Máy móc chạy tác vụ nặng liên tục dẫn đến máy nóng ở hiện tại -> 'has been processing'."
    },
    {
      id: "t_ppc_11",
      contextScenario: "📱 Cuộc gọi kéo dài",
      question: "Chọn câu đúng: 'Who _____ on the phone with for the past forty minutes?'",
      options: ["have you been talking", "did you talk", "do you talk", "had you talked"],
      answer: "have you been talking",
      explanation: "Dấu hiệu 'for the past forty minutes' chỉ quá trình nói chuyện liên tục -> 'have you been talking'."
    },
    {
      id: "t_ppc_12",
      contextScenario: "📖 Ôn thi căng thẳng",
      question: "Sinh viên nói: 'We _____ for the final examination all week.'",
      options: ["have been revising", "revised", "revise", "had revised"],
      answer: "have been revising",
      explanation: "Dấu hiệu 'all week' nhấn mạnh quá trình ôn tập liên tục -> 'have been revising'."
    },
    {
      id: "t_ppc_13",
      contextScenario: "🎨 Quá trình sơn sửa nhà cửa",
      question: "Điền vào chỗ trống: 'His clothes have paint splatters because he _____ the living room walls.'",
      options: ["has been painting", "painted", "paints", "had painted"],
      answer: "has been painting",
      explanation: "Vết sơn dính trên áo là bằng chứng của hành động vừa diễn ra liên tục -> 'has been painting'."
    },
    {
      id: "t_ppc_14",
      contextScenario: "❄️ Thời tiết lạnh buốt",
      question: "Chọn câu đúng: 'The wind _____ fiercely since last midnight.'",
      options: ["has been blowing", "blew", "blows", "is blowing"],
      answer: "has been blowing",
      explanation: "Gió rít liên tục không ngừng từ nửa đêm qua tới giờ -> 'has been blowing'."
    },
    {
      id: "t_ppc_15",
      contextScenario: "🚗 Lái xe đường dài mệt mỏi",
      question: "Tài xế nói: 'We need to pull over at the rest stop; I _____ for five hours straight.'",
      options: ["have been driving", "drove", "am driving", "had driven"],
      answer: "have been driving",
      explanation: "Lái xe 5 tiếng đồng hồ liên tục không nghỉ -> 'have been driving'."
    },
    {
      id: "t_ppc_16",
      contextScenario: "💼 Đàm phán kéo dài nhiều ngày",
      question: "Người phát ngôn cho biết: 'Both parties _____ the ceasefire terms over the last three days.'",
      options: ["have been negotiating", "negotiated", "negotiate", "had negotiated"],
      answer: "have been negotiating",
      explanation: "Đàm phán liên tục trong 3 ngày qua -> 'have been negotiating'."
    },
    {
      id: "t_ppc_17",
      contextScenario: "🍳 Mùi thơm tỏa ra từ gian bếp",
      question: "Người mẹ nói: 'The kitchen smells wonderful because Grandma _____ cookies all morning.'",
      options: ["has been baking", "baked", "bakes", "had baked"],
      answer: "has been baking",
      explanation: "Bà nướng bánh suốt cả buổi sáng tạo mùi thơm ở hiện tại -> 'has been baking'."
    },
    {
      id: "t_ppc_18",
      contextScenario: "🏊 Khóa huấn luyện bơi lội",
      question: "Huấn luyện viên nhận xét: 'The athletes _____ five kilometers every morning this month.'",
      options: ["have been swimming", "swam", "swim", "are swimming"],
      answer: "have been swimming",
      explanation: "Nhấn mạnh quá trình tập luyện bơi lội diễn ra liên tục -> 'have been swimming'."
    },
    {
      id: "t_ppc_19",
      contextScenario: "💸 Tích lũy tài chính cho mục tiêu lớn",
      question: "Người bạn chia sẻ: 'They _____ money for a down payment on an apartment for two years.'",
      options: ["have been saving", "saved", "save", "had saved"],
      answer: "have been saving",
      explanation: "Tiết kiệm tiền liên tục suốt 2 năm qua -> 'have been saving'."
    },
    {
      id: "t_ppc_20",
      contextScenario: "💬 Nhắn tin tìm người thân",
      question: "Bạn nhắn: 'Where have you been? I _____ you on your mobile all afternoon!'",
      options: ["have been ringing", "rang", "ring", "had rung"],
      answer: "have been ringing",
      explanation: "Gọi điện liên tục suốt buổi chiều -> 'have been ringing'."
    }
  ],
  "past-simple": [
    {
      id: "t_pst_1",
      contextScenario: "🏛️ Bài kiểm tra lịch sử kinh tế thế giới",
      question: "Chọn dạng đúng: 'The World Health Organization _____ in 1948.'",
      options: ["founded", "was founded", "has been founded", "is founded"],
      answer: "was founded",
      explanation: "Sự kiện lịch sử đã diễn ra vào năm 1948 ở thể bị động -> 'was founded'."
    },
    {
      id: "t_pst_2",
      contextScenario: "💼 Hỏi thăm đồng nghiệp về kỳ nghỉ tuần trước",
      question: "Chọn câu hỏi đúng: 'Where _____ on vacation last week?'",
      options: ["did you go", "did you went", "were you go", "have you gone"],
      answer: "did you go",
      explanation: "Có mốc 'last week', mượn trợ động từ 'did' và động từ nguyên thể 'go'."
    },
    {
      id: "t_pst_3",
      contextScenario: "🏢 Báo cáo sự cố hôm qua",
      question: "Điền động từ: 'The network server unexpectedly _____ at 3:15 PM yesterday.'",
      options: ["crashed", "has crashed", "crashes", "was crashing"],
      answer: "crashed",
      explanation: "Sự việc xảy ra và kết thúc tại thời điểm xác định hôm qua (at 3:15 PM yesterday) -> 'crashed'."
    },
    {
      id: "t_pst_4",
      contextScenario: "📜 Kể lại chuỗi hành động liên tiếp",
      question: "Chọn câu đúng: 'He picked up the receiver, _____ the number, and waited for an answer.'",
      options: ["dialed", "has dialed", "dials", "was dialing"],
      answer: "dialed",
      explanation: "Chuỗi các hành động ngắn xảy ra liên tiếp trong quá khứ: picked up -> dialed -> waited."
    },
    {
      id: "t_pst_5",
      contextScenario: "🎓 Lễ tốt nghiệp đại học năm xưa",
      question: "Điền vào chỗ trống: 'She _____ from Harvard Business School five years ago.'",
      options: ["graduated", "has graduated", "graduates", "was graduating"],
      answer: "graduated",
      explanation: "Dấu hiệu 'five years ago' bắt buộc chia Quá khứ đơn: 'graduated'."
    },
    {
      id: "t_pst_6",
      contextScenario: "✈️ Chuyến công tác Tokyo tuần trước",
      question: "Chọn câu phủ định đúng: 'We _____ the contract during our trip last week because terms were unclear.'",
      options: ["did not sign", "have not signed", "do not sign", "were not signing"],
      answer: "did not sign",
      explanation: "Quá khứ đơn thể phủ định: 'did not + V-inf' (did not sign)."
    },
    {
      id: "t_pst_7",
      contextScenario: "🔬 Phát minh vĩ đại trong lịch sử",
      question: "Chọn đáp án đúng: 'Alexander Fleming _____ penicillin by accident in 1928.'",
      options: ["discovered", "discovers", "has discovered", "had discovered"],
      answer: "discovered",
      explanation: "Sự kiện lịch sử xác định vào năm 1928 -> 'discovered'."
    },
    {
      id: "t_pst_8",
      contextScenario: "🏠 Chuyển nhà năm ngoái",
      question: "Điền động từ: 'My parents _____ this house twenty years ago.'",
      options: ["bought", "buy", "have bought", "were buying"],
      answer: "bought",
      explanation: "'Twenty years ago' đi với quá khứ đơn 'bought'."
    },
    {
      id: "t_pst_9",
      contextScenario: "🎭 Đi xem kịch tối hôm qua",
      question: "Chọn câu hỏi đúng: 'How _____ the theatrical play last night?'",
      options: ["was", "did", "were", "is"],
      answer: "was",
      explanation: "Hỏi về tính chất của vở kịch (the play - danh từ số ít) trong quá khứ: 'How was the play last night?'."
    },
    {
      id: "t_pst_10",
      contextScenario: "🚗 Tai nạn giao thông tuần trước",
      question: "Điền động từ: 'Fortunately, nobody _____ injured in the collision last Monday.'",
      options: ["was", "were", "is", "has been"],
      answer: "was",
      explanation: "Đại từ 'nobody' đi với động từ số ít trong quá khứ -> 'was injured'."
    },
    {
      id: "t_pst_11",
      contextScenario: "☕ Buổi hẹn sáng nay",
      question: "Chọn câu đúng: 'I _____ with our legal counsel earlier this morning.'",
      options: ["met", "meet", "have met", "am meeting"],
      answer: "met",
      explanation: "'Earlier this morning' (sớm sáng nay - thời điểm đã qua) -> chia 'met'."
    },
    {
      id: "t_pst_12",
      contextScenario: "💰 Giao dịch ngân hàng chiều qua",
      question: "Điền động từ: 'The accountant _____ the funds to the vendor's account at 2 PM.'",
      options: ["transferred", "transfers", "has transferred", "is transferring"],
      answer: "transferred",
      explanation: "Mốc thời gian xác định trong quá khứ (at 2 PM) -> 'transferred'."
    },
    {
      id: "t_pst_13",
      contextScenario: "📱 Đổi điện thoại tháng trước",
      question: "Chọn câu phủ định: 'I _____ to replace my smartphone until the screen broke completely.'",
      options: ["didn't want", "don't want", "haven't wanted", "wasn't wanting"],
      answer: "didn't want",
      explanation: "Phủ định quá khứ đơn của động từ 'want' là 'didn't want'."
    },
    {
      id: "t_pst_14",
      contextScenario: "🌧️ Trận bão mùa hè năm ngoái",
      question: "Điền động từ: 'The typhoon _____ severe flooding across coastal provinces last August.'",
      options: ["caused", "causes", "has caused", "was causing"],
      answer: "caused",
      explanation: "'Last August' -> chia Quá khứ đơn 'caused'."
    },
    {
      id: "t_pst_15",
      contextScenario: "🍽️ Bữa tối tại nhà hàng Pháp",
      question: "Chọn câu đúng: 'The French cuisine we tried last weekend _____ exquisite.'",
      options: ["tasted", "tastes", "has tasted", "was tasting"],
      answer: "tasted",
      explanation: "Trải nghiệm đã kết thúc vào cuối tuần trước -> 'tasted'."
    },
    {
      id: "t_pst_16",
      contextScenario: "🔑 Để quên thẻ ra vào",
      question: "Chọn câu đúng: 'I _____ my access badge on the kitchen counter when I left this morning.'",
      options: ["forgot", "forget", "have forgotten", "was forgetting"],
      answer: "forgot",
      explanation: "Hành động để quên xảy ra tại thời điểm rời nhà sáng nay -> 'forgot'."
    },
    {
      id: "t_pst_17",
      contextScenario: "✈️ Chuyến bay hạ cánh",
      question: "Điền động từ: 'The airplane _____ smoothly despite the turbulent weather.'",
      options: ["landed", "lands", "has landed", "was landing"],
      answer: "landed",
      explanation: "Hành động hạ cánh hoàn tất -> 'landed'."
    },
    {
      id: "t_pst_18",
      contextScenario: "💬 Nhận phản hồi từ sếp",
      question: "Chọn câu hỏi: '_____ the CEO approve the project budget yesterday?'",
      options: ["Did", "Does", "Has", "Was"],
      answer: "Did",
      explanation: "Có dấu hiệu 'yesterday' -> mượn trợ động từ 'Did'."
    },
    {
      id: "t_pst_19",
      contextScenario: "🏆 Kết quả trận đấu thể thao tối qua",
      question: "Điền động từ: 'Our national team _____ the championship match by a single goal.'",
      options: ["won", "wins", "has won", "is winning"],
      answer: "won",
      explanation: "Trận đấu đã kết thúc trong quá khứ -> 'won'."
    },
    {
      id: "t_pst_20",
      contextScenario: "🏥 Đi khám sức khỏe định kỳ",
      question: "Chọn câu đúng: 'She _____ her annual physical check-up last Tuesday.'",
      options: ["completed", "completes", "has completed", "was completing"],
      answer: "completed",
      explanation: "Dấu hiệu 'last Tuesday' -> 'completed'."
    }
  ],
  "past-continuous": [
    {
      id: "t_pco_1",
      contextScenario: "🕵️ Điều tra nguyên nhân sự cố trong ca trực",
      question: "Điền vào chỗ trống: 'What _____ when the security alarm went off?'",
      options: ["did you do", "were you doing", "are you doing", "have you done"],
      answer: "were you doing",
      explanation: "Hỏi hành động đang diễn ra tại thời điểm chuông báo động reo (went off) -> 'were you doing'."
    },
    {
      id: "t_pco_2",
      contextScenario: "⚡ Sự cố chập điện trong lúc làm việc",
      question: "Chọn câu đúng: 'While I _____ on the quarterly report, the power suddenly went out.'",
      options: ["was working", "worked", "am working", "had worked"],
      answer: "was working",
      explanation: "Sau liên từ 'While', hành động đang diễn ra làm nền trong quá khứ chia Quá khứ tiếp diễn: 'was working'."
    },
    {
      id: "t_pco_3",
      contextScenario: "🚗 Cuộc gọi đến khi đang lái xe",
      question: "Chọn câu đúng: 'He didn't answer his phone because he _____ on the highway.'",
      options: ["was driving", "drove", "is driving", "had driven"],
      answer: "was driving",
      explanation: "Tại thời điểm điện thoại reo, anh ấy đang lái xe -> 'was driving'."
    },
    {
      id: "t_pco_4",
      contextScenario: "🌆 Khung cảnh lúc 9 giờ tối qua",
      question: "Điền động từ: 'At 9:00 PM yesterday, my family _____ a comedy film together.'",
      options: ["was watching", "watched", "were watching", "had watched"],
      answer: "were watching",
      explanation: "Tại một thời điểm cụ thể trong quá khứ ('At 9:00 PM yesterday'), hành động đang diễn ra -> 'were watching'."
    },
    {
      id: "t_pco_5",
      contextScenario: "📖 Hai hành động song song trong quá khứ",
      question: "Chọn câu đúng: 'While my brother was studying in his room, I _____ the violin in the living room.'",
      options: ["was practicing", "practiced", "practice", "had practiced"],
      answer: "was practicing",
      explanation: "Hai hành động diễn ra song song cùng lúc trong quá khứ đều chia Quá khứ tiếp diễn."
    },
    {
      id: "t_pco_6",
      contextScenario: "🌧️ Bắt đầu mưa khi đang đi dạo",
      question: "Điền động từ: 'We _____ along the beach when it started to drizzle.'",
      options: ["were strolling", "strolled", "are strolling", "had strolled"],
      answer: "were strolling",
      explanation: "Hành động dạo mát đang diễn ra ('were strolling') thì trời bắt đầu đổ mưa ('started')."
    },
    {
      id: "t_pco_7",
      contextScenario: "😴 Ngủ quên trên tàu hỏa",
      question: "Hành khách kể: 'I missed my train stop because I _____ deeply.'",
      options: ["was sleeping", "slept", "sleep", "had slept"],
      answer: "was sleeping",
      explanation: "Trong lúc tàu đi qua ga, người đó đang ngủ say -> 'was sleeping'."
    },
    {
      id: "t_pco_8",
      contextScenario: "💻 Tải tài liệu khi mạng chập chờn",
      question: "Chọn câu đúng: 'The laptop shut down while the engineer _____ the critical firmware.'",
      options: ["was updating", "updated", "updates", "had updated"],
      answer: "was updating",
      explanation: "Sau 'while' chia tiếp diễn trong quá khứ: 'was updating'."
    },
    {
      id: "t_pco_9",
      contextScenario: "☕ Gặp người quen tình cờ",
      question: "Chọn câu đúng: 'I bumped into an old university classmate while I _____ coffee downtown.'",
      options: ["was having", "had", "have", "am having"],
      answer: "was having",
      explanation: "Đang uống cà phê thì tình cờ chạm mặt -> 'was having'."
    },
    {
      id: "t_pco_10",
      contextScenario: "🔍 Kiểm tra phòng làm việc lúc nửa đêm",
      question: "Bảo vệ báo cáo: 'At midnight, the cleaning crew _____ the conference hall floors.'",
      options: ["was polishing", "polished", "is polishing", "had polished"],
      answer: "was polishing",
      explanation: "Tại thời điểm nửa đêm (At midnight), hành động đánh bóng sàn đang diễn ra -> 'was polishing'."
    },
    {
      id: "t_pco_11",
      contextScenario: "📞 Bỏ lỡ thông báo quan trọng",
      question: "Điền động từ: 'Sorry I missed the announcement; I _____ through headphones.'",
      options: ["was listening", "listened", "am listening", "had listened"],
      answer: "was listening",
      explanation: "Lúc loa thông báo phát thì bạn đang đeo tai nghe nghe nhạc -> 'was listening'."
    },
    {
      id: "t_pco_12",
      contextScenario: "⚡ Sự cố trong buổi biểu diễn ca nhạc",
      question: "Khán giả kể: 'The microphone went dead while the tenor _____ the final aria.'",
      options: ["was singing", "sang", "sings", "had sung"],
      answer: "was singing",
      explanation: "Hành động ca sĩ đang hát bị micro hỏng cắt ngang -> 'was singing'."
    },
    {
      id: "t_pco_13",
      contextScenario: "🌧️ Trời mưa tầm tã suốt buổi sáng hôm qua",
      question: "Chọn câu đúng: 'All through yesterday morning, torrential rain _____ against the windows.'",
      options: ["was beating", "beat", "has beaten", "is beating"],
      answer: "was beating",
      explanation: "Nhấn mạnh mưa đập vào cửa sổ liên tục suốt buổi sáng hôm qua -> 'was beating'."
    },
    {
      id: "t_pco_14",
      contextScenario: "🍳 Mẹ đang nấu ăn thì khách gõ cửa",
      question: "Điền động từ: 'Mother _____ vegetable soup when the doorbell rang.'",
      options: ["was preparing", "prepared", "prepares", "had prepared"],
      answer: "was preparing",
      explanation: "Chuông cửa reo cắt ngang hành động đang nấu súp -> 'was preparing'."
    },
    {
      id: "t_pco_15",
      contextScenario: "✈️ Chuyến bay lúc 3 giờ chiều",
      question: "Chọn câu hỏi: 'What _____ at 3:00 PM yesterday when the emergency meeting was called?'",
      options: ["were you doing", "did you do", "are you doing", "have you done"],
      answer: "were you doing",
      explanation: "Hỏi hành động đang diễn ra tại mốc thời điểm cụ thể -> 'were you doing'."
    },
    {
      id: "t_pco_16",
      contextScenario: "🐾 Chó cắn rách giày lúc chủ nhân vắng nhà",
      question: "Chọn câu đúng: 'When I walked into the hallway, the puppy _____ on my leather shoes.'",
      options: ["was chewing", "chewed", "chews", "had chewed"],
      answer: "was chewing",
      explanation: "Khi bước vào cửa, cảnh tượng đập vào mắt là chú cún đang cắn giày -> 'was chewing'."
    },
    {
      id: "t_pco_17",
      contextScenario: "🏥 Bác sĩ đang phẫu thuật",
      question: "Điền động từ: 'The surgeon _____ the complex operation when the storm cut off main power.'",
      options: ["was performing", "performed", "performs", "had performed"],
      answer: "was performing",
      explanation: "Ca mổ đang diễn tiến thì mất điện -> 'was performing'."
    },
    {
      id: "t_pco_18",
      contextScenario: "👥 Tranh cãi nảy lửa khi sếp bước vào",
      question: "Chọn câu đúng: 'The two departments _____ heatedly when the director entered.'",
      options: ["were arguing", "argued", "argue", "had argued"],
      answer: "were arguing",
      explanation: "Hai phòng ban đang tranh cãi thì giám đốc bước vào phòng -> 'were arguing'."
    },
    {
      id: "t_pco_19",
      contextScenario: "🏃 Vận động viên bị chấn thương",
      question: "Điền động từ: 'The runner twisted her ankle while she _____ down the rocky slope.'",
      options: ["was sprinting", "sprinted", "sprints", "had sprinted"],
      answer: "was sprinting",
      explanation: "Sau 'while', hành động đang chạy dốc bị trẹo chân -> 'was sprinting'."
    },
    {
      id: "t_pco_20",
      contextScenario: "💬 Bị cắt đứt đường truyền internet",
      question: "Chọn câu đúng: 'The zoom video froze while the client _____ their feedback.'",
      options: ["was explaining", "explained", "explains", "had explained"],
      answer: "was explaining",
      explanation: "Khách hàng đang giải thích phản hồi thì đường truyền bị đóng băng -> 'was explaining'."
    }
  ],
  "past-perfect": [
    {
      id: "t_ppf_1",
      contextScenario: "🎬 Đến muộn tại buổi chiếu phim ra mắt",
      question: "Chọn câu đúng: 'When we arrived at the auditorium, the ceremony _____.'",
      options: ["already started", "had already started", "has already started", "was starting"],
      answer: "had already started",
      explanation: "Buổi lễ đã bắt đầu từ TRƯỚC khi chúng tôi đến nơi (arrived) -> dùng 'had already started'."
    },
    {
      id: "t_ppf_2",
      contextScenario: "✈️ Đến sân bay muộn giờ",
      question: "Hành khách kể lại: 'By the time I reached the boarding gate, the flight _____.'",
      options: ["had departed", "departed", "has departed", "was departing"],
      answer: "had departed",
      explanation: "Máy bay đã cất cánh trước thời điểm hành khách tới cổng -> dùng Quá khứ hoàn thành: 'had departed'."
    },
    {
      id: "t_ppf_3",
      contextScenario: "💼 Nộp báo cáo sau khi đã rà soát lỗi",
      question: "Điền động từ: 'She submitted the dossier only after she _____ all data tables.'",
      options: ["had verified", "verified", "verifies", "has verified"],
      answer: "had verified",
      explanation: "Việc kiểm tra xác thực số liệu xảy ra trước việc nộp hồ sơ -> 'had verified'."
    },
    {
      id: "t_ppf_4",
      contextScenario: "🔑 Mất chìa khóa và tìm thấy lại",
      question: "Chọn câu đúng: 'He realized he _____ his passport at the hotel only when he reached the border.'",
      options: ["had left", "left", "has left", "was leaving"],
      answer: "had left",
      explanation: "Hành động để quên hộ chiếu ở khách sạn xảy ra trước khi anh ấy nhận ra (realized) tại biên giới -> 'had left'."
    },
    {
      id: "t_ppf_5",
      contextScenario: "🏠 Mua nhà trước khi giá bất động sản tăng",
      question: "Chọn câu đúng: 'They _____ their townhouse before the property prices skyrocketed.'",
      options: ["had purchased", "purchased", "have purchased", "were purchasing"],
      answer: "had purchased",
      explanation: "Mua nhà xảy ra trước khi giá tăng vọt -> 'had purchased'."
    },
    {
      id: "t_ppf_6",
      contextScenario: "🍽️ Khách hàng đến nhà hàng đã đặt bàn trước",
      question: "Điền động từ: 'Luckily, we _____ a table in advance, so we did not have to wait in line.'",
      options: ["had reserved", "reserved", "have reserved", "were reserving"],
      answer: "had reserved",
      explanation: "Đặt bàn trước xảy ra trước khi đến nhà hàng -> 'had reserved'."
    },
    {
      id: "t_ppf_7",
      contextScenario: "💻 Khôi phục dữ liệu từ bản sao lưu",
      question: "IT thông báo: 'We didn't lose any records because our engineer _____ the database earlier.'",
      options: ["had backed up", "backed up", "has backed up", "was backing up"],
      answer: "had backed up",
      explanation: "Việc sao lưu xảy ra trước khi hệ thống gặp trục trặc -> 'had backed up'."
    },
    {
      id: "t_ppf_8",
      contextScenario: "👥 Nhận ra người quen cũ",
      question: "Chọn câu đúng: 'I immediately recognized Sarah because I _____ her at the symposium last year.'",
      options: ["had met", "met", "have met", "was meeting"],
      answer: "had met",
      explanation: "Đã từng gặp ở hội nghị năm ngoái (trước thời điểm nhận ra nhau) -> 'had met'."
    },
    {
      id: "t_ppf_9",
      contextScenario: "🌦️ Trời tạnh mưa trước khi trận bóng bắt đầu",
      question: "Điền động từ: 'The rain _____ by the time the referee blew the opening whistle.'",
      options: ["had stopped", "stopped", "has stopped", "was stopping"],
      answer: "had stopped",
      explanation: "Mưa đã tạnh trước khi trọng tài thổi còi bắt đầu trận đấu -> 'had stopped'."
    },
    {
      id: "t_ppf_10",
      contextScenario: "🎓 Thành tích trước khi bước sang tuổi ba mươi",
      question: "Chọn câu đúng: 'By the age of twenty-eight, the scientist _____ two major patents.'",
      options: ["had registered", "registered", "has registered", "was registering"],
      answer: "had registered",
      explanation: "Hoàn tất trước mốc tuổi 28 trong quá khứ -> 'had registered'."
    },
    {
      id: "t_ppf_11",
      contextScenario: "🚗 Xe hết xăng giữa đường",
      question: "Tài xế kể: 'The car broke down because the mechanic _____ to tighten the fuel cap.'",
      options: ["had forgotten", "forgot", "has forgotten", "was forgetting"],
      answer: "had forgotten",
      explanation: "Thợ quên vặn nắp bình xăng từ trước dẫn đến xe hỏng -> 'had forgotten'."
    },
    {
      id: "t_ppf_12",
      contextScenario: "🏢 Trụ sở chuyển đi trước khi khách đến",
      question: "Chọn câu đúng: 'When the delivery arrived, the company _____ to another district.'",
      options: ["had already moved", "already moved", "has moved", "was moving"],
      answer: "had already moved",
      explanation: "Công ty đã chuyển đi trước khi bưu kiện được giao tới -> 'had already moved'."
    },
    {
      id: "t_ppf_13",
      contextScenario: "📖 Đọc xong cuốn sách trước khi xem phim",
      question: "Điền động từ: 'I _____ the original novel before I watched the film adaptation.'",
      options: ["had read", "read", "have read", "was reading"],
      answer: "had read",
      explanation: "Đọc sách trước (had read), xem phim chuyển thể sau (watched)."
    },
    {
      id: "t_ppf_14",
      contextScenario: "🏥 Bệnh nhân hồi phục trước khi bác sĩ trưởng tới",
      question: "Chọn câu đúng: 'The fever _____ before the chief physician examined the child.'",
      options: ["had subsided", "subsided", "has subsided", "was subsiding"],
      answer: "had subsided",
      explanation: "Cơn sốt đã giảm trước khi bác sĩ trưởng khám -> 'had subsided'."
    },
    {
      id: "t_ppf_15",
      contextScenario: "💼 Kinh nghiệm làm việc trước khi chuyển công ty",
      question: "Điền động từ: 'Prior to joining our firm, he _____ at a multinational bank.'",
      options: ["had worked", "worked", "has worked", "was working"],
      answer: "had worked",
      explanation: "Làm việc tại ngân hàng trước thời điểm gia nhập công ty hiện tại -> 'had worked'."
    },
    {
      id: "t_ppf_16",
      contextScenario: "✈️ Hủy chuyến bay do bão",
      question: "Chọn câu đúng: 'The airline _____ all departures before passengers arrived at the terminal.'",
      options: ["had canceled", "canceled", "has canceled", "was canceling"],
      answer: "had canceled",
      explanation: "Hãng hàng không đã hủy các chuyến bay trước khi hành khách tới sân bay -> 'had canceled'."
    },
    {
      id: "t_ppf_17",
      contextScenario: "🔑 Nhớ lại nơi để đồ",
      question: "Điền động từ: 'She remembered where she _____ her car keys.'",
      options: ["had placed", "placed", "has placed", "was placing"],
      answer: "had placed",
      explanation: "Đặt chìa khóa ở đâu đó trước khi sực nhớ lại -> 'had placed'."
    },
    {
      id: "t_ppf_18",
      contextScenario: "💰 Bán hết cổ phiếu trước đợt sụt giảm thị trường",
      question: "Chọn câu đúng: 'The investor _____ his shares before the market crashed.'",
      options: ["had liquidated", "liquidated", "has liquidated", "was liquidating"],
      answer: "had liquidated",
      explanation: "Thanh lý cổ phiếu trước khi thị trường sụp đổ -> 'had liquidated'."
    },
    {
      id: "t_ppf_19",
      contextScenario: "🍽️ Khách ăn tối xong trước khi người mời đến",
      question: "Điền động từ: 'By the time I reached the banquet, the guests _____ their dessert.'",
      options: ["had finished", "finished", "have finished", "were finishing"],
      answer: "had finished",
      explanation: "Khách đã ăn xong món tráng miệng trước khi tôi tới buổi tiệc -> 'had finished'."
    },
    {
      id: "t_ppf_20",
      contextScenario: "🎓 Nộp bài trước hạn chót",
      question: "Chọn câu đúng: 'Every student _____ the assignment before the professor closed the submission portal.'",
      options: ["had uploaded", "uploaded", "has uploaded", "was uploading"],
      answer: "had uploaded",
      explanation: "Sinh viên đã tải bài nộp lên trước khi giáo sư đóng cổng -> 'had uploaded'."
    }
  ],
  "future-simple": [
    {
      id: "t_fs_1",
      contextScenario: "☕ Trong một quán cà phê khi thanh toán hóa đơn",
      question: "Bạn nói với người bạn: 'Put your wallet away! I _____ for the coffee.'",
      options: ["pay", "will pay", "am paying", "paid"],
      answer: "will pay",
      explanation: "Quyết định mời nước nảy sinh bộc phát ngay thời điểm nói -> dùng 'will pay'."
    },
    {
      id: "t_fs_2",
      contextScenario: "🌧️ Dự báo thời tiết ngày mai",
      question: "Chọn câu dự đoán: 'The meteorologist predicts that temperatures _____ tomorrow.'",
      options: ["will drop", "drop", "dropped", "are dropping"],
      answer: "will drop",
      explanation: "Dự đoán trong tương lai đi với 'predicts that...': 'will drop'."
    },
    {
      id: "t_fs_3",
      contextScenario: "📦 Đề nghị giúp đỡ mang vác đồ đạc",
      question: "Thấy đồng nghiệp xách đồ nặng, bạn nói: 'That box looks heavy. I _____ you carry it.'",
      options: ["will help", "help", "helped", "am helping"],
      answer: "will help",
      explanation: "Đưa ra lời đề nghị giúp đỡ ngay lúc nói -> 'will help'."
    },
    {
      id: "t_fs_4",
      contextScenario: "🤝 Lời hứa giữ bí mật",
      question: "Chọn câu đúng: 'Don't worry, I promise I _____ anyone about this conversation.'",
      options: ["will not tell", "do not tell", "did not tell", "am not telling"],
      answer: "will not tell",
      explanation: "Lời hứa (promise) chia ở thì Tương lai đơn: 'will not tell'."
    },
    {
      id: "t_fs_5",
      contextScenario: "🏢 Trả lời email đối tác",
      question: "Bạn viết: 'I _____ you the revised price quotation first thing tomorrow.'",
      options: ["will forward", "forward", "forwarded", "am forwarding"],
      answer: "will forward",
      explanation: "Cam kết hành động trong tương lai: 'will forward'."
    },
    {
      id: "t_fs_6",
      contextScenario: "📱 Điện thoại reo bất ngờ",
      question: "Chuông reo và bạn nói: 'I _____ the call, it must be the delivery driver.'",
      options: ["will take", "take", "took", "am taking"],
      answer: "will take",
      explanation: "Quyết định nghe máy tại thời điểm chuông reo -> 'will take'."
    },
    {
      id: "t_fs_7",
      contextScenario: "💭 Suy nghĩ chủ quan cá nhân",
      question: "Chọn câu đúng: 'In my opinion, electric vehicles _____ combustion engines by 2040.'",
      options: ["will replace", "replace", "replaced", "are replacing"],
      answer: "will replace",
      explanation: "Dự đoán chủ quan cá nhân đi với 'In my opinion': 'will replace'."
    },
    {
      id: "t_fs_8",
      contextScenario: "⚠️ Lời cảnh báo thận trọng",
      question: "Điền động từ: 'Be careful with that knife, or you _____ yourself!'",
      options: ["will cut", "cut", "are cutting", "have cut"],
      answer: "will cut",
      explanation: "Cảnh báo hậu quả trong tương lai: 'will cut'."
    },
    {
      id: "t_fs_9",
      contextScenario: "🍽️ Gọi món tại nhà hàng",
      question: "Bạn nói với phục vụ bàn: 'I _____ the grilled sea bass with steam vegetables, please.'",
      options: ["will have", "have", "had", "am having"],
      answer: "will have",
      explanation: "Quyết định gọi món ngay lúc xem thực đơn -> 'will have'."
    },
    {
      id: "t_fs_10",
      contextScenario: "🌧️ Trời mưa và không có ô",
      question: "Điền động từ: 'It's raining outside. I _____ a taxi instead of walking.'",
      options: ["will hail", "hail", "hailed", "am hailing"],
      answer: "will hail",
      explanation: "Quyết định bộc phát chuyển sang gọi xe -> 'will hail'."
    },
    {
      id: "t_fs_11",
      contextScenario: "🤝 Cam kết hoàn tiền nếu sản phẩm lỗi",
      question: "Chọn câu đúng: 'If the merchandise is defective, we _____ your payment in full.'",
      options: ["will refund", "refund", "refunded", "are refunding"],
      answer: "will refund",
      explanation: "Mệnh đề chính câu điều kiện loại 1 diễn tả lời hứa doanh nghiệp: 'will refund'."
    },
    {
      id: "t_fs_12",
      contextScenario: "✈️ Đón khách tại sân bay",
      question: "Người đón xe nói: 'I _____ for you right outside Arrival Gate 2.'",
      options: ["will wait", "wait", "waited", "am waiting"],
      answer: "will wait",
      explanation: "Cam kết vị trí đón khách -> 'will wait'."
    },
    {
      id: "t_fs_13",
      contextScenario: "📞 Hứa gọi lại sau",
      question: "Bạn bận họp và nói nhanh: 'I'm stepping into a meeting; I _____ you back in an hour.'",
      options: ["will call", "call", "called", "am calling"],
      answer: "will call",
      explanation: "Lời hứa gọi lại: 'I will call you back'."
    },
    {
      id: "t_fs_14",
      contextScenario: "🔮 Dự đoán tương lai nhân loại",
      question: "Điền động từ: 'Scientists believe artificial intelligence _____ solve complex medical mysteries.'",
      options: ["will help", "helps", "helped", "has helped"],
      answer: "will help",
      explanation: "Dự đoán sau 'believe' -> 'will help'."
    },
    {
      id: "t_fs_15",
      contextScenario: "❄️ Phòng quá lạnh",
      question: "Điền động từ: 'The breeze is chilly. I _____ the window.'",
      options: ["will shut", "shut", "shutted", "am shutting"],
      answer: "will shut",
      explanation: "Quyết định đóng cửa sổ nảy sinh tại chỗ -> 'will shut'."
    },
    {
      id: "t_fs_16",
      contextScenario: "💼 Nhận thêm trách nhiệm",
      question: "Chọn câu đúng: 'Leave that report to me; I _____ it before lunch.'",
      options: ["will finish", "finish", "finished", "have finished"],
      answer: "will finish",
      explanation: "Chủ động nhận làm và hứa hẹn thời hạn -> 'will finish'."
    },
    {
      id: "t_fs_17",
      contextScenario: "🎁 Mua quà tặng bất ngờ",
      question: "Bạn nhìn thấy món đồ và nói: 'That necklace is gorgeous! I _____ it for my mom.'",
      options: ["will buy", "buy", "bought", "am buying"],
      answer: "will buy",
      explanation: "Quyết định mua quà ngay khi nhìn thấy -> 'will buy'."
    },
    {
      id: "t_fs_18",
      contextScenario: "💬 An ủi bạn bè",
      question: "Chọn câu đúng: 'Don't stress over the exam; everything _____ fine.'",
      options: ["will be", "is", "was", "has been"],
      answer: "will be",
      explanation: "Lời động viên, an ủi về tương lai: 'everything will be fine'."
    },
    {
      id: "t_fs_19",
      contextScenario: "🏃 Tham gia cuộc thi chạy",
      question: "Chọn câu phủ định: 'I'm feeling under the weather, so I _____ in tomorrow's marathon.'",
      options: ["will not compete", "do not compete", "am not competing", "did not compete"],
      answer: "will not compete",
      explanation: "Quyết định không thi đấu: 'will not compete'."
    },
    {
      id: "t_fs_20",
      contextScenario: "🔑 Giữ đồ giúp đồng nghiệp",
      question: "Điền động từ: 'Give me your jacket; I _____ it in the closet for you.'",
      options: ["will hang", "hang", "hanged", "am hanging"],
      answer: "will hang",
      explanation: "Đề nghị giúp đỡ treo áo ngay tức thì -> 'will hang'."
    }
  ],
  "near-future": [
    {
      id: "t_nf_1",
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
    },
    {
      id: "t_nf_2",
      contextScenario: "👶 Có dấu hiệu mang thai rõ ràng",
      question: "Chọn câu đúng: 'Look at her baby bump! She _____ a child soon.'",
      options: ["is going to have", "will have", "has", "had"],
      answer: "is going to have",
      explanation: "Dự đoán có bằng chứng trước mắt (baby bump) -> dùng 'is going to have'."
    },
    {
      id: "t_nf_3",
      contextScenario: "🧗 Cái thang đang rung lắc dữ dội",
      question: "Cảnh báo khẩn cấp: 'Watch out! That wobbly ladder _____!'",
      options: ["is going to collapse", "will collapse", "collapses", "collapsed"],
      answer: "is going to collapse",
      explanation: "Có chứng cứ thang đang rung lắc ngay trước mắt -> 'is going to collapse'."
    },
    {
      id: "t_nf_4",
      contextScenario: "🏠 Kế hoạch sơn lại nhà đã mua sẵn sơn",
      question: "Điền động từ: 'We bought paint cans yesterday. We _____ the living room this weekend.'",
      options: ["are going to paint", "will paint", "paint", "painted"],
      answer: "are going to paint",
      explanation: "Đã mua thùng sơn từ hôm qua nghĩa là đã có kế hoạch từ trước -> 'are going to paint'."
    },
    {
      id: "t_nf_5",
      contextScenario: "🌧️ Bầu trời xám xịt mây giông",
      question: "Chọn câu đúng: 'Look at those menacing dark clouds; it _____ rain heavily.'",
      options: ["is going to", "will", "is", "shall"],
      answer: "is going to",
      explanation: "Bằng chứng thị giác rõ rệt trước mắt -> 'is going to rain'."
    },
    {
      id: "t_nf_6",
      contextScenario: "🚗 Bình xăng cạn kiệt kim chỉ về E",
      question: "Tài xế nhìn đồng hồ xăng và nói: 'The fuel gauge is on empty; the car _____ stop!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Bằng chứng kim xăng về mức E trước mắt -> 'is going to stop'."
    },
    {
      id: "t_nf_7",
      contextScenario: "🎓 Nộp đơn xin học bổng đã chuẩn bị hồ sơ",
      question: "Học sinh kể: 'I have finalized all recommendation letters; I _____ submit the scholarship application tonight.'",
      options: ["am going to", "will", "am", "have"],
      answer: "am going to",
      explanation: "Đã chuẩn bị xong toàn bộ thư giới thiệu -> kế hoạch định sẵn 'am going to submit'."
    },
    {
      id: "t_nf_8",
      contextScenario: "☕ Ly nước đặt mấp mé mép bàn",
      question: "Cảnh báo: 'Move your elbow! The coffee mug _____ tip over!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Cốc cà phê mấp mé sắp đổ -> bằng chứng trước mắt 'is going to tip over'."
    },
    {
      id: "t_nf_9",
      contextScenario: "💼 Kế hoạch từ chức đã nộp đơn",
      question: "Đồng nghiệp tâm sự: 'I handed in my notice yesterday; I _____ leave the firm next month.'",
      options: ["am going to", "will", "am", "shall"],
      answer: "am going to",
      explanation: "Đã nộp đơn thông báo từ chức -> 'am going to leave'."
    },
    {
      id: "t_nf_10",
      contextScenario: "⚽ Tiền đạo đối mặt khung thành trống",
      question: "Bình luận viên thể thao hô lớn: 'The goalkeeper is down! He _____ score!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Thủ môn ngã và khung thành trống -> bằng chứng ghi bàn rõ ràng trước mắt 'is going to score'."
    },
    {
      id: "t_nf_11",
      contextScenario: "🏥 Đặt lịch hẹn khám bệnh",
      question: "Chọn câu đúng: 'I made an appointment yesterday. I _____ see the dentist on Friday.'",
      options: ["am going to", "will", "shall", "am"],
      answer: "am going to",
      explanation: "Đã đặt lịch hẹn từ hôm qua -> 'am going to see'."
    },
    {
      id: "t_nf_12",
      contextScenario: "🏃 Vận động viên hụt hơi sắp ngã",
      question: "Cảnh tượng trước mắt: 'Look at the marathoner swaying; he _____ faint!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Vận động viên loạng choạng sắp ngất -> 'is going to faint'."
    },
    {
      id: "t_nf_13",
      contextScenario: "📱 Đã tiết kiệm đủ tiền mua điện thoại mới",
      question: "Điền vào chỗ trống: 'I have saved up enough funds; I _____ purchase a new laptop this afternoon.'",
      options: ["am going to", "will", "shall", "am"],
      answer: "am going to",
      explanation: "Đã chuẩn bị ngân sách từ trước -> 'am going to purchase'."
    },
    {
      id: "t_nf_14",
      contextScenario: "🌳 Cây nghiêng ngả sắp bật gốc trong giông",
      question: "Cảnh báo người đi đường: 'Stay back! That ancient tree _____ fall!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Cây cổ thụ sắp gãy đổ trước mắt -> 'is going to fall'."
    },
    {
      id: "t_nf_15",
      contextScenario: "🏢 Kế hoạch mở rộng chi nhánh",
      question: "Giám đốc thông báo: 'We signed the lease yesterday. We _____ open a branch in Da Nang.'",
      options: ["are going to", "will", "shall", "are"],
      answer: "are going to",
      explanation: "Đã ký hợp đồng thuê mặt bằng -> 'are going to open'."
    },
    {
      id: "t_nf_16",
      contextScenario: "⏳ Đồng hồ điểm 8:59 và cuộc họp lúc 9:00",
      question: "Chọn câu đúng: 'It is 8:59 AM and we are still in traffic! We _____ be late!'",
      options: ["are going to", "will", "shall", "are"],
      answer: "are going to",
      explanation: "Còn 1 phút mà vẫn kẹt xe -> chắc chắn sắp muộn 'are going to be late'."
    },
    {
      id: "t_nf_17",
      contextScenario: "🍽️ Chuẩn bị nguyên liệu nấu tiệc",
      question: "Mẹ nói: 'I bought beef and carrots. I _____ make beef stew tonight.'",
      options: ["am going to", "will", "shall", "am"],
      answer: "am going to",
      explanation: "Đã mua sẵn thịt bò và cà rốt -> dự định định sẵn 'am going to make'."
    },
    {
      id: "t_nf_18",
      contextScenario: "🚗 Xe chạy quá tốc độ sắp đâm rào chắn",
      question: "Cảnh tượng nguy hiểm: 'He lost control of the steering wheel! The car _____ crash!'",
      options: ["is going to", "will", "shall", "does"],
      answer: "is going to",
      explanation: "Xe mất lái chuẩn bị đâm -> bằng chứng trước mắt 'is going to crash'."
    },
    {
      id: "t_nf_19",
      contextScenario: "💍 Đã mua nhẫn cầu hôn",
      question: "Chàng trai tâm sự: 'I picked up the ring yesterday. I _____ propose to her on our anniversary.'",
      options: ["am going to", "will", "shall", "am"],
      answer: "am going to",
      explanation: "Đã chuẩn bị nhẫn cầu hôn từ trước -> 'am going to propose'."
    },
    {
      id: "t_nf_20",
      contextScenario: "😴 Người bạn ngáp liên tục và mắt díp lại",
      question: "Bạn nhận xét: 'You can barely keep your eyes open. You _____ fall asleep!'",
      options: ["are going to", "will", "shall", "are"],
      answer: "are going to",
      explanation: "Mắt díp lại sắp ngủ gật trước mắt -> 'are going to fall asleep'."
    }
  ],
  "future-continuous": [
    {
      id: "t_fc_1",
      contextScenario: "📅 Lên lịch hẹn với đối tác qua điện thoại",
      question: "Điền vào chỗ trống: 'Please do not call me between 2 PM and 4 PM because I _____ an important client audit.'",
      options: ["conduct", "will conduct", "will be conducting", "have conducted"],
      answer: "will be conducting",
      explanation: "Trong khoảng thời gian từ 2 PM đến 4 PM, hành động kiểm toán đang diễn ra liên tục -> dùng 'will be conducting'."
    },
    {
      id: "t_fc_2",
      contextScenario: "🛫 Thời điểm chính xác trên chuyến bay ngày mai",
      question: "Chọn câu đúng: 'This time tomorrow, I _____ over the Pacific Ocean on flight VN302.'",
      options: ["will be flying", "will fly", "fly", "am flying"],
      answer: "will be flying",
      explanation: "Tại thời điểm chính xác này ngày mai ('This time tomorrow') hành động bay đang diễn ra -> 'will be flying'."
    },
    {
      id: "t_fc_3",
      contextScenario: "💻 Bảo trì máy chủ đêm nay",
      question: "Thông báo IT: 'Tonight at 1:00 AM, our technicians _____ the database servers.'",
      options: ["will be migrating", "migrate", "migrated", "will migrate"],
      answer: "will be migrating",
      explanation: "Tại mốc 1:00 AM đêm nay, quá trình di chuyển cơ sở dữ liệu đang diễn ra -> 'will be migrating'."
    },
    {
      id: "t_fc_4",
      contextScenario: "🤝 Hỏi lịch trình nhã nhặn",
      question: "Hỏi đồng nghiệp mượn máy in: '_____ you _____ the office color printer this afternoon?'",
      options: ["Will / be using", "Do / use", "Did / use", "Are / use"],
      answer: "Will / be using",
      explanation: "Cấu trúc 'Will you be using...?' dùng để hỏi lịch trình người khác một cách nhã nhặn, lịch thiệp."
    },
    {
      id: "t_fc_5",
      contextScenario: "🏖️ Nghỉ dưỡng vào thời điểm tuần sau",
      question: "Chọn câu đúng: 'This time next week, we _____ on a tropical beach in Phu Quoc.'",
      options: ["will be sunbathing", "will sunbathe", "sunbathe", "are sunbathing"],
      answer: "will be sunbathing",
      explanation: "'This time next week' đi kèm hành động đang diễn ra -> 'will be sunbathing'."
    },
    {
      id: "t_fc_6",
      contextScenario: "🎓 Tham dự lễ tốt nghiệp lúc 10 sáng mai",
      question: "Điền động từ: 'Tomorrow at 10 AM, hundreds of graduates _____ their caps in the stadium.'",
      options: ["will be tossing", "will toss", "toss", "tossed"],
      answer: "will be tossing",
      explanation: "Mốc thời gian cụ thể ở tương lai đi kèm hành động đang diễn ra -> 'will be tossing'."
    },
    {
      id: "t_fc_7",
      contextScenario: "🍽️ Bữa tối gia đình lúc 7 giờ tối nay",
      question: "Chọn câu đúng: 'Don't drop by at 7 PM tonight because we _____ dinner with our grandparents.'",
      options: ["will be having", "will have", "have", "had"],
      answer: "will be having",
      explanation: "Tại mốc 7 giờ tối nay hành động dùng bữa đang diễn ra -> 'will be having'."
    },
    {
      id: "t_fc_8",
      contextScenario: "🚗 Di chuyển trên đường cao tốc lúc tan tầm",
      question: "Điền động từ: 'During rush hour tomorrow, thousands of commuters _____ home on this expressway.'",
      options: ["will be driving", "drive", "drove", "will drive"],
      answer: "will be driving",
      explanation: "Trong khung giờ cao điểm ngày mai, việc lái xe đang diễn ra liên tục -> 'will be driving'."
    },
    {
      id: "t_fc_9",
      contextScenario: "🎤 Buổi hòa nhạc trực tiếp lúc 8 giờ",
      question: "Chọn câu đúng: 'At 8:30 tonight, the symphony orchestra _____ Beethoven's Ninth Symphony.'",
      options: ["will be performing", "performed", "performs", "will perform"],
      answer: "will be performing",
      explanation: "Đang biểu diễn tại thời điểm 8:30 tối nay -> 'will be performing'."
    },
    {
      id: "t_fc_10",
      contextScenario: "🏥 Ca trực đêm của y tá",
      question: "Điền động từ: 'Nurse Jennifer _____ the intensive care unit all night tonight.'",
      options: ["will be monitoring", "monitors", "monitored", "will monitor"],
      answer: "will be monitoring",
      explanation: "Theo dõi phòng hồi sức suốt cả đêm nay -> 'will be monitoring'."
    },
    {
      id: "t_fc_11",
      contextScenario: "🏃 Vận động viên tham gia chạy đua",
      question: "Chọn câu đúng: 'At 7 AM on Sunday, the marathon runners _____ across the city center.'",
      options: ["will be sprinting", "sprint", "sprinted", "will sprint"],
      answer: "will be sprinting",
      explanation: "Tại thời điểm 7 giờ sáng Chủ nhật -> 'will be sprinting'."
    },
    {
      id: "t_fc_12",
      contextScenario: "💼 Hỏi lịch làm việc của giám đốc",
      question: "Trợ lý hỏi: 'Will the CEO _____ meetings with the foreign partners all day tomorrow?'",
      options: ["be having", "have", "had", "has"],
      answer: "be having",
      explanation: "Cấu trúc Tương lai tiếp diễn: Will + S + be + V-ing ('be having')."
    },
    {
      id: "t_fc_13",
      contextScenario: "📚 Ôn thi tại thư viện chiều mai",
      question: "Sinh viên nhắn bạn: 'I _____ at the central library from 1 PM to 5 PM tomorrow if you need me.'",
      options: ["will be studying", "will study", "study", "studied"],
      answer: "will be studying",
      explanation: "Trong khoảng thời gian từ 1 PM đến 5 PM mai -> 'will be studying'."
    },
    {
      id: "t_fc_14",
      contextScenario: "🌧️ Dự báo mưa tuyết đêm nay",
      question: "Điền động từ: 'According to the radar, snow _____ heavily across the mountain pass by midnight.'",
      options: ["will be falling", "falls", "fell", "will fall"],
      answer: "will be falling",
      explanation: "Tuyết đang rơi dày đặc vào lúc nửa đêm -> 'will be falling'."
    },
    {
      id: "t_fc_15",
      contextScenario: "🏗️ Thi công đường xá ban đêm",
      question: "Chọn câu đúng: 'The construction workers _____ the asphalt throughout the entire night.'",
      options: ["will be laying", "lay", "laid", "will lay"],
      answer: "will be laying",
      explanation: "Rải nhựa đường liên tục suốt đêm nay -> 'will be laying'."
    },
    {
      id: "t_fc_16",
      contextScenario: "✈️ Chờ đợi người thân hạ cánh",
      question: "Chọn câu đúng: 'When your plane lands, I _____ for you with a welcome sign at Gate A.'",
      options: ["will be waiting", "will wait", "wait", "waited"],
      answer: "will be waiting",
      explanation: "Khi máy bay hạ cánh, người đón sẽ đang đứng đợi sẵn -> 'will be waiting'."
    },
    {
      id: "t_fc_17",
      contextScenario: "💻 Đang chạy chương trình kiểm thử hệ thống",
      question: "Điền động từ: 'The automated scripts _____ security scans while employees are asleep.'",
      options: ["will be running", "run", "ran", "will run"],
      answer: "will be running",
      explanation: "Chương trình tự động quét mã bảo mật trong lúc nhân viên ngủ -> 'will be running'."
    },
    {
      id: "t_fc_18",
      contextScenario: "😴 Ngủ vào lúc nửa đêm",
      question: "Chọn câu đúng: 'Please don't message me after 11 PM; I _____ by then.'",
      options: ["will be sleeping", "sleep", "slept", "will sleep"],
      answer: "will be sleeping",
      explanation: "Lúc đó tôi sẽ đang ngủ say -> 'will be sleeping'."
    },
    {
      id: "t_fc_19",
      contextScenario: "📺 Phát sóng trực tiếp trận chung kết",
      question: "Điền động từ: 'At 8 PM this Sunday, sports channels worldwide _____ the final match live.'",
      options: ["will be broadcasting", "broadcast", "broadcasted", "will broadcast"],
      answer: "will be broadcasting",
      explanation: "Tại mốc 8 giờ tối Chủ nhật các kênh đang phát trực tiếp -> 'will be broadcasting'."
    },
    {
      id: "t_fc_20",
      contextScenario: "🧑‍🍳 Nấu nướng chuẩn bị tiệc tối",
      question: "Mẹ nói: 'When the guests ring the bell, I _____ the main entree.'",
      options: ["will be cooking", "cook", "cooked", "will cook"],
      answer: "will be cooking",
      explanation: "Khi khách bấm chuông, mẹ sẽ đang dở tay nấu món chính -> 'will be cooking'."
    }
  ],
  "future-perfect": [
    {
      id: "t_fp_1",
      contextScenario: "🎓 Kế hoạch lộ trình học tập và thăng tiến sự nghiệp",
      question: "Chọn câu đúng: 'By the time she turns thirty, she _____ her doctoral degree.'",
      options: ["completes", "will complete", "will have completed", "has completed"],
      answer: "will have completed",
      explanation: "Trước mốc thời gian bước sang tuổi 30, bằng tiến sĩ sẽ đã được hoàn tất xong xuôi -> 'will have completed'."
    },
    {
      id: "t_fp_2",
      contextScenario: "🏗️ Tiến độ hoàn thành công trình cầu vượt",
      question: "Chọn câu đúng: 'By next December, the contractors _____ the new suspension bridge.'",
      options: ["will have finished", "will finish", "finished", "have finished"],
      answer: "will have finished",
      explanation: "Trước tháng 12 năm tới ('By next December') công trình sẽ đã hoàn thành -> 'will have finished'."
    },
    {
      id: "t_fp_3",
      contextScenario: "💼 Nộp báo cáo tài chính trước kỳ hạn",
      question: "Kế toán trưởng cam kết: 'We _____ the audit report by the end of this week.'",
      options: ["will have finalized", "will finalize", "finalize", "finalized"],
      answer: "will have finalized",
      explanation: "'By the end of this week' đi kèm Tương lai hoàn thành: 'will have finalized'."
    },
    {
      id: "t_fp_4",
      contextScenario: "✈️ Hạ cánh trước lúc bình minh",
      question: "Điền động từ: 'By sunrise tomorrow, our flight _____ in Paris.'",
      options: ["will have touched down", "will touch down", "touches down", "has touched down"],
      answer: "will have touched down",
      explanation: "Trước lúc mặt trời mọc ngày mai ('By sunrise tomorrow') -> 'will have touched down'."
    },
    {
      id: "t_fp_5",
      contextScenario: "💰 Tiết kiệm đủ tiền mua xe trước năm sau",
      question: "Chọn câu đúng: 'By this time next year, I _____ enough savings for the deposit.'",
      options: ["will have accumulated", "will accumulate", "accumulated", "accumulate"],
      answer: "will have accumulated",
      explanation: "Tích lũy xong trước thời điểm này năm sau -> 'will have accumulated'."
    },
    {
      id: "t_fp_6",
      contextScenario: "📚 Đọc xong toàn bộ giáo trình trước kỳ thi",
      question: "Sinh viên tự tin: 'By the exam date, I _____ all ten course modules.'",
      options: ["will have reviewed", "will review", "reviewed", "review"],
      answer: "will have reviewed",
      explanation: "Hoàn tất việc ôn tập trước ngày thi -> 'will have reviewed'."
    },
    {
      id: "t_fp_7",
      contextScenario: "🏭 Chuyển đổi năng lượng xanh nhà máy",
      question: "Tổng giám đốc tuyên bố: 'By 2030, our plants _____ carbon neutrality.'",
      options: ["will have achieved", "will achieve", "achieved", "achieve"],
      answer: "will have achieved",
      explanation: "Đạt được mục tiêu trung hòa carbon trước năm 2030 -> 'will have achieved'."
    },
    {
      id: "t_fp_8",
      contextScenario: "👥 Khách mời đến sau khi hội trường dọn xong",
      question: "Điền động từ: 'By the time the attendees arrive, staff _____ the seating arrangement.'",
      options: ["will have organized", "will organize", "organized", "organize"],
      answer: "will have organized",
      explanation: "Sau 'By the time + S + V(hiện tại)', mệnh đề chính chia Tương lai hoàn thành: 'will have organized'."
    },
    {
      id: "t_fp_9",
      contextScenario: "💻 Di dời máy chủ trước giờ mở cửa sàn giao dịch",
      question: "Chọn câu đúng: 'Before the stock market opens tomorrow, IT _____ the server upgrade.'",
      options: ["will have completed", "will complete", "completed", "completes"],
      answer: "will have completed",
      explanation: "Trước lúc thị trường mở cửa ngày mai -> 'will have completed'."
    },
    {
      id: "t_fp_10",
      contextScenario: "🏥 Khỏi bệnh trước kỳ nghỉ hè",
      question: "Bác sĩ động viên: 'With this therapy, you _____ completely by July.'",
      options: ["will have recovered", "will recover", "recovered", "recover"],
      answer: "will have recovered",
      explanation: "Hồi phục hoàn toàn trước tháng 7 -> 'will have recovered'."
    },
    {
      id: "t_fp_11",
      contextScenario: "🚗 Xe chạy được mười vạn cây số",
      question: "Điền động từ: 'By next month, our delivery van _____ over 100,000 kilometers.'",
      options: ["will have clocked", "will clock", "clocked", "clocks"],
      answer: "will have clocked",
      explanation: "Cán mốc 100.000 km trước tháng tới -> 'will have clocked'."
    },
    {
      id: "t_fp_12",
      contextScenario: "🍽️ Chuẩn bị xong tiệc trước lúc khách bấm chuông",
      question: "Mẹ nói: 'By the time you get home from school, I _____ dinner.'",
      options: ["will have prepared", "will prepare", "prepared", "prepare"],
      answer: "will have prepared",
      explanation: "Trước lúc con đi học về, bữa tối sẽ đã chuẩn bị xong -> 'will have prepared'."
    },
    {
      id: "t_fp_13",
      contextScenario: "📱 Cài đặt xong bản cập nhật",
      question: "Thông báo máy tính: 'In ten minutes, the installer _____ all system patches.'",
      options: ["will have applied", "will apply", "applied", "applies"],
      answer: "will have applied",
      explanation: "Trong vòng 10 phút nữa, bản vá sẽ được cài đặt hoàn tất -> 'will have applied'."
    },
    {
      id: "t_fp_14",
      contextScenario: "🏃 Vận động viên hoàn thành cự ly marathon",
      question: "Điền động từ: 'By 11 AM, the leading runners _____ the full 42-kilometer course.'",
      options: ["will have covered", "will cover", "covered", "cover"],
      answer: "will have covered",
      explanation: "Trước 11 giờ trưa, các vận động viên dẫn đầu sẽ đã chạy xong toàn bộ cự ly -> 'will have covered'."
    },
    {
      id: "t_fp_15",
      contextScenario: "🏢 Trả xong khoản vay mua văn phòng",
      question: "Chọn câu đúng: 'By 2028, our enterprise _____ our commercial bank loan.'",
      options: ["will have repaid", "will repay", "repaid", "repays"],
      answer: "will have repaid",
      explanation: "Trả hết nợ trước năm 2028 -> 'will have repaid'."
    },
    {
      id: "t_fp_16",
      contextScenario: "📖 Đọc xong cuốn tiểu thuyết",
      question: "Bạn đọc nói: 'By the weekend, I _____ this 500-page historical saga.'",
      options: ["will have finished", "will finish", "finished", "finish"],
      answer: "will have finished",
      explanation: "Trước cuối tuần sẽ đã đọc xong cuốn sách dày 500 trang -> 'will have finished'."
    },
    {
      id: "t_fp_17",
      contextScenario: "✈️ Chuyến tàu rời ga trước khi đến",
      question: "Cảnh báo trễ giờ: 'Hurry up! By the time we arrive at the platform, the express train _____.'",
      options: ["will have departed", "will depart", "departed", "departs"],
      answer: "will have departed",
      explanation: "Nếu không nhanh thì trước lúc tới sân ga tàu sẽ đã chạy mất -> 'will have departed'."
    },
    {
      id: "t_fp_18",
      contextScenario: "💼 Rà soát hợp đồng trước buổi ký kết",
      question: "Luật sư thông báo: 'Before the signing ceremony starts, legal teams _____ every clause.'",
      options: ["will have scrutinized", "will scrutinize", "scrutinized", "scrutinize"],
      answer: "will have scrutinized",
      explanation: "Rà soát kỹ từng điều khoản trước khi lễ ký bắt đầu -> 'will have scrutinized'."
    },
    {
      id: "t_fp_19",
      contextScenario: "🌱 Cây trổ hoa trước mùa xuân",
      question: "Nhà nông học nhận xét: 'By the end of March, all cherry blossoms _____ across the valley.'",
      options: ["will have bloomed", "will bloom", "bloomed", "bloom"],
      answer: "will have bloomed",
      explanation: "Trước cuối tháng 3 hoa sẽ đã nở rộ khắp thung lũng -> 'will have bloomed'."
    },
    {
      id: "t_fp_20",
      contextScenario: "🏆 Đạt mốc triệu người theo dõi",
      question: "Sáng tạo nội dung dự đoán: 'By next week, our educational channel _____ one million subscribers.'",
      options: ["will have surpassed", "will surpass", "surpassed", "surpasses"],
      answer: "will have surpassed",
      explanation: "Trước tuần tới kênh sẽ đã vượt mốc 1 triệu người đăng ký -> 'will have surpassed'."
    }
  ],
  "past-perfect-continuous": [
    {
      id: "t_ppc_1",
      contextScenario: "🌧️ Quan sát mặt đường ướt sau cơn mưa",
      question: "Chọn câu đúng: 'When I stepped outside, the ground was soaked because it _____ for hours.'",
      options: ["had been raining", "rained", "was raining", "has rained"],
      answer: "had been raining",
      explanation: "Hành động mưa diễn ra liên tục kéo dài suốt nhiều giờ trước thời điểm bước ra ngoài trong quá khứ -> 'had been raining'."
    },
    {
      id: "t_ppc_2",
      contextScenario: "😫 Trạng thái kiệt sức sau ca làm",
      question: "Bác sĩ mệt mỏi giải thích: 'Dr. Minh was exhausted because he _____ emergency surgeries non-stop all night.'",
      options: ["had been performing", "performed", "is performing", "has performed"],
      answer: "had been performing",
      explanation: "Nhấn mạnh quá trình phẫu thuật liên tục suốt cả đêm trước khi thấy mệt mỏi trong quá khứ -> 'had been performing'."
    },
    {
      id: "t_ppc_3",
      contextScenario: "⏰ Chờ đợi bạn tại quán cà phê",
      question: "Người bạn nói: 'I _____ for nearly 45 minutes before she finally showed up.'",
      options: ["had been waiting", "waited", "have been waiting", "was waiting"],
      answer: "had been waiting",
      explanation: "Nhấn mạnh khoảng thời gian chờ đợi 45 phút diễn ra liên tục trước khi cô ấy xuất hiện ('showed up')."
    },
    {
      id: "t_ppc_4",
      contextScenario: "💼 Thâm niên làm việc trước khi thăng chức",
      question: "Giám đốc nhân sự kể: 'Before being promoted to CEO, she _____ at the firm for over fifteen years.'",
      options: ["had been working", "worked", "has been working", "was working"],
      answer: "had been working",
      explanation: "Nhấn mạnh quá trình cống hiến liên tục 15 năm trước mốc được thăng chức trong quá khứ -> 'had been working'."
    },
    {
      id: "t_ppc_5",
      contextScenario: "🚘 Động cơ xe bốc khói",
      question: "Thợ máy kiểm tra: 'The engine overheated because the driver _____ at top speed with low coolant.'",
      options: ["had been driving", "drove", "was driving", "has been driving"],
      answer: "had been driving",
      explanation: "Lái xe liên tục ở tốc độ cao dẫn đến kết quả động cơ quá nhiệt trong quá khứ -> 'had been driving'."
    },
    {
      id: "t_ppc_6",
      contextScenario: "🏃 Vận động viên thở dốc sau chặng đua",
      question: "Bình luận viên thể thao: 'Nam was out of breath because he _____ up the steep mountain trail.'",
      options: ["had been running", "ran", "is running", "has been running"],
      answer: "had been running",
      explanation: "Hành động chạy dốc liên tục để lại dấu hiệu thở dốc trong quá khứ -> 'had been running'."
    },
    {
      id: "t_ppc_7",
      contextScenario: "📚 Ôn thi thâu đêm suốt sáng",
      question: "Sinh viên chia sẻ: 'Her eyes were red and watery because she _____ all night for the final exam.'",
      options: ["had been studying", "studied", "was studying", "has studied"],
      answer: "had been studying",
      explanation: "Mắt đỏ do việc thức ôn bài liên tục cả đêm trước đó -> 'had been studying'."
    },
    {
      id: "t_ppc_8",
      contextScenario: "💻 Lỗi máy tính mất dữ liệu chưa lưu",
      question: "Lập trình viên tiếc nuối: 'I _____ on that algorithm code for five hours before the sudden blackout.'",
      options: ["had been coding", "coded", "am coding", "have been coding"],
      answer: "had been coding",
      explanation: "Đang viết mã liên tục trong 5 tiếng trước khi mất điện bất ngờ -> 'had been coding'."
    },
    {
      id: "t_ppc_9",
      contextScenario: "🎸 Luyện tập cho buổi hòa nhạc",
      question: "Nghệ sĩ guitar: 'The rock band _____ together for months before releasing their debut single.'",
      options: ["had been rehearsing", "rehearsed", "have rehearsed", "were rehearsing"],
      answer: "had been rehearsing",
      explanation: "Tập dượt liên tục nhiều tháng trước ngày ra mắt đĩa đơn -> 'had been rehearsing'."
    },
    {
      id: "t_ppc_10",
      contextScenario: "🔎 Điều tra manh mối vụ án",
      question: "Thám tử báo cáo: 'The police _____ the fugitive's digital footprint for weeks before making the arrest.'",
      options: ["had been tracking", "tracked", "are tracking", "have tracked"],
      answer: "had been tracking",
      explanation: "Theo dõi dấu vết số liên tục nhiều tuần trước khi bắt giữ -> 'had been tracking'."
    },
    {
      id: "t_ppc_11",
      contextScenario: "🗣️ Mỏi miệng sau buổi phiên dịch",
      question: "Thông dịch viên: 'My throat was dry because I _____ continuously for three seminar sessions.'",
      options: ["had been interpreting", "interpreted", "am interpreting", "was interpreting"],
      answer: "had been interpreting",
      explanation: "Cổ họng khô vì đã dịch liên tục suốt 3 phiên hội thảo -> 'had been interpreting'."
    },
    {
      id: "t_ppc_12",
      contextScenario: "✈️ Chuyến bay dài liên lục địa",
      question: "Hành khách: 'We _____ for nearly twelve hours before the airplane touched down in London.'",
      options: ["had been flying", "flew", "were flying", "have flown"],
      answer: "had been flying",
      explanation: "Bay liên tục gần 12 tiếng trước khi hạ cánh xuống London -> 'had been flying'."
    },
    {
      id: "t_ppc_13",
      contextScenario: "🎨 Tác phẩm tranh sơn dầu hoàn thiện",
      question: "Họa sĩ kể lại: 'He _____ on that massive oil canvas for two years before exhibiting it.'",
      options: ["had been painting", "painted", "has painted", "was painting"],
      answer: "had been painting",
      explanation: "Nhấn mạnh quá trình vẽ ròng rã suốt 2 năm trước khi triển lãm -> 'had been painting'."
    },
    {
      id: "t_ppc_14",
      contextScenario: "🔍 Tìm kiếm hộ chiếu thất lạc",
      question: "Khách du lịch: 'They _____ for their missing visas for hours until finding them in a jacket pocket.'",
      options: ["had been searching", "searched", "were searching", "have been searching"],
      answer: "had been searching",
      explanation: "Tìm kiếm liên tục suốt nhiều giờ cho tới khi tìm thấy -> 'had been searching'."
    },
    {
      id: "t_ppc_15",
      contextScenario: "🐕 Chú chó lấm lem bùn đất",
      question: "Chủ nuôi giải thích: 'The puppy was covered in mud because it _____ holes in the garden.'",
      options: ["had been digging", "dug", "is digging", "has been digging"],
      answer: "had been digging",
      explanation: "Cún con lấm bùn do liên tục đào hố ngoài vườn trước đó -> 'had been digging'."
    },
    {
      id: "t_ppc_16",
      contextScenario: "💬 Cuộc tranh luận nảy lửa trong phòng họp",
      question: "Thành viên ban quản trị: 'They _____ about budget allocation for two hours before reaching a consensus.'",
      options: ["had been arguing", "argued", "have been arguing", "are arguing"],
      answer: "had been arguing",
      explanation: "Tranh luận liên tục 2 tiếng trước khi đạt đồng thuận -> 'had been arguing'."
    },
    {
      id: "t_ppc_17",
      contextScenario: "🍳 Mùi khét trong căn bếp",
      question: "Bà nội trợ: 'The soup smelled burnt because it _____ on high heat without stirring.'",
      options: ["had been boiling", "boiled", "was boiling", "has boiled"],
      answer: "had been boiling",
      explanation: "Nồi súp sôi liên tục ở nhiệt độ cao dẫn đến mùi khét -> 'had been boiling'."
    },
    {
      id: "t_ppc_18",
      contextScenario: "🏊 Tập bơi chuẩn bị cho Seagames",
      question: "Huấn luyện viên: 'The swimmer _____ fifty laps every morning before the tournament began.'",
      options: ["had been swimming", "swam", "was swimming", "has swum"],
      answer: "had been swimming",
      explanation: "Bơi liên tục 50 vòng mỗi sáng kéo dài suốt giai đoạn trước giải đấu -> 'had been swimming'."
    },
    {
      id: "t_ppc_19",
      contextScenario: "📖 Học ngoại ngữ trước khi đi du học",
      question: "Du học sinh: 'He _____ Japanese diligently for three years before relocating to Tokyo.'",
      options: ["had been learning", "learned", "has been learning", "was learning"],
      answer: "had been learning",
      explanation: "Học tiếng Nhật liên tục, kiên trì trong 3 năm trước khi sang Tokyo -> 'had been learning'."
    },
    {
      id: "t_ppc_20",
      contextScenario: "🌧️ Mưa dột qua mái ngói",
      question: "Chủ nhà: 'Water _____ through the ceiling ceiling tiles for days before the roofer arrived.'",
      options: ["had been leaking", "leaked", "has leaked", "is leaking"],
      answer: "had been leaking",
      explanation: "Nước rỉ liên tục qua mái ngói suốt nhiều ngày trước khi thợ đến sửa -> 'had been leaking'."
    }
  ],
  "future-perfect-continuous": [
    {
      id: "t_fpc_1",
      contextScenario: "💼 Kỷ niệm 10 năm cống hiến tại tập đoàn",
      question: "Điền dạng đúng: 'By this December, Ms. An _____ at the corporation for exactly ten years.'",
      options: ["will have been working", "will work", "will be working", "works"],
      answer: "will have been working",
      explanation: "Tính đến mốc tháng 12 tới, hành động làm việc sẽ kéo dài liên tục tròn 10 năm -> 'will have been working'."
    },
    {
      id: "t_fpc_2",
      contextScenario: "✈️ Chuyến bay đường dài sang Mỹ",
      question: "Phi công thông báo: 'By 8 PM tonight, our crew _____ for fourteen continuous hours.'",
      options: ["will have been flying", "will fly", "will be flying", "have been flying"],
      answer: "will have been flying",
      explanation: "Tính đến 8 giờ tối nay, phi hành đoàn sẽ đã bay liên tục suốt 14 giờ -> 'will have been flying'."
    },
    {
      id: "t_fpc_3",
      contextScenario: "🎓 Quá trình học tập đại học",
      question: "Sinh viên tính toán: 'By the time I graduate next summer, I _____ English for over twelve years.'",
      options: ["will have been studying", "will study", "study", "studied"],
      answer: "will have been studying",
      explanation: "Tính đến mốc tốt nghiệp hè tới, thời gian học tiếng Anh sẽ đã kéo dài liên tục 12 năm -> 'will have been studying'."
    },
    {
      id: "t_fpc_4",
      contextScenario: "🏃 Chạy marathon bền bỉ",
      question: "Vận động viên chia sẻ: 'By noon, the runners _____ in the scorching heat for four hours.'",
      options: ["will have been running", "will run", "will be running", "ran"],
      answer: "will have been running",
      explanation: "Tính đến trưa nay, các chân chạy sẽ đã chạy liên tục dưới nắng gắt suốt 4 tiếng -> 'will have been running'."
    },
    {
      id: "t_fpc_5",
      contextScenario: "🏢 Dự án thi công tòa nhà chọc trời",
      question: "Kỹ sư trưởng: 'Next month, the construction crew _____ on this skyscraper foundation for a whole year.'",
      options: ["will have been working", "will work", "will be working", "worked"],
      answer: "will have been working",
      explanation: "Sang tháng sau, đội ngũ sẽ đã thi công liên tục tròn một năm -> 'will have been working'."
    },
    {
      id: "t_fpc_6",
      contextScenario: "⏰ Chờ đợi ở phòng khám chuyên khoa",
      question: "Bệnh nhân nhìn đồng hồ: 'In ten more minutes, I _____ in this waiting room for two full hours!'",
      options: ["will have been waiting", "will wait", "wait", "am waiting"],
      answer: "will have been waiting",
      explanation: "Thêm 10 phút nữa là tôi sẽ đã ngồi chờ liên tục tròn 2 tiếng -> 'will have been waiting'."
    },
    {
      id: "t_fpc_7",
      contextScenario: "🔬 Thí nghiệm nuôi cấy vi sinh",
      question: "Nhà khoa học ghi chép: 'By next Friday, the bacteria culture _____ in the incubator for three weeks.'",
      options: ["will have been growing", "will grow", "is growing", "grew"],
      answer: "will have been growing",
      explanation: "Tính tới thứ 6 tới, mẫu vi sinh sẽ đã phát triển liên tục trong lồng ấp 3 tuần -> 'will have been growing'."
    },
    {
      id: "t_fpc_8",
      contextScenario: "🚗 Chuyến đi phượt xuyên Việt",
      question: "Tài xế phượt thủ: 'By sunset, we _____ across the coastal highway for eight straight hours.'",
      options: ["will have been driving", "will drive", "drive", "drove"],
      answer: "will have been driving",
      explanation: "Tính tới hoàng hôn, chúng tôi sẽ đã lái xe liên tục 8 tiếng liền -> 'will have been driving'."
    },
    {
      id: "t_fpc_9",
      contextScenario: "🎹 Luyện ngón dương cầm chuẩn bị biểu diễn",
      question: "Nghệ sĩ piano: 'By 5 PM, she _____ the Chopin sonata for five consecutive hours.'",
      options: ["will have been practicing", "will practice", "practices", "practiced"],
      answer: "will have been practicing",
      explanation: "Tính tới 5h chiều, cô ấy sẽ đã luyện tập bản sonata liên tục suốt 5 tiếng -> 'will have been practicing'."
    },
    {
      id: "t_fpc_10",
      contextScenario: "💍 Kỷ niệm ngày cưới vàng",
      question: "Lời chúc mừng: 'By next autumn, my grandparents _____ happily together for half a century.'",
      options: ["will have been living", "will live", "will be living", "live"],
      answer: "will have been living",
      explanation: "Tính đến mùa thu tới, ông bà sẽ đã chung sống hạnh phúc liên tục nửa thế kỷ (50 năm) -> 'will have been living'."
    },
    {
      id: "t_fpc_11",
      contextScenario: "💻 Huấn luyện mô hình AI lớn",
      question: "Kỹ sư AI: 'By tomorrow dawn, the neural network _____ on cluster GPUs for 72 hours.'",
      options: ["will have been training", "will train", "trains", "is training"],
      answer: "will have been training",
      explanation: "Tính đến rạng sáng mai, mạng nơ-ron sẽ đã huấn luyện liên tục trên cụm GPU suốt 72 giờ -> 'will have been training'."
    },
    {
      id: "t_fpc_12",
      contextScenario: "📚 Dịch cuốn bách khoa toàn thư",
      question: "Dịch giả: 'By next spring, the editorial team _____ this encyclopedia for five years.'",
      options: ["will have been translating", "will translate", "translate", "translated"],
      answer: "will have been translating",
      explanation: "Tính đến mùa xuân năm sau, ban biên tập sẽ đã dịch cuốn bách khoa này liên tục 5 năm -> 'will have been translating'."
    },
    {
      id: "t_fpc_13",
      contextScenario: "🏊 Bơi tiếp sức vượt eo biển",
      question: "Ban tổ chức: 'By midday, the relay swimmer _____ non-stop across the icy channel for six hours.'",
      options: ["will have been swimming", "will swim", "swims", "swam"],
      answer: "will have been swimming",
      explanation: "Tính đến giữa trưa, vận động viên sẽ đã bơi liên tục 6 tiếng vượt qua eo biển -> 'will have been swimming'."
    },
    {
      id: "t_fpc_14",
      contextScenario: "🌱 Thử nghiệm giống lúa chịu mặn",
      question: "Viện nông nghiệp: 'By harvest season, farmers _____ this drought-resistant rice variety for six months.'",
      options: ["will have been cultivating", "will cultivate", "cultivate", "cultivated"],
      answer: "will have been cultivating",
      explanation: "Tính đến vụ gặt, nông dân sẽ đã canh tác giống lúa này liên tục suốt 6 tháng -> 'will have been cultivating'."
    },
    {
      id: "t_fpc_15",
      contextScenario: "🗣️ Thuyết trình liên tục tại hội nghị",
      question: "Diễn giả: 'When this keynote finishes at 4 PM, I _____ on stage for nearly three hours.'",
      options: ["will have been speaking", "will speak", "speak", "spoke"],
      answer: "will have been speaking",
      explanation: "Khi bài phát biểu kết thúc lúc 4h, tôi sẽ đã nói liên tục trên sân khấu gần 3 tiếng -> 'will have been speaking'."
    },
    {
      id: "t_fpc_16",
      contextScenario: "🛰️ Vệ tinh quay quanh quỹ đạo trái đất",
      question: "Cơ quan vũ trụ: 'By next month, the weather satellite _____ the globe for ten continuous years.'",
      options: ["will have been orbiting", "will orbit", "orbits", "orbited"],
      answer: "will have been orbiting",
      explanation: "Tính đến tháng tới, vệ tinh thời tiết sẽ đã quay quanh quỹ đạo liên tục tròn 10 năm -> 'will have been orbiting'."
    },
    {
      id: "t_fpc_17",
      contextScenario: "🎬 Quay phim tài liệu vùng hoang dã",
      question: "Đạo diễn: 'By next winter, the documentary crew _____ wildlife in the Arctic for twelve months.'",
      options: ["will have been filming", "will film", "films", "filmed"],
      answer: "will have been filming",
      explanation: "Tính đến mùa đông năm tới, đoàn phim sẽ đã ghi hình động vật hoang dã liên tục 12 tháng -> 'will have been filming'."
    },
    {
      id: "t_fpc_18",
      contextScenario: "🚲 Đạp xe gây quỹ từ thiện xuyên lục địa",
      question: "Tình nguyện viên: 'By next Sunday, we _____ for charity across the country for four straight weeks.'",
      options: ["will have been cycling", "will cycle", "cycle", "cycled"],
      answer: "will have been cycling",
      explanation: "Tính đến chủ nhật tới, chúng tôi sẽ đã đạp xe liên tục 4 tuần liền -> 'will have been cycling'."
    },
    {
      id: "t_fpc_19",
      contextScenario: "✈️ Tích lũy dặm bay cho thẻ kim cương",
      question: "Doanh nhân: 'By the end of this journey, I _____ around the world for a full month.'",
      options: ["will have been traveling", "will travel", "travel", "traveled"],
      answer: "will have been traveling",
      explanation: "Tính đến cuối hành trình này, tôi sẽ đã đi du lịch liên tục tròn 1 tháng -> 'will have been traveling'."
    },
    {
      id: "t_fpc_20",
      contextScenario: "🔋 Pin sạc năng lượng mặt trời liên tục",
      question: "Kỹ thuật viên: 'By 6 PM, the solar battery system _____ power from direct sunlight for eight hours.'",
      options: ["will have been absorbing", "will absorb", "absorbs", "absorbed"],
      answer: "will have been absorbing",
      explanation: "Tính tới 6h chiều, hệ thống pin mặt trời sẽ đã hấp thụ năng lượng liên tục 8 tiếng -> 'will have been absorbing'."
    }
  ]
};
