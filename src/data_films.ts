import { FilmEpisode, FilmTimestamp, filmEpisodesMap } from "./data_film_episodes";

export type { FilmEpisode, FilmTimestamp };

export interface FilmVocabulary {
  word: string;
  phonetic: string;
  meaningVi: string;
  exampleSentence: string;
  exampleVi: string;
}

export interface FilmQuote {
  en: string;
  vi: string;
  character: string;
  timestampOrScene?: string;
  explanationVi: string;
}

export interface FilmQuizQuestion {
  id: string;
  dialogueContext: string;
  question: string;
  options: string[];
  answer: string;
  explanationVi: string;
}

export interface FilmItem {
  id: string;
  title: string;
  titleVi: string;
  type: "animation" | "live_action";
  level: "A1-A2" | "B1-B2" | "C1-C2";
  levelLabel: string;
  year: number;
  genre: string[];
  accent: "Anh - Mỹ (US)" | "Anh - Anh (UK)" | "Quốc tế (Global)";
  rating: string;
  durationOrSeasons: string;
  bannerGradient: string;
  icon: string;
  tagline: string;
  summaryVi: string;
  whyLearn: string;
  watchingTip: string;
  keyVocabularies: FilmVocabulary[];
  iconicQuotes: FilmQuote[];
  quiz: FilmQuizQuestion[];
  episodes: FilmEpisode[];
}

