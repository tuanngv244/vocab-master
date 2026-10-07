import { FilmVocabulary, FilmQuote } from "./data_films";

export interface FilmExtraContent {
  vocabularies: FilmVocabulary[];
  quotes: FilmQuote[];
}

export const filmExtraContentMap: Record<string, FilmExtraContent> = {
  // 1. Finding Nemo (A1-A2)
  "finding-nemo": {
    vocabularies: [
      { word: "Current", phonetic: "/ˈkʌr.ənt/", meaningVi: "Hải lưu, dòng nước biển", exampleSentence: "The East Australian Current is super fast!", exampleVi: "Dòng hải lưu Đông Úc chảy siêu nhanh!" },
      { word: "Anemone", phonetic: "/əˈnem.ə.ni/", meaningVi: "Hải quỳ (nơi cá hề làm tổ)", exampleSentence: "Clownfish live safely inside the sea anemone.", exampleVi: "Cá hề sống an toàn bên trong bụi hải quỳ." },
      { word: "Drift", phonetic: "/drɪft/", meaningVi: "Trôi giạt, trôi theo dòng", exampleSentence: "We are drifting away from the reef.", exampleVi: "Chúng ta đang trôi dạt ra xa khỏi rạn san hô." },
      { word: "Goggles", phonetic: "/ˈɡɒɡ.əlz/", meaningVi: "Kính lặn, kính bơi", exampleSentence: "The diver dropped his swimming goggles.", exampleVi: "Người thợ lặn đã làm rơi kính bơi của mình." },
      { word: "Flock", phonetic: "/flɒk/", meaningVi: "Bầy đàn (chim chóc, mòng biển)", exampleSentence: "A flock of seagulls yelled 'Mine! Mine!'.", exampleVi: "Một bầy hải âu cùng hét toáng 'Của tao! Của tao!'." },
      { word: "Rescue", phonetic: "/ˈres.kjuː/", meaningVi: "Giải cứu, cứu nguy", exampleSentence: "Marlin traveled across the whole ocean to rescue his son.", exampleVi: "Marlin đã chu du qua cả đại dương để giải cứu con trai." },
      { word: "Stomach", phonetic: "/ˈstʌm.ək/", meaningVi: "Dạ dày, bụng", exampleSentence: "They were trapped inside the whale's stomach.", exampleVi: "Họ đã bị mắc kẹt bên trong dạ dày cá voi." },
      { word: "Harbor", phonetic: "/ˈhɑː.bər/", meaningVi: "Bến cảng biển", exampleSentence: "Sydney Harbor is full of big ships.", exampleVi: "Bến cảng Sydney tấp nập những con tàu lớn." }
    ],
    quotes: [
      { character: "Marlin", en: "I promised him I'd never let anything happen to him.", vi: "Tôi đã hứa với nó rằng tôi sẽ không để bất cứ điều gì xảy ra với nó.", explanationVi: "Cấu trúc 'promise someone + clause' dùng trong câu gián tiếp." },
      { character: "Dory", en: "When life gets you down, you know what you gotta do? Just keep swimming!", vi: "Khi cuộc đời làm bạn chán nản, bạn biết phải làm gì không? Cứ tiếp tục bơi đi!", explanationVi: "Cụm 'get someone down' nghĩa là làm ai đó nản lòng, ủ rũ." },
      { character: "Crush", en: "Cause we were like, woah! And then like, whoosh!", vi: "Bởi vì chúng tớ kiểu như, ồ quao! Và sau đó thì vù một cái!", explanationVi: "Cách dùng từ tượng thanh và khẩu ngữ lóng 'like' của giới lướt sóng California." },
      { character: "Nemo", en: "Dad, I don't hate you. I love you.", vi: "Bố ơi, con không hề ghét bố. Con yêu bố mà.", explanationVi: "Câu nói chân thành chạm đến trái tim ở cao trào phim." }
    ]
  },

  // 2. Peppa Pig (A1-A2)
  "peppa-pig": {
    vocabularies: [
      { word: "Puddle", phonetic: "/ˈpʌd.əl/", meaningVi: "Vũng nước mưa, vũng bùn", exampleSentence: "Peppa loves jumping in muddy puddles.", exampleVi: "Peppa cực thích nhảy vào những vũng bùn lầy." },
      { word: "Snort", phonetic: "/snɔːt/", meaningVi: "Tiếng khịt mũi, thở phì phò", exampleSentence: "Daddy Pig gives a loud snort when laughing.", exampleVi: "Bố Heo khịt mũi thật to khi cười lớn." },
      { word: "Boots", phonetic: "/buːts/", meaningVi: "Đôi ủng cao su đi mưa", exampleSentence: "You must wear your boots if it's raining.", exampleVi: "Con phải xỏ đôi ủng vào nếu trời đang mưa." },
      { word: "Splish", phonetic: "/splɪʃ/", meaningVi: "Tiếng bì bõm, bắn nước tung tóe", exampleSentence: "Splish, splash, splosh in the water!", exampleVi: "Bì bõm, tí tách bắn nước tung tóe!" },
      { word: "Playgroup", phonetic: "/ˈpleɪ.ɡruːp/", meaningVi: "Lớp mẫu giáo, nhóm trẻ", exampleSentence: "Peppa goes to playgroup every morning.", exampleVi: "Peppa đến lớp mẫu giáo vào mỗi buổi sáng." },
      { word: "Dinosaur", phonetic: "/ˈdaɪ.nə.sɔːr/", meaningVi: "Khủng long", exampleSentence: "George's favorite toy is Mr. Dinosaur.", exampleVi: "Món đồ chơi yêu thích của George là chú Khủng Long." },
      { word: "Muddy", phonetic: "/ˈmʌd.i/", meaningVi: "Lấm lem bùn đất", exampleSentence: "Her clothes are all muddy after playing outside.", exampleVi: "Quần áo cô bé lấm lem hết bùn sau khi chơi ngoài trời." },
      { word: "Telescope", phonetic: "/ˈtel.ɪ.skəʊp/", meaningVi: "Kính thiên văn, kính viễn vọng", exampleSentence: "Grandpa Pig has a big telescope to look at the stars.", exampleVi: "Ông Heo có một chiếc kính viễn vọng lớn để ngắm các vì sao." }
    ],
    quotes: [
      { character: "Peppa", en: "If you jump in muddy puddles, you must wear your boots!", vi: "Nếu bạn nhảy vào vũng bùn, bạn phải xỏ ủng đi mưa vào!", explanationVi: "Cấu trúc điều kiện loại 1: 'If + present, you must + verb'." },
      { character: "Daddy Pig", en: "I am a bit of an expert at this!", vi: "Bố hơi bị sành sỏi chuyên gia về vụ này đấy!", explanationVi: "Cụm 'a bit of an expert' là cách nói tự hào hài hước của bố Heo." },
      { character: "George", en: "Dine-saw! Grrr!", vi: "Khủng long nè! Gừ gừ!", explanationVi: "Từ ngữ bi bô đáng yêu của trẻ nhỏ học nói tiếng Anh." },
      { character: "Narrator", en: "Peppa loves jumping up and down in muddy puddles.", vi: "Peppa rất thích nhảy nhót tưng bừng trong những vũng bùn.", explanationVi: "Thì hiện tại đơn diễn tả sở thích thường trực 'love doing something'." }
    ]
  },

  // 3. We Bare Bears (A1-A2)
  "we-bare-bears": {
    vocabularies: [
      { word: "Stack", phonetic: "/stæk/", meaningVi: "Chồng lên nhau, xếp chồng", exampleSentence: "The three bears always do a bear stack to walk.", exampleVi: "Ba chú gấu luôn xếp chồng lên nhau để cùng đi dạo." },
      { word: "Poutine", phonetic: "/puːˈtiːn/", meaningVi: "Món khoai tây chiên sốt phô mai kiểu Canada", exampleSentence: "Grizzly ordered a huge bowl of poutine.", exampleVi: "Gấu Xám đã gọi một tô khoai tây sốt phô mai siêu to." },
      { word: "Selfie", phonetic: "/ˈsel.fi/", meaningVi: "Bức ảnh chụp tự sướng", exampleSentence: "Panda loves taking cute selfies for his social media.", exampleVi: "Gấu Trúc rất thích chụp ảnh tự sướng đăng mạng xã hội." },
      { word: "Axe", phonetic: "/æks/", meaningVi: "Chiếc rìu chặt củi", exampleSentence: "Ice Bear always keeps his ninja tools and axe clean.", exampleVi: "Gấu Trắng luôn lau chùi sạch sẽ các dụng cụ ninja và chiếc rìu." },
      { word: "Viral", phonetic: "/ˈvaɪə.rəl/", meaningVi: "Lan truyền chóng mặt trên mạng", exampleSentence: "Their video went viral with millions of views.", exampleVi: "Video của họ đã trở nên cực sốt với hàng triệu lượt xem." },
      { word: "Cave", phonetic: "/keɪv/", meaningVi: "Hang động (nơi ở của 3 chú gấu)", exampleSentence: "Welcome to the bears' cozy cave!", exampleVi: "Chào mừng các bạn đến với chiếc hang ấm cúng của ba chú gấu!" },
      { word: "Allergy", phonetic: "/ˈæl.ə.dʒi/", meaningVi: "Sự dị ứng", exampleSentence: "Panda has a severe peanut allergy.", exampleVi: "Gấu Trúc bị dị ứng đậu phộng khá nghiêm trọng." },
      { word: "Barista", phonetic: "/bəˈriː.stə/", meaningVi: "Nhân viên pha chế cà phê", exampleSentence: "Chloe met the bears at the coffee shop with a barista.", exampleVi: "Chloe gặp gỡ các chú gấu tại quán cà phê cùng nhân viên pha chế." }
    ],
    quotes: [
      { character: "Ice Bear", en: "Ice Bear bought these legally.", vi: "Gấu Trắng mua những thứ này hoàn toàn hợp pháp đấy nhé.", explanationVi: "Cách Gấu Trắng xưng hô ngôi thứ ba 'Ice Bear + verb' đặc trưng." },
      { character: "Grizzly", en: "Bear stack! Let's go make some new friends!", vi: "Xếp chồng gấu nào! Cùng đi kết bạn mới thôi!", explanationVi: "Lời rủ rê thân thiện 'Let's go + verb' quen thuộc." },
      { character: "Panda", en: "Wait, someone just liked my photo!", vi: "Khoan đã, có ai đó vừa thả tim bức ảnh của tớ này!", explanationVi: "Ngữ cảnh mạng xã hội hiện đại 'like a photo'." },
      { character: "Ice Bear", en: "Ice Bear will protect the family.", vi: "Gấu Trắng sẽ bảo vệ gia đình này.", explanationVi: "Thể hiện tình thương trách nhiệm ấm áp của em út Gấu Trắng." }
    ]
  },

  // 4. Extra English (A1-A2)
  "extra-english": {
    vocabularies: [
      { word: "Landlady", phonetic: "/ˈlænd.leɪ.di/", meaningVi: "Bà chủ nhà trọ", exampleSentence: "The landlady doesn't allow boys in the apartment.", exampleVi: "Bà chủ nhà không cho phép con trai ở trong căn hộ." },
      { word: "Flatmate", phonetic: "/ˈflæt.meɪt/", meaningVi: "Bạn cùng thuê căn hộ", exampleSentence: "Bridget and Annie are flatmates in London.", exampleVi: "Bridget và Annie là bạn cùng phòng ở London." },
      { word: "Butler", phonetic: "/ˈbʌt.lər/", meaningVi: "Quản gia nhà giàu", exampleSentence: "Hector's family has many servants and a butler.", exampleVi: "Gia đình Hector có rất nhiều người hầu và một quản gia." },
      { word: "Penpal", phonetic: "/ˈpen.pæl/", meaningVi: "Bạn qua thư từ", exampleSentence: "Hector was Bridget's penpal from Argentina.", exampleVi: "Hector từng là bạn qua thư từ Argentina của Bridget." },
      { word: "Handsome", phonetic: "/ˈhæn.səm/", meaningVi: "Đẹp trai, tuấn tú", exampleSentence: "Nick thought he was the most handsome guy.", exampleVi: "Nick luôn nghĩ mình là anh chàng đẹp trai nhất." },
      { word: "Cushion", phonetic: "/ˈkʊʃ.ən/", meaningVi: "Chiếc gối đệm tựa sofa", exampleSentence: "Hector slept on the sofa with a small cushion.", exampleVi: "Hector ngủ trên ghế sofa với một chiếc gối tựa nhỏ." },
      { word: "Disguise", phonetic: "/dɪsˈɡaɪz/", meaningVi: "Cải trang, ngụy trang", exampleSentence: "Nick wore a mustache as a disguise.", exampleVi: "Nick gắn thêm ria mép giả để cải trang." },
      { word: "Tissues", phonetic: "/ˈtɪʃ.uːz/", meaningVi: "Khăn giấy lau mặt", exampleSentence: "Pass me the box of tissues, please.", exampleVi: "Làm ơn chuyền giúp tôi hộp khăn giấy với." }
    ],
    quotes: [
      { character: "Hector", en: "I am Hector. I come from Argentina.", vi: "Tôi là Hector. Tôi đến từ Argentina.", explanationVi: "Cấu trúc giới thiệu bản thân cơ bản nhất: 'I come from + country'." },
      { character: "Nick", en: "Hector, my friend, let me teach you English!", vi: "Hector bạn tôi ơi, để tôi dạy tiếng Anh cho cậu nhé!", explanationVi: "Cấu trúc 'let me + verb': hãy để tôi làm điều gì đó." },
      { character: "Bridget", en: "Nick, get out of our apartment right now!", vi: "Nick, cút ra khỏi căn hộ của bọn tôi ngay lập tức!", explanationVi: "Cụm mệnh lệnh 'get out of' dùng khi tức giận đuổi người." }
    ]
  },

  // 5. Zootopia (A1-A2)
  "zootopia": {
    vocabularies: [
      { word: "Carrot", phonetic: "/ˈkær.ət/", meaningVi: "Củ cà rốt (biệt danh của Judy)", exampleSentence: "Nick playfully calls Judy 'Carrots'.", exampleVi: "Nick hay gọi Judy một cách trêu chọc là 'Cà rốt'." },
      { word: "Badge", phonetic: "/bædʒ/", meaningVi: "Huy hiệu cảnh sát", exampleSentence: "She proudly pinned the gold badge on her uniform.", exampleVi: "Cô tự hào cài chiếc huy hiệu vàng lên bộ quân phục." },
      { word: "Ticket", phonetic: "/ˈtɪk.ɪt/", meaningVi: "Biên lai phạt (vi phạm đỗ xe)", exampleSentence: "Judy wrote two hundred parking tickets before noon.", exampleVi: "Judy đã ghi tới 200 vé phạt đỗ xe trước buổi trưa." },
      { word: "Predator", phonetic: "/ˈpred.ə.tər/", meaningVi: "Động vật ăn thịt, loài săn mồi", exampleSentence: "In ancient times, predators hunted prey.", exampleVi: "Thời cổ đại, loài săn mồi từng săn đuổi con mồi." },
      { word: "Prey", phonetic: "/preɪ/", meaningVi: "Con mồi, loài ăn cỏ", exampleSentence: "Ninety percent of Zootopia's population are prey.", exampleVi: "90% dân số của Zootopia là các loài ăn cỏ." },
      { word: "Sloth", phonetic: "/sləʊθ/", meaningVi: "Con lười (chạy việc ở DMV)", exampleSentence: "Flash the sloth works at the Department of Motor Vehicles.", exampleVi: "Chú lười Flash làm việc tại Cục Quản lý Phương tiện giao thông." },
      { word: "Underestimate", phonetic: "/ˌʌn.dəˈres.tɪ.meɪt/", meaningVi: "Đánh giá thấp, coi thường", exampleSentence: "Never underestimate a determined bunny.", exampleVi: "Đừng bao giờ đánh giá thấp một cô thỏ đầy quyết tâm." },
      { word: "Partner", phonetic: "/ˈpɑːt.nər/", meaningVi: "Cộng sự, bạn đồng hành", exampleSentence: "Judy and Nick became great detective partners.", exampleVi: "Judy và Nick đã trở thành cặp bài trùng thám tử tuyệt vời." }
    ],
    quotes: [
      { character: "Chief Bogo", en: "Life isn't some cartoon musical where you sing a little song and your insipid dreams magically come true.", vi: "Đời không phải phim hoạt hình ca nhạc nơi cô hát một khúc ca rồi những giấc mơ nhạt nhẽo của cô thành hiện thực đâu.", explanationVi: "Lời nói thẳng thắn châm biếm sâu sắc của cảnh sát trưởng Bogo." },
      { character: "Judy Hopps", en: "Change starts with you.", vi: "Sự thay đổi bắt đầu từ chính bản thân bạn.", explanationVi: "Thông điệp truyền cảm hứng ngắn gọn nhưng mạnh mẽ." },
      { character: "Nick Wilde", en: "You know you love me.", vi: "Cậu biết rõ là cậu yêu mến tớ mà.", explanationVi: "Câu đùa duyên dáng chốt lại tình bạn giữa cáo Nick và thỏ Judy." }
    ]
  },

  // 6. The Lion King (A1-A2)
  "lion-king": {
    vocabularies: [
      { word: "Pride", phonetic: "/praɪd/", meaningVi: "Niềm tự hào / Bầy đàn sư tử", exampleSentence: "The pride of lions lives at Pride Rock.", exampleVi: "Bầy sư tử sinh sống tại Mỏm đá Vua." },
      { word: "Heir", phonetic: "/eər/", meaningVi: "Người thừa kế ngai vàng", exampleSentence: "Simba was the rightful heir to the throne.", exampleVi: "Simba là người thừa kế chính thống của ngai vàng." },
      { word: "Scar", phonetic: "/skɑːr/", meaningVi: "Vết sẹo (tên người chú phản diện)", exampleSentence: "Scar had a dark mark over his left eye.", exampleVi: "Scar có một vết sẹo tối màu trên mắt trái." },
      { word: "Stampede", phonetic: "/stæmˈpiːd/", meaningVi: "Cuộc hỗn loạn giẫm đạp của bầy thú", exampleSentence: "Mufasa died trying to save Simba from the wildebeest stampede.", exampleVi: "Mufasa đã hy sinh khi cố cứu Simba khỏi cuộc giẫm đạp của bầy linh dương." },
      { word: "Exile", phonetic: "/ˈek.saɪl/", meaningVi: "Lưu vong, trục xuất", exampleSentence: "Simba lived in exile with Timon and Pumbaa.", exampleVi: "Simba sống lưu vong cùng Timon và Pumbaa." },
      { word: "Roar", phonetic: "/rɔːr/", meaningVi: "Tiếng gầm vang dội của chúa sơn lâm", exampleSentence: "Simba's roar echoed across the savanna.", exampleVi: "Tiếng gầm của Simba vang dội khắp thảo nguyên xavan." },
      { word: "Savanna", phonetic: "/səˈvæn.ə/", meaningVi: "Đồng cỏ hoang dã nhiệt đới", exampleSentence: "African savannas are home to lions and zebras.", exampleVi: "Thảo nguyên châu Phi là ngôi nhà của sư tử và ngựa vằn." }
    ],
    quotes: [
      { character: "Mufasa", en: "Look at the stars. The great kings of the past look down on us from those stars.", vi: "Hãy nhìn lên những vì sao kia. Những vị vua vĩ đại của quá khứ đang dõi nhìn chúng ta từ những ngôi sao đó.", explanationVi: "Ngôn từ giàu chất thơ truyền dạy đạo hiếu và sự trường tồn." },
      { character: "Timon", en: "Hakuna Matata! It means no worries for the rest of your days.", vi: "Hakuna Matata! Nghĩa là không lo lắng bận lòng trong suốt những ngày còn lại.", explanationVi: "Cụm từ tiếng Swahili nổi tiếng toàn thế giới." },
      { character: "Scar", en: "Life's not fair, is it?", vi: "Cuộc đời vốn chẳng công bằng, phải không nào?", explanationVi: "Câu hỏi đuôi châm biếm quen thuộc 'is it?'." }
    ]
  },

  // 7. Toy Story (A1-A2)
  "toy-story": {
    vocabularies: [
      { word: "Cowboy", phonetic: "/ˈkaʊ.bɔɪ/", meaningVi: "Chàng cao bồi miền Tây", exampleSentence: "Woody is a vintage cowboy pull-string doll.", exampleVi: "Woody là một búp bê cao bồi kéo dây cổ điển." },
      { word: "Laser", phonetic: "/ˈleɪ.zər/", meaningVi: "Tia laser ánh sáng", exampleSentence: "It's not a real laser, it's just a little red light bulb!", exampleVi: "Đó không phải laser thật, nó chỉ là bóng đèn đỏ nhỏ thôi!" },
      { word: "Attic", phonetic: "/ˈæt.ɪk/", meaningVi: "Tầng gác xép để đồ cũ", exampleSentence: "Andy's mom wanted to put the old toys in the attic.", exampleVi: "Mẹ Andy từng muốn cất những món đồ chơi cũ lên gác xép." },
      { word: "Cardboard", phonetic: "/ˈkɑːd.bɔːd/", meaningVi: "Bìa các-tông cứng", exampleSentence: "Buzz arrived in a colorful cardboard spaceship box.", exampleVi: "Buzz xuất hiện trong chiếc hộp phi thuyền bằng bìa cứng nhiều màu." },
      { word: "Jealousy", phonetic: "/ˈdʒel.ə.si/", meaningVi: "Lòng ghen ghét, thói đố kỵ", exampleSentence: "Woody's jealousy almost ruined his friendship.", exampleVi: "Lòng ghen tị của Woody suýt chút nữa đã phá hỏng tình bạn." },
      { word: "Mission", phonetic: "/ˈmɪʃ.ən/", meaningVi: "Nhiệm vụ đặc biệt", exampleSentence: "The green army soldiers went on a reconnaissance mission.", exampleVi: "Những người lính đồ chơi xanh đã đi làm nhiệm vụ do thám." },
      { word: "Yard sale", phonetic: "/ˈjɑːd ˌseɪl/", meaningVi: "Hội chợ thanh lý đồ cũ trước sân nhà", exampleSentence: "Woody went outside to rescue Wheezy from the yard sale.", exampleVi: "Woody đã chạy ra ngoài cứu Wheezy khỏi buổi thanh lý đồ cũ." }
    ],
    quotes: [
      { character: "Woody", en: "You've got a friend in me.", vi: "Bạn luôn có một người bạn đồng hành trong tôi.", explanationVi: "Tên bài hát chủ đề bất hủ của phim." },
      { character: "Woody", en: "You are a child's plaything!", vi: "Cậu chỉ là một món đồ chơi của một đứa trẻ mà thôi!", explanationVi: "Từ 'plaything' nhấn mạnh bản chất của đồ chơi." },
      { character: "Rex", en: "I don't like confrontations!", vi: "Tớ không thích những cuộc đối đầu xô xát đâu!", explanationVi: "Từ 'confrontation' (sự đối đầu) rất hữu ích trong giao tiếp." }
    ]
  },

  // 8. Modern Family (A1-A2)
  "modern-family": {
    vocabularies: [
      { word: "Sibling", phonetic: "/ˈsɪb.lɪŋ/", meaningVi: "Anh chị em ruột", exampleSentence: "The three siblings always argue about the TV remote.", exampleVi: "Ba anh chị em luôn cãi nhau vì chiếc điều khiển TV." },
      { word: "Realtor", phonetic: "/ˈriːəl.tər/", meaningVi: "Môi giới bất động sản (nghề của Phil)", exampleSentence: "Phil Dunphy is a passionate California realtor.", exampleVi: "Phil Dunphy là một nhân viên môi giới nhà đất đầy nhiệt huyết ở California." },
      { word: "Stubborn", phonetic: "/ˈstʌb.ən/", meaningVi: "Bướng bỉnh, cứng đầu", exampleSentence: "Jay Pritchett is a very stubborn old man.", exampleVi: "Jay Pritchett là một ông cụ cực kỳ cứng đầu." },
      { word: "Sarcastic", phonetic: "/sɑːˈkæs.tɪk/", meaningVi: "Châm chọc, mỉa mai", exampleSentence: "Alex makes sarcastic comments about her brother's grades.", exampleVi: "Alex hay đưa ra những lời nhận xét mỉa mai về điểm số của anh trai mình." },
      { word: "Adopt", phonetic: "/əˈdɒpt/", meaningVi: "Nhận con nuôi", exampleSentence: "Mitch and Cam adopted baby Lily from Vietnam.", exampleVi: "Mitch và Cam đã nhận nuôi bé Lily từ Việt Nam." },
      { word: "Chaos", phonetic: "/ˈkeɪ.ɒs/", meaningVi: "Sự hỗn loạn, náo nhiệt", exampleSentence: "Every morning in the Dunphy house is total chaos.", exampleVi: "Mỗi buổi sáng ở nhà Dunphy đều là một sự hỗn loạn hoàn toàn." },
      { word: "Spouse", phonetic: "/spaʊs/", meaningVi: "Vợ hoặc chồng, bạn đời", exampleSentence: "Respecting your spouse is key to a happy marriage.", exampleVi: "Tôn trọng bạn đời là chìa khóa của một cuộc hôn nhân hạnh phúc." }
    ],
    quotes: [
      { character: "Jay Pritchett", en: "Ninety percent of being a dad is just showing up.", vi: "90% việc làm một người cha đơn giản chỉ là luôn có mặt bên con.", explanationVi: "Thành ngữ 'show up' nghĩa là xuất hiện, đồng hành khi người khác cần." },
      { character: "Claire Dunphy", en: "If you don't stop fighting, nobody gets dessert!", vi: "Nếu các con không thôi đánh nhau, không ai được ăn tráng miệng đâu!", explanationVi: "Câu răn đe kinh điển của các bà mẹ phương Tây." },
      { character: "Gloria", en: "In Colombia, we don't call the police. We call the family!", vi: "Ở Colombia, chúng tôi không gọi cảnh sát. Chúng tôi gọi cả dòng họ!", explanationVi: "Nét văn hóa gia đình gắn kết qua lời thoại hài hước của Gloria." }
    ]
  },

  // 9. Friends (B1-B2)
  "friends": {
    vocabularies: [
      { word: "Pivot", phonetic: "/ˈpɪv.ət/", meaningVi: "Xoay trục, đổi hướng", exampleSentence: "Ross shouted 'Pivot!' while moving the couch.", exampleVi: "Ross gào lên 'Xoay góc đi!' khi khiêng chiếc ghế sofa." },
      { word: "Couch", phonetic: "/kaʊtʃ/", meaningVi: "Ghế bành sofa dài ở quán cà phê", exampleSentence: "The orange couch at Central Perk is iconic.", exampleVi: "Chiếc ghế sofa màu cam tại quán Central Perk đã trở thành biểu tượng." },
      { word: "Breakup", phonetic: "/ˈbreɪk.ʌp/", meaningVi: "Sự chia tay người yêu", exampleSentence: "Were Ross and Rachel on a break during their breakup?", exampleVi: "Liệu Ross và Rachel có đang tạm dừng mối quan hệ trong lần chia tay đó không?" },
      { word: "Sarcasm", phonetic: "/ˈsɑː.kæz.əm/", meaningVi: "Lối nói mỉa mai châm biếm (đặc trưng của Chandler)", exampleSentence: "Chandler uses sarcasm as a defense mechanism.", exampleVi: "Chandler dùng sự mỉa mai như một cơ chế tự vệ tâm lý." },
      { word: "Masseuse", phonetic: "/mæˈsɜːz/", meaningVi: "Nữ nhân viên xoa bóp, mát-xa (nghề của Phoebe)", exampleSentence: "Phoebe worked as an eccentric masseuse.", exampleVi: "Phoebe làm nghề nhân viên mát-xa với tính cách lập dị." },
      { word: "Paleontologist", phonetic: "/ˌpeɪ.li.ɒnˈtɒl.ə.dʒɪst/", meaningVi: "Nhà cổ sinh vật học (nghiên cứu khủng long)", exampleSentence: "Ross is a proud paleontologist who loves dinosaurs.", exampleVi: "Ross là một nhà cổ sinh vật học đầy tự hào rất mê khủng long." },
      { word: "Audition", phonetic: "/ɔːˈdɪʃ.ən/", meaningVi: "Buổi thử vai diễn viên", exampleSentence: "Joey went to three acting auditions this week.", exampleVi: "Joey đã tham gia ba buổi thử vai diễn xuất trong tuần này." }
    ],
    quotes: [
      { character: "Joey Tribbiani", en: "How you doin'?", vi: "Em thế nào rồi? (Câu cưa cẩm kinh điển)", explanationVi: "Cách nuốt âm thân mật của 'How are you doing?' trong tiếng Anh đường phố New York." },
      { character: "Ross Geller", en: "We were on a break!", vi: "Chúng ta khi đó đang tạm chia tay nhau mà!", explanationVi: "Tranh cãi tình cảm bất hủ xuyên suốt 10 mùa của Friends." },
      { character: "Chandler Bing", en: "Could I BE wearing any more clothes?", vi: "Liệu tôi có thể mặc thêm cái áo nào nữa được không đây?", explanationVi: "Ngữ điệu nhấn mạnh chữ 'BE' thương hiệu của Chandler." },
      { character: "Rachel Green", en: "No uterus, no opinion!", vi: "Không có tử cung thì không có quyền lên tiếng!", explanationVi: "Câu nói thẳng thắn hài hước của Rachel khi sinh con." }
    ]
  },

  // 10. Inside Out (B1-B2)
  "inside-out": {
    vocabularies: [
      { word: "Core memory", phonetic: "/kɔːr ˈmem.ər.i/", meaningVi: "Ký ức cốt lõi định hình nhân cách", exampleSentence: "Each core memory powers an island of personality.", exampleVi: "Mỗi ký ức cốt lõi nuôi dưỡng một hòn đảo nhân cách." },
      { word: "Headquarters", phonetic: "/ˌhedˈkwɔː.təz/", meaningVi: "Trụ sở chỉ huy đầu não", exampleSentence: "Joy and Sadness got sucked out of Headquarters.", exampleVi: "Niềm Vui và Nỗi Buồn đã bị hút văng ra khỏi trụ sở đầu não." },
      { word: "Personality", phonetic: "/ˌpɜː.sənˈæl.ə.ti/", meaningVi: "Nhân cách, tính cách con người", exampleSentence: "Honesty island is an important part of her personality.", exampleVi: "Hòn đảo Trung Thực là một phần quan trọng trong nhân cách của cô bé." },
      { word: "Meltdown", phonetic: "/ˈmelt.daʊn/", meaningVi: "Sự suy sụp tinh thần, mất bình tĩnh", exampleSentence: "Anger caused a complete emotional meltdown.", exampleVi: "Cơn Giận Dữ đã gây ra một sự bùng nổ mất kiểm soát hoàn toàn." },
      { word: "Empathy", phonetic: "/ˈem.pə.θi/", meaningVi: "Sự thấu cảm, đồng cảm sâu sắc", exampleSentence: "Sadness connects with others through deep empathy.", exampleVi: "Nỗi Buồn kết nối với người khác bằng sự thấu cảm sâu sắc." },
      { word: "Abyss", phonetic: "/əˈbɪs/", meaningVi: "Vực thẳm lãng quên vô tận", exampleSentence: "Forgotten memories fade away into the dark abyss.", exampleVi: "Những ký ức bị lãng quên dần tan biến vào đáy vực thẳm tăm tối." },
      { word: "Imaginary", phonetic: "/ɪˈmædʒ.ɪ.nər.i/", meaningVi: "Tưởng tượng, hư cấu trong tâm trí", exampleSentence: "Bing Bong was Riley's beloved imaginary friend.", exampleVi: "Bing Bong từng là người bạn tưởng tượng đáng yêu của Riley." }
    ],
    quotes: [
      { character: "Joy", en: "Do you ever look at someone and wonder, 'What is going on inside their head?'", vi: "Bạn có bao giờ nhìn vào ai đó và tự hỏi, 'Điều gì đang diễn ra bên trong đầu họ nhỉ?'", explanationVi: "Lời dẫn mở màn đặt ra tiền đề tuyệt vời của bộ phim." },
      { character: "Bing Bong", en: "Take her to the moon for me, Joy.", vi: "Hãy đưa cô bé lên mặt trăng thay tôi nhé, Niềm Vui.", explanationVi: "Khoảnh khắc hy sinh xúc động lấy đi nhiều nước mắt nhất." },
      { character: "Sadness", en: "Crying helps me slow down and obsess over the weight of life's problems.", vi: "Khóc giúp tôi sống chậm lại và cảm nhận sức nặng của những vấn đề trong đời.", explanationVi: "Bài học triết lý về giá trị cần thiết của nỗi buồn." }
    ]
  },

  // 11. Harry Potter (B1-B2)
  "harry-potter-1": {
    vocabularies: [
      { word: "Wand", phonetic: "/wɒnd/", meaningVi: "Đũa phép ma thuật", exampleSentence: "The wand chooses the wizard, Mr. Potter.", exampleVi: "Cây đũa phép tự lựa chọn phù thủy, cậu Potter ạ." },
      { word: "Muggle", phonetic: "/ˈmʌɡ.əl/", meaningVi: "Người phàm trần (không có phép thuật)", exampleSentence: "The Dursleys were proud to be completely normal Muggles.", exampleVi: "Gia đình Dursley luôn tự hào là những người Muggle bình thường." },
      { word: "Sorcerer", phonetic: "/ˈsɔː.sər.ər/", meaningVi: "Phù thủy, pháp sư quyền năng", exampleSentence: "The Sorcerer's Stone can grant immortality.", exampleVi: "Hòn đá Phù thủy có thể ban cho sự trường sinh bất tử." },
      { word: "Sorting Hat", phonetic: "/ˈsɔː.tɪŋ hæt/", meaningVi: "Chiếc Nón Phân loại nhà", exampleSentence: "The Sorting Hat placed Harry in Gryffindor.", exampleVi: "Chiếc Nón Phân Loại đã xếp Harry vào nhà Gryffindor." },
      { word: "Cauldron", phonetic: "/ˈkɔːl.drən/", meaningVi: "Vạc đồng nấu độc dược", exampleSentence: "Students must bring a pewter cauldron to Potions class.", exampleVi: "Học sinh phải mang vạc thiếc đến lớp học Độc Dược." },
      { word: "Cloak", phonetic: "/kləʊk/", meaningVi: "Áo choàng (như Áo tàng hình)", exampleSentence: "The Invisibility Cloak belonged to Harry's father.", exampleVi: "Chiếc Áo Choàng Tàng Hình từng thuộc về cha của Harry." },
      { word: "Dungeon", phonetic: "/ˈdʌn.dʒən/", meaningVi: "Hầm ngục tối dưới lòng lâu đài", exampleSentence: "There is a mountain troll in the dungeon!", exampleVi: "Có một con quỷ khổng lồ trong hầm ngục!" }
    ],
    quotes: [
      { character: "Albus Dumbledore", en: "It does not do to dwell on dreams and forget to live.", vi: "Chẳng ích gì khi cứ đắm chìm trong những giấc mơ mà quên đi việc phải sống thực tại.", explanationVi: "Lời răn dạy sâu sắc khi Harry mải nhìn vào gương Ảo Ảnh." },
      { character: "Hermione Granger", en: "Now if you two don't mind, I'm going to bed before either of you comes up with another clever idea to get us killed, or worse, expelled.", vi: "Bây giờ nếu hai cậu không phiền thì tớ đi ngủ đây, trước khi hai cậu nghĩ ra trò thông minh nào đó khiến chúng ta mất mạng, hoặc tệ hơn, bị đuổi học.", explanationVi: "Lối so sánh hài hước điển hình của cô nàng mọt sách Hermione." },
      { character: "Hagrid", en: "You're a wizard, Harry.", vi: "Con là một phù thủy, Harry ạ.", explanationVi: "Câu nói mở ra cả thế giới pháp thuật diệu kỳ." }
    ]
  },

  // 12. Forrest Gump (B1-B2)
  "forrest-gump": {
    vocabularies: [
      { word: "Feather", phonetic: "/ˈfeð.ər/", meaningVi: "Sợi lông vũ bay trong gió", exampleSentence: "The movie opens with a white feather floating in the breeze.", exampleVi: "Bộ phim mở đầu bằng hình ảnh một sợi lông vũ trắng bay bồng bềnh trong gió." },
      { word: "Medal of Honor", phonetic: "/ˈmed.əl əv ˈɒn.ər/", meaningVi: "Huân chương Danh dự cao quý của quân đội", exampleSentence: "Forrest received the Medal of Honor for saving his comrades.", exampleVi: "Forrest đã nhận Huân chương Danh dự vì cứu sống đồng đội." },
      { word: "Shrimping", phonetic: "/ˈʃrɪm.pɪŋ/", meaningVi: "Nghề đánh bắt tôm", exampleSentence: "Bubba knew everything there was to know about the shrimping business.", exampleVi: "Bubba hiểu mọi ngóc ngách về nghề kinh doanh tôm." },
      { word: "Ping-pong", phonetic: "/ˈpɪŋ.pɒŋ/", meaningVi: "Môn bóng bàn", exampleSentence: "Forrest became a national ping-pong champion.", exampleVi: "Forrest đã trở thành nhà vô địch bóng bàn quốc gia." },
      { word: "Cross-country", phonetic: "/ˌkrɒsˈkʌn.tri/", meaningVi: "Chạy việt dã xuyên lục địa", exampleSentence: "He just kept running cross-country for three years.", exampleVi: "Anh ấy cứ chạy bộ xuyên nước Mỹ ròng rã suốt ba năm." },
      { word: "Destiny", phonetic: "/ˈdes.tɪ.ni/", meaningVi: "Số phận, tiền định", exampleSentence: "Do we each have a destiny, or are we just floating around accidental-like?", exampleVi: "Liệu mỗi chúng ta đều có một định mệnh, hay ta chỉ trôi dạt ngẫu nhiên như cơn gió?" },
      { word: "Breeze", phonetic: "/briːz/", meaningVi: "Cơn gió thoảng êm dịu", exampleSentence: "A light breeze carried the feather across the sky.", exampleVi: "Một cơn gió nhẹ đã cuốn chiếc lông vũ bay qua bầu trời." }
    ],
    quotes: [
      { character: "Forrest Gump", en: "Mama always said life was like a box of chocolates. You never know what you're gonna get.", vi: "Mẹ con luôn nói cuộc đời giống như một hộp kẹo sô-cô-la vậy. Con không bao giờ biết trước mình sẽ bốc được vị gì.", explanationVi: "Câu nói nổi tiếng hàng đầu trong lịch sử điện ảnh thế giới." },
      { character: "Forrest Gump", en: "Stupid is as stupid does.", vi: "Kẻ ngốc là kẻ làm những điều ngu ngốc.", explanationVi: "Triết lý giản dị đánh giá con người qua hành động thực tế." },
      { character: "Jenny", en: "Run, Forrest! Run!", vi: "Chạy đi, Forrest! Chạy đi!", explanationVi: "Tiếng reo cổ vũ phá bỏ xiềng xích tật nguyền thời thơ ấu." }
    ]
  },

  // 13. How I Met Your Mother (B1-B2)
  "how-i-met-your-mother": {
    vocabularies: [
      { word: "Wingman", phonetic: "/ˈwɪŋ.mæn/", meaningVi: "Bạn chí cốt hỗ trợ cưa cẩm", exampleSentence: "Barney always demanded that Ted be his wingman.", exampleVi: "Barney luôn yêu cầu Ted phải làm bạn yểm trợ cho mình." },
      { word: "Intervention", phonetic: "/ˌɪn.təˈven.ʃən/", meaningVi: "Cuộc họp mặt can thiệp cảnh tỉnh bạn bè", exampleSentence: "The group threw an intervention for Ted's bad habits.", exampleVi: "Cả nhóm đã tổ chức một buổi họp can thiệp để cảnh tỉnh thói quen xấu của Ted." },
      { word: "Slap", phonetic: "/slæp/", meaningVi: "Cú tát trời giáng (vụ cá cược Slap Bet)", exampleSentence: "Marshall won five slaps to use on Barney whenever he wanted.", exampleVi: "Marshall đã thắng năm cú tát được dùng lên Barney bất cứ khi nào anh muốn." },
      { word: "Playbook", phonetic: "/ˈpleɪ.bʊk/", meaningVi: "Cuốn sổ tay chiến thuật (tán gái)", exampleSentence: "Barney wrote a ridiculous playbook full of crazy tricks.", exampleVi: "Barney đã viết một cuốn sổ chiến thuật chứa đầy những chiêu trò điên rồ." },
      { word: "Architect", phonetic: "/ˈɑː.kɪ.tekt/", meaningVi: "Kiến trúc sư (nghề của Ted)", exampleSentence: "Ted designed a skyscraper in New York City.", exampleVi: "Ted đã thiết kế một tòa nhà chọc trời tại thành phố New York." },
      { word: "Booth", phonetic: "/buːð/", meaningVi: "Bàn góc có ghế đệm dài trong quán bar", exampleSentence: "They sat in the same bar booth for nine years.", exampleVi: "Họ đã ngồi ở đúng chiếc bàn góc đó suốt chín năm ròng." },
      { word: "Doppelgänger", phonetic: "/ˈdɒp.əlˌɡæŋ.ər/", meaningVi: "Người có dung mạo giống hệt mình", exampleSentence: "The gang found all five of their doppelgängers across the city.", exampleVi: "Cả nhóm đã tìm thấy đủ năm bản sao giống hệt mình khắp thành phố." }
    ],
    quotes: [
      { character: "Barney Stinson", en: "A lie is just a great story that someone ruined with the truth.", vi: "Lời nói dối thực chất chỉ là một câu chuyện hay ho mà bị ai đó làm hỏng bằng sự thật.", explanationVi: "Lối tư duy trào phúng độc nhất vô nhị của Barney." },
      { character: "Ted Mosby", en: "If you're not scared, then you're not taking a chance. And if you're not taking a chance, then what the hell are you doing?", vi: "Nếu cậu không thấy sợ, tức là cậu chưa dám nắm lấy cơ hội. Và nếu cậu không dám nắm lấy cơ hội, thì rốt cuộc cậu đang làm cái quái gì với đời mình vậy?", explanationVi: "Lời tâm sự sâu sắc về lòng can đảm trong tình yêu và sự nghiệp." },
      { character: "Marshall Eriksen", en: "Lily, you are my best friend and my soulmate.", vi: "Lily à, em là người bạn thân nhất và là tri kỷ trọn đời của anh.", explanationVi: "Tình yêu chung thủy đáng ngưỡng mộ giữa Marshall và Lily." }
    ]
  },

  // 14. The Big Bang Theory (B1-B2)
  "the-big-bang-theory": {
    vocabularies: [
      { word: "Hypothesis", phonetic: "/haɪˈpɒθ.ə.sɪs/", meaningVi: "Giả thuyết khoa học", exampleSentence: "We must test this scientific hypothesis thoroughly.", exampleVi: "Chúng ta cần kiểm chứng giả thuyết khoa học này một cách cẩn trọng." },
      { word: "Elevator", phonetic: "/ˈel.ɪ.veɪ.tər/", meaningVi: "Thang máy (bị hỏng suốt nhiều năm)", exampleSentence: "The apartment building elevator has been out of order for years.", exampleVi: "Chiếc thang máy của tòa chung cư đã bị hỏng suốt nhiều năm." },
      { word: "Whiteboard", phonetic: "/ˈwaɪt.bɔːd/", meaningVi: "Bảng trắng viết phương trình toán học", exampleSentence: "Sheldon filled the whiteboard with complex physics formulas.", exampleVi: "Sheldon viết kín chiếc bảng trắng bằng những công thức vật lý phức tạp." },
      { word: "Comic book", phonetic: "/ˈkɒm.ɪk bʊk/", meaningVi: "Truyện tranh siêu anh hùng", exampleSentence: "They visit Stuart's comic book store every Wednesday.", exampleVi: "Họ ghé tiệm truyện tranh của Stuart vào mỗi thứ Tư hàng tuần." },
      { word: "Roommate agreement", phonetic: "/ˈruːm.meɪt əˈɡriː.mənt/", meaningVi: "Bản hợp đồng bạn cùng phòng", exampleSentence: "Sheldon made Leonard sign a fifty-page roommate agreement.", exampleVi: "Sheldon bắt Leonard ký một bản hợp đồng cùng phòng dài năm mươi trang." },
      { word: "Neurobiologist", phonetic: "/ˌnjʊə.rəʊ.baɪˈɒl.ə.dʒɪst/", meaningVi: "Nhà sinh học thần kinh (Amy Farrah Fowler)", exampleSentence: "Amy is a brilliant neurobiologist studying monkey brains.", exampleVi: "Amy là một nhà sinh học thần kinh xuất sắc nghiên cứu não bộ loài khỉ." },
      { word: "Aerospace", phonetic: "/ˈeə.rəʊ.speɪs/", meaningVi: "Ngành hàng không vũ trụ (Howard Wolowitz)", exampleSentence: "Howard is an aerospace engineer who went to the International Space Station.", exampleVi: "Howard là một kỹ sư hàng không vũ trụ từng bay lên Trạm Không gian Quốc tế." }
    ],
    quotes: [
      { character: "Sheldon Cooper", en: "I'm not insane. My mother had me tested.", vi: "Tôi không có bị khùng. Mẹ tôi từng đưa tôi đi giám định thần kinh rồi.", explanationVi: "Câu trả lời kinh điển mỗi khi bị ai đó nghi ngờ sự tỉnh táo." },
      { character: "Leonard Hofstadter", en: "Our babies will be smart and beautiful.", vi: "Những đứa con sau này của chúng ta sẽ vừa thông minh vừa xinh đẹp.", explanationVi: "Ước mơ ngày đầu gặp Penny của chàng tiến sĩ vật lý Leonard." },
      { character: "Penny", en: "Holy crap, that actually made sense!", vi: "Trời đất ơi, điều đó nghe thực sự có lý đấy chứ!", explanationVi: "Khẩu ngữ ngạc nhiên đời thường của người Mỹ." }
    ]
  },

  // 15. The Intern (B1-B2)
  "the-intern": {
    vocabularies: [
      { word: "Handkerchief", phonetic: "/ˈhæŋ.kə.tʃiːf/", meaningVi: "Chiếc khăn tay bỏ túi lịch lãm", exampleSentence: "A gentleman always carries a clean handkerchief.", exampleVi: "Một quý ông luôn mang theo một chiếc khăn tay sạch bên mình." },
      { word: "Startup", phonetic: "/ˈstɑːt.ʌp/", meaningVi: "Công ty khởi nghiệp công nghệ", exampleSentence: "The fashion startup grew from twenty to over two hundred employees.", exampleVi: "Công ty khởi nghiệp thời trang đã tăng từ 20 lên hơn 200 nhân viên." },
      { word: "E-commerce", phonetic: "/ˈiːˌkɒm.ɜːs/", meaningVi: "Thương mại điện tử bán hàng qua mạng", exampleSentence: "About The Fit is a fast-growing e-commerce clothing site.", exampleVi: "About The Fit là một trang thương mại điện tử bán quần áo phát triển nhanh." },
      { word: "Chauffeur", phonetic: "/ˈʃəʊ.fər/", meaningVi: "Tài xế riêng lịch sự", exampleSentence: "Ben stepped in to be Jules's reliable chauffeur.", exampleVi: "Ben đã xung phong làm tài xế riêng đáng tin cậy cho Jules." },
      { word: "Workaholic", phonetic: "/ˌwɜː.kəˈhɒl.ɪk/", meaningVi: "Người nghiện công việc", exampleSentence: "Jules was a passionate workaholic who barely slept.", exampleVi: "Jules là một người cuồng công việc đầy nhiệt huyết gần như hiếm khi ngủ." },
      { word: "Wisdom", phonetic: "/ˈwɪz.dəm/", meaningVi: "Sự thông thái, từng trải cuộc đời", exampleSentence: "Ben's calm wisdom guided the young team through panic.", exampleVi: "Sự thông thái điềm đạm của Ben đã dẫn dắt đội ngũ trẻ vượt qua hoảng loạn." },
      { word: "Masseuse", phonetic: "/mæˈsɜːz/", meaningVi: "Chuyên viên xoa bóp trị liệu văn phòng", exampleSentence: "Fiona offered in-house massage therapy to reduce stress.", exampleVi: "Fiona cung cấp dịch vụ mát-xa tại công ty để giảm căng thẳng cho nhân viên." }
    ],
    quotes: [
      { character: "Ben Whittaker", en: "The key is to keep moving.", vi: "Bí quyết sống là không bao giờ ngừng chuyển động và tiến lên.", explanationVi: "Triết lý sống năng động lạc quan của người lớn tuổi." },
      { character: "Jules Ostin", en: "How in one generation did men go from guys like Robert De Niro to guys like this?", vi: "Làm sao chỉ trong một thế hệ mà đàn ông lại chuyển từ những quý ông như Robert De Niro thành những cậu choai choai thế này chứ?", explanationVi: "Lời than thở dí dỏm về sự thay đổi phong cách của phái mạnh." },
      { character: "Ben Whittaker", en: "You should be proud of what you've built.", vi: "Cháu rất nên tự hào về những gì cháu đã dày công gây dựng.", explanationVi: "Lời động viên ấm áp tiếp thêm sức mạnh cho nữ CEO trẻ." }
    ]
  },

  // 16. Soul (B1-B2)
  "soul": {
    vocabularies: [
      { word: "Mentor", phonetic: "/ˈmen.tɔːr/", meaningVi: "Người cố vấn, người dẫn dắt tâm hồn", exampleSentence: "Joe was assigned to be a mentor for soul number 22.", exampleVi: "Joe được phân công làm người cố vấn cho linh hồn số 22." },
      { word: "Improvise", phonetic: "/ˈɪm.prə.vaɪz/", meaningVi: "Ngẫu hứng, biến tấu (trong nhạc jazz và cuộc sống)", exampleSentence: "Jazz musicians love to improvise on stage.", exampleVi: "Các nghệ sĩ nhạc jazz rất thích ngẫu hứng biến tấu trên sân khấu." },
      { word: "Giggle", phonetic: "/ˈɡɪɡ.əl/", meaningVi: "Tiếng cười khúc khích hồn nhiên", exampleSentence: "The little soul giggled while eating pizza crust.", exampleVi: "Linh hồn bé nhỏ cười khúc khích khi gặm mẩu viền bánh pizza." },
      { word: "Lost soul", phonetic: "/lɒst səʊl/", meaningVi: "Linh hồn lạc lối vì nỗi ám ảnh", exampleSentence: "When obsessions take over, people become lost souls.", exampleVi: "Khi nỗi ám ảnh chiếm trọn tâm trí, người ta trở thành những linh hồn lạc lối." },
      { word: "Helicopter seed", phonetic: "/ˈhel.ɪˌkɒp.tər siːd/", meaningVi: "Quả hạt chò xoay tròn rơi trong gió", exampleSentence: "Number 22 caught a spinning helicopter seed from a tree.", exampleVi: "Số 22 đã đón lấy một hạt chò xoay tít rơi từ cành cây." },
      { word: "Barbershop", phonetic: "/ˈbɑː.bə.ʃɒp/", meaningVi: "Tiệm cắt tóc nam truyền thống", exampleSentence: "They had a meaningful conversation at Dez's barbershop.", exampleVi: "Họ đã có một cuộc trò chuyện đầy ý nghĩa tại tiệm cắt tóc của Dez." },
      { word: "Trombone", phonetic: "/trɒmˈbəʊn/", meaningVi: "Cây kèn trom-bon kim loại", exampleSentence: "Connie played her trombone with raw emotional power.", exampleVi: "Connie đã thổi cây kèn trom-bon của mình với nguồn cảm xúc mãnh liệt." }
    ],
    quotes: [
      { character: "Dorothea Williams", en: "I heard this story about a fish. He swims up to this older fish and says, 'I'm trying to find this thing they call the ocean.' 'The ocean?' says the older fish, 'That's what you're in right now.'", vi: "Tôi từng nghe câu chuyện về chú cá nhỏ. Chú bơi tới gặp một con cá già và hỏi: 'Cháu đang tìm thứ người ta gọi là đại dương.' 'Đại dương ư?' con cá già đáp, 'Đó chính là nơi cháu đang ở ngay lúc này đây.'", explanationVi: "Câu chuyện ngụ ngôn tuyệt đẹp về việc nhận ra hạnh phúc ngay trong hiện tại." },
      { character: "Joe Gardner", en: "Music is all I think about. From the moment I wake up in the morning to the moment I fall asleep.", vi: "Âm nhạc là tất cả những gì tôi nghĩ đến. Từ lúc thức dậy vào buổi sáng cho tới khoảnh khắc chìm vào giấc ngủ.", explanationVi: "Bộc lộ niềm đam mê nghề nghiệp cháy bỏng." }
    ]
  },

  // 17. Suits (C1-C2)
  "suits": {
    vocabularies: [
      { word: "Litigation", phonetic: "/ˌlɪt.ɪˈɡeɪ.ʃən/", meaningVi: "Sự tranh tụng tại tòa án", exampleSentence: "Harvey is the best litigation closer in New York City.", exampleVi: "Harvey là luật sư chốt hạ tranh tụng giỏi nhất thành phố New York." },
      { word: "Subpoena", phonetic: "/səˈpiː.nə/", meaningVi: "Trát đòi hầu tòa của tòa án", exampleSentence: "The defense received a federal subpoena for all internal documents.", exampleVi: "Bên bào chữa đã nhận được trát đòi của liên bang nộp toàn bộ tài liệu nội bộ." },
      { word: "Deposition", phonetic: "/ˌdep.əˈzɪʃ.ən/", meaningVi: "Lời khai hữu thệ trước khi ra tòa", exampleSentence: "We are going to tear their witness apart during the deposition.", exampleVi: "Chúng ta sẽ xé nát nhân chứng của họ trong buổi lấy lời khai hữu thệ." },
      { word: "Retainer", phonetic: "/rɪˈteɪ.nər/", meaningVi: "Khoản phí thuê luật sư trả trước", exampleSentence: "The client wired a substantial retainer fee this morning.", exampleVi: "Khách hàng đã chuyển khoản một khoản phí dịch vụ pháp lý trả trước rất lớn sáng nay." },
      { word: "Perjury", phonetic: "/ˈpɜː.dʒər.i/", meaningVi: "Tội khai man trước vành móng ngựa", exampleSentence: "Lying under oath is a serious crime called perjury.", exampleVi: "Nói dối khi đã tuyên thệ là một trọng tội được gọi là tội khai man." },
      { word: "Pro bono", phonetic: "/ˌprəʊ ˈbəʊ.nəʊ/", meaningVi: "Dịch vụ pháp lý miễn phí vì cộng đồng", exampleSentence: "Rachel convinced Mike to take on a pro bono housing case.", exampleVi: "Rachel đã thuyết phục Mike nhận thụ lý một vụ kiện nhà đất miễn phí vì cộng đồng." },
      { word: "Senior partner", phonetic: "/ˈsiː.ni.ər ˈpɑːt.nər/", meaningVi: "Cổ đông cấp cao của công ty luật", exampleSentence: "Making senior partner requires bringing in millions in revenue.", exampleVi: "Để trở thành thành viên cấp cao đòi hỏi phải mang về hàng triệu đô la doanh thu." }
    ],
    quotes: [
      { character: "Harvey Specter", en: "I don't play the odds, I play the man.", vi: "Tôi không cược vào xác suất, tôi nắm thóp chính con người.", explanationVi: "Tư duy đàm phán tâm lý bậc thầy của Harvey Specter." },
      { character: "Harvey Specter", en: "Win a no-win situation by rewriting the rules.", vi: "Hãy chiến thắng một tình thế tưởng như bất khả thi bằng cách viết lại chính luật chơi.", explanationVi: "Lối tư duy đột phá phá bỏ lối mòn trong kinh doanh và luật pháp." },
      { character: "Mike Ross", en: "Sometimes the good guys gotta do bad things to make the bad guys pay.", vi: "Đôi khi người tốt buộc phải làm những điều gai góc để bắt kẻ xấu phải trả giá.", explanationVi: "Nghịch lý đạo đức trong thực tế tư pháp." }
    ]
  },

  // 18. Sherlock (BBC) (C1-C2)
  "sherlock": {
    vocabularies: [
      { word: "Deduction", phonetic: "/dɪˈdʌk.ʃən/", meaningVi: "Phương pháp suy luận diễn dịch logic", exampleSentence: "Sherlock's power of deduction can solve any mystery in minutes.", exampleVi: "Khả năng suy luận diễn dịch của Sherlock có thể giải mã bất kỳ bí ẩn nào trong vài phút." },
      { word: "Mind palace", phonetic: "/maɪnd ˈpæl.ɪs/", meaningVi: "Lâu đài ký ức (kỹ thuật ghi nhớ siêu phàm)", exampleSentence: "He retreats into his mind palace to search through vast data.", exampleVi: "Anh ấy lui về lâu đài ký ức trong tâm trí để lục lọi kho dữ liệu khổng lồ." },
      { word: "Forensic", phonetic: "/fəˈren.zɪk/", meaningVi: "Thuộc về khoa học pháp y, giám định hiện trường", exampleSentence: "The forensic evidence contradicts the suspect's testimony.", exampleVi: "Bằng chứng pháp y mâu thuẫn hoàn toàn với lời khai của kẻ tình nghi." },
      { word: "Arch-nemesis", phonetic: "/ˌɑːtʃˈnem.ə.sɪs/", meaningVi: "Kẻ thù truyền kiếp, đối thủ không đội trời chung", exampleSentence: "Jim Moriarty is Sherlock's brilliant arch-nemesis.", exampleVi: "Jim Moriarty là kẻ thù truyền kiếp thiên tài của Sherlock." },
      { word: "Sociopath", phonetic: "/ˈsəʊ.si.ə.pæθ/", meaningVi: "Kẻ có nhân cách chống đối xã hội", exampleSentence: "I'm not a psychopath, Anderson, I'm a high-functioning sociopath.", exampleVi: "Tôi không phải kẻ tâm thần đâu Anderson, tôi là một kẻ chống đối xã hội có chức năng cao." },
      { word: "Conspiracy", phonetic: "/kənˈspɪr.ə.si/", meaningVi: "Âm mưu mờ ám ngầm", exampleSentence: "The murder was part of a larger government conspiracy.", exampleVi: "Vụ giết người là một phần trong một âm mưu chính phủ quy mô lớn hơn." },
      { word: "Alibi", phonetic: "/ˈæl.ɪ.baɪ/", meaningVi: "Bằng chứng ngoại phạm", exampleSentence: "The suspect has an unbreakable alibi for the time of death.", exampleVi: "Nghi phạm có một chứng cứ ngoại phạm không thể bác bỏ vào thời điểm nạn nhân tử vong." }
    ],
    quotes: [
      { character: "Sherlock Holmes", en: "The game is on!", vi: "Cuộc chơi trí tuệ chính thức bắt đầu rồi!", explanationVi: "Câu nói hào hứng đặc trưng mỗi khi có một vụ án hóc búa xuất hiện." },
      { character: "Sherlock Holmes", en: "Dear God, what is it like in your funny little brains? It must be so boring.", vi: "Lạy Chúa, ở trong những bộ não nhỏ bé nực cười của các người thì như thế nào nhỉ? Hẳn là nhàm chán đến cùng cực.", explanationVi: "Lối nói kiêu ngạo đặc trưng kiểu Anh của thám tử thiên tài." },
      { character: "John Watson", en: "You're a great man, Sherlock, and I think one day, if we're very lucky, you might even be a good one.", vi: "Cậu là một con người vĩ đại Sherlock à, và tôi nghĩ một ngày nào đó nếu chúng ta may mắn, cậu thậm chí có thể trở thành một con người tốt lành.", explanationVi: "Sự thấu cảm nhân văn của người bạn chí cốt John Watson." }
    ]
  },

  // 19. The Social Network (C1-C2)
  "the-social-network": {
    vocabularies: [
      { word: "Algorithm", phonetic: "/ˈæl.ɡə.rɪ.ðəm/", meaningVi: "Thuật toán máy tính", exampleSentence: "Mark wrote the chess rating algorithm on the dorm window.", exampleVi: "Mark đã viết thuật toán xếp hạng cờ vua lên tấm cửa kính ký túc xá." },
      { word: "Angel investor", phonetic: "/ˈeɪn.dʒəl ɪnˈves.tər/", meaningVi: "Nhà đầu tư thiên thần (rót vốn sớm)", exampleSentence: "Peter Thiel became Facebook's first major angel investor.", exampleVi: "Peter Thiel đã trở thành nhà đầu tư thiên thần lớn đầu tiên của Facebook." },
      { word: "Venture capital", phonetic: "/ˈven.tʃər ˌkæp.ɪ.təl/", meaningVi: "Quỹ đầu tư mạo hiểm", exampleSentence: "Silicon Valley venture capital firms lined up to meet them.", exampleVi: "Các quỹ đầu tư mạo hiểm Thung lũng Silicon đã xếp hàng để gặp họ." },
      { word: "Intellectual property", phonetic: "/ˌɪn.təlˈek.tʃu.əl ˈprɒp.ə.ti/", meaningVi: "Sở hữu trí tuệ", exampleSentence: "The Winklevoss twins sued over alleged stolen intellectual property.", exampleVi: "Hai anh em sinh đôi Winklevoss đã kiện vì cáo buộc bị đánh cắp sở hữu trí tuệ." },
      { word: "Dilution", phonetic: "/daɪˈluː.ʃən/", meaningVi: "Sự pha loãng cổ phần công ty", exampleSentence: "Eduardo's shares suffered severe dilution down to point zero three percent.", exampleVi: "Cổ phần của Eduardo bị pha loãng thê thảm xuống chỉ còn 0,03 phần trăm." },
      { word: "Server", phonetic: "/ˈsɜː.vər/", meaningVi: "Máy chủ lưu trữ mạng", exampleSentence: "Harvard's servers crashed due to overwhelming web traffic.", exampleVi: "Máy chủ của đại học Harvard bị sập do lượng truy cập web quá khủng khiếp." },
      { word: "Settlement", phonetic: "/ˈset.əl.mənt/", meaningVi: "Thỏa thuận dàn xếp bồi thường ngoài tòa", exampleSentence: "Both parties signed a confidential multi-million-dollar settlement.", exampleVi: "Hai bên đã ký một thỏa thuận dàn xếp bí mật trị giá nhiều triệu đô la." }
    ],
    quotes: [
      { character: "Sean Parker", en: "A million dollars isn't cool. You know what's cool? A billion dollars.", vi: "Một triệu đô chẳng có gì ngầu cả. Cậu biết cái gì mới thực sự ngầu không? Một tỷ đô.", explanationVi: "Câu thoại kinh điển định hình tham vọng quy mô toàn cầu." },
      { character: "Mark Zuckerberg", en: "If you guys were the inventors of Facebook, you'd have invented Facebook.", vi: "Nếu các anh mà thực sự là những người phát minh ra Facebook, thì các anh đã tự phát minh ra nó rồi.", explanationVi: "Cú phản pháo đanh thép trước các luật sư trong phiên lấy lời khai." },
      { character: "Eduardo Saverin", en: "I was your only friend. You had one friend.", vi: "Tôi từng là người bạn duy nhất của cậu. Cậu từng chỉ có đúng một người bạn mà thôi.", explanationVi: "Nỗi đau tình bạn tan vỡ sau cuộc chiến quyền lực thương trường." }
    ]
  },

  // 20. The King's Speech (C1-C2)
  "the-kings-speech": {
    vocabularies: [
      { word: "Stammer", phonetic: "/ˈstæm.ər/", meaningVi: "Tật nói lắp bắp", exampleSentence: "The prince suffered from a severe stammer when speaking in public.", exampleVi: "Hoàng tử mắc chứng tật nói lắp nặng mỗi khi phát biểu trước công chúng." },
      { word: "Elocution", phonetic: "/ˌel.əˈkjuː.ʃən/", meaningVi: "Nghệ thuật phát âm hùng biện truyền cảm", exampleSentence: "Lionel Logue was an unorthodox teacher of elocution.", exampleVi: "Lionel Logue là một thầy dạy nghệ thuật phát âm theo phương pháp khác người." },
      { word: "Abdication", phonetic: "/ˌæb.dɪˈkeɪ.ʃən/", meaningVi: "Sự thoái vị nhường ngôi", exampleSentence: "King Edward's abdication thrust his nervous brother onto the throne.", exampleVi: "Việc vua Edward thoái vị đã đẩy người em trai nhút nhát của mình lên ngai vàng." },
      { word: "Microphone", phonetic: "/ˈmaɪ.krə.fəʊn/", meaningVi: "Chiếc micro phát thanh vô tuyến", exampleSentence: "The radio microphone felt like an instrument of torture.", exampleVi: "Chiếc micro phát thanh radio ngỡ như một công cụ tra tấn đối với ông." },
      { word: "Resonance", phonetic: "/ˈrez.ən.əns/", meaningVi: "Độ vang, sự cộng hưởng của âm thanh", exampleSentence: "Vocal resonance requires proper posture and deep relaxation.", exampleVi: "Độ vang của giọng nói đòi hỏi tư thế chuẩn và sự thả lỏng sâu." },
      { word: "Wartime", phonetic: "/ˈwɔː.taɪm/", meaningVi: "Thời kỳ chiến tranh bom đạn", exampleSentence: "A wartime monarch must inspire hope across the empire.", exampleVi: "Một vị vua thời chiến phải thắp lên niềm hy vọng cho toàn đế chế." }
    ],
    quotes: [
      { character: "Lionel Logue", en: "Forget everything else and just say it to me. Say it to me as a friend.", vi: "Hãy quên hết mọi người ngoài kia đi và chỉ nói với tôi thôi. Hãy nói với tôi như với một người bạn.", explanationVi: "Kỹ thuật giải tỏa tâm lý căng thẳng xuất sắc của Lionel." },
      { character: "King George VI", en: "I have a voice!", vi: "Tôi có tiếng nói của riêng mình!", explanationVi: "Khoảnh khắc khẳng định phẩm giá tối cao của con người." },
      { character: "Queen Elizabeth", en: "Thank you, Lionel. You were splendid.", vi: "Cảm ơn ông, Lionel. Ông thật là tuyệt vời.", explanationVi: "Lời cảm kích chân thành từ hoàng tộc dành cho vị trị liệu bình dân." }
    ]
  },

  // 21. The Crown (C1-C2)
  "the-crown": {
    vocabularies: [
      { word: "Constitutional", phonetic: "/ˌkɒn.stɪˈtʃuː.ʃən.əl/", meaningVi: "Thuộc về hiến pháp quốc gia", exampleSentence: "The monarch acts under constitutional advice from the Prime Minister.", exampleVi: "Nữ hoàng hành động dựa trên sự tham vấn hiến pháp từ Thủ tướng." },
      { word: "Privy Council", phonetic: "/ˈprɪv.i ˈkaʊn.səl/", meaningVi: "Hội đồng Cơ mật Hoàng gia", exampleSentence: "Ministers gathered before the Privy Council at Buckingham Palace.", exampleVi: "Các bộ trưởng tề tựu trước Hội đồng Cơ mật tại Cung điện Buckingham." },
      { word: "Coronation", phonetic: "/ˌkɒr.əˈneɪ.ʃən/", meaningVi: "Lễ đăng quang đội vương miện", exampleSentence: "Millions watched the Queen's coronation on live television.", exampleVi: "Hàng triệu người đã theo dõi lễ đăng quang của Nữ hoàng trên truyền hình trực tiếp." },
      { word: "Deference", phonetic: "/ˈdef.ər.əns/", meaningVi: "Sự tôn kính, cung kính phục tùng", exampleSentence: "Modern society showed less traditional deference to royalty.", exampleVi: "Xã hội hiện đại ngày càng ít thể hiện sự cung kính truyền thống đối với hoàng gia." },
      { word: "Neutrality", phonetic: "/njuːˈtræl.ə.ti/", meaningVi: "Tính trung lập chính trị", exampleSentence: "The Crown must maintain strict political neutrality at all times.", exampleVi: "Vương quyền phải luôn duy trì tính trung lập chính trị tuyệt đối." },
      { word: "Dynasty", phonetic: "/ˈdɪn.ə.sti/", meaningVi: "Triều đại, dòng dõi quân vương", exampleSentence: "The House of Windsor is Britain's reigning royal dynasty.", exampleVi: "Nhà Windsor là triều đại hoàng gia đang trị vì của nước Anh." }
    ],
    quotes: [
      { character: "Winston Churchill", en: "Never let them see that the light between you and them is ordinary.", vi: "Đừng bao giờ để dân chúng thấy khoảng cách giữa người và họ là tầm thường.", explanationVi: "Lời khuyên uy nghiêm của Thủ tướng kỳ cựu Winston Churchill." },
      { character: "Queen Elizabeth II", en: "I have no choice. The prime minister made that clear.", vi: "Tôi không có sự lựa chọn nào khác. Ngài thủ tướng đã nói rõ điều đó rồi.", explanationVi: "Bi kịch của bổn phận giằng xé với tình cảm gia đình." },
      { character: "Prince Philip", en: "You have taken my children's name. Am I an amoeba?", vi: "Em đã tước đi họ của các con anh. Lẽ nào anh chỉ là một con amip vô danh?", explanationVi: "Xung đột hôn nhân căng thẳng đằng sau cánh cửa hoàng gia." }
    ]
  },

  // 22. Oppenheimer (C1-C2)
  "oppenheimer": {
    vocabularies: [
      { word: "Chain reaction", phonetic: "/tʃeɪn riˈæk.ʃən/", meaningVi: "Phản ứng dây chuyền hạt nhân", exampleSentence: "Could this atomic test trigger an atmospheric chain reaction?", exampleVi: "Liệu vụ thử nguyên tử này có thể kích hoạt một phản ứng dây chuyền thiêu rụi bầu khí quyển?" },
      { word: "Espionage", phonetic: "/ˈes.pi.ə.nɑːʒ/", meaningVi: "Hoạt động gián điệp tình báo", exampleSentence: "The FBI investigated suspected Soviet espionage at Los Alamos.", exampleVi: "FBI đã điều tra nghi án gián điệp Liên Xô tại phòng thí nghiệm Los Alamos." },
      { word: "Clearance", phonetic: "/ˈklɪə.rəns/", meaningVi: "Giấy phép an ninh mật cấp quốc gia", exampleSentence: "His security clearance was revoked during the Cold War witch-hunt.", exampleVi: "Giấy phép an ninh tuyệt mật của ông đã bị thu hồi trong cuộc thanh trừng thời Chiến tranh Lạnh." },
      { word: "Deterrent", phonetic: "/dɪˈter.ənt/", meaningVi: "Sức mạnh răn đe quân sự ngăn ngừa chiến tranh", exampleSentence: "They believed the atomic bomb would act as a universal deterrent.", exampleVi: "Họ từng tin rằng bom nguyên tử sẽ đóng vai trò như một đòn răn đe toàn cầu." },
      { word: "Isotope", phonetic: "/ˈaɪ.sə.təʊp/", meaningVi: "Đồng vị phóng xạ nguyên tử", exampleSentence: "Uranium-235 is the fissile isotope required for nuclear weapons.", exampleVi: "Uranium-235 là đồng vị phân hạch bắt buộc cho vũ khí hạt nhân." },
      { word: "Compartmentalization", phonetic: "/kəmˌpɑːt.men.təl.aɪˈzeɪ.ʃən/", meaningVi: "Sự chia tách thông tin bảo mật theo ngăn buồng độc lập", exampleSentence: "General Groves enforced strict compartmentalization on the project.", exampleVi: "Tướng Groves đã áp đặt quy chế chia tách bảo mật nghiêm ngặt cho dự án." }
    ],
    quotes: [
      { character: "J. Robert Oppenheimer", en: "They won't fear it until they understand it, and they won't understand it until they've used it.", vi: "Họ sẽ không sợ nó cho đến khi họ hiểu nó, và họ sẽ không hiểu nó cho đến khi họ đã sử dụng nó.", explanationVi: "Lời dự báo rùng mình về bản chất con người và vũ khí hủy diệt." },
      { character: "Albert Einstein", en: "When they've punished you enough, they'll serve you salmon and potato salad, give you a medal. Just remember, it won't be for you. It would be for them.", vi: "Khi họ đã trừng phạt cậu chán chê, họ sẽ thết đãi cậu món cá hồi và salad khoai tây, trao tặng cho cậu huân chương. Nhưng hãy nhớ lấy, điều đó chẳng phải vì cậu đâu. Đó là vì sự xoa dịu lương tâm của chính họ.", explanationVi: "Cái nhìn sâu cay thấu suốt thói đời của nhà bác học Einstein." },
      { character: "Kitty Oppenheimer", en: "You sit there, day after day, letting them pick you apart, because you think it's penance. It isn't.", vi: "Anh ngồi đó, ngày này qua ngày khác, để mặc họ mổ xẻ xé nát anh, bởi vì anh nghĩ đó là sự chuộc tội. Nhưng không phải đâu.", explanationVi: "Sự căm phẫn xót xa của người vợ chứng kiến chồng bị bức hại." }
    ]
  },

  // 23. Inception (C1-C2)
  "inception": {
    vocabularies: [
      { word: "Totem", phonetic: "/ˈtəʊ.təm/", meaningVi: "Vật tổ nhận diện thực tại (con quay, con xúc xắc)", exampleSentence: "Cobb spins his spinning top totem to check if he is awake.", exampleVi: "Cobb xoay con quay vật tổ để kiểm tra xem mình có đang tỉnh táo hay không." },
      { word: "Limbo", phonetic: "/ˈlɪm.bəʊ/", meaningVi: "Cõi hư vô sâu thẳm của tiềm thức nguyên sơ", exampleSentence: "If you die under heavy sedation, you drop into unconstructed limbo.", exampleVi: "Nếu bạn chết dưới thuốc an thần liều cao, bạn sẽ rơi vào cõi hư vô vô tận." },
      { word: "Sedative", phonetic: "/ˈsed.ə.tɪv/", meaningVi: "Thuốc an thần gây mê ngủ sâu", exampleSentence: "Yusuf brewed a powerful customized sedative for multi-layer dreaming.", exampleVi: "Yusuf đã bào chế một loại thuốc an thần mạnh để phục vụ giấc mơ đa tầng." },
      { word: "Kick", phonetic: "/kɪk/", meaningVi: "Cú hích đánh thức (cảm giác rơi tự do)", exampleSentence: "The synchronized kick brings everyone out of the dream simultaneously.", exampleVi: "Cú hích đồng bộ sẽ kéo tất cả mọi người ra khỏi giấc mơ cùng một lúc." },
      { word: "Projection", phonetic: "/prəˈdʒek.ʃən/", meaningVi: "Hình chiếu tiềm thức của tâm trí đối tượng", exampleSentence: "Fischer's subconscious projections are militarized and aggressive.", exampleVi: "Những hình chiếu tiềm thức của Fischer đã được huấn luyện vũ trang và cực kỳ hung hãn." },
      { word: "Paradox", phonetic: "/ˈpær.ə.dɒks/", meaningVi: "Nghịch lý hình học kiến trúc (cầu thang Penrose vô tận)", exampleSentence: "Ariadne designed a Penrose paradox staircase to deceive security.", exampleVi: "Ariadne đã thiết kế chiếc cầu thang nghịch lý Penrose để đánh lừa bảo vệ." }
    ],
    quotes: [
      { character: "Eames", en: "You mustn't be afraid to dream a little bigger, darling.", vi: "Em không được sợ hãi mơ lớn hơn một chút đâu, cưng à.", explanationVi: "Câu nói hóm hỉnh khi lôi khẩu súng phóng lựu siêu to ra." },
      { character: "Mal Cobb", en: "You're waiting for a train. A train that will take you far away.", vi: "Anh đang đợi một chuyến tàu. Một chuyến tàu sẽ đưa anh đi thật xa.", explanationVi: "Khẩu quyết tiềm thức ám ảnh giữa Cobb và người vợ quá cố Mal." },
      { character: "Dom Cobb", en: "An idea is like a virus. Resilient. Highly contagious.", vi: "Một ý niệm tựa như loài virus. Kiên cường và có tính lây lan cực mạnh.", explanationVi: "Định nghĩa cốt lõi về bản chất của cấy ghép ý niệm (inception)." }
    ]
  },

  // 24. House of Cards (C1-C2)
  "house-of-cards": {
    vocabularies: [
      { word: "Whip", phonetic: "/wɪp/", meaningVi: "Trưởng ban kỷ luật bỏ phiếu của phe nghị sĩ", exampleSentence: "As Majority Whip, Frank ensures everyone votes with the party.", exampleVi: "Với tư cách Trưởng ban kỷ luật phe đa số, Frank bảo đảm mọi người bỏ phiếu đúng đường lối đảng." },
      { word: "Inauguration", phonetic: "/ɪˌnɔː.ɡjəˈreɪ.ʃən/", meaningVi: "Lễ nhậm chức tổng thống long trọng", exampleSentence: "The inauguration ceremony took place on the Capitol steps.", exampleVi: "Lễ nhậm chức đã diễn ra trang trọng trên các bậc thềm đồi Capitol." },
      { word: "Blackmail", phonetic: "/ˈblæk.meɪl/", meaningVi: "Tống tiền, đe dọa bằng bí mật bẩn", exampleSentence: "Frank used damning evidence to blackmail the corrupt congressman.", exampleVi: "Frank đã dùng bằng chứng xác thực để tống tiền gã nghị sĩ tham nhũng." },
      { word: "Filibuster", phonetic: "/ˈfɪl.ɪ.bʌs.tər/", meaningVi: "Chiêu trò phát biểu kéo dài thời gian để cản trở dự luật", exampleSentence: "The opposition senator staged an eight-hour filibuster on the Senate floor.", exampleVi: "Thượng nghị sĩ đối lập đã diễn thuyết suốt 8 tiếng để cản trở dự luật tại sàn Thượng viện." },
      { word: "Cabinet", phonetic: "/ˈkæb.ɪ.nət/", meaningVi: "Nội các chính phủ gồm các bộ trưởng", exampleSentence: "Frank was promised the Secretary of State position in the new Cabinet.", exampleVi: "Frank từng được hứa trao chiếc ghế Ngoại trưởng trong Nội các mới." },
      { word: "Machiavellian", phonetic: "/ˌmæk.i.əˈvel.i.ən/", meaningVi: "Mưu mô xảo quyệt, theo chủ nghĩa Machiavelli", exampleSentence: "Frank's Machiavellian schemes dismantled his rivals one by one.", exampleVi: "Những mưu kế xảo quyệt kiểu Machiavelli của Frank đã triệt hạ từng đối thủ một." }
    ],
    quotes: [
      { character: "Frank Underwood", en: "Money is the McMansion in Sarasota that starts falling apart after ten years. Power is the old stone building that stands for centuries.", vi: "Tiền tài giống như ngôi biệt thự hào nhoáng ở Sarasota bắt đầu sập đổ sau mười năm. Còn quyền lực là tòa lâu đài đá sừng sững qua hàng thế kỷ.", explanationVi: "Định nghĩa kinh điển về bản chất tối thượng của quyền lực chính trị." },
      { character: "Frank Underwood", en: "If you don't like how the table is set, turn over the table.", vi: "Nếu không thích cách bàn tiệc được bày biện, hãy lật tung cả cái bàn lên.", explanationVi: "Chiến lược hành động quyết liệt chủ động phá vỡ thế cờ của đối thủ." },
      { character: "Claire Underwood", en: "I saw a future our eyes couldn't bear to look away from.", vi: "Em đã nhìn thấy một tương lai mà đôi mắt chúng ta không thể nào dời đi được.", explanationVi: "Tham vọng sắt đá đồng hành cùng chồng của Claire Underwood." }
    ]
  }
};
