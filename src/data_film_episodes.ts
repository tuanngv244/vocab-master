export interface FilmTimestamp {
  time: number; // giây
  label: string;
  en: string;
  vi: string;
}

export interface FilmEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  titleVi: string;
  duration: string;
  durationSeconds: number;
  descriptionVi: string;
  videoUrl: string;
  youtubeId: string;
  timestamps: FilmTimestamp[];
}

export const filmEpisodesMap: Record<string, FilmEpisode[]> = {
  // 1. Finding Nemo (Đi Tìm Nemo)
  "finding-nemo": [
    {
      id: "fn-ep1",
      episodeNumber: 1,
      title: "Act 1: First Day of School & Nemo Taken",
      titleVi: "Phân đoạn 1: Ngày đầu đến trường & Nemo bị bắt",
      duration: "03:45",
      durationSeconds: 225,
      descriptionVi: "Nemo háo hức trong ngày đầu đến trường nhưng bị bố Marlin bảo bọc quá mức. Trong lúc bồng bột, Nemo bơi ra khỏi rạn san hô và bị thợ lặn bắt mất.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "y9FGsJ3PYVw",
      timestamps: [
        { time: 10, label: "00:10", en: "First day of school! Wake up, Dad!", vi: "Ngày đầu đến trường rồi! Dậy đi bố ơi!" },
        { time: 45, label: "00:45", en: "I promise I will never let anything happen to you.", vi: "Bố hứa sẽ không bao giờ để bất cứ điều gì xảy ra với con." },
        { time: 90, label: "01:30", en: "When life gets you down, you know what you gotta do? Just keep swimming!", vi: "Khi cuộc đời làm bạn chán nản, bạn biết phải làm gì không? Cứ tiếp tục bơi đi!" }
      ]
    },
    {
      id: "fn-ep2",
      episodeNumber: 2,
      title: "Act 2: Meeting Dory & Vegetarian Sharks",
      titleVi: "Phân đoạn 2: Cuộc gặp gỡ Dory & Bầy cá mập ăn chay",
      duration: "04:15",
      durationSeconds: 255,
      descriptionVi: "Marlin tuyệt vọng đuổi theo chiếc thuyền và tình cờ đụng độ cô cá Dory hay quên, sau đó cả hai lạc vào căn cứ tàu ngầm của những chú cá mập ăn chay.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      youtubeId: "y9FGsJ3PYVw",
      timestamps: [
        { time: 15, label: "00:15", en: "I suffer from short-term memory loss. It runs in my family.", vi: "Tôi mắc chứng mất trí nhớ ngắn hạn. Đó là do di truyền đấy." },
        { time: 60, label: "01:00", en: "Fish are friends, not food!", vi: "Cá là bạn bè, không phải thức ăn!" }
      ]
    },
    {
      id: "fn-ep3",
      episodeNumber: 3,
      title: "Act 3: Escape from Sydney Harbor & Reunion",
      titleVi: "Phân đoạn 3: Cuộc tẩu thoát tại cảng Sydney & Đoàn tụ gia đình",
      duration: "05:10",
      durationSeconds: 310,
      descriptionVi: "Trong bể cá nha sĩ, Nemo cùng nhóm bạn lên kế hoạch vượt ngục táo bạo, trong khi Marlin và Dory vượt qua đàn sứa độc để tiến vào cảng Sydney.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeId: "y9FGsJ3PYVw",
      timestamps: [
        { time: 20, label: "00:20", en: "All drains lead to the ocean, kid.", vi: "Mọi đường ống cống thoát nước đều dẫn ra đại dương hết, nhóc ạ." },
        { time: 80, label: "01:20", en: "Swim down together! Keep swimming down!", vi: "Cùng bơi chúc đầu xuống! Cứ bơi chúc xuống!" }
      ]
    }
  ],

  // 2. Peppa Pig (Heo Peppa)
  "peppa-pig": [
    {
      id: "pp-ep1",
      episodeNumber: 1,
      title: "Episode 1: Muddy Puddles",
      titleVi: "Tập 1: Những Vũng Bùn Lầy",
      duration: "05:14",
      durationSeconds: 314,
      descriptionVi: "Trời mưa và Peppa cùng George rất thích nhảy vào những vũng bùn lầy lội ngoài sân, nhưng mẹ dặn phải mang ủng cẩn thận trước khi ra ngoài.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "QFdLgfy63cc",
      timestamps: [
        { time: 10, label: "00:10", en: "It is raining today. Peppa loves jumping in muddy puddles!", vi: "Hôm nay trời mưa. Peppa thích nhảy vào những vũng bùn lầy!" },
        { time: 45, label: "00:45", en: "If you jump in muddy puddles, you must wear your boots.", vi: "Nếu con muốn nhảy vào vũng bùn, con phải đi ủng vào." },
        { time: 120, label: "02:00", en: "Daddy Pig is jumping in the muddy puddle too!", vi: "Bố Heo cũng đang nhảy vào vũng bùn lầy kìa!" }
      ]
    },
    {
      id: "pp-ep2",
      episodeNumber: 2,
      title: "Episode 2: Mr Dinosaur is Lost",
      titleVi: "Tập 2: Chú Khủng Long Bị Lạc",
      duration: "05:08",
      durationSeconds: 308,
      descriptionVi: "George vô tình đánh rơi món đồ chơi khủng long yêu quý nhất của mình, và cả gia đình heo cùng nhau hóa thân thành thám tử đi tìm kiếm.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "6xJhCJI5Ixw",
      timestamps: [
        { time: 15, label: "00:15", en: "George's favorite toy is Mr. Dinosaur. Dinosaur! Grrr!", vi: "Món đồ chơi yêu thích của George là chú Khủng Long. Khủng long! Gừ gừ!" },
        { time: 60, label: "01:00", en: "Don't cry George, we will find Mr Dinosaur for you.", vi: "Đừng khóc George ơi, cả nhà sẽ tìm chú khủng long cho em mà." }
      ]
    },
    {
      id: "pp-ep3",
      episodeNumber: 3,
      title: "Episode 3: Jumping in Muddy Puddles Song",
      titleVi: "Tập 3: Bài Ca Vũng Bùn Của Gia Đình Heo",
      duration: "03:12",
      durationSeconds: 192,
      descriptionVi: "Cùng lắng nghe giai điệu âm nhạc rộn ràng vui nhộn của Peppa Pig với những ca từ tiếng Anh siêu dễ nhớ về thiên nhiên và gia đình.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      youtubeId: "t7dTdE8Aqtw",
      timestamps: [
        { time: 15, label: "00:15", en: "Jumping up and down in muddy puddles!", vi: "Cùng nhảy lên nhảy xuống trong những vũng bùn lầy nào!" },
        { time: 55, label: "00:55", en: "Splish, splash, splosh! It's so much fun!", vi: "Bì bõm bì bõm! Thật là vui quá đi thôi!" }
      ]
    }
  ],

  // 3. We Bare Bears (Chúng Tôi Đơn Giản Là Gấu)
  "we-bare-bears": [
    {
      id: "wbb-ep1",
      episodeNumber: 1,
      title: "Episode 1: Our Stuff",
      titleVi: "Tập 1: Chiếc Túi Đồ Thất Lạc",
      duration: "03:15",
      durationSeconds: 195,
      descriptionVi: "Ba anh em gấu Grizzly, Panda và Ice Bear chơi bóng rổ ở công viên và bị trộm mất chiếc túi xách đựng điện thoại, ví và chìa khóa.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "wfGV0ealIvo",
      timestamps: [
        { time: 20, label: "00:20", en: "Bear stack! Let's get moving, brothers!", vi: "Chồng gấu! Di chuyển nào các người anh em!" },
        { time: 65, label: "01:05", en: "My phone! My contacts! My dating apps are all in there!", vi: "Điện thoại của tôi! Danh bạ! Các ứng dụng hẹn hò của tôi ở hết trong đó!" },
        { time: 110, label: "01:50", en: "Ice Bear wants justice.", vi: "Gấu Trắng đòi lại công lý." }
      ]
    },
    {
      id: "wbb-ep2",
      episodeNumber: 2,
      title: "Episode 2: Preview Clip",
      titleVi: "Tập 2: Những Khoảnh Khắc Hài Hước",
      duration: "02:40",
      durationSeconds: 160,
      descriptionVi: "Những tình huống giao tiếp đời thường dí dỏm của ba chú gấu khi hòa nhập vào cuộc sống hiện đại của con người tại thành phố San Francisco.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      youtubeId: "XsPpw4c9I68",
      timestamps: [
        { time: 15, label: "00:15", en: "Look at all those views and likes! We need to go viral too!", vi: "Nhìn lượng xem và lượt thích kìa! Chúng ta cũng phải nổi tiếng trên mạng thôi!" },
        { time: 70, label: "01:10", en: "The internet is a cruel place, bro.", vi: "Mạng internet là một nơi khắc nghiệt đấy người anh em." }
      ]
    },
    {
      id: "wbb-ep3",
      episodeNumber: 3,
      title: "Episode 3: Pigeons Squad",
      titleVi: "Tập 3: Băng Đảng Bồ Câu",
      duration: "03:10",
      durationSeconds: 190,
      descriptionVi: "Gấu Xám Grizzly và Panda đụng độ với đàn bồ câu thành phố thông minh ranh mãnh trong một phi vụ điều tra bất đắc dĩ.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "1sVhBLAlf5Y",
      timestamps: [
        { time: 20, label: "00:20", en: "Those pigeons are up to something fishy.", vi: "Lũ bồ câu đó đang tính làm điều gì mờ ám đấy." },
        { time: 80, label: "01:20", en: "Step right up, folks! Best food in the bay area!", vi: "Ghé vào đi bà con ơi! Món ngon nhất vùng vịnh đây!" }
      ]
    }
  ],

  // 4. Extra English (Sitcom Học Tiếng Anh Nổi Tiếng)
  "extra-english": [
    {
      id: "ee-ep1",
      episodeNumber: 1,
      title: "Episode 1: Hector's Arrival",
      titleVi: "Tập 1: Hector Đến London (Full Episode)",
      duration: "24:15",
      durationSeconds: 1455,
      descriptionVi: "Bridget và Annie bất ngờ đón một người bạn qua thư từ Tây Ban Nha tên là Hector. Hector nói tiếng Anh còn ngọng nghịu nhưng vô cùng dễ thương.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "k89GF-i_Eyg",
      timestamps: [
        { time: 45, label: "00:45", en: "I have a pen friend from Argentina. His name is Hector.", vi: "Tớ có một người bạn qua thư từ Argentina. Tên anh ấy là Hector." },
        { time: 180, label: "03:00", en: "I am Hector. I live in a museum... no, a big house!", vi: "Tôi là Hector. Tôi sống trong viện bảo tàng... à không, một biệt thự lớn!" },
        { time: 320, label: "05:20", en: "Nick, please teach Hector how to speak modern English.", vi: "Nick ơi, xin hãy dạy Hector cách nói tiếng Anh hiện đại đi." }
      ]
    },
    {
      id: "ee-ep2",
      episodeNumber: 2,
      title: "Episode 2: Hector Goes Shopping",
      titleVi: "Tập 2: Hector Đi Mua Sắm Quần Áo (Full Episode)",
      duration: "24:30",
      durationSeconds: 1470,
      descriptionVi: "Hector cần quần áo mới theo phong cách London sành điệu. Bridget, Annie và Nick cùng nhau lên kế hoạch tân trang diện mạo cho Hector.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      youtubeId: "WnKjaWm6J9I",
      timestamps: [
        { time: 60, label: "01:00", en: "Hector, your clothes are awful! You need a new look.", vi: "Hector à, đồ của cậu lỗi thời quá! Cậu cần diện mạo mới." },
        { time: 240, label: "04:00", en: "I would like to buy a pair of trousers and a leather jacket.", vi: "Tôi muốn mua một chiếc quần dài và một áo khoác da." }
      ]
    },
    {
      id: "ee-ep3",
      episodeNumber: 3,
      title: "Episode 3: Hector Has a Date",
      titleVi: "Tập 3: Buổi Hẹn Hò Của Hector (Full Episode)",
      duration: "24:20",
      durationSeconds: 1460,
      descriptionVi: "Annie và Bridget hướng dẫn Hector cách đăng tin tìm bạn gái qua mạng, dẫn đến hàng loạt tình huống hài hước dở khóc dở cười.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeId: "3kYjUY_eMAE",
      timestamps: [
        { time: 55, label: "00:55", en: "What kind of girls do you fancy, Hector?", vi: "Cậu thích kiểu con gái như thế nào hả Hector?" },
        { time: 210, label: "03:30", en: "I like confident girls who smile a lot.", vi: "Tôi thích những cô gái tự tin và hay mỉm cười." }
      ]
    }
  ],

  // 5. Friends (Những Người Bạn)
  "friends": [
    {
      id: "fr-ep1",
      episodeNumber: 1,
      title: "Episode 1: The One Where Monica Gets a Roommate",
      titleVi: "Tập 1: Ngày Rachel Chạy Trốn Khỏi Lễ Cưới",
      duration: "04:10",
      durationSeconds: 250,
      descriptionVi: "Rachel bất ngờ xông vào quán cà phê Central Perk trong bộ váy cưới ướt sũng sau khi quyết định hủy hôn, và bắt đầu cuộc sống tự lập cùng Monica.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "gtMkyALW11o",
      timestamps: [
        { time: 20, label: "00:20", en: "There's nothing to tell! He's just some guy I work with!", vi: "Có gì để kể đâu! Anh ta chỉ là một gã làm cùng chỗ với tớ thôi!" },
        { time: 90, label: "01:30", en: "Welcome to the real world! It sucks. You're gonna love it!", vi: "Chào mừng đến với thế giới thực! Nó tệ lắm đấy. Nhưng cậu sẽ yêu nó thôi!" }
      ]
    },
    {
      id: "fr-ep2",
      episodeNumber: 2,
      title: "Episode 2: The One with the Sonogram at the End",
      titleVi: "Tập 2: Buổi Siêu Âm Của Ross",
      duration: "03:50",
      durationSeconds: 230,
      descriptionVi: "Ross phát hiện ra người vợ cũ Carol đang mang thai đứa con đầu lòng của anh, trong khi bố mẹ Monica đến căn hộ ăn tối và không ngừng chê bai cô.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      youtubeId: "IA8yEetdQ9s",
      timestamps: [
        { time: 25, label: "00:25", en: "Carol is pregnant. With my baby.", vi: "Carol có thai rồi. Là con của tớ đấy." },
        { time: 80, label: "01:20", en: "You don't understand the pressure I'm under with my parents!", vi: "Cậu không hiểu được áp lực tớ phải chịu trước bố mẹ đâu!" }
      ]
    },
    {
      id: "fr-ep3",
      episodeNumber: 3,
      title: "Episode 3: Rachel at Central Perk",
      titleVi: "Tập 3: Rachel và Lễ Cưới Bỏ Trốn",
      duration: "03:30",
      durationSeconds: 210,
      descriptionVi: "Cảnh phim mở đầu định mệnh của toàn bộ series Friends khi 6 người bạn lần đầu tụ họp đông đủ tại quán cà phê huyền thoại.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      youtubeId: "0dnr61fVw7U",
      timestamps: [
        { time: 15, label: "00:15", en: "How you doin'?", vi: "Em thế nào rồi? (câu tán tỉnh kinh điển của Joey)" },
        { time: 65, label: "01:05", en: "I can't marry Barry! I'm not in love with him!", vi: "Tớ không thể cưới Barry được! Tớ không hề yêu anh ấy!" }
      ]
    }
  ],

  // 6. Inside Out (Những Mảnh Ghép Cảm Xúc)
  "inside-out": [
    {
      id: "io-ep1",
      episodeNumber: 1,
      title: "Act 1: Meet Headquarters & Core Memories",
      titleVi: "Phân đoạn 1: Trụ sở cảm xúc & Ký ức cốt lõi",
      duration: "04:20",
      durationSeconds: 260,
      descriptionVi: "Khám phá thế giới nội tâm của cô bé Riley với 5 cảm xúc: Joy (Vui vẻ), Sadness (Buồn bã), Anger (Giận dữ), Disgust (Chảnh chọe) và Fear (Sợ hãi).",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "dOkyKyVFnSs",
      timestamps: [
        { time: 15, label: "00:15", en: "Do you ever look at someone and wonder, 'What is going on inside their head?'", vi: "Bạn có bao giờ nhìn ai đó và tự hỏi, 'Điều gì đang diễn ra trong đầu họ?'" },
        { time: 60, label: "01:00", en: "These glowing spheres are core memories. They make Riley who she is.", vi: "Những khối cầu phát sáng này là ký ức cốt lõi. Chúng tạo nên con người Riley." }
      ]
    },
    {
      id: "io-ep2",
      episodeNumber: 2,
      title: "Act 2: The Emotional Rollercoaster",
      titleVi: "Phân đoạn 2: Cuộc phiêu lưu của Vui Vẻ & Buồn Bã",
      duration: "04:30",
      durationSeconds: 270,
      descriptionVi: "Joy và Sadness bị cuốn ra khỏi trụ sở chính và phải tìm đường quay về thông qua miền ký ức dài hạn của Riley.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "dOkyKyVFnSs",
      timestamps: [
        { time: 20, label: "00:20", en: "Who's your friend who likes to play? Bing Bong, Bing Bong!", vi: "Ai là người bạn thích chơi đùa cùng bạn nào? Bing Bong, Bing Bong!" },
        { time: 80, label: "01:20", en: "Take her to the moon for me, Joy.", vi: "Hãy đưa cô bé lên mặt trăng thay tôi nhé, Joy." }
      ]
    }
  ],

  // 7. Harry Potter and the Sorcerer's Stone
  "harry-potter-1": [
    {
      id: "hp-ep1",
      episodeNumber: 1,
      title: "Act 1: You're a Wizard, Harry!",
      titleVi: "Phân đoạn 1: Con Là Một Phù Thủy, Harry!",
      duration: "03:45",
      durationSeconds: 225,
      descriptionVi: "Harry Potter sống khổ cực dưới gầm cầu thang nhà Dursley cho đến khi người khổng lồ Hagrid phá cửa bước vào và trao bức thư từ trường Hogwarts.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "z9GwIeh5FIY",
      timestamps: [
        { time: 20, label: "00:20", en: "You're a wizard, Harry. A wizard, of course!", vi: "Con là một phù thủy đấy, Harry. Một phù thủy thực thụ!" },
        { time: 65, label: "01:05", en: "I'm a what? I'm just Harry, just Harry.", vi: "Con là một cái gì cơ? Con chỉ là Harry bình thường thôi mà." }
      ]
    },
    {
      id: "hp-ep2",
      episodeNumber: 2,
      title: "Act 2: The Magic Letter from Hogwarts",
      titleVi: "Phân đoạn 2: Lời Thú Nhận Của Bác Hagrid",
      duration: "02:50",
      durationSeconds: 170,
      descriptionVi: "Bác Hagrid giải thích thân phận phù thủy thực sự của Harry và quá khứ huyền thoại của cha mẹ cậu.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeId: "s9eoiAOhSZ8",
      timestamps: [
        { time: 10, label: "00:10", en: "Dear Mr. Potter, We are pleased to inform you that you have been accepted at Hogwarts.", vi: "Kính gửi cậu Potter, Chúng tôi vui mừng thông báo rằng cậu đã được trúng tuyển vào Hogwarts." }
      ]
    }
  ],

  // 8. Forrest Gump (Cuộc Đời Forrest Gump)
  "forrest-gump": [
    {
      id: "fg-ep1",
      episodeNumber: 1,
      title: "Act 1: Box of Chocolates & Run Forrest Run",
      titleVi: "Phân đoạn 1: Hộp Kẹo Sôcôla & Đôi Chân Kỳ Diệu",
      duration: "04:30",
      durationSeconds: 270,
      descriptionVi: "Forrest kể lại tuổi thơ đeo nẹp chân bằng sắt và câu nói bất hủ của mẹ về cuộc đời giống như một hộp sôcôla ngọt ngào.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "bLvqoHBptjg",
      timestamps: [
        { time: 15, label: "00:15", en: "Life is like a box of chocolates. You never know what you're gonna get.", vi: "Cuộc đời như một hộp sôcôla. Bạn không bao giờ biết mình sẽ nhận được vị nào." },
        { time: 70, label: "01:10", en: "Run, Forrest! Run, Forrest! Don't look back!", vi: "Chạy đi, Forrest! Chạy đi, Forrest! Đừng ngoái đầu lại!" }
      ]
    },
    {
      id: "fg-ep2",
      episodeNumber: 2,
      title: "Act 2: Simple Wisdom of Life",
      titleVi: "Phân đoạn 2: Trí Tuệ Giản Dị Của Forrest",
      duration: "04:00",
      durationSeconds: 240,
      descriptionVi: "Những triết lý sống nhân văn mộc mạc làm lay động hàng triệu trái tim khán giả trên toàn thế giới.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "bLvqoHBptjg",
      timestamps: [
        { time: 20, label: "00:20", en: "Stupid is as stupid does, sir.", vi: "Chỉ có người làm chuyện ngốc nghếch mới thật sự là kẻ ngốc thôi thưa ngài." }
      ]
    }
  ],

  // 9. Suits (Luật Sư Phong Cách)
  "suits": [
    {
      id: "suits-ep1",
      episodeNumber: 1,
      title: "Episode 1: Pilot - Harvey Meets Mike Ross",
      titleVi: "Tập 1: Cuộc Phỏng Vấn Định Mệnh Giữa Harvey & Mike",
      duration: "05:15",
      durationSeconds: 315,
      descriptionVi: "Mike Ross chạy trốn cảnh sát trong khách sạn và tình cờ lọt vào phòng phỏng vấn tuyển luật sư liên kết của Harvey Specter tại công ty luật hàng đầu Pearson Hardman.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "ImEnWAVRLU0",
      timestamps: [
        { time: 30, label: "00:30", en: "I don't play the odds, I play the man.", vi: "Tôi không cược vào xác suất, tôi nắm thóp con người đối diện." },
        { time: 90, label: "01:30", en: "How did you memorize the entire penal code without going to law school?", vi: "Làm thế nào mà cậu thuộc lòng toàn bộ bộ luật hình sự dù chưa từng học trường luật?" },
        { time: 160, label: "02:40", en: "Winners don't make excuses when the other side plays the game.", vi: "Người chiến thắng không viện cớ khi đối phương giở chiêu trò." }
      ]
    },
    {
      id: "suits-ep2",
      episodeNumber: 2,
      title: "Episode 2: Meet Mike Ross",
      titleVi: "Tập 2: Harvey Specter Đối Đầu Mike Ross",
      duration: "04:45",
      durationSeconds: 285,
      descriptionVi: "Phân cảnh đối đáp trí tuệ đỉnh cao với những thuật ngữ pháp lý, đàm phán thương trường cực kỳ sắc sảo giữa Harvey và Mike.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "LKq3Wk345Hg",
      timestamps: [
        { time: 25, label: "00:25", en: "When someone points a gun at your head, you take the gun, or you pull out a bigger gun.", vi: "Khi có kẻ chĩa súng vào đầu bạn, hãy tước súng của họ, hoặc rút ra một khẩu súng lớn hơn." }
      ]
    },
    {
      id: "suits-ep3",
      episodeNumber: 3,
      title: "Episode 3: Best Dialogue Moments",
      titleVi: "Tập 3: Những Màn Đấu Khẩu Kinh Điển",
      duration: "04:20",
      durationSeconds: 260,
      descriptionVi: "Tổng hợp các đoạn hội thoại đàm phán sắc như dao cạo của giới luật gia Phố Wall.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      youtubeId: "FjpnXuFxjp8",
      timestamps: [
        { time: 30, label: "00:30", en: "Sometimes the good guys gotta do bad things to make the bad guys pay.", vi: "Đôi khi người tốt phải dùng thủ đoạn để buộc kẻ xấu phải trả giá." }
      ]
    }
  ],

  // 10. Sherlock (BBC)
  "sherlock": [
    {
      id: "sh-ep1",
      episodeNumber: 1,
      title: "Episode 1: A Study in Pink - First Meeting",
      titleVi: "Tập 1: Cuộc Gặp Gỡ Đầu Tiên & Màn Suy Luận Thần Sầu",
      duration: "04:40",
      durationSeconds: 280,
      descriptionVi: "Bác sĩ John Watson vừa trở về từ chiến trường Afghanistan và dọn đến số 221B phố Baker ở chung với vị thám tử lập dị thông minh tột đỉnh Sherlock Holmes.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "VaT7IYQgyqo",
      timestamps: [
        { time: 25, label: "00:25", en: "The name is Sherlock Holmes and the address is 221B Baker Street.", vi: "Tên tôi là Sherlock Holmes và địa chỉ là 221B phố Baker." },
        { time: 70, label: "01:10", en: "I'm not a psychopath, Anderson. I'm a high-functioning sociopath. Do your research.", vi: "Tôi không phải kẻ tâm thần, Anderson à. Tôi là một kẻ thái nhân cách hoạt động đỉnh cao. Tìm hiểu cho kỹ đi." },
        { time: 130, label: "02:10", en: "You see, but you do not observe. The distinction is clear.", vi: "Anh nhìn thấy, nhưng anh không hề quan sát. Sự khác biệt rất rõ ràng." }
      ]
    },
    {
      id: "sh-ep2",
      episodeNumber: 2,
      title: "Episode 2: 221B Baker Street Apartment",
      titleVi: "Tập 2: Sherlock Dẫn John Về Căn Hộ Phố Baker",
      duration: "03:50",
      durationSeconds: 230,
      descriptionVi: "Sherlock giới thiệu căn hộ huyền thoại tại London và giải thích các nguyên lý suy luận logic từ những chi tiết nhỏ nhất trên chiếc điện thoại của John.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      youtubeId: "8uhzhkyxhzY",
      timestamps: [
        { time: 20, label: "00:20", en: "Eliminate all other factors, and the one which remains must be the truth.", vi: "Loại bỏ tất cả các yếu tố khác, thì điều duy nhất còn lại ắt phải là sự thật." },
        { time: 80, label: "01:20", en: "The game is on!", vi: "Cuộc chơi bắt đầu rồi!" }
      ]
    }
  ],

  // 11. The Social Network
  "the-social-network": [
    {
      id: "sn-ep1",
      episodeNumber: 1,
      title: "Act 1: A Billion Dollars is Cool",
      titleVi: "Phân đoạn 1: Một Tỷ Đô Mới Ngầu",
      duration: "03:40",
      durationSeconds: 220,
      descriptionVi: "Cuộc gặp gỡ huyền thoại giữa Sean Parker, Mark Zuckerberg và Eduardo Saverin tại nhà hàng sang trọng đánh dấu bước ngoặt đưa Facebook vươn tầm toàn cầu.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "lB95KLmpLR4",
      timestamps: [
        { time: 20, label: "00:20", en: "A million dollars isn't cool. You know what's cool? A billion dollars.", vi: "Một triệu đô chẳng có gì ngầu cả. Cậu biết cái gì mới ngầu không? Một tỷ đô." },
        { time: 80, label: "01:20", en: "You don't get to 500 million friends without making a few enemies.", vi: "Bạn không thể có được 500 triệu người bạn mà không tạo ra vài kẻ thù." }
      ]
    }
  ],

  // 12. The King's Speech (Diễn Văn Của Nhà Vua)
  "the-kings-speech": [
    {
      id: "ks-ep1",
      episodeNumber: 1,
      title: "Act 1: Because I Have a Voice!",
      titleVi: "Phân đoạn 1: Bởi Vì Tôi Có Tiếng Nói Của Mình!",
      duration: "04:15",
      durationSeconds: 255,
      descriptionVi: "Hoàng tử Albert bộc phát cảm xúc mạnh mẽ trong phòng trị liệu của Lionel Logue, phá vỡ rào cản tâm lý sợ hãi để cất lên tiếng nói tự do của một vị vua.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "AHY2UzOonig",
      timestamps: [
        { time: 25, label: "00:25", en: "Because I have a right to be heard! I have a voice!", vi: "Bởi vì tôi có quyền được lắng nghe! Tôi có tiếng nói của mình!" },
        { time: 85, label: "01:25", en: "In here, it's better if we're equals.", vi: "Ở trong phòng này, tốt hơn hết là chúng ta bình đẳng như nhau." }
      ]
    }
  ],

  // 13. Zootopia (Level A1-A2)
  "zootopia": [
    {
      id: "zoo-ep1",
      episodeNumber: 1,
      title: "Act 1: Anyone Can Be Anything",
      titleVi: "Phân đoạn 1: Bất kỳ ai cũng có thể trở thành bất cứ điều gì",
      duration: "03:45",
      durationSeconds: 225,
      descriptionVi: "Judy Hopps tốt nghiệp thủ khoa học viện cảnh sát và lên chuyến tàu cao tốc bước chân vào thành phố muông thú Zootopia phồn hoa.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeId: "jWM0ct-OLsM",
      timestamps: [
        { time: 15, label: "00:15", en: "In Zootopia, anyone can be anything.", vi: "Ở Zootopia, bất kỳ ai cũng có thể trở thành bất kỳ điều gì." },
        { time: 55, label: "00:55", en: "Ready to make the world a better place?", vi: "Đã sẵn sàng biến thế giới thành một nơi tốt đẹp hơn chưa?" },
        { time: 110, label: "01:50", en: "I don't know when to quit!", vi: "Tôi không bao giờ biết từ bỏ là gì!" }
      ]
    },
    {
      id: "zoo-ep2",
      episodeNumber: 2,
      title: "Act 2: The Sloth at the DMV",
      titleVi: "Phân đoạn 2: Chú lười Flash tại Cục Đăng kiểm xe",
      duration: "04:10",
      durationSeconds: 250,
      descriptionVi: "Judy và Nick Wilde cần tra cứu biển số xe gấp nhưng phải đối mặt với Flash - chú lười siêu chậm rãi khiến Judy phát cuồng.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "bY73vFGhSVk",
      timestamps: [
        { time: 20, label: "00:20", en: "Flash is the fastest guy in there.", vi: "Flash là gã nhanh nhẹn nhất ở trong đó đấy." },
        { time: 65, label: "01:05", en: "What... do... you... call... a... three-humped... camel?", vi: "Cậu... gọi... một... con... lạc đà... ba... bướu... là... gì?" },
        { time: 130, label: "02:10", en: "Pregnant!", vi: "Mang bầu chứ sao!" }
      ]
    }
  ],

  // 14. The Lion King (Level A1-A2)
  "lion-king": [
    {
      id: "lk-ep1",
      episodeNumber: 1,
      title: "Act 1: The Circle of Life & Pride Rock",
      titleVi: "Phân đoạn 1: Vòng quay cuộc sống & Mỏm đá Vua",
      duration: "03:50",
      durationSeconds: 230,
      descriptionVi: "Vua Mufasa chỉ cho Simba non nớt thấy vương quốc muôn loài và dạy con về sự cân bằng thiêng liêng của tự nhiên.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "4cbWv-G8vK8",
      timestamps: [
        { time: 20, label: "00:20", en: "Everything the light touches is our kingdom.", vi: "Mọi nơi mà ánh sáng chạm tới đều là vương quốc của chúng ta." },
        { time: 70, label: "01:10", en: "Being brave doesn't mean you go looking for trouble.", vi: "Dũng cảm không có nghĩa là con cứ đi tìm kiếm rắc rối." },
        { time: 125, label: "02:05", en: "We are all connected in the great Circle of Life.", vi: "Tất cả chúng ta đều gắn kết trong Vòng Quay Cuộc Sống vĩ đại." }
      ]
    },
    {
      id: "lk-ep2",
      episodeNumber: 2,
      title: "Act 2: Hakuna Matata Philosophy",
      titleVi: "Phân đoạn 2: Triết lý sống Hakuna Matata",
      duration: "03:40",
      durationSeconds: 220,
      descriptionVi: "Timon và Pumbaa giải cứu Simba giữa sa mạc và dạy chú sư tử con phương châm gạt bỏ âu lo để sống vui tươi.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      youtubeId: "lFzVJEksoDY",
      timestamps: [
        { time: 20, label: "00:20", en: "Hakuna Matata! It means no worries for the rest of your days.", vi: "Hakuna Matata! Nghĩa là chẳng có gì phải bận lòng trong suốt những ngày tháng còn lại." },
        { time: 75, label: "01:15", en: "You got to put your past behind you.", vi: "Cậu phải để quá khứ lại sau lưng mình." }
      ]
    }
  ],

  // 15. Toy Story (Level A1-A2)
  "toy-story": [
    {
      id: "ts-ep1",
      episodeNumber: 1,
      title: "Act 1: To Infinity and Beyond",
      titleVi: "Phân đoạn 1: Vươn tới vô cực và xa hơn nữa",
      duration: "03:30",
      durationSeconds: 210,
      descriptionVi: "Buzz Lightyear xuất hiện trong phòng Andy với vẻ ngoài phi hành gia tân tiến, khiến cảnh sát trưởng Woody cảm thấy vị thế bị lung lay.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      youtubeId: "v-PjgYDrg70",
      timestamps: [
        { time: 25, label: "00:25", en: "To infinity and beyond!", vi: "Vươn tới vô cực và xa hơn nữa!" },
        { time: 70, label: "01:10", en: "You are a toy! You aren't the real Buzz Lightyear!", vi: "Cậu là một món đồ chơi! Cậu không phải là Buzz Lightyear ngoài đời thật đâu!" },
        { time: 110, label: "01:50", en: "You're mocking me, aren't you?", vi: "Cậu đang chế giễu tôi đấy à?" }
      ]
    },
    {
      id: "ts-ep2",
      episodeNumber: 2,
      title: "Act 2: You've Got a Friend in Me",
      titleVi: "Phân đoạn 2: Cậu luôn có một người bạn nơi tôi",
      duration: "04:00",
      durationSeconds: 240,
      descriptionVi: "Woody và Buzz vượt qua mọi hiểm nguy từ nhà cậu bé Sid để cùng nhau bay theo chiếc xe tải của Andy trở về nhà.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      youtubeId: "CxwTLktovTU",
      timestamps: [
        { time: 30, label: "00:30", en: "This isn't flying, this is falling with style!", vi: "Đây không phải bay lượn, đây là rơi xuống một cách đầy phong cách!" },
        { time: 90, label: "01:30", en: "The important thing is that we stick together.", vi: "Điều quan trọng nhất là chúng ta luôn sát cánh bên nhau." }
      ]
    }
  ],

  // 16. Modern Family (Level A1-A2)
  "modern-family": [
    {
      id: "mf-ep1",
      episodeNumber: 1,
      title: "Episode 1: The Cool Dad & Family Dinners",
      titleVi: "Tập 1: Người bố thời thượng & Bữa tối gia đình",
      duration: "03:45",
      durationSeconds: 225,
      descriptionVi: "Phil Dunphy luôn nỗ lực chứng tỏ mình là một người bố sành điệu bắt kịp giới trẻ, trong khi Claire xoay xở với ba đứa con nghịch ngợm.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      youtubeId: "a9s6x1u_X5o",
      timestamps: [
        { time: 15, label: "00:15", en: "I'm a cool dad, that's my thing. I'm hip, I surf the web, I text.", vi: "Bố là một ông bố cực ngầu, đó là thương hiệu của bố. Bố sành điệu, lướt mạng, nhắn tin nhoay nhoáy." },
        { time: 65, label: "01:05", en: "What's the plan? We don't have a plan, we never have a plan.", vi: "Kế hoạch là gì? Chúng ta chẳng có kế hoạch gì cả, chưa từng bao giờ có." },
        { time: 120, label: "02:00", en: "Family is family. Whether it's the one you start out with or the one you end up with.", vi: "Gia đình mãi là gia đình. Dù là nơi bạn khởi đầu hay nơi bạn tìm thấy chốn bình yên cuối cùng." }
      ]
    }
  ],

  // 17. How I Met Your Mother (Level B1-B2)
  "how-i-met-your-mother": [
    {
      id: "himym-ep1",
      episodeNumber: 1,
      title: "Episode 1: Suit Up & It's Gonna Be Legend... Wait For It... Dary!",
      titleVi: "Tập 1: Mặc vest vào & Cuộc hẹn huyền thoại!",
      duration: "03:50",
      durationSeconds: 230,
      descriptionVi: "Barney Stinson dẫn Ted Mosby tới quán bar McLaren's quen thuộc với phương châm sống bất hủ: Luôn luôn mặc đồ vest và nắm bắt vận may.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "7g7d_X9Jc88",
      timestamps: [
        { time: 20, label: "00:20", en: "Suit up! It's going to be legendary!", vi: "Mặc vest vào đi! Nó sẽ trở thành huyền thoại đấy!" },
        { time: 70, label: "01:10", en: "Whatever you do in this life, it's not legendary unless your friends are there to see it.", vi: "Dù cậu làm gì trên đời này, nó cũng chẳng phải huyền thoại nếu không có những người bạn ở đó chứng kiến." }
      ]
    },
    {
      id: "himym-ep2",
      episodeNumber: 2,
      title: "Episode 2: The Blue French Horn",
      titleVi: "Tập 2: Chiếc kèn Pháp màu xanh",
      duration: "04:10",
      durationSeconds: 250,
      descriptionVi: "Ted kể lại khoảnh khắc lãng mạn đánh cắp chiếc kèn đồng xanh trong nhà hàng để gây ấn tượng với Robin Scherbatsky trong buổi hẹn đầu tiên.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      youtubeId: "aJtVL2_fPhQ",
      timestamps: [
        { time: 15, label: "00:15", en: "I would have stolen you a whole orchestra.", vi: "Anh sẵn sàng đánh cắp cho em cả một dàn nhạc giao hưởng." },
        { time: 80, label: "01:20", en: "Should should should. When are you going to stop should-ing all over yourself?", vi: "Cứ nên thế này nên thế kia. Khi nào cậu mới thôi dằn vặt bản thân bằng những chữ 'nên'?" }
      ]
    }
  ],

  // 18. The Big Bang Theory (Level B1-B2)
  "the-big-bang-theory": [
    {
      id: "tbbt-ep1",
      episodeNumber: 1,
      title: "Episode 1: Sheldon's Spot & Social Conventions",
      titleVi: "Tập 1: Chỗ ngồi cố định của Sheldon & Quy ước xã hội",
      duration: "03:40",
      durationSeconds: 220,
      descriptionVi: "Penny chuyển tới căn hộ đối diện, và tiến sĩ Sheldon Cooper lập tức giải thích lý do khoa học tại sao vị trí ghế sofa đó thuộc về mình.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      youtubeId: "WBb3fojgW0Q",
      timestamps: [
        { time: 20, label: "00:20", en: "That is my spot. In an ever-changing world, it is a single point of consistency.", vi: "Đó là chỗ ngồi của tôi. Trong một thế giới luôn biến động, nó là điểm nhất quán duy nhất." },
        { time: 70, label: "01:10", en: "Bazinga! You have fallen victim to another of my classic practical jokes.", vi: "Bazinga! Cậu lại vừa trở thành nạn nhân trong trò đùa kinh điển của tôi rồi." },
        { time: 110, label: "01:50", en: "I'm not crazy, my mother had me tested.", vi: "Tôi không có bị khùng, mẹ tôi từng đưa tôi đi kiểm tra thần kinh rồi đấy." }
      ]
    }
  ],

  // 19. The Intern (Level B1-B2)
  "the-intern": [
    {
      id: "intern-ep1",
      episodeNumber: 1,
      title: "Act 1: Experience Never Gets Old",
      titleVi: "Phân đoạn 1: Kinh nghiệm sống không bao giờ lỗi thời",
      duration: "04:00",
      durationSeconds: 240,
      descriptionVi: "Ben Whittaker - quý ông 70 tuổi góa vợ ứng tuyển chương trình thực tập sinh cao tuổi tại công ty thương mại điện tử thời trang của Jules Ostin.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      youtubeId: "ZU3Xban0Y6A",
      timestamps: [
        { time: 25, label: "00:25", en: "Musicians don't retire; they stop when there's no more music in them.", vi: "Những nhạc công không bao giờ nghỉ hưu; họ chỉ dừng lại khi âm nhạc trong lòng không còn vang lên nữa." },
        { time: 80, label: "01:20", en: "You're never wrong to do the right thing.", vi: "Bạn không bao giờ sai khi làm điều đúng đắn." },
        { time: 135, label: "02:15", en: "The best reason to carry a handkerchief is to lend it.", vi: "Lý do tuyệt vời nhất để mang khăn tay là để cho người khác mượn khi họ cần lau nước mắt." }
      ]
    }
  ],

  // 20. Soul (Level B1-B2)
  "soul": [
    {
      id: "soul-ep1",
      episodeNumber: 1,
      title: "Act 1: Finding Your Spark",
      titleVi: "Phân đoạn 1: Đi tìm tia sáng đam mê",
      duration: "04:15",
      durationSeconds: 255,
      descriptionVi: "Joe Gardner - một thầy giáo dạy nhạc đam mê jazz gặp linh hồn 22 tại cõi Trước và cùng khám phá ý nghĩa đích thực của niềm vui sống.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      youtubeId: "xOsLIiBStEs",
      timestamps: [
        { time: 20, label: "00:20", en: "A spark isn't a soul's purpose. It's just when you're ready to come and live.", vi: "Tia sáng không phải là mục đích cả đời của linh hồn. Đó chỉ là khoảnh khắc bạn sẵn sàng bước vào cuộc đời và tận hưởng nó." },
        { time: 85, label: "01:25", en: "I'm going to live every minute of it.", vi: "Tôi sẽ sống trọn vẹn từng phút giây của cuộc đời mình." }
      ]
    }
  ],

  // 21. The Crown (Level C1-C2)
  "the-crown": [
    {
      id: "crown-ep1",
      episodeNumber: 1,
      title: "Episode 1: The Crown Must Always Win",
      titleVi: "Tập 1: Vương miện luôn luôn phải chiến thắng",
      duration: "04:20",
      durationSeconds: 260,
      descriptionVi: "Nữ hoàng Elizabeth II tiếp nhận trọng trách hoàng gia từ Nữ hoàng Mary với bài học sâu sắc về bổn phận quốc gia vượt trên hạnh phúc cá nhân.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "JWtnJGOQR4g",
      timestamps: [
        { time: 30, label: "00:30", en: "The crown must win. Must always win.", vi: "Vương quyền phải chiến thắng. Luôn luôn phải chiến thắng tất cả mọi toan tính cá nhân." },
        { time: 90, label: "01:30", en: "To do nothing is often the hardest job of all.", vi: "Không hành động gì thường lại là công việc gian nan và đòi hỏi sự kiềm chế nhất." }
      ]
    }
  ],

  // 22. Oppenheimer (Level C1-C2)
  "oppenheimer": [
    {
      id: "opp-ep1",
      episodeNumber: 1,
      title: "Act 1: The Destroyer of Worlds & The Boardroom Hearing",
      titleVi: "Phân đoạn 1: Kẻ Hủy Diệt Thế Giới & Phiên điều trần phòng kín",
      duration: "04:30",
      durationSeconds: 270,
      descriptionVi: "J. Robert Oppenheimer hồi tưởng lại dự án Manhattan tại Los Alamos và đối mặt với phiên thẩm vấn khắt khe thời kỳ Chiến tranh Lạnh.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      youtubeId: "uYPbbksJxIg",
      timestamps: [
        { time: 35, label: "00:35", en: "Now I am become Death, the destroyer of worlds.", vi: "Giờ đây tôi đã trở thành Thần Chết, kẻ hủy diệt các thế giới." },
        { time: 95, label: "01:35", en: "They won't fear it until they understand it, and they won't understand it until they've used it.", vi: "Họ sẽ không sợ nó cho đến khi hiểu nó, và họ sẽ không thể hiểu nó cho đến khi đã thực sự sử dụng nó." },
        { time: 145, label: "02:25", en: "Theory will only take you so far.", vi: "Lý thuyết chỉ có thể đưa bạn đi xa đến một giới hạn nhất định mà thôi." }
      ]
    }
  ],

  // 23. Inception (Level C1-C2)
  "inception": [
    {
      id: "inc-ep1",
      episodeNumber: 1,
      title: "Act 1: An Idea is Like a Virus",
      titleVi: "Phân đoạn 1: Một ý niệm tựa như loài virus",
      duration: "04:10",
      durationSeconds: 250,
      descriptionVi: "Dom Cobb giải thích cơ chế thâm nhập tiềm thức và cấy ghép ý niệm trong giấc mơ đa tầng cho kiến trúc sư Ariadne tại Paris.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
      youtubeId: "YoHD9XEInc0",
      timestamps: [
        { time: 25, label: "00:25", en: "An idea is like a virus. Resilient, highly contagious.", vi: "Một ý niệm tựa như một loài virus. Kiên cường và có sức lây lan vô cùng mãnh liệt." },
        { time: 80, label: "01:20", en: "You mustn't be afraid to dream a little bigger, darling.", vi: "Em không được sợ hãi mơ lớn hơn một chút đâu, cưng à." },
        { time: 130, label: "02:10", en: "Downwards is the only way forwards.", vi: "Đi sâu xuống đáy tiềm thức là con đường duy nhất để tiến về phía trước." }
      ]
    }
  ],

  // 24. House of Cards (Level C1-C2)
  "house-of-cards": [
    {
      id: "hoc-ep1",
      episodeNumber: 1,
      title: "Episode 1: The Nature of Power & Breaking the Fourth Wall",
      titleVi: "Tập 1: Bản chất của quyền lực & Phá vỡ bức tường thứ tư",
      duration: "04:20",
      durationSeconds: 260,
      descriptionVi: "Frank Underwood quay thẳng vào ống kính máy quay để chia sẻ với khán giả quy luật nghiệt ngã của đấu trường chính trị đồi Capitol.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      youtubeId: "ULwUzF1q5w4",
      timestamps: [
        { time: 20, label: "00:20", en: "There are two kinds of pain. The sort of pain that makes you strong, or useless pain.", vi: "Có hai loại nỗi đau. Loại nỗi đau tôi luyện bạn trở nên mạnh mẽ, hoặc nỗi đau vô dụng." },
        { time: 85, label: "01:25", en: "Money is the McMansion in Sarasota that starts falling apart after ten years. Power is the old stone building that stands for centuries.", vi: "Tiền tài giống như ngôi biệt thự hào nhoáng sụp đổ sau mười năm. Còn quyền lực là tòa lâu đài đá sừng sững qua hàng thế kỷ." }
      ]
    }
  ]
};
