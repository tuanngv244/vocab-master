export interface QuestionQuizItem {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  type: "choice" | "reorder";
  scrambledWords?: string[];
}

export const questionsPool: Record<string, QuestionQuizItem[]> = {
  "wh-questions": [
    {
      id: "wh_q1",
      question: "Chọn câu hỏi đúng để hỏi về chủ ngữ: 'Ai đã viết cuốn sách này?'",
      options: ["Who did write this book?", "Who wrote this book?", "Who does write this book?", "Whom wrote this book?"],
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
    },
    {
      id: "wh_q4",
      question: "Hỏi về khoảng cách địa lý: '_____ is it from Hanoi to Ha Long Bay?'",
      options: ["How far", "How long", "How much", "How many"],
      answer: "How far",
      explanation: "'How far' dùng để hỏi về khoảng cách địa lý giữa hai địa điểm.",
      type: "choice"
    },
    {
      id: "wh_q5",
      question: "Sắp xếp câu hỏi về lý do vắng mặt:",
      options: ["Why", "were", "you", "absent", "from", "yesterday's", "meeting?"],
      answer: "Why were you absent from yesterday's meeting?",
      explanation: "Why + were + S (you) + absent from yesterday's meeting?",
      type: "reorder",
      scrambledWords: ["absent", "Why", "yesterday's", "you", "meeting?", "were", "from"]
    },
    {
      id: "wh_q6",
      question: "Hỏi về số lượng danh từ không đếm được: '_____ luggage are you bringing on this flight?'",
      options: ["How many", "How much", "How long", "How far"],
      answer: "How much",
      explanation: "'Luggage' (hành lý) là danh từ không đếm được, bắt buộc dùng 'How much'.",
      type: "choice"
    },
    {
      id: "wh_q7",
      question: "Hỏi về số lượng người: '_____ participants attended the workshop?'",
      options: ["How much", "How many", "How often", "How long"],
      answer: "How many",
      explanation: "'Participants' là danh từ đếm được số nhiều, dùng 'How many'.",
      type: "choice"
    },
    {
      id: "wh_q8",
      question: "Chọn câu hỏi đúng: 'Chiếc ô tô này là của ai?'",
      options: ["Whose car is this?", "Who's car is this?", "Who car is this?", "Whom car is this?"],
      answer: "Whose car is this?",
      explanation: "'Whose' là đại từ sở hữu chỉ 'của ai'. 'Who's' là viết tắt của 'Who is' hoặc 'Who has'.",
      type: "choice"
    },
    {
      id: "wh_q9",
      question: "Sắp xếp câu hỏi về thời gian biểu:",
      options: ["What", "time", "does", "the", "train", "to", "Danang", "depart?"],
      answer: "What time does the train to Danang depart?",
      explanation: "What time + does + S (the train to Danang) + depart?",
      type: "reorder",
      scrambledWords: ["the", "What", "depart?", "does", "train", "time", "Danang", "to"]
    },
    {
      id: "wh_q10",
      question: "Phân biệt hỏi tân ngữ: '_____ did you meet at the conference yesterday?'",
      options: ["Whom", "Whose", "Which", "What for"],
      answer: "Whom",
      explanation: "Trong văn phong chuẩn, 'Whom' dùng để hỏi về đối tượng là tân ngữ chịu tác động của hành động gặp (meet).",
      type: "choice"
    },
    {
      id: "wh_q11",
      question: "Hỏi khi có số lượng lựa chọn giới hạn: '_____ hotel did you choose, the Hilton or the Marriott?'",
      options: ["Which", "What", "Where", "How"],
      answer: "Which",
      explanation: "Khi có một nhóm đối tượng cụ thể để lựa chọn (Hilton hay Marriott), dùng 'Which' thay vì 'What'.",
      type: "choice"
    },
    {
      id: "wh_q12",
      question: "Sắp xếp câu hỏi về chủ ngữ gây ra tiếng ồn:",
      options: ["What", "caused", "that", "loud", "explosion", "outside?"],
      answer: "What caused that loud explosion outside?",
      explanation: "Hỏi chủ ngữ: What + V (caused) + O (that loud explosion outside)? Không mượn trợ động từ did.",
      type: "reorder",
      scrambledWords: ["outside?", "What", "loud", "caused", "explosion", "that"]
    },
    {
      id: "wh_q13",
      question: "Hỏi về mục đích: '_____ did you call the technician for?'",
      options: ["What", "Why", "When", "Where"],
      answer: "What",
      explanation: "Cấu trúc 'What... for?' đồng nghĩa với 'Why?' (để làm gì / vì mục đích gì).",
      type: "choice"
    },
    {
      id: "wh_q14",
      question: "Hỏi về ngoại hình: '_____ does your new manager look like?'",
      options: ["What", "How", "Who", "Which"],
      answer: "What",
      explanation: "Cấu trúc 'What does sb look like?' dùng để hỏi về ngoại hình, diện mạo.",
      type: "choice"
    },
    {
      id: "wh_q15",
      question: "Hỏi về tính cách / bản chất: '_____ is your new teammate like?'",
      options: ["What", "How", "Who", "Where"],
      answer: "What",
      explanation: "'What is sb like?' dùng để hỏi về tính cách, tính tình của một người.",
      type: "choice"
    },
    {
      id: "wh_q16",
      question: "Sắp xếp câu hỏi về tần suất luyện tập:",
      options: ["How", "many", "times", "a", "week", "do", "you", "exercise?"],
      answer: "How many times a week do you exercise?",
      explanation: "How many times a week + do + you + exercise?",
      type: "reorder",
      scrambledWords: ["you", "How", "exercise?", "times", "week", "many", "do", "a"]
    },
    {
      id: "wh_q17",
      question: "Hỏi về thời gian bắt đầu trong quá khứ: '_____ did you graduate from medical school?'",
      options: ["When", "How long", "Since when", "Where"],
      answer: "When",
      explanation: "Hỏi về một mốc thời điểm trong quá khứ đi kèm thì Quá khứ đơn dùng 'When did you...'.",
      type: "choice"
    },
    {
      id: "wh_q18",
      question: "Chọn câu hỏi đúng: 'Điều gì đã xảy ra sau cuộc họp?'",
      options: ["What happened after the meeting?", "What did happen after the meeting?", "What was happened after the meeting?", "What did it happen after the meeting?"],
      answer: "What happened after the meeting?",
      explanation: "'What' đóng vai trò là chủ ngữ của hành động xảy ra (happen) -> chia thẳng 'happened'.",
      type: "choice"
    },
    {
      id: "wh_q19",
      question: "Sắp xếp câu hỏi về phương thức liên lạc:",
      options: ["How", "can", "I", "contact", "customer", "support?"],
      answer: "How can I contact customer support?",
      explanation: "How + can + I + contact customer support?",
      type: "reorder",
      scrambledWords: ["support?", "How", "I", "contact", "can", "customer"]
    },
    {
      id: "wh_q20",
      question: "Hỏi về tuổi thọ của thiết bị: '_____ has this server been running without reboot?'",
      options: ["How long", "How much", "How far", "How often"],
      answer: "How long",
      explanation: "'How long' dùng để hỏi về độ dài khoảng thời gian một hành động đã và đang diễn ra.",
      type: "choice"
    }
  ],
  "yes-no-questions": [
    {
      id: "yn_q1",
      question: "Chọn câu hỏi đúng cho thì Quá khứ đơn:",
      options: ["Did she went to the party yesterday?", "Did she go to the party yesterday?", "Does she go to the party yesterday?", "Is she went to the party yesterday?"],
      answer: "Did she go to the party yesterday?",
      explanation: "Trong câu hỏi quá khứ đơn với trợ động từ 'Did', động từ chính 'go' phải ở dạng nguyên thể không 'to'.",
      type: "choice"
    },
    {
      id: "yn_q2",
      question: "Sắp xếp các từ sau thành câu hỏi trải nghiệm:",
      options: ["Have", "you", "ever", "been", "to", "London?"],
      answer: "Have you ever been to London?",
      explanation: "Have + S + ever + V3/ed (been) + to + O?",
      type: "reorder",
      scrambledWords: ["been", "Have", "London?", "to", "ever", "you"]
    },
    {
      id: "yn_q3",
      question: "Chọn trợ động từ thích hợp: '_____ your brother work in the software industry?'",
      options: ["Does", "Do", "Is", "Has"],
      answer: "Does",
      explanation: "Chủ ngữ 'your brother' là ngôi thứ 3 số ít, động từ thường 'work' -> mượn 'Does'.",
      type: "choice"
    },
    {
      id: "yn_q4",
      question: "Câu hỏi với động từ To Be: '_____ all the participants ready for the exam?'",
      options: ["Are", "Do", "Have", "Were"],
      answer: "Are",
      explanation: "Sau chủ ngữ số nhiều 'all the participants' là tính từ 'ready' -> dùng To Be 'Are'.",
      type: "choice"
    },
    {
      id: "yn_q5",
      question: "Sắp xếp câu hỏi với Modal Verb:",
      options: ["Could", "you", "please", "sign", "this", "document?"],
      answer: "Could you please sign this document?",
      explanation: "Could + S (you) + please + sign + this document?",
      type: "reorder",
      scrambledWords: ["please", "Could", "document?", "you", "this", "sign"]
    },
    {
      id: "yn_q6",
      question: "Chọn câu hỏi thì Hiện tại hoàn thành đúng:",
      options: ["Has the shipment arrived at the warehouse yet?", "Did the shipment arrived at the warehouse yet?", "Does the shipment arrive at the warehouse yet?", "Is the shipment arrived at the warehouse yet?"],
      answer: "Has the shipment arrived at the warehouse yet?",
      explanation: "Chủ ngữ số ít 'the shipment' đi với 'Has' + V3/ed 'arrived'.",
      type: "choice"
    },
    {
      id: "yn_q7",
      question: "Câu hỏi thì Quá khứ tiếp diễn: '_____ you sleeping when the earthquake hit?'",
      options: ["Were", "Did", "Was", "Have"],
      answer: "Were",
      explanation: "Chủ ngữ 'you' đi với To Be quá khứ là 'Were', theo sau là 'sleeping'.",
      type: "choice"
    },
    {
      id: "yn_q8",
      question: "Sắp xếp câu hỏi xin phép lịch sự:",
      options: ["May", "I", "borrow", "your", "pen", "for", "a", "moment?"],
      answer: "May I borrow your pen for a moment?",
      explanation: "May + I + borrow your pen for a moment?",
      type: "reorder",
      scrambledWords: ["borrow", "May", "a", "for", "your", "pen", "moment?", "I"]
    },
    {
      id: "yn_q9",
      question: "Chọn câu hỏi đúng: 'Cô ấy có cần nộp bài trước thứ Sáu không?'",
      options: ["Does she need to submit the paper by Friday?", "Does she needs to submit the paper by Friday?", "Needs she submit the paper by Friday?", "Is she need submit the paper by Friday?"],
      answer: "Does she need to submit the paper by Friday?",
      explanation: "Mượn 'Does' thì động từ chính 'need' phải ở dạng nguyên thể không chia thêm 's'.",
      type: "choice"
    },
    {
      id: "yn_q10",
      question: "Câu hỏi với 'used to': '_____ you use to live in Sydney?'",
      options: ["Did", "Were", "Have", "Do"],
      answer: "Did",
      explanation: "Cấu trúc nghi vấn với 'used to' mượn trợ động từ 'Did' + S + use to + V-inf.",
      type: "choice"
    },
    {
      id: "yn_q11",
      question: "Sắp xếp câu hỏi đề nghị giúp đỡ:",
      options: ["Would", "you", "like", "a", "cup", "of", "green", "tea?"],
      answer: "Would you like a cup of green tea?",
      explanation: "Would + you + like + a cup of green tea?",
      type: "reorder",
      scrambledWords: ["tea?", "Would", "cup", "like", "of", "a", "green", "you"]
    },
    {
      id: "yn_q12",
      question: "Chọn câu hỏi thì Tương lai gần đúng:",
      options: ["Are they going to launch the product next month?", "Will they going to launch the product next month?", "Do they going to launch the product next month?", "Are they go to launch the product next month?"],
      answer: "Are they going to launch the product next month?",
      explanation: "Cấu trúc Be going to nghi vấn: Am/Is/Are + S + going to + V-inf?",
      type: "choice"
    },
    {
      id: "yn_q13",
      question: "Câu hỏi bắt buộc: '_____ all visitors wear an identification badge?'",
      options: ["Must", "Do", "Are", "Will"],
      answer: "Must",
      explanation: "'Must' đứng đầu câu diễn tả sự bắt buộc, quy tắc nghiêm ngặt.",
      type: "choice"
    },
    {
      id: "yn_q14",
      question: "Sắp xếp câu hỏi kiểm tra khả năng:",
      options: ["Can", "anyone", "in", "this", "room", "speak", "Japanese?"],
      answer: "Can anyone in this room speak Japanese?",
      explanation: "Can + S (anyone in this room) + speak + Japanese?",
      type: "reorder",
      scrambledWords: ["speak", "Can", "this", "in", "Japanese?", "room", "anyone"]
    },
    {
      id: "yn_q15",
      question: "Chọn câu hỏi đúng: 'Họ đã từng làm việc cùng nhau chưa?'",
      options: ["Have they ever worked together?", "Did they ever worked together?", "Were they ever work together?", "Had they ever work together?"],
      answer: "Have they ever worked together?",
      explanation: "Hỏi về kinh nghiệm trong quá khứ kéo dài đến hiện tại: Have + they + ever + V3/ed (worked).",
      type: "choice"
    },
    {
      id: "yn_q16",
      question: "Chọn câu đúng: 'Hôm qua trời có mưa to không?'",
      options: ["Did it rain heavily yesterday?", "Did it rained heavily yesterday?", "Was it rain heavily yesterday?", "Does it rain heavily yesterday?"],
      answer: "Did it rain heavily yesterday?",
      explanation: "Quá khứ đơn mượn 'Did', động từ chính 'rain' về nguyên thể.",
      type: "choice"
    },
    {
      id: "yn_q17",
      question: "Sắp xếp câu hỏi về sự sẵn sàng:",
      options: ["Is", "everything", "prepared", "for", "the", "board", "presentation?"],
      answer: "Is everything prepared for the board presentation?",
      explanation: "Is + everything + prepared for the board presentation?",
      type: "reorder",
      scrambledWords: ["prepared", "Is", "the", "presentation?", "board", "everything", "for"]
    },
    {
      id: "yn_q18",
      question: "Câu hỏi thì Quá khứ hoàn thành: '_____ the train already departed before you got to the station?'",
      options: ["Had", "Has", "Did", "Was"],
      answer: "Had",
      explanation: "Hành động tàu rời đi xảy ra trước mốc quá khứ 'got to the station' -> dùng 'Had'.",
      type: "choice"
    },
    {
      id: "yn_q19",
      question: "Chọn câu đúng: 'Bạn có thích ăn hải sản không?'",
      options: ["Do you enjoy eating seafood?", "Are you enjoy eating seafood?", "Does you enjoy eating seafood?", "Have you enjoy eating seafood?"],
      answer: "Do you enjoy eating seafood?",
      explanation: "Hiện tại đơn với chủ ngữ 'you' mượn trợ động từ 'Do'.",
      type: "choice"
    },
    {
      id: "yn_q20",
      question: "Sắp xếp câu hỏi xác nhận lịch hẹn:",
      options: ["Are", "we", "still", "meeting", "at", "noon", "today?"],
      answer: "Are we still meeting at noon today?",
      explanation: "Are + we + still + meeting at noon today?",
      type: "reorder",
      scrambledWords: ["meeting", "Are", "today?", "still", "at", "noon", "we"]
    }
  ],
  "tag-questions": [
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
    },
    {
      id: "tag_q4",
      question: "Trường hợp ngoại lệ với 'I am': 'I am responsible for this project, _____?'",
      options: ["aren't I", "am not I", "amn't I", "don't I"],
      answer: "aren't I",
      explanation: "Trong tiếng Anh chuẩn, phủ định của 'I am' ở câu hỏi đuôi bắt buộc là 'aren't I?'.",
      type: "choice"
    },
    {
      id: "tag_q5",
      question: "Đại từ bất định chỉ người: 'Everybody enjoyed the concert last night, _____?'",
      options: ["didn't they", "didn't he", "did they", "weren't they"],
      answer: "didn't they",
      explanation: "'Everybody' quy về đại từ 'they' ở câu hỏi đuôi. Mệnh đề khẳng định quá khứ -> 'didn't they?'.",
      type: "choice"
    },
    {
      id: "tag_q6",
      question: "Từ bán phủ định 'rarely': 'He rarely watches television on weekdays, _____?'",
      options: ["does he", "doesn't he", "is he", "isn't he"],
      answer: "does he",
      explanation: "'Rarely' mang nghĩa phủ định -> phần đuôi phải ở dạng khẳng định 'does he?'.",
      type: "choice"
    },
    {
      id: "tag_q7",
      question: "Sắp xếp câu hỏi đuôi mệnh lệnh:",
      options: ["Open", "the", "window,", "will", "you?"],
      answer: "Open the window, will you?",
      explanation: "Với câu mệnh lệnh sai khiến nhẹ nhàng, phần đuôi chuẩn là 'will you?'.",
      type: "reorder",
      scrambledWords: ["will", "the", "window,", "you?", "Open"]
    },
    {
      id: "tag_q8",
      question: "Câu mệnh lệnh phủ định: 'Don't be late for the client demo, _____?'",
      options: ["will you", "won't you", "do you", "shall you"],
      answer: "will you",
      explanation: "Sau câu mệnh lệnh phủ định 'Don't...', phần đuôi luôn là 'will you?'.",
      type: "choice"
    },
    {
      id: "tag_q9",
      question: "Đại từ bất định chỉ vật: 'Nothing went wrong during the update, _____?'",
      options: ["did it", "didn't it", "did they", "was it"],
      answer: "did it",
      explanation: "'Nothing' mang nghĩa phủ định và quy về đại từ 'it' -> phần đuôi khẳng định 'did it?'.",
      type: "choice"
    },
    {
      id: "tag_q10",
      question: "Cấu trúc với 'used to': 'They used to live in London, _____?'",
      options: ["didn't they", "usedn't they", "don't they", "weren't they"],
      answer: "didn't they",
      explanation: "'Used to' diễn tả thói quen quá khứ, phần đuôi mượn trợ động từ quá khứ 'didn't they?'.",
      type: "choice"
    },
    {
      id: "tag_q11",
      question: "Sắp xếp câu hỏi đuôi với 'hardly':",
      options: ["She", "can", "hardly", "hear", "us,", "can", "she?"],
      answer: "She can hardly hear us, can she?",
      explanation: "'Hardly' mang nghĩa phủ định -> đuôi khẳng định 'can she?'.",
      type: "reorder",
      scrambledWords: ["hear", "can", "hardly", "she?", "She", "us,", "can"]
    },
    {
      id: "tag_q12",
      question: "Mệnh đề với 'There is / There are': 'There were many typos in the draft, _____?'",
      options: ["weren't there", "weren't they", "wasn't there", "didn't there"],
      answer: "weren't there",
      explanation: "Trong cấu trúc có 'There be', phần đuôi giữ nguyên chủ ngữ giả 'there': 'weren't there?'.",
      type: "choice"
    },
    {
      id: "tag_q13",
      question: "Câu phủ định với 'neither': 'Neither of them came to the meeting, _____?'",
      options: ["did they", "didn't they", "did he", "were they"],
      answer: "did they",
      explanation: "'Neither' mang nghĩa phủ định và chỉ người -> đuôi là 'did they?'.",
      type: "choice"
    },
    {
      id: "tag_q14",
      question: "Sắp xếp câu hỏi đuôi thể hoàn thành:",
      options: ["You", "haven't", "seen", "my", "keys,", "have", "you?"],
      answer: "You haven't seen my keys, have you?",
      explanation: "Mệnh đề phủ định 'haven't seen' -> câu hỏi đuôi khẳng định 'have you?'.",
      type: "reorder",
      scrambledWords: ["seen", "haven't", "have", "keys,", "my", "you?", "You"]
    },
    {
      id: "tag_q15",
      question: "Động từ 'have to' (bắt buộc): 'We have to submit the tax documents today, _____?'",
      options: ["don't we", "haven't we", "mustn't we", "aren't we"],
      answer: "don't we",
      explanation: "'Have to' đóng vai trò là động từ thường ở hiện tại đơn -> phần đuôi mượn trợ động từ 'don't we?'.",
      type: "choice"
    },
    {
      id: "tag_q16",
      question: "Mệnh đề chứa 'I think that...': 'I think she will accept the job offer, _____?'",
      options: ["won't she", "don't I", "will she", "do I"],
      answer: "won't she",
      explanation: "Với cụm 'I think that + S + V', câu hỏi đuôi chia theo mệnh đề phụ phía sau ('she will accept' -> 'won't she?').",
      type: "choice"
    },
    {
      id: "tag_q17",
      question: "Mệnh đề 'I don't think that...': 'I don't think he is telling the truth, _____?'",
      options: ["is he", "isn't he", "do I", "does he"],
      answer: "is he",
      explanation: "Ý phủ định đã được chuyển lên 'I don't think' -> phần đuôi chia khẳng định theo mệnh đề sau: 'is he?'.",
      type: "choice"
    },
    {
      id: "tag_q18",
      question: "Sắp xếp câu hỏi đuôi với 'seldom':",
      options: ["He", "seldom", "complains", "about", "work,", "does", "he?"],
      answer: "He seldom complains about work, does he?",
      explanation: "'Seldom' bán phủ định -> phần đuôi khẳng định 'does he?'.",
      type: "reorder",
      scrambledWords: ["work,", "complains", "seldom", "he?", "about", "does", "He"]
    },
    {
      id: "tag_q19",
      question: "Câu cảm thán: 'What a beautiful painting, _____?'",
      options: ["isn't it", "is it", "doesn't it", "wasn't it"],
      answer: "isn't it",
      explanation: "Sau câu cảm thán khen ngợi một sự vật, phần đuôi mặc định là 'isn't it?'.",
      type: "choice"
    },
    {
      id: "tag_q20",
      question: "Chọn phần đuôi: 'Nobody called while I was out, _____?'",
      options: ["did they", "didn't they", "did he", "was it"],
      answer: "did they",
      explanation: "'Nobody' mang nghĩa phủ định và quy về 'they' -> câu hỏi đuôi là 'did they?'.",
      type: "choice"
    }
  ],
  "indirect-questions": [
    {
      id: "ind_q1",
      question: "Chọn câu hỏi gián tiếp đúng của: 'Where does John work?'",
      options: ["Do you know where does John work?", "Do you know where John works?", "Do you know where John work?", "Do you know where works John?"],
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
    },
    {
      id: "ind_q3",
      question: "Chuyển câu: 'What time does the supermarket close?' sang gián tiếp:",
      options: [
        "Do you know what time the supermarket closes?",
        "Do you know what time does the supermarket close?",
        "Do you know what time closes the supermarket?",
        "Do you know what time the supermarket close?"
      ],
      answer: "Do you know what time the supermarket closes?",
      explanation: "Bỏ trợ động từ 'does', động từ chính 'closes' chia theo chủ ngữ số ít.",
      type: "choice"
    },
    {
      id: "ind_q4",
      question: "Chuyển câu hỏi Yes/No: 'Is the manager in her office?' sang gián tiếp:",
      options: [
        "Could you tell me if the manager is in her office?",
        "Could you tell me is the manager in her office?",
        "Could you tell me if is the manager in her office?",
        "Could you tell me whether the manager in her office is?"
      ],
      answer: "Could you tell me if the manager is in her office?",
      explanation: "Với câu Yes/No, thêm liên từ 'if' hoặc 'whether' và đưa động từ To Be 'is' về sau chủ ngữ.",
      type: "choice"
    },
    {
      id: "ind_q5",
      question: "Sắp xếp câu hỏi gián tiếp với 'how much':",
      options: ["Do", "you", "know", "how", "much", "this", "laptop", "costs?"],
      answer: "Do you know how much this laptop costs?",
      explanation: "Do you know + how much + this laptop + costs?",
      type: "reorder",
      scrambledWords: ["laptop", "how", "costs?", "Do", "know", "much", "this", "you"]
    },
    {
      id: "ind_q6",
      question: "Chọn câu đúng: 'Bạn có thể cho tôi biết tại sao chuyến bay bị hoãn không?'",
      options: [
        "Can you explain why the flight was delayed?",
        "Can you explain why was the flight delayed?",
        "Can you explain why did the flight delay?",
        "Can you explain why the flight delay?"
      ],
      answer: "Can you explain why the flight was delayed?",
      explanation: "Không đảo ngữ: 'why the flight was delayed' (S + was delayed).",
      type: "choice"
    },
    {
      id: "ind_q7",
      question: "Hỏi với 'I wonder': 'I wonder _____ the deadline has been extended.'",
      options: ["whether", "that", "weather", "which"],
      answer: "whether",
      explanation: "Sau 'I wonder', dùng 'whether' hoặc 'if' để diễn tả sự băn khoăn về câu hỏi Yes/No.",
      type: "choice"
    },
    {
      id: "ind_q8",
      question: "Sắp xếp câu hỏi gián tiếp với 'when':",
      options: ["Please", "let", "me", "know", "when", "the", "package", "arrives."],
      answer: "Please let me know when the package arrives.",
      explanation: "Please let me know + when + the package + arrives.",
      type: "reorder",
      scrambledWords: ["package", "Please", "know", "let", "arrives.", "when", "the", "me"]
    },
    {
      id: "ind_q9",
      question: "Chuyển câu: 'Did they accept our proposal?' sang gián tiếp:",
      options: [
        "I'd like to know if they accepted our proposal.",
        "I'd like to know if did they accept our proposal.",
        "I'd like to know did they accept our proposal.",
        "I'd like to know if they accept our proposal."
      ],
      answer: "I'd like to know if they accepted our proposal.",
      explanation: "Bỏ 'did', động từ chia ở thì quá khứ 'accepted'.",
      type: "choice"
    },
    {
      id: "ind_q10",
      question: "Chọn câu hỏi gián tiếp đúng: 'Ai phụ trách khu vực này?'",
      options: [
        "Could you tell me who is in charge of this area?",
        "Could you tell me who in charge is of this area?",
        "Could you tell me is who in charge of this area?",
        "Could you tell who is in charge of this area?"
      ],
      answer: "Could you tell me who is in charge of this area?",
      explanation: "Vì 'who' vừa là từ để hỏi vừa là chủ ngữ của mệnh đề, trật tự giữ nguyên 'who is in charge...'.",
      type: "choice"
    },
    {
      id: "ind_q11",
      question: "Sắp xếp câu hỏi gián tiếp với 'how':",
      options: ["Could", "you", "show", "me", "how", "this", "machine", "works?"],
      answer: "Could you show me how this machine works?",
      explanation: "Could you show me + how + this machine + works?",
      type: "reorder",
      scrambledWords: ["machine", "works?", "Could", "how", "me", "show", "this", "you"]
    },
    {
      id: "ind_q12",
      question: "Chuyển câu: 'Where did you buy that suit?' sang gián tiếp:",
      options: [
        "Would you mind telling me where you bought that suit?",
        "Would you mind telling me where did you buy that suit?",
        "Would you mind telling me where you buy that suit?",
        "Would you mind to tell me where you bought that suit?"
      ],
      answer: "Would you mind telling me where you bought that suit?",
      explanation: "Sau 'mind' là V-ing ('telling me'), mệnh đề sau không đảo ngữ: 'where you bought that suit'.",
      type: "choice"
    },
    {
      id: "ind_q13",
      question: "Điền liên từ phù hợp: 'Do you have any idea _____ or not the director has signed the contract?'",
      options: ["whether", "if", "that", "what"],
      answer: "whether",
      explanation: "Khi đi liền kề với cụm 'or not' ('whether or not'), chỉ dùng 'whether', không dùng 'if'.",
      type: "choice"
    },
    {
      id: "ind_q14",
      question: "Sắp xếp câu hỏi gián tiếp về mốc thời gian:",
      options: ["Do", "you", "know", "when", "the", "next", "bus", "comes?"],
      answer: "Do you know when the next bus comes?",
      explanation: "Do you know + when + the next bus + comes?",
      type: "reorder",
      scrambledWords: ["comes?", "when", "bus", "Do", "the", "know", "next", "you"]
    },
    {
      id: "ind_q15",
      question: "Chuyển câu: 'Whose jacket is this?' sang gián tiếp:",
      options: [
        "Can you tell me whose jacket this is?",
        "Can you tell me whose jacket is this?",
        "Can you tell me who jacket this is?",
        "Can you tell me whose this jacket is?"
      ],
      answer: "Can you tell me whose jacket this is?",
      explanation: "Cụm 'whose jacket' đứng đầu mệnh đề, tiếp theo là chủ ngữ 'this' + động từ 'is'.",
      type: "choice"
    },
    {
      id: "ind_q16",
      question: "Chọn câu đúng: 'Tôi muốn biết cuộc họp diễn ra trong bao lâu.'",
      options: [
        "I'd like to know how long the meeting will last.",
        "I'd like to know how long will the meeting last.",
        "I'd like to know how long does the meeting last.",
        "I'd like to know how long the meeting last."
      ],
      answer: "I'd like to know how long the meeting will last.",
      explanation: "Không đảo trợ động từ 'will' lên trước chủ ngữ 'the meeting'.",
      type: "choice"
    },
    {
      id: "ind_q17",
      question: "Sắp xếp câu hỏi gián tiếp về địa chỉ:",
      options: ["Could", "you", "clarify", "where", "the", "event", "takes", "place?"],
      answer: "Could you clarify where the event takes place?",
      explanation: "Could you clarify + where + the event + takes place?",
      type: "reorder",
      scrambledWords: ["clarify", "Could", "event", "place?", "the", "where", "you", "takes"]
    },
    {
      id: "ind_q18",
      question: "Chuyển câu: 'How much did the ticket cost?' sang gián tiếp:",
      options: [
        "I can't remember how much the ticket cost.",
        "I can't remember how much did the ticket cost.",
        "I can't remember how much the ticket costs.",
        "I can't remember how much cost the ticket."
      ],
      answer: "I can't remember how much the ticket cost.",
      explanation: "Động từ 'cost' ở dạng quá khứ giữ nguyên hình thức (cost - cost - cost).",
      type: "choice"
    },
    {
      id: "ind_q19",
      question: "Chọn câu đúng: 'Bạn có biết phòng vệ sinh ở đâu không?'",
      options: [
        "Do you know where the restroom is?",
        "Do you know where is the restroom?",
        "Do you know where the restroom be?",
        "Do you know is where the restroom?"
      ],
      answer: "Do you know where the restroom is?",
      explanation: "To Be 'is' phải chuyển về sau danh từ 'the restroom'.",
      type: "choice"
    },
    {
      id: "ind_q20",
      question: "Sắp xếp câu hỏi gián tiếp về người phụ trách:",
      options: ["Do", "you", "happen", "to", "know", "who", "authorized", "this", "payment?"],
      answer: "Do you happen to know who authorized this payment?",
      explanation: "Do you happen to know + who + authorized + this payment?",
      type: "reorder",
      scrambledWords: ["payment?", "who", "authorized", "know", "happen", "Do", "you", "to", "this"]
    }
  ],
  "choice-questions": [
    {
      id: "ch_q1",
      question: "Cách trả lời nào KHÔNG phù hợp cho câu hỏi: 'Do you want to study tonight or tomorrow morning?'",
      options: ["I'd rather study tonight.", "Tomorrow morning works better for me.", "Yes, I do.", "Either time is good for me."],
      answer: "Yes, I do.",
      explanation: "Câu hỏi lựa chọn giữa hai thời điểm thì không thể trả lời đơn thuần là 'Yes, I do'.",
      type: "choice"
    },
    {
      id: "ch_q2",
      question: "Sắp xếp câu hỏi lựa chọn đồ uống:",
      options: ["Would", "you", "prefer", "hot", "tea", "or", "iced", "coffee?"],
      answer: "Would you prefer hot tea or iced coffee?",
      explanation: "Would you prefer + option A + or + option B?",
      type: "reorder",
      scrambledWords: ["tea", "iced", "coffee?", "Would", "or", "prefer", "hot", "you"]
    },
    {
      id: "ch_q3",
      question: "Hỏi về phương thức di chuyển: 'Are we taking a taxi or _____ the subway?'",
      options: ["riding", "ride", "to ride", "rode"],
      answer: "riding",
      explanation: "Cấu trúc song hành với 'taking': 'taking a taxi OR riding the subway'.",
      type: "choice"
    },
    {
      id: "ch_q4",
      question: "Ngữ điệu trong câu hỏi lựa chọn: 'Do you want soup or salad?'",
      options: [
        "Lên giọng ở 'soup', hạ giọng ở 'salad'",
        "Hạ giọng ở cả hai từ",
        "Lên giọng ở cả hai từ",
        "Hạ giọng ở 'soup', lên giọng ở 'salad'"
      ],
      answer: "Lên giọng ở 'soup', hạ giọng ở 'salad'",
      explanation: "Quy tắc ngữ điệu của câu hỏi lựa chọn: Lên giọng ở lựa chọn trước và Hạ giọng ở lựa chọn chốt cuối cùng.",
      type: "choice"
    },
    {
      id: "ch_q5",
      question: "Sắp xếp câu hỏi lựa chọn thanh toán:",
      options: ["Will", "you", "pay", "by", "cash", "or", "credit", "card?"],
      answer: "Will you pay by cash or credit card?",
      explanation: "Will you pay + by cash + or + credit card?",
      type: "reorder",
      scrambledWords: ["card?", "cash", "Will", "credit", "you", "pay", "or", "by"]
    },
    {
      id: "ch_q6",
      question: "Cách trả lời từ chối cả hai phương án: 'Tea or coffee?'",
      options: ["Neither, thanks. Just water.", "Both, please.", "Yes, please.", "No, I don't."],
      answer: "Neither, thanks. Just water.",
      explanation: "'Neither' (không chọn cái nào trong hai) là cách trả lời tự nhiên và chuẩn xác.",
      type: "choice"
    },
    {
      id: "ch_q7",
      question: "Hỏi chọn lựa với 'Which': '_____ format would you prefer the report in, PDF or Word?'",
      options: ["Which", "What", "How", "Where"],
      answer: "Which",
      explanation: "Khi có các lựa chọn rõ ràng được liệt kê (PDF hay Word), dùng 'Which'.",
      type: "choice"
    },
    {
      id: "ch_q8",
      question: "Sắp xếp câu hỏi lựa chọn thời gian:",
      options: ["Is", "the", "meeting", "scheduled", "for", "Monday", "or", "Tuesday?"],
      answer: "Is the meeting scheduled for Monday or Tuesday?",
      explanation: "Is the meeting scheduled for Monday or Tuesday?",
      type: "reorder",
      scrambledWords: ["for", "Monday", "meeting", "Is", "or", "Tuesday?", "scheduled", "the"]
    },
    {
      id: "ch_q9",
      question: "Chọn câu hỏi lựa chọn đúng: 'Chúng ta nên rẽ trái hay rẽ phải?'",
      options: [
        "Should we turn left or right at the traffic lights?",
        "Should we turn left and right at the traffic lights?",
        "Do we turn left nor right at the traffic lights?",
        "Should we turning left or right at the traffic lights?"
      ],
      answer: "Should we turn left or right at the traffic lights?",
      explanation: "Liên từ lựa chọn chuẩn là 'or'.",
      type: "choice"
    },
    {
      id: "ch_q10",
      question: "Cách trả lời chấp nhận cả hai phương án: 'Do you want chicken or fish?'",
      options: ["Either is fine with me.", "Yes, I want.", "No, thank you.", "I don't think."],
      answer: "Either is fine with me.",
      explanation: "'Either is fine with me' (Cái nào cũng được) là câu trả lời giao tiếp rất phổ biến.",
      type: "choice"
    },
    {
      id: "ch_q11",
      question: "Sắp xếp câu hỏi lựa chọn công việc:",
      options: ["Do", "you", "prefer", "working", "remotely", "or", "in", "the", "office?"],
      answer: "Do you prefer working remotely or in the office?",
      explanation: "Do you prefer working remotely or in the office?",
      type: "reorder",
      scrambledWords: ["in", "office?", "remotely", "prefer", "the", "working", "Do", "you", "or"]
    },
    {
      id: "ch_q12",
      question: "Điền liên từ phù hợp: 'Did you leave your umbrella on the train _____ at the office?'",
      options: ["or", "nor", "and", "but"],
      answer: "or",
      explanation: "Đưa ra hai địa điểm để lựa chọn và xác định -> dùng 'or'.",
      type: "choice"
    },
    {
      id: "ch_q13",
      question: "Chọn câu hỏi lựa chọn đúng tại nhà hàng:",
      options: [
        "Would you like sparkling or still water?",
        "Would you like sparkling and still water?",
        "Do you like sparkling nor still water?",
        "Would you like sparkling or still waters?"
      ],
      answer: "Would you like sparkling or still water?",
      explanation: "Hỏi lựa chọn giữa nước có ga (sparkling) và nước khoáng thường (still water).",
      type: "choice"
    },
    {
      id: "ch_q14",
      question: "Sắp xếp câu hỏi lựa chọn ghế máy bay:",
      options: ["Would", "you", "like", "an", "aisle", "seat", "or", "a", "window", "seat?"],
      answer: "Would you like an aisle seat or a window seat?",
      explanation: "Would you like an aisle seat or a window seat?",
      type: "reorder",
      scrambledWords: ["seat", "a", "an", "window", "seat?", "Would", "you", "like", "aisle", "or"]
    },
    {
      id: "ch_q15",
      question: "Hỏi lựa chọn người chịu trách nhiệm: 'Is Sarah _____ Tom heading the marketing campaign?'",
      options: ["or", "nor", "and", "with"],
      answer: "or",
      explanation: "Hỏi xem trong hai người (Sarah hay Tom) ai là người dẫn đầu.",
      type: "choice"
    },
    {
      id: "ch_q16",
      question: "Chọn câu hỏi lựa chọn đúng thì quá khứ:",
      options: [
        "Did you travel by bus or by train?",
        "Did you traveled by bus or by train?",
        "Were you travel by bus or by train?",
        "Did you traveling by bus or by train?"
      ],
      answer: "Did you travel by bus or by train?",
      explanation: "Mượn 'Did', động từ chính 'travel' ở dạng nguyên thể.",
      type: "choice"
    },
    {
      id: "ch_q17",
      question: "Sắp xếp câu hỏi lựa chọn gói dịch vụ:",
      options: ["Are", "you", "subscribing", "to", "the", "monthly", "or", "annual", "plan?"],
      answer: "Are you subscribing to the monthly or annual plan?",
      explanation: "Are you subscribing to the monthly or annual plan?",
      type: "reorder",
      scrambledWords: ["annual", "subscribing", "the", "monthly", "to", "plan?", "Are", "or", "you"]
    },
    {
      id: "ch_q18",
      question: "Hỏi lựa chọn với 3 phương án: 'Do you want tea, coffee, _____ juice?'",
      options: ["or", "and", "nor", "with"],
      answer: "or",
      explanation: "Trong chuỗi lựa chọn nhiều món, từ 'or' được đặt trước lựa chọn cuối cùng.",
      type: "choice"
    },
    {
      id: "ch_q19",
      question: "Chọn cách trả lời khi muốn cả hai phương án: 'Would you like red or white wine?'",
      options: ["Both sound great, let's start with white.", "Yes, I would.", "No, thanks.", "Either is no."],
      answer: "Both sound great, let's start with white.",
      explanation: "'Both sound great' biểu thị sự đồng ý với cả hai lựa chọn.",
      type: "choice"
    },
    {
      id: "ch_q20",
      question: "Sắp xếp câu hỏi lựa chọn hình thức thi cử:",
      options: ["Is", "the", "final", "test", "multiple-choice", "or", "essay-based?"],
      answer: "Is the final test multiple-choice or essay-based?",
      explanation: "Is the final test multiple-choice or essay-based?",
      type: "reorder",
      scrambledWords: ["multiple-choice", "final", "the", "essay-based?", "Is", "test", "or"]
    }
  ],
  "negative-questions": [
    {
      id: "neg_q1",
      question: "Ai đó hỏi bạn: 'Haven't you eaten lunch yet?' và thực tế bạn CHƯA ăn. Bạn trả lời thế nào?",
      options: ["Yes, I haven't.", "No, I haven't.", "Yes, I have.", "No, I have."],
      answer: "No, I haven't.",
      explanation: "Trong tiếng Anh, nếu hành động chưa diễn ra thì câu trả lời luôn là 'No, I haven't', không bị phụ thuộc vào câu hỏi phủ định.",
      type: "choice"
    },
    {
      id: "neg_q2",
      question: "Sắp xếp câu hỏi phủ định bày tỏ ngạc nhiên:",
      options: ["Aren't", "you", "coming", "to", "the", "party", "tonight?"],
      answer: "Aren't you coming to the party tonight?",
      explanation: "Aren't + you + coming to the party tonight?",
      type: "reorder",
      scrambledWords: ["the", "coming", "Aren't", "tonight?", "to", "you", "party"]
    },
    {
      id: "neg_q3",
      question: "Nhắc nhở nhẹ nhàng: '_____ you remember our appointment at 3 PM?'",
      options: ["Don't", "Aren't", "Haven't", "Isn't"],
      answer: "Don't",
      explanation: "Động từ thường 'remember' mượn trợ động từ phủ định 'Don't you remember?'.",
      type: "choice"
    },
    {
      id: "neg_q4",
      question: "Hỏi bày tỏ ngạc nhiên về sự kiện đã diễn ra: '_____ you see the news about the merger?'",
      options: ["Didn't", "Don't", "Aren't", "Haven't"],
      answer: "Didn't",
      explanation: "Hỏi về hành động trong quá khứ: 'Didn't you see...?'.",
      type: "choice"
    },
    {
      id: "neg_q5",
      question: "Sắp xếp câu hỏi phủ định đề xuất ý kiến:",
      options: ["Wouldn't", "it", "be", "better", "to", "leave", "early?"],
      answer: "Wouldn't it be better to leave early?",
      explanation: "Wouldn't it be better + to leave early?",
      type: "reorder",
      scrambledWords: ["leave", "better", "Wouldn't", "early?", "be", "to", "it"]
    },
    {
      id: "neg_q6",
      question: "Ai đó hỏi: 'Don't you like spicy food?' và thực tế bạn CÓ THÍCH. Bạn trả lời thế nào?",
      options: ["Yes, I do.", "No, I don't.", "Yes, I don't.", "No, I do."],
      answer: "Yes, I do.",
      explanation: "Sự thật là bạn có thích ăn cay -> luôn trả lời 'Yes, I do' (bất kể câu hỏi ở dạng phủ định hay khẳng định).",
      type: "choice"
    },
    {
      id: "neg_q7",
      question: "Chọn câu hỏi phủ định đúng: 'Chẳng phải anh ấy là bác sĩ phẫu thuật sao?'",
      options: [
        "Isn't he a surgeon?",
        "Doesn't he a surgeon?",
        "Hasn't he a surgeon?",
        "Aren't he a surgeon?"
      ],
      answer: "Isn't he a surgeon?",
      explanation: "Chủ ngữ 'he' đi với To Be phủ định là 'Isn't he...'.",
      type: "choice"
    },
    {
      id: "neg_q8",
      question: "Sắp xếp câu hỏi phủ định xác nhận nhận thư:",
      options: ["Haven't", "you", "received", "my", "email", "yet?"],
      answer: "Haven't you received my email yet?",
      explanation: "Haven't + you + received my email yet?",
      type: "reorder",
      scrambledWords: ["received", "Haven't", "yet?", "email", "you", "my"]
    },
    {
      id: "neg_q9",
      question: "Hỏi về khả năng: '_____ you read the sign on the door?'",
      options: ["Can't", "Don't", "Aren't", "Haven't"],
      answer: "Can't",
      explanation: "'Can't you read...?' dùng để diễn tả sự bức xúc hoặc ngạc nhiên khi ai đó không đọc biển báo.",
      type: "choice"
    },
    {
      id: "neg_q10",
      question: "Chọn câu hỏi phủ định mang tính mời mọc thân mật:",
      options: [
        "Won't you stay for dinner with us?",
        "Don't you stay for dinner with us?",
        "Aren't you stay for dinner with us?",
        "Didn't you stay for dinner with us?"
      ],
      answer: "Won't you stay for dinner with us?",
      explanation: "Cấu trúc 'Won't you + V-inf...?' là lời mời mọc rất lịch sự và nồng hậu.",
      type: "choice"
    },
    {
      id: "neg_q11",
      question: "Sắp xếp câu hỏi phủ định diễn tả sự ngạc nhiên:",
      options: ["Didn't", "I", "warn", "you", "about", "this", "risk?"],
      answer: "Didn't I warn you about this risk?",
      explanation: "Didn't I warn you about this risk?",
      type: "reorder",
      scrambledWords: ["this", "warn", "risk?", "you", "Didn't", "about", "I"]
    },
    {
      id: "neg_q12",
      question: "Chọn câu đúng: 'Chẳng phải hôm nay là sinh nhật của bạn sao?'",
      options: [
        "Isn't today your birthday?",
        "Doesn't today your birthday?",
        "Hasn't today your birthday?",
        "Aren't today your birthday?"
      ],
      answer: "Isn't today your birthday?",
      explanation: "To Be phủ định: 'Isn't today your birthday?'.",
      type: "choice"
    },
    {
      id: "neg_q13",
      question: "Thắc mắc về sự vắng mặt: '_____ there supposed to be a conference today?'",
      options: ["Wasn't", "Didn't", "Hasn't", "Doesn't"],
      answer: "Wasn't",
      explanation: "Cấu trúc 'Wasn't there supposed to be...?' (Chẳng phải đáng lẽ có hội nghị hôm nay sao?).",
      type: "choice"
    },
    {
      id: "neg_q14",
      question: "Sắp xếp câu hỏi phủ định về cảm giác:",
      options: ["Don't", "you", "feel", "proud", "of", "your", "achievement?"],
      answer: "Don't you feel proud of your achievement?",
      explanation: "Don't you feel proud of your achievement?",
      type: "reorder",
      scrambledWords: ["feel", "your", "Don't", "proud", "achievement?", "of", "you"]
    },
    {
      id: "neg_q15",
      question: "Hỏi xác nhận: 'Aren't you cold without a jacket?' — Bạn thực sự CẢM THẤY LẠNH. Bạn đáp:",
      options: ["Yes, I am freezing!", "No, I am cold.", "Yes, I am not.", "No, I am."],
      answer: "Yes, I am freezing!",
      explanation: "Bạn đang lạnh thì trả lời 'Yes, I am (freezing)'.",
      type: "choice"
    },
    {
      id: "neg_q16",
      question: "Chọn câu hỏi phủ định lịch sự: 'Chẳng phải chúng ta nên kiểm tra lại tài liệu trước khi gửi sao?'",
      options: [
        "Shouldn't we double-check the document before sending?",
        "Don't we should double-check the document before sending?",
        "Haven't we double-check the document before sending?",
        "Aren't we double-check the document before sending?"
      ],
      answer: "Shouldn't we double-check the document before sending?",
      explanation: "Động từ khiếm khuyết 'Shouldn't we + V-inf...?' dùng để đưa ra lời đề xuất thận trọng.",
      type: "choice"
    },
    {
      id: "neg_q17",
      question: "Sắp xếp câu hỏi phủ định nhắc nhở trách nhiệm:",
      options: ["Haven't", "we", "already", "discussed", "this", "matter", "before?"],
      answer: "Haven't we already discussed this matter before?",
      explanation: "Haven't we already discussed this matter before?",
      type: "reorder",
      scrambledWords: ["matter", "already", "discussed", "Haven't", "we", "before?", "this"]
    },
    {
      id: "neg_q18",
      question: "Ngạc nhiên trước sự hiểu biết: '_____ you know that Paris is the capital of France?'",
      options: ["Don't", "Aren't", "Haven't", "Isn't"],
      answer: "Don't",
      explanation: "Hiện tại đơn với động từ 'know': 'Don't you know...?'.",
      type: "choice"
    },
    {
      id: "neg_q19",
      question: "Chọn câu hỏi đúng: 'Chẳng phải họ đã mua vé máy bay rồi sao?'",
      options: [
        "Haven't they already bought the flight tickets?",
        "Didn't they already bought the flight tickets?",
        "Aren't they already bought the flight tickets?",
        "Don't they already bought the flight tickets?"
      ],
      answer: "Haven't they already bought the flight tickets?",
      explanation: "Hiện tại hoàn thành: 'Haven't they already bought...'.",
      type: "choice"
    },
    {
      id: "neg_q20",
      question: "Sắp xếp câu hỏi phủ định về kỳ vọng:",
      options: ["Didn't", "you", "expect", "such", "an", "overwhelming", "response?"],
      answer: "Didn't you expect such an overwhelming response?",
      explanation: "Didn't you expect such an overwhelming response?",
      type: "reorder",
      scrambledWords: ["expect", "response?", "Didn't", "overwhelming", "such", "you", "an"]
    }
  ]
};