const rawFilmsData: Omit<FilmItem, "episodes">[] = [
  // ==========================================
  // LEVEL A1-A2: CƠ BẢN / NHẬP MÔN
  // ==========================================
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    titleVi: "Đi Tìm Nemo",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản (Beginner)",
    year: 2003,
    genre: ["Hoạt hình", "Phiêu lưu", "Gia đình"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 8.2/10 (IMDb)",
    durationOrSeasons: "1 giờ 40 phút",
    bannerGradient: "from-sky-500 to-blue-700",
    icon: "🐠",
    tagline: "Just keep swimming, just keep swimming!",
    summaryVi: "Hành trình vượt đại dương của chú cá hề Marlin cùng người bạn hay quên Dory để tìm lại cậu con trai Nemo bị thợ lặn bắt đến Sydney.",
    whyLearn: "Câu thoại ngắn, từ vựng gắn liền với chỉ đường, gia đình, tình bạn và các loài sinh vật biển. Tốc độ nói của nhân vật Dory và Marlin rất rõ tiếng, cực kỳ phù hợp cho người mới bắt đầu luyện phản xạ nghe.",
    watchingTip: "Hãy nhại lại câu thần chú kinh điển 'Just keep swimming!' với các ngữ điệu vui buồn khác nhau để luyện ngữ điệu (intonation).",
    keyVocabularies: [
      {
        word: "Keep swimming",
        phonetic: "/kiːp ˈswɪmɪŋ/",
        meaningVi: "Cứ tiếp tục bơi đi / Đừng bỏ cuộc",
        exampleSentence: "When life gets tough, just keep swimming.",
        exampleVi: "Khi cuộc sống trở nên khó khăn, cứ tiếp tục tiến lên phía trước."
      },
      {
        word: "Scared",
        phonetic: "/skeəd/",
        meaningVi: "Sợ hãi, lo lắng",
        exampleSentence: "I promise I will never let anything happen to you.",
        exampleVi: "Bố hứa sẽ không để bất cứ điều gì xảy ra với con."
      },
      {
        word: "Anemone",
        phonetic: "/əˈneməni/",
        meaningVi: "Hải quỳ (nơi cá hề trú ngụ)",
        exampleSentence: "With fronds like these, who needs anemones?",
        exampleVi: "Với những chiếc xúc tu như thế này, ai cần kẻ thù chứ? (chơi chữ enemy - anemone)"
      },
      {
        word: "Memory loss",
        phonetic: "/ˈmeməri lɒs/",
        meaningVi: "Mất trí nhớ, hay quên",
        exampleSentence: "I suffer from short-term memory loss.",
        exampleVi: "Tôi bị chứng mất trí nhớ ngắn hạn."
      }
    ],
    iconicQuotes: [
      {
        character: "Dory",
        en: "When life gets you down, you know what you gotta do? Just keep swimming!",
        vi: "Khi cuộc đời làm bạn chán nản, bạn biết phải làm gì không? Cứ tiếp tục bơi đi!",
        explanationVi: "Câu nói truyền cảm hứng nổi tiếng nhất phim. Chú ý cấu trúc nói tắt 'gotta do' = 'got to do' trong văn nói giao tiếp tự nhiên."
      },
      {
        character: "Marlin",
        en: "I promised him nothing would happen to him.",
        vi: "Bố đã hứa với nó rằng sẽ không có chuyện gì xảy ra cả.",
        explanationVi: "Ôn lại câu gián tiếp lùi thì trong quá khứ: will -> would."
      }
    ],
    quiz: [
      {
        id: "fn_1",
        dialogueContext: "Dory hát để động viên Marlin khi anh ấy muốn bỏ cuộc giữa biển khơi:",
        question: "Điền từ còn thiếu vào câu thoại nổi tiếng: 'Just keep _____!'",
        options: ["swimming", "running", "flying", "laughing"],
        answer: "swimming",
        explanationVi: "Câu cửa miệng của Dory là 'Just keep swimming' (Cứ tiếp tục bơi đi - tượng trưng cho sự kiên trì)."
      },
      {
        id: "fn_2",
        dialogueContext: "Dory giải thích về căn bệnh đãng trí của mình cho Marlin:",
        question: "Dory nói: 'I suffer from short-term _____ loss.'",
        options: ["memory", "water", "money", "power"],
        answer: "memory",
        explanationVi: "'Short-term memory loss' là cụm từ y khoa thông dụng chỉ chứng đãng trí / mất trí nhớ ngắn hạn."
      }
    ]
  },
  {
    id: "peppa-pig",
    title: "Peppa Pig",
    titleVi: "Heo Peppa",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản (Beginner)",
    year: 2004,
    genre: ["Hoạt hình", "Gia đình", "Thiếu nhi"],
    accent: "Anh - Anh (UK)",
    rating: "⭐ 8.5/10 (Educational)",
    durationOrSeasons: "8 Phần (Mỗi tập 5 phút)",
    bannerGradient: "from-pink-400 to-rose-600",
    icon: "🐷",
    tagline: "I'm Peppa Pig! This is my little brother George.",
    summaryVi: "Cuộc sống thường ngày đầy tiếng cười của cô heo con Peppa, em trai George, Heo Mẹ và Heo Bố xoay quanh việc đi dã ngoại, nhảy vào vũng bùn và đến trường mầm non.",
    whyLearn: "Được mệnh danh là 'giáo trình học phát âm Anh-Anh số 1 cho người mới bắt đầu'. Người dẫn chuyện phát âm từng âm tiết cực kỳ tròn vành rõ chữ, từ vựng lặp đi lặp lại tự nhiên giúp não bộ khắc sâu phản xạ.",
    watchingTip: "Mỗi tập chỉ dài 5 phút. Hãy nghe lần 1 có sub, lần 2 tắt sub và lần 3 nhại theo (Shadowing) chính xác từng câu thoại ngắn.",
    keyVocabularies: [
      {
        word: "Muddy puddles",
        phonetic: "/ˈmʌdi ˈpʌdlz/",
        meaningVi: "Những vũng bùn lầy",
        exampleSentence: "Peppa loves jumping in muddy puddles.",
        exampleVi: "Peppa rất thích nhảy vào những vũng bùn lầy."
      },
      {
        word: "Boots",
        phonetic: "/buːts/",
        meaningVi: "Đôi ủng cao su",
        exampleSentence: "If you jump in muddy puddles, you must wear your boots!",
        exampleVi: "Nếu con nhảy vào vũng bùn, con phải đi ủng vào nhé!"
      },
      {
        word: "Giggle",
        phonetic: "/ˈɡɪɡl/",
        meaningVi: "Cười khúc khích",
        exampleSentence: "Everyone loves jumping and giggling together.",
        exampleVi: "Mọi người đều thích nhảy múa và cười khúc khích cùng nhau."
      }
    ],
    iconicQuotes: [
      {
        character: "Peppa Pig",
        en: "I'm Peppa Pig. And this is my little brother, George.",
        vi: "Tớ là Peppa Pig. Và đây là em trai bé nhỏ của tớ, George.",
        explanationVi: "Mẫu câu giới thiệu bản thân và người thân cơ bản nhất: 'I am...' và 'This is my...'"
      },
      {
        character: "Mummy Pig",
        en: "If you jump in muddy puddles, you must wear your boots!",
        vi: "Nếu con nhảy vào vũng nước bùn, con bắt buộc phải mang ủng vào đấy!",
        explanationVi: "Cấu trúc điều kiện loại 1 với động từ khuyết thiếu: If + Hiện tại đơn, S + must + V-inf."
      }
    ],
    quiz: [
      {
        id: "pp_1",
        dialogueContext: "Heo mẹ nhắc nhở Peppa trước khi ra ngoài vườn chơi trời mưa:",
        question: "Điền từ đúng: 'If you jump in muddy puddles, you _____ wear your boots!'",
        options: ["must", "can't", "shouldn't", "won't"],
        answer: "must",
        explanationVi: "'Must' diễn tả yêu cầu bắt buộc của bố mẹ nhắc nhở con cái để giữ vệ sinh."
      }
    ]
  },
  {
    id: "we-bare-bears",
    title: "We Bare Bears",
    titleVi: "Chúng Tôi Đơn Giản Là Gấu",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản (Beginner)",
    year: 2015,
    genre: ["Hoạt hình", "Hài hước", "Đời sống"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 7.9/10 (IMDb)",
    durationOrSeasons: "4 Phần (Mỗi tập 11 phút)",
    bannerGradient: "from-amber-500 to-orange-700",
    icon: "🐻",
    tagline: "Bear stack! Three brothers trying to fit in.",
    summaryVi: "Câu chuyện hài hước về 3 anh em nhà gấu: Grizzly (gấu xám lạc quan), Panda (gấu trúc nghiện mạng xã hội) và Ice Bear (gấu trắng ít nói nhưng đa tài) cố gắng hòa nhập với thế giới con người tại San Francisco.",
    whyLearn: "Ngôn ngữ cực kỳ tươi mới và phản ánh chính xác lối nói chuyện của giới trẻ Mỹ thời đại số: smartphone, sống ảo trên mạng, ẩm thực đường phố, mua sắm siêu thị. Nhân vật Ice Bear luôn nói ngôi thứ 3 ngắn gọn rất dễ bắt chước.",
    watchingTip: "Chú ý cách các nhân vật giao tiếp bằng tiếng lóng lành mạnh và ngữ điệu tự nhiên khi rủ nhau đi ăn hoặc livestream.",
    keyVocabularies: [
      {
        word: "Fit in",
        phonetic: "/fɪt ɪn/",
        meaningVi: "Hòa nhập vào môi trường xung quanh",
        exampleSentence: "We are just three brothers trying to fit in the city.",
        exampleVi: "Chúng tôi chỉ là ba anh em đang cố gắng hòa nhập vào thành phố."
      },
      {
        word: "Followers",
        phonetic: "/ˈfɒləʊəz/",
        meaningVi: "Người theo dõi (trên mạng xã hội)",
        exampleSentence: "Panda is worried because he lost two followers online.",
        exampleVi: "Panda đang lo lắng vì cậu ấy vừa mất hai người theo dõi trên mạng."
      },
      {
        word: "Bear stack",
        phonetic: "/beə stæk/",
        meaningVi: "Xếp chồng gấu (tư thế di chuyển của 3 anh em)",
        exampleSentence: "Whenever they travel, they form a bear stack.",
        exampleVi: "Mỗi khi đi lại, họ lại tạo thành tư thế ba chú gấu xếp chồng lên nhau."
      }
    ],
    iconicQuotes: [
      {
        character: "Ice Bear",
        en: "Ice Bear bought these on sale.",
        vi: "Gấu Trắng đã mua những món này lúc giảm giá.",
        explanationVi: "Thói quen đặc biệt của Ice Bear: luôn tự gọi mình là 'Ice Bear' thay vì 'I', câu nói ngắn gọn và đi thẳng vào trọng tâm."
      }
    ],
    quiz: [
      {
        id: "wbb_1",
        dialogueContext: "Grizzly hào hứng rủ hai người em đi khám phá thành phố:",
        question: "Cụm từ nào mang nghĩa 'cố gắng hòa nhập với mọi người'?",
        options: ["fit in", "run out", "look down", "take off"],
        answer: "fit in",
        explanationVi: "'Fit in' là phrasal verb thông dụng nghĩa là thích nghi, hòa nhập với tập thể."
      }
    ]
  },
  {
    id: "extra-english",
    title: "Extra English",
    titleVi: "Extra English - Sitcom Học Tiếng Anh",
    type: "live_action",
    level: "A1-A2",
    levelLabel: "Cơ bản (Beginner)",
    year: 2002,
    genre: ["Hài kịch Sitcom", "Giáo dục", "Đời sống"],
    accent: "Anh - Anh (UK)",
    rating: "⭐ 9.0/10 (Top 1 ESL)",
    durationOrSeasons: "30 Tập (Mỗi tập 24 phút)",
    bannerGradient: "from-emerald-500 to-teal-700",
    icon: "📺",
    tagline: "The funniest way to master everyday English!",
    summaryVi: "Bộ phim sitcom huyền thoại được đài truyền hình Channel 4 của Anh sản xuất riêng cho người học tiếng Anh. Câu chuyện về Hector, một chàng trai Argentina nói tiếng Anh bập bẹ đến London ở chung với Bridget, Annie và Nick.",
    whyLearn: "Được thiết kế 100% cho việc học ngôn ngữ: diễn viên nói chậm hơn bình thường một chút nhưng rất tự nhiên, có các đoạn email tóm tắt từ vựng, tình huống gần gũi như đi siêu thị, mua sắm quần áo, tìm việc làm, nấu ăn.",
    watchingTip: "Hãy xem mỗi tập 2 lần. Nhân vật Hector thường xuyên dùng sai từ và được bạn bè sửa lại ngay lập tức - đây chính là bài học quý giá giúp bạn tránh lỗi sai tương tự!",
    keyVocabularies: [
      {
        word: "Flatmate",
        phonetic: "/ˈflætmeɪt/",
        meaningVi: "Bạn cùng phòng / cùng căn hộ",
        exampleSentence: "Hector is our new flatmate from Argentina.",
        exampleVi: "Hector là người bạn cùng căn hộ mới của chúng ta đến từ Argentina."
      },
      {
        word: "Costume",
        phonetic: "/ˈkɒstjuːm/",
        meaningVi: "Trang phục biểu diễn / hóa trang",
        exampleSentence: "Nick bought a strange costume for the party.",
        exampleVi: "Nick đã mua một bộ trang phục rất kỳ lạ cho bữa tiệc."
      },
      {
        word: "Fancy sb",
        phonetic: "/ˈfænsi/",
        meaningVi: "Thích / cảm nắng ai đó (từ lóng Anh-Anh)",
        exampleSentence: "I think Annie really fancies Hector!",
        exampleVi: "Tôi nghĩ Annie thực sự đang cảm nắng Hector rồi đấy!"
      }
    ],
    iconicQuotes: [
      {
        character: "Hector",
        en: "I am Hector. I come from Argentina.",
        vi: "Tôi là Hector. Tôi đến từ Argentina.",
        explanationVi: "Câu chào chuẩn quốc tế khi gặp gỡ bạn bè mới trong một môi trường đa văn hóa."
      }
    ],
    quiz: [
      {
        id: "ee_1",
        dialogueContext: "Trong tiếng Anh - Anh (British English), từ nào dùng để chỉ 'người ở chung căn hộ'?",
        question: "Từ tương đương với 'roommate' trong tiếng Anh - Anh là gì?",
        options: ["flatmate", "classmate", "boss", "neighbor"],
        answer: "flatmate",
        explanationVi: "Người Anh gọi căn hộ là 'flat', do đó bạn cùng căn hộ là 'flatmate'."
      }
    ]
  },

  // ==========================================
  // LEVEL B1-B2: TRUNG CẤP / GIAO TIẾP TỰ NHIÊN
  // ==========================================
  {
    id: "friends",
    title: "Friends",
    titleVi: "Những Người Bạn",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp (Intermediate)",
    year: 1994,
    genre: ["Hài kịch Sitcom", "Tình bạn", "Lãng mạn"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 8.9/10 (IMDb)",
    durationOrSeasons: "10 Mùa (236 tập)",
    bannerGradient: "from-amber-500 to-yellow-600",
    icon: "☕",
    tagline: "I'll be there for you when the rain starts to pour.",
    summaryVi: "Cuộc sống, tình yêu và sự nghiệp của 6 người bạn thân sống tại Manhattan, New York: Rachel, Monica, Phoebe, Joey, Chandler và Ross với những cuộc trò chuyện bất hủ tại quán cà phê Central Perk.",
    whyLearn: "Đây là 'kinh thánh' học tiếng Anh giao tiếp đời sống số 1 thế giới. Bạn sẽ học được nghệ thuật nói đùa mỉa mai (sarcasm) của Chandler, cách tán tỉnh của Joey, tiếng lóng người New York và cách phản xạ đối thoại cực nhanh trong thực tế.",
    watchingTip: "Hãy bật phụ đề tiếng Anh (English sub) và ghi lại các cụm từ nối hội thoại như: 'You know what?', 'By the way', 'Speaking of which'.",
    keyVocabularies: [
      {
        word: "On a break",
        phonetic: "/ɒn ə breɪk/",
        meaningVi: "Tạm chia tay / Tạm dừng mối quan hệ",
        exampleSentence: "We were on a break!",
        exampleVi: "Hồi đó chúng ta đang tạm chia tay mà! (câu cãi vã kinh điển của Ross và Rachel)"
      },
      {
        word: "How you doin'?",
        phonetic: "/haʊ jə ˈduːɪn/",
        meaningVi: "Em khỏe không? / Em thế nào? (câu tán gái cửa miệng của Joey)",
        exampleSentence: "Joey walked up to the girl and asked: 'How you doin'?'",
        exampleVi: "Joey tiến lại gần cô gái và hỏi với nụ cười tự tin: 'Em thế nào?'"
      },
      {
        word: "Sarcastic",
        phonetic: "/sɑːˈkæstɪk/",
        meaningVi: "Mỉa mai, châm biếm hài hước",
        exampleSentence: "Chandler uses sarcastic jokes whenever he feels uncomfortable.",
        exampleVi: "Chandler luôn tung ra những câu đùa mỉa mai mỗi khi anh ấy cảm thấy ngượng ngùng."
      }
    ],
    iconicQuotes: [
      {
        character: "Joey Tribbiani",
        en: "How you doin'?",
        vi: "Dạo này em thế nào rồi? (vừa hỏi vừa nháy mắt phong độ)",
        explanationVi: "Câu chào kinh điển của Joey, nói lướt từ 'How are you doing' thành 'How you doin'."
      },
      {
        character: "Ross Geller",
        en: "We were on a break!",
        vi: "Lúc đó tụi mình đang tạm dừng hẹn hò mà!",
        explanationVi: "Thì quá khứ tiếp diễn 'were' kết hợp cụm 'on a break' thể hiện trạng thái kéo dài trong quá khứ."
      }
    ],
    quiz: [
      {
        id: "fr_1",
        dialogueContext: "Joey gặp một cô gái xinh đẹp tại Central Perk và muốn bắt chuyện tạo ấn tượng:",
        question: "Câu cửa miệng nổi tiếng nhất của Joey Tribbiani là gì?",
        options: ["How you doin'?", "What do you want?", "Where are you going?", "Who are you?"],
        answer: "How you doin'?",
        explanationVi: "'How you doin'?' là câu chào cưa cẩm thương hiệu của Joey trong suốt 10 mùa Friends."
      }
    ]
  },
  {
    id: "inside-out",
    title: "Inside Out",
    titleVi: "Những Mảnh Ghép Cảm Xúc",
    type: "animation",
    level: "B1-B2",
    levelLabel: "Trung cấp (Intermediate)",
    year: 2015,
    genre: ["Hoạt hình", "Tâm lý", "Gia đình"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 8.1/10 (IMDb)",
    durationOrSeasons: "1 giờ 35 phút",
    bannerGradient: "from-blue-500 to-indigo-600",
    icon: "🧠",
    tagline: "Meet the little voices inside your head.",
    summaryVi: "Bên trong tâm trí cô bé 11 tuổi Riley là 5 nhân vật cảm xúc: Joy (Vui vẻ), Sadness (Buồn bã), Anger (Giận dữ), Fear (Sợ hãi) và Disgust (Chảnh chọe) điều hành trung tâm điều khiển não bộ khi Riley chuyển nhà đến San Francisco.",
    whyLearn: "Tuyệt đỉnh để mở rộng vốn từ về tâm lý học, cảm xúc con người, suy nghĩ nội tâm và ký ức. Lời thoại giàu hình ảnh ẩn dụ nhưng phát âm của Amy Poehler (Joy) vô cùng chuẩn xác và giàu năng lượng.",
    watchingTip: "Hãy ghi chú lại cách nhân vật Sadness bộc lộ sự đồng cảm (empathy) bằng tiếng Anh mà không làm người nghe khó chịu.",
    keyVocabularies: [
      {
        word: "Core memory",
        phonetic: "/kɔː ˈmeməri/",
        meaningVi: "Ký ức cốt lõi (tạo nên tính cách)",
        exampleSentence: "These core memories form the islands of Riley's personality.",
        exampleVi: "Những ký ức cốt lõi này tạo nên các hòn đảo nhân cách của Riley."
      },
      {
        word: "Empathy",
        phonetic: "/ˈempəθi/",
        meaningVi: "Sự thấu cảm / đồng cảm sâu sắc",
        exampleSentence: "Sadness showed true empathy when Bing Bong was crying.",
        exampleVi: "Sadness đã thể hiện sự thấu cảm chân thành khi Bing Bong đang khóc."
      },
      {
        word: "Long-term memory",
        phonetic: "/lɒŋ tɜːm ˈmeməri/",
        meaningVi: "Trí nhớ dài hạn",
        exampleSentence: "They got lost in the labyrinth of long-term memory.",
        exampleVi: "Họ bị lạc trong mê cung của trí nhớ dài hạn."
      }
    ],
    iconicQuotes: [
      {
        character: "Joy",
        en: "Do you ever look at someone and wonder, 'What is going on inside their head?'",
        vi: "Đã bao giờ bạn nhìn một ai đó và tự hỏi: 'Điều gì đang thực sự diễn ra trong đầu họ?' chưa?",
        explanationVi: "Mẫu câu hỏi trải nghiệm với Hiện tại đơn: 'Do you ever look... and wonder...?'"
      },
      {
        character: "Sadness",
        en: "Crying helps me slow down and obsess over the weight of life's problems.",
        vi: "Khóc giúp tôi sống chậm lại và cảm nhận sức nặng của những vấn đề trong cuộc đời.",
        explanationVi: "Danh động từ 'Crying' làm chủ ngữ của câu, đi kèm 'helps me + V-inf'."
      }
    ],
    quiz: [
      {
        id: "io_1",
        dialogueContext: "Joy giới thiệu về các quả cầu phát sáng lưu trữ những khoảnh khắc quan trọng nhất cuộc đời:",
        question: "Ký ức quan trọng tạo nên nhân cách của một người được gọi là gì?",
        options: ["Core memory", "Fast memory", "Fake memory", "Bad memory"],
        answer: "Core memory",
        explanationVi: "'Core' là cốt lõi. 'Core memory' nghĩa là ký ức cốt lõi."
      }
    ]
  },
  {
    id: "harry-potter-1",
    title: "Harry Potter and the Sorcerer's Stone",
    titleVi: "Harry Potter và Hòn Đá Phù Thủy",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp (Intermediate)",
    year: 2001,
    genre: ["Giả tưởng", "Phép thuật", "Học đường"],
    accent: "Anh - Anh (UK)",
    rating: "⭐ 7.6/10 (IMDb)",
    durationOrSeasons: "2 giờ 32 phút",
    bannerGradient: "from-purple-700 to-indigo-900",
    icon: "⚡",
    tagline: "Let the magic begin.",
    summaryVi: "Cậu bé mồ côi Harry Potter phát hiện ra mình là một phù thủy vào ngày sinh nhật thứ 11 và bước chân vào trường Phù thủy Hogwarts, kết bạn với Ron và Hermione.",
    whyLearn: "Là bộ phim lý tưởng nhất để luyện tai nghe ngữ điệu Anh-Anh chuẩn mực (Received Pronunciation) với sự tham gia của dàn diễn viên sân khấu kịch gạo cội nước Anh. Lời thoại giàu chất văn học, từ vựng phong phú về trường lớp, phép thuật và tình bạn.",
    watchingTip: "Chú ý cách phát âm các nguyên âm tròn môi và phụ âm 't' sắc sảo đặc trưng của tiếng Anh nước Anh của nhân vật Hermione.",
    keyVocabularies: [
      {
        word: "Wizard",
        phonetic: "/ˈwɪzəd/",
        meaningVi: "Phù thủy (nam)",
        exampleSentence: "You're a wizard, Harry!",
        exampleVi: "Cháu là một phù thủy đấy, Harry!"
      },
      {
        word: "Courage",
        phonetic: "/ˈkʌrɪdʒ/",
        meaningVi: "Lòng dũng cảm",
        exampleSentence: "It takes a great deal of bravery to stand up to our enemies.",
        exampleVi: "Cần rất nhiều lòng dũng cảm để đối đầu với kẻ thù của chúng ta."
      },
      {
        word: "Sorting ceremony",
        phonetic: "/ˈsɔːtɪŋ ˈserəməni/",
        meaningVi: "Lễ phân loại nhà (vào Gryffindor, Slytherin...)",
        exampleSentence: "The sorting ceremony will take place in the Great Hall.",
        exampleVi: "Lễ phân loại nhà sẽ diễn ra tại Đại Sảnh Đường."
      }
    ],
    iconicQuotes: [
      {
        character: "Hagrid",
        en: "You're a wizard, Harry.",
        vi: "Cháu là một phù thủy đấy, Harry.",
        explanationVi: "Câu thoại nổi tiếng mở ra toàn bộ thế giới phù thủy kỳ diệu."
      },
      {
        character: "Dumbledore",
        en: "It takes a great deal of courage to stand up to our enemies, but just as much to stand up to our friends.",
        vi: "Cần rất nhiều lòng dũng cảm để đương đầu với kẻ thù, nhưng cũng cần từng ấy dũng khí để dám đứng lên can ngăn bạn bè.",
        explanationVi: "Cấu trúc so sánh bậc thầy: 'It takes... to..., but just as much to...'"
      }
    ],
    quiz: [
      {
        id: "hp_1",
        dialogueContext: "Hagrid bước vào căn chòi giữa bão tố và tiết lộ thân phận thật sự cho Harry:",
        question: "Hoàn thiện câu thoại: 'You're a _____, Harry.'",
        options: ["wizard", "teacher", "doctor", "pilot"],
        answer: "wizard",
        explanationVi: "Hagrid báo tin Harry là một phù thủy (wizard)."
      }
    ]
  },
  {
    id: "forrest-gump",
    title: "Forrest Gump",
    titleVi: "Cuộc Đời Forrest Gump",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp (Intermediate)",
    year: 1994,
    genre: ["Tâm lý", "Lịch sử", "Lãng mạn"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 8.8/10 (IMDb Top 10)",
    durationOrSeasons: "2 giờ 22 phút",
    bannerGradient: "from-teal-600 to-emerald-800",
    icon: "🍫",
    tagline: "Life is like a box of chocolates. You never know what you're gonna get.",
    summaryVi: "Cuộc đời kỳ diệu của Forrest Gump - một người đàn ông có chỉ số IQ 75 nhưng với tấm lòng nhân hậu vô bờ, anh đã trở thành anh hùng chiến tranh, tuyển thủ bóng bàn và tỷ phú.",
    whyLearn: "Tom Hanks nói giọng miền Nam nước Mỹ (Southern drawl) với tốc độ chậm rãi, rõ ràng từng âm, cực kỳ êm tai và dễ nghe đối với bất kỳ ai đang ở trình độ trung cấp. Lời thoại chứa đựng nhiều triết lý nhân sinh mộc mạc.",
    watchingTip: "Cực kỳ thích hợp để luyện đọc diễn cảm theo lời dẫn truyện của Forrest khi anh ngồi trên băng ghế chờ xe buýt.",
    keyVocabularies: [
      {
        word: "Box of chocolates",
        phonetic: "/bɒks əv ˈtʃɒkləts/",
        meaningVi: "Hộp kẹo sô-cô-la (ẩn dụ cho cuộc đời đầy bất ngờ)",
        exampleSentence: "Life was like a box of chocolates.",
        exampleVi: "Cuộc đời cũng giống như một hộp kẹo sô-cô-la vậy."
      },
      {
        word: "Miracle",
        phonetic: "/ˈmɪrəkl/",
        meaningVi: "Điều kỳ diệu, phép màu",
        exampleSentence: "Miracles happen every day.",
        exampleVi: "Phép màu vẫn xảy ra mỗi ngày."
      },
      {
        word: "Destiny",
        phonetic: "/ˈdestɪni/",
        meaningVi: "Số phận, định mệnh",
        exampleSentence: "I don't know if we each have a destiny, or if we're all just floating around accidental-like on a breeze.",
        exampleVi: "Tôi không biết liệu mỗi chúng ta đều có số phận riêng, hay chỉ đang lơ lửng ngẫu nhiên như một chiếc lông vũ trước gió."
      }
    ],
    iconicQuotes: [
      {
        character: "Forrest Gump",
        en: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
        vi: "Mẹ tôi luôn nói cuộc đời giống như một hộp sô-cô-la. Con không bao giờ biết trước mình sẽ bốc trúng viên kẹo nào đâu.",
        explanationVi: "Câu nói nổi tiếng nhất lịch sử điện ảnh. So sánh 'life was like...' và 'gonna' = 'going to'."
      }
    ],
    quiz: [
      {
        id: "fg_1",
        dialogueContext: "Forrest mời bà cụ ngồi cạnh một viên sô-cô-la trên băng ghế công viên:",
        question: "Mẹ của Forrest ví cuộc đời giống như thứ gì?",
        options: ["A box of chocolates", "A cup of coffee", "A bottle of wine", "A book of stories"],
        answer: "A box of chocolates",
        explanationVi: "Forrest ví von: 'Life is like a box of chocolates. You never know what you're gonna get.'"
      }
    ]
  },

  // ==========================================
  // LEVEL C1-C2: NÂNG CAO / CÔNG SỞ & HỌC THUẬT
  // ==========================================
  {
    id: "suits",
    title: "Suits",
    titleVi: "Luật Sư Phong Cách (Đấu Trí Pháp Lý)",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao (Advanced)",
    year: 2011,
    genre: ["Chính kịch", "Luật pháp", "Kinh doanh"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 8.4/10 (IMDb)",
    durationOrSeasons: "9 Mùa (134 tập)",
    bannerGradient: "from-slate-800 to-zinc-950",
    icon: "💼",
    tagline: "I don't play the odds, I play the man.",
    summaryVi: "Harvey Specter - luật sư đàm phán số một New York liều lĩnh tuyển dụng Mike Ross - một thiên tài nhớ từng chữ dù chưa hề có bằng luật vào công ty danh tiếng Pearson Hardman.",
    whyLearn: "Tuyệt đỉnh cho những ai muốn nâng tầm tiếng Anh thương mại, công sở cấp cao, pháp lý và đàm phán doanh nghiệp. Tốc độ nói cực nhanh, lập luận sắc sảo, kỹ thuật dùng từ đắt giá để thuyết phục đối phương.",
    watchingTip: "Hãy ghi chép lại các thành ngữ thương mại như: 'Sign on the dotted line', 'Leverage', 'Settle out of court', 'Play the man'.",
    keyVocabularies: [
      {
        word: "Leverage",
        phonetic: "/ˈliːvərɪdʒ/",
        meaningVi: "Lợi thế đàm phán / Đòn bẩy kinh doanh",
        exampleSentence: "What's the use of having leverage if you never use it?",
        exampleVi: "Nắm trong tay lợi thế đàm phán thì có ích gì nếu bạn không bao giờ dùng tới nó?"
      },
      {
        word: "Subpoena",
        phonetic: "/səˈpiːnə/",
        meaningVi: "Trát đòi hầu tòa của tòa án",
        exampleSentence: "We just served them with a federal subpoena.",
        exampleVi: "Chúng ta vừa tống đạt trát hầu tòa liên bang cho họ rồi."
      },
      {
        word: "Play the odds",
        phonetic: "/pleɪ ði ɒdz/",
        meaningVi: "Dựa vào xác suất may rủi",
        exampleSentence: "I don't play the odds, I play the man.",
        exampleVi: "Tôi không cược vào may rủi, tôi nắm bắt chính tâm lý đối thủ."
      }
    ],
    iconicQuotes: [
      {
        character: "Harvey Specter",
        en: "I don't have good luck, I make my own luck.",
        vi: "Tôi không có vận may sẵn, tôi tự tạo ra may mắn cho chính mình.",
        explanationVi: "Phong thái tự tin đỉnh cao của luật sư Harvey Specter."
      },
      {
        character: "Harvey Specter",
        en: "When you're backed against the wall, break the damn thing down.",
        vi: "Khi bị dồn vào chân tường, hãy phá tan bức tường chết tiệt đó đi.",
        explanationVi: "Cụm 'backed against the wall' là thành ngữ chỉ tình thế ngặt nghèo không còn đường lui."
      }
    ],
    quiz: [
      {
        id: "st_1",
        dialogueContext: "Harvey Specter chỉ dạy cho Mike Ross về bí quyết thắng mọi cuộc đàm phán:",
        question: "Harvey nói: 'I don't play the odds, I play the _____.'",
        options: ["man", "game", "money", "rule"],
        answer: "man",
        explanationVi: "Harvey luôn quan sát điểm yếu tâm lý của con người trước mặt thay vì dựa vào xác suất lý thuyết ('I play the man')."
      }
    ]
  },
  {
    id: "sherlock",
    title: "Sherlock (BBC)",
    titleVi: "Thám Tử Sherlock Holmes",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao (Advanced)",
    year: 2010,
    genre: ["Trinh thám", "Tâm lý tội phạm", "Bí ẩn"],
    accent: "Anh - Anh (UK)",
    rating: "⭐ 9.1/10 (IMDb Top)",
    durationOrSeasons: "4 Mùa (Mỗi tập 90 phút)",
    bannerGradient: "from-blue-900 to-slate-900",
    icon: "🔍",
    tagline: "Brainy is the new sexy.",
    summaryVi: "Bản chuyển thể thế kỷ 21 hiện đại về Sherlock Holmes (Benedict Cumberbatch) và Bác sĩ John Watson giải mã các vụ án hóc búa tại London với chiếc điện thoại thông minh và tư duy suy luận siêu phàm.",
    whyLearn: "Thử thách nghe hiểu tiếng Anh ở cấp độ thượng thừa: tốc độ bắn chữ như tên lửa của Benedict Cumberbatch kết hợp kho từ vựng học thuật, y khoa, pháp y và văn hóa Anh cổ điển. Ngữ điệu quý tộc Anh cực kỳ sang trọng.",
    watchingTip: "Không cần nản lòng nếu lần đầu nghe không kịp! Hãy tua chậm lại ở tốc độ 0.75x hoặc dừng lại ở các đoạn Sherlock 'suy luận vết tích' để học cách miêu tả chi tiết.",
    keyVocabularies: [
      {
        word: "Deduction",
        phonetic: "/dɪˈdʌkʃn/",
        meaningVi: "Phương pháp suy luận logic diễn dịch",
        exampleSentence: "The science of deduction allows me to see what others miss.",
        exampleVi: "Khoa học suy luận cho phép tôi nhìn thấy những thứ mà người khác bỏ sót."
      },
      {
        word: "Mind palace",
        phonetic: "/maɪnd ˈpæləs/",
        meaningVi: "Lâu đài ký ức (kỹ thuật ghi nhớ siêu đẳng)",
        exampleSentence: "Sherlock retreats into his mind palace to search through data.",
        exampleVi: "Sherlock thu mình vào lâu đài ký ức để lục tìm lại dữ liệu."
      },
      {
        word: "High-functioning sociopath",
        phonetic: "/haɪ ˈfʌŋkʃənɪŋ ˈsəʊsiəʊpæθ/",
        meaningVi: "Kẻ phi xã hội có năng lực xuất chúng",
        exampleSentence: "I'm not a psychopath, I'm a high-functioning sociopath.",
        exampleVi: "Tôi không phải kẻ tâm thần, tôi là một người phi xã hội có năng lực vượt trội."
      }
    ],
    iconicQuotes: [
      {
        character: "Sherlock Holmes",
        en: "I'm not a psychopath, Anderson. I'm a high-functioning sociopath. Do your research.",
        vi: "Tôi không phải kẻ tâm thần đâu Anderson. Tôi là một người phi xã hội có năng lực vượt trội. Hãy tìm hiểu kỹ trước đi.",
        explanationVi: "Cách phân biệt hai thuật ngữ tâm lý tội phạm 'psychopath' và 'sociopath'."
      },
      {
        character: "Sherlock Holmes",
        en: "You see, but you do not observe. The distinction is clear.",
        vi: "Anh nhìn thấy, nhưng anh không hề quan sát. Sự khác biệt giữa chúng là hoàn toàn rõ ràng.",
        explanationVi: "So sánh tinh tế giữa hai ngoại động từ 'see' (nhìn thấy thụ động) và 'observe' (quan sát có chủ đích)."
      }
    ],
    quiz: [
      {
        id: "sh_1",
        dialogueContext: "Sherlock phản bác lại lời mỉa mai của cảnh sát Anderson tại hiện trường:",
        question: "Sherlock tự gọi bản thân mình là gì?",
        options: [
          "A high-functioning sociopath",
          "An ordinary policeman",
          "A crazy clown",
          "A simple teacher"
        ],
        answer: "A high-functioning sociopath",
        explanationVi: "Sherlock khẳng định: 'I'm a high-functioning sociopath' (Người phi xã hội có năng lực cao)."
      }
    ]
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    titleVi: "Mạng Xã Hội (Facebook)",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao (Advanced)",
    year: 2010,
    genre: ["Tiểu sử", "Công nghệ", "Khởi nghiệp"],
    accent: "Anh - Mỹ (US)",
    rating: "⭐ 7.8/10 (Oscar Winner)",
    durationOrSeasons: "2 giờ 0 phút",
    bannerGradient: "from-sky-700 to-indigo-950",
    icon: "💻",
    tagline: "You don't get to 500 million friends without making a few enemies.",
    summaryVi: "Câu chuyện khởi nghiệp đầy kịch tính của Mark Zuckerberg từ căn phòng ký túc xá Đại học Harvard cho đến khi tạo nên đế chế mạng xã hội Facebook toàn cầu và những vụ kiện hàng trăm triệu USD.",
    whyLearn: "Kịch bản xuất sắc nhất thế kỷ 21 của biên kịch Aaron Sorkin. Tốc độ thoại nhanh bậc nhất điện ảnh Mỹ, giàu thuật ngữ công nghệ máy tính, đầu tư mạo hiểm (venture capital), đàm phán hợp đồng cổ phần.",
    watchingTip: "Rất thích hợp cho các bạn làm việc trong ngành IT, lập trình phần mềm, marketing và kinh doanh quốc tế.",
    keyVocabularies: [
      {
        word: "Algorithm",
        phonetic: "/ˈælɡərɪðəm/",
        meaningVi: "Thuật toán máy tính",
        exampleSentence: "He wrote the ranking algorithm on the dorm room window.",
        exampleVi: "Anh ấy đã viết thuật toán xếp hạng lên cửa sổ phòng ký túc xá."
      },
      {
        word: "Equity",
        phonetic: "/ˈekwəti/",
        meaningVi: "Cổ phần sở hữu trong công ty",
        exampleSentence: "Eduardo's equity in the company was diluted down to 0.03%.",
        exampleVi: "Tỷ lệ cổ phần của Eduardo trong công ty đã bị pha loãng xuống chỉ còn 0.03%."
      },
      {
        word: "Venture capital",
        phonetic: "/ˈventʃə ˈkæpɪtl/",
        meaningVi: "Quỹ đầu tư mạo hiểm cho startup",
        exampleSentence: "They went to Silicon Valley to pitch to venture capital firms.",
        exampleVi: "Họ đến Thung lũng Silicon để thuyết trình trước các quỹ đầu tư mạo hiểm."
      }
    ],
    iconicQuotes: [
      {
        character: "Sean Parker",
        en: "A million dollars isn't cool. You know what's cool? A billion dollars.",
        vi: "Một triệu đô la chẳng có gì ngầu cả. Cậu có biết cái gì mới thực sự ngầu không? Một tỷ đô la.",
        explanationVi: "Câu nói kinh điển tạo bước ngoặt tham vọng cho Facebook do Justin Timberlake thủ vai Sean Parker."
      }
    ],
    quiz: [
      {
        id: "sn_1",
        dialogueContext: "Sean Parker khuyên Mark Zuckerberg không nên vội vã bán Facebook sớm:",
        question: "Điền từ còn thiếu: 'A million dollars isn't cool. You know what's cool? A _____ dollars.'",
        options: ["billion", "hundred", "thousand", "trillion"],
        answer: "billion",
        explanationVi: "Sean Parker nói: 'A billion dollars' (Một tỷ đô la)."
      }
    ]
  },
  {
    id: "the-kings-speech",
    title: "The King's Speech",
    titleVi: "Diễn Văn Của Nhà Vua",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao (Advanced)",
    year: 2010,
    genre: ["Lịch sử", "Hùng biện", "Tâm lý"],
    accent: "Anh - Anh (UK)",
    rating: "⭐ 8.0/10 (Oscar Best Picture)",
    durationOrSeasons: "1 giờ 58 phút",
    bannerGradient: "from-amber-700 to-stone-900",
    icon: "👑",
    tagline: "When God couldn't save the King, the Queen turned to someone who could.",
    summaryVi: "Câu chuyện có thật đầy cảm động về Vua George VI của nước Anh - người mắc chứng nói lắp nặng nề nhưng đã cùng chuyên gia phát âm Lionel Logue vượt qua rào cản tâm lý để đọc bài diễn văn lịch sử động viên toàn dân khi Thế chiến thứ 2 bùng nổ.",
    whyLearn: "Bộ phim được xem là 'sách giáo khoa vàng' về thanh nhạc và luyện âm học (Phonetics). Bạn sẽ học được kỹ thuật lấy hơi từ cơ hoành, cách thả lỏng cơ hàm, cách nhấn trọng âm và ngữ điệu hùng biện trước đám đông.",
    watchingTip: "Hãy bắt chước các bài tập phát âm độc đáo trong phim: thổi bong bóng môi, đọc thơ trong lúc nghe nhạc to qua tai nghe để vượt qua nỗi sợ nói tiếng Anh.",
    keyVocabularies: [
      {
        word: "Stammer / Stutter",
        phonetic: "/ˈstæmə/ /ˈstʌtə/",
        meaningVi: "Chứng nói lắp, tật vấp chữ",
        exampleSentence: "With patient practice, he learned to control his stammer.",
        exampleVi: "Nhờ sự kiên trì luyện tập, ngài đã học được cách kiểm soát tật nói lắp của mình."
      },
      {
        word: "Enunciation",
        phonetic: "/ɪˌnʌnsiˈeɪʃn/",
        meaningVi: "Khẩu hình và độ rõ ràng khi phát âm từng âm tiết",
        exampleSentence: "Clear enunciation is crucial for public speaking.",
        exampleVi: "Phát âm tròn vành rõ chữ là yếu tố sống còn trong diễn thuyết trước công chúng."
      },
      {
        word: "Diaphragm",
        phonetic: "/ˈdaɪəfræm/",
        meaningVi: "Cơ hoành (dùng để lấy hơi thở sâu)",
        exampleSentence: "Breathe from your diaphragm, not your chest.",
        exampleVi: "Hãy hít thở từ cơ hoành bụng chứ đừng thở nông bằng ngực."
      }
    ],
    iconicQuotes: [
      {
        character: "King George VI",
        en: "Because I have a voice!",
        vi: "Bởi vì tôi có tiếng nói của riêng mình!",
        explanationVi: "Khoảnh khắc bùng nổ cảm xúc chứng minh sự tự tin và giá trị của bản thân."
      }
    ],
    quiz: [
      {
        id: "ks_1",
        dialogueContext: "Trong bài học luyện âm của Lionel Logue, ông yêu cầu nhà vua phải kiểm soát điều gì để nói không bị hụt hơi?",
        question: "Bộ phận cơ thể quan trọng nhất để lấy hơi sâu khi nói tiếng Anh là gì?",
        options: ["Diaphragm (Cơ hoành)", "Fingers (Ngón tay)", "Knees (Đầu gối)", "Ears (Tai)"],
        answer: "Diaphragm (Cơ hoành)",
        explanationVi: "'Diaphragm' là cơ hoành, giúp lấy hơi thở bụng sâu và vang khi nói tiếng Anh."
      }
    ]
  },

  // ==========================================
  // LEVEL A1-A2 THÊM MỚI (4 PHIM)
  // ==========================================
  {
    id: "zootopia",
    title: "Zootopia",
    titleVi: "Phi Vụ Động Trời",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản - Giao tiếp hàng ngày",
    year: 2016,
    genre: ["Hoạt hình", "Hài hước", "Phiêu lưu", "Trinh thám"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.0 IMDb",
    durationOrSeasons: "1 giờ 48 phút",
    bannerGradient: "from-emerald-600 via-teal-700 to-indigo-800",
    icon: "🦊",
    tagline: "In Zootopia, anyone can be anything.",
    summaryVi: "Tại thành phố động vật hiện đại Zootopia, cô thỏ Judy Hopps quyết tâm chứng minh năng lực cảnh sát cùng chú cáo tinh ranh Nick Wilde phá giải vụ án mất tích bí ẩn.",
    whyLearn: "Ngôn từ chuẩn Mỹ, đàm thoại sinh hoạt tươi vui, các mẫu câu giao tiếp cơ bản và phát âm cực kỳ chuẩn xác, dễ bắt tai.",
    watchingTip: "Hãy xem phân đoạn chú lười Flash ở Cục Đăng kiểm xe để luyện nghe ngắt nhịp và sự hài hước trong đối đáp.",
    keyVocabularies: [
      {
        word: "Hustle",
        phonetic: "/ˈhʌs.əl/",
        meaningVi: "Lươn lẹo, mưu sinh xoay xở (hoặc hối hả)",
        exampleSentence: "It's called a hustle, sweetheart.",
        exampleVi: "Đó gọi là nghệ thuật kiếm sống xoay xở đấy, cưng à."
      },
      {
        word: "Prejudice",
        phonetic: "/ˈpredʒ.ə.dɪs/",
        meaningVi: "Định kiến, thành kiến",
        exampleSentence: "Real life is messy. We all have prejudices.",
        exampleVi: "Đời thực thì hỗn độn. Ai trong chúng ta cũng có những định kiến."
      },
      {
        word: "Rookie",
        phonetic: "/ˈrʊk.i/",
        meaningVi: "Tân binh, người mới vào nghề",
        exampleSentence: "You're just a little meter maid rookie!",
        exampleVi: "Cô chỉ là một tân binh cảnh sát ghi vé phạt đỗ xe thôi!"
      },
      {
        word: "Sly",
        phonetic: "/slaɪ/",
        meaningVi: "Ranh mãnh, khôn lỏi",
        exampleSentence: "Sly fox, dumb bunny.",
        exampleVi: "Cáo ranh mãnh, thỏ ngốc nghếch."
      }
    ],
    iconicQuotes: [
      {
        character: "Judy Hopps",
        en: "Life's a little bit messy. We all make mistakes.",
        vi: "Cuộc sống có chút lộn xộn. Tất cả chúng ta ai cũng phạm sai lầm.",
        explanationVi: "Động viên tinh thần tích cực, cấu trúc 'make mistakes' rất phổ biến."
      },
      {
        character: "Nick Wilde",
        en: "Never let them see that they get to you.",
        vi: "Đừng bao giờ để họ thấy rằng họ có thể làm tổn thương bạn.",
        explanationVi: "Thành ngữ 'get to someone' mang nghĩa làm ai đó lung lay, buồn bã."
      }
    ],
    quiz: [
      {
        id: "zoo_1",
        dialogueContext: "Khi Judy Hopps động viên muôn loài trong ngày lễ tốt nghiệp, cô đã dùng từ nào để nói rằng ai cũng có thể làm bất cứ điều gì?",
        question: "Điền vào chỗ trống: In Zootopia, anyone can be _______.",
        options: ["anything", "nothing", "nowhere", "anytime"],
        answer: "anything",
        explanationVi: "'Anyone can be anything' là thông điệp chủ đạo của bộ phim Zootopia."
      }
    ]
  },

  {
    id: "lion-king",
    title: "The Lion King",
    titleVi: "Vua Sư Tử",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản - Cổ điển truyền cảm",
    year: 1994,
    genre: ["Hoạt hình", "Gia đình", "Phiêu lưu", "Âm nhạc"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.5 IMDb",
    durationOrSeasons: "1 giờ 28 phút",
    bannerGradient: "from-amber-600 via-orange-600 to-rose-700",
    icon: "🦁",
    tagline: "The Circle of Life.",
    summaryVi: "Cuộc hành trình trưởng thành đầy thử thách và bài học trách nhiệm của chú sư tử Simba sau biến cố gia đình để giành lại ngai vàng Pride Rock.",
    whyLearn: "Câu từ ngắn gọn, giàu hình ảnh, phát âm rõ từng âm tiết, giọng lồng tiếng truyền cảm hàng đầu thế giới phim ảnh.",
    watchingTip: "Luyện hát theo bài hát 'Hakuna Matata' để tập phản xạ nối âm tự nhiên và ghi nhớ cụm từ giảm stress.",
    keyVocabularies: [
      {
        word: "Kingdom",
        phonetic: "/ˈkɪŋ.dəm/",
        meaningVi: "Vương quốc",
        exampleSentence: "Everything the light touches is our kingdom.",
        exampleVi: "Mọi nơi mà ánh sáng chạm tới đều là vương quốc của chúng ta."
      },
      {
        word: "Destiny",
        phonetic: "/ˈdes.tɪ.ni/",
        meaningVi: "Định mệnh, vận mệnh",
        exampleSentence: "Remember who you are. You must take your place in destiny.",
        exampleVi: "Hãy nhớ con là ai. Con phải nhận lấy vị trí của mình trong định mệnh."
      },
      {
        word: "Courage",
        phonetic: "/ˈkʌr.ɪdʒ/",
        meaningVi: "Lòng dũng cảm",
        exampleSentence: "Courage doesn't mean looking for trouble.",
        exampleVi: "Lòng dũng cảm không có nghĩa là đi tìm kiếm rắc rối."
      }
    ],
    iconicQuotes: [
      {
        character: "Rafiki",
        en: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
        vi: "Quá khứ có thể đau đớn. Nhưng theo cách ta nhìn nhận, con có thể trốn chạy khỏi nó hoặc học hỏi từ nó.",
        explanationVi: "Cấu trúc 'either... or...' (hoặc cái này... hoặc cái kia...) cực kỳ chuẩn ngữ pháp."
      }
    ],
    quiz: [
      {
        id: "lk_1",
        dialogueContext: "Rafiki khuyên Simba về cách đối diện với quá khứ:",
        question: "Simba có thể lựa chọn điều gì: 'You can either run from it or _______ from it'?",
        options: ["learn", "sleep", "buy", "jump"],
        answer: "learn",
        explanationVi: "'Learn from it' - học hỏi từ những vấp ngã quá khứ."
      }
    ]
  },

  {
    id: "toy-story",
    title: "Toy Story",
    titleVi: "Câu Chuyện Đồ Chơi",
    type: "animation",
    level: "A1-A2",
    levelLabel: "Cơ bản - Tình bạn & Phiêu lưu",
    year: 1995,
    genre: ["Hoạt hình", "Phiêu lưu", "Gia đình", "Hài hước"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.3 IMDb",
    durationOrSeasons: "1 giờ 21 phút",
    bannerGradient: "from-sky-600 via-blue-600 to-indigo-800",
    icon: "🤠",
    tagline: "To infinity and beyond!",
    summaryVi: "Thế giới bí mật của những món đồ chơi biết cử động khi con người vắng mặt, xoay quanh tình bạn diệu kỳ giữa Woody và phi hành gia Buzz Lightyear.",
    whyLearn: "Hội thoại đời sống hằng ngày, từ vựng đồ chơi và cảm xúc tự nhiên, phát âm của Tom Hanks cực kỳ rõ ràng.",
    watchingTip: "Nghe các màn tranh luận dí dỏm giữa Woody và Buzz để học cách dùng ngữ điệu nhấn mạnh trong tiếng Anh.",
    keyVocabularies: [
      {
        word: "Infinity",
        phonetic: "/ɪnˈfɪn.ə.ti/",
        meaningVi: "Sự vô cực, vô tận",
        exampleSentence: "To infinity and beyond!",
        exampleVi: "Vươn tới vô cực và xa hơn nữa!"
      },
      {
        word: "Jealous",
        phonetic: "/ˈdʒel.əs/",
        meaningVi: "Ghen tị, đố kỵ",
        exampleSentence: "Woody was jealous of the new space ranger toy.",
        exampleVi: "Woody từng ghen tị với món đồ chơi cảnh sát không gian mới."
      },
      {
        word: "Loyal",
        phonetic: "/ˈlɔɪ.əl/",
        meaningVi: "Trung thành, hết lòng",
        exampleSentence: "A dog is loyal, and so is a good toy.",
        exampleVi: "Chú chó luôn trung thành, và một món đồ chơi tốt cũng vậy."
      }
    ],
    iconicQuotes: [
      {
        character: "Buzz Lightyear",
        en: "This isn't flying, this is falling with style!",
        vi: "Đây không phải bay lượn, đây là rơi xuống với một phong cách đỉnh cao!",
        explanationVi: "Cách dùng từ 'with style' để tạo ấn tượng phong thái độc đáo."
      }
    ],
    quiz: [
      {
        id: "ts_1",
        dialogueContext: "Câu khẩu hiệu huyền thoại của Buzz Lightyear mỗi khi chuẩn bị bay là gì?",
        question: "To infinity and _______!",
        options: ["beyond", "behind", "below", "between"],
        answer: "beyond",
        explanationVi: "'Beyond' nghĩa là xa hơn, vượt ra ngoài giới hạn."
      }
    ]
  },

  {
    id: "modern-family",
    title: "Modern Family",
    titleVi: "Gia Đình Hiện Đại",
    type: "live_action",
    level: "A1-A2",
    levelLabel: "Cơ bản - Đàm thoại gia đình Mỹ",
    year: 2009,
    genre: ["Sitcom", "Hài kịch", "Gia đình"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.5 IMDb",
    durationOrSeasons: "11 Mùa",
    bannerGradient: "from-teal-600 via-emerald-600 to-sky-700",
    icon: "🏡",
    tagline: "One big (crazy) family.",
    summaryVi: "Bộ phim hài gia đình Mỹ số 1 thế giới kể về ba nhánh gia đình đa thế hệ với những câu chuyện thường nhật cười ra nước mắt nhưng tràn đầy tình thương.",
    whyLearn: "100% ngữ cảnh sinh hoạt đời thực tại Mỹ: gọi món, đưa con đi học, trò chuyện với bạn đời, sử dụng tiếng lóng thông dụng.",
    watchingTip: "Chú ý lắng nghe lời thoại của cô Gloria (nói tiếng Anh có âm hưởng Latin) để luyện khả năng nghe đa dạng phát âm.",
    keyVocabularies: [
      {
        word: "Embarrass",
        phonetic: "/ɪmˈbær.əs/",
        meaningVi: "Làm bối rối, ngượng ngùng",
        exampleSentence: "Parents always embarrass their teenagers.",
        exampleVi: "Bố mẹ lúc nào cũng làm mấy đứa con tuổi teen thấy ngượng chín mặt."
      },
      {
        word: "Hilarious",
        phonetic: "/hɪˈleə.ri.əs/",
        meaningVi: "Cực kỳ buồn cười, hài hước",
        exampleSentence: "Phil thought his dad jokes were hilarious.",
        exampleVi: "Phil luôn nghĩ mấy trò đùa kiểu bố của mình là siêu buồn cười."
      }
    ],
    iconicQuotes: [
      {
        character: "Phil Dunphy",
        en: "I'm a cool dad, that's my thing. I'm hip, I surf the web, I text.",
        vi: "Bố là một ông bố sành điệu, đó là thương hiệu của bố. Bố hợp thời, lướt mạng, nhắn tin nhoay nhoáy.",
        explanationVi: "Cụm 'that's my thing' nghĩa là sở trường hoặc điểm nhận diện cá nhân của tôi."
      }
    ],
    quiz: [
      {
        id: "mf_1",
        dialogueContext: "Phil Dunphy tự nhận mình là người như thế nào trước mặt các con?",
        question: "Phil Dunphy tự xưng là một '_______ dad'?",
        options: ["cool", "angry", "boring", "scary"],
        answer: "cool",
        explanationVi: "Phil luôn cố gắng chứng minh mình là một 'cool dad'."
      }
    ]
  },

  // ==========================================
  // LEVEL B1-B2 THÊM MỚI (4 PHIM)
  // ==========================================
  {
    id: "how-i-met-your-mother",
    title: "How I Met Your Mother",
    titleVi: "Khi Bố Gặp Mẹ",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp - Giao tiếp thanh niên Mỹ",
    year: 2005,
    genre: ["Sitcom", "Hài hước", "Lãng mạn"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.3 IMDb",
    durationOrSeasons: "9 Mùa",
    bannerGradient: "from-blue-600 via-indigo-600 to-violet-800",
    icon: "☂️",
    tagline: "Suit up!",
    summaryVi: "Ted Mosby kể lại cho hai người con về hành trình tìm kiếm tình yêu đích thực cùng nhóm bạn thân tại thành phố New York sôi động.",
    whyLearn: "Kho tàng từ lóng Mỹ (slang), cách thả thính, cách đùa cợt thông minh và diễn đạt cảm xúc tình bạn chân thành.",
    watchingTip: "Ghi nhớ các câu nói nổi tiếng của Barney Stinson để nắm bắt cấu trúc cường điệu hóm hỉnh trong văn hóa Mỹ.",
    keyVocabularies: [
      {
        word: "Legendary",
        phonetic: "/ˈledʒ.ən.dri/",
        meaningVi: "Huyền thoại, tuyệt vời xuất sắc",
        exampleSentence: "Tonight is going to be legendary!",
        exampleVi: "Tối nay nhất định sẽ trở thành huyền thoại!"
      },
      {
        word: "Commitment",
        phonetic: "/kəˈmɪt.mənt/",
        meaningVi: "Sự cam kết, gắn bó lâu dài",
        exampleSentence: "Barney was afraid of emotional commitment.",
        exampleVi: "Barney từng rất sợ sự cam kết tình cảm gắn bó lâu dài."
      },
      {
        word: "Destiny",
        phonetic: "/ˈdes.tɪ.ni/",
        meaningVi: "Số phận, định mệnh",
        exampleSentence: "Ted believed in signs and destiny.",
        exampleVi: "Ted luôn tin vào những dấu hiệu chỉ đường và số phận."
      }
    ],
    iconicQuotes: [
      {
        character: "Barney Stinson",
        en: "Whatever you do in this life, it's not legendary unless your friends are there to see it.",
        vi: "Bất kể cậu làm gì trên đời này, nó cũng chẳng thành huyền thoại nếu không có những người bạn ở đó chứng kiến.",
        explanationVi: "Cấu trúc 'unless' (trừ khi) diễn đạt điều kiện một cách sâu sắc."
      }
    ],
    quiz: [
      {
        id: "himym_1",
        dialogueContext: "Khẩu hiệu ruột của Barney Stinson khi rủ Ted ra ngoài là gì?",
        question: "Suit _______!",
        options: ["up", "down", "out", "off"],
        answer: "up",
        explanationVi: "'Suit up' nghĩa là hãy mặc vest bảnh bao vào!"
      }
    ]
  },

  {
    id: "the-big-bang-theory",
    title: "The Big Bang Theory",
    titleVi: "Vụ Nổ Lớn",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp - Khoa học & Hài hước",
    year: 2007,
    genre: ["Sitcom", "Khoa học", "Hài kịch"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.2 IMDb",
    durationOrSeasons: "12 Mùa",
    bannerGradient: "from-indigo-600 via-purple-700 to-pink-700",
    icon: "⚛️",
    tagline: "Smart is the new sexy.",
    summaryVi: "Cuộc sống hài hước của nhóm 4 nhà vật lý thiên tài vụng về giao tiếp và cô hàng xóm bốc lửa Penny đam mê diễn xuất.",
    whyLearn: "Học từ vựng khoa học công nghệ kết hợp với đối thoại phản xạ nhanh, lối nói châm biếm sâu cay và phản xạ tranh luận.",
    watchingTip: "Luyện nghe tốc độ nói nhanh và chính xác của Sheldon Cooper để nâng cao khả năng bám đuổi âm thanh.",
    keyVocabularies: [
      {
        word: "Sarcasm",
        phonetic: "/ˈsɑː.kæz.əm/",
        meaningVi: "Sự châm biếm, mỉa mai",
        exampleSentence: "Is that sarcasm? I need a sarcasm sign.",
        exampleVi: "Đó là mỉa mai đấy à? Tôi cần một tấm biển báo mỉa mai mới hiểu được."
      },
      {
        word: "Consistency",
        phonetic: "/kənˈsɪs.tən.si/",
        meaningVi: "Tính nhất quán, kiên định",
        exampleSentence: "My spot represents a point of consistency in this universe.",
        exampleVi: "Chỗ ngồi của tôi đại diện cho một điểm nhất quán trong vũ trụ này."
      }
    ],
    iconicQuotes: [
      {
        character: "Sheldon Cooper",
        en: "Bazinga! You've fallen victim to another of my classic practical jokes.",
        vi: "Bazinga! Cậu lại sập bẫy trong một trò đùa kinh điển khác của tôi rồi.",
        explanationVi: "'Fall victim to' là cụm từ rất hay gặp trong văn viết và giao tiếp nâng cao."
      }
    ],
    quiz: [
      {
        id: "tbbt_1",
        dialogueContext: "Từ cửa miệng nổi tiếng nhất của Sheldon Cooper sau khi trêu đùa ai đó thành công là gì?",
        question: "Từ biểu tượng của Sheldon là gì?",
        options: ["Bazinga!", "Bingo!", "Bravo!", "Boom!"],
        answer: "Bazinga!",
        explanationVi: "'Bazinga' là thương hiệu hài hước độc quyền của Sheldon Cooper."
      }
    ]
  },

  {
    id: "the-intern",
    title: "The Intern",
    titleVi: "Bố Già Học Việc",
    type: "live_action",
    level: "B1-B2",
    levelLabel: "Trung cấp - Tiếng Anh công sở & Khởi nghiệp",
    year: 2015,
    genre: ["Hài kịch", "Công sở", "Chính kịch"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 7.1 IMDb",
    durationOrSeasons: "2 giờ 1 phút",
    bannerGradient: "from-slate-700 via-sky-800 to-indigo-900",
    icon: "💼",
    tagline: "Experience never gets old.",
    summaryVi: "Ben Whittaker - một cụ ông 70 tuổi góa vợ quyết định thử sức làm thực tập sinh cao tuổi tại công ty khởi nghiệp thời trang của nữ CEO Jules Ostin.",
    whyLearn: "Cực kỳ lý tưởng cho người đi làm: học cách giao tiếp văn minh lịch thiệp nơi công sở, viết email, đàm phán và lắng nghe thấu cảm.",
    watchingTip: "Lắng nghe cách Robert De Niro phát âm ấm áp, từ tốn để học phong thái quý ông khi đàm thoại tiếng Anh.",
    keyVocabularies: [
      {
        word: "Entrepreneur",
        phonetic: "/ˌɒn.trə.prəˈnɜːr/",
        meaningVi: "Doanh nhân, nhà khởi nghiệp",
        exampleSentence: "Jules was a hardworking and visionary entrepreneur.",
        exampleVi: "Jules là một nữ doanh nhân khởi nghiệp chăm chỉ và có tầm nhìn xa."
      },
      {
        word: "Insight",
        phonetic: "/ˈɪn.saɪt/",
        meaningVi: "Góc nhìn sâu sắc, sự thấu hiểu",
        exampleSentence: "Ben provided valuable insights to the young team.",
        exampleVi: "Ben đã mang đến những góc nhìn sâu sắc quý báu cho đội ngũ trẻ."
      },
      {
        word: "Retirement",
        phonetic: "/rɪˈtaɪə.mənt/",
        meaningVi: "Sự nghỉ hưu",
        exampleSentence: "Retirement was not satisfying for someone who loved staying active.",
        exampleVi: "Việc nghỉ hưu chẳng hề thỏa mãn đối với một người thích năng động."
      }
    ],
    iconicQuotes: [
      {
        character: "Ben Whittaker",
        en: "You're never wrong to do the right thing.",
        vi: "Bạn không bao giờ sai khi làm điều đúng đắn.",
        explanationVi: "Chân lý sống giản dị của văn hóa phương Tây, cấu trúc câu ngắn gọn đắt giá."
      }
    ],
    quiz: [
      {
        id: "intern_1",
        dialogueContext: "Thông điệp chính trên poster phim The Intern là gì?",
        question: "Experience never gets _______.",
        options: ["old", "tired", "cheap", "bad"],
        answer: "old",
        explanationVi: "'Experience never gets old' - Kinh nghiệm không bao giờ lỗi thời."
      }
    ]
  },

  {
    id: "soul",
    title: "Soul",
    titleVi: "Cuộc Sống Nhiệm Màu",
    type: "animation",
    level: "B1-B2",
    levelLabel: "Trung cấp - Triết lý & Cảm xúc",
    year: 2020,
    genre: ["Hoạt hình", "Âm nhạc", "Triết lý", "Hài hước"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.0 IMDb",
    durationOrSeasons: "1 giờ 40 phút",
    bannerGradient: "from-cyan-600 via-blue-700 to-indigo-900",
    icon: "🎹",
    tagline: "Is all this living really worth dying for?",
    summaryVi: "Joe Gardner - một nghệ sĩ dương cầm jazz suýt chạm tới ước mơ thì gặp tai nạn, linh hồn anh lưu lạc đến cõi Trước và gặp gỡ linh hồn bướng bỉnh 22.",
    whyLearn: "Từ vựng về âm nhạc jazz, tâm lý học, mục đích cuộc đời, đàm thoại giàu chiều sâu cảm xúc và phát âm cực kỳ biểu cảm.",
    watchingTip: "Lắng nghe đoạn đối thoại về việc ngắm lá rơi và ăn bánh pizza để cảm nhận từ ngữ miêu tả giác quan.",
    keyVocabularies: [
      {
        word: "Passion",
        phonetic: "/ˈpæʃ.ən/",
        meaningVi: "Niềm đam mê cháy bỏng",
        exampleSentence: "Music is not just my hobby, it's my passion.",
        exampleVi: "Âm nhạc không chỉ là sở thích, nó là niềm đam mê cháy bỏng của đời tôi."
      },
      {
        word: "Obsession",
        phonetic: "/əbˈseʃ.ən/",
        meaningVi: "Sự ám ảnh, cuồng si",
        exampleSentence: "A passion can easily turn into an obsession if you are not careful.",
        exampleVi: "Đam mê có thể dễ dàng biến thành nỗi ám ảnh nếu bạn không cẩn thận."
      }
    ],
    iconicQuotes: [
      {
        character: "Joe Gardner",
        en: "I'm going to live every minute of it.",
        vi: "Tôi sẽ sống trọn vẹn từng phút giây của cuộc đời này.",
        explanationVi: "Cấu trúc thì tương lai gần 'be going to' thể hiện quyết tâm mãnh liệt."
      }
    ],
    quiz: [
      {
        id: "soul_1",
        dialogueContext: "Trong thế giới linh hồn của Pixar Soul, thứ giúp một linh hồn sẵn sàng xuống Trái Đất sống được gọi là gì?",
        question: "Cái gì giúp linh hồn có giấy thông hành xuống Trái Đất?",
        options: ["A Spark (Tia sáng)", "A Ticket (Tấm vé)", "A Key (Chìa khóa)", "A Coin (Đồng xu)"],
        answer: "A Spark (Tia sáng)",
        explanationVi: "'Spark' - tia sáng niềm vui sống trong Soul."
      }
    ]
  },

  // ==========================================
  // LEVEL C1-C2 THÊM MỚI (4 PHIM)
  // ==========================================
  {
    id: "the-crown",
    title: "The Crown",
    titleVi: "Hoàng Quyền",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao - Hoàng gia Anh chuẩn mực (RP)",
    year: 2016,
    genre: ["Chính kịch", "Lịch sử", "Hoàng gia"],
    accent: "Anh - Anh (UK)",
    rating: "★ 8.6 IMDb",
    durationOrSeasons: "6 Mùa",
    bannerGradient: "from-amber-700 via-rose-900 to-slate-900",
    icon: "👑",
    tagline: "Duty calls.",
    summaryVi: "Biên niên sử tái hiện cuộc đời và triều đại lịch sử của Nữ hoàng Elizabeth II từ hôn lễ năm 1947 qua các biến động chính trị và khủng hoảng thế kỷ.",
    whyLearn: "Chuẩn mực phát âm Hoàng gia Anh (Received Pronunciation - Queen's English), từ vựng ngoại giao, hiến pháp, chính trị cấp cao sắc sảo.",
    watchingTip: "Quan sát khẩu hình miệng và âm điệu trang nghiêm của các diễn viên đóng vai Hoàng gia để luyện phát âm sang trọng.",
    keyVocabularies: [
      {
        word: "Sovereignty",
        phonetic: "/ˈsɒv.rɪn.ti/",
        meaningVi: "Chủ quyền tối cao",
        exampleSentence: "The monarchy represents national unity and constitutional sovereignty.",
        exampleVi: "Chế độ quân chủ đại diện cho sự thống nhất dân tộc và chủ quyền hiến pháp tối cao."
      },
      {
        word: "Relinquish",
        phonetic: "/rɪˈlɪŋ.kwɪʃ/",
        meaningVi: "Từ bỏ, buông bỏ (quyền lực, nghĩa vụ)",
        exampleSentence: "One cannot easily relinquish one's royal responsibilities.",
        exampleVi: "Người ta không thể dễ dàng từ bỏ những trọng trách hoàng gia của mình."
      },
      {
        word: "Abnegation",
        phonetic: "/ˌæb.nɪˈɡeɪ.ʃən/",
        meaningVi: "Sự quên mình, hy sinh bản ngã vì bổn phận",
        exampleSentence: "Monarchy requires continuous self-abnegation.",
        exampleVi: "Hoàng quyền đòi hỏi sự quên mình hy sinh liên tục vì đại cuộc."
      }
    ],
    iconicQuotes: [
      {
        character: "Queen Mary",
        en: "The crown must win. Must always win.",
        vi: "Vương quyền phải chiến thắng. Luôn luôn phải chiến thắng.",
        explanationVi: "Nhấn mạnh vào bổn phận thể chế cao hơn mọi cảm xúc và tham vọng cá nhân."
      }
    ],
    quiz: [
      {
        id: "crown_1",
        dialogueContext: "Lời dặn dò tâm huyết của Nữ hoàng Mary gửi gắm cho cháu gái Elizabeth khi thừa kế ngai vàng:",
        question: "The crown must _______!",
        options: ["win", "lose", "fall", "sleep"],
        answer: "win",
        explanationVi: "'The crown must win' - Vương miện luôn luôn phải chiến thắng."
      }
    ]
  },

  {
    id: "oppenheimer",
    title: "Oppenheimer",
    titleVi: "Oppenheimer",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao - Học thuật & Lịch sử chính trị",
    year: 2023,
    genre: ["Tiểu sử", "Chính kịch", "Lịch sử", "Khoa học"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.9 IMDb",
    durationOrSeasons: "3 giờ 0 phút",
    bannerGradient: "from-orange-700 via-stone-800 to-black",
    icon: "💥",
    tagline: "The world forever changes.",
    summaryVi: "Bộ phim kiệt tác của đạo diễn Christopher Nolan thuật lại cuộc đời nhà vật lý J. Robert Oppenheimer - cha đẻ của bom nguyên tử trong Dự án Manhattan.",
    whyLearn: "Vốn từ vựng vật lý lý thuyết, thuật ngữ quân sự, các màn thẩm vấn pháp lý nghẹt thở với cấu trúc câu phức tạp và hùng biện xuất sắc.",
    watchingTip: "Chú ý vào tốc độ và ngữ điệu của các phiên điều trần nội bộ để học cách phản biện sắc sảo dưới áp lực.",
    keyVocabularies: [
      {
        word: "Fission",
        phonetic: "/ˈfɪʃ.ən/",
        meaningVi: "Phân hạch hạt nhân",
        exampleSentence: "Nuclear fission releases an unimaginable amount of energy.",
        exampleVi: "Phân hạch hạt nhân giải phóng một lượng năng lượng ngoài sức tưởng tượng."
      },
      {
        word: "Paradox",
        phonetic: "/ˈpær.ə.dɒks/",
        meaningVi: "Nghịch lý",
        exampleSentence: "It is a profound paradox that creating a superweapon might bring peace.",
        exampleVi: "Đó là một nghịch lý sâu sắc khi việc tạo ra siêu vũ khí lại có thể mang lại hòa bình."
      },
      {
        word: "Accountability",
        phonetic: "/əˌkaʊn.təˈbɪl.ə.ti/",
        meaningVi: "Trách nhiệm giải trình",
        exampleSentence: "Scientists cannot escape moral accountability for their discoveries.",
        exampleVi: "Các nhà khoa học không thể trốn tránh trách nhiệm giải trình đạo đức cho các phát minh của mình."
      }
    ],
    iconicQuotes: [
      {
        character: "J. Robert Oppenheimer",
        en: "Now I am become Death, the destroyer of worlds.",
        vi: "Giờ đây tôi đã trở thành Thần Chết, kẻ hủy diệt các thế giới.",
        explanationVi: "Trích dẫn kinh điển từ tác phẩm Bhagavad Gita mô tả sức tàn phá khủng khiếp."
      }
    ],
    quiz: [
      {
        id: "opp_1",
        dialogueContext: "Câu trích dẫn nổi tiếng của Oppenheimer sau khi chứng kiến vụ thử hạt nhân Trinity thành công:",
        question: "Now I am become Death, the destroyer of _______.",
        options: ["worlds", "stars", "ships", "cities"],
        answer: "worlds",
        explanationVi: "'Destroyer of worlds' - kẻ hủy diệt các thế giới."
      }
    ]
  },

  {
    id: "inception",
    title: "Inception",
    titleVi: "Kẻ Đánh Cắp Giấc Mơ",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao - Trí tuệ & Logic đa tầng",
    year: 2010,
    genre: ["Khoa học viễn tưởng", "Hành động", "Tâm lý"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.8 IMDb",
    durationOrSeasons: "2 giờ 28 phút",
    bannerGradient: "from-slate-800 via-indigo-950 to-blue-900",
    icon: "🌀",
    tagline: "Your mind is the scene of the crime.",
    summaryVi: "Dom Cobb là một đạo chích bậc thầy chuyên đánh cắp các bí mật trong tiềm thức khi đối tượng đang mơ. Anh nhận nhiệm vụ cấy ghép một ý niệm vào tâm trí người khác để đổi lấy tự do.",
    whyLearn: "Ngôn ngữ kiến trúc tâm trí, logic giả tưởng phức tạp, đối thoại diễn ra với tốc độ rất nhanh với vốn từ vựng phong phú.",
    watchingTip: "Lắng nghe cách Cobb giải thích về các tầng giấc mơ (subconscious, totem, limbo) để nắm bắt cách dùng từ chuyên sâu.",
    keyVocabularies: [
      {
        word: "Subconscious",
        phonetic: "/ˌsʌbˈkɒn.ʃəs/",
        meaningVi: "Tiềm thức, tầng vô thức",
        exampleSentence: "Your subconscious defends itself against intruders.",
        exampleVi: "Tiềm thức của bạn sẽ tự động phòng vệ chống lại những kẻ xâm nhập."
      },
      {
        word: "Resilient",
        phonetic: "/rɪˈzɪl.jənt/",
        meaningVi: "Kiên cường, bền bỉ, dẻo dai",
        exampleSentence: "An idea is resilient and extremely hard to eradicate.",
        exampleVi: "Một ý niệm vô cùng kiên cường và cực kỳ khó để xóa bỏ tận gốc."
      },
      {
        word: "Catharsis",
        phonetic: "/kəˈθɑː.sɪs/",
        meaningVi: "Sự giải tỏa cảm xúc, thanh lọc tâm hồn",
        exampleSentence: "True inspiration requires emotional catharsis.",
        exampleVi: "Cảm hứng đích thực đòi hỏi sự giải tỏa cảm xúc sâu sắc."
      }
    ],
    iconicQuotes: [
      {
        character: "Cobb",
        en: "An idea is like a virus. Resilient, highly contagious.",
        vi: "Một ý niệm tựa như loài virus. Kiên cường và có tính lây lan cực cao.",
        explanationVi: "Cách so sánh ví von ẩn dụ đặc sắc trong tiếng Anh văn chương hiện đại."
      }
    ],
    quiz: [
      {
        id: "inc_1",
        dialogueContext: "Cobb so sánh một ý niệm (an idea) giống như sinh vật nào vì sức sống kiên cường và khả năng lây lan?",
        question: "An idea is like a _______.",
        options: ["virus", "bird", "tree", "river"],
        answer: "virus",
        explanationVi: "Cobb giải thích: 'An idea is like a virus'."
      }
    ]
  },

  {
    id: "house-of-cards",
    title: "House of Cards",
    titleVi: "Lâu Đài Thẻ Bài",
    type: "live_action",
    level: "C1-C2",
    levelLabel: "Nâng cao - Chính trị & Hùng biện thuyết phục",
    year: 2013,
    genre: ["Chính trị", "Tâm lý", "Kịch tính"],
    accent: "Anh - Mỹ (US)",
    rating: "★ 8.6 IMDb",
    durationOrSeasons: "6 Mùa",
    bannerGradient: "from-stone-900 via-neutral-800 to-red-950",
    icon: "🏛️",
    tagline: "Bad, for a greater good.",
    summaryVi: "Frank Underwood - nghị sĩ đảng Dân chủ mưu mô cùng người vợ tham vọng Claire vạch ra chiến lược thao túng quyền lực tàn nhẫn để thâu tóm Nhà Trắng.",
    whyLearn: "Bậc thầy đàm phán, ngôn từ sắc bén như dao mổ, các thủ pháp tu từ tiếng Anh đỉnh cao trong diễn thuyết và thuyết phục.",
    watchingTip: "Lắng nghe các phân đoạn Frank quay về phía ống kính nói độc thoại để học cách chọn từ có sức nặng và ngữ điệu dứt khoát.",
    keyVocabularies: [
      {
        word: "Ruthless",
        phonetic: "/ˈruːθ.ləs/",
        meaningVi: "Tàn nhẫn, không khoan nhượng",
        exampleSentence: "In politics, sometimes you have to be pragmatic and ruthless.",
        exampleVi: "Trong chính trị, đôi khi bạn buộc phải thực dụng và không khoan nhượng."
      },
      {
        word: "Pragmatism",
        phonetic: "/ˈpræɡ.mə.tɪ.zəm/",
        meaningVi: "Chủ nghĩa thực dụng",
        exampleSentence: "Ideology comes second to practical political pragmatism.",
        exampleVi: "Hệ tư tưởng luôn đứng sau chủ nghĩa thực dụng chính trị thực tế."
      },
      {
        word: "Leverage",
        phonetic: "/ˈliː.vər.ɪdʒ/",
        meaningVi: "Đòn bẩy, lợi thế đàm phán",
        exampleSentence: "Always look for the leverage that will make your opponent yield.",
        exampleVi: "Hãy luôn tìm kiếm đòn bẩy buộc đối thủ phải nhượng bộ."
      }
    ],
    iconicQuotes: [
      {
        character: "Frank Underwood",
        en: "Power is a lot like real estate. It's all about location, location, location.",
        vi: "Quyền lực cũng giống hệt như bất động sản vậy. Tất cả nằm ở vị trí, vị trí và vị trí.",
        explanationVi: "Thủ pháp lặp từ nhấn mạnh tính quyết định của vị thế quyền lực."
      }
    ],
    quiz: [
      {
        id: "hoc_1",
        dialogueContext: "Frank Underwood nói về 2 loại nỗi đau trong đời người:",
        question: "Có loại nỗi đau tôi luyện con người ta và loại thứ hai là '_______ pain'?",
        options: ["useless (vô dụng)", "happy (vui vẻ)", "expensive (đắt đỏ)", "sweet (ngọt ngào)"],
        answer: "useless (vô dụng)",
        explanationVi: "Frank phân biệt: 'The sort of pain that makes you strong, or useless pain'."
      }
    ]
  }
];

export const filmsData: FilmItem[] = rawFilmsData.map(f => ({
  ...f,
  episodes: filmEpisodesMap[f.id] || []
}));


