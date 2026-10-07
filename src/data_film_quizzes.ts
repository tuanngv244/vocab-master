import { FilmQuizQuestion } from "./data_films";

export const filmQuizMap: Record<string, FilmQuizQuestion[]> = {
  "finding-nemo": [
    {
      "id": "nemo_1",
      "dialogueContext": "Dory động viên Marlin khi anh đang tuyệt vọng giữa đại dương sâu thẳm:",
      "question": "Dory khuyên Marlin: 'When life gets you down, you know what you gotta do? Just keep _______!'",
      "options": [
        "swimming",
        "running",
        "sleeping",
        "crying"
      ],
      "answer": "swimming",
      "explanationVi": "Câu thoại kinh điển của Dory: 'Just keep swimming' (Cứ tiếp tục bơi đi). Cấu trúc 'keep + V-ing' diễn tả hành động tiếp tục làm gì đó không bỏ cuộc."
    },
    {
      "id": "nemo_2",
      "dialogueContext": "Marlin căn dặn Nemo kỹ càng vào ngày đầu tiên tới trường rạn san hô:",
      "question": "Nemo háo hức muốn ra ngoài biển khơi, Marlin bảo: 'The ocean is not _______ for little fish.'",
      "options": [
        "safe",
        "danger",
        "big",
        "salty"
      ],
      "answer": "safe",
      "explanationVi": "Tính từ 'safe' (an toàn). Marlin luôn lo lắng biển cả không an toàn cho Nemo vì chiếc vây nhỏ của chú bé."
    },
    {
      "id": "nemo_3",
      "dialogueContext": "Bruce chú cá mập trắng đọc lời tuyên thệ trước các bạn cá mập:",
      "question": "Câu thề nổi tiếng của Bruce: 'Fish are friends, not _______!'",
      "options": [
        "food",
        "enemies",
        "toys",
        "pets"
      ],
      "answer": "food",
      "explanationVi": "'Fish are friends, not food' (Cá là bạn bè, không phải thức ăn). Bruce cố gắng ăn chay và kết bạn với các loài sinh vật biển."
    },
    {
      "id": "nemo_4",
      "dialogueContext": "Đám hải âu trên bến cảng Sydney đồng thanh kêu tranh giành con mồi:",
      "question": "Từ tiếng Anh nào mà bầy hải âu đồng thanh hét liên tục?",
      "options": [
        "Mine!",
        "Fish!",
        "Give!",
        "Now!"
      ],
      "answer": "Mine!",
      "explanationVi": "'Mine!' (Của tao/Của tôi!). Đại từ sở hữu 'mine' dùng độc lập không cần danh từ theo sau."
    },
    {
      "id": "nemo_5",
      "dialogueContext": "Rùa biển Crush chào hỏi Marlin theo phong cách lướt sóng miền biển California:",
      "question": "Crush gọi Marlin bằng từ lóng thân mật phổ biến nào?",
      "options": [
        "Dude",
        "Sir",
        "Mister",
        "Captain"
      ],
      "answer": "Dude",
      "explanationVi": "'Dude' là từ lóng tiếng Anh-Mỹ cực kỳ phổ biến để gọi bạn bè một cách thân mật, suồng sã."
    },
    {
      "id": "nemo_6",
      "dialogueContext": "Dory khoe khả năng đặc biệt khi nói chuyện với loài cá voi khổng lồ:",
      "question": "Dory tự tin khẳng định: 'I can speak _______!'",
      "options": [
        "Whale",
        "Dolphin",
        "Shark",
        "Human"
      ],
      "answer": "Whale",
      "explanationVi": "Dory tin rằng mình có thể nói tiếng Cá Voi ('speak Whale') bằng cách ngân dài và trầm giọng hài hước."
    },
    {
      "id": "nemo_7",
      "dialogueContext": "Marlin dặn dò Nemo trước khi chú bé bước vào lớp học của Thầy Ray:",
      "question": "'First thing to remember: Always _______ to your teacher.' Điền động từ thích hợp:",
      "options": [
        "listen",
        "hear",
        "sound",
        "watch"
      ],
      "answer": "listen",
      "explanationVi": "Cụm 'listen to someone' (lắng nghe ai đó), khác với 'hear' chỉ là nghe thấy thụ động."
    },
    {
      "id": "nemo_8",
      "dialogueContext": "Địa chỉ ghi trên chiếc kính lặn rơi dưới đáy biển mà Dory cố ghi nhớ:",
      "question": "Địa chỉ nổi tiếng là: 'P. Sherman, 42 Wallaby Way, _______'?",
      "options": [
        "Sydney",
        "Melbourne",
        "London",
        "New York"
      ],
      "answer": "Sydney",
      "explanationVi": "P. Sherman, 42 Wallaby Way, Sydney - địa chỉ phòng khám nha sĩ nơi Nemo bị bắt giữ."
    },
    {
      "id": "nemo_9",
      "dialogueContext": "Dory giải thích về tình trạng hay quên hài hước của bản thân:",
      "question": "Dory nói: 'I suffer from short-term memory _______.'",
      "options": [
        "loss",
        "lost",
        "lose",
        "losing"
      ],
      "answer": "loss",
      "explanationVi": "Cụm danh từ y khoa 'short-term memory loss' nghĩa là chứng mất trí nhớ ngắn hạn."
    },
    {
      "id": "nemo_10",
      "dialogueContext": "Crush giải thích về hải lưu Đông Úc (East Australian Current - EAC):",
      "question": "'You ride the current, it takes you right to Sydney.' Động từ 'ride' ở đây mang nghĩa là gì?",
      "options": [
        "Nương theo / lướt theo dòng chảy",
        "Lái xe hơi",
        "Đạp xe đạp",
        "Cưỡi ngựa"
      ],
      "answer": "Nương theo / lướt theo dòng chảy",
      "explanationVi": "'Ride the current/waves' nghĩa là nương theo làn sóng hoặc dòng hải lưu để di chuyển nhanh."
    },
    {
      "id": "nemo_11",
      "dialogueContext": "Gill động viên Nemo khi cậu bị kẹt trong ống lọc bể cá:",
      "question": "Gill nói: 'Nobody is gonna help you out there. You have to do it _______.'",
      "options": [
        "yourself",
        "myself",
        "himself",
        "itself"
      ],
      "answer": "yourself",
      "explanationVi": "Đại từ phản thân 'yourself' (chính bản thân bạn) nhấn mạnh tính tự lập và can đảm."
    },
    {
      "id": "nemo_12",
      "dialogueContext": "Nigel chú bồ nông bay đến báo tin cho Nemo trong bể cá nha khoa:",
      "question": "Nigel nói: 'Your dad has crossed the entire ocean to _______ you.'",
      "options": [
        "find",
        "punish",
        "scold",
        "ignore"
      ],
      "answer": "find",
      "explanationVi": "'Find' (tìm kiếm). Marlin đã dũng cảm bơi qua cả đại dương để tìm lại con trai mình."
    },
    {
      "id": "nemo_13",
      "dialogueContext": "Nemo và các bạn nhỏ tò mò về chiếc thuyền của con người:",
      "question": "Các bạn nhỏ gọi chiếc thuyền là gì trước khi Nemo bơi ra chạm vào nó?",
      "options": [
        "The butt (cách đọc nhầm từ 'boat')",
        "The monster",
        "The castle",
        "The plane"
      ],
      "answer": "The butt (cách đọc nhầm từ 'boat')",
      "explanationVi": "Trẻ con đọc nhầm từ 'boat' thành 'butt' tạo nên trò đùa 'He touched the butt!' nổi tiếng."
    },
    {
      "id": "nemo_14",
      "dialogueContext": "Marlin nói về chiếc vây nhỏ bẩm sinh của Nemo:",
      "question": "Marlin âu yếm gọi chiếc vây nhỏ của Nemo là 'lucky _______':",
      "options": [
        "fin",
        "tail",
        "eye",
        "hand"
      ],
      "answer": "fin",
      "explanationVi": "'Fin' là vây cá. Chiếc vây may mắn ('lucky fin') giúp Nemo bơi linh hoạt và kiên trì hơn."
    },
    {
      "id": "nemo_15",
      "dialogueContext": "Bầy sứa phát sáng xuất hiện cản đường Marlin và Dory:",
      "question": "Loài sứa trong tiếng Anh được gọi là:",
      "options": [
        "Jellyfish",
        "Starfish",
        "Seahorse",
        "Octopus"
      ],
      "answer": "Jellyfish",
      "explanationVi": "Jellyfish là con sứa, loài sinh vật thân mềm có nọc châm phát sáng."
    },
    {
      "id": "nemo_16",
      "dialogueContext": "Peach cô sao biển trong bể cá luôn quan sát mọi động tĩnh của nha sĩ:",
      "question": "Cô sao biển hô to: 'Root canal at 4 o'clock!' Cụm 'root canal' là thuật ngữ nha khoa chỉ cái gì?",
      "options": [
        "Điều trị tủy răng",
        "Nhổ răng khôn",
        "Cạo vôi răng",
        "Niềng răng"
      ],
      "answer": "Điều trị tủy răng",
      "explanationVi": "'Root canal' là thủ thuật lấy tủy răng trong nha khoa, một từ vựng chuyên môn thực tế."
    },
    {
      "id": "nemo_17",
      "dialogueContext": "Nemo chỉ huy đàn cá trong lưới cùng bơi xuống đáy để phá vỡ lưới đánh cá:",
      "question": "Nemo hét lớn mệnh lệnh gì để cứu cả đàn cá?",
      "options": [
        "Swim down!",
        "Jump up!",
        "Swim away!",
        "Stop moving!"
      ],
      "answer": "Swim down!",
      "explanationVi": "'Swim down!' (Bơi chúc xuống!). Sức mạnh tập thể khi cùng bơi xuống đã kéo đứt lưới của tàu đánh cá."
    },
    {
      "id": "nemo_18",
      "dialogueContext": "Marlin nhận ra mình đã quá bảo bọc con quá mức:",
      "question": "Thành ngữ 'let go' trong lời khuyên của Dory mang ý nghĩa gì?",
      "options": [
        "Buông bỏ sự lo lắng / Cho con tự do trưởng thành",
        "Bỏ rơi con cái",
        "Đi ngủ sớm",
        "Bơi thật nhanh"
      ],
      "answer": "Buông bỏ sự lo lắng / Cho con tự do trưởng thành",
      "explanationVi": "'Let go' trong ngữ cảnh làm cha mẹ nghĩa là học cách tin tưởng và để con tự lập trải nghiệm."
    },
    {
      "id": "nemo_19",
      "dialogueContext": "Dory đọc được dòng chữ tiếng Anh trên chiếc mặt nạ lặn:",
      "question": "Marlin kinh ngạc hỏi: 'You can _______? You can actually read?'",
      "options": [
        "read",
        "write",
        "sing",
        "dance"
      ],
      "answer": "read",
      "explanationVi": "Marlin ngạc nhiên vì một chú cá có thể đọc chữ viết của loài người ('read')."
    },
    {
      "id": "nemo_20",
      "dialogueContext": "Kết thúc chuyến phiêu lưu, Nemo chuẩn bị lên đường đi học:",
      "question": "Nemo quay lại ôm bố và nói câu gì ấm áp trước khi bơi đi?",
      "options": [
        "Love you, Dad!",
        "Good luck, Dad!",
        "See you never!",
        "I am angry, Dad!"
      ],
      "answer": "Love you, Dad!",
      "explanationVi": "'Love you, Dad!' (Con yêu bố!). Khẳng định tình cảm gia đình thiêng liêng và sự thấu hiểu giữa hai cha con."
    }
  ],
  "peppa-pig": [
    {
      "id": "peppa_1",
      "dialogueContext": "Peppa giải thích nguyên tắc vàng khi chơi ngoài trời mưa:",
      "question": "Peppa căn dặn: 'If you jump in muddy puddles, you must wear your _______!'",
      "options": [
        "boots",
        "gloves",
        "hat",
        "slippers"
      ],
      "answer": "boots",
      "explanationVi": "'Boots' (ủng đi mưa). Trẻ con Anh luôn đi 'rubber boots / wellies' khi nhảy vũng bùn."
    },
    {
      "id": "peppa_2",
      "dialogueContext": "George rất mê khủng long và luôn cầm món đồ chơi theo mình:",
      "question": "George phát âm từ 'Dinosaur' thành từ ngộ nghĩnh nào?",
      "options": [
        "Dine-saw!",
        "Big dragon!",
        "Lizard!",
        "Monster!"
      ],
      "answer": "Dine-saw!",
      "explanationVi": "George bi bô gọi chú khủng long đồ chơi là 'Dine-saw! Grrr!' một cách dễ thương."
    },
    {
      "id": "peppa_3",
      "dialogueContext": "Daddy Pig luôn tự hào về khả năng sửa chữa mọi thứ trong nhà:",
      "question": "Daddy Pig thường tự khen mình: 'I am a bit of an _______ at this!'",
      "options": [
        "expert",
        "amateur",
        "artist",
        "idiot"
      ],
      "answer": "expert",
      "explanationVi": "'Expert' (chuyên gia). Cụm hài hước quen thuộc của Daddy Pig mỗi khi tự nhận mình am hiểu lĩnh vực nào đó."
    },
    {
      "id": "peppa_4",
      "dialogueContext": "Mummy Pig chuẩn bị bữa sáng cho cả gia đình:",
      "question": "Món ăn sáng truyền thống nào có bánh kếp trong tiếng Anh?",
      "options": [
        "Pancakes",
        "Pizzas",
        "Burgers",
        "Noodles"
      ],
      "answer": "Pancakes",
      "explanationVi": "'Pancakes' là món bánh kếp nướng chảo quen thuộc mà Daddy Pig thích tung lên cao."
    },
    {
      "id": "peppa_5",
      "dialogueContext": "Người dẫn chuyện (Narrator) mô tả thời tiết nước Anh:",
      "question": "'It is raining today.' Câu này sử dụng thì nào trong tiếng Anh?",
      "options": [
        "Hiện tại tiếp diễn (Present Continuous)",
        "Quá khứ đơn",
        "Tương lai đơn",
        "Hiện tại hoàn thành"
      ],
      "answer": "Hiện tại tiếp diễn (Present Continuous)",
      "explanationVi": "'It is raining' dùng 'is + V-ing' để diễn tả hành động trời đang mưa ngay tại thời điểm nói."
    },
    {
      "id": "peppa_6",
      "dialogueContext": "Bà Thỏ (Miss Rabbit) làm rất nhiều công việc khác nhau trong thị trấn:",
      "question": "Nghề lái xe buýt trường học của Miss Rabbit là gì?",
      "options": [
        "Bus driver",
        "Pilot",
        "Nurse",
        "Chef"
      ],
      "answer": "Bus driver",
      "explanationVi": "'Bus driver' nghĩa là tài xế xe buýt trường học đưa Peppa và bạn bè đi dã ngoại."
    },
    {
      "id": "peppa_7",
      "dialogueContext": "Peppa và cô bạn cừu Suzy Sheep chơi trò giả vờ làm bác sĩ:",
      "question": "Từ tiếng Anh nào chỉ chiếc ống nghe khám bệnh của bác sĩ?",
      "options": [
        "Stethoscope",
        "Microphone",
        "Telescope",
        "Thermometer"
      ],
      "answer": "Stethoscope",
      "explanationVi": "'Stethoscope' là ống nghe y tế, từ vựng rất phổ biến trong tập phim 'The Medical Examination'."
    },
    {
      "id": "peppa_8",
      "dialogueContext": "Ông Heo (Grandpa Pig) chỉ cho Peppa xem các loại rau trong vườn:",
      "question": "Grandpa Pig trồng rau trong vườn, từ 'hạt giống' là:",
      "options": [
        "Seeds",
        "Flowers",
        "Leaves",
        "Branches"
      ],
      "answer": "Seeds",
      "explanationVi": "'Seeds' là hạt giống cây mà Peppa gieo xuống luống đất để mọc thành cây cà chua và dâu tây."
    },
    {
      "id": "peppa_9",
      "dialogueContext": "Daddy Pig bị thất lạc chiếc kính mắt của mình ở phòng khách:",
      "question": "Daddy Pig thốt lên: 'I can't see anything without my _______!'",
      "options": [
        "glasses",
        "shoes",
        "jacket",
        "watch"
      ],
      "answer": "glasses",
      "explanationVi": "'Glasses' (kính đeo mắt). Từ này luôn ở dạng số nhiều vì có hai tròng kính."
    },
    {
      "id": "peppa_10",
      "dialogueContext": "Peppa học cách cư xử lịch sự khi muốn xin mẹ thêm đồ ăn:",
      "question": "Từ lịch sự bắt buộc phải nói khi nhờ vả ai đó là gì?",
      "options": [
        "Please",
        "Now",
        "Quickly",
        "Hey"
      ],
      "answer": "Please",
      "explanationVi": "'Please' (Làm ơn / Dạ vâng) là 'magic word' mà trẻ em Anh luôn được dạy khi nhờ vả."
    },
    {
      "id": "peppa_11",
      "dialogueContext": "Suzy Sheep gọi điện thoại rủ Peppa cùng chơi đồ hàng:",
      "question": "Khi nhấc máy điện thoại, câu chào lịch sự thông dụng nhất là:",
      "options": [
        "Hello, who is speaking please?",
        "What do you want?",
        "Go away!",
        "Why call me?"
      ],
      "answer": "Hello, who is speaking please?",
      "explanationVi": "Cách trả lời điện thoại chuẩn mực của người Anh: 'Hello, who is speaking please?'."
    },
    {
      "id": "peppa_12",
      "dialogueContext": "Madame Gazelle dạy lớp mẫu giáo bài hát về các nốt nhạc:",
      "question": "Nghề nghiệp của Madame Gazelle trong Peppa Pig là:",
      "options": [
        "Teacher (Giáo viên)",
        "Dentist (Nha sĩ)",
        "Baker (Thợ làm bánh)",
        "Police (Cảnh sát)"
      ],
      "answer": "Teacher (Giáo viên)",
      "explanationVi": "Madame Gazelle là cô giáo dạy lớp mẫu giáo ('playgroup teacher') thân yêu của Peppa và các bạn."
    },
    {
      "id": "peppa_13",
      "dialogueContext": "Gia đình Peppa đi cắm trại trong rừng trên chiếc xe lữ hành:",
      "question": "Từ tiếng Anh nào chỉ chiếc xe cắm trại có chỗ ngủ và bếp tiện nghi?",
      "options": [
        "Camper van",
        "Bicycle",
        "Helicopter",
        "Submarine"
      ],
      "answer": "Camper van",
      "explanationVi": "'Camper van' là xe cắm trại dã ngoại gia đình rất phổ biến ở Anh và châu Âu."
    },
    {
      "id": "peppa_14",
      "dialogueContext": "George không chịu ăn rau xanh trên đĩa trong bữa tối:",
      "question": "Rau xà lách và dưa chuột thuộc nhóm thực phẩm nào?",
      "options": [
        "Vegetables",
        "Sweets",
        "Meat",
        "Fruits"
      ],
      "answer": "Vegetables",
      "explanationVi": "'Vegetables' nghĩa là rau củ quả xanh, giàu chất xơ và vitamin."
    },
    {
      "id": "peppa_15",
      "dialogueContext": "Cả gia đình cười ngả nghiêng sau một ngày vui chơi vui nhộn:",
      "question": "Hành động ngã ngửa ra sau cười sảng khoái trên sàn nhà được miêu tả là:",
      "options": [
        "Falling backward laughing",
        "Crying loudly",
        "Fighting",
        "Sleeping soundly"
      ],
      "answer": "Falling backward laughing",
      "explanationVi": "Nét đặc trưng kết thúc mỗi tập phim Peppa Pig là cả gia đình ngã lăn ra cười vui vẻ ('falling backward laughing')."
    },
    {
      "id": "peppa_16",
      "dialogueContext": "Daddy Pig tập thể dục giảm cân theo hướng dẫn trên đài radio:",
      "question": "'Touch your toes!' Câu mệnh lệnh này có nghĩa là gì?",
      "options": [
        "Cúi người chạm vào ngón chân của bạn!",
        "Chạm vào mũi!",
        "Vỗ hai bàn tay!",
        "Nhảy lên cao!"
      ],
      "answer": "Cúi người chạm vào ngón chân của bạn!",
      "explanationVi": "'Toes' là các ngón chân. Động tác gập bụng cúi người chạm ngón chân quen thuộc trong thể dục."
    },
    {
      "id": "peppa_17",
      "dialogueContext": "Peppa và George đi thả diều cùng Grandpa Pig trên đỉnh đồi lộng gió:",
      "question": "Con diều giấy bay trong gió tiếng Anh là gì?",
      "options": [
        "Kite",
        "Balloon",
        "Plane",
        "Bird"
      ],
      "answer": "Kite",
      "explanationVi": "'Kite' là con diều. Khi trời có gió ('windy'), trẻ em rất thích đi 'fly a kite'."
    },
    {
      "id": "peppa_18",
      "dialogueContext": "Peppa nhận được quà sinh nhật từ ông bà là một hộp nhạc xinh xắn:",
      "question": "Mọi người cùng đồng thanh hát bài hát chúc mừng sinh nhật nào?",
      "options": [
        "Happy Birthday to You",
        "Jingle Bells",
        "Twinkle Twinkle",
        "Silent Night"
      ],
      "answer": "Happy Birthday to You",
      "explanationVi": "Bài hát sinh nhật bất hủ toàn cầu 'Happy Birthday to You'."
    },
    {
      "id": "peppa_19",
      "dialogueContext": "Mummy Pig làm việc trên máy tính tại phòng làm việc tại nhà:",
      "question": "Từ tiếng Anh nào chỉ chiếc máy tính xách tay cá nhân?",
      "options": [
        "Laptop / Computer",
        "Television",
        "Radio",
        "Microwave"
      ],
      "answer": "Laptop / Computer",
      "explanationVi": "'Laptop' hoặc 'Computer' là thiết bị vi tính Mummy Pig dùng để làm việc nghiêm túc."
    },
    {
      "id": "peppa_20",
      "dialogueContext": "Peppa chào tạm biệt khán giả nhí vào cuối ngày trước khi đi ngủ:",
      "question": "Lời chúc ngủ ngon tiếng Anh thân mật là gì?",
      "options": [
        "Good night, sleep tight!",
        "Good morning!",
        "Good afternoon!",
        "Happy New Year!"
      ],
      "answer": "Good night, sleep tight!",
      "explanationVi": "'Good night, sleep tight!' là câu chúc ngủ ngon kinh điển của các bậc cha mẹ phương Tây dành cho con nhỏ."
    }
  ],
  "we-bare-bears": [
    {
      "id": "wbb_1",
      "dialogueContext": "Grizz kêu gọi hai người em thực hiện đội hình di chuyển độc nhất vô nhị:",
      "question": "Đội hình ba chú gấu xếp chồng lên nhau được gọi là:",
      "options": [
        "Bear stack",
        "Bear tower",
        "Bear ladder",
        "Bear train"
      ],
      "answer": "Bear stack",
      "explanationVi": "'Bear stack' (chồng gấu). Động từ/danh từ 'stack' nghĩa là xếp chồng ngay ngắn lên nhau."
    },
    {
      "id": "wbb_2",
      "dialogueContext": "Panda lo lắng nhìn điện thoại thông minh khi đăng ảnh lên mạng xã hội:",
      "question": "Panda reo lên: 'Wait, someone just _______ my photo!'",
      "options": [
        "liked",
        "deleted",
        "broke",
        "lost"
      ],
      "answer": "liked",
      "explanationVi": "'Like a photo' (thích/thả tim bức ảnh), từ vựng quen thuộc trên mạng xã hội Instagram/Facebook."
    },
    {
      "id": "wbb_3",
      "dialogueContext": "Ice Bear (Gấu Trắng) luôn có thói quen xưng hô đặc biệt khi nói chuyện:",
      "question": "Ice Bear thường nói về mình ở ngôi thứ mấy?",
      "options": [
        "Ngôi thứ ba ('Ice Bear wants...')",
        "Ngôi thứ nhất ('I want...')",
        "Ngôi thứ hai ('You want...')",
        "Không xưng hô gì"
      ],
      "answer": "Ngôi thứ ba ('Ice Bear wants...')",
      "explanationVi": "Nét độc đáo của Ice Bear là luôn dùng chính tên mình ở ngôi thứ ba: 'Ice Bear bought these legally', 'Ice Bear will fix it'."
    },
    {
      "id": "wbb_4",
      "dialogueContext": "Ba chú gấu cố gắng làm video hài hước để thu hút người xem trên mạng:",
      "question": "Thuật ngữ tiếng Anh chỉ một video lan truyền cực nhanh với hàng triệu view là:",
      "options": [
        "Go viral",
        "Go slow",
        "Go home",
        "Go away"
      ],
      "answer": "Go viral",
      "explanationVi": "'Go viral' nghĩa là lan truyền chóng mặt trên internet như một cơn sốt."
    },
    {
      "id": "wbb_5",
      "dialogueContext": "Grizz rất thích món ăn nhanh thơm ngon của người phương Tây:",
      "question": "Món bánh mì kẹp thịt bò nướng phô mai được gọi là:",
      "options": [
        "Burger",
        "Salad",
        "Soup",
        "Porridge"
      ],
      "answer": "Burger",
      "explanationVi": "'Burger' hay 'hamburger' là món khoái khẩu số một của chú gấu xám Grizzly."
    },
    {
      "id": "wbb_6",
      "dialogueContext": "Panda gặp phải vấn đề sức khỏe nghiêm trọng với đậu phộng:",
      "question": "Panda bị chứng gì khi ăn phải đậu phộng (peanuts)?",
      "options": [
        "Peanut allergy (Dị ứng đậu phộng)",
        "Headache (Đau đầu)",
        "Toothache (Đau răng)",
        "Flu (Cảm cúm)"
      ],
      "answer": "Peanut allergy (Dị ứng đậu phộng)",
      "explanationVi": "'Peanut allergy' là chứng dị ứng đậu phộng rất phổ biến tại các nước phương Tây."
    },
    {
      "id": "wbb_7",
      "dialogueContext": "Chloe cô bạn người Mỹ gốc Hàn là thần đồng đại học:",
      "question": "Từ tiếng Anh chỉ người bạn thân thiết nhất là gì?",
      "options": [
        "Best friend",
        "Enemy",
        "Stranger",
        "Boss"
      ],
      "answer": "Best friend",
      "explanationVi": "'Best friend' là bạn thân nhất. Chloe đã trở thành tri kỷ của ba chú gấu sau bài nghiên cứu."
    },
    {
      "id": "wbb_8",
      "dialogueContext": "Nom Nom chú gấu túi koala nổi tiếng trên mạng nhưng tính cách kiêu ngạo:",
      "question": "Từ tính từ nào mô tả tính cách kiêu ngạo, hợm hĩnh của Nom Nom?",
      "options": [
        "Arrogant",
        "Humble",
        "Friendly",
        "Generous"
      ],
      "answer": "Arrogant",
      "explanationVi": "'Arrogant' nghĩa là kiêu ngạo, tự phụ, trái ngược hoàn toàn với vẻ ngoài dễ thương trên mạng của Nom Nom."
    },
    {
      "id": "wbb_9",
      "dialogueContext": "Ice Bear thích ngủ ở nơi cực kỳ mát lạnh trong căn nhà hang động:",
      "question": "Ice Bear chọn ngủ ở đâu trong nhà?",
      "options": [
        "In the refrigerator (Trong tủ lạnh)",
        "On the roof (Trên mái nhà)",
        "Under the bed (Dưới gầm giường)",
        "In the garden (Ngoài vườn)"
      ],
      "answer": "In the refrigerator (Trong tủ lạnh)",
      "explanationVi": "Là gấu Bắc Cực, Ice Bear thích nhiệt độ đóng băng nên luôn ngủ ngon lành trong ngăn mát tủ lạnh."
    },
    {
      "id": "wbb_10",
      "dialogueContext": "Grizz chào đón người qua đường bằng tinh thần cởi mở:",
      "question": "Grizz thường nói: 'Hey, do you want to be our _______?'",
      "options": [
        "friend",
        "enemy",
        "driver",
        "doctor"
      ],
      "answer": "friend",
      "explanationVi": "'Friend' (bạn bè). Grizz luôn khao khát hòa nhập và kết thêm nhiều người bạn mới trong thành phố."
    },
    {
      "id": "wbb_11",
      "dialogueContext": "Panda dùng điện thoại để hẹn hò qua ứng dụng trực tuyến:",
      "question": "Cụm từ tiếng Anh chỉ 'ứng dụng hẹn hò' là gì?",
      "options": [
        "Dating app",
        "Cooking app",
        "Game app",
        "Map app"
      ],
      "answer": "Dating app",
      "explanationVi": "'Dating app' là ứng dụng hẹn hò trực tuyến mà Panda luôn hy vọng tìm được bạn gái."
    },
    {
      "id": "wbb_12",
      "dialogueContext": "Ice Bear trổ tài nấu nướng điêu luyện như một đầu bếp chuyên nghiệp:",
      "question": "Từ tiếng Anh chỉ vị bếp trưởng tài ba của nhà hàng là:",
      "options": [
        "Chef",
        "Waiter",
        "Cleaner",
        "Customer"
      ],
      "answer": "Chef",
      "explanationVi": "'Chef' là đầu bếp chuyên nghiệp, người sáng tạo các món ăn đẳng cấp."
    },
    {
      "id": "wbb_13",
      "dialogueContext": "Người bảo vệ công viên Ranger Tabes rất nghiêm khắc với nội quy:",
      "question": "Từ tiếng Anh 'Park Ranger' có nghĩa là nghề nghiệp gì?",
      "options": [
        "Kiểm lâm / Người quản lý công viên",
        "Cầu thủ bóng đá",
        "Nhạc trưởng",
        "Kỹ sư xây dựng"
      ],
      "answer": "Kiểm lâm / Người quản lý công viên",
      "explanationVi": "'Park Ranger' là nhân viên kiểm lâm phụ trách giữ gìn an ninh và bảo vệ thiên nhiên trong công viên."
    },
    {
      "id": "wbb_14",
      "dialogueContext": "Ba chú gấu đi vào rạp chiếu phim xem phim bom tấn:",
      "question": "Món bắp rang bơ giòn rụm trong rạp chiếu phim tiếng Anh là:",
      "options": [
        "Popcorn",
        "Candy",
        "Cookie",
        "Donut"
      ],
      "answer": "Popcorn",
      "explanationVi": "'Popcorn' là món bắp rang bơ quen thuộc khi đi xem phim ở rạp."
    },
    {
      "id": "wbb_15",
      "dialogueContext": "Panda hoảng loạn khi điện thoại của mình bị mất kết nối mạng internet:",
      "question": "Biểu tượng sóng mạng không dây thông dụng nhất là:",
      "options": [
        "Wi-Fi",
        "Bluetooth",
        "Radio",
        "Cable"
      ],
      "answer": "Wi-Fi",
      "explanationVi": "'Wi-Fi' là mạng kết nối internet không dây mà Panda không thể sống thiếu."
    },
    {
      "id": "wbb_16",
      "dialogueContext": "Grizz hào hứng tham gia cuộc thi ăn xúc xích nhanh:",
      "question": "'Eat as fast as you can!' Cấu trúc 'as... as you can' mang ý nghĩa gì?",
      "options": [
        "Hết mức có thể / Nhanh nhất có thể",
        "Từ từ chậm rãi",
        "Không được ăn",
        "Ăn vào ngày mai"
      ],
      "answer": "Hết mức có thể / Nhanh nhất có thể",
      "explanationVi": "Cấu trúc so sánh bằng 'as + adj/adv + as someone can' chỉ sự nỗ lực làm việc gì tối đa trong khả năng."
    },
    {
      "id": "wbb_17",
      "dialogueContext": "Ice Bear biết nói nhiều thứ tiếng khác nhau trên thế giới:",
      "question": "Người có thể nói lưu loát nhiều ngôn ngữ được gọi là:",
      "options": [
        "Multilingual",
        "Monolingual",
        "Deaf",
        "Silent"
      ],
      "answer": "Multilingual",
      "explanationVi": "'Multilingual' là tính từ chỉ người thông thạo nhiều ngôn ngữ (đa ngữ), như Ice Bear biết nói cả tiếng Nga, Hàn, Pháp."
    },
    {
      "id": "wbb_18",
      "dialogueContext": "Ba chú gấu đi siêu thị mua sắm nguyên liệu cho bữa tối:",
      "question": "Chiếc xe đẩy hàng bằng kim loại trong siêu thị tiếng Anh là:",
      "options": [
        "Shopping cart / trolley",
        "Stroller",
        "Truck",
        "Motorbike"
      ],
      "answer": "Shopping cart / trolley",
      "explanationVi": "'Shopping cart' (Anh-Mỹ) hoặc 'shopping trolley' (Anh-Anh) là xe đẩy mua hàng trong siêu thị."
    },
    {
      "id": "wbb_19",
      "dialogueContext": "Grizz an ủi hai em khi kế hoạch làm video thất bại:",
      "question": "Grizz nói: 'It doesn't matter, we still have each _______.'",
      "options": [
        "other",
        "another",
        "together",
        "alone"
      ],
      "answer": "other",
      "explanationVi": "Cụm 'each other' (lẫn nhau). Grizz nhắc nhở tình cảm anh em gắn bó: chúng ta vẫn còn có nhau."
    },
    {
      "id": "wbb_20",
      "dialogueContext": "Khẩu hiệu bảo vệ gia đình của Ice Bear:",
      "question": "Ice Bear tuyên bố ngắn gọn: 'Ice Bear will _______ the family.'",
      "options": [
        "protect",
        "destroy",
        "leave",
        "forget"
      ],
      "answer": "protect",
      "explanationVi": "'Protect' (bảo vệ). Ice Bear luôn là chốt chặn vững chắc, sẵn sàng xả thân che chở cho hai anh trai."
    }
  ],
  "extra-english": [
    {
      "id": "ext_1",
      "dialogueContext": "Hector lần đầu đến căn hộ ở London và tự giới thiệu xuất thân:",
      "question": "Hector nói tiếng Anh bập bẹ: 'I am Hector. I come _______ Argentina.'",
      "options": [
        "from",
        "at",
        "in",
        "by"
      ],
      "answer": "from",
      "explanationVi": "Cấu trúc giới thiệu quê quán: 'come from + country' (đến từ một quốc gia nào đó)."
    },
    {
      "id": "ext_2",
      "dialogueContext": "Nick giải thích với Bridget về việc muốn dạy tiếng Anh cho Hector:",
      "question": "Nick đề nghị: 'Hector is my good friend. Let me _______ him English!'",
      "options": [
        "teach",
        "learn",
        "study",
        "read"
      ],
      "answer": "teach",
      "explanationVi": "'Teach someone' (dạy ai đó). Phân biệt với 'learn' là học."
    },
    {
      "id": "ext_3",
      "dialogueContext": "Bridget nổi giận đuổi Nick ra khỏi căn hộ của hai cô gái:",
      "question": "Bridget quát: 'Nick, get _______ of our flat right now!'",
      "options": [
        "out",
        "in",
        "up",
        "on"
      ],
      "answer": "out",
      "explanationVi": "Cụm phrasal verb mệnh lệnh 'get out of' nghĩa là đi ra khỏi, cút ra khỏi phòng."
    },
    {
      "id": "ext_4",
      "dialogueContext": "Hector đi siêu thị mua sắm nhưng gặp khó khăn về số lượng thực phẩm:",
      "question": "Hector đã mua nhầm 100 hộp gì thay vì 1 chiếc?",
      "options": [
        "Melons (dưa lưới)",
        "Cars (xe hơi)",
        "Houses (ngôi nhà)",
        "Bikes (xe đạp)"
      ],
      "answer": "Melons (dưa lưới)",
      "explanationVi": "Tình huống hài hước trong Extra English khi Hector đặt nhầm 100 trái dưa lưới ('100 melons')."
    },
    {
      "id": "ext_5",
      "dialogueContext": "Annie nhờ Hector tưới cây trong phòng khách:",
      "question": "Động từ 'tưới nước cho cây' trong tiếng Anh là:",
      "options": [
        "Water the plants",
        "Drink the plants",
        "Wash the plants",
        "Cook the plants"
      ],
      "answer": "Water the plants",
      "explanationVi": "'Water' vừa là danh từ (nước), vừa là động từ có nghĩa là 'tưới nước'."
    },
    {
      "id": "ext_6",
      "dialogueContext": "Nick dẫn Hector đi sắm sửa quần áo mới theo phong cách sành điệu:",
      "question": "Từ tiếng Anh nào chỉ chiếc áo khoác da thời thượng?",
      "options": [
        "Leather jacket",
        "T-shirt",
        "Swimsuit",
        "Raincoat"
      ],
      "answer": "Leather jacket",
      "explanationVi": "'Leather jacket' là áo khoác da biker cá tính mà Nick chọn cho Hector thử mặc."
    },
    {
      "id": "ext_7",
      "dialogueContext": "Bridget tập thể dục nhịp điệu trên máy chạy bộ tại nhà:",
      "question": "Cụm từ tiếng Anh chỉ 'tập thể dục' thường dùng là:",
      "options": [
        "Work out / Do exercise",
        "Sleep late",
        "Eat out",
        "Watch TV"
      ],
      "answer": "Work out / Do exercise",
      "explanationVi": "'Work out' là cụm động từ cực kỳ phổ biến chỉ việc rèn luyện thể lực, tập gym."
    },
    {
      "id": "ext_8",
      "dialogueContext": "Hector thật ra là một chàng trai siêu giàu có với gia thế khủng:",
      "question": "Từ tiếng Anh chỉ người có nhiều tiền và tài sản là:",
      "options": [
        "Wealthy / Rich",
        "Poor",
        "Broke",
        "Homeless"
      ],
      "answer": "Wealthy / Rich",
      "explanationVi": "'Wealthy' đồng nghĩa với 'rich', chỉ người giàu có, thượng lưu."
    },
    {
      "id": "ext_9",
      "dialogueContext": "Bà chủ nhà trọ nghiêm khắc có quy định cấm dẫn bạn trai về phòng:",
      "question": "Từ tiếng Anh chỉ 'bà chủ nhà cho thuê trọ' là:",
      "options": [
        "Landlady",
        "Tenant",
        "Neighbor",
        "Guest"
      ],
      "answer": "Landlady",
      "explanationVi": "'Landlady' là bà chủ nhà trọ, ngược lại 'landlord' là ông chủ nhà."
    },
    {
      "id": "ext_10",
      "dialogueContext": "Nick giả vờ làm biên kịch để tán tỉnh các cô gái xinh đẹp:",
      "question": "Từ tiếng Anh chỉ người viết kịch bản phim ảnh là:",
      "options": [
        "Scriptwriter",
        "Plumber",
        "Mechanic",
        "Farmer"
      ],
      "answer": "Scriptwriter",
      "explanationVi": "'Scriptwriter' là nhà biên kịch, người sáng tác kịch bản cho phim ảnh."
    },
    {
      "id": "ext_11",
      "dialogueContext": "Hector tập nấu bữa tối bất ngờ cho Bridget và Annie:",
      "question": "Khi đồ ăn bị khét trên bếp, mùi vị đó được mô tả là gì?",
      "options": [
        "Burnt",
        "Sweet",
        "Cold",
        "Fresh"
      ],
      "answer": "Burnt",
      "explanationVi": "'Burnt' nghĩa là bị cháy khét, tình huống dở khóc dở cười khi Hector vào bếp."
    },
    {
      "id": "ext_12",
      "dialogueContext": "Annie nuôi chú chó cưng đáng yêu tên là Charley:",
      "question": "Từ tiếng Anh chỉ 'thú cưng trong nhà' là:",
      "options": [
        "Pet",
        "Wild animal",
        "Pest",
        "Insect"
      ],
      "answer": "Pet",
      "explanationVi": "'Pet' là thú cưng nuôi trong nhà như chó, mèo, chim kiểng."
    },
    {
      "id": "ext_13",
      "dialogueContext": "Nick dạy Hector cách khen ngợi nịnh phụ nữ khi hẹn hò:",
      "question": "'Your eyes are like stars!' Biện pháp tu từ nào được sử dụng?",
      "options": [
        "Simile (So sánh ngang bằng với 'like')",
        "Metaphor",
        "Irony",
        "Pun"
      ],
      "answer": "Simile (So sánh ngang bằng với 'like')",
      "explanationVi": "'Simile' là phép so sánh dùng từ 'like' hoặc 'as' ('Đôi mắt em sáng như những vì sao')."
    },
    {
      "id": "ext_14",
      "dialogueContext": "Bridget nhận được lá thư qua đường bưu điện từ Argentina:",
      "question": "Từ tiếng Anh chỉ người 'bạn qua thư' viết thư từ từ xa là:",
      "options": [
        "Penpal",
        "Boss",
        "Colleague",
        "Enemy"
      ],
      "answer": "Penpal",
      "explanationVi": "'Penpal' là bạn qua thư từ xa xưa, tiền thân mối liên lạc giữa Hector và Bridget."
    },
    {
      "id": "ext_15",
      "dialogueContext": "Cả nhóm cùng lên kế hoạch đi xem phim tại rạp chiếu phim London:",
      "question": "Người Anh thường dùng từ nào để gọi rạp chiếu phim?",
      "options": [
        "Cinema",
        "Movie theater",
        "Stage",
        "Playhouse"
      ],
      "answer": "Cinema",
      "explanationVi": "Trong tiếng Anh-Anh (British English), rạp chiếu phim luôn được gọi là 'cinema'."
    },
    {
      "id": "ext_16",
      "dialogueContext": "Hector làm vỡ chiếc bình hoa của bà chủ nhà và muốn xin lỗi:",
      "question": "Câu xin lỗi chân thành và lịch thiệp nhất trong tiếng Anh là:",
      "options": [
        "I am terribly sorry!",
        "It doesn't matter!",
        "You are wrong!",
        "Forget it!"
      ],
      "answer": "I am terribly sorry!",
      "explanationVi": "'I am terribly sorry' là câu xin lỗi trang trọng, bày tỏ sự hối hận sâu sắc."
    },
    {
      "id": "ext_17",
      "dialogueContext": "Nick khoe thân hình cơ bắp nhưng bị chuột rút:",
      "question": "Từ tiếng Anh chỉ hiện tượng 'chuột rút cơ bắp' là:",
      "options": [
        "Cramp",
        "Fever",
        "Cough",
        "Sneeze"
      ],
      "answer": "Cramp",
      "explanationVi": "'Cramp' là chứng chuột rút, co thắt cơ bắp đột ngột khi vận động mạnh."
    },
    {
      "id": "ext_18",
      "dialogueContext": "Bridget làm việc tại đài truyền hình với vai trò phóng viên:",
      "question": "Từ tiếng Anh chỉ 'phóng viên truyền hình' là:",
      "options": [
        "TV reporter",
        "Carpenter",
        "Baker",
        "Pilot"
      ],
      "answer": "TV reporter",
      "explanationVi": "'TV reporter' là phóng viên tác nghiệp trên truyền hình, mơ ước sự nghiệp của Bridget."
    },
    {
      "id": "ext_19",
      "dialogueContext": "Cả bốn người cùng nâng ly chúc mừng sinh nhật tròn 1 năm tình bạn:",
      "question": "Từ dùng khi cụng ly uống nước ở các nước nói tiếng Anh là:",
      "options": [
        "Cheers!",
        "Good!",
        "Stop!",
        "Bye!"
      ],
      "answer": "Cheers!",
      "explanationVi": "'Cheers!' là câu cửa miệng vui vẻ khi cụng ly chúc mừng hoặc cảm ơn thân mật."
    },
    {
      "id": "ext_20",
      "dialogueContext": "Hector nói về cảm xúc gắn bó của mình với những người bạn ở London:",
      "question": "Hector bày tỏ: 'You are like my real _______ now.'",
      "options": [
        "family",
        "enemies",
        "strangers",
        "teachers"
      ],
      "answer": "family",
      "explanationVi": "'Family' (gia đình). Thông điệp ấm áp của series: tình bạn chân thành gắn kết như ruột thịt."
    }
  ],
  "zootopia": [
    {
      "id": "zoo_1",
      "dialogueContext": "Judy Hopps khẳng định lý tưởng sống từ khi còn nhỏ tại vùng thỏ Bunnyburrow:",
      "question": "Phương châm của thành phố Zootopia là: 'Anyone can be _______!'",
      "options": [
        "anything",
        "nothing",
        "danger",
        "food"
      ],
      "answer": "anything",
      "explanationVi": "'Anyone can be anything' (Bất kỳ ai cũng có thể trở thành bất kỳ điều gì họ mơ ước)."
    },
    {
      "id": "zoo_2",
      "dialogueContext": "Cáo Nick Wilde trêu chọc chiếc máy ghi âm hình củ cà rốt của Judy:",
      "question": "Nick hay gọi Judy bằng biệt danh trêu chọc nào?",
      "options": [
        "Carrots",
        "Apples",
        "Bananas",
        "Peaches"
      ],
      "answer": "Carrots",
      "explanationVi": "Nick đặt biệt danh cho Judy là 'Carrots' (Cà rốt) vì cô là một cô thỏ nông thôn năng nổ."
    },
    {
      "id": "zoo_3",
      "dialogueContext": "Trưởng đồn cảnh sát Bogo giao nhiệm vụ ngày đầu cho Judy:",
      "question": "Bogo giao cho Judy đi làm nhiệm vụ gì thay vì phá án lớn?",
      "options": [
        "Parking duty (Phạt đỗ xe sai quy định)",
        "Catching thieves",
        "Undercover agent",
        "Detective"
      ],
      "answer": "Parking duty (Phạt đỗ xe sai quy định)",
      "explanationVi": "Judy bị phân công làm 'parking duty' (ghi vé phạt vi phạm đỗ xe), dù cô là thủ khoa học viện cảnh sát."
    },
    {
      "id": "zoo_4",
      "dialogueContext": "Chú lười Flash làm việc tại Cục Quản lý Xe Cơ Giới (DMV):",
      "question": "Đặc điểm hài hước nổi bật nhất của chú lười Flash là:",
      "options": [
        "Extremely slow (Cực kỳ chậm chạp)",
        "Super fast",
        "Very angry",
        "Always shouting"
      ],
      "answer": "Extremely slow (Cực kỳ chậm chạp)",
      "explanationVi": "Flash di chuyển và nói chuyện với tốc độ siêu chậm ('extremely slow') phản ánh sự quan liêu hài hước của thủ tục hành chính."
    },
    {
      "id": "zoo_5",
      "dialogueContext": "Nick Wilde giải thích bài học sinh tồn ngoài xã hội cho Judy:",
      "question": "Nick nói: 'Never let them see that they _______ you.'",
      "options": [
        "get to",
        "like",
        "hug",
        "kiss"
      ],
      "answer": "get to",
      "explanationVi": "Cụm 'get to someone' nghĩa là làm tổn thương, chọc tức hoặc làm ai đó suy sụp tinh thần."
    },
    {
      "id": "zoo_6",
      "dialogueContext": "Thành phố Zootopia phân chia thành hai nhóm động vật lớn:",
      "question": "Hai nhóm loài động vật trong Zootopia là 'Predators' (săn mồi) và:",
      "options": [
        "Prey (Con mồi / ăn cỏ)",
        "Birds",
        "Fishes",
        "Insects"
      ],
      "answer": "Prey (Con mồi / ăn cỏ)",
      "explanationVi": "'Predators' (thú săn mồi) và 'Prey' (con mồi/loài ăn cỏ) tạo nên cấu trúc xã hội trong Zootopia."
    },
    {
      "id": "zoo_7",
      "dialogueContext": "Nick lừa bán que kem Jumbo Pop chia nhỏ cho đàn chuột Lemming:",
      "question": "Hành vi lươn lẹo kiếm tiền bằng mưu mẹo của Nick được gọi là:",
      "options": [
        "A hustle",
        "A charity",
        "A gift",
        "A miracle"
      ],
      "answer": "A hustle",
      "explanationVi": "'A hustle' trong từ lóng tiếng Anh-Mỹ chỉ một mánh lới buôn bán lươn lẹo, làm ăn lọc lõi."
    },
    {
      "id": "zoo_8",
      "dialogueContext": "Judy bắt quả tang vụ trộm củ hoa Dạ Lan Hương (Night Howlers):",
      "question": "Loài hoa gây ra tình trạng hoang dã phát cuồng ở các con thú là:",
      "options": [
        "Night Howlers",
        "Red Roses",
        "Sunflowers",
        "Daisies"
      ],
      "answer": "Night Howlers",
      "explanationVi": "'Night Howlers' là tên loài hoa có chất độc khiến các loài động vật ăn thịt phát điên trở lại bản tính hoang dã."
    },
    {
      "id": "zoo_9",
      "dialogueContext": "Trùm mafia chuột chũi Bố Già Mr. Big ra lệnh trừng phạt kẻ phản bội:",
      "question": "Mr. Big ra lệnh đóng băng đối thủ bằng cụm từ nào?",
      "options": [
        "Ice 'em!",
        "Burn 'em!",
        "Forgive 'em!",
        "Feed 'em!"
      ],
      "answer": "Ice 'em!",
      "explanationVi": "'Ice them!' trong từ lóng tội phạm nghĩa là thủ tiêu/đóng băng kẻ thù dưới lớp nước đá tuyết."
    },
    {
      "id": "zoo_10",
      "dialogueContext": "Judy cứu con gái của Mr. Big khỏi chiếc bánh donut khổng lồ:",
      "question": "Từ tiếng Anh chỉ lòng biết ơn và ân huệ cứu mạng là:",
      "options": [
        "Gratitude / A favor",
        "Hatred",
        "Betrayal",
        "Greed"
      ],
      "answer": "Gratitude / A favor",
      "explanationVi": "'Gratitude' (lòng biết ơn), Mr. Big đã đền đáp ân huệ cứu mạng con gái mình bằng sự bảo hộ tuyệt đối."
    },
    {
      "id": "zoo_11",
      "dialogueContext": "Thị trưởng sư tử Lionheart giam giữ các con thú bị biến đổi trong bí mật:",
      "question": "Chức danh 'Thị trưởng' đứng đầu thành phố trong tiếng Anh là:",
      "options": [
        "Mayor",
        "President",
        "Minister",
        "King"
      ],
      "answer": "Mayor",
      "explanationVi": "'Mayor' là thị trưởng thành phố, người nắm quyền hành chính tối cao đô thị."
    },
    {
      "id": "zoo_12",
      "dialogueContext": "Trợ lý thị trưởng cừu Bellwether giả vờ hiền lành nhưng là kẻ chủ mưu:",
      "question": "Thành ngữ 'A wolf in sheep's clothing' miêu tả kẻ như thế nào?",
      "options": [
        "Sói đội lốt cừu (Kẻ hiểm độc giả vờ ngây thơ)",
        "Người rất tử tế",
        "Con cừu dũng cảm",
        "Người chăn cừu"
      ],
      "answer": "Sói đội lốt cừu (Kẻ hiểm độc giả vờ ngây thơ)",
      "explanationVi": "'A wolf in sheep's clothing' là thành ngữ chỉ kẻ ác độc đội lốt vẻ ngoài hiền lành, đạo mạo."
    },
    {
      "id": "zoo_13",
      "dialogueContext": "Judy xin lỗi Nick chân thành dưới chân cây cầu lớn sau bài họp báo sai lầm:",
      "question": "Judy khóc và nói: 'I was a dumb, insensitive, small-town _______.'",
      "options": [
        "bunny",
        "wolf",
        "fox",
        "bear"
      ],
      "answer": "bunny",
      "explanationVi": "Judy tự trách mình là 'a dumb bunny' (cô thỏ ngốc nghếch) vì đã khiến cộng đồng nghi kỵ loài săn mồi."
    },
    {
      "id": "zoo_14",
      "dialogueContext": "Nick tha thứ cho Judy và bật lại đoạn ghi âm lời thú nhận của cô:",
      "question": "Nick rút chiếc bút ghi âm cà rốt và nói: 'It's called a hustle, _______!'",
      "options": [
        "sweetheart",
        "officer",
        "stranger",
        "sir"
      ],
      "answer": "sweetheart",
      "explanationVi": "'It's called a hustle, sweetheart!' là câu thoại đối đáp đỉnh cao của Nick với Judy."
    },
    {
      "id": "zoo_15",
      "dialogueContext": "Nick gia nhập lực lượng cảnh sát Zootopia và tuyên thệ:",
      "question": "Nick trở thành chú cáo đầu tiên làm nghề gì ở Zootopia?",
      "options": [
        "Police officer",
        "Firefighter",
        "Doctor",
        "Pilot"
      ],
      "answer": "Police officer",
      "explanationVi": "Nick là chú cáo đầu tiên tốt nghiệp và trở thành sĩ quan cảnh sát mẫu mực ('police officer')."
    },
    {
      "id": "zoo_16",
      "dialogueContext": "Ca sĩ linh dương Gazelle biểu diễn ca khúc chủ đề của bộ phim:",
      "question": "Tên bài hát truyền cảm hứng nổi tiếng của Shakira trong phim là gì?",
      "options": [
        "Try Everything",
        "Let It Go",
        "Can You Feel the Love",
        "You've Got a Friend"
      ],
      "answer": "Try Everything",
      "explanationVi": "'Try Everything' là bản hit cổ vũ tinh thần không ngại thất bại, luôn kiên trì nỗ lực hết mình."
    },
    {
      "id": "zoo_17",
      "dialogueContext": "Judy lái xe tuần tra trên đường cao tốc và bắt một chiếc xe chạy quá tốc độ:",
      "question": "Ai là người lái chiếc siêu xe thể thao chạy vi phạm tốc độ tối đa?",
      "options": [
        "Flash chú lười",
        "Bogo",
        "Nick",
        "Lionheart"
      ],
      "answer": "Flash chú lười",
      "explanationVi": "Màn 'plot twist' hài hước nhất phim khi chú lười Flash lại chính là tay lái siêu tốc 'Flash, Flash, Hundred-Yard Dash'."
    },
    {
      "id": "zoo_18",
      "dialogueContext": "Từ 'stereotype' được thể hiện xuyên suốt qua mối quan hệ các loài động vật:",
      "question": "Từ tiếng Anh 'Stereotype' mang ý nghĩa gì?",
      "options": [
        "Định kiến / Khuôn mẫu rập khuôn về một nhóm người",
        "Tình bạn vĩnh cửu",
        "Sự tự do tuyệt đối",
        "Luật pháp thành phố"
      ],
      "answer": "Định kiến / Khuôn mẫu rập khuôn về một nhóm người",
      "explanationVi": "'Stereotype' là định kiến cho rằng một nhóm người/loài vật nào đó đều có chung đặc tính xấu định sẵn."
    },
    {
      "id": "zoo_19",
      "dialogueContext": "Nick và Judy phối hợp ăn ý phá vỡ âm mưu đầu độc:",
      "question": "Từ tiếng Anh chỉ cặp đôi cộng sự ăn ý phá án là:",
      "options": [
        "Partners",
        "Rivals",
        "Enemies",
        "Strangers"
      ],
      "answer": "Partners",
      "explanationVi": "'Partners' là từ chỉ đồng nghiệp, cộng sự ăn ý luôn sát cánh bảo vệ nhau."
    },
    {
      "id": "zoo_20",
      "dialogueContext": "Lời nhắn nhủ của Judy trong buổi lễ tốt nghiệp cảnh sát:",
      "question": "Judy chia sẻ: 'Change starts with _______.'",
      "options": [
        "you",
        "them",
        "money",
        "luck"
      ],
      "answer": "you",
      "explanationVi": "'Change starts with you' (Sự thay đổi bắt đầu từ chính bản thân bạn) là thông điệp nhân văn cốt lõi của Zootopia."
    }
  ],
  "lion-king": [
    {
      "id": "lk_1",
      "dialogueContext": "Mufasa chỉ cho Simba thấy toàn bộ vương quốc từ trên mỏm đá Pride Rock:",
      "question": "Mufasa nói: 'Everything the light touches is our _______.'",
      "options": [
        "kingdom",
        "house",
        "prison",
        "garden"
      ],
      "answer": "kingdom",
      "explanationVi": "'Kingdom' (vương quốc). Mufasa dạy Simba về lãnh thổ và trách nhiệm cai trị của vị vua tương lai."
    },
    {
      "id": "lk_2",
      "dialogueContext": "Timon và Pumbaa dạy Simba triết lý sống lạc quan qua bài hát Swahili:",
      "question": "'Hakuna Matata' trong tiếng Swahili mang ý nghĩa tiếng Anh là gì?",
      "options": [
        "No worries (Không âu lo)",
        "Run fast (Chạy nhanh)",
        "Be brave (Hãy dũng cảm)",
        "Fight hard (Chiến đấu hết mình)"
      ],
      "answer": "No worries (Không âu lo)",
      "explanationVi": "'Hakuna Matata' có nghĩa là 'No worries for the rest of your days' (Không còn lo lắng trong những tháng ngày còn lại)."
    },
    {
      "id": "lk_3",
      "dialogueContext": "Rafiki gõ gậy vào đầu Simba để dạy cậu bài học về nỗi đau quá khứ:",
      "question": "Rafiki nói: 'The past can hurt. But the way I see it, you can either run from it, or _______ from it.'",
      "options": [
        "learn",
        "forget",
        "cry",
        "die"
      ],
      "answer": "learn",
      "explanationVi": "Câu thoại triết lý sâu sắc: Quá khứ có thể đau đớn, nhưng bạn có thể trốn chạy nó hoặc học hỏi từ nó ('learn from it')."
    },
    {
      "id": "lk_4",
      "dialogueContext": "Mufasa xuất hiện giữa những vì sao trên bầu trời đêm nhắc nhở Simba:",
      "question": "Mufasa cất tiếng trầm ấm: 'Remember who you _______.'",
      "options": [
        "are",
        "were",
        "will be",
        "have been"
      ],
      "answer": "are",
      "explanationVi": "'Remember who you are' (Hãy nhớ con là ai) - lời thức tỉnh Simba tìm lại bản ngã và danh dự của một vị vua."
    },
    {
      "id": "lk_5",
      "dialogueContext": "Scar lừa gạt Simba ở hẻm núi trước khi bầy linh dương chạy loạn:",
      "question": "Scar bảo Simba đứng đợi vì vua cha chuẩn bị một điều gì?",
      "options": [
        "A surprise (Một điều bất ngờ)",
        "A punishment",
        "A game",
        "A lesson"
      ],
      "answer": "A surprise (Một điều bất ngờ)",
      "explanationVi": "Scar xảo quyệt dùng từ 'a wonderful surprise' để bẫy Simba rơi vào vùng nguy hiểm."
    },
    {
      "id": "lk_6",
      "dialogueContext": "Khái niệm 'Vòng tròn sự sống' kết nối vạn vật trong tự nhiên:",
      "question": "Tên tiếng Anh của 'Vòng tròn sự sống' là:",
      "options": [
        "Circle of Life",
        "Chain of Life",
        "Ring of Life",
        "Wheel of Life"
      ],
      "answer": "Circle of Life",
      "explanationVi": "'Circle of Life' là bài hát và chủ đề triết lý trung tâm về sự cân bằng sinh thái."
    },
    {
      "id": "lk_7",
      "dialogueContext": "Simba nhỏ háo hức muốn mau chóng lớn lên làm vua:",
      "question": "Simba hát vang: 'I just can't wait to be _______!'",
      "options": [
        "king",
        "big",
        "rich",
        "free"
      ],
      "answer": "king",
      "explanationVi": "'I just can't wait to be king' (Tôi không thể chờ đợi lâu hơn để trở thành vua)."
    },
    {
      "id": "lk_8",
      "dialogueContext": "Mufasa giải thích sự khác biệt giữa can đảm và liều lĩnh:",
      "question": "'Being brave doesn't mean you go looking for _______.'",
      "options": [
        "trouble",
        "food",
        "friends",
        "water"
      ],
      "answer": "trouble",
      "explanationVi": "Mufasa dạy: 'Can đảm không có nghĩa là đi tìm rắc rối ('looking for trouble'). Ta chỉ can đảm khi bắt buộc phải làm thế'."
    },
    {
      "id": "lk_9",
      "dialogueContext": "Bầy linh cẩu tay sai của Scar sống tại vùng cằn cỗi cấm kỵ:",
      "question": "Khu vực cấm nguy hiểm nơi voi già qua đời tiếng Anh là:",
      "options": [
        "Elephant Graveyard",
        "Lion Cave",
        "Hyena Forest",
        "Monkey Mountain"
      ],
      "answer": "Elephant Graveyard",
      "explanationVi": "'Elephant Graveyard' là nghĩa địa voi, nơi u ám và đầy cạm bẫy ngoài ranh giới vương quốc."
    },
    {
      "id": "lk_10",
      "dialogueContext": "Zazu chú chim mỏ sừng luôn túc trực báo cáo tình hình buổi sáng:",
      "question": "Bản báo cáo buổi sáng của Zazu được gọi là:",
      "options": [
        "The Morning Report",
        "The Daily News",
        "The King Paper",
        "The Sun Journal"
      ],
      "answer": "The Morning Report",
      "explanationVi": "'The Morning Report' là bản tin báo cáo tình hình vương quốc hàng sáng mà Zazu dâng lên Mufasa."
    },
    {
      "id": "lk_11",
      "dialogueContext": "Timon và Pumbaa chỉ cho Simba món ăn thay thế thịt giàu protein:",
      "question": "Món ăn yêu thích của Pumbaa là những con gì bò lúc nhúc dưới thân cây gỗ mục?",
      "options": [
        "Grubs / Bugs (Ấu trùng / Bọ)",
        "Fishes",
        "Fruits",
        "Nuts"
      ],
      "answer": "Grubs / Bugs (Ấu trùng / Bọ)",
      "explanationVi": "'Grubs' là các con ấu trùng béo múp ('Slimy yet satisfying' - Nhơm nhớp mà ngon tuyệt)."
    },
    {
      "id": "lk_12",
      "dialogueContext": "Nala cô bạn thời thơ ấu bất ngờ gặp lại Simba trong rừng rậm:",
      "question": "Simba nhận ra Nala khi cô thực hiện động tác đè vật quen thuộc nào?",
      "options": [
        "Pinned him to the ground",
        "Bit his ear",
        "Scratched his nose",
        "Ran away"
      ],
      "answer": "Pinned him to the ground",
      "explanationVi": "'Pin someone to the ground' nghĩa là vật ngửa và ghì chặt đối thủ xuống đất."
    },
    {
      "id": "lk_13",
      "dialogueContext": "Bài hát tình yêu lãng mạn giữa Simba và Nala dưới ánh trăng:",
      "question": "Tên bản tình ca bất hủ của danh ca Elton John trong phim là:",
      "options": [
        "Can You Feel the Love Tonight",
        "A Whole New World",
        "Beauty and the Beast",
        "Colors of the Wind"
      ],
      "answer": "Can You Feel the Love Tonight",
      "explanationVi": "'Can You Feel the Love Tonight' đã đoạt giải Oscar cho ca khúc trong phim xuất sắc nhất."
    },
    {
      "id": "lk_14",
      "dialogueContext": "Scar phản bội đẩy Mufasa rơi xuống vực đá giữa bầy trâu rừng:",
      "question": "Câu nói lạnh lùng cuối cùng của Scar trước khi buông tay Mufasa là gì?",
      "options": [
        "Long live the king!",
        "Goodbye my brother!",
        "See you in heaven!",
        "I am sorry!"
      ],
      "answer": "Long live the king!",
      "explanationVi": "'Long live the king!' (Vạn tuế đức vua!) - câu chúc tụng truyền thống bị Scar biến thành lời mỉa mai tàn độc."
    },
    {
      "id": "lk_15",
      "dialogueContext": "Scar nắm quyền và biến Pride Rock thành vùng đất hoang tàn khô hạn:",
      "question": "Từ tiếng Anh chỉ tình trạng hạn hán kéo dài không một giọt mưa là:",
      "options": [
        "Drought",
        "Flood",
        "Storm",
        "Snow"
      ],
      "answer": "Drought",
      "explanationVi": "'Drought' (/draʊt/) là thảm họa hạn hán, khiến đất đai nứt nẻ và thiếu thức ăn."
    },
    {
      "id": "lk_16",
      "dialogueContext": "Simba quyết định trở về quê hương đối đầu với Scar:",
      "question": "Hành động quay trở lại giành lại ngai vàng hợp pháp được gọi là:",
      "options": [
        "Reclaim the throne",
        "Sell the palace",
        "Escape again",
        "Surrender"
      ],
      "answer": "Reclaim the throne",
      "explanationVi": "'Reclaim the throne' nghĩa là giành lại ngai vàng hợp pháp của dòng tộc."
    },
    {
      "id": "lk_17",
      "dialogueContext": "Scar bị dồn vào đường cùng và cố đổ hết tội lỗi cho đàn linh cẩu:",
      "question": "Từ tiếng Anh chỉ kẻ 'phản bội / đâm sau lưng' bạn bè là:",
      "options": [
        "Traitor",
        "Hero",
        "Leader",
        "Soldier"
      ],
      "answer": "Traitor",
      "explanationVi": "'Traitor' là kẻ phản bội, phản trắc. Bầy linh cẩu đã nghe thấy lời Scar xúc phạm và kết liễu hắn."
    },
    {
      "id": "lk_18",
      "dialogueContext": "Tiếng gầm uy dũng của loài sư tử chúa rừng xanh:",
      "question": "Động từ tiếng Anh chỉ tiếng gầm vang dội của sư tử là:",
      "options": [
        "Roar",
        "Bark",
        "Meow",
        "Chirp"
      ],
      "answer": "Roar",
      "explanationVi": "'Roar' là tiếng gầm uy lực của loài sư tử và hổ."
    },
    {
      "id": "lk_19",
      "dialogueContext": "Simba bước lên đỉnh Pride Rock giữa cơn mưa hồi sinh:",
      "question": "Cơn mưa rào trút xuống sau bao năm hạn hán được gọi là:",
      "options": [
        "Heavy rain / Downpour",
        "Snowstorm",
        "Fog",
        "Sandstorm"
      ],
      "answer": "Heavy rain / Downpour",
      "explanationVi": "'Downpour' là cơn mưa rào lớn mang nguồn nước và sự sống trở lại vùng đất Pride Lands."
    },
    {
      "id": "lk_20",
      "dialogueContext": "Rafiki bế chú sư tử con mới sinh ra mắt muôn loài ở cảnh kết:",
      "question": "Nghi thức bế hài nhi trình diện trước muôn thú biểu tượng cho điều gì?",
      "options": [
        "Continuity of life / Hope (Sự tiếp nối sự sống và niềm hy vọng)",
        "A war declaration",
        "A simple game",
        "A farewell"
      ],
      "answer": "Continuity of life / Hope (Sự tiếp nối sự sống và niềm hy vọng)",
      "explanationVi": "Hình ảnh thế hệ kế tiếp khép lại vòng tròn hoàn hảo của Vòng tròn Sự sống ('The Circle of Life')."
    }
  ],
  "toy-story": [
    {
      "id": "ts_1",
      "dialogueContext": "Buzz Lightyear hô to câu khẩu hiệu vũ trụ nổi tiếng của mình:",
      "question": "Khẩu hiệu kinh điển của Buzz là: 'To infinity and _______!'",
      "options": [
        "beyond",
        "above",
        "behind",
        "around"
      ],
      "answer": "beyond",
      "explanationVi": "'To infinity and beyond!' (Vô cực và xa hơn nữa!) - câu khẩu hiệu nổi tiếng nhất lịch sử hoạt hình Pixar."
    },
    {
      "id": "ts_2",
      "dialogueContext": "Bài hát chủ đề ấm áp xuyên suốt series Toy Story:",
      "question": "Tên bài hát tình bạn của Randy Newman là: 'You've Got a _______ in Me'?",
      "options": [
        "Friend",
        "Toy",
        "Brother",
        "Secret"
      ],
      "answer": "Friend",
      "explanationVi": "'You've Got a Friend in Me' (Bạn luôn có một người bạn trong tôi) ca ngợi tình bạn thủy chung."
    },
    {
      "id": "ts_3",
      "dialogueContext": "Woody bực tức nhắc nhở Buzz về thực tế thân phận của cả hai:",
      "question": "Woody hét lớn: 'You are a _______! You aren't the real Space Ranger!'",
      "options": [
        "child's plaything / toy",
        "monster",
        "human",
        "alien"
      ],
      "answer": "child's plaything / toy",
      "explanationVi": "'You are a toy!' (Cậu chỉ là một món đồ chơi thôi!) - Woody kéo Buzz về thực tế phũ phàng."
    },
    {
      "id": "ts_4",
      "dialogueContext": "Tên của cậu bé chủ nhân đồ chơi được viết dưới đế giày của Woody:",
      "question": "Chữ ký nào được viết nắn nót dưới chiếc ủng cao bồi của Woody?",
      "options": [
        "ANDY",
        "SID",
        "BUZZ",
        "REX"
      ],
      "answer": "ANDY",
      "explanationVi": "Chữ 'ANDY' viết dưới đế ủng biểu trưng cho sự gắn bó và lòng trung thành thiêng liêng."
    },
    {
      "id": "ts_5",
      "dialogueContext": "Chú khủng long bạo chúa xanh lá cây Rex rất nhút nhát và dễ lo âu:",
      "question": "Tính cách đối lập hài hước của chú khủng long bạo chúa T-Rex này là:",
      "options": [
        "Gentle and anxious (Hiền lành và hay lo lắng)",
        "Extremely aggressive",
        "Mean and rude",
        "Fierce predator"
      ],
      "answer": "Gentle and anxious (Hiền lành và hay lo lắng)",
      "explanationVi": "Dù là loài T-Rex hung dữ, Rex lại cực kỳ hiền lành, dễ sợ hãi và tự ti về tiếng gầm của mình."
    },
    {
      "id": "ts_6",
      "dialogueContext": "Cậu bé hàng xóm Sid là cơn ác mộng của mọi món đồ chơi trong khu phố:",
      "question": "Sở thích quái đản nguy hiểm của Sid là gì?",
      "options": [
        "Blowing up and torturing toys (Tháo dỡ, chắp vá và nổ tung đồ chơi)",
        "Reading books",
        "Painting portraits",
        "Cooking"
      ],
      "answer": "Blowing up and torturing toys (Tháo dỡ, chắp vá và nổ tung đồ chơi)",
      "explanationVi": "Sid là đứa trẻ nghịch ngợm thích gắn thuốc nổ và biến dị các món đồ chơi."
    },
    {
      "id": "ts_7",
      "dialogueContext": "Các sinh vật ngoài hành tinh màu xanh ba mắt trong máy gắp gấu bông Pizza Planet:",
      "question": "Đám người ngoài hành tinh nhỏ tôn sùng thiết bị gắp đồ chơi nào như thần linh?",
      "options": [
        "The Claw (Chiếc móc cẩu)",
        "The Ball",
        "The Screen",
        "The Coin"
      ],
      "answer": "The Claw (Chiếc móc cẩu)",
      "explanationVi": "'The Claw is our master!' (Chiếc càng gắp chính là chủ nhân của chúng ta!)."
    },
    {
      "id": "ts_8",
      "dialogueContext": "Woody là món đồ chơi thuộc thể loại nhân vật miền viễn Tây nào?",
      "question": "Woody đại diện cho biểu tượng văn hóa Mỹ nào?",
      "options": [
        "Cowboy Sheriff (Cảnh sát trưởng cao bồi)",
        "Astronaut",
        "Knight",
        "Pirate"
      ],
      "answer": "Cowboy Sheriff (Cảnh sát trưởng cao bồi)",
      "explanationVi": "Woody là một chàng cảnh sát trưởng cao bồi có dây cót giật sau lưng ('pull-string cowboy doll')."
    },
    {
      "id": "ts_9",
      "dialogueContext": "Buzz Lightyear luôn tin rằng bộ giáp của mình có thể bay lượn trên không:",
      "question": "Woody châm chọc cú rơi ngoạn mục của Buzz: 'That wasn't flying! That was falling with _______!'",
      "options": [
        "style",
        "speed",
        "fear",
        "wings"
      ],
      "answer": "style",
      "explanationVi": "'Falling with style' (Rơi một cách đầy phong cách) - câu thoại châm biếm kinh điển của Woody."
    },
    {
      "id": "ts_10",
      "dialogueContext": "Chú heo đất hồng tiết kiệm Hamm luôn sắc sảo về tiền bạc:",
      "question": "Từ tiếng Anh chỉ con heo đất đựng tiền tiết kiệm là:",
      "options": [
        "Piggy bank",
        "Coin box",
        "Money bag",
        "Wallet"
      ],
      "answer": "Piggy bank",
      "explanationVi": "'Piggy bank' là ống heo tiết kiệm quen thuộc của trẻ em phương Tây."
    },
    {
      "id": "ts_11",
      "dialogueContext": "Quy tắc sinh tồn tối cao của giới đồ chơi trước mặt con người:",
      "question": "Khi có tiếng bước chân người đến, các món đồ chơi phải lập tức làm gì?",
      "options": [
        "Freeze and pretend to be lifeless (Đứng bất động giả vờ vô tri)",
        "Run away",
        "Talk loudly",
        "Fight"
      ],
      "answer": "Freeze and pretend to be lifeless (Đứng bất động giả vờ vô tri)",
      "explanationVi": "'Freeze!' - Đồ chơi tuyệt đối không được để con người biết chúng có tri giác và sự sống."
    },
    {
      "id": "ts_12",
      "dialogueContext": "Ông bà Khoai Tây (Mr. & Mrs. Potato Head) có cấu tạo cơ thể đặc biệt:",
      "question": "Điểm độc đáo của Mr. Potato Head là các bộ phận cơ thể có thể làm gì?",
      "options": [
        "Detachable (Tháo rời và đổi chỗ được)",
        "Frozen",
        "Liquid",
        "Invisible"
      ],
      "answer": "Detachable (Tháo rời và đổi chỗ được)",
      "explanationVi": "Tai, mắt, mũi, miệng của ông Khoai Tây đều có thể tháo rời ('detachable') và cắm linh hoạt."
    },
    {
      "id": "ts_13",
      "dialogueContext": "Chú chó lò xo Slinky Dog trung thành tuyệt đối với Woody:",
      "question": "Từ tiếng Anh chỉ chiếc lò xo xoắn ốc kéo dài là:",
      "options": [
        "Spring / Slinky",
        "Rope",
        "Wire",
        "Chain"
      ],
      "answer": "Spring / Slinky",
      "explanationVi": "'Spring' hoặc 'Slinky' là món đồ chơi lò xo uốn dẻo nối giữa thân trước và sau của chú chó."
    },
    {
      "id": "ts_14",
      "dialogueContext": "Woody chỉ huy cuộc họp khẩn cấp hàng tuần tại phòng Andy:",
      "question": "Woody dùng micro đồ chơi để tổ chức buổi gì cho các bạn?",
      "options": [
        "Staff meeting (Buổi họp nhân viên / bạn bè)",
        "Birthday party",
        "Concert",
        "Fight"
      ],
      "answer": "Staff meeting (Buổi họp nhân viên / bạn bè)",
      "explanationVi": "Woody thể hiện vai trò thủ lĩnh đồ chơi bằng cách mở 'staff meeting' điểm tin trước sinh nhật Andy."
    },
    {
      "id": "ts_15",
      "dialogueContext": "Đội quân lính nhựa màu xanh lục (Green Army Men) đi trinh sát dưới nhà:",
      "question": "Nhiệm vụ trinh sát quân sự bí mật tiếng Anh là:",
      "options": [
        "Reconnaissance mission / Recon",
        "Holiday trip",
        "Cooking show",
        "Shopping tour"
      ],
      "answer": "Reconnaissance mission / Recon",
      "explanationVi": "'Recon' (viết tắt của reconnaissance) là nhiệm vụ trinh sát quân sự, đi do thám quà sinh nhật của Andy."
    },
    {
      "id": "ts_16",
      "dialogueContext": "Woody và các món đồ chơi nổi dậy dạy cho Sid một bài học nhớ đời:",
      "question": "Woody quay đầu lại nói thẳng vào mặt Sid điều răn đe nào?",
      "options": [
        "So play nice!",
        "Kill him!",
        "Run away!",
        "Give me money!"
      ],
      "answer": "So play nice!",
      "explanationVi": "'So play nice!' (Vì thế hãy chơi ngoan ngoãn tử tế nhé!) khiến Sid hoảng sợ không bao giờ dám phá hoại đồ chơi nữa."
    },
    {
      "id": "ts_17",
      "dialogueContext": "Buzz nhận ra mình không thể bay thực sự sau khi nhìn thấy quảng cáo truyền hình:",
      "question": "Buzz cảm thấy thế nào khi nhận ra mình chỉ là món đồ chơi sản xuất hàng loạt?",
      "options": [
        "Devastated and depressed (Bàng hoàng và suy sụp)",
        "Happy",
        "Excited",
        "Proud"
      ],
      "answer": "Devastated and depressed (Bàng hoàng và suy sụp)",
      "explanationVi": "Buzz bị gãy một cánh tay và rơi vào khủng hoảng danh tính trước khi nhận ra giá trị của việc làm bạn Andy."
    },
    {
      "id": "ts_18",
      "dialogueContext": "Cảnh rượt đuổi nghẹt thở bám theo chiếc xe tải chuyển nhà của Andy:",
      "question": "Từ tiếng Anh chỉ chiếc xe tải dùng để chuyển đồ đạc nhà cửa là:",
      "options": [
        "Moving truck / van",
        "Ambulance",
        "Police car",
        "Fire engine"
      ],
      "answer": "Moving truck / van",
      "explanationVi": "'Moving truck' là xe tải chuyển nhà chuyên dụng của gia đình Andy."
    },
    {
      "id": "ts_19",
      "dialogueContext": "Buzz kích hoạt chiếc pháo hỏa tiễn của Sid để cứu cả hai bay vút lên trời:",
      "question": "Họ đã hạ cánh an toàn xuống đâu trên chiếc xe của Andy?",
      "options": [
        "In a cardboard box next to Andy (Trong hộp các tông cạnh Andy)",
        "On the road",
        "In a lake",
        "On the roof"
      ],
      "answer": "In a cardboard box next to Andy (Trong hộp các tông cạnh Andy)",
      "explanationVi": "Woody và Buzz rơi trúng vào chiếc hộp các-tông bên cạnh Andy, đoàn tụ an toàn và kỳ diệu."
    },
    {
      "id": "ts_20",
      "dialogueContext": "Tình bạn giữa Woody và Buzz đã chuyển từ ganh đua sang gắn bó tri kỷ:",
      "question": "Từ tiếng Anh nào mô tả sự đồng lòng, tình huynh đệ keo sơn giữa hai người bạn?",
      "options": [
        "Brotherhood / True friendship",
        "Enmity",
        "Jealousy",
        "Competition"
      ],
      "answer": "Brotherhood / True friendship",
      "explanationVi": "'True friendship' (Tình bạn chân chính) vượt qua mọi đố kỵ ban đầu để trở thành bạn tri kỷ suốt đời."
    }
  ],
  "modern-family": [
    {
      "id": "mf_1",
      "dialogueContext": "Phil Dunphy tự hào giới thiệu phong cách làm cha 'ngầu' độc nhất của mình:",
      "question": "Phil tự nhận phong cách của mình là sự kết hợp giữa bố và bạn: 'I'm a _______ dad'?",
      "options": [
        "cool",
        "strict",
        "mean",
        "boring"
      ],
      "answer": "cool",
      "explanationVi": "Phil luôn tự nhận: 'I'm a cool dad, that's my thing. I'm hip, I surf the web, I text.' (Bố là một ông bố siêu ngầu)."
    },
    {
      "id": "mf_2",
      "dialogueContext": "Gloria thường xuyên bị nhầm lẫn phát âm do tiếng Anh không phải tiếng mẹ đẻ:",
      "question": "Gloria nói về tiếng Anh của mình: 'Do you know how smart I am in _______?'",
      "options": [
        "Spanish",
        "French",
        "German",
        "Italian"
      ],
      "answer": "Spanish",
      "explanationVi": "Câu nói nổi tiếng của Gloria bảo vệ vốn tri thức của mình: 'Bạn có biết tôi thông minh cỡ nào khi nói tiếng Tây Ban Nha không?'."
    },
    {
      "id": "mf_3",
      "dialogueContext": "Jay Pritchett là trụ cột gia đình lớn và sở hữu công ty thành công:",
      "question": "Jay kinh doanh sản phẩm gia dụng nào nổi tiếng trong thành phố?",
      "options": [
        "Closets (Tủ quần áo)",
        "Cars",
        "Shoes",
        "Beds"
      ],
      "answer": "Closets (Tủ quần áo)",
      "explanationVi": "Công ty của Jay là 'Pritchett's Closets & Blinds' (Tủ quần áo và rèm cửa cao cấp)."
    },
    {
      "id": "mf_4",
      "dialogueContext": "Cameron Tucker luôn thể hiện cảm xúc một cách mãnh liệt và kịch tính:",
      "question": "Từ tiếng Anh mô tả người có tính cách thích làm quá, kịch tính hóa mọi chuyện là:",
      "options": [
        "Dramatic / Theatrical",
        "Quiet",
        "Shy",
        "Cold"
      ],
      "answer": "Dramatic / Theatrical",
      "explanationVi": "'Dramatic' là người thích phóng đại cảm xúc, sống thiên về kịch nghệ như tính cách đáng yêu của Cam."
    },
    {
      "id": "mf_5",
      "dialogueContext": "Claire Dunphy luôn phải quản lý sự hỗn loạn của ba đứa con và chồng:",
      "question": "Từ tiếng Anh chỉ người kiểm soát mọi tiểu tiết trong nhà là:",
      "options": [
        "Control freak",
        "Lazy person",
        "Silent partner",
        "Tourist"
      ],
      "answer": "Control freak",
      "explanationVi": "'Control freak' là tiếng lóng chỉ người thích kiểm soát tuyệt đối mọi thứ xung quanh như Claire."
    },
    {
      "id": "mf_6",
      "dialogueContext": "Phil Dunphy làm nghề gì đầy đam mê và nhiệt huyết?",
      "question": "Nghề nghiệp của Phil là môi giới gì?",
      "options": [
        "Realtor / Real estate agent (Môi giới bất động sản)",
        "Lawyer",
        "Pilot",
        "Dentist"
      ],
      "answer": "Realtor / Real estate agent (Môi giới bất động sản)",
      "explanationVi": "Phil là một nhà môi giới nhà đất ('Realtor') tận tâm và luôn sáng tạo cách bán nhà độc lạ."
    },
    {
      "id": "mf_7",
      "dialogueContext": "Manny con trai của Gloria có tính cách chín chắn trước tuổi như một ông cụ non:",
      "question": "Từ tiếng Anh mô tả một đứa trẻ thông minh hiểu chuyện trước tuổi là:",
      "options": [
        "Precocious / Old soul",
        "Babyish",
        "Immature",
        "Silly"
      ],
      "answer": "Precocious / Old soul",
      "explanationVi": "'Old soul' (tâm hồn già dặn) hoặc 'precocious' (trưởng thành sớm), Manny thích uống cà phê đen và ngâm thơ tình."
    },
    {
      "id": "mf_8",
      "dialogueContext": "Phil sáng tác ra cuốn cẩm nang bài học cuộc sống cho các con:",
      "question": "Tên triết lý cuộc sống pha trộn giữa Phil và Philosophy là gì?",
      "options": [
        "Phil's-osophy",
        "Phil-Life",
        "Father-Rules",
        "Smart-Dad"
      ],
      "answer": "Phil's-osophy",
      "explanationVi": "'Phil's-osophy' là cuốn sổ tay chứa những lời khuyên kỳ quặc nhưng ấm áp của Phil dành cho Haley khi vào đại học."
    },
    {
      "id": "mf_9",
      "dialogueContext": "Mitchell và Cameron nhận nuôi cô bé Lily người Việt Nam:",
      "question": "Hành động pháp lý nhận nuôi một đứa trẻ trong tiếng Anh là:",
      "options": [
        "Adopt a child",
        "Sell a child",
        "Hire a child",
        "Rent a child"
      ],
      "answer": "Adopt a child",
      "explanationVi": "'Adopt' là động từ nhận con nuôi hợp pháp, mở đầu bằng cảnh phim kinh điển trên máy bay."
    },
    {
      "id": "mf_10",
      "dialogueContext": "Cameron hoá trang thành nhân vật chú hề biểu diễn vui nhộn:",
      "question": "Tên nhân vật chú hề huyền thoại mà Cameron hóa thân là gì?",
      "options": [
        "Fizbo the Clown",
        "Joker",
        "Pennywise",
        "Bozo"
      ],
      "answer": "Fizbo the Clown",
      "explanationVi": "'Fizbo' là chú hề nghệ thuật biểu diễn mà Cam vô cùng tự hào từ thời lớn lên ở nông trại Missouri."
    },
    {
      "id": "mf_11",
      "dialogueContext": "Alex Dunphy là học sinh gương mẫu xuất sắc của trường trung học:",
      "question": "Danh hiệu học sinh có điểm trung bình cao nhất khóa tốt nghiệp là:",
      "options": [
        "Valedictorian",
        "Freshman",
        "Sophomore",
        "Drop-out"
      ],
      "answer": "Valedictorian",
      "explanationVi": "'Valedictorian' là thủ khoa tốt nghiệp đại diện toàn trường đọc diễn văn ra trường."
    },
    {
      "id": "mf_12",
      "dialogueContext": "Luke và Phil luôn có những trò nghịch ngợm kỳ quặc trong sân vườn:",
      "question": "Cụm từ tiếng Anh 'Like father, like son' có nghĩa là gì?",
      "options": [
        "Cha nào con nấy",
        "Cha ghét con",
        "Cha đánh con",
        "Con không giống cha"
      ],
      "answer": "Cha nào con nấy",
      "explanationVi": "'Like father, like son' là thành ngữ chỉ nét tương đồng tính cách giữa hai cha con Phil và Luke."
    },
    {
      "id": "mf_13",
      "dialogueContext": "Haley con gái lớn rất sành điệu về thời trang nhưng hơi đãng trí trong học tập:",
      "question": "Haley đam mê lĩnh vực gì sau khi rời trường học?",
      "options": [
        "Fashion & Style (Thời trang và phong cách)",
        "Nuclear Physics",
        "Brain Surgery",
        "Carpentry"
      ],
      "answer": "Fashion & Style (Thời trang và phong cách)",
      "explanationVi": "Haley rất nhạy bén với thời trang ('fashion') và trở thành trợ lý phong cách sành điệu."
    },
    {
      "id": "mf_14",
      "dialogueContext": "Mitchell làm nghề luật sư luôn đề cao sự công bằng và quy chuẩn:",
      "question": "Nghề luật sư trong tiếng Anh được gọi là:",
      "options": [
        "Lawyer / Attorney",
        "Accountant",
        "Architect",
        "Mechanic"
      ],
      "answer": "Lawyer / Attorney",
      "explanationVi": "'Lawyer' hoặc 'Attorney' là luật sư chuyên nghiệp, Mitchell bảo vệ môi trường và công lý."
    },
    {
      "id": "mf_15",
      "dialogueContext": "Bậc tam cấp bị lung lay ở nhà Dunphy mà Phil mãi không sửa:",
      "question": "Câu cửa miệng Phil luôn nhắc mọi người khi bước lên bậc thang bị hỏng là gì?",
      "options": [
        "Gotta fix that step!",
        "Don't walk here!",
        "Break the stairs!",
        "Call 911!"
      ],
      "answer": "Gotta fix that step!",
      "explanationVi": "'Gotta fix that step!' (Phải sửa bậc thang đó mới được!) là câu đùa kéo dài suốt nhiều mùa phim."
    },
    {
      "id": "mf_16",
      "dialogueContext": "Jay rất cưng chiều chú chó bulldog Pháp có tên là Stella:",
      "question": "Mối quan hệ thân thiết giữa người và thú cưng trong gia đình được xem là:",
      "options": [
        "Part of the family (Một thành viên trong gia đình)",
        "A pest",
        "A toy",
        "A stranger"
      ],
      "answer": "Part of the family (Một thành viên trong gia đình)",
      "explanationVi": "Jay đối xử với chú chó Stella như con cưng, khiến Gloria nhiều lúc ghen tị hài hước."
    },
    {
      "id": "mf_17",
      "dialogueContext": "Phong cách làm phim tài liệu giả tưởng của Modern Family:",
      "question": "Thể loại phim truyền hình quay phỏng vấn trực diện nhân vật như đời thực được gọi là:",
      "options": [
        "Mockumentary",
        "Horror",
        "Musical",
        "Action thriller"
      ],
      "answer": "Mockumentary",
      "explanationVi": "'Mockumentary' (phim tài liệu hài châm biếm) tạo cảm giác chân thật và kết nối trực tiếp với khán giả."
    },
    {
      "id": "mf_18",
      "dialogueContext": "Ngày lễ Tạ Ơn (Thanksgiving) truyền thống của gia đình Mỹ:",
      "question": "Món ăn biểu tượng không thể thiếu trong bữa tiệc Tạ Ơn là:",
      "options": [
        "Roasted Turkey (Gà tây quay)",
        "Sushi",
        "Hot dog",
        "Tacos"
      ],
      "answer": "Roasted Turkey (Gà tây quay)",
      "explanationVi": "'Turkey' (Gà tây) là món ăn trung tâm của ngày lễ Tạ Ơn mà Phil luôn muốn nướng thật hoàn hảo."
    },
    {
      "id": "mf_19",
      "dialogueContext": "Sự khác biệt văn hóa giữa Colombia và Mỹ qua những câu chuyện của Gloria:",
      "question": "Từ tiếng Anh chỉ 'sự giao thoa văn hóa' trong gia đình đa sắc tộc là:",
      "options": [
        "Cultural diversity / blend",
        "Isolation",
        "Silence",
        "Separation"
      ],
      "answer": "Cultural diversity / blend",
      "explanationVi": "'Cultural diversity' (sự đa dạng văn hóa) làm nên nét đẹp hiện đại và đa sắc màu của gia đình."
    },
    {
      "id": "mf_20",
      "dialogueContext": "Lời đúc kết xúc động của Jay về định nghĩa gia đình ở tập cuối mỗi mùa:",
      "question": "Gia đình không nhất thiết phải hoàn hảo, điều quan trọng nhất là:",
      "options": [
        "Being there for one another (Luôn kề vai sát cánh bên nhau)",
        "Having lots of money",
        "Never talking",
        "Living far away"
      ],
      "answer": "Being there for one another (Luôn kề vai sát cánh bên nhau)",
      "explanationVi": "'Family is family' - Dù có bao nhiêu bất đồng, họ luôn xuất hiện và yêu thương nhau vô điều kiện."
    }
  ],
  "friends": [
    {
      "id": "friends_1",
      "dialogueContext": "Joey Tribbiani dạy cách tán tỉnh phụ nữ bằng câu chào cửa miệng kinh điển:",
      "question": "Câu chào huyền thoại của Joey là gì?",
      "options": [
        "How you doin'?",
        "Where are you going?",
        "Who are you?",
        "What do you want?"
      ],
      "answer": "How you doin'?",
      "explanationVi": "'How you doin'?' (Em dạo này thế nào?) là câu tán tỉnh trứ danh của Joey với ngữ điệu nhấn nhá đặc trưng."
    },
    {
      "id": "friends_2",
      "dialogueContext": "Ross tranh cãi gay gắt với Rachel về việc anh qua đêm với cô gái khác:",
      "question": "Ross luôn lớn tiếng bào chữa: 'We were on a _______!'",
      "options": [
        "break",
        "vacation",
        "trip",
        "date"
      ],
      "answer": "break",
      "explanationVi": "'We were on a break!' (Chúng ta đang tạm chia tay mà!) là cuộc tranh luận kéo dài suốt 10 mùa của Friends."
    },
    {
      "id": "friends_3",
      "dialogueContext": "Phoebe giải thích về định mệnh tình yêu vĩnh cửu của Ross và Rachel:",
      "question": "Phoebe ví Ross và Rachel như loài động vật nào luôn nắm tay nhau cả đời?",
      "options": [
        "Lobsters (Tôm hùm)",
        "Penguins",
        "Dolphins",
        "Otters"
      ],
      "answer": "Lobsters (Tôm hùm)",
      "explanationVi": "'She's your lobster!' - Phoebe tin rằng tôm hùm già đi và giữ nguyên một bạn đời suốt đời nắm càng nhau."
    },
    {
      "id": "friends_4",
      "dialogueContext": "Ross, Chandler và Rachel cố gắng khiêng chiếc sofa cồng kềnh lên cầu thang chật hẹp:",
      "question": "Ross liên tục gào thét từ mệnh lệnh nào để xoay góc ghế?",
      "options": [
        "PIVOT!",
        "PUSH!",
        "PULL!",
        "RUN!"
      ],
      "answer": "PIVOT!",
      "explanationVi": "'PIVOT!' (Xoay góc/Trục xoay!) - cảnh quay hài hước kinh điển khi chiếc ghế sofa bị kẹt cứng ở chiếu nghỉ cầu thang."
    },
    {
      "id": "friends_5",
      "dialogueContext": "Chandler Bing nổi tiếng với phong cách nói chuyện mỉa mai, châm biếm:",
      "question": "Cấu trúc câu cửa miệng mỉa mai của Chandler là: 'Could I BE any more _______?'",
      "options": [
        "sarcastic / [adjective]",
        "happy",
        "rich",
        "tall"
      ],
      "answer": "sarcastic / [adjective]",
      "explanationVi": "Chandler luôn nhấn mạnh từ 'BE': 'Could I BE any more...?' để tạo sự mỉa mai hài hước (sarcasm)."
    },
    {
      "id": "friends_6",
      "dialogueContext": "Monica Geller có nỗi ám ảnh mãnh liệt về sự sạch sẽ và trật tự trong căn hộ:",
      "question": "Từ tiếng Anh mô tả người cực kỳ sạch sẽ, ngăn nắp đến mức ám ảnh cưỡng chế là:",
      "options": [
        "Neat freak / Clean freak",
        "Messy person",
        "Lazy bones",
        "Sleepyhead"
      ],
      "answer": "Neat freak / Clean freak",
      "explanationVi": "'Clean freak' chỉ người bị ám ảnh việc lau dọn, sắp xếp đồ đạc theo thứ tự chữ cái và màu sắc như Monica."
    },
    {
      "id": "friends_7",
      "dialogueContext": "Quán cà phê quen thuộc nơi 6 người bạn tụ họp mỗi ngày ở Manhattan:",
      "question": "Tên quán cà phê huyền thoại trong Friends là:",
      "options": [
        "Central Perk",
        "Starbucks",
        "Coffee Bean",
        "Manhattan Cafe"
      ],
      "answer": "Central Perk",
      "explanationVi": "'Central Perk' là quán cà phê với chiếc sofa màu cam trung tâm, nơi bắt đầu mọi câu chuyện."
    },
    {
      "id": "friends_8",
      "dialogueContext": "Joey từ chối chia sẻ thức ăn trên đĩa của mình với bất kỳ ai kể cả bạn gái:",
      "question": "Joey tuyên bố nguyên tắc ăn uống bất di bất dịch của mình là:",
      "options": [
        "Joey doesn't share food!",
        "Joey loves diet!",
        "Joey is vegetarian!",
        "Joey hates pizza!"
      ],
      "answer": "Joey doesn't share food!",
      "explanationVi": "'Joey doesn't share food!' (Joey không chia sẻ đồ ăn đâu nhé!) - tính cách tham ăn đáng yêu của Joey."
    },
    {
      "id": "friends_9",
      "dialogueContext": "Bài hát vui nhộn và kỳ quặc nhất của Phoebe Buffay tại quán cà phê:",
      "question": "Tên bài hát về chú mèo bị hôi mùi của Phoebe là gì?",
      "options": [
        "Smelly Cat",
        "Cute Cat",
        "Black Cat",
        "Angry Cat"
      ],
      "answer": "Smelly Cat",
      "explanationVi": "'Smelly Cat' (Chú mèo bốc mùi) là bản hit hài hước nổi tiếng nhất của nhân vật Phoebe."
    },
    {
      "id": "friends_10",
      "dialogueContext": "Bạn gái cũ Janice xuất hiện với giọng cười the thé gây ám ảnh cho Chandler:",
      "question": "Janice luôn thốt lên câu cửa miệng nào kèm tiếng cười chói tai?",
      "options": [
        "OH. MY. GOD!",
        "I love you!",
        "Good morning!",
        "See you soon!"
      ],
      "answer": "OH. MY. GOD!",
      "explanationVi": "'OH. MY. GOD!' với chất giọng ngạt mũi kéo dài từng từ của Janice khiến cả nhóm rùng mình."
    },
    {
      "id": "friends_11",
      "dialogueContext": "Nghề nghiệp thực sự của Chandler ở công ty lớn mà cả nhóm không ai nhớ tên:",
      "question": "Thuật ngữ nghề nghiệp nghe rất phức tạp nhưng mơ hồ của Chandler là:",
      "options": [
        "Statistical analysis and data reconfiguration",
        "Paleontologist",
        "Fashion buyer",
        "Actor"
      ],
      "answer": "Statistical analysis and data reconfiguration",
      "explanationVi": "Chandler làm việc phân tích dữ liệu thống kê, nhưng bạn bè toàn nhầm là 'Transponster' (từ bịa vô nghĩa)."
    },
    {
      "id": "friends_12",
      "dialogueContext": "Ross Geller có bằng tiến sĩ và say mê nghiên cứu xương khủng long:",
      "question": "Chuyên ngành nhà cổ sinh vật học của Ross tiếng Anh là gì?",
      "options": [
        "Paleontologist",
        "Archaeologist",
        "Biologist",
        "Geologist"
      ],
      "answer": "Paleontologist",
      "explanationVi": "'Paleontologist' là nhà cổ sinh vật học, nghiên cứu hóa thạch khủng long thời tiền sử."
    },
    {
      "id": "friends_13",
      "dialogueContext": "Rachel Green bắt đầu từ con số không tại quán cà phê và vươn lên thành công:",
      "question": "Rachel đạt được công việc mơ ước tại thương hiệu thời trang cao cấp nào?",
      "options": [
        "Ralph Lauren",
        "McDonald's",
        "Nike",
        "Apple"
      ],
      "answer": "Ralph Lauren",
      "explanationVi": "Rachel làm giám đốc mua sắm thời trang cấp cao tại tập đoàn Ralph Lauren ở New York."
    },
    {
      "id": "friends_14",
      "dialogueContext": "Gunther anh chàng quản lý quán Central Perk thầm thương trộm nhớ ai suốt 10 năm?",
      "question": "Người tình trong mộng đơn phương của Gunther là ai?",
      "options": [
        "Rachel",
        "Monica",
        "Phoebe",
        "Janice"
      ],
      "answer": "Rachel",
      "explanationVi": "Gunther luôn âm thầm say đắm Rachel và ghét cay ghét đắng bất kỳ bạn trai nào của cô."
    },
    {
      "id": "friends_15",
      "dialogueContext": "Ross dạy hai cô gái về trạng thái giác ngộ cảnh giác tuyệt đối của võ thuật:",
      "question": "Khái niệm tiếng Nhật mà Ross phát âm nhầm như món cá hồi nướng là:",
      "options": [
        "Unagi",
        "Wasabi",
        "Sushi",
        "Sashimi"
      ],
      "answer": "Unagi",
      "explanationVi": "Ross nhầm lẫn giữa trạng thái tâm trí giác ngộ với món lươn nướng Nhật Bản 'Unagi'."
    },
    {
      "id": "friends_16",
      "dialogueContext": "Joey và Chandler nuôi hai con vật cưng kỳ quặc trong căn hộ chung cư:",
      "question": "Hai con vật cưng của đôi bạn thân là một con gà con và một con gì?",
      "options": [
        "A chick and a duck (Gà con và Vịt)",
        "A cat and a dog",
        "A snake and a rat",
        "A pig and a goat"
      ],
      "answer": "A chick and a duck (Gà con và Vịt)",
      "explanationVi": "'The Chick and the Duck' là hai thú cưng độc nhất vô nhị sống cùng hai chàng trai độc thân."
    },
    {
      "id": "friends_17",
      "dialogueContext": "Monica giấu cả nhóm về mối quan hệ bí mật với Chandler ở London:",
      "question": "Phoebe hét lên khi vô tình nhìn qua cửa sổ: 'They don't know that we know they _______!'",
      "options": [
        "know we know",
        "love each other",
        "hate us",
        "moved out"
      ],
      "answer": "know we know",
      "explanationVi": "'They don't know that we know they know we know!' - câu thoại xoắn não về trò chơi mèo vờn chuột giữ bí mật."
    },
    {
      "id": "friends_18",
      "dialogueContext": "Ross đọc nhầm tên cô dâu trong đám cưới ở nhà thờ London:",
      "question": "Ross chuẩn bị cưới Emily nhưng lại lỡ miệng đọc tên ai?",
      "options": [
        "I take thee, Rachel",
        "I take thee, Monica",
        "I take thee, Phoebe",
        "I take thee, Janice"
      ],
      "answer": "I take thee, Rachel",
      "explanationVi": "Sự cố chấn động khi Ross đọc 'I, Ross, take thee Rachel' thay vì Emily trước sự bàng hoàng của quan khách."
    },
    {
      "id": "friends_19",
      "dialogueContext": "Chiếc xe taxi màu vàng cổ lỗ sĩ mà Phoebe được thừa kế từ bà ngoại:",
      "question": "Phương tiện di chuyển biểu tượng trên đường phố New York tiếng Anh là:",
      "options": [
        "Yellow cab / taxi",
        "Subway",
        "Double-decker bus",
        "Tuk tuk"
      ],
      "answer": "Yellow cab / taxi",
      "explanationVi": "'Yellow cab' là chiếc xe taxi màu vàng đặc trưng không thể trộn lẫn của New York."
    },
    {
      "id": "friends_20",
      "dialogueContext": "Rachel quyết định rời bỏ chuyến bay sang Paris để ở lại với Ross ở tập cuối:",
      "question": "Rachel bước vào cửa căn hộ và nói câu kết xúc động nào?",
      "options": [
        "I got off the plane.",
        "I love Paris.",
        "I forgot my luggage.",
        "I lost my passport."
      ],
      "answer": "I got off the plane.",
      "explanationVi": "'I got off the plane' (Em đã xuống máy bay rồi) - cái kết viên mãn kết thúc 10 mùa Friends."
    }
  ],
  "inside-out": [
    {
      "id": "io_1",
      "dialogueContext": "Joy (Vui Vẻ) luôn muốn kiểm soát bảng điều khiển tâm trí cô bé Riley:",
      "question": "Joy có màu sắc phát sáng biểu trưng cho niềm hạnh phúc là màu gì?",
      "options": [
        "Yellow / Golden (Vàng kim rực rỡ)",
        "Blue",
        "Red",
        "Green"
      ],
      "answer": "Yellow / Golden (Vàng kim rực rỡ)",
      "explanationVi": "Joy mang màu vàng kim tỏa sáng, biểu tượng cho năng lượng tích cực và sự ấm áp."
    },
    {
      "id": "io_2",
      "dialogueContext": "Sadness (Buồn Bã) bị Joy cô lập vì sợ làm hỏng những ký ức tươi vui:",
      "question": "Joy vẽ một vòng tròn bằng phấn và bảo Sadness làm gì?",
      "options": [
        "Stay inside the circle (Ở yên trong vòng tròn)",
        "Jump over it",
        "Dance around it",
        "Erase it"
      ],
      "answer": "Stay inside the circle (Ở yên trong vòng tròn)",
      "explanationVi": "Joy vẽ vòng tròn phấn và yêu cầu Sadness không bước ra ngoài, phản ánh sai lầm khi chối bỏ nỗi buồn."
    },
    {
      "id": "io_3",
      "dialogueContext": "Những viên bi ký ức lưu trữ khoảnh khắc quan trọng nhất tạo nên nhân cách Riley:",
      "question": "Những ký ức cốt lõi nền tảng này được gọi là gì trong phim?",
      "options": [
        "Core memories",
        "Fake memories",
        "Lost memories",
        "Dark memories"
      ],
      "answer": "Core memories",
      "explanationVi": "'Core memories' (Ký ức cốt lõi) vận hành các đảo tính cách như Gia đình, Thể thao, Trung thực, Tình bạn."
    },
    {
      "id": "io_4",
      "dialogueContext": "Anger (Giận Dữ) luôn bốc hỏa mỗi khi Riley gặp phải chuyện bất công:",
      "question": "Mỗi khi Anger nổi điên, ngọn lửa bùng phát từ bộ phận nào trên người anh?",
      "options": [
        "The top of his head (Đỉnh đầu)",
        "His hands",
        "His eyes",
        "His shoes"
      ],
      "answer": "The top of his head (Đỉnh đầu)",
      "explanationVi": "Ngọn lửa phun trào từ đỉnh đầu Anger mô phỏng thành ngữ 'steam coming out of someone's head' khi bốc hỏa."
    },
    {
      "id": "io_5",
      "dialogueContext": "Disgust (Chảnh Chọe / Ghê Tởm) bảo vệ Riley khỏi những thứ độc hại và mất vệ sinh:",
      "question": "Món rau củ nào trên bánh pizza ở San Francisco khiến Disgust kinh hãi?",
      "options": [
        "Broccoli (Bông cải xanh)",
        "Carrots",
        "Mushrooms",
        "Tomatoes"
      ],
      "answer": "Broccoli (Bông cải xanh)",
      "explanationVi": "Pizza phủ bông cải xanh ('broccoli pizza') là nỗi ác mộng đối với vị giác trẻ nhỏ."
    },
    {
      "id": "io_6",
      "dialogueContext": "Fear (Sợ Hãi) luôn lập danh sách các mối nguy hiểm tiềm tàng:",
      "question": "Nhiệm vụ chính của Fear đối với sự an toàn của Riley là gì?",
      "options": [
        "Keep her safe from harm (Bảo vệ cô bé an toàn khỏi tổn thương)",
        "Make her laugh",
        "Make her cry",
        "Make her angry"
      ],
      "answer": "Keep her safe from harm (Bảo vệ cô bé an toàn khỏi tổn thương)",
      "explanationVi": "Nỗi sợ hãi bản năng sinh ra để giúp con người đề phòng nguy hiểm và bảo toàn tính mạng."
    },
    {
      "id": "io_7",
      "dialogueContext": "Người bạn tưởng tượng thời thơ ấu của Riley là chú sinh vật nửa voi nửa kẹo bông:",
      "question": "Tên người bạn tưởng tượng đáng yêu này là gì?",
      "options": [
        "Bing Bong",
        "King Kong",
        "Ding Dong",
        "Sing Song"
      ],
      "answer": "Bing Bong",
      "explanationVi": "Bing Bong là người bạn tưởng tượng có chiếc đuôi mèo, cơ thể kẹo bông và khóc ra kẹo ngọt."
    },
    {
      "id": "io_8",
      "dialogueContext": "Những ký ức cũ không còn được nhớ tới bị hút xuống hố sâu lãng quên:",
      "question": "Vùng đất tối tăm nơi các ký ức phai màu và tan biến vĩnh viễn được gọi là:",
      "options": [
        "The Memory Dump",
        "The Happy Forest",
        "The Brain City",
        "The Dream World"
      ],
      "answer": "The Memory Dump",
      "explanationVi": "'The Memory Dump' là bãi rác ký ức nơi mọi hồi ức bị lãng quên sẽ tan biến thành tro bụi."
    },
    {
      "id": "io_9",
      "dialogueContext": "Bing Bong hy sinh bản thân nhảy khỏi chiếc xe tên lửa kẹo bông để Joy có thể bay lên:",
      "question": "Câu nói cuối cùng đẫm nước mắt của Bing Bong nhắn gửi Joy là gì?",
      "options": [
        "Take her to the moon for me, okay?",
        "Goodbye forever!",
        "Don't forget me!",
        "Help me please!"
      ],
      "answer": "Take her to the moon for me, okay?",
      "explanationVi": "'Take her to the moon for me, okay?' (Hãy đưa cô bé lên mặt trăng thay tôi nhé!) - khoảnh khắc xúc động tột cùng."
    },
    {
      "id": "io_10",
      "dialogueContext": "Chuyến tàu chở ý nghĩ nối liền các khu vực trong tâm trí:",
      "question": "Tên đoàn tàu chạy trong não bộ của Riley là:",
      "options": [
        "Train of Thought",
        "Train of Love",
        "Speed Bullet Train",
        "Sky Train"
      ],
      "answer": "Train of Thought",
      "explanationVi": "'Train of Thought' (Mạch suy nghĩ) là phép chơi chữ tài tình của thành ngữ tiếng Anh chỉ dòng tư duy."
    },
    {
      "id": "io_11",
      "dialogueContext": "Xưởng sản xuất giấc mơ trong não bộ hoạt động như một phim trường Hollywood:",
      "question": "Khu vực chịu trách nhiệm sản xuất giấc ngủ hàng đêm được gọi là:",
      "options": [
        "Dream Productions",
        "Night Cinema",
        "Sleep Studio",
        "Brain Film"
      ],
      "answer": "Dream Productions",
      "explanationVi": "'Dream Productions' mô phỏng một xưởng phim điện ảnh chuyên nghiệp nơi diễn viên đóng các cơn mơ."
    },
    {
      "id": "io_12",
      "dialogueContext": "Chú hề rùng rợn trong cơn ác mộng thời thơ ấu của Riley:",
      "question": "Nỗi ám ảnh tâm lý sợ chú hề tiếng Anh chuyên ngành được gọi là:",
      "options": [
        "Coulrophobia",
        "Arachnophobia",
        "Claustrophobia",
        "Acrophobia"
      ],
      "answer": "Coulrophobia",
      "explanationVi": "'Coulrophobia' là hội chứng sợ chú hề, nhân vật Jangles the Clown trong tiềm thức của Riley."
    },
    {
      "id": "io_13",
      "dialogueContext": "Vùng tiềm thức sâu thẳm nơi giam giữ những nỗi sợ hãi đen tối nhất:",
      "question": "Khu vực tâm lý học này trong phim được gọi là:",
      "options": [
        "The Subconscious",
        "The Conscious",
        "The Ego",
        "The Super-ego"
      ],
      "answer": "The Subconscious",
      "explanationVi": "'The Subconscious' (Tiềm thức), nơi canh gác nghiêm ngặt những nỗi sợ chôn giấu."
    },
    {
      "id": "io_14",
      "dialogueContext": "Joy nhận ra giá trị thiêng liêng của Sadness sau khi xem lại ký ức buồn:",
      "question": "Tại sao Sadness lại quan trọng đối với con người khi gặp khó khăn?",
      "options": [
        "It signals for help and brings comfort (Báo hiệu sự cần giúp đỡ và kết nối yêu thương)",
        "It makes everyone angry",
        "It destroys happiness",
        "It is useless"
      ],
      "answer": "It signals for help and brings comfort (Báo hiệu sự cần giúp đỡ và kết nối yêu thương)",
      "explanationVi": "Nỗi buồn là tín hiệu chân thực nhất để gia đình và bạn bè đến bên che chở, thấu hiểu và sẻ chia."
    },
    {
      "id": "io_15",
      "dialogueContext": "Riley chuẩn bị bỏ trốn về Minnesota vì cảm thấy mất kết nối với cha mẹ:",
      "question": "Hành động bỏ nhà ra đi trong tiếng Anh là:",
      "options": [
        "Run away from home",
        "Go on vacation",
        "Visit grandparents",
        "Study abroad"
      ],
      "answer": "Run away from home",
      "explanationVi": "'Run away from home' là hành động bồng bột khi đứa trẻ bị mất phương hướng cảm xúc."
    },
    {
      "id": "io_16",
      "dialogueContext": "Bảng điều khiển cảm xúc bị xám xịt và đơ cứng khi Riley rơi vào trạng thái:",
      "question": "Hiện tượng tâm lý mất khả năng cảm nhận mọi cảm xúc được gọi là:",
      "options": [
        "Emotional numbness / Depression (Mất cảm xúc / Trầm cảm)",
        "Extreme happiness",
        "Overexcitement",
        "Great anger"
      ],
      "answer": "Emotional numbness / Depression (Mất cảm xúc / Trầm cảm)",
      "explanationVi": "Khi các cảm xúc mất kiểm soát, con người rơi vào trạng thái 'numb' (vô cảm, trơ lì cảm xúc)."
    },
    {
      "id": "io_17",
      "dialogueContext": "Sadness chạm tay vào bảng điều khiển và giúp Riley òa khóc trước bố mẹ:",
      "question": "Những giọt nước mắt giải tỏa áp lực tâm lý trong tiếng Anh được gọi là:",
      "options": [
        "Cathartic tears / Crying it out",
        "Fake crying",
        "Tears of joy",
        "Dry eyes"
      ],
      "answer": "Cathartic tears / Crying it out",
      "explanationVi": "'Cry it out' nghĩa là khóc cho vơi nhẹ lòng, giải tỏa mọi ức chế dồn nén bấy lâu."
    },
    {
      "id": "io_18",
      "dialogueContext": "Viên bi ký ức mới xuất hiện có sự pha trộn giữa hai màu vàng và xanh lam:",
      "question": "Sự kết hợp giữa niềm vui và nỗi buồn thể hiện cảm xúc sâu sắc nào?",
      "options": [
        "Bittersweet (Buồn vui lẫn lộn / Trưởng thành)",
        "Pure anger",
        "Pure disgust",
        "Terror"
      ],
      "answer": "Bittersweet (Buồn vui lẫn lộn / Trưởng thành)",
      "explanationVi": "'Bittersweet' (ngọt ngào xen lẫn đắng cay) là dấu mốc tâm lý khi đứa trẻ bước sang tuổi dậy thì."
    },
    {
      "id": "io_19",
      "dialogueContext": "Bảng điều khiển được nâng cấp mở rộng khi Riley bước sang tuổi 12:",
      "question": "Nút bấm màu đỏ cảnh báo mới được lắp trên bảng điều khiển có chữ gì?",
      "options": [
        "PUBERTY (Dậy thì)",
        "DANGER",
        "STOP",
        "GAME OVER"
      ],
      "answer": "PUBERTY (Dậy thì)",
      "explanationVi": "'PUBERTY' (Tuổi dậy thì) hé lộ những biến đổi tâm sinh lý phức tạp chuẩn bị bùng nổ ở phần kế tiếp."
    },
    {
      "id": "io_20",
      "dialogueContext": "Thông điệp cốt lõi của Inside Out về sức khỏe tinh thần:",
      "question": "Bộ phim giúp chúng ta thấu hiểu điều gì về mọi cảm xúc trong con người?",
      "options": [
        "All emotions are valid and necessary (Mọi cảm xúc đều đáng trân trọng và cần thiết)",
        "Only joy matters",
        "Sadness should be deleted",
        "Anger is always bad"
      ],
      "answer": "All emotions are valid and necessary (Mọi cảm xúc đều đáng trân trọng và cần thiết)",
      "explanationVi": "Không có cảm xúc nào là vô dụng; mỗi sắc thái cảm xúc đều góp phần tạo nên một nhân cách trọn vẹn."
    }
  ],
  "harry-potter-1": [
    {
      "id": "hp_1",
      "dialogueContext": "Hagrid phá cửa túp lều trên đảo đá và nói câu định mệnh với Harry vào sinh nhật 11 tuổi:",
      "question": "Câu nói kinh điển của Hagrid là: 'Yer a _______, Harry.'",
      "options": [
        "wizard",
        "ghost",
        "giant",
        "prince"
      ],
      "answer": "wizard",
      "explanationVi": "'Yer a wizard, Harry' (Con là một phù thủy đấy, Harry) mở ra thế giới phép thuật kỳ diệu."
    },
    {
      "id": "hp_2",
      "dialogueContext": "Chiếc mũ phân loại (The Sorting Hat) cân nhắc xếp Harry vào nhà nào trước khi cậu từ chối:",
      "question": "Nhà phù thủy nào mà Harry liên tục thầm thì: 'Not _______, not _______'?",
      "options": [
        "Slytherin",
        "Gryffindor",
        "Hufflepuff",
        "Ravenclaw"
      ],
      "answer": "Slytherin",
      "explanationVi": "Harry liên tục cầu xin chiếc mũ: 'Not Slytherin, please not Slytherin' vì nghe tiếng xấu về nhà này."
    },
    {
      "id": "hp_3",
      "dialogueContext": "Hermione Granger sửa phát âm bùa bay cho Ron Weasley trong lớp Bùa chú:",
      "question": "Hermione nhắc nhở: 'It's Leviosa, not _______!'",
      "options": [
        "Leviosaaar",
        "Leviosum",
        "Leviosi",
        "Levioso"
      ],
      "answer": "Leviosaaar",
      "explanationVi": "'It's Levi-O-sa, not Levio-SAR!' - màn dạy phát âm chuẩn ngữ điệu kinh điển của cô bé Hermione."
    },
    {
      "id": "hp_4",
      "dialogueContext": "Bức thư nhập học trường Hogwarts được gửi đến nhà dì dượng Dursley qua đường nào?",
      "question": "Loài chim đưa thư của thế giới phù thủy là loài chim nào?",
      "options": [
        "Owls (Chim cú mèo)",
        "Pigeons",
        "Eagles",
        "Hawks"
      ],
      "answer": "Owls (Chim cú mèo)",
      "explanationVi": "Hàng trăm lá thư được đàn cú mèo chuyển phát ('owl post') tới ngôi nhà số 4 đường Privet Drive."
    },
    {
      "id": "hp_5",
      "dialogueContext": "Sân ga bí mật để đón chuyến tàu tốc hành Hogwarts Express tại nhà ga King's Cross:",
      "question": "Số hiệu sân ga ma thuật nằm giữa sân ga 9 và 10 là:",
      "options": [
        "Platform 9 3/4 (Sân ga 9 ba phần tư)",
        "Platform 10 1/2",
        "Platform 8",
        "Platform 11"
      ],
      "answer": "Platform 9 3/4 (Sân ga 9 ba phần tư)",
      "explanationVi": "'Platform 9 ¾' là cánh cổng xuyên tường gạch để học sinh bước lên đoàn tàu Hogwarts."
    },
    {
      "id": "hp_6",
      "dialogueContext": "Hẻm Xéo (Diagon Alley) nơi các phù thủy mua sắm đũa phép và sách giáo khoa:",
      "question": "Cửa tiệm chế tác đũa phép lâu đời và uy tín nhất là của nghệ nhân nào?",
      "options": [
        "Ollivanders",
        "Flourish and Blotts",
        "Madam Malkin",
        "Gringotts"
      ],
      "answer": "Ollivanders",
      "explanationVi": "'Ollivanders: Makers of Fine Wands since 382 BC' - nơi cây đũa phép chọn chủ nhân."
    },
    {
      "id": "hp_7",
      "dialogueContext": "Ông Ollivander giải thích nguyên lý gắn kết giữa đũa phép và phù thủy:",
      "question": "Nguyên tắc thần kỳ là: 'The wand chooses the _______, Mr. Potter.'",
      "options": [
        "wizard",
        "teacher",
        "gold",
        "book"
      ],
      "answer": "wizard",
      "explanationVi": "'The wand chooses the wizard' (Cây đũa phép tự chọn phù thủy sở hữu nó chứ không phải ngược lại)."
    },
    {
      "id": "hp_8",
      "dialogueContext": "Trận bóng Quidditch trên không trung là môn thể thao vua của phù thủy:",
      "question": "Quả bóng vàng có cánh nhỏ bé quyết định 150 điểm số trận đấu là:",
      "options": [
        "The Golden Snitch",
        "The Quaffle",
        "The Bludger",
        "The Nimbus"
      ],
      "answer": "The Golden Snitch",
      "explanationVi": "'The Golden Snitch' (Trái banh Snitch Vàng) di chuyển với tốc độ cực nhanh mà Tầm thủ (Seeker) phải bắt lấy."
    },
    {
      "id": "hp_9",
      "dialogueContext": "Giáo sư Severus Snape bước vào lớp Độc dược với phong thái uy nghiêm lạnh lùng:",
      "question": "Snape tuyên bố: 'I can teach you how to bottle fame, brew glory, and even put a stopper on _______.'",
      "options": [
        "death",
        "love",
        "wealth",
        "sleep"
      ],
      "answer": "death",
      "explanationVi": "Lời mở đầu mê hoặc của Snape: dạy cách chưng cất danh vọng, ủ men vinh quang và thậm chí ngăn chặn cái chết ('death')."
    },
    {
      "id": "hp_10",
      "dialogueContext": "Chiếc gương Ảo ảnh (The Mirror of Erised) phản chiếu điều gì của người đứng trước nó?",
      "question": "Dumbledore giải thích chiếc gương cho thấy: 'The deepest, most desperate _______ of our hearts.'",
      "options": [
        "desire (khát vọng)",
        "fear",
        "anger",
        "future"
      ],
      "answer": "desire (khát vọng)",
      "explanationVi": "'Erised' viết ngược lại của chữ 'Desire' (Ước muốn sâu kín nhất trong trái tim)."
    },
    {
      "id": "hp_11",
      "dialogueContext": "Chú chó ba đầu khổng lồ Fluffy canh giữ cửa hầm bí mật:",
      "question": "Điểm yếu duy nhất khiến Fluffy ngủ say sưa như một đứa trẻ là gì?",
      "options": [
        "Music (Âm nhạc)",
        "Meat",
        "Water",
        "Fire"
      ],
      "answer": "Music (Âm nhạc)",
      "explanationVi": "Chỉ cần cất lên một khúc nhạc du dương từ cây đàn hạc là chú chó ba đầu Fluffy sẽ lập tức chìm vào giấc ngủ."
    },
    {
      "id": "hp_12",
      "dialogueContext": "Bàn cờ vua phù thủy khổng lồ (Wizard's Chess) bảo vệ hòn đá phù thủy:",
      "question": "Ai là người đã dũng cảm hy sinh thân mình trên lưng quân Mã để Harry chiếu tướng?",
      "options": [
        "Ron Weasley",
        "Hermione Granger",
        "Neville Longbottom",
        "Draco Malfoy"
      ],
      "answer": "Ron Weasley",
      "explanationVi": "Ron thể hiện tài nghệ đánh cờ bậc thầy và lòng quả cảm phi thường khi hy sinh quân Mã của mình."
    },
    {
      "id": "hp_13",
      "dialogueContext": "Hermione nhắc nhở hai người bạn về sự nghiêm trọng của việc vi phạm nội quy trường:",
      "question": "Hermione nói: 'We could have been killed, or worse, _______!'",
      "options": [
        "expelled (bị đuổi học)",
        "injured",
        "late",
        "grounded"
      ],
      "answer": "expelled (bị đuổi học)",
      "explanationVi": "'Bị đuổi học còn tồi tệ hơn bị giết chết' - câu nói bộc lộ tính cách ham học cuồng nhiệt của cô bé."
    },
    {
      "id": "hp_14",
      "dialogueContext": "Tên chúa tể hắc ám mà cả giới phù thủy run sợ không dám gọi thẳng tên:",
      "question": "Người ta thường dùng cụm từ kiêng kỵ nào để gọi Voldemort?",
      "options": [
        "He-Who-Must-Not-Be-Named / You-Know-Who",
        "The Dark King",
        "The Shadow Man",
        "The Monster"
      ],
      "answer": "He-Who-Must-Not-Be-Named / You-Know-Who",
      "explanationVi": "'Kẻ-mà-ai-cũng-biết-là-ai-đấy' là cách giới phù thủy né tránh tên gọi của Chúa tể Hắc ám."
    },
    {
      "id": "hp_15",
      "dialogueContext": "Chiếc áo choàng tàng hình (Invisibility Cloak) là di vật cha Harry để lại:",
      "question": "Tính năng ma thuật của chiếc áo choàng này là làm cho người mặc trở nên:",
      "options": [
        "Invisible (Vô hình)",
        "Invincible",
        "Flying",
        "Super strong"
      ],
      "answer": "Invisible (Vô hình)",
      "explanationVi": "'Invisible' (vô hình, không thể nhìn thấy bằng mắt thường), một trong Ba Bảo bối Tử thần."
    },
    {
      "id": "hp_16",
      "dialogueContext": "Vết sẹo trên trán Harry có hình dạng đặc biệt nào?",
      "question": "Vết sẹo định mệnh nơi lời nguyền chết chóc dội lại có hình:",
      "options": [
        "Lightning bolt (Tia chớp)",
        "Star",
        "Heart",
        "Moon"
      ],
      "answer": "Lightning bolt (Tia chớp)",
      "explanationVi": "'A lightning bolt scar' (vết sẹo hình tia chớp) là dấu ấn định mệnh kết nối Harry với Voldemort."
    },
    {
      "id": "hp_17",
      "dialogueContext": "Kẻ mang hai khuôn mặt dưới chiếc khăn xếp màu tím:",
      "question": "Voldemort đã ký sinh vào phía sau đầu của giáo sư nào trong trường?",
      "options": [
        "Professor Quirrell",
        "Professor McGonagall",
        "Professor Flitwick",
        "Professor Sprout"
      ],
      "answer": "Professor Quirrell",
      "explanationVi": "Giáo sư Quirrell giả vờ nói lắp nhưng thực chất là kẻ phản bội chứa chấp linh hồn Voldemort."
    },
    {
      "id": "hp_18",
      "dialogueContext": "Bàn tay Harry thiêu rụi Quirrell khi hắn chạm vào người cậu nhờ phép thuật cổ xưa:",
      "question": "Dumbledore giải thích thứ bảo vệ Harry chống lại cái ác tối thượng là:",
      "options": [
        "His mother's love (Tình yêu thương của người mẹ)",
        "A golden shield",
        "A magic spell",
        "A potion"
      ],
      "answer": "His mother's love (Tình yêu thương của người mẹ)",
      "explanationVi": "Sự hy sinh cao cả của người mẹ Lily Potter đã để lại một tấm khiên tình yêu bảo vệ Harry trong từng tế bào máu."
    },
    {
      "id": "hp_19",
      "dialogueContext": "Dumbledore thưởng 10 điểm quyết định cho Neville Longbottom trong tiệc cuối năm:",
      "question": "Dumbledore ca ngợi: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our _______.'",
      "options": [
        "friends (bạn bè)",
        "teachers",
        "parents",
        "kings"
      ],
      "answer": "friends (bạn bè)",
      "explanationVi": "'Đứng lên chống lại kẻ thù cần lòng can đảm, nhưng đứng lên chống lại bạn bè mình cũng cần sự dũng cảm không kém'."
    },
    {
      "id": "hp_20",
      "dialogueContext": "Khi bước lên tàu trở lại thế giới Muggle vào kỳ nghỉ hè:",
      "question": "Harry mỉm cười nói với Hagrid: 'I'm not really going home, not _______.'",
      "options": [
        "really",
        "never",
        "always",
        "sometimes"
      ],
      "answer": "really",
      "explanationVi": "Đối với Harry, trường Hogwarts mới thực sự là ngôi nhà ấm áp đầu tiên trong cuộc đời cậu."
    }
  ],
  "forrest-gump": [
    {
      "id": "fg_1",
      "dialogueContext": "Forrest Gump ngồi trên băng ghế chờ xe buýt và mời người lạ một thanh sô-cô-la:",
      "question": "Câu nói bất hủ của mẹ Forrest là: 'Life was like a box of chocolates. You never know what you're gonna _______.'",
      "options": [
        "get",
        "eat",
        "lose",
        "buy"
      ],
      "answer": "get",
      "explanationVi": "'Life is like a box of chocolates. You never know what you're gonna get' (Cuộc đời như một hộp sô-cô-la, bạn không bao giờ biết mình sẽ nhận được viên nào)."
    },
    {
      "id": "fg_2",
      "dialogueContext": "Mẹ Forrest dạy cậu không bao giờ được tự ti về chỉ số thông minh của mình:",
      "question": "Mẹ dạy: 'Stupid is as stupid _______.'",
      "options": [
        "does",
        "says",
        "looks",
        "thinks"
      ],
      "answer": "does",
      "explanationVi": "'Stupid is as stupid does' (Kẻ ngốc là kẻ làm những điều ngu ngốc) - hành động mới định nghĩa phẩm giá con người."
    },
    {
      "id": "fg_3",
      "dialogueContext": "Jenny hét lớn trên đường làng Alabama khi bầy trẻ hư ném đá đuổi theo Forrest:",
      "question": "Tiếng hét cổ vũ huyền thoại của Jenny là gì?",
      "options": [
        "Run, Forrest! Run!",
        "Jump, Forrest! Jump!",
        "Fight, Forrest! Fight!",
        "Hide, Forrest! Hide!"
      ],
      "answer": "Run, Forrest! Run!",
      "explanationVi": "'Run, Forrest! Run!' thúc đẩy Forrest bứt tung đôi nẹp chân sắt và chạy nhanh như một cơn gió."
    },
    {
      "id": "fg_4",
      "dialogueContext": "Forrest trở thành ngôi sao bóng bầu dục trường Đại học Alabama nhờ tài năng gì?",
      "question": "Nhiệm vụ duy nhất huấn luyện viên giao cho Forrest trên sân cỏ là:",
      "options": [
        "Catch the ball and run as fast as possible (Bắt bóng và chạy thục mạng)",
        "Kick the ball",
        "Pass the ball",
        "Block players"
      ],
      "answer": "Catch the ball and run as fast as possible (Bắt bóng và chạy thục mạng)",
      "explanationVi": "Forrest chỉ việc ôm bóng và chạy hết tốc lực về vạch cuối sân ('Touchdown') ghi điểm liên tiếp."
    },
    {
      "id": "fg_5",
      "dialogueContext": "Người bạn thân chí cốt Bubba có tình yêu bất tận với nghề gì?",
      "question": "Bubba say sưa nói cả ngày về các món chế biến từ con gì?",
      "options": [
        "Shrimp (Tôm)",
        "Fish",
        "Crab",
        "Beef"
      ],
      "answer": "Shrimp (Tôm)",
      "explanationVi": "Bubba liệt kê hàng chục cách chế biến tôm: tôm nướng, tôm chiên, tôm luộc, xúp tôm... và ước mơ có một chiếc tàu đánh tôm."
    },
    {
      "id": "fg_6",
      "dialogueContext": "Forrest nhập ngũ và luôn tuân thủ mệnh lệnh chỉ huy tuyệt đối không thắc mắc:",
      "question": "Viên trung sĩ huấn luyện khen ngợi Forrest là một:",
      "options": [
        "Goddamn genius (Một thiên tài chết tiệt)",
        "Terrible soldier",
        "Lazy guy",
        "Coward"
      ],
      "answer": "Goddamn genius (Một thiên tài chết tiệt)",
      "explanationVi": "Forrest luôn trả lời dõng dạc 'Yes, Drill Sergeant!' và lắp súng nhanh kỷ lục nên được coi là hình mẫu quân nhân lý tưởng."
    },
    {
      "id": "fg_7",
      "dialogueContext": "Tại chiến trường Việt Nam, Trung úy Dan Taylor luôn nhắc nhở lính mới về điều gì?",
      "question": "Quy tắc sinh tồn số 1 của Trung úy Dan ở vùng đầm lầy nhiệt đới là:",
      "options": [
        "Keep your feet dry (Giữ cho bàn chân luôn khô ráo)",
        "Never shoot",
        "Always sleep",
        "Eat more candy"
      ],
      "answer": "Keep your feet dry (Giữ cho bàn chân luôn khô ráo)",
      "explanationVi": "'Take care of your feet' để tránh lở loét và nhiễm trùng chân trong rừng rậm ẩm ướt."
    },
    {
      "id": "fg_8",
      "dialogueContext": "Forrest chạy ngược lại làn đạn pháo để cõng từng đồng đội bị thương ra bờ sông:",
      "question": "Hành động dũng cảm phi thường này đã giúp Forrest nhận được huân chương cao quý nào?",
      "options": [
        "Medal of Honor (Huân chương Danh dự)",
        "Purple Heart only",
        "Nobel Prize",
        "Oscar"
      ],
      "answer": "Medal of Honor (Huân chương Danh dự)",
      "explanationVi": "'The Congressional Medal of Honor' là huân chương quân sự tối cao của nước Mỹ do đích thân Tổng thống trao tặng."
    },
    {
      "id": "fg_9",
      "dialogueContext": "Trong thời gian hồi phục vết thương ở mông tại bệnh viện quân y:",
      "question": "Forrest phát hiện ra tài năng thiên bẩm ở môn thể thao nào?",
      "options": [
        "Ping-pong / Table tennis (Bóng bàn)",
        "Tennis",
        "Basketball",
        "Swimming"
      ],
      "answer": "Ping-pong / Table tennis (Bóng bàn)",
      "explanationVi": "Bí quyết chơi bóng bàn của Forrest là: 'Never take your eye off the ball' (Không bao giờ rời mắt khỏi quả bóng)."
    },
    {
      "id": "fg_10",
      "dialogueContext": "Forrest tham gia đoàn ngoại giao thể thao sang thi đấu tại Trung Quốc:",
      "question": "Sự kiện ngoại giao lịch sử có thật vào đầu thập niên 1970 được gọi là:",
      "options": [
        "Ping-pong diplomacy (Ngoại giao bóng bàn)",
        "Tennis diplomacy",
        "Moon diplomacy",
        "Nuclear diplomacy"
      ],
      "answer": "Ping-pong diplomacy (Ngoại giao bóng bàn)",
      "explanationVi": "'Ping-pong diplomacy' là sự kiện có thật mở đường cho việc bình thường hóa quan hệ Mỹ - Trung."
    },
    {
      "id": "fg_11",
      "dialogueContext": "Forrest thực hiện lời hứa danh dự với người bạn quá cố Bubba:",
      "question": "Forrest đã dùng số tiền kiếm được từ quảng cáo vợt bóng bàn để làm gì?",
      "options": [
        "Buy a shrimp boat (Mua một chiếc tàu đánh bắt tôm)",
        "Buy a mansion",
        "Go to casino",
        "Buy sports cars"
      ],
      "answer": "Buy a shrimp boat (Mua một chiếc tàu đánh bắt tôm)",
      "explanationVi": "Forrest giữ đúng lời thề mua tàu đánh tôm và đặt tên công ty là 'Bubba Gump Shrimp Co.'."
    },
    {
      "id": "fg_12",
      "dialogueContext": "Chiếc tàu đánh tôm của Forrest và Trung úy Dan vượt qua cơn bão kinh hoàng Carmen:",
      "question": "Sau cơn bão lớn phá hủy mọi con tàu khác tại bến cảng, mẻ lưới của họ bắt được gì?",
      "options": [
        "Thousands of pounds of fresh shrimp (Hàng tấn tôm tươi)",
        "Trash only",
        "Rocks",
        "Nothing"
      ],
      "answer": "Thousands of pounds of fresh shrimp (Hàng tấn tôm tươi)",
      "explanationVi": "Họ trở thành con tàu duy nhất còn sống sót và trúng mẻ tôm khổng lồ, trở nên giàu có tột bậc."
    },
    {
      "id": "fg_13",
      "dialogueContext": "Trung úy Dan đầu tư tiền của công ty vào một công ty công nghệ có logo hình quả táo:",
      "question": "Forrest ngây thơ tưởng đó là một công ty chuyên về mặt hàng gì?",
      "options": [
        "Some kind of fruit company (Một công ty kinh doanh hoa quả nào đó)",
        "A car maker",
        "A phone shop",
        "A bakery"
      ],
      "answer": "Some kind of fruit company (Một công ty kinh doanh hoa quả nào đó)",
      "explanationVi": "Forrest nói: 'He got me invested in some kind of fruit company' (thực chất là tập đoàn công nghệ Apple Computer)."
    },
    {
      "id": "fg_14",
      "dialogueContext": "Dù trở thành triệu phú, Forrest vẫn thích làm công việc giản dị miễn phí ở quê nhà:",
      "question": "Công việc hằng ngày Forrest yêu thích là gì?",
      "options": [
        "Cutting the grass / Mowing lawns (Cắt cỏ bằng máy cắt cỏ đẩy)",
        "Flying planes",
        "Driving limousines",
        "Counting coins"
      ],
      "answer": "Cutting the grass / Mowing lawns (Cắt cỏ bằng máy cắt cỏ đẩy)",
      "explanationVi": "'I cut that grass for free' - Forrest thích lái chiếc máy cắt cỏ quanh sân trường và nhà thờ."
    },
    {
      "id": "fg_15",
      "dialogueContext": "Sau khi Jenny rời đi, Forrest đột nhiên muốn chạy bộ và không dừng lại:",
      "question": "Forrest đã chạy xuyên qua nước Mỹ liên tục trong bao lâu?",
      "options": [
        "Over 3 years (Hơn 3 năm)",
        "3 days",
        "3 weeks",
        "3 months"
      ],
      "answer": "Over 3 years (Hơn 3 năm)",
      "explanationVi": "Forrest chạy từ bờ Đông sang bờ Tây rồi quay lại trong 3 năm, 2 tháng, 14 ngày và 16 giờ."
    },
    {
      "id": "fg_16",
      "dialogueContext": "Đám đông nhà báo chạy theo hỏi Forrest về lý do sâu xa của cuộc chạy bộ:",
      "question": "Forrest trả lời lý do đơn giản thuần khiết nhất là gì?",
      "options": [
        "I just felt like running. (Tôi chỉ tự nhiên thấy thích chạy thôi.)",
        "For world peace.",
        "For women's rights.",
        "For money."
      ],
      "answer": "I just felt like running. (Tôi chỉ tự nhiên thấy thích chạy thôi.)",
      "explanationVi": "Không vụ lợi chính trị, không thông điệp cao xa: 'I just felt like running'."
    },
    {
      "id": "fg_17",
      "dialogueContext": "Forrest bày tỏ tình yêu tha thiết không đổi thay với Jenny:",
      "question": "Forrest thổ lộ: 'I'm not a smart man, but I know what _______ is.'",
      "options": [
        "love",
        "money",
        "war",
        "fame"
      ],
      "answer": "love",
      "explanationVi": "'I'm not a smart man, but I know what love is' (Tôi không phải người đàn ông thông minh, nhưng tôi biết tình yêu là gì)."
    },
    {
      "id": "fg_18",
      "dialogueContext": "Forrest lần đầu gặp con trai bé nhỏ của mình tại căn hộ của Jenny:",
      "question": "Nỗi lo sợ đầu tiên Forrest hỏi Jenny về đứa bé là gì?",
      "options": [
        "Is he smart or is he like me? (Cậu bé có thông minh không hay lại giống tôi?)",
        "What is his name?",
        "Is he tall?",
        "Does he have teeth?"
      ],
      "answer": "Is he smart or is he like me? (Cậu bé có thông minh không hay lại giống tôi?)",
      "explanationVi": "Forrest lo lắng cậu bé bị chậm phát triển như mình, và rớt nước mắt khi Jenny xác nhận đứa trẻ rất thông minh."
    },
    {
      "id": "fg_19",
      "dialogueContext": "Forrest đứng bên mộ Jenny dưới tán cây sồi đại thụ:",
      "question": "Forrest trăn trở về định mệnh con người: 'Do we have a destiny, or are we just floating around accidental-like on a _______?'",
      "options": [
        "breeze (làn gió thoảng)",
        "cloud",
        "river",
        "train"
      ],
      "answer": "breeze (làn gió thoảng)",
      "explanationVi": "Hình ảnh triết lý về số phận: liệu con người có định mệnh riêng hay chỉ là chiếc lông vũ trôi nổi theo làn gió."
    },
    {
      "id": "fg_20",
      "dialogueContext": "Hình ảnh biểu tượng mở đầu và kết thúc bộ phim bay lượn trong không trung:",
      "question": "Vật thể trắng muốt nhẹ nhàng bay lượn trên bầu trời là gì?",
      "options": [
        "A white feather (Chiếc lông vũ trắng)",
        "A leaf",
        "A balloon",
        "A letter"
      ],
      "answer": "A white feather (Chiếc lông vũ trắng)",
      "explanationVi": "'A white feather' (chiếc lông chim trắng) tượng trưng cho sự thuần khiết, ngẫu nhiên và an nhiên của kiếp nhân sinh."
    }
  ],
  "how-i-met-your-mother": [
    {
      "id": "himym_1",
      "dialogueContext": "Barney Stinson luôn dùng từ này để miêu tả bất kỳ buổi tối nào đi chơi cùng Ted:",
      "question": "Tính từ huyền thoại của Barney là: 'It's gonna be legen—wait for it—_______!'",
      "options": [
        "dary (legendary)",
        "dary (scary)",
        "dary (boring)",
        "dary (ordinary)"
      ],
      "answer": "dary (legendary)",
      "explanationVi": "'Legendary!' (Huyền thoại!). Barney luôn ngắt quãng 'Wait for it...' để tạo sự hồi hộp tột đỉnh."
    },
    {
      "id": "himym_2",
      "dialogueContext": "Barney luôn yêu cầu các quý ông phải mặc âu phục chỉn chu mọi lúc mọi nơi:",
      "question": "Mệnh lệnh thời trang kinh điển của Barney là gì?",
      "options": [
        "Suit up!",
        "Dress down!",
        "Put on jeans!",
        "Wear sneakers!"
      ],
      "answer": "Suit up!",
      "explanationVi": "'Suit up!' (Mặc vest vào đi nào!) - Barney sở hữu tủ vest đồ sộ và thậm chí mặc vest ngủ."
    },
    {
      "id": "himym_3",
      "dialogueContext": "Cuốn cẩm nang tán gái tinh vi gồm hàng trăm mánh lới của Barney:",
      "question": "Tên cuốn sách bí kíp của Barney là gì?",
      "options": [
        "The Playbook",
        "The Rulebook",
        "The Cookbook",
        "The Notebook"
      ],
      "answer": "The Playbook",
      "explanationVi": "'The Playbook' chứa những mánh lới như 'The Lorenzo Von Matterhorn', 'The Ted Mosby', 'The Scuba Diver'."
    },
    {
      "id": "himym_4",
      "dialogueContext": "Quy tắc danh dự giữa những người bạn nam với nhau do Barney sáng lập:",
      "question": "Bộ luật bất thành văn của tình anh em được gọi là:",
      "options": [
        "The Bro Code",
        "The Guy Law",
        "The Man Rules",
        "The Dude Constitution"
      ],
      "answer": "The Bro Code",
      "explanationVi": "'The Bro Code' (Bộ quy tắc huynh đệ) quy định những điều anh em không bao giờ được làm với nhau."
    },
    {
      "id": "himym_5",
      "dialogueContext": "Quán bar quen thuộc dưới tầng trệt căn hộ nơi nhóm bạn tụ tập mỗi tối:",
      "question": "Tên quán pub Ailen huyền thoại ở Manhattan là:",
      "options": [
        "MacLaren's Pub",
        "Central Perk",
        "Cheers",
        "Moe's Tavern"
      ],
      "answer": "MacLaren's Pub",
      "explanationVi": "'MacLaren's Pub' với chiếc bàn gỗ góc quen thuộc nơi Ted, Marshall, Lily, Robin và Barney ngồi hàng đêm."
    },
    {
      "id": "himym_6",
      "dialogueContext": "Ted Mosby theo đuổi sự lãng mạn vô vọng và ăn trộm vật này từ nhà hàng Pháp cho Robin:",
      "question": "Vật phẩm biểu tượng cho tình yêu của Ted dành cho Robin là:",
      "options": [
        "The Blue French Horn (Chiếc tù và màu xanh)",
        "A Red Rose",
        "A Golden Ring",
        "A Yellow Umbrella"
      ],
      "answer": "The Blue French Horn (Chiếc tù và màu xanh)",
      "explanationVi": "'The Blue French Horn' (Chiếc kèn Pháp màu xanh) là minh chứng cho sự lãng mạn điên rồ của Ted."
    },
    {
      "id": "himym_7",
      "dialogueContext": "Vật dụng định mệnh gắn liền với hình bóng người Mẹ thực sự của hai đứa con Ted:",
      "question": "Món đồ màu vàng xuất hiện trong mưa gắn liền với cô gái định mệnh là:",
      "options": [
        "The Yellow Umbrella (Chiếc ô màu vàng)",
        "A Yellow Hat",
        "A Yellow Coat",
        "A Yellow Bag"
      ],
      "answer": "The Yellow Umbrella (Chiếc ô màu vàng)",
      "explanationVi": "'The Yellow Umbrella' (Chiếc ô màu vàng) là biểu tượng xuyên suốt của người Mẹ (Tracy McConnell)."
    },
    {
      "id": "himym_8",
      "dialogueContext": "Quá khứ tuổi teen đáng xấu hổ của Robin Scherbatsky tại Canada:",
      "question": "Robin từng là ngôi sao ca nhạc tuổi teen nổi tiếng với nghệ danh nào?",
      "options": [
        "Robin Sparkles",
        "Robin Stars",
        "Robin Shine",
        "Robin Glitter"
      ],
      "answer": "Robin Sparkles",
      "explanationVi": "'Robin Sparkles' với bản hit 'Let's Go to the Mall' tại các trung tâm thương mại Canada thập niên 90."
    },
    {
      "id": "himym_9",
      "dialogueContext": "Vụ cá cược 5 cái tát trời giáng giữa Marshall và Barney kéo dài nhiều năm:",
      "question": "Vụ cá cược nổi tiếng này được gọi là gì?",
      "options": [
        "The Slap Bet",
        "The Punch Game",
        "The Kiss Bet",
        "The Coin Toss"
      ],
      "answer": "The Slap Bet",
      "explanationVi": "'The Slap Bet' (Vụ cá cược cái tát) do Lily làm Slap Bet Commissioner trọng tài."
    },
    {
      "id": "himym_10",
      "dialogueContext": "Mỗi khi có ai đó thách đố một điều tưởng chừng bất khả thi:",
      "question": "Barney lập tức đáp lại đầy hào hứng bằng câu cửa miệng nào?",
      "options": [
        "Challenge accepted!",
        "I give up!",
        "No way!",
        "Too hard!"
      ],
      "answer": "Challenge accepted!",
      "explanationVi": "'Challenge accepted!' (Thử thách đã được chấp nhận!) - Barney không bao giờ từ chối một lời thách đố."
    },
    {
      "id": "himym_11",
      "dialogueContext": "Ted Mosby làm nghề gì đòi hỏi sự sáng tạo và tính toán kiến trúc?",
      "question": "Nghề nghiệp của Ted là:",
      "options": [
        "Architect (Kiến trúc sư)",
        "Doctor",
        "Pilot",
        "Accountant"
      ],
      "answer": "Architect (Kiến trúc sư)",
      "explanationVi": "Ted là một kiến trúc sư ('architect'), người thiết kế tòa nhà chọc trời mới cho Goliath National Bank."
    },
    {
      "id": "himym_12",
      "dialogueContext": "Marshall Eriksen đam mê ngành luật với ước mơ bảo vệ mẹ thiên nhiên:",
      "question": "Lĩnh vực luật mà Marshall luôn cống hiến theo đuổi là:",
      "options": [
        "Environmental Law (Luật môi trường)",
        "Tax Law",
        "Criminal Law",
        "Divorce Law"
      ],
      "answer": "Environmental Law (Luật môi trường)",
      "explanationVi": "Marshall muốn trở thành luật sư môi trường để cứu các loài động vật hoang dã và nguồn nước sạch."
    },
    {
      "id": "himym_13",
      "dialogueContext": "Lily Aldrin làm nghề gì trước khi trở thành cố vấn nghệ thuật?",
      "question": "Công việc ban đầu đầy kiên nhẫn của Lily là:",
      "options": [
        "Kindergarten teacher (Cô giáo mầm non)",
        "Chef",
        "Nurse",
        "Journalist"
      ],
      "answer": "Kindergarten teacher (Cô giáo mầm non)",
      "explanationVi": "Lily là giáo viên mầm non và hay áp dụng 'Aldrin Justice' để dạy bảo nhóm bạn người lớn."
    },
    {
      "id": "himym_14",
      "dialogueContext": "Trò chơi mai mối phụ nữ lạ ở quán bar của Barney và Ted:",
      "question": "Barney vỗ vai cô gái và hỏi: 'Have you met _______?'",
      "options": [
        "Ted?",
        "Marshall?",
        "Robin?",
        "Barney?"
      ],
      "answer": "Ted?",
      "explanationVi": "'Have you met Ted?' là chiêu mở đầu cuộc trò chuyện đơn giản mà hiệu quả nhất của Barney."
    },
    {
      "id": "himym_15",
      "dialogueContext": "Quy tắc của mẹ Ted về việc đi chơi đêm quá muộn:",
      "question": "Ted đúc kết: 'Nothing good happens after _______ A.M.'",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "answer": "2",
      "explanationVi": "'Nothing good happens after 2 A.M.' (Không có điều gì tốt đẹp xảy ra sau 2 giờ sáng cả, hãy về nhà ngủ)."
    },
    {
      "id": "himym_16",
      "dialogueContext": "Mối quan hệ kỳ lạ giữa Barney và chiếc xe taxi mỗi lần cần tẩu thoát:",
      "question": "Cử chỉ ăn mừng bằng cách đập tay trên không trung tiếng Anh là:",
      "options": [
        "High-five",
        "Handshake",
        "Hug",
        "Wave"
      ],
      "answer": "High-five",
      "explanationVi": "Barney sáng tạo ra đủ loại đập tay: 'Self-five', 'Phone-five', 'Solemn low-five', 'Reluctant five'."
    },
    {
      "id": "himym_17",
      "dialogueContext": "Món bánh mì kẹp thịt ngon nhất New York mà Marshall mất 8 năm tìm kiếm:",
      "question": "Món ăn đó được gọi là:",
      "options": [
        "The Best Burger in New York",
        "The Best Pizza",
        "The Best Taco",
        "The Best Hotdog"
      ],
      "answer": "The Best Burger in New York",
      "explanationVi": "Tập phim kinh điển khi cả nhóm lùng sục khắp New York để tìm quán burger có cánh cửa màu xanh lá cây."
    },
    {
      "id": "himym_18",
      "dialogueContext": "Đôi bốt da màu đỏ cao bồi mà Ted tự hào diện đi làm:",
      "question": "Mọi người trêu chọc nhưng Ted khẳng định: 'Pulling. Them. _______.'",
      "options": [
        "Off",
        "Down",
        "Away",
        "Up"
      ],
      "answer": "Off",
      "explanationVi": "'Pull something off' nghĩa là diện một bộ đồ khó mặc mà vẫn trông hợp thời và tự tin."
    },
    {
      "id": "himym_19",
      "dialogueContext": "Mánh lới cầu hôn công phu nhất mà Barney dành tặng Robin:",
      "question": "Trang cuối cùng trong The Playbook của Barney mang tên là gì?",
      "options": [
        "The Robin",
        "The Endgame",
        "The Final Step",
        "The Real Love"
      ],
      "answer": "The Robin",
      "explanationVi": "'The Robin' là kế hoạch 16 bước được Barney vạch ra tỉ mỉ để cầu hôn Robin trên sân thượng tòa nhà WWN."
    },
    {
      "id": "himym_20",
      "dialogueContext": "Khoảnh khắc đầu tiên Ted gặp Tracy dưới cơn mưa ở ga tàu Farhampton:",
      "question": "Âm thanh bài hát vang lên khi Tracy cầm chiếc ô vàng là:",
      "options": [
        "La Vie En Rose",
        "Hey Jude",
        "Yesterday",
        "Wonderwall"
      ],
      "answer": "La Vie En Rose",
      "explanationVi": "Tracy đàn ukulele và hát 'La Vie En Rose' ngoài ban công khách sạn, chạm đến sâu thẳm tâm hồn Ted."
    }
  ],
  "the-big-bang-theory": [
    {
      "id": "tbbt_1",
      "dialogueContext": "Sheldon Cooper luôn thốt lên từ này mỗi khi chơi khăm hoặc trêu đùa bạn bè thành công:",
      "question": "Từ cửa miệng châm chọc độc quyền của Sheldon là gì?",
      "options": [
        "Bazinga!",
        "Bingo!",
        "Gotcha!",
        "Eureka!"
      ],
      "answer": "Bazinga!",
      "explanationVi": "'Bazinga!' là câu thốt lên chiến thắng quen thuộc của Sheldon khi anh lừa được ai đó."
    },
    {
      "id": "tbbt_2",
      "dialogueContext": "Sheldon có thói quen kỳ quặc khi gõ cửa phòng Penny:",
      "question": "Sheldon luôn gõ cửa theo nhịp điệu nào?",
      "options": [
        "Gõ 3 lần và gọi 'Penny!' 3 lần liên tiếp",
        "Gõ 1 lần thật mạnh",
        "Bấm chuông liên hồi",
        "Đá vào cửa"
      ],
      "answer": "Gõ 3 lần và gọi 'Penny!' 3 lần liên tiếp",
      "explanationVi": "*Knock knock knock* Penny! *Knock knock knock* Penny! *Knock knock knock* Penny! là nghi thức gõ cửa bất di bất dịch."
    },
    {
      "id": "tbbt_3",
      "dialogueContext": "Vị trí ngồi bất khả xâm phạm của Sheldon trên chiếc ghế sofa phòng khách:",
      "question": "Lý do Sheldon không cho bất kỳ ai ngồi vào vị trí của mình ('That's my spot!'):",
      "options": [
        "Tọa độ hoàn hảo về nhiệt độ, hướng gió và tầm nhìn TV",
        "Vì ghế bị bẩn",
        "Vì anh thích màu sắc đó",
        "Vì anh mua chiếc ghế"
      ],
      "answer": "Tọa độ hoàn hảo về nhiệt độ, hướng gió và tầm nhìn TV",
      "explanationVi": "Sheldon giải thích chiếc đệm đó là trạng thái cân bằng lý tưởng về luồng gió điều hòa và góc xem vô tuyến."
    },
    {
      "id": "tbbt_4",
      "dialogueContext": "Bài hát êm dịu mà Sheldon bắt người khác hát ru mỗi khi anh bị ốm:",
      "question": "Tên bài hát về chú mèo con ấm áp của mẹ Sheldon là:",
      "options": [
        "Soft Kitty",
        "Sleepy Dog",
        "Little Bird",
        "Happy Bear"
      ],
      "answer": "Soft Kitty",
      "explanationVi": "'Soft kitty, warm kitty, little ball of fur...' là bài hát xoa dịu duy nhất khi Sheldon bị sốt cảm."
    },
    {
      "id": "tbbt_5",
      "dialogueContext": "Hợp đồng quy định quyền lợi và nghĩa vụ sống chung nhà giữa Sheldon và Leonard:",
      "question": "Bản hợp đồng pháp lý dày cộp chi tiết từng điều khoản này được gọi là:",
      "options": [
        "The Roommate Agreement",
        "The Friend Treaty",
        "The House Rules",
        "The Flat Contract"
      ],
      "answer": "The Roommate Agreement",
      "explanationVi": "'The Roommate Agreement' (Thỏa thuận cùng phòng) quy định nhiệt độ phòng, giờ tắm và quy trình báo cháy."
    },
    {
      "id": "tbbt_6",
      "dialogueContext": "Howard Wolowitz là thành viên duy nhất trong nhóm 4 nhà khoa học không có bằng gì?",
      "question": "Học vị mà Sheldon luôn mỉa mai Howard không sở hữu là:",
      "options": [
        "Ph.D. (Tiến sĩ)",
        "Master (Thạc sĩ)",
        "Bachelor (Cử nhân)",
        "High School"
      ],
      "answer": "Ph.D. (Tiến sĩ)",
      "explanationVi": "Howard chỉ có bằng Thạc sĩ Kỹ thuật của MIT ('Master's degree'), trong khi ba người còn lại đều là Tiến sĩ (Ph.D.)."
    },
    {
      "id": "tbbt_7",
      "dialogueContext": "Hội chứng tâm lý kỳ lạ của Rajesh Koothrappali khi đứng trước phụ nữ đẹp trong các mùa đầu:",
      "question": "Rajesh mắc chứng bệnh gì khiến anh không thể nói được một lời nào?",
      "options": [
        "Selective mutism (Chứng câm chọn lọc khi gặp phụ nữ)",
        "Amnesia",
        "Blindness",
        "Insomnia"
      ],
      "answer": "Selective mutism (Chứng câm chọn lọc khi gặp phụ nữ)",
      "explanationVi": "Raj chỉ có thể nói chuyện tự tin với phụ nữ khi uống một ngụm rượu có cồn."
    },
    {
      "id": "tbbt_8",
      "dialogueContext": "Chiếc thang máy trong tòa chung cư bị hỏng suốt 12 mùa phim:",
      "question": "Ai là người chịu trách nhiệm làm nổ tung thang máy bằng nhiên liệu tên lửa?",
      "options": [
        "Leonard Hofstadter",
        "Sheldon Cooper",
        "Howard Wolowitz",
        "Penny"
      ],
      "answer": "Leonard Hofstadter",
      "explanationVi": "Một thí nghiệm nhiên liệu tên lửa của Leonard bị lỗi và Sheldon đã ném thùng hóa chất vào thang máy cứu mạng Leonard."
    },
    {
      "id": "tbbt_9",
      "dialogueContext": "Trò chơi mở rộng Oẳn Tù Tì do Sheldon sáng chế để tránh hòa nhau:",
      "question": "Trò chơi bổ sung hai yếu tố mới là Thằn lằn (Lizard) và nhân vật khoa học viễn tưởng nào?",
      "options": [
        "Spock",
        "Yoda",
        "Darth Vader",
        "Batman"
      ],
      "answer": "Spock",
      "explanationVi": "'Rock, Paper, Scissors, Lizard, Spock' là phiên bản nâng cấp giảm tỷ lệ hòa nhau."
    },
    {
      "id": "tbbt_10",
      "dialogueContext": "Sheldon đam mê nghiên cứu ngành vật lý nào tìm hiểu bản chất vũ trụ?",
      "question": "Chuyên ngành vật lý lý thuyết của Sheldon là:",
      "options": [
        "Theoretical Physics / String Theory (Vật lý lý thuyết / Thuyết dây)",
        "Botany",
        "Zoology",
        "Dentistry"
      ],
      "answer": "Theoretical Physics / String Theory (Vật lý lý thuyết / Thuyết dây)",
      "explanationVi": "Sheldon dành cả sự nghiệp nghiên cứu Thuyết dây và sau đó chuyển sang nghiên cứu Bất đối xứng siêu trường."
    },
    {
      "id": "tbbt_11",
      "dialogueContext": "Leonard nghiên cứu vật lý thực nghiệm tại học viện Caltech:",
      "question": "Chuyên ngành của Leonard là:",
      "options": [
        "Experimental Physics (Vật lý thực nghiệm)",
        "Literature",
        "History",
        "Music"
      ],
      "answer": "Experimental Physics (Vật lý thực nghiệm)",
      "explanationVi": "Leonard thực hiện các thí nghiệm đo đạc laser và hạt vật chất ('experimental physics')."
    },
    {
      "id": "tbbt_12",
      "dialogueContext": "Cửa hàng truyện tranh nơi 4 chàng trai đến vào mỗi tối thứ Tư:",
      "question": "Chủ tiệm truyện tranh Comic Book Store có tính cách u buồn là ai?",
      "options": [
        "Stuart Bloom",
        "Barry Kripke",
        "Wil Wheaton",
        "Zack"
      ],
      "answer": "Stuart Bloom",
      "explanationVi": "Stuart là chủ tiệm truyện tranh tốt bụng nhưng luôn gặp khó khăn tài chính và sức khỏe."
    },
    {
      "id": "tbbt_13",
      "dialogueContext": "Howard Wolowitz được NASA tuyển chọn tham gia sứ mệnh vĩ đại nào?",
      "question": "Howard đã bay lên đâu trên tàu vũ trụ Soyuz của Nga?",
      "options": [
        "International Space Station - ISS (Trạm Vũ trụ Quốc tế)",
        "The Moon",
        "Mars",
        "Jupiter"
      ],
      "answer": "International Space Station - ISS (Trạm Vũ trụ Quốc tế)",
      "explanationVi": "Howard tự hào trở thành phi hành gia ('astronaut') làm việc trên Trạm Vũ trụ Quốc tế ISS."
    },
    {
      "id": "tbbt_14",
      "dialogueContext": "Bernadette Rostenkowski làm việc trong ngành công nghiệp dược phẩm sinh lời cao:",
      "question": "Tính cách đặc trưng đối lập của Bernadette là:",
      "options": [
        "Ngoại hình nhỏ nhắn, giọng the thé nhưng cực kỳ hung dữ khi giận",
        "Rất nhút nhát",
        "Không bao giờ nói",
        "Luôn khóc lóc"
      ],
      "answer": "Ngoại hình nhỏ nhắn, giọng the thé nhưng cực kỳ hung dữ khi giận",
      "explanationVi": "Bernadette có giọng nói nhỏ nhẹ dễ thương nhưng khi quát lên thì uy lực như sấm sét khiến ai cũng khiếp sợ."
    },
    {
      "id": "tbbt_15",
      "dialogueContext": "Amy Farrah Fowler là bạn gái và sau này là vợ của Sheldon:",
      "question": "Amy là nhà khoa học nghiên cứu chuyên ngành sinh học nào?",
      "options": [
        "Neurobiology (Sinh học thần kinh)",
        "Astrophysics",
        "Geology",
        "Chemistry"
      ],
      "answer": "Neurobiology (Sinh học thần kinh)",
      "explanationVi": "Amy là nhà khoa học thần kinh ('neurobiologist') nghiên cứu não bộ của người và linh trưởng."
    },
    {
      "id": "tbbt_16",
      "dialogueContext": "Thí nghiệm tư duy nổi tiếng của cơ học lượng tử mà Sheldon giải thích cho Penny về tình yêu:",
      "question": "Thí nghiệm con mèo trong chiếc hộp kín gắn liền với tên nhà vật lý nào?",
      "options": [
        "Schrödinger's Cat (Con mèo của Schrödinger)",
        "Newton's Apple",
        "Einstein's Train",
        "Galileo's Tower"
      ],
      "answer": "Schrödinger's Cat (Con mèo của Schrödinger)",
      "explanationVi": "Con mèo vừa sống vừa chết cho đến khi bạn mở hộp ra xem - ví như việc Leonard và Penny phải hẹn hò mới biết kết quả."
    },
    {
      "id": "tbbt_17",
      "dialogueContext": "Mẹ của Sheldon, bà Mary Cooper, luôn có lời giải thích mọi chuyện qua tôn giáo:",
      "question": "Sheldon thường tự hào khẳng định mẹ mình đã từng đưa anh đi xét nghiệm:",
      "options": [
        "I'm not crazy, my mother had me tested! (Tôi không điên, mẹ đã cho tôi đi khám rồi!)",
        "I am a robot!",
        "I am a god!",
        "I am normal!"
      ],
      "answer": "I'm not crazy, my mother had me tested! (Tôi không điên, mẹ đã cho tôi đi khám rồi!)",
      "explanationVi": "Câu cửa miệng bào chữa mỗi khi ai đó bảo Sheldon có vấn đề về tâm thần."
    },
    {
      "id": "tbbt_18",
      "dialogueContext": "Penny từ một bồi bàn ước mơ làm diễn viên đã chuyển sang nghề nghiệp thành đạt nào?",
      "question": "Công việc mang lại thu nhập cao cho Penny ở công ty dược là:",
      "options": [
        "Pharmaceutical sales representative (Đại diện bán hàng dược phẩm)",
        "Brain surgeon",
        "Singer",
        "Lawyer"
      ],
      "answer": "Pharmaceutical sales representative (Đại diện bán hàng dược phẩm)",
      "explanationVi": "Penny trở thành nhân viên bán hàng dược phẩm xuất sắc nhờ tài ăn nói duyên dáng và khéo léo."
    },
    {
      "id": "tbbt_19",
      "dialogueContext": "Sheldon và Amy phát hiện ra công trình nghiên cứu mang tính đột phá về:",
      "question": "Lý thuyết khoa học mang lại giải thưởng danh giá cho cặp đôi Shamy là:",
      "options": [
        "Super-Asymmetry (Thuyết Siêu Bất Đối Xứng)",
        "Time Travel",
        "Teleportation",
        "Perpetual Motion"
      ],
      "answer": "Super-Asymmetry (Thuyết Siêu Bất Đối Xứng)",
      "explanationVi": "Công trình về Thuyết Siêu Bất Đối Xứng là đỉnh cao học thuật của hai vợ chồng."
    },
    {
      "id": "tbbt_20",
      "dialogueContext": "Tập cuối cùng của series khép lại bằng giải thưởng cao quý nhất thế giới tại Thụy Điển:",
      "question": "Giải thưởng mà Sheldon và Amy vinh dự nhận được tại Stockholm là:",
      "options": [
        "The Nobel Prize in Physics (Giải Nobel Vật lý)",
        "Oscar",
        "Grammy",
        "Pulitzer"
      ],
      "answer": "The Nobel Prize in Physics (Giải Nobel Vật lý)",
      "explanationVi": "Sheldon đã đứng trên bục nhận giải Nobel và đọc bài phát biểu tri ân cảm động nhất cuộc đời dành cho những người bạn thân."
    }
  ],
  "the-intern": [
    {
      "id": "ti_1",
      "dialogueContext": "Ben Whittaker 70 tuổi quyết định nộp đơn vào chương trình thực tập sinh cao tuổi:",
      "question": "Ben tâm sự về cảm giác sau khi nghỉ hưu: 'Musicians don't retire; they stop when there's no more _______ in them.'",
      "options": [
        "music",
        "money",
        "time",
        "food"
      ],
      "answer": "music",
      "explanationVi": "'Musicians don't retire; they stop when there's no more music in them' (Nhạc sĩ không nghỉ hưu; họ chỉ dừng lại khi không còn âm nhạc trong tâm hồn)."
    },
    {
      "id": "ti_2",
      "dialogueContext": "Ben luôn mang theo chiếc khăn tay vải trong túi áo vest mỗi ngày:",
      "question": "Ben giải thích lý do đàn ông đích thực luôn cần mang khăn tay (handkerchief):",
      "options": [
        "It is to lend to a woman when she cries (Để đưa cho phụ nữ khi cô ấy khóc)",
        "To clean glasses",
        "To wrap food",
        "To show wealth"
      ],
      "answer": "It is to lend to a woman when she cries (Để đưa cho phụ nữ khi cô ấy khóc)",
      "explanationVi": "'It's to lend. Women cry, Jules. We carry it for them.' - cử chỉ lịch thiệp cổ điển của người đàn ông hào hoa."
    },
    {
      "id": "ti_3",
      "dialogueContext": "Công ty khởi nghiệp của Jules Ostin kinh doanh sản phẩm gì phát triển vượt bậc?",
      "question": "About The Fit là công ty khởi nghiệp thương mại điện tử chuyên về:",
      "options": [
        "Online fashion & clothing (Thời trang bán lẻ trực tuyến)",
        "Car rental",
        "Food delivery",
        "Video games"
      ],
      "answer": "Online fashion & clothing (Thời trang bán lẻ trực tuyến)",
      "explanationVi": "About The Fit là trang web mua sắm thời trang may mặc phát triển thần tốc với 220 nhân viên."
    },
    {
      "id": "ti_4",
      "dialogueContext": "Jules Ostin đi lại trong văn phòng công ty rộng lớn bằng phương tiện gì để tiết kiệm thời gian?",
      "question": "Phương tiện di chuyển độc đáo của nữ CEO trẻ trong văn phòng là:",
      "options": [
        "A bicycle (Chiếc xe đạp)",
        "Roller skates",
        "A skateboard",
        "A hoverboard"
      ],
      "answer": "A bicycle (Chiếc xe đạp)",
      "explanationVi": "Jules đạp xe quanh khu văn phòng mở kiểu nhà kho Brooklyn để kiểm tra công việc nhanh chóng."
    },
    {
      "id": "ti_5",
      "dialogueContext": "Ben dọn dẹp sạch sẽ chiếc bàn ngập ngụa đồ đạc và rác thải ở giữa văn phòng:",
      "question": "Phản ứng của toàn thể nhân viên công ty khi thấy chiếc bàn rác biến mất là gì?",
      "options": [
        "Vỗ tay hoan hô nhiệt liệt tán thưởng Ben",
        "Tức giận mắng Ben",
        "Bỏ việc",
        "Bắt đền đồ đạc"
      ],
      "answer": "Vỗ tay hoan hô nhiệt liệt tán thưởng Ben",
      "explanationVi": "Chiếc bàn bừa bộn ám ảnh mọi người bấy lâu được Ben lặng lẽ dọn dẹp gọn gàng, ghi điểm tuyệt đối trong mắt mọi người."
    },
    {
      "id": "ti_6",
      "dialogueContext": "Ben dạy các chàng trai trẻ thế hệ Millennial về cách ăn mặc nơi công sở:",
      "question": "Ben khuyên họ nên đóng thùng áo sơ mi và luôn đeo phụ kiện gì khi đi làm?",
      "options": [
        "A tie (Cà vạt) and tucking in shirts",
        "A baseball cap",
        "Sunglasses",
        "Flip-flops"
      ],
      "answer": "A tie (Cà vạt) and tucking in shirts",
      "explanationVi": "Ben truyền cảm hứng cho các đồng nghiệp trẻ mặc sơ mi lịch thiệp, cạo râu và đeo cà vạt chỉn chu."
    },
    {
      "id": "ti_7",
      "dialogueContext": "Chiếc cặp da công sở cổ điển của Ben có tuổi thọ hàng thập kỷ:",
      "question": "Vật phẩm đựng tài liệu bằng da sang trọng này tiếng Anh là:",
      "options": [
        "Briefcase",
        "Backpack",
        "Plastic bag",
        "Tote bag"
      ],
      "answer": "Briefcase",
      "explanationVi": "'A classic vintage briefcase' (chiếc cặp táp da cổ điển) của Ben khiến các bạn trẻ ngưỡng mộ trầm trồ."
    },
    {
      "id": "ti_8",
      "dialogueContext": "Ben từng làm phó giám đốc tại chính tòa nhà văn phòng này suốt 40 năm trước:",
      "question": "Công ty in ấn danh bạ cũ mà Ben từng gắn bó cả đời sản xuất mặt hàng gì?",
      "options": [
        "Phone books / Yellow Pages (Danh bạ điện thoại những trang vàng)",
        "Newspapers",
        "Comic books",
        "Postcards"
      ],
      "answer": "Phone books / Yellow Pages (Danh bạ điện thoại những trang vàng)",
      "explanationVi": "Ben từng làm quản lý cấp cao in ấn danh bạ điện thoại 'Dex One' tại đúng địa điểm này trước khi chuyển đổi số."
    },
    {
      "id": "ti_9",
      "dialogueContext": "Jules chịu áp lực từ các nhà đầu tư mạo hiểm về việc thuê một người lãnh đạo mới:",
      "question": "Hội đồng quản trị muốn Jules thuê chức danh gì để điều hành công ty?",
      "options": [
        "A seasoned CEO (Một Tổng Giám Đốc giàu kinh nghiệm)",
        "A new intern",
        "A new driver",
        "A cleaner"
      ],
      "answer": "A seasoned CEO (Một Tổng Giám Đốc giàu kinh nghiệm)",
      "explanationVi": "Các cổ đông lo ngại công ty tăng trưởng quá nhanh và muốn đưa một CEO dày dạn về thay thế Jules."
    },
    {
      "id": "ti_10",
      "dialogueContext": "Ben bí mật lái xe đưa Jules đi làm và quan sát thói quen sinh hoạt của cô:",
      "question": "Đức tính làm nên sự tin cậy tuyệt đối của Ben là gì?",
      "options": [
        "Discretion and loyalty (Sự kín đáo và lòng trung thành)",
        "Gossiping",
        "Arrogance",
        "Laziness"
      ],
      "answer": "Discretion and loyalty (Sự kín đáo và lòng trung thành)",
      "explanationVi": "'Discretion' (sự kín đáo, tế nhị) - Ben luôn giữ bí mật tuyệt đối về đời tư của cấp trên."
    },
    {
      "id": "ti_11",
      "dialogueContext": "Chiến dịch đột nhập nhà mẹ đẻ của Jules để xóa email gửi nhầm:",
      "question": "Kế hoạch 'đột nhập' hài hước này được so sánh như bộ phim hành động nào?",
      "options": [
        "Ocean's Eleven / Mission Impossible",
        "The Godfather",
        "Titanic",
        "Avatar"
      ],
      "answer": "Ocean's Eleven / Mission Impossible",
      "explanationVi": "Ben và ba anh chàng nhân viên trẻ phối hợp đột nhập tắt chuông báo động để xóa bức email mắng mẹ của Jules."
    },
    {
      "id": "ti_12",
      "dialogueContext": "Mối tình ngọt ngào lúc xế chiều của Ben với cô nhân viên mát-xa tại công ty:",
      "question": "Tên người phụ nữ duyên dáng do nữ diễn viên Rene Russo thủ vai là:",
      "options": [
        "Fiona",
        "Sarah",
        "Emily",
        "Jessica"
      ],
      "answer": "Fiona",
      "explanationVi": "Fiona là chuyên viên xoa bóp trị liệu văn phòng mang lại luồng gió mới ấm áp cho trái tim Ben."
    },
    {
      "id": "ti_13",
      "dialogueContext": "Jules trực tiếp gọi điện đến trung tâm chăm sóc khách hàng để tự tay giải quyết khiếu nại:",
      "question": "Hành động này thể hiện phong cách quản lý nào của Jules?",
      "options": [
        "Hands-on leadership (Lãnh đạo sâu sát thực tế và tỉ mỉ)",
        "Lazy leadership",
        "Absent management",
        "Careless"
      ],
      "answer": "Hands-on leadership (Lãnh đạo sâu sát thực tế và tỉ mỉ)",
      "explanationVi": "Jules tự mình thử đặt hàng, đóng gói hộp quà và nghe phản ánh để đảm bảo trải nghiệm khách hàng hoàn mỹ."
    },
    {
      "id": "ti_14",
      "dialogueContext": "Ben an ủi Jules trong phòng khách sạn ở San Francisco khi cô đau khổ về hôn nhân:",
      "question": "Ben khẳng định Jules đã tạo dựng nên kỳ tích bằng sự nỗ lực chân chính:",
      "options": [
        "You started this company from your kitchen table! (Cháu bắt đầu công ty này từ bàn ăn nhà bếp!)",
        "You should quit.",
        "You are a failure.",
        "You need money."
      ],
      "answer": "You started this company from your kitchen table! (Cháu bắt đầu công ty này từ bàn ăn nhà bếp!)",
      "explanationVi": "Ben nhắc nhở Jules rằng chính đam mê và tâm huyết của cô mới là linh hồn thực sự của thương hiệu."
    },
    {
      "id": "ti_15",
      "dialogueContext": "Matt người chồng ở nhà chăm sóc con gái nhỏ Paige của Jules:",
      "question": "Thuật ngữ tiếng Anh chỉ người cha ở nhà làm nội trợ chăm sóc gia đình là:",
      "options": [
        "Stay-at-home dad",
        "Working dad",
        "Absent father",
        "Single dad"
      ],
      "answer": "Stay-at-home dad",
      "explanationVi": "'Stay-at-home dad' là xu hướng hiện đại khi người cha lùi lại hậu phương lo việc nhà cho vợ phát triển sự nghiệp."
    },
    {
      "id": "ti_16",
      "dialogueContext": "Ben phát hiện ra sự thật đau lòng về sự phản bội của Matt:",
      "question": "Ben đã cư xử thế nào trước khi Jules tự tâm sự với ông?",
      "options": [
        "Giữ im lặng tôn trọng, ở bên cạnh làm chỗ dựa tinh thần cho Jules",
        "Đi rêu rao với mọi người",
        "Đánh Matt",
        "Bỏ việc"
      ],
      "answer": "Giữ im lặng tôn trọng, ở bên cạnh làm chỗ dựa tinh thần cho Jules",
      "explanationVi": "Sự từng trải và bao dung của Ben giúp ông biết lắng nghe đúng lúc mà không phán xét vội vàng."
    },
    {
      "id": "ti_17",
      "dialogueContext": "Jules nhận ra mình không cần phải nhượng lại vị trí CEO cho bất kỳ ai khác:",
      "question": "Jules nói: 'Nobody is gonna care about my company the way _______.'",
      "options": [
        "I do (như chính bản thân tôi)",
        "they do",
        "the board does",
        "investors do"
      ],
      "answer": "I do (như chính bản thân tôi)",
      "explanationVi": "Không ai có thể yêu thương và chăm chút cho công ty bằng chính người mẹ đã sáng lập ra nó."
    },
    {
      "id": "ti_18",
      "dialogueContext": "Matt đến văn phòng xin lỗi Jules chân thành và cầu xin sự tha thứ:",
      "question": "Matt khuyên Jules không nên từ bỏ ước mơ vì lỗi lầm của anh:",
      "options": [
        "Don't give up your dream for me. (Đừng từ bỏ ước mơ của em vì anh.)",
        "Sell the company.",
        "Stay home forever.",
        "I hate you."
      ],
      "answer": "Don't give up your dream for me. (Đừng từ bỏ ước mơ của em vì anh.)",
      "explanationVi": "Matt thức tỉnh và ủng hộ Jules tiếp tục làm CEO để hàn gắn hạnh phúc gia đình."
    },
    {
      "id": "ti_19",
      "dialogueContext": "Cảnh kết thúc ấm áp khi Jules chạy đi tìm Ben trong công viên:",
      "question": "Ben đang thảnh thơi tập bộ môn dưỡng sinh ngoài trời nào cùng mọi người?",
      "options": [
        "Tai Chi (Thái Cực Quyền)",
        "Boxing",
        "Football",
        "Marathon"
      ],
      "answer": "Tai Chi (Thái Cực Quyền)",
      "explanationVi": "Ben đang tập Thái Cực Quyền ('Tai Chi') thong dong trong công viên lộng gió."
    },
    {
      "id": "ti_20",
      "dialogueContext": "Jules bước vào hàng và cùng Ben thực hiện các động tác thư thái:",
      "question": "Thông điệp sâu sắc nhất của The Intern về khoảng cách thế hệ:",
      "options": [
        "Experience never gets old (Kinh nghiệm và sự tử tế không bao giờ lỗi thời)",
        "Old people are useless",
        "Youth is everything",
        "Work is more important than life"
      ],
      "answer": "Experience never gets old (Kinh nghiệm và sự tử tế không bao giờ lỗi thời)",
      "explanationVi": "Sự kết hợp hoàn hảo giữa năng lượng đổi mới của tuổi trẻ và trí tuệ tĩnh lặng của tuổi già."
    }
  ],
  "soul": [
    {
      "id": "soul_1",
      "dialogueContext": "Joe Gardner là giáo viên dạy nhạc cấp hai với niềm đam mê cháy bỏng:",
      "question": "Dòng nhạc cổ điển tinh túy của người Mỹ gốc Phi mà Joe say đắm là:",
      "options": [
        "Jazz",
        "Heavy Metal",
        "K-Pop",
        "EDM"
      ],
      "answer": "Jazz",
      "explanationVi": "Nhạc Jazz là linh hồn và niềm đam mê trọn đời của nghệ sĩ dương cầm Joe Gardner."
    },
    {
      "id": "soul_2",
      "dialogueContext": "Khoảnh khắc người nghệ sĩ chìm đắm thăng hoa vào âm nhạc quên hết thời gian:",
      "question": "Trạng thái tâm trí xuất thần kỳ diệu này được gọi là gì trong phim?",
      "options": [
        "The Zone (Vùng thăng hoa)",
        "The Lost Space",
        "The Sleep",
        "The Dream"
      ],
      "answer": "The Zone (Vùng thăng hoa)",
      "explanationVi": "'The Zone' là trạng thái dòng chảy tâm lý ('Flow state') khi con người hòa làm một với đam mê nghệ thuật."
    },
    {
      "id": "soul_3",
      "dialogueContext": "Nơi các linh hồn mới chào đời được tôi luyện tính cách trước khi xuống Trái Đất:",
      "question": "Cõi tiền kiếp này trong phim được gọi là:",
      "options": [
        "The Great Before (Cõi Trước)",
        "The Great Beyond",
        "The Underworld",
        "The Earth"
      ],
      "answer": "The Great Before (Cõi Trước)",
      "explanationVi": "'The Great Before' (còn gọi là You Seminar) là nơi các linh hồn nhỏ tích lũy tính cách và tìm kiếm tia sáng đam mê."
    },
    {
      "id": "soul_4",
      "dialogueContext": "Cõi vĩnh hằng đưa các linh hồn đi về miền cực lạc trên cầu thang ánh sáng:",
      "question": "Con đường ánh sáng vô tận nơi Joe cố gắng chạy ngược lại được gọi là:",
      "options": [
        "The Great Beyond (Cõi Vĩnh Hằng)",
        "The Black Hole",
        "The Sun",
        "The Moon"
      ],
      "answer": "The Great Beyond (Cõi Vĩnh Hằng)",
      "explanationVi": "'The Great Beyond' là nơi các linh hồn hoàn thành kiếp sống bước vào ánh sáng vĩnh cửu."
    },
    {
      "id": "soul_5",
      "dialogueContext": "Linh hồn số 22 là kẻ cứng đầu nhất không chịu đầu thai xuống Trái Đất suốt hàng nghìn năm:",
      "question": "Rất nhiều vĩ nhân lịch sử đã bất lực khi làm người cố vấn cho 22, bao gồm:",
      "options": [
        "Mẹ Teresa, Gandhi, Abraham Lincoln",
        "Chưa có ai",
        "Chỉ có Joe",
        "Các phi hành gia"
      ],
      "answer": "Mẹ Teresa, Gandhi, Abraham Lincoln",
      "explanationVi": "Hàng trăm bậc hiền triết vĩ đại nhất nhân loại đều đầu hàng trước sự bi quan và trốn tránh của linh hồn số 22."
    },
    {
      "id": "soul_6",
      "dialogueContext": "Mảnh ghép cuối cùng trên chiếc huy hiệu giúp linh hồn có vé bay xuống Trái Đất:",
      "question": "Tia sáng kỳ diệu đánh thức niềm khao khát sống được gọi là:",
      "options": [
        "The Spark (Tia sáng / Lửa sống)",
        "The Money",
        "The Gold",
        "The Key"
      ],
      "answer": "The Spark (Tia sáng / Lửa sống)",
      "explanationVi": "'The Spark' là ngọn lửa tâm hồn - Joe lầm tưởng đó là mục đích nghề nghiệp tối thượng, nhưng thực chất là tình yêu cuộc sống."
    },
    {
      "id": "soul_7",
      "dialogueContext": "Những sinh vật quái vật khổng lồ màu đen lang thang trong sa mạc u ám:",
      "question": "Những linh hồn bị ám ảnh cưỡng chế, mất phương hướng và gặm nhấm nỗi đau được gọi là:",
      "options": [
        "Lost souls (Những linh hồn lạc lối)",
        "Happy ghosts",
        "Angels",
        "Monsters"
      ],
      "answer": "Lost souls (Những linh hồn lạc lối)",
      "explanationVi": "'Lost souls' là những người bị mắc kẹt trong nỗi ám ảnh, lo âu và tự ti về bản thân ngoài đời thực."
    },
    {
      "id": "soul_8",
      "dialogueContext": "Moonwind và nhóm thủy thủ xoay biển hiệu trên đường phố New York:",
      "question": "Họ sử dụng phương pháp nào để kết nối tâm linh và cứu rỗi các linh hồn lạc lối?",
      "options": [
        "Meditation & Sign spinning (Thiền định và múa biển hiệu)",
        "Fighting",
        "Sleeping",
        "Singing rock"
      ],
      "answer": "Meditation & Sign spinning (Thiền định và múa biển hiệu)",
      "explanationVi": "Moonwind đạt tới cảnh giới xuất thần nhờ niềm say mê xoay biển hiệu quảng cáo ('Mystics without borders')."
    },
    {
      "id": "soul_9",
      "dialogueContext": "Sự cố hoán đổi thân xác kỳ lạ khi Joe và 22 rơi xuống Trái Đất:",
      "question": "Linh hồn của Joe nhập vào thân xác con vật nào ở bệnh viện?",
      "options": [
        "A therapy cat (Chú mèo trị liệu)",
        "A dog",
        "A bird",
        "A rat"
      ],
      "answer": "A therapy cat (Chú mèo trị liệu)",
      "explanationVi": "Joe nhập vào chú mèo lông xù Mr. Mittens, trong khi linh hồn 22 nhập vào cơ thể con người của Joe."
    },
    {
      "id": "soul_10",
      "dialogueContext": "Lần đầu tiên 22 được nếm thử hương vị ẩm thực đường phố New York:",
      "question": "Món ăn đầu tiên khiến 22 kinh ngạc về sự kỳ diệu của giác quan con người là:",
      "options": [
        "A slice of Pepperoni Pizza (Một miếng bánh pizza)",
        "A burger",
        "A sushi",
        "A cake"
      ],
      "answer": "A slice of Pepperoni Pizza (Một miếng bánh pizza)",
      "explanationVi": "Miếng bánh pizza nóng hổi khiến 22 lần đầu cảm nhận được vị giác tuyệt vời của đời sống trần thế."
    },
    {
      "id": "soul_11",
      "dialogueContext": "Tại tiệm cắt tóc của anh thợ cạo Dez bạn thân của Joe:",
      "question": "Dez chia sẻ ước mơ ban đầu của anh không phải là thợ cắt tóc mà là gì?",
      "options": [
        "A veterinarian (Bác sĩ thú y)",
        "A pilot",
        "A chef",
        "A dancer"
      ],
      "answer": "A veterinarian (Bác sĩ thú y)",
      "explanationVi": "Dez từng muốn làm bác sĩ thú y nhưng vẫn tìm thấy niềm vui và ý nghĩa trọn vẹn trong nghề cắt tóc."
    },
    {
      "id": "soul_12",
      "dialogueContext": "Những điều giản dị nhỏ bé mà 22 thu thập vào túi quần trong chuyến dạo chơi:",
      "question": "Vật thể rơi từ cành cây xoay tít trong không trung chạm vào tay 22 là gì?",
      "options": [
        "A maple seed (Hạt cây phong)",
        "A flower",
        "An apple",
        "A coin"
      ],
      "answer": "A maple seed (Hạt cây phong)",
      "explanationVi": "'A helicopter maple seed' (hạt phong hình cánh quạt) bay lượn trong nắng thu là khoảnh khắc chạm vào linh hồn của 22."
    },
    {
      "id": "soul_13",
      "dialogueContext": "Người kế toán nghiêm khắc của vũ trụ luôn đếm từng con số linh hồn:",
      "question": "Tên nhân vật kiểm toán vũ trụ sắc sảo hai chiều là gì?",
      "options": [
        "Terry",
        "Jerry",
        "Barry",
        "Gary"
      ],
      "answer": "Terry",
      "explanationVi": "Terry là kế toán viên vũ trụ không chịu bỏ sót bất kỳ linh hồn nào bị đếm thiếu."
    },
    {
      "id": "soul_14",
      "dialogueContext": "Joe được mời biểu diễn cùng ban nhạc của nữ nghệ sĩ saxophone huyền thoại:",
      "question": "Tên nghệ sĩ saxophone da màu tài ba khó tính là ai?",
      "options": [
        "Dorothea Williams",
        "Ella Fitzgerald",
        "Aretha Franklin",
        "Billie Holiday"
      ],
      "answer": "Dorothea Williams",
      "explanationVi": "Dorothea Williams là thần tượng âm nhạc mà Joe hằng khao khát được đứng chung sân khấu."
    },
    {
      "id": "soul_15",
      "dialogueContext": "Sau đêm diễn thành công rực rỡ nhất cuộc đời tại câu lạc bộ Jazz:",
      "question": "Joe cảm thấy thế nào khi bước ra khỏi cửa câu lạc bộ về đêm?",
      "options": [
        "Empty and wondering what's next (Trống rỗng và tự hỏi bước tiếp theo là gì)",
        "Happiest man alive forever",
        "Rich and famous",
        "Angry"
      ],
      "answer": "Empty and wondering what's next (Trống rỗng và tự hỏi bước tiếp theo là gì)",
      "explanationVi": "Joe nhận ra đạt được ước mơ lớn không làm cuộc đời lập tức hóa thiên đường như anh từng tưởng."
    },
    {
      "id": "soul_16",
      "dialogueContext": "Dorothea kể cho Joe câu chuyện ngụ ngôn về hai chú cá dưới đại dương:",
      "question": "Chú cá con bơi đi tìm 'Đại dương' mà không nhận ra điều gì?",
      "options": [
        "Nó đang bơi trong chính đại dương rồi ('This is just water')",
        "Nó bị mắc cạn",
        "Không có nước",
        "Đại dương đã chết"
      ],
      "answer": "Nó đang bơi trong chính đại dương rồi ('This is just water')",
      "explanationVi": "Con người mải miết đi tìm hạnh phúc ở nơi xa xôi mà không biết mình đang sống giữa phép màu từng ngày."
    },
    {
      "id": "soul_17",
      "dialogueContext": "Joe ngồi một mình bên cây đàn piano và mở những kỷ vật của 22:",
      "question": "Những món đồ bình dị trong túi áo gồm que kẹo mút, vỏ bánh mì, và gì nữa?",
      "options": [
        "The maple seed (Hạt cây phong)",
        "A gold coin",
        "A credit card",
        "A diamond"
      ],
      "answer": "The maple seed (Hạt cây phong)",
      "explanationVi": "Những món đồ đời thường đánh thức sự giác ngộ trong Joe: mục đích sống chính là bản thân việc sống ('Regular old living')."
    },
    {
      "id": "soul_18",
      "dialogueContext": "Joe quay lại vùng tối giải cứu 22 khi cô bé biến thành con quái vật lạc lối:",
      "question": "Joe trao lại vật gì để 22 có thể tự tin bay xuống Trái Đất?",
      "options": [
        "Her Earth pass (Tấm thẻ thông hành Trái Đất)",
        "His shoes",
        "His watch",
        "His money"
      ],
      "answer": "Her Earth pass (Tấm thẻ thông hành Trái Đất)",
      "explanationVi": "Joe trao lại tấm vé định mệnh và nói: 'Tia sáng của em không phải là một nghề nghiệp cụ thể, mà là sự sẵn sàng bước vào cuộc sống'."
    },
    {
      "id": "soul_19",
      "dialogueContext": "Người quản lý linh hồn Jerry ban tặng cho Joe cơ hội sống thứ hai:",
      "question": "Jerry hỏi: 'How are you gonna spend your life, Joe?'",
      "options": [
        "I'm going to live every minute of it. (Tôi sẽ sống trọn vẹn từng phút giây của nó.)",
        "I will only play piano.",
        "I will sleep all day.",
        "I will become rich."
      ],
      "answer": "I'm going to live every minute of it. (Tôi sẽ sống trọn vẹn từng phút giây của nó.)",
      "explanationVi": "'I'm going to live every minute of it' - lời hứa trân quý từng khoảnh khắc được hít thở khí trời."
    },
    {
      "id": "soul_20",
      "dialogueContext": "Thông điệp triết học nhân văn tuyệt đẹp của Soul:",
      "question": "Giá trị cốt lõi làm nên ý nghĩa cuộc đời con người là gì?",
      "options": [
        "Appreciating every simple moment of living (Biết ơn và tận hưởng vẻ đẹp của từng khoảnh khắc sống)",
        "Only winning awards",
        "Being famous",
        "Collecting money"
      ],
      "answer": "Appreciating every simple moment of living (Biết ơn và tận hưởng vẻ đẹp của từng khoảnh khắc sống)",
      "explanationVi": "Cuộc sống không phải là cuộc đua thành tích; ngắm lá rơi, ăn một bữa ngon, mỉm cười với người thân mới là chân hạnh phúc."
    }
  ],
  "suits": [
    {
      "id": "suits_1",
      "dialogueContext": "Harvey Specter dạy Mike Ross triết lý chiến thắng trong đàm phán pháp lý đỉnh cao:",
      "question": "Harvey tuyên bố câu châm ngôn thương hiệu: 'I don't play the odds, I play the _______.'",
      "options": [
        "man",
        "game",
        "cards",
        "rules"
      ],
      "answer": "man",
      "explanationVi": "'I don't play the odds, I play the man' (Tôi không đặt cược vào tỷ lệ may rủi, tôi nắm thóp tâm lý con người đối diện)."
    },
    {
      "id": "suits_2",
      "dialogueContext": "Harvey giải thích cách giải quyết bế tắc khi đối thủ kề súng vào đầu bạn:",
      "question": "Harvey hỏi: 'What are your choices when someone puts a gun to your head?'",
      "options": [
        "You take the gun, or pull out a bigger one, or call their bluff (Có 146 lựa chọn khác)",
        "You just surrender",
        "You cry and beg",
        "You run away"
      ],
      "answer": "You take the gun, or pull out a bigger one, or call their bluff (Có 146 lựa chọn khác)",
      "explanationVi": "Tư duy vượt giới hạn của Harvey: không bao giờ chấp nhận tình thế tiến thoái lưỡng nan giả tạo của đối phương."
    },
    {
      "id": "suits_3",
      "dialogueContext": "Khả năng thiên bẩm kỳ diệu của Mike Ross giúp anh đọc qua một lần là nhớ vĩnh viễn:",
      "question": "Thuật ngữ tâm lý chỉ 'trí nhớ chụp ảnh / ký ức thị giác hoàn hảo' là:",
      "options": [
        "Eidetic / Photographic memory",
        "Short-term memory",
        "Amnesia",
        "Selective memory"
      ],
      "answer": "Eidetic / Photographic memory",
      "explanationVi": "'Photographic memory' (Trí nhớ chụp ảnh) cho phép Mike nhớ từng điều khoản luật pháp và tiền lệ tư pháp."
    },
    {
      "id": "suits_4",
      "dialogueContext": "Văn phòng luật Pearson Hardman chỉ tuyển dụng sinh viên tốt nghiệp trường nào?",
      "question": "Trường luật danh giá duy nhất là tiêu chuẩn cứng của công ty là:",
      "options": [
        "Harvard Law School",
        "Yale Law",
        "Columbia Law",
        "Stanford Law"
      ],
      "answer": "Harvard Law School",
      "explanationVi": "Công ty có truyền thống độc quyền chỉ tuyển sinh viên tốt nghiệp trường Luật Harvard."
    },
    {
      "id": "suits_5",
      "dialogueContext": "Louis Litt luôn tự hào về khả năng thanh trừng và huấn luyện thực tập sinh:",
      "question": "Khẩu hiệu đe dọa hài hước của Louis mỗi khi dồn đối thủ vào chân tường là:",
      "options": [
        "You just got Litt up!",
        "You are fired!",
        "I win!",
        "Game over!"
      ],
      "answer": "You just got Litt up!",
      "explanationVi": "'You just got Litt up!' là cách chơi chữ với họ của Louis Litt mỗi khi anh áp đảo ai đó."
    },
    {
      "id": "suits_6",
      "dialogueContext": "Thư ký Donna Paulsen tự tin khẳng định vị thế nắm bắt mọi thông tin của mình:",
      "question": "Donna luôn mỉm cười nói câu cửa miệng kiêu hãnh nào?",
      "options": [
        "I'm Donna. I know everything.",
        "Ask Harvey.",
        "I have no idea.",
        "Not my job."
      ],
      "answer": "I'm Donna. I know everything.",
      "explanationVi": "'I'm Donna' - Donna có trực giác siêu việt và khả năng thấu hiểu tâm lý đồng nghiệp sắc sảo."
    },
    {
      "id": "suits_7",
      "dialogueContext": "Hồ sơ bí mật chứa cần sa mà Mike mang nhầm vào phòng phỏng vấn của Harvey:",
      "question": "Mike bị cảnh sát truy đuổi vì chiếc cặp chứa gì trước khi tình cờ vào phòng Harvey?",
      "options": [
        "Weed / Marijuana (Cần sa)",
        "Diamonds",
        "Stolen cash",
        "Weapons"
      ],
      "answer": "Weed / Marijuana (Cần sa)",
      "explanationVi": "Mike bị người bạn Trevor gài vận chuyển cần sa và vô tình lạc vào buổi tuyển dụng cộng sự của Harvey."
    },
    {
      "id": "suits_8",
      "dialogueContext": "Harvey thử thách Mike bằng cách yêu cầu đọc một cuốn sách luật dày cộp:",
      "question": "Harvey kinh ngạc khi Mike trích dẫn chính xác điều khoản nào mà không cần nhìn sách?",
      "options": [
        "The civil code / Bylaws",
        "A poem",
        "A novel",
        "A song"
      ],
      "answer": "The civil code / Bylaws",
      "explanationVi": "Mike đọc vanh vách từng điều luật khiến Harvey phá lệ tuyển dụng dù biết cậu không có bằng đại học."
    },
    {
      "id": "suits_9",
      "dialogueContext": "Jessica Pearson người phụ nữ quyền lực đứng đầu hãng luật điều hành mọi việc bằng bàn tay sắt:",
      "question": "Từ tiếng Anh chỉ vị 'Đối tác điều hành tối cao' của công ty luật là:",
      "options": [
        "Managing Partner",
        "Associate",
        "Paralegal",
        "Intern"
      ],
      "answer": "Managing Partner",
      "explanationVi": "'Managing Partner' là chức vụ đối tác điều hành cao nhất, nắm quyền sinh sát toàn bộ công ty."
    },
    {
      "id": "suits_10",
      "dialogueContext": "Rachel Zane làm trợ lý pháp lý xuất sắc nhưng trượt kỳ thi luật vì tâm lý phòng thi:",
      "question": "Từ tiếng Anh chỉ vị trí trợ lý pháp lý chuyên nghiệp chưa có bằng luật sư là:",
      "options": [
        "Paralegal",
        "Judge",
        "Prosecutor",
        "Bailiff"
      ],
      "answer": "Paralegal",
      "explanationVi": "'Paralegal' là trợ lý pháp lý, phụ trách tra cứu hồ sơ và hỗ trợ các luật sư chính."
    },
    {
      "id": "suits_11",
      "dialogueContext": "Thủ tục pháp lý lấy lời khai tuyên thệ ngoài tòa án của nhân chứng tiếng Anh là:",
      "question": "Buổi lấy lời khai có ghi âm ghi hình tuyên thệ được gọi là:",
      "options": [
        "Deposition",
        "Trial",
        "Verdict",
        "Appeal"
      ],
      "answer": "Deposition",
      "explanationVi": "'Deposition' là phiên lấy lời khai nhân chứng có đối chất trước khi vụ án chính thức ra xét xử."
    },
    {
      "id": "suits_12",
      "dialogueContext": "Chiến lược dàn xếp ngoài tòa để tránh kéo dài vụ kiện tốn kém:",
      "question": "Thỏa thuận hòa giải bồi thường ngoài tòa án tiếng Anh là:",
      "options": [
        "Settlement",
        "Conviction",
        "Sentence",
        "Imprisonment"
      ],
      "answer": "Settlement",
      "explanationVi": "'Settlement' là thỏa thuận dàn xếp tài chính giữa hai bên nguyên đơn và bị đơn."
    },
    {
      "id": "suits_13",
      "dialogueContext": "Harvey luôn có quy tắc về sự trung thực trong mối quan hệ làm việc với cộng sự:",
      "question": "Harvey cảnh cáo: 'Loyalty is a two-way _______.'",
      "options": [
        "street",
        "bridge",
        "door",
        "river"
      ],
      "answer": "street",
      "explanationVi": "'Loyalty is a two-way street' (Lòng trung thành là con đường hai chiều - nếu muốn nhận được thì phải cho đi trước)."
    },
    {
      "id": "suits_14",
      "dialogueContext": "Louis Litt có sở thích thư giãn kỳ quặc giúp anh thăng hoa trí tuệ:",
      "question": "Liệu pháp ngâm bùn khoáng nóng ưa thích của Louis được gọi là:",
      "options": [
        "Mudding",
        "Swimming",
        "Jogging",
        "Skiing"
      ],
      "answer": "Mudding",
      "explanationVi": "'Mudding' là sở thích tắm bùn khoáng nóng mà Louis luôn cố rủ Harvey đi cùng."
    },
    {
      "id": "suits_15",
      "dialogueContext": "Bí mật lớn nhất đe dọa sự sụp đổ của toàn bộ công ty Pearson Hardman:",
      "question": "Tội danh mà Mike Ross có thể phải ngồi tù nhiều năm là:",
      "options": [
        "Practicing law without a degree/license (Hành nghề luật sư không có bằng cấp / chứng chỉ)",
        "Theft",
        "Murder",
        "Smuggling"
      ],
      "answer": "Practicing law without a degree/license (Hành nghề luật sư không có bằng cấp / chứng chỉ)",
      "explanationVi": "Hành nghề luật sư gian lận là tội hình sự nghiêm trọng theo luật liên bang Hoa Kỳ."
    },
    {
      "id": "suits_16",
      "dialogueContext": "Kỳ thi sát hạch cấp chứng chỉ luật sư hành nghề ở Mỹ được gọi là:",
      "question": "Kỳ thi luật sư cam go tiếng Anh là:",
      "options": [
        "The Bar Exam",
        "The SAT",
        "The TOEFL",
        "The GMAT"
      ],
      "answer": "The Bar Exam",
      "explanationVi": "'The Bar Exam' là kỳ thi quốc gia để gia nhập đoàn luật sư và được quyền tranh tụng tại tòa."
    },
    {
      "id": "suits_17",
      "dialogueContext": "Harvey dạy Mike về sự tự tin và dáng vẻ đĩnh đạc khi xuất hiện:",
      "question": "Harvey nói: 'First impressions matter. If you look like a winner, you _______ like a winner.'",
      "options": [
        "win",
        "lose",
        "cry",
        "sleep"
      ],
      "answer": "win",
      "explanationVi": "Phong thái đĩnh đạc và bộ âu phục đắt giá là vũ khí tâm lý làm nhụt chí đối thủ ngay từ cái nhìn đầu tiên."
    },
    {
      "id": "suits_18",
      "dialogueContext": "Công tố viên Anita Gibbs quyết tâm đưa Mike ra vành móng ngựa trước bồi thẩm đoàn:",
      "question": "Cơ quan công tố đại diện cho nhà nước truy tố tội phạm tiếng Anh là:",
      "options": [
        "Prosecution",
        "Defense",
        "Jury",
        "Clerk"
      ],
      "answer": "Prosecution",
      "explanationVi": "'The Prosecution' là bên công tố, phụ trách buộc tội bị cáo trước tòa án."
    },
    {
      "id": "suits_19",
      "dialogueContext": "Mike Ross quyết định nhận tội và đi tù 2 năm để bảo vệ Harvey và công ty:",
      "question": "Thỏa thuận nhận tội để giảm án trong hệ thống tư pháp Mỹ được gọi là:",
      "options": [
        "Plea bargain",
        "Bribe",
        "Pardon",
        "Bail"
      ],
      "answer": "Plea bargain",
      "explanationVi": "'Plea bargain' là thủ tục nhận tội có thương lượng mức án giữa bị cáo và viện kiểm sát."
    },
    {
      "id": "suits_20",
      "dialogueContext": "Harvey và Mike luôn cùng nhau hoàn thành mọi vụ án dù khó khăn đến đâu:",
      "question": "Câu nói thể hiện sự tôn trọng tối cao của Harvey dành cho Mike ở tập cuối:",
      "options": [
        "You're the best partner I've ever had. (Cậu là người cộng sự tuyệt vời nhất tôi từng có.)",
        "I fired you.",
        "You are weak.",
        "Good luck alone."
      ],
      "answer": "You're the best partner I've ever had. (Cậu là người cộng sự tuyệt vời nhất tôi từng có.)",
      "explanationVi": "Tình bạn và tình anh em vượt lên trên mọi danh vọng nghề nghiệp là giá trị cốt lõi của Suits."
    }
  ],
  "sherlock": [
    {
      "id": "sherlock_1",
      "dialogueContext": "Sherlock Holmes tự định nghĩa vị trí nghề nghiệp duy nhất của mình trên thế giới:",
      "question": "Sherlock tự gọi nghề nghiệp của mình là:",
      "options": [
        "The world's only consulting detective (Thám tử tư vấn duy nhất trên thế giới)",
        "A police officer",
        "A private spy",
        "A security guard"
      ],
      "answer": "The world's only consulting detective (Thám tử tư vấn duy nhất trên thế giới)",
      "explanationVi": "'Consulting detective' - cảnh sát Scotland Yard chỉ tìm đến Sherlock khi họ hoàn toàn bế tắc."
    },
    {
      "id": "sherlock_2",
      "dialogueContext": "Sherlock đáp trả khi viên cảnh sát Anderson gọi anh là kẻ tâm thần (psychopath):",
      "question": "Sherlock sửa lại: 'I'm not a psychopath, Anderson. I'm a high-functioning _______.'",
      "options": [
        "sociopath (kẻ chống đối xã hội chức năng cao)",
        "genius",
        "detective",
        "doctor"
      ],
      "answer": "sociopath (kẻ chống đối xã hội chức năng cao)",
      "explanationVi": "'I'm a high-functioning sociopath, do your research!' - câu thoại khẳng định cá tính dị biệt của Sherlock."
    },
    {
      "id": "sherlock_3",
      "dialogueContext": "Phương pháp suy luận lưu trữ thông tin trong tiềm thức bằng hình ảnh không gian của Sherlock:",
      "question": "Kỹ thuật ghi nhớ cổ đại đỉnh cao này được gọi là gì?",
      "options": [
        "The Mind Palace (Lâu đài ký ức / Trí tuệ)",
        "The Memory Box",
        "The Brain Cloud",
        "The Dark Room"
      ],
      "answer": "The Mind Palace (Lâu đài ký ức / Trí tuệ)",
      "explanationVi": "'Mind Palace' (Phương pháp cung điện trí nhớ) giúp Sherlock truy xuất dữ liệu khổng lồ trong tích tắc."
    },
    {
      "id": "sherlock_4",
      "dialogueContext": "Địa chỉ huyền thoại nơi Sherlock Holmes và Bác sĩ John Watson cùng thuê trọ ở London:",
      "question": "Số nhà nổi tiếng trên phố Baker là:",
      "options": [
        "221B Baker Street",
        "10 Downing Street",
        "42 Wallaby Way",
        "4 Privet Drive"
      ],
      "answer": "221B Baker Street",
      "explanationVi": "'221B Baker Street' do bà Hudson làm chủ nhà trọ là địa chỉ thám tử nổi tiếng nhất lịch sử văn học."
    },
    {
      "id": "sherlock_5",
      "dialogueContext": "Bà Hudson luôn nhắc nhở hai người khi bị xem như người giúp việc lau dọn:",
      "question": "Câu nói quen thuộc của bà Hudson là gì?",
      "options": [
        "I'm your landlady, not your housekeeper! (Tôi là bà chủ nhà trọ của các anh, không phải người giúp việc!)",
        "Pay me rent now!",
        "Quiet please!",
        "Get out!"
      ],
      "answer": "I'm your landlady, not your housekeeper! (Tôi là bà chủ nhà trọ của các anh, không phải người giúp việc!)",
      "explanationVi": "Bà Hudson tốt bụng chăm sóc hai người nhưng luôn khẳng định vị thế chủ nhà của mình."
    },
    {
      "id": "sherlock_6",
      "dialogueContext": "Kẻ thù truyền kiếp nguy hiểm nhất và cũng là đối thủ trí tuệ xứng tầm của Sherlock:",
      "question": "Giáo sư tội phạm đứng sau mạng lưới tội ác toàn cầu là ai?",
      "options": [
        "Jim Moriarty",
        "Charles Magnussen",
        "Mycroft Holmes",
        "Greg Lestrade"
      ],
      "answer": "Jim Moriarty",
      "explanationVi": "Jim Moriarty tự xưng là 'consulting criminal' (tội phạm tư vấn) đối trọng trực tiếp với Sherlock."
    },
    {
      "id": "sherlock_7",
      "dialogueContext": "Sherlock suy đoán toàn bộ quá khứ của John Watson chỉ qua chiếc đồng hồ/điện thoại di động cũ:",
      "question": "Phương pháp tư duy logic từ chi tiết nhỏ đến kết luận tổng quát được gọi là:",
      "options": [
        "Deductive reasoning (Phương pháp suy luận diễn dịch)",
        "Guessing",
        "Magic",
        "Fortune telling"
      ],
      "answer": "Deductive reasoning (Phương pháp suy luận diễn dịch)",
      "explanationVi": "'The Science of Deduction' (Khoa học suy luận) là nền tảng giải quyết mọi kỳ án của Sherlock."
    },
    {
      "id": "sherlock_8",
      "dialogueContext": "Người phụ nữ duy nhất đánh bại và làm đảo lộn trí tuệ của Sherlock Holmes:",
      "question": "Irene Adler được Sherlock trân trọng gọi bằng danh xưng tôn kính nào?",
      "options": [
        "THE Woman",
        "THE Queen",
        "THE Lady",
        "THE Spy"
      ],
      "answer": "THE Woman",
      "explanationVi": "'To Sherlock Holmes, she is always THE Woman' - người phụ nữ duy nhất khuất phục được thám tử lừng danh."
    },
    {
      "id": "sherlock_9",
      "dialogueContext": "Âm thanh báo tin nhắn độc nhất vô nhị trên chiếc điện thoại Irene Adler tặng Sherlock:",
      "question": "Âm thanh mỗi khi Irene gửi tin nhắn đến là tiếng gì?",
      "options": [
        "A woman's gasp / moan (Tiếng thở dài quyến rũ của phụ nữ)",
        "A bell ring",
        "A siren",
        "A dog bark"
      ],
      "answer": "A woman's gasp / moan (Tiếng thở dài quyến rũ của phụ nữ)",
      "explanationVi": "Âm thanh tiếng thở dài gợi cảm khiến Sherlock bối rối mỗi khi điện thoại rung lên trước mặt mọi người."
    },
    {
      "id": "sherlock_10",
      "dialogueContext": "Vụ án con chó săn vùng Baskerville liên quan đến một chất gây ảo giác bí mật:",
      "question": "Chất độc hóa học quân sự bí mật thử nghiệm gây ảo giác hoang tưởng là:",
      "options": [
        "A fear gas / hallucinogen",
        "A poison apple",
        "A snake venom",
        "A virus"
      ],
      "answer": "A fear gas / hallucinogen",
      "explanationVi": "Chất khí gây ảo giác trong phòng thí nghiệm hóa học khiến người hít phải nhìn thấy nỗi sợ hãi lớn nhất của mình."
    },
    {
      "id": "sherlock_11",
      "dialogueContext": "Mycroft Holmes người anh trai quyền lực làm việc trong chính phủ Anh:",
      "question": "Sherlock mô tả vai trò thực sự của Mycroft trong bộ máy chính quyền Anh là gì?",
      "options": [
        "He IS the British government. (Anh ta CHÍNH LÀ chính phủ Anh.)",
        "A junior clerk",
        "A retired soldier",
        "A simple lawyer"
      ],
      "answer": "He IS the British government. (Anh ta CHÍNH LÀ chính phủ Anh.)",
      "explanationVi": "Mycroft nắm giữ những bí mật an ninh tình báo tối mật nhất của Hoàng gia và Đế chế Anh."
    },
    {
      "id": "sherlock_12",
      "dialogueContext": "Màn đối đầu định mệnh trên sân thượng bệnh viện St. Bart's:",
      "question": "Sherlock buộc phải nhảy lầu tự sát để cứu mạng ba người bạn thân nào?",
      "options": [
        "John Watson, Mrs. Hudson, and Greg Lestrade",
        "Mycroft, Irene, and Molly",
        "Anderson, Donovan, and Mary",
        "No one"
      ],
      "answer": "John Watson, Mrs. Hudson, and Greg Lestrade",
      "explanationVi": "Moriarty đã cài các tay súng bắn tỉa nhằm vào 3 người Sherlock yêu quý nhất nếu anh không nhảy xuống."
    },
    {
      "id": "sherlock_13",
      "dialogueContext": "Câu nói cuối cùng của Moriarty trước khi tự bắn vào đầu mình trên sân thượng:",
      "question": "Moriarty nói: 'As long as I'm alive, you can save your friends. So...'?",
      "options": [
        "Staying alive is not an option. (Sống sót không còn là lựa chọn nữa.)",
        "I love you.",
        "See you in court.",
        "Goodbye world."
      ],
      "answer": "Staying alive is not an option. (Sống sót không còn là lựa chọn nữa.)",
      "explanationVi": "Moriarty tự sát để bịt đường lui duy nhất của Sherlock, ép anh vào thế phải chết để cứu bạn bè."
    },
    {
      "id": "sherlock_14",
      "dialogueContext": "John Watson đứng bên bia mộ Sherlock sau cú nhảy lầu chấn động:",
      "question": "John nức nở cầu xin linh hồn người bạn thân: 'Just one more miracle, Sherlock. Please, don't be _______.'",
      "options": [
        "dead",
        "alive",
        "quiet",
        "far"
      ],
      "answer": "dead",
      "explanationVi": "'Please, don't be dead' - khoảnh khắc John rơi nước mắt cầu xin một phép màu nữa từ Sherlock."
    },
    {
      "id": "sherlock_15",
      "dialogueContext": "Sherlock giả chết suốt 2 năm để âm thầm phá hủy mạng lưới của Moriarty trên toàn thế giới:",
      "question": "Molly Hooper chuyên viên pháp y nhà xác đã giúp Sherlock điều gì?",
      "options": [
        "Giúp dàn dựng hiện trường cú nhảy và che giấu thi thể giả",
        "Chỉ đường trốn",
        "Cho tiền",
        "Mua vé máy bay"
      ],
      "answer": "Giúp dàn dựng hiện trường cú nhảy và che giấu thi thể giả",
      "explanationVi": "Molly là nhân tố then chốt nhất giúp Sherlock làm giả cái chết khoa học mà không ai phát hiện."
    },
    {
      "id": "sherlock_16",
      "dialogueContext": "Sherlock đóng vai trò phù rể (Best Man) trong đám cưới của John Watson và Mary Morstan:",
      "question": "Bài diễn văn phù rể của Sherlock khiến quan khách từ sững sờ chuyển sang xúc động nghẹn ngào:",
      "options": [
        "John, you are my best friend and the bravest man I know. (John là người bạn thân nhất và dũng cảm nhất.)",
        "Marriage is a mistake.",
        "I hate you both.",
        "Goodbye."
      ],
      "answer": "John, you are my best friend and the bravest man I know. (John là người bạn thân nhất và dũng cảm nhất.)",
      "explanationVi": "Sherlock lần đầu công khai bộc lộ cảm xúc chân thật, thừa nhận John là mảnh ghép hoàn thiện cuộc đời anh."
    },
    {
      "id": "sherlock_17",
      "dialogueContext": "Quá khứ bí mật của Mary Morstan người vợ hiền hậu của John Watson:",
      "question": "Mary thực chất là một cựu nhân viên có thân phận gì nguy hiểm?",
      "options": [
        "A former undercover assassin / Secret agent (Một sát thủ ngầm / Điệp viên tình báo)",
        "A nurse",
        "A baker",
        "A teacher"
      ],
      "answer": "A former undercover assassin / Secret agent (Một sát thủ ngầm / Điệp viên tình báo)",
      "explanationVi": "Mary là thành viên của mạng lưới điệp viên sát thủ AGRA với kỹ năng tác chiến siêu đẳng."
    },
    {
      "id": "sherlock_18",
      "dialogueContext": "Tên trùm tống tiền Charles Augustus Magnussen lưu trữ kho dữ liệu đe dọa các chính trị gia ở đâu?",
      "question": "Kho lưu trữ bí mật Appledore thực chất nằm ở đâu?",
      "options": [
        "Trong chính Cung điện Ký ức (Mind Palace) của Magnussen",
        "Dưới tầng hầm đá",
        "Trên đám mây internet",
        "Trong két sắt Thụy Sĩ"
      ],
      "answer": "Trong chính Cung điện Ký ức (Mind Palace) của Magnussen",
      "explanationVi": "Magnussen không hề giữ giấy tờ thực tế; toàn bộ bí mật tống tiền chỉ nằm trong bộ óc siêu phàm của hắn."
    },
    {
      "id": "sherlock_19",
      "dialogueContext": "Để bảo vệ John và Mary vĩnh viễn khỏi nanh vuốt tống tiền của Magnussen:",
      "question": "Hành động quyết liệt bất ngờ của Sherlock trước mặt cảnh sát là gì?",
      "options": [
        "Shooting Magnussen in the head (Bắn chết Magnussen ngay tại chỗ)",
        "Bribing him",
        "Running away",
        "Surrendering"
      ],
      "answer": "Shooting Magnussen in the head (Bắn chết Magnussen ngay tại chỗ)",
      "explanationVi": "Sherlock chấp nhận trở thành kẻ sát nhân bị lưu đày để giải thoát người bạn thân nhất khỏi sự tống tiền."
    },
    {
      "id": "sherlock_20",
      "dialogueContext": "Màn hình vô tuyến khắp vương quốc Anh bất ngờ chớp nháy gương mặt quen thuộc cùng câu hỏi:",
      "question": "Thông điệp rúng động toàn nước Anh của Moriarty là gì?",
      "options": [
        "Did you miss me? (Có nhớ tôi không?)",
        "I am back!",
        "Who is Sherlock?",
        "Game start!"
      ],
      "answer": "Did you miss me? (Có nhớ tôi không?)",
      "explanationVi": "'Did you miss me?' - câu hỏi ám ảnh đưa Sherlock lập tức quay trở lại London giải mã kỳ án mới."
    }
  ],
  "the-social-network": [
    {
      "id": "sn_1",
      "dialogueContext": "Sean Parker người sáng lập Napster nói với Mark Zuckerberg về quy mô tiềm năng của Facebook:",
      "question": "Câu nói kinh điển về quy mô tài chính là: 'A million dollars isn't cool. You know what's cool? A _______ dollars.'",
      "options": [
        "billion",
        "trillion",
        "hundred",
        "thousand"
      ],
      "answer": "billion",
      "explanationVi": "'A million dollars isn't cool. You know what's cool? A billion dollars' (Một triệu đô thì chưa ngầu đâu. Biết cái gì mới ngầu không? Một tỷ đô-la)."
    },
    {
      "id": "sn_2",
      "dialogueContext": "Bạn gái cũ Erica Albright nói với Mark câu kết luận chua chát ở cảnh mở đầu phim:",
      "question": "Erica nói: 'You're going to be successful and rich. But you're going to go through life thinking girls don't like you because you're a nerd. And I want you to know, from the bottom of my heart, that won't be true. It'll be because you're an _______.'",
      "options": [
        "asshole (kẻ khốn nạn)",
        "idiot",
        "angel",
        "artist"
      ],
      "answer": "asshole (keler khốn nạn)",
      "explanationVi": "Lời tiên tri của Erica về việc Mark bị xa lánh không phải vì anh là dân công nghệ ('nerd') mà vì thái độ ngạo mạn, trịch thượng."
    },
    {
      "id": "sn_3",
      "dialogueContext": "Trang web ban đầu Mark tạo ra trong một đêm say rượu để so sánh nhan sắc nữ sinh Harvard:",
      "question": "Tên trang web gây tắc nghẽn mạng nội bộ trường Harvard là gì?",
      "options": [
        "Facemash",
        "Facebook",
        "Facecheck",
        "Facevote"
      ],
      "answer": "Facemash",
      "explanationVi": "Facemash thu hút 22.000 lượt xem chỉ trong vài tiếng, là tiền thân thử nghiệm thuật toán của Facebook."
    },
    {
      "id": "sn_4",
      "dialogueContext": "Thuật toán xếp hạng cờ vua mà bạn thân Eduardo Saverin viết lên cửa sổ kính ký túc xá:",
      "question": "Thuật toán nổi tiếng dùng để tính điểm so sánh là:",
      "options": [
        "The Elo rating system",
        "Binary search",
        "Dijkstra algorithm",
        "Bubble sort"
      ],
      "answer": "The Elo rating system",
      "explanationVi": "Hệ thống xếp hạng Elo được Eduardo viết lên kính để Mark lập trình công thức chấm điểm Facemash."
    },
    {
      "id": "sn_5",
      "dialogueContext": "Cặp song sinh nhà Winklevoss (Cameron và Tyler) là thành viên ưu tú của nhóm sinh viên nào?",
      "question": "Họ là những vận động viên đẳng cấp Olympic môn thể thao nào tại Harvard?",
      "options": [
        "Rowing / Crew (Đua thuyền chèo)",
        "Basketball",
        "Swimming",
        "Football"
      ],
      "answer": "Rowing / Crew (Đua thuyền chèo)",
      "explanationVi": "Hai anh em Winklevoss là vận động viên đua thuyền đại diện nước Mỹ thi đấu tại Thế vận hội Bắc Kinh."
    },
    {
      "id": "sn_6",
      "dialogueContext": "Hai anh em Winklevoss và Divya Narendra thuê Mark lập trình trang web nào ban đầu?",
      "question": "Dự án mạng xã hội nội bộ dành cho sinh viên Harvard mà họ khởi xướng là:",
      "options": [
        "HarvardConnection",
        "StudentNet",
        "CampusLife",
        "IvyLeagueBook"
      ],
      "answer": "HarvardConnection",
      "explanationVi": "HarvardConnection là dự án ban đầu khiến họ kiện Mark ăn cắp ý tưởng ('theft of intellectual property')."
    },
    {
      "id": "sn_7",
      "dialogueContext": "Mark khăng khăng không muốn đưa quảng cáo vào The Facebook trong giai đoạn đầu tăng trưởng:",
      "question": "Lý do Mark kiên quyết từ chối đặt banner quảng cáo kiếm tiền sớm là:",
      "options": [
        "Because Facebook is cool, and ads make it uncool (Quảng cáo sẽ làm mất đi độ 'ngầu')",
        "Because he hates money",
        "Because advertisers refused",
        "Because ads are illegal"
      ],
      "answer": "Because Facebook is cool, and ads make it uncool (Quảng cáo sẽ làm mất đi độ 'ngầu')",
      "explanationVi": "Mark hiểu rằng sự trải nghiệm mượt mà, độc quyền và 'ngầu' là yếu tố sống còn để giữ chân người dùng."
    },
    {
      "id": "sn_8",
      "dialogueContext": "Sean Parker khuyên Mark loại bỏ từ nào trong tên miền ban đầu để nghe ngắn gọn sành điệu hơn?",
      "question": "Sean khuyên: 'Drop the \"_______.\" Just \"Facebook.\" It's cleaner.'",
      "options": [
        "The",
        "My",
        "Our",
        "All"
      ],
      "answer": "The",
      "explanationVi": "Bỏ từ 'The' để đổi từ 'Thefacebook.com' thành 'facebook.com' - một bước đi thương hiệu mang tính lịch sử."
    },
    {
      "id": "sn_9",
      "dialogueContext": "Mark trả lời luật sư của anh em Winklevoss đầy ngạo nghễ trong buổi thẩm vấn lời khai:",
      "question": "Mark mỉa mai: 'If you were the inventors of Facebook, you would have _______ Facebook.'",
      "options": [
        "invented (đã tạo ra)",
        "bought",
        "deleted",
        "banned"
      ],
      "answer": "invented (đã tạo ra)",
      "explanationVi": "'Nếu các anh thực sự là người phát minh ra Facebook, các anh đã tạo ra Facebook rồi' - câu phản đòn đanh thép."
    },
    {
      "id": "sn_10",
      "dialogueContext": "Tỷ lệ cổ phần của Eduardo Saverin bị pha loãng thê thảm từ hơn 30% xuống chỉ còn 0.03%:",
      "question": "Chiến thuật tài chính làm giảm tỷ lệ sở hữu của cổ đông sáng lập được gọi là:",
      "options": [
        "Share dilution (Pha loãng cổ phần)",
        "Dividend payment",
        "Stock buyback",
        "Bankruptcy"
      ],
      "answer": "Share dilution (Pha loãng cổ phần)",
      "explanationVi": "'Dilution' là việc phát hành thêm cổ phiếu mới khiến tỷ lệ sở hữu của Eduardo bị bốc hơi gần như về số 0."
    },
    {
      "id": "sn_11",
      "dialogueContext": "Eduardo tức giận lao vào văn phòng Thung lũng Silicon đập nát laptop của ai?",
      "question": "Eduardo nổi trận lôi đình đập vỡ máy tính của ai trên bàn làm việc?",
      "options": [
        "Mark Zuckerberg",
        "Sean Parker",
        "Peter Thiel",
        "Dustin Moskovitz"
      ],
      "answer": "Mark Zuckerberg",
      "explanationVi": "Cảnh quay cao trào khi Eduardo phát hiện mình bị gạt khỏi ban quản trị và đập nát chiếc laptop của Mark."
    },
    {
      "id": "sn_12",
      "dialogueContext": "Nhà đầu tư mạo hiểm đầu tiên rót 500.000 USD tiền mặt giúp Facebook bứt phá:",
      "question": "Nhà sáng lập PayPal và nhà đầu tư thiên thần xuất hiện trong phim là:",
      "options": [
        "Peter Thiel",
        "Elon Musk",
        "Warren Buffett",
        "Jeff Bezos"
      ],
      "answer": "Peter Thiel",
      "explanationVi": "Peter Thiel đã tin tưởng vào tầm nhìn của Sean và Mark để rót nửa triệu đô cứu cánh cho Facebook."
    },
    {
      "id": "sn_13",
      "dialogueContext": "Mark giải thích tính năng quan trọng nhất mô phỏng đời sống hẹn hò thực tế của sinh viên:",
      "question": "Tính năng hiển thị tình trạng tình cảm của người dùng trên trang cá nhân là:",
      "options": [
        "Relationship status (Tình trạng mối quan hệ: Độc thân / Hẹn hò)",
        "Photo album",
        "Poke button",
        "Chat box"
      ],
      "answer": "Relationship status (Tình trạng mối quan hệ: Độc thân / Hẹn hò)",
      "explanationVi": "Ý tưởng bùng nổ khi Mark nhận ra sinh viên vào mạng xã hội trước hết để xem người mình thích đã có người yêu chưa."
    },
    {
      "id": "sn_14",
      "dialogueContext": "Phong cách làm việc thoải mái sáng tạo đặc trưng của Thung lũng Silicon (Silicon Valley):",
      "question": "Trang phục hàng ngày Mark mặc đi gặp các nhà đầu tư lớn là:",
      "options": [
        "Bathrobe & Pajamas / Hoodies & Flip-flops (Áo choàng ngủ, áo nỉ và dép xỏ ngón)",
        "Expensive suits",
        "Tuxedo",
        "Military uniform"
      ],
      "answer": "Bathrobe & Pajamas / Hoodies & Flip-flops (Áo choàng ngủ, áo nỉ và dép xỏ ngón)",
      "explanationVi": "Mark cố tình mặc áo choàng ngủ hoặc dép tông đến cuộc họp để thể hiện sự nổi loạn chống lại các quỹ đầu tư truyền thống."
    },
    {
      "id": "sn_15",
      "dialogueContext": "Mark bị triệu tập lên hội đồng kỷ luật của Đại học Harvard:",
      "question": "Hội đồng kỷ luật trường đại học tiếng Anh được gọi là:",
      "options": [
        "The Ad Board (Administrative Board)",
        "The Supreme Court",
        "The Parliament",
        "The Police"
      ],
      "answer": "The Ad Board (Administrative Board)",
      "explanationVi": "'The Administrative Board' của Harvard xử phạt cảnh cáo Mark vì vi phạm an ninh mạng trường."
    },
    {
      "id": "sn_16",
      "dialogueContext": "Mark khẳng định sự khác biệt giữa mạng xã hội của anh với các đối thủ đi trước như Myspace hay Friendster:",
      "question": "Yếu tố làm nên sự tin cậy tuyệt đối của Facebook thời kỳ đầu là gì?",
      "options": [
        "Real identities using .edu emails (Danh tính thật gắn liền với email trường đại học)",
        "Anonymous profiles",
        "Fake names",
        "Random avatars"
      ],
      "answer": "Real identities using .edu emails (Danh tính thật gắn liền với email trường đại học)",
      "explanationVi": "Sự độc quyền yêu cầu email sinh viên (.edu) tạo nên tính chân thực và uy tín chưa từng có."
    },
    {
      "id": "sn_17",
      "dialogueContext": "Thỏa thuận dàn xếp hàng triệu đô-la với hai anh em Winklevoss và Eduardo:",
      "question": "Cụm từ tiếng Anh chỉ 'thỏa thuận bảo mật thông tin tài chính hòa giải' là:",
      "options": [
        "Non-disclosure agreement / Confidential settlement",
        "Public contract",
        "Open letter",
        "Newspaper report"
      ],
      "answer": "Non-disclosure agreement / Confidential settlement",
      "explanationVi": "Vụ kiện kết thúc bằng bản hòa giải bí mật trị giá 65 triệu USD cho anh em Winklevoss và khôi phục tên Eduardo là Đồng sáng lập."
    },
    {
      "id": "sn_18",
      "dialogueContext": "Nữ luật sư trẻ Marylin Delpy an ủi Mark ở cuối phiên giải trình:",
      "question": "Cô nói: 'You're not an asshole, Mark. You're just trying so hard to _______.'",
      "options": [
        "be one (cố tỏ ra là một kẻ như vậy)",
        "be rich",
        "be cool",
        "be happy"
      ],
      "answer": "be one (cố tỏ ra là một kẻ như vậy)",
      "explanationVi": "Nhận định thấu suốt về tâm lý của Mark: sâu thẳm bên trong, anh chỉ là chàng trai cô độc cố tạo vỏ bọc gai góc."
    },
    {
      "id": "sn_19",
      "dialogueContext": "Cảnh quay cuối cùng đầy ám ảnh của bộ phim trong phòng họp vắng tanh:",
      "question": "Mark ngồi một mình trước màn hình laptop và liên tục bấm nút gì trên trang cá nhân của Erica Albright?",
      "options": [
        "Refresh / F5 (Làm mới trang để chờ lời chấp nhận kết bạn)",
        "Delete",
        "Block",
        "Report"
      ],
      "answer": "Refresh / F5 (Làm mới trang để chờ lời chấp nhận kết bạn)",
      "explanationVi": "Tạo ra mạng xã hội kết nối 500 triệu người trên hành tinh, nhưng chính người sáng lập lại cô đơn chờ một cái gật đầu trên màn hình ảo."
    },
    {
      "id": "sn_20",
      "dialogueContext": "Bài hát kinh điển của ban nhạc The Beatles vang lên trong phần danh đề cuối phim:",
      "question": "Tên bài hát thể hiện sự tương phản giữa tiền tài và tình cảm chân thật là:",
      "options": [
        "Baby, You're a Rich Man",
        "Yesterday",
        "Let It Be",
        "Hey Jude"
      ],
      "answer": "Baby, You're a Rich Man",
      "explanationVi": "'Baby, You're a Rich Man' đặt ra câu hỏi cay đắng: Bạn có tất cả tiền tài danh vọng, nhưng bạn còn lại ai bên đời?"
    }
  ],
  "the-kings-speech": [
    {
      "id": "ks_1",
      "dialogueContext": "Hoàng tử Albert (sau này là Vua George VI) mắc chứng tật ngôn ngữ gây trở ngại nghiêm trọng:",
      "question": "Chứng tật nói lắp tiếng Anh chuyên ngành y khoa là gì?",
      "options": [
        "Stammer / Stutter",
        "Lisp",
        "Mutism",
        "Deafness"
      ],
      "answer": "Stammer / Stutter",
      "explanationVi": "'Stammer' (Anh-Anh) hoặc 'Stutter' (Anh-Mỹ) là tật nói lắp, cản trở phát âm trôi chảy."
    },
    {
      "id": "ks_2",
      "dialogueContext": "Chuyên gia trị liệu ngôn ngữ lập dị người Úc Lionel Logue đặt ra quy tắc bình đẳng trong phòng khám:",
      "question": "Lionel yêu cầu Hoàng tử phải gọi mình bằng tên thân mật và đổi lại ông gọi Hoàng tử là:",
      "options": [
        "Bertie",
        "Your Majesty",
        "Sir",
        "Prince"
      ],
      "answer": "Bertie",
      "explanationVi": "Lionel phá bỏ nghi thức hoàng gia cứng nhắc, gọi Hoàng tử bằng biệt danh gia đình 'Bertie' để điều trị từ gốc rễ tâm lý."
    },
    {
      "id": "ks_3",
      "dialogueContext": "Phương pháp trị liệu độc đáo của Lionel bằng âm nhạc và tai nghe:",
      "question": "Lionel cho Bertie đeo tai nghe nghe nhạc lớn của ai để ghi âm giọng nói mà không bị nghe thấy tiếng mình?",
      "options": [
        "Mozart (Bản giao hưởng Figaro)",
        "Beethoven",
        "Bach",
        "Chopin"
      ],
      "answer": "Mozart (Bản giao hưởng Figaro)",
      "explanationVi": "Khi không nghe thấy giọng nói của chính mình, Bertie đọc trôi chảy từng câu thơ Shakespeare mà không lắp bắp một từ nào."
    },
    {
      "id": "ks_4",
      "dialogueContext": "Nỗi đau thời thơ ấu gây ra chấn thương tâm lý dẫn đến tật nói lắp của Bertie:",
      "question": "Người bảo mẫu tàn nhẫn thời thơ ấu đã ngược đãi Bertie bằng cách nào?",
      "options": [
        "Vé véo, bỏ đói và ép ăn trong sợ hãi",
        "Đánh gãy tay",
        "Bắt đi cày",
        "Không cho ngủ"
      ],
      "answer": "Vé véo, bỏ đói và ép ăn trong sợ hãi",
      "explanationVi": "Sự ghẻ lạnh của người bảo mẫu độc ác và sự nghiêm khắc quá đà của cha đã đè nặng lên tâm hồn non nớt của Hoàng tử."
    },
    {
      "id": "ks_5",
      "dialogueContext": "Vua cha George V cảnh báo các con về kỷ nguyên truyền thông mới của đài phát thanh:",
      "question": "Phương tiện truyền thông đại chúng buộc mọi vị vua phải biết nói trước công chúng là:",
      "options": [
        "Radio broadcasting (Phát thanh vô tuyến)",
        "Television",
        "Internet",
        "Newspapers"
      ],
      "answer": "Radio broadcasting (Phát thanh vô tuyến)",
      "explanationVi": "Trước đây quân vương chỉ cần cưỡi ngựa vẫy tay, nay đài phát thanh đưa tiếng nói của nhà vua trực tiếp vào từng phòng khách của thần dân."
    },
    {
      "id": "ks_6",
      "dialogueContext": "Cơn khủng hoảng thoái vị chấn động Hoàng gia Anh năm 1936:",
      "question": "Vua Edward VIII (David) quyết định từ bỏ ngai vàng nước Anh vì điều gì?",
      "options": [
        "To marry Wallis Simpson, a twice-divorced American woman (Để cưới một phụ nữ Mỹ hai lần ly dị)",
        "Because he was sick",
        "Because he hated England",
        "Because he wanted money"
      ],
      "answer": "To marry Wallis Simpson, a twice-divorced American woman (Để cưới một phụ nữ Mỹ hai lần ly dị)",
      "explanationVi": "Cuộc thoái vị lịch sử vì tình yêu của David đã buộc Bertie phải gánh vác trách nhiệm ngai vàng ngoài ý muốn."
    },
    {
      "id": "ks_7",
      "dialogueContext": "Khoảnh khắc bùng nổ cảm xúc khi Bertie hét lên giải phóng sự ức chế trong phòng tập:",
      "question": "Bertie hét lớn khẳng định quyền được lắng nghe của một con người: 'Because I have a _______!'",
      "options": [
        "voice (tiếng nói)",
        "crown",
        "kingdom",
        "money"
      ],
      "answer": "voice (tiếng nói)",
      "explanationVi": "'Because I have a right to be heard! I have a voice!' (Bởi vì tôi có quyền được lắng nghe! Tôi có một tiếng nói!)."
    },
    {
      "id": "ks_8",
      "dialogueContext": "Lionel ngồi thẳng lên chiếc ngai vàng lịch sử St. Edward tại Tu viện Westminster:",
      "question": "Hành động có vẻ báng bổ này của Lionel thực chất nhằm mục đích tâm lý gì?",
      "options": [
        "Chọc tức Bertie để ông quên đi nỗi sợ và tự khẳng định uy quyền quân vương",
        "Để chiếm ngai vàng",
        "Vì ông mỏi chân",
        "Vì ông thích vàng"
      ],
      "answer": "Chọc tức Bertie để ông quên đi nỗi sợ và tự khẳng định uy quyền quân vương",
      "explanationVi": "Lionel cố tình xúc phạm chiếc ghế để khơi dậy bản năng bảo vệ ngai vàng và lòng tự tôn quân vương trong Bertie."
    },
    {
      "id": "ks_9",
      "dialogueContext": "Nghi lễ đăng quang thiêng liêng biến Bertie chính thức trở thành nguyên thủ quốc gia:",
      "question": "Lễ đăng quang của quốc vương Anh tiếng Anh là gì?",
      "options": [
        "Coronation ceremony",
        "Wedding",
        "Funeral",
        "Inauguration"
      ],
      "answer": "Coronation ceremony",
      "explanationVi": "'The Coronation' là đại lễ gia miện tôn phong vị vua mới tại Tu viện Westminster."
    },
    {
      "id": "ks_10",
      "dialogueContext": "Bối cảnh lịch sử cam go khi Vua George VI phải đọc bài phát biểu tuyên chiến:",
      "question": "Sự kiện lịch sử đen tối mở màn cho Thế chiến thứ Hai vào tháng 9 năm 1939 là:",
      "options": [
        "Nazi Germany invading Poland and declaring war (Đức Quốc Xã xâm lược Ba Lan, Anh tuyên chiến)",
        "Pearl Harbor attack",
        "Atomic bomb",
        "Russian Revolution"
      ],
      "answer": "Nazi Germany invading Poland and declaring war (Đức Quốc Xã xâm lược Ba Lan, Anh tuyên chiến)",
      "explanationVi": "Nước Anh chính thức tuyên chiến với Đức Quốc Xã, toàn thể khối Thịnh Vượng Chung nín thở chờ đợi bài phát biểu của Nhà vua."
    },
    {
      "id": "ks_11",
      "dialogueContext": "Bản giao hưởng vĩ đại nào của Beethoven được lồng vào nền bài phát biểu lịch sử của Nhà vua?",
      "question": "Tác phẩm cổ điển bi tráng vang lên trong khoảnh khắc phát thanh là:",
      "options": [
        "Beethoven's Symphony No. 7 (Movement 2 - Allegretto)",
        "Beethoven's Symphony No. 5",
        "Ode to Joy",
        "Fur Elise"
      ],
      "answer": "Beethoven's Symphony No. 7 (Movement 2 - Allegretto)",
      "explanationVi": "Chương 2 bản Giao hưởng số 7 của Beethoven tạo nên một trong những trường đoạn điện ảnh xúc động và tráng lệ nhất lịch sử."
    },
    {
      "id": "ks_12",
      "dialogueContext": "Lionel đứng đối diện trong phòng thu âm nhỏ, dùng ánh mắt và cử chỉ tay để điều khiển:",
      "question": "Lionel đóng vai trò như một vị gì dẫn dắt nhịp thở của Nhà vua?",
      "options": [
        "An orchestra conductor (Nhạc trưởng chỉ huy dàn nhạc)",
        "A doctor",
        "A soldier",
        "A spectator"
      ],
      "answer": "An orchestra conductor (Nhạc trưởng chỉ huy dàn nhạc)",
      "explanationVi": "Lionel ra hiệu tay nhịp nhàng như một nhạc trưởng giúp Nhà vua lấy hơi sâu và nhả từng chữ đĩnh đạc."
    },
    {
      "id": "ks_13",
      "dialogueContext": "Vua George VI đọc lời hiệu triệu kêu gọi sự đoàn kết của toàn dân tộc:",
      "question": "Nhà vua khẳng định: 'We can only do the right as we see the right, and reverently commit our cause to _______.'",
      "options": [
        "God",
        "War",
        "King",
        "Money"
      ],
      "answer": "God",
      "explanationVi": "Lời nguyện cầu thiêng liêng gửi gắm chính nghĩa của dân tộc vào bàn tay Thiên Chúa."
    },
    {
      "id": "ks_14",
      "dialogueContext": "Sau khi hoàn thành xuất sắc bài phát biểu mà không mắc một lỗi nghiêm trọng nào:",
      "question": "Lionel trêu chọc về việc Nhà vua vẫn hơi vấp nhẹ ở chữ cái 'W':",
      "options": [
        "You stammered on the 'W', but that's how they knew it was you! (Bệ hạ hơi vấp chữ W, nhưng nhờ thế họ mới biết đó đúng là Bệ hạ!)",
        "You failed.",
        "You were bad.",
        "Never speak again."
      ],
      "answer": "You stammered on the 'W', but that's how they knew it was you! (Bệ hạ hơi vấp chữ W, nhưng nhờ thế họ mới biết đó đúng là Bệ hạ!)",
      "explanationVi": "Nụ cười sảng khoái nhẹ nhõm giữa hai người bạn sau thử thách ngàn cân treo sợi tóc."
    },
    {
      "id": "ks_15",
      "dialogueContext": "Nhà vua bước ra ban công Cung điện Buckingham vẫy tay chào hàng vạn dân chúng:",
      "question": "Cung điện Hoàng gia biểu tượng tại thủ đô London tiếng Anh là:",
      "options": [
        "Buckingham Palace",
        "Windsor Castle",
        "Tower of London",
        "Kensington Palace"
      ],
      "answer": "Buckingham Palace",
      "explanationVi": "'Buckingham Palace' là nơi Hoàng gia Anh xuất hiện trước công chúng trong những giờ phút trọng đại."
    },
    {
      "id": "ks_16",
      "dialogueContext": "Nhà vua trịnh trọng cảm ơn người bạn tri kỷ Lionel Logue:",
      "question": "Nhà vua bắt tay và nói: 'Thank you, my _______.'",
      "options": [
        "friend (người bạn của ta)",
        "doctor",
        "teacher",
        "servant"
      ],
      "answer": "friend (người bạn của ta)",
      "explanationVi": "Từ một bệnh nhân nghi kỵ, Bertie đã coi Lionel là người bạn tri kỷ trung thành nhất cuộc đời."
    },
    {
      "id": "ks_17",
      "dialogueContext": "Lionel Logue không hề có bằng cấp y khoa chính quy nhưng thành công nhờ kinh nghiệm:",
      "question": "Ông tích lũy phương pháp điều trị ngôn ngữ từ việc chữa trị cho ai trong Thế chiến thứ Nhất?",
      "options": [
        "Shell-shocked soldiers (Những binh sĩ bị sốc bom đạn chiến tranh)",
        "Children",
        "Singers",
        "Actors"
      ],
      "answer": "Shell-shocked soldiers (Những binh sĩ bị sốc bom đạn chiến tranh)",
      "explanationVi": "Lionel chữa lành cho các người lính Úc bị sang chấn tâm lý mất giọng nói trở về từ chiến hào."
    },
    {
      "id": "ks_18",
      "dialogueContext": "Hoàng hậu Elizabeth (sau này là Thái hậu Elizabeth) luôn sát cánh bên chồng:",
      "question": "Vai trò của người vợ trong hành trình vượt qua tật nói lắp của Bertie là gì?",
      "options": [
        "Unconditional love and support (Tình yêu thương và sự đồng hành vô điều kiện)",
        "Criticizing him",
        "Leaving him",
        "Ignoring him"
      ],
      "answer": "Unconditional love and support (Tình yêu thương và sự đồng hành vô điều kiện)",
      "explanationVi": "Bà đã đích thân đi tìm Lionel và kiên nhẫn ngồi bên chồng trong từng buổi tập thở gian nan."
    },
    {
      "id": "ks_19",
      "dialogueContext": "Phần thưởng hoàng gia cao quý Nhà vua ban tặng cho Lionel Logue sau chiến tranh:",
      "question": "Lionel được phong tặng tước hiệu gì trong Huân chương Hoàng gia Victoria?",
      "options": [
        "Commander of the Royal Victorian Order (CVO)",
        "Lord",
        "Duke",
        "Sir only"
      ],
      "answer": "Commander of the Royal Victorian Order (CVO)",
      "explanationVi": "Nhà vua ban tặng tước vị cao quý ghi nhận lòng tận tụy cá nhân của Lionel đối với hoàng gia."
    },
    {
      "id": "ks_20",
      "dialogueContext": "Bài học truyền cảm hứng bất diệt của The King's Speech:",
      "question": "Bộ phim khẳng định chân lý gì về việc chiến thắng khiếm khuyết của bản thân?",
      "options": [
        "Courage is not the absence of fear, but triumphing over it (Dũng cảm là đối diện và vượt qua nỗi sợ hãi)",
        "Flaws can never be healed",
        "Only born leaders can rule",
        "Wealth solves everything"
      ],
      "answer": "Courage is not the absence of fear, but triumphing over it (Dũng cảm là đối diện và vượt qua nỗi sợ hãi)",
      "explanationVi": "Ai cũng có những nỗi sợ hãi thầm kín; người anh hùng thực sự là người dám cất lên tiếng nói trách nhiệm giữa giông bão."
    }
  ],
  "the-crown": [
    {
      "id": "crown_1",
      "dialogueContext": "Thái tử phi Mary răn dạy Nữ hoàng Elizabeth II về bổn phận tối thượng của ngai vàng:",
      "question": "Bà nói về sự hy sinh bản ngã cá nhân: 'The Crown must always _______.'",
      "options": [
        "win",
        "lose",
        "sleep",
        "bend"
      ],
      "answer": "win",
      "explanationVi": "'The Crown must always win' (Vương miện phải luôn luôn chiến thắng) - nghĩa vụ quốc gia luôn đặt trên mọi tình cảm riêng tư."
    },
    {
      "id": "crown_2",
      "dialogueContext": "Bản chất của chế độ quân chủ lập hiến Anh được giải thích trong phim:",
      "question": "Nhiệm vụ tối cao của nguyên thủ quốc gia quân chủ trong chính trị là gì?",
      "options": [
        "To remain strictly neutral and above party politics (Giữ tính trung lập tuyệt đối, đứng trên các đảng phái)",
        "To govern and make laws",
        "To lead the military in war",
        "To vote in parliament"
      ],
      "answer": "To remain strictly neutral and above party politics (Giữ tính trung lập tuyệt đối, đứng trên các đảng phái)",
      "explanationVi": "Quân vương trị vì nhưng không cai trị ('Reign but not rule'), giữ vai trò biểu tượng đoàn kết dân tộc bất khả xâm phạm."
    },
    {
      "id": "crown_3",
      "dialogueContext": "Thủ tướng huyền thoại Winston Churchill luôn dành sự kính trọng đặc biệt cho Nữ hoàng trẻ tuổi:",
      "question": "Buổi thiết triều hàng tuần bí mật giữa Thủ tướng và Nữ hoàng được gọi là:",
      "options": [
        "The Weekly Audience",
        "The Press Conference",
        "The Cabinet Meeting",
        "The State Banquet"
      ],
      "answer": "The Weekly Audience",
      "explanationVi": "'The Audience' là buổi hội kiến bí mật tuyệt đối giữa Nữ hoàng và Thủ tướng vào chiều thứ Ba hàng tuần."
    },
    {
      "id": "crown_4",
      "dialogueContext": "Thảm họa sương mù khói đen chết người bao trùm London năm 1952:",
      "question": "Thảm họa môi trường cướp đi sinh mạng hàng nghìn người dân được gọi là:",
      "options": [
        "The Great Smog of London",
        "The Great Fire",
        "The Black Plague",
        "The Great Flood"
      ],
      "answer": "The Great Smog of London",
      "explanationVi": "'The Great Smog' là hiện tượng ô nhiễm không khí công nghiệp nghiêm trọng thách thức nội các của Churchill."
    },
    {
      "id": "crown_5",
      "dialogueContext": "Hoàng thân Philip đấu tranh với cảm giác tự ti khi phải quỳ gối trước người vợ trẻ:",
      "question": "Tại lễ đăng quang, Philip bị buộc phải thực hiện nghi thức phong kiến nào?",
      "options": [
        "Kneel before the Queen and swear allegiance (Quỳ gối trước Nữ hoàng và tuyên thệ trung thành)",
        "Stay outside",
        "Wear a mask",
        "Wash her feet"
      ],
      "answer": "Kneel before the Queen and swear allegiance (Quỳ gối trước Nữ hoàng và tuyên thệ trung thành)",
      "explanationVi": "Philip phải quỳ xuống tuyên xưng là bề tôi trung thành suốt đời của Nữ hoàng, một gánh nặng tâm lý lớn với một sĩ quan hải quân kiêu hãnh."
    },
    {
      "id": "crown_6",
      "dialogueContext": "Công chúa Margaret muốn kết hôn với Đại tá Peter Townsend đã ly dị vợ:",
      "question": "Rào cản tôn giáo lớn nhất ngăn cản cuộc hôn nhân hoàng gia này là:",
      "options": [
        "Giáo hội Anh giáo (Church of England) không cho phép người ly dị tái hôn khi bạn đời cũ còn sống",
        "Townsend nghèo",
        "Townsend là người ngoại quốc",
        "Townsend không biết tiếng Anh"
      ],
      "answer": "Giáo hội Anh giáo (Church of England) không cho phép người ly dị tái hôn khi bạn đời cũ còn sống",
      "explanationVi": "Với tư cách là Người đứng đầu Giáo hội Anh giáo ('Defender of the Faith'), Nữ hoàng không thể phê chuẩn đám cưới trái giáo luật."
    },
    {
      "id": "crown_7",
      "dialogueContext": "Elizabeth buộc phải lựa chọn giữa tình chị em ruột thịt và trách nhiệm với Giáo hội:",
      "question": "Margaret đau đớn oán trách chị gái đã chọn điều gì?",
      "options": [
        "The Crown over sisterhood (Chọn Vương quyền thay vì tình chị em)",
        "Money",
        "Fame",
        "Churchill"
      ],
      "answer": "The Crown over sisterhood (Chọn Vương quyền thay vì tình chị em)",
      "explanationVi": "Sự cô độc lạnh lùng của ngai vàng đòi hỏi phải gạt bỏ cảm xúc cá nhân để bảo vệ thể chế."
    },
    {
      "id": "crown_8",
      "dialogueContext": "Cuộc khủng hoảng kênh đào Suez năm 1956 làm lung lay vị thế đế chế Anh:",
      "question": "Thủ tướng Anthony Eden đã mắc sai lầm quân sự nghiêm trọng khi liên quân đánh chiếm kênh đào ở quốc gia nào?",
      "options": [
        "Egypt (Ai Cập)",
        "India",
        "South Africa",
        "Kenya"
      ],
      "answer": "Egypt (Ai Cập)",
      "explanationVi": "Cuộc khủng hoảng Suez đánh dấu dấu chấm hết cho vị thế siêu cường thực dân kiểu cũ của Đế quốc Anh."
    },
    {
      "id": "crown_9",
      "dialogueContext": "Giáo dục truyền thống hoàng gia trước đây không dạy các môn khoa học hiện đại:",
      "question": "Elizabeth nhận ra sự thiếu hụt kiến thức của mình và bí mật thuê ai vào cung điện giảng dạy?",
      "options": [
        "A private tutor / Professor (Một gia sư học giả tư thục)",
        "A comedian",
        "A singer",
        "A painter"
      ],
      "answer": "A private tutor / Professor (Một gia sư học giả tư thục)",
      "explanationVi": "Nữ hoàng thuê giáo sư Hogg để bổ túc kiến thức hiến pháp, triết học và chính trị hiện đại."
    },
    {
      "id": "crown_10",
      "dialogueContext": "Trang viên hoàng gia Sandringham và Balmoral là nơi nghỉ dưỡng yêu thích của gia đình:",
      "question": "Lâu đài cổ kính tại vùng cao nguyên Scotland nơi Nữ hoàng gắn bó trọn đời là:",
      "options": [
        "Balmoral Castle",
        "Windsor Castle",
        "Buckingham",
        "Kensington"
      ],
      "answer": "Balmoral Castle",
      "explanationVi": "'Balmoral Castle' ở Scotland là chốn bình yên nơi Nữ hoàng được hòa mình với thiên nhiên và lái xe địa hình."
    },
    {
      "id": "crown_11",
      "dialogueContext": "Thảm kịch sạt lở mỏ than Aberfan tại xứ Wales năm 1966 chôn vùi một trường tiểu học:",
      "question": "Sai lầm mà Nữ hoàng hối tiếc nhất trong những ngày đầu sau thảm kịch là:",
      "options": [
        "Chậm trễ trong việc đích thân đến hiện trường chia buồn cùng các gia đình nạn nhân",
        "Không quyên góp tiền",
        "Từ chối cử cứu hộ",
        "Đi du lịch nước ngoài"
      ],
      "answer": "Chậm trễ trong việc đích thân đến hiện trường chia buồn cùng các gia đình nạn nhân",
      "explanationVi": "Sự kiềm chế cảm xúc kiểu hoàng gia ('stiff upper lip') khiến Nữ hoàng bị chỉ trích là xa cách và vô cảm."
    },
    {
      "id": "crown_12",
      "dialogueContext": "Thái tử Charles trải qua thời niên thiếu khắc nghiệt tại ngôi trường nội trú Gordonstoun ở Scotland:",
      "question": "Triết lý rèn luyện thể chất gian khổ tại ngôi trường của Hoàng thân Philip được Charles ví như:",
      "options": [
        "Colditz in kilts / A prison (Nhà tù mặc váy)",
        "Paradise",
        "A playground",
        "A luxury hotel"
      ],
      "answer": "Colditz in kilts / A prison (Nhà tù mặc váy)",
      "explanationVi": "Charles nhạy cảm và yêu nghệ thuật đã phải chịu đựng những năm tháng bị bắt nạt và tắm nước lạnh buốt."
    },
    {
      "id": "crown_13",
      "dialogueContext": "Bà Đầm Thép Margaret Thatcher trở thành nữ Thủ tướng đầu tiên trong lịch sử Anh:",
      "question": "Bất đồng gay gắt giữa Nữ hoàng và bà Thatcher nổ ra về vấn đề trừng phạt chế độ phân biệt chủng tộc ở đâu?",
      "options": [
        "Apartheid in South Africa (Chế độ Apartheid tại Nam Phi)",
        "The Falklands War",
        "The miners' strike",
        "Tax cuts"
      ],
      "answer": "Apartheid in South Africa (Chế độ Apartheid tại Nam Phi)",
      "explanationVi": "Nữ hoàng muốn bảo vệ sự đoàn kết của Khối Thịnh Vượng Chung bằng cách lên án chế độ Apartheid, trong khi Thatcher kiên quyết phản đối cấm vận."
    },
    {
      "id": "crown_14",
      "dialogueContext": "Công nương Diana Spencer bước vào đời sống hoàng gia như một làn gió mới:",
      "question": "Công nương Diana được công chúng mến mộ và truyền thông ca ngợi bằng danh xưng nào?",
      "options": [
        "The People's Princess (Công nương của nhân dân)",
        "The Iron Lady",
        "The Queen of Hearts only",
        "The Royal Duchess"
      ],
      "answer": "The People's Princess (Công nương của nhân dân)",
      "explanationVi": "'The People's Princess' chạm đến trái tim hàng triệu người nhờ sự ấm áp, ôm hôn bệnh nhân AIDS và đi qua bãi mìn."
    },
    {
      "id": "crown_15",
      "dialogueContext": "Cuộc phỏng vấn chấn động trên đài BBC Panorama của Công nương Diana:",
      "question": "Diana tuyên bố câu nói lịch sử về cuộc hôn nhân ba người của mình: 'Well, there were _______ of us in this marriage, so it was a bit crowded.'",
      "options": [
        "three",
        "two",
        "four",
        "five"
      ],
      "answer": "three",
      "explanationVi": "'There were three of us in this marriage' ám chỉ mối quan hệ ngoài luồng dai dẳng giữa Charles và Camilla Parker Bowles."
    },
    {
      "id": "crown_16",
      "dialogueContext": "Năm 1992 với hàng loạt biến cố: ly hôn của các con và vụ hỏa hoạn tại Lâu đài Windsor:",
      "question": "Nữ hoàng mô tả năm đen tối này bằng cụm từ tiếng Latinh nổi tiếng nào?",
      "options": [
        "Annus Horribilis (Năm kinh hoàng)",
        "Carpe Diem",
        "Status Quo",
        "De Facto"
      ],
      "answer": "Annus Horribilis (Năm kinh hoàng)",
      "explanationVi": "'Annus Horribilis' trở thành thuật ngữ bất hủ khi Nữ hoàng nhìn lại chuỗi bi kịch gia đình và cung điện bị cháy."
    },
    {
      "id": "crown_17",
      "dialogueContext": "Cái chết đột ngột bi thảm của Công nương Diana tại Paris năm 1997:",
      "question": "Thủ tướng Tony Blair đã thuyết phục Nữ hoàng làm điều gì để xoa dịu cơn thịnh nộ của công chúng?",
      "options": [
        "Quay về London, hạ cờ rủ tại Điện Buckingham và phát biểu trực tiếp trên truyền hình",
        "Đóng cửa cung điện",
        "Bỏ trốn ra nước ngoài",
        "Không làm gì cả"
      ],
      "answer": "Quay về London, hạ cờ rủ tại Điện Buckingham và phát biểu trực tiếp trên truyền hình",
      "explanationVi": "Hành động kịp thời của Nữ hoàng đã cứu vãn sự tồn vong của chế độ quân chủ trước làn sóng phẫn nộ của người dân."
    },
    {
      "id": "crown_18",
      "dialogueContext": "Sự hiện diện thầm lặng của Hoàng thân Philip bên cạnh Nữ hoàng suốt hơn 70 năm:",
      "question": "Nữ hoàng từng ca ngợi Philip trong lễ kỷ niệm đám cưới vàng là:",
      "options": [
        "My strength and stay (Sức mạnh và chỗ dựa vững chắc của tôi)",
        "My boss",
        "My soldier only",
        "My companion"
      ],
      "answer": "My strength and stay (Sức mạnh và chỗ dựa vững chắc của tôi)",
      "explanationVi": "Hoàng thân Philip luôn là điểm tựa kiên cường nhất của Nữ hoàng qua bao thăng trầm thời đại."
    },
    {
      "id": "crown_19",
      "dialogueContext": "Khái niệm 'Khối Thịnh Vượng Chung' (The Commonwealth) mà Nữ hoàng hết lòng vun đắp:",
      "question": "Tổ chức quốc tế gắn kết hơn 50 quốc gia độc lập có nguồn gốc từ cựu thuộc địa Anh được gọi là:",
      "options": [
        "The Commonwealth of Nations",
        "The United Nations",
        "The European Union",
        "NATO"
      ],
      "answer": "The Commonwealth of Nations",
      "explanationVi": "Nữ hoàng coi Khối Thịnh Vượng Chung là sứ mệnh thiêng liêng nhất của triều đại mình."
    },
    {
      "id": "crown_20",
      "dialogueContext": "Cảnh kết thúc của The Crown khi Elizabeth bước một mình trong sảnh đường nhà nguyện cổ kính:",
      "question": "Hình ảnh đó đọng lại thông điệp gì về thân phận người đội vương miện?",
      "options": [
        "Sự cô độc vĩnh cửu và sự tận hiến trọn đời cho nghĩa vụ thiêng liêng",
        "Sự giàu sang phung phí",
        "Quyền lực tuyệt đối",
        "Sự may mắn ngẫu nhiên"
      ],
      "answer": "Sự cô độc vĩnh cửu và sự tận hiến trọn đời cho nghĩa vụ thiêng liêng",
      "explanationVi": "'Heavy is the head that wears the crown' - sự kiên định chịu đựng và đức hy sinh tận tụy đến hơi thở cuối cùng."
    }
  ],
  "oppenheimer": [
    {
      "id": "opp_1",
      "dialogueContext": "J. Robert Oppenheimer nhớ lại câu kinh cổ Hindu Bhagavad Gita khi nhìn thấy vụ nổ thử nghiệm Trinity:",
      "question": "Câu trích dẫn rùng mình bất hủ của Oppenheimer là: 'Now I am become Death, the destroyer of _______.'",
      "options": [
        "worlds",
        "stars",
        "nations",
        "cities"
      ],
      "answer": "worlds",
      "explanationVi": "'Now I am become Death, the destroyer of worlds' (Giờ đây tôi đã trở thành Thần Chết, kẻ hủy diệt những thế giới)."
    },
    {
      "id": "opp_2",
      "dialogueContext": "Dự án bí mật tối cao của chính phủ Mỹ nhằm chế tạo bom nguyên tử đầu tiên:",
      "question": "Tên mật mã lịch sử của dự án chế tạo vũ khí hạt nhân là gì?",
      "options": [
        "The Manhattan Project",
        "The Apollo Project",
        "The Trinity Project",
        "The Los Alamos Project"
      ],
      "answer": "The Manhattan Project",
      "explanationVi": "'The Manhattan Project' quy tụ những bộ óc vật lý vĩ đại nhất nhân loại dưới sự chỉ huy của Tướng Leslie Groves."
    },
    {
      "id": "opp_3",
      "dialogueContext": "Địa điểm bí mật trên cao nguyên sa mạc New Mexico nơi xây dựng thị trấn nghiên cứu biệt lập:",
      "question": "Phòng thí nghiệm hạt nhân bí mật được đặt tại đâu?",
      "options": [
        "Los Alamos",
        "Area 51",
        "Silicon Valley",
        "Oak Ridge"
      ],
      "answer": "Los Alamos",
      "explanationVi": "Los Alamos là thị trấn bí mật không có trên bản đồ nơi hàng nghìn nhà khoa học và gia đình sinh sống bí mật."
    },
    {
      "id": "opp_4",
      "dialogueContext": "Tên mật mã của vụ nổ thử nghiệm hạt nhân đầu tiên trong lịch sử nhân loại ngày 16/7/1945:",
      "question": "Vụ thử nghiệm nguyên tử đầu tiên được Oppenheimer đặt tên là:",
      "options": [
        "Trinity",
        "Fat Man",
        "Little Boy",
        "Doomsday"
      ],
      "answer": "Trinity",
      "explanationVi": "'Trinity test' lấy cảm hứng từ thơ của John Donne ('Batter my heart, three-person'd God')."
    },
    {
      "id": "opp_5",
      "dialogueContext": "Mối nguy hiểm lý thuyết mà Edward Teller tính toán trước vụ nổ hạt nhân:",
      "question": "Khả năng phản ứng dây chuyền hạt nhân có thể gây ra thảm họa toàn cầu nào?",
      "options": [
        "Igniting the atmosphere and destroying the entire planet (Đốt cháy bầu khí quyển và hủy diệt Trái Đất)",
        "Freezing the oceans",
        "Stopping time",
        "Creating a black hole"
      ],
      "answer": "Igniting the atmosphere and destroying the entire planet (Đốt cháy bầu khí quyển và hủy diệt Trái Đất)",
      "explanationVi": "Xác suất dù gần như bằng không ('near zero') nhưng vẫn là mối kinh hoàng hiện sinh trước khi ấn nút kích nổ."
    },
    {
      "id": "opp_6",
      "dialogueContext": "Hai quả bom nguyên tử được ném xuống hai thành phố nào của Nhật Bản vào tháng 8/1945?",
      "question": "Địa danh hứng chịu thảm họa nguyên tử là:",
      "options": [
        "Hiroshima and Nagasaki",
        "Tokyo and Kyoto",
        "Osaka and Nagoya",
        "Sapporo and Kobe"
      ],
      "answer": "Hiroshima and Nagasaki",
      "explanationVi": "'Little Boy' ném xuống Hiroshima và 'Fat Man' ném xuống Nagasaki chấm dứt Thế chiến thứ Hai."
    },
    {
      "id": "opp_7",
      "dialogueContext": "Oppenheimer gặp Tổng thống Harry S. Truman tại Phòng Bầu Dục sau chiến tranh:",
      "question": "Oppenheimer run rẩy thốt lên điều gì khiến Tổng thống Truman tức giận?",
      "options": [
        "Mr. President, I feel I have blood on my hands. (Thưa Tổng thống, tôi cảm thấy tay mình đã vấy máu.)",
        "Give me more money.",
        "I want to rule the world.",
        "I hate physics."
      ],
      "answer": "Mr. President, I feel I have blood on my hands. (Thưa Tổng thống, tôi cảm thấy tay mình đã vấy máu.)",
      "explanationVi": "Truman rút khăn tay ra mỉa mai và ra lệnh không bao giờ để 'kẻ khóc nhè' Oppenheimer bước vào Phòng Bầu Dục nữa."
    },
    {
      "id": "opp_8",
      "dialogueContext": "Kẻ thù chính trị thâm hiểm đứng sau phiên điều trần tước quyền miễn trừ an ninh của Oppenheimer:",
      "question": "Chủ tịch Ủy ban Năng lượng Nguyên tử (AEC) căm thù Oppenheimer là ai?",
      "options": [
        "Lewis Strauss",
        "Leslie Groves",
        "Ernest Lawrence",
        "Niels Bohr"
      ],
      "answer": "Lewis Strauss",
      "explanationVi": "Lewis Strauss (do Robert Downey Jr. thủ vai đoạt giải Oscar) ngấm ngầm trả thù vì bị Oppenheimer chế giễu trước Thượng viện."
    },
    {
      "id": "opp_9",
      "dialogueContext": "Kỷ nguyên săn lùng phù thủy chống cộng sản tại Mỹ trong thập niên 1950 được gọi là:",
      "question": "Hiện tượng thanh trừng chính trị hoang tưởng thời Chiến tranh Lạnh là:",
      "options": [
        "McCarthyism / The Red Scare (Chủ nghĩa McCarthy / Nỗi sợ Đỏ)",
        "The New Deal",
        "Watergate",
        "Prohibition"
      ],
      "answer": "McCarthyism / The Red Scare (Chủ nghĩa McCarthy / Nỗi sợ Đỏ)",
      "explanationVi": "Chiến dịch bài trừ cộng sản của Thượng nghị sĩ Joseph McCarthy biến Oppenheimer thành nạn nhân bị nghi ngờ là gián điệp."
    },
    {
      "id": "opp_10",
      "dialogueContext": "Edward Teller phản đối Oppenheimer và thúc đẩy phát triển loại bom uy lực hơn gấp nghìn lần:",
      "question": "Vũ khí nhiệt hạch sử dụng phản ứng nhiệt hạch đồng vị hydro được gọi là:",
      "options": [
        "The Hydrogen Bomb / Super bomb (Bom Khinh khí / Bom H)",
        "Neutron bomb",
        "Dynamite",
        "Chemical bomb"
      ],
      "answer": "The Hydrogen Bomb / Super bomb (Bom Khinh khí / Bom H)",
      "explanationVi": "'The Super' (Bom H) là mầm mống chạy đua vũ trang hủy diệt mà Oppenheimer kịch liệt phản đối chế tạo."
    },
    {
      "id": "opp_11",
      "dialogueContext": "Niels Bohr nhà vật lý lượng tử huyền thoại người Đan Mạch cảnh báo Oppenheimer:",
      "question": "Bohr so sánh Oppenheimer với nhân vật thần thoại Hy Lạp nào?",
      "options": [
        "Prometheus (Vị thần ăn trộm lửa của các vị thần trao cho loài người)",
        "Hercules",
        "Achilles",
        "Zeus"
      ],
      "answer": "Prometheus (Vị thần ăn trộm lửa của các vị thần trao cho loài người)",
      "explanationVi": "Prometheus mang lửa đến cho con người và phải chịu sự trừng phạt vĩnh viễn bị đại bàng moi gan trên mỏm đá."
    },
    {
      "id": "opp_12",
      "dialogueContext": "Phiên điều trần kín năm 1954 tước quyền bảo mật an ninh của Oppenheimer:",
      "question": "Bản chất của phiên tòa kín bất công này là gì?",
      "options": [
        "A kangaroo court / Political show trial (Một phiên tòa chiếu lệ thiên vị không có thủ tục công bằng)",
        "A fair jury trial",
        "An academic debate",
        "A friendly chat"
      ],
      "answer": "A kangaroo court / Political show trial (Một phiên tòa chiếu lệ thiên vị không có thủ tục công bằng)",
      "explanationVi": "Luật sư công tố Roger Robb nắm trong tay tài liệu mật của FBI nhưng tước quyền tiếp cận hồ sơ của luật sư bào chữa cho Oppenheimer."
    },
    {
      "id": "opp_13",
      "dialogueContext": "Kitty Oppenheimer người vợ kiên cường luôn giục giồng phải chiến đấu chống lại sự bôi nhọ:",
      "question": "Kitty mắng Oppenheimer vì sự cam chịu mặc cảm tội lỗi: 'Why won't you _______?'",
      "options": [
        "fight back (chiến đấu chống lại họ)",
        "run away",
        "cry",
        "confess"
      ],
      "answer": "fight back (chiến đấu chống lại họ)",
      "explanationVi": "Kitty nhìn thấy Oppenheimer tự ngược đãi bản thân để chuộc lại cảm giác tội lỗi sau vụ ném bom."
    },
    {
      "id": "opp_14",
      "dialogueContext": "Sự phân biệt màu sắc mang tính nghệ thuật của đạo diễn Christopher Nolan trong phim:",
      "question": "Các cảnh quay đen trắng (Black & White) đại diện cho góc nhìn của ai?",
      "options": [
        "Góc nhìn khách quan / Lewis Strauss",
        "Góc nhìn chủ quan của Oppenheimer",
        "Tương lai",
        "Quá khứ"
      ],
      "answer": "Góc nhìn khách quan / Lewis Strauss",
      "explanationVi": "Cảnh màu là góc nhìn chủ quan của Oppenheimer ('Fission'), còn đen trắng là góc nhìn chính trị khách quan của Strauss ('Fusion')."
    },
    {
      "id": "opp_15",
      "dialogueContext": "Tướng Leslie Groves dù cứng rắn nhưng luôn tin tưởng tài năng lãnh đạo của Oppenheimer:",
      "question": "Chức danh chỉ huy thực địa toàn bộ dự án Manhattan của Groves là:",
      "options": [
        "Military Director (Giám đốc Quân sự)",
        "President",
        "Secretary of State",
        "Mayor"
      ],
      "answer": "Military Director (Giám đốc Quân sự)",
      "explanationVi": "Tướng Groves là nhà quản lý quân đội tài ba đưa hàng tỷ đô-la vào guồng máy vận hành thần tốc."
    },
    {
      "id": "opp_16",
      "dialogueContext": "Jean Tatlock người phụ nữ đảng viên cộng sản và là mối tình sâu nặng đầy dằn vặt của Oppenheimer:",
      "question": "Cái chết bí ẩn của Jean Tatlock trong bồn tắm được kết luận là:",
      "options": [
        "Suicide / Drowning (Tự sát / Chết đuối)",
        "Car accident",
        "Old age",
        "Poison by enemy"
      ],
      "answer": "Suicide / Drowning (Tự sát / Chết đuối)",
      "explanationVi": "Cái chết của Jean ám ảnh tâm trí Oppenheimer suốt phần đời còn lại."
    },
    {
      "id": "opp_17",
      "dialogueContext": "Cuộc bỏ phiếu tại Thượng viện Mỹ bác bỏ tư cách Bộ trưởng Thương mại của Lewis Strauss:",
      "question": "Một thượng nghị sĩ trẻ tuổi tương lai sẽ trở thành Tổng thống đã bỏ phiếu chống lại Strauss là ai?",
      "options": [
        "John F. Kennedy (JFK)",
        "Richard Nixon",
        "Jimmy Carter",
        "Ronald Reagan"
      ],
      "answer": "John F. Kennedy (JFK)",
      "explanationVi": "Chính lá phiếu của JFK đã ngăn chặn tham vọng quyền lực của Strauss và sau này phục hồi danh dự cho Oppenheimer."
    },
    {
      "id": "opp_18",
      "dialogueContext": "Hình ảnh những giọt mưa rơi trên mặt hồ Princeton tạo ra những gợn sóng lan tỏa:",
      "question": "Hình ảnh gợn sóng nước ẩn dụ cho khái niệm vật lý nào?",
      "options": [
        "Chain reaction / Wave function (Phản ứng dây chuyền hạt nhân không thể đảo ngược)",
        "Fire",
        "Ice",
        "Wind"
      ],
      "answer": "Chain reaction / Wave function (Phản ứng dây chuyền hạt nhân không thể đảo ngược)",
      "explanationVi": "Mỗi phản ứng dây chuyền nguyên tử như giọt nước mở rộng vô tận đe dọa sự sống toàn cầu."
    },
    {
      "id": "opp_19",
      "dialogueContext": "Cuộc trò chuyện bí ẩn bên bờ hồ giữa Oppenheimer và Albert Einstein ở đầu và cuối phim:",
      "question": "Einstein cảnh báo khi họ trao huân chương danh dự cho Oppenheimer sau nhiều năm đày đọa:",
      "options": [
        "It won't be for you, it will be for themselves. (Họ làm thế không phải vì anh, mà là để tự tha thứ cho chính họ.)",
        "Run to Europe.",
        "Take the money.",
        "Physics is wrong."
      ],
      "answer": "It won't be for you, it will be for themselves. (Họ làm thế không phải vì anh, mà là để tự tha thứ cho chính họ.)",
      "explanationVi": "Einstein thấu suốt bản chất chính trị bạc bẽo: người ta sẽ vỗ tay trao huy chương chỉ khi muốn rửa sạch vết nhơ lịch sử của họ."
    },
    {
      "id": "opp_20",
      "dialogueContext": "Câu nói cuối cùng của Oppenheimer với Einstein khép lại bộ phim trong nỗi ám ảnh kinh hoàng:",
      "question": "Oppenheimer thì thầm: 'Albert, when I came to you with those calculations, we thought we might start a chain reaction that would destroy the entire world...' và Einstein hỏi: 'Yes, what about it?' - Oppenheimer trả lời:",
      "options": [
        "I believe we did. (Tôi tin rằng chúng ta đã thực sự làm điều đó rồi.)",
        "We were wrong.",
        "The world is safe.",
        "Everything is fine."
      ],
      "answer": "I believe we did. (Tôi tin rằng chúng ta đã thực sự làm điều đó rồi.)",
      "explanationVi": "Phản ứng dây chuyền chạy đua vũ trang hạt nhân đã thực sự bắt đầu và đẩy nhân loại vào bờ vực tự diệt vong."
    }
  ],
  "inception": [
    {
      "id": "inc_1",
      "dialogueContext": "Dom Cobb giải thích bản chất bất tử và sức mạnh lan tỏa của một suy nghĩ trong tâm trí:",
      "question": "Cobb nói: 'An idea is like a virus. Resilient, highly contagious. And the smallest seed of an idea can grow to _______.'",
      "options": [
        "define or destroy you (định hình hoặc hủy diệt bạn)",
        "make you rich",
        "disappear",
        "sleep forever"
      ],
      "answer": "define or destroy you (định hình hoặc hủy diệt bạn)",
      "explanationVi": "Một ý niệm đơn giản một khi đã bám rễ sâu vào tiềm thức có thể làm thay đổi hoàn toàn hành vi của con người."
    },
    {
      "id": "inc_2",
      "dialogueContext": "Nghệ thuật thâm nhập vào giấc mơ của người khác để đánh cắp bí mật thương mại được gọi là:",
      "question": "Nghề nghiệp ban đầu của nhóm Cobb là:",
      "options": [
        "Extraction (Trích xuất ý nghĩ)",
        "Inception",
        "Murder",
        "Forgery"
      ],
      "answer": "Extraction (Trích xuất ý nghĩ)",
      "explanationVi": "'Extraction' là hành vi xâm nhập giấc mơ để lấy cắp thông tin bí mật kinh doanh."
    },
    {
      "id": "inc_3",
      "dialogueContext": "Nhiệm vụ bất khả thi và nguy hiểm hơn gấp bội mà Saito thuê nhóm Cobb thực hiện:",
      "question": "Hành động cấy ghép một ý tưởng mới vào sâu trong tiềm thức của mục tiêu được gọi là:",
      "options": [
        "Inception (Cấy ghép ý niệm)",
        "Extraction",
        "Deception",
        "Rejection"
      ],
      "answer": "Inception (Cấy ghép ý niệm)",
      "explanationVi": "'Inception' là gieo một mầm mống suy nghĩ sao cho mục tiêu tin rằng đó là ý tưởng tự nhiên của chính họ."
    },
    {
      "id": "inc_4",
      "dialogueContext": "Vật phẩm nhỏ bé độc nhất giúp mỗi kẻ trộm giấc mơ phân biệt giữa thực tại và ảo ảnh:",
      "question": "Vật định vị thực tại cá nhân được gọi là gì trong phim?",
      "options": [
        "Totem",
        "Amulet",
        "Talisman",
        "Compass"
      ],
      "answer": "Totem",
      "explanationVi": "'Totem' có trọng lượng và đặc tính bí mật mà chỉ duy nhất người sở hữu biết để kiểm tra xem mình có đang mơ không."
    },
    {
      "id": "inc_5",
      "dialogueContext": "Vật totem mang tính biểu tượng của Cobb được thừa hưởng từ người vợ quá cố Mal:",
      "question": "Vật totem của Cobb là gì và nó hoạt động thế nào trong mơ?",
      "options": [
        "A spinning top (Con quay) - nó sẽ quay mãi không bao giờ đổ nếu đang trong mơ",
        "A loaded die",
        "A chess piece",
        "A coin"
      ],
      "answer": "A spinning top (Con quay) - nó sẽ quay mãi không bao giờ đổ nếu đang trong mơ",
      "explanationVi": "Trong thế giới thực, con quay sẽ chao đảo và đổ xuống theo trọng lực; nhưng trong giấc mơ, nó sẽ quay vô tận."
    },
    {
      "id": "inc_6",
      "dialogueContext": "Ariadne cô sinh viên kiến trúc tài ba được Cobb tuyển mộ để thiết kế các mê cung giấc mơ:",
      "question": "Vai trò của Ariadne trong đội ngũ được gọi là:",
      "options": [
        "The Architect (Kiến trúc sư giấc mơ)",
        "The Point Man",
        "The Forger",
        "The Chemist"
      ],
      "answer": "The Architect (Kiến trúc sư giấc mơ)",
      "explanationVi": "'The Architect' chịu trách nhiệm xây dựng bối cảnh hình học không gian phức tạp để đánh lừa tiềm thức."
    },
    {
      "id": "inc_7",
      "dialogueContext": "Cơ chế đánh thức người mơ thoát khỏi các tầng giấc mơ sâu để trở về thực tại:",
      "question": "Cú sốc đột ngột như cảm giác rơi tự do hoặc chìm trong nước được gọi là:",
      "options": [
        "The Kick (Cú hích đánh thức)",
        "The Punch",
        "The Jump",
        "The Fall"
      ],
      "answer": "The Kick (Cú hích đánh thức)",
      "explanationVi": "'A kick' tạo ra phản xạ tiền đình đánh thức tâm trí đang bị chìm trong thuốc ngủ."
    },
    {
      "id": "inc_8",
      "dialogueContext": "Bản nhạc báo hiệu sắp có cú hích đánh thức để nhóm đồng bộ thời gian:",
      "question": "Bài hát tiếng Pháp bất hủ của danh ca Édith Piaf được dùng làm tín hiệu đếm ngược là:",
      "options": [
        "Non, je ne regrette rien",
        "La Vie En Rose",
        "Hymne à l'amour",
        "Padam Padam"
      ],
      "answer": "Non, je ne regrette rien",
      "explanationVi": "Bài hát 'Non, je ne regrette rien' khi bị kéo dài tốc độ phát âm trong các tầng mơ trở thành giai điệu kèn đồng trầm đục ám ảnh của Hans Zimmer."
    },
    {
      "id": "inc_9",
      "dialogueContext": "Thời gian trong các tầng giấc mơ trôi chậm hơn nhiều lần so với thực tại:",
      "question": "Nếu ở thực tại trôi qua 10 giờ, thì ở tầng mơ thứ ba thời gian tương đương khoảng bao lâu?",
      "options": [
        "Khoảng 10 năm",
        "10 phút",
        "1 ngày",
        "100 năm"
      ],
      "answer": "Khoảng 10 năm",
      "explanationVi": "Càng đi sâu vào các tầng giấc mơ, hoạt động não bộ càng nhanh khiến thời gian bị giãn nở theo cấp số nhân."
    },
    {
      "id": "inc_10",
      "dialogueContext": "Tầng tiềm thức sâu thẳm nhất vô định nơi tâm trí có thể bị mắc kẹt hàng chục năm:",
      "question": "Vùng không gian hỗn độn hoang tàn này được gọi là gì?",
      "options": [
        "Limbo (Vực sâu vô định / Cõi Vong thân)",
        "The Void",
        "The Abyss",
        "Hell"
      ],
      "answer": "Limbo (Vực sâu vô định / Cõi Vong thân)",
      "explanationVi": "'Limbo' là tầng tiềm thức thô sơ chưa định hình, nếu chết trong mơ dưới tác dụng của thuốc ngủ liều mạnh sẽ bị đày ải đến đây."
    },
    {
      "id": "inc_11",
      "dialogueContext": "Arthur người cộng sự tin cậy đóng vai trò điều phối nghiên cứu thực địa:",
      "question": "Vai trò chiến lược của Arthur trong đội là:",
      "options": [
        "The Point Man (Người dẫn đường / Hậu cần chiến lược)",
        "The Chemist",
        "The Extractor",
        "The Mark"
      ],
      "answer": "The Point Man (Người dẫn đường / Hậu cần chiến lược)",
      "explanationVi": "Arthur phụ trách tìm hiểu thói quen của đối tượng và đảm bảo mọi mắt xích vận hành chính xác."
    },
    {
      "id": "inc_12",
      "dialogueContext": "Trận chiến không trọng lực ngoạn mục của Arthur ở hành lang khách sạn tầng mơ thứ hai:",
      "question": "Tại sao hành lang khách sạn lại bị xoay tròn và rơi vào trạng thái mất trọng lực?",
      "options": [
        "Vì chiếc xe van chở họ ở tầng 1 đang lộn nhào rơi tự do từ trên cầu xuống sông",
        "Do động đất",
        "Do máy bay rơi",
        "Do bão"
      ],
      "answer": "Vì chiếc xe van chở họ ở tầng 1 đang lộn nhào rơi tự do từ trên cầu xuống sông",
      "explanationVi": "Hiệu ứng vật lý từ tầng giấc mơ bên ngoài (xe van lao dốc rơi tự do) trực tiếp tác động lên trọng lực của tầng giấc mơ bên trong."
    },
    {
      "id": "inc_13",
      "dialogueContext": "Eames là bậc thầy ngụy trang có khả năng biến hình thành bất kỳ ai trong mơ:",
      "question": "Vai trò chuyên môn của Eames trong đội được gọi là:",
      "options": [
        "The Forger (Kẻ giả mạo nhân dạng)",
        "The Pilot",
        "The Guard",
        "The Hacker"
      ],
      "answer": "The Forger (Kẻ giả mạo nhân dạng)",
      "explanationVi": "'The Forger' có thể sao chép ngoại hình, giọng nói và phong thái của người khác để thao túng mục tiêu."
    },
    {
      "id": "inc_14",
      "dialogueContext": "Yusuf nhà hóa học điều chế loại thuốc ngủ cực mạnh:",
      "question": "Đặc tính của loại hợp chất an thần do Yusuf bào chế là gì?",
      "options": [
        "Giữ vững giấc mơ 3 tầng sâu mà không làm tê liệt thính giác",
        "Gây ảo giác",
        "Làm mất trí nhớ",
        "Gây chết người"
      ],
      "answer": "Giữ vững giấc mơ 3 tầng sâu mà không làm tê liệt thính giác",
      "explanationVi": "Thuốc ngủ phải đủ mạnh để giữ các tầng mơ ổn định nhưng để ngỏ chức năng tai trong nhận tín hiệu nhạc 'kick'."
    },
    {
      "id": "inc_15",
      "dialogueContext": "Mục tiêu của vụ Inception là Robert Fischer, người thừa kế tập đoàn năng lượng khổng lồ:",
      "question": "Ý niệm mà nhóm Cobb muốn cấy ghép vào đầu Fischer là gì?",
      "options": [
        "Tự nguyện chia nhỏ và giải thể đế chế tập đoàn của người cha để tự lập nghiệp",
        "Bán công ty cho Saito",
        "Đầu tư vào vũ khí",
        "Đi tu"
      ],
      "answer": "Tự nguyện chia nhỏ và giải thể đế chế tập đoàn của người cha để tự lập nghiệp",
      "explanationVi": "Ý tưởng tích cực về sự độc lập khỏi cái bóng của cha: 'My father doesn't want me to be him'."
    },
    {
      "id": "inc_16",
      "dialogueContext": "Hình bóng phản chiếu của Mal người vợ quá cố luôn xuất hiện phá hoại các nhiệm vụ của Cobb:",
      "question": "Thuật ngữ tâm lý học chỉ những hình bóng do tiềm thức tự phóng chiếu ra là:",
      "options": [
        "Projections (Hình chiếu tiềm thức)",
        "Ghosts",
        "Zombies",
        "Clones"
      ],
      "answer": "Projections (Hình chiếu tiềm thức)",
      "explanationVi": "'Projections' là hình chiếu bảo vệ của tiềm thức; Mal là sự phóng chiếu cảm giác tội lỗi ăn sâu trong Cobb."
    },
    {
      "id": "inc_17",
      "dialogueContext": "Bi kịch tự sát của Mal bắt nguồn từ việc Cobb từng cấy ghép ý niệm vào đầu cô:",
      "question": "Ý niệm độc hại mà Cobb từng thử nghiệm trên Mal khiến cô phát điên là gì?",
      "options": [
        "Your world is not real, you need to wake up (Thế giới này không có thật, cô phải chết để tỉnh dậy)",
        "You are a queen",
        "You hate your children",
        "Life is wonderful"
      ],
      "answer": "Your world is not real, you need to wake up (Thế giới này không có thật, cô phải chết để tỉnh dậy)",
      "explanationVi": "Ý niệm ăn sâu đến mức khi trở về thế giới thực, Mal vẫn tin rằng mình đang mơ và nhảy lầu để 'tỉnh thức'."
    },
    {
      "id": "inc_18",
      "dialogueContext": "Cobb tìm thấy Saito trong cõi Limbo sau khi ông đã già nua bạc trắng đầu:",
      "question": "Cobb nhắc Saito về giao ước danh dự đưa ông trở về đoàn tụ với con cái:",
      "options": [
        "Take a leap of faith and come back to be young again (Hãy tin tưởng và trở về để trẻ lại)",
        "Stay here forever",
        "Kill me",
        "Give me money"
      ],
      "answer": "Take a leap of faith and come back to be young again (Hãy tin tưởng và trở về để trẻ lại)",
      "explanationVi": "Cobb đánh thức Saito khỏi cơn mê ảo ảnh của Limbo để cùng bắn súng tự sát trở về thực tại."
    },
    {
      "id": "inc_19",
      "dialogueContext": "Cobb thức giấc trên chuyến bay qua Thái Bình Dương và làm thủ tục nhập cảnh an toàn:",
      "question": "Phần thưởng tối thượng Saito thực hiện cho Cobb sau khi hạ cánh tại Los Angeles là:",
      "options": [
        "Xóa bỏ mọi cáo buộc giết người để Cobb được trở về ôm hai con nhỏ",
        "Thưởng 1 tỷ USD",
        "Tặng máy bay",
        "Bổ nhiệm làm CEO"
      ],
      "answer": "Xóa bỏ mọi cáo buộc giết người để Cobb được trở về ôm hai con nhỏ",
      "explanationVi": "Một cú điện thoại của Saito đã dỡ bỏ lệnh truy nã, giúp người cha lưu lạc được về nhà."
    },
    {
      "id": "inc_20",
      "dialogueContext": "Khung hình kết thúc gây tranh cãi kinh điển nhất thế kỷ 21 của điện ảnh:",
      "question": "Cobb xoay con quay trên bàn rồi chạy ra ôm các con mà không nhìn lại. Con quay làm gì trước khi màn hình phụt tắt?",
      "options": [
        "Con quay hơi chao đảo nhẹ rồi màn hình đen phụt tắt cắt ngang (để ngỏ cái kết)",
        "Nó đổ cái rầm",
        "Nó bay lên trời",
        "Nó biến mất"
      ],
      "answer": "Con quay hơi chao đảo nhẹ rồi màn hình đen phụt tắt cắt ngang (để ngỏ cái kết)",
      "explanationVi": "Cái kết mở thiên tài: Cobb không còn quan tâm đó là mơ hay thực nữa, bởi vì đối với anh, hạnh phúc bên các con mới là thực tại duy nhất."
    }
  ],
  "house-of-cards": [
    {
      "id": "hoc_1",
      "dialogueContext": "Frank Underwood nhìn thẳng vào ống kính máy quay tâm sự với khán giả về hai loại nỗi đau:",
      "question": "Frank nói: 'There are two kinds of pain. The sort of pain that makes you strong, or _______ pain.'",
      "options": [
        "useless (nỗi đau vô dụng)",
        "happy",
        "expensive",
        "sweet"
      ],
      "answer": "useless (nỗi đau vô dụng)",
      "explanationVi": "'Useless pain' (nỗi đau vô dụng, chỉ làm người ta đau khổ mà không mang lại bài học). Frank kết liễu chú chó bị thương để chấm dứt nỗi đau vô ích."
    },
    {
      "id": "hoc_2",
      "dialogueContext": "Kỹ thuật điện ảnh đặc trưng nơi nhân vật chính quay sang nói chuyện trực tiếp với khán giả:",
      "question": "Thủ pháp nghệ thuật phá vỡ ranh giới sân khấu này tiếng Anh là gì?",
      "options": [
        "Breaking the fourth wall (Phá vỡ bức tường thứ tư)",
        "Voice-over",
        "Flashback",
        "Stream of consciousness"
      ],
      "answer": "Breaking the fourth wall (Phá vỡ bức tường thứ tư)",
      "explanationVi": "'Breaking the fourth wall' tạo cảm giác khán giả trở thành đồng phạm bí mật trong mọi âm mưu chính trị của Frank."
    },
    {
      "id": "hoc_3",
      "dialogueContext": "Frank so sánh giá trị tương đối giữa tiền bạc và quyền lực chính trị tối thượng:",
      "question": "Frank khinh thường tiền bạc: 'Money is the McMansion in Sarasota that starts falling apart after ten years. Power is the old stone building that stands for _______.'",
      "options": [
        "centuries (hàng thế kỷ)",
        "days",
        "months",
        "weeks"
      ],
      "answer": "centuries (hàng thế kỷ)",
      "explanationVi": "Frank coi tiền bạc là thứ phù du tầm thường; chỉ có quyền lực chính trị bền vững mới lưu danh muôn thuở."
    },
    {
      "id": "hoc_4",
      "dialogueContext": "Chức vụ ban đầu đầy quyền lực của Frank trong Hạ viện Hoa Kỳ:",
      "question": "Frank giữ cương vị gì phụ trách tập hợp và kỷ luật phiếu bầu của Đảng Dân chủ?",
      "options": [
        "Majority Whip (Trưởng ban Kỷ luật phe Đa số)",
        "Speaker of the House",
        "President",
        "Chief of Staff"
      ],
      "answer": "Majority Whip (Trưởng ban Kỷ luật phe Đa số)",
      "explanationVi": "'The Whip' (Roi ngựa) là người dùng mọi biện pháp đe dọa, mua chuộc để đảm bảo các nghị sĩ bỏ phiếu đúng định hướng."
    },
    {
      "id": "hoc_5",
      "dialogueContext": "Quán sườn nướng bình dân của Freddy ở khu ổ chuột Washington D.C.:",
      "question": "Món ăn khoái khẩu duy nhất giúp Frank nạp năng lượng vào lúc sáng sớm là:",
      "options": [
        "Freddy's BBQ ribs (Sườn nướng sốt thịt của Freddy)",
        "Pizza",
        "Salad",
        "Sushi"
      ],
      "answer": "Freddy's BBQ ribs (Sườn nướng sốt thịt của Freddy)",
      "explanationVi": "Quán sườn của Freddy là nơi ẩn náu bình dị duy nhất nơi Frank tìm thấy sự chân thật không đạo đức giả."
    },
    {
      "id": "hoc_6",
      "dialogueContext": "Nữ nhà báo trẻ đầy tham vọng Zoe Barnes thỏa thuận ngầm đổi tình báo lấy quyền lực với Frank:",
      "question": "Mối quan hệ cộng sinh giữa chính trị gia và báo chí được định nghĩa là:",
      "options": [
        "You give me information, I give you headlines (Mối quan hệ rò rỉ tin tức đôi bên cùng có lợi)",
        "True love",
        "Charity",
        "A legal contract"
      ],
      "answer": "You give me information, I give you headlines (Mối quan hệ rò rỉ tin tức đôi bên cùng có lợi)",
      "explanationVi": "Frank dùng Zoe để điều hướng truyền thông và bôi nhọ đối thủ chính trị qua các bài báo giật gân."
    },
    {
      "id": "hoc_7",
      "dialogueContext": "Hành động tàn độc của Frank khi Zoe Barnes bắt đầu phát hiện ra manh mối giết người:",
      "question": "Frank đã sát hại Zoe Barnes bằng cách nào tại ga tàu điện ngầm?",
      "options": [
        "Đẩy cô ngã vào đường ray trước đoàn tàu đang lao tới",
        "Đầu độc cà phê",
        "Bắn súng",
        "Bóp cổ"
      ],
      "answer": "Đẩy cô ngã vào đường ray trước đoàn tàu đang lao tới",
      "explanationVi": "Cảnh quay gây sốc mở đầu mùa 2 khẳng định Frank sẵn sàng thủ tiêu bất kỳ ai cản bước tiến tới quyền lực."
    },
    {
      "id": "hoc_8",
      "dialogueContext": "Doug Stamper cánh tay phải trung thành tuyệt đối và là người giải quyết mọi rắc rối:",
      "question": "Vai trò của Doug đối với Frank được ví như:",
      "options": [
        "Chief of Staff / Loyal fixer (Chánh văn phòng / Kẻ dọn dẹp hiện trường trung thành)",
        "A rival",
        "An enemy",
        "A journalist"
      ],
      "answer": "Chief of Staff / Loyal fixer (Chánh văn phòng / Kẻ dọn dẹp hiện trường trung thành)",
      "explanationVi": "Doug Stamper trung thành mù quáng, sẵn sàng làm mọi điều bẩn thỉu nhất để bảo vệ vợ chồng Underwood."
    },
    {
      "id": "hoc_9",
      "dialogueContext": "Claire Underwood người vợ tham vọng với vẻ ngoài thanh lịch như băng tuyết:",
      "question": "Mối quan hệ hôn nhân giữa Frank và Claire là sự kết hợp của:",
      "options": [
        "A ruthless political partnership (Một liên minh chính trị tàn nhẫn và bình đẳng)",
        "Romantic fairy tale",
        "A forced marriage",
        "A mistake"
      ],
      "answer": "A ruthless political partnership (Một liên minh chính trị tàn nhẫn và bình đẳng)",
      "explanationVi": "Họ là cặp đôi chính trị sắc lạnh, cùng nhau lập mưu từng bước thâu tóm Nhà Trắng."
    },
    {
      "id": "hoc_10",
      "dialogueContext": "Frank gài bẫy Phó Tổng thống Jim Matthews từ chức để về tranh cử Thống đốc bang Pennsylvania:",
      "question": "Mục đích sâu xa của kế hoạch này là để Frank đạt được vị trí nào?",
      "options": [
        "Vice President of the United States (Phó Tổng thống Hoa Kỳ)",
        "Mayor",
        "Senator",
        "Ambassador"
      ],
      "answer": "Vice President of the United States (Phó Tổng thống Hoa Kỳ)",
      "explanationVi": "Từng bước một, Frank bước lên chiếc ghế Phó Tổng thống mà không cần qua một cuộc bầu cử quốc dân nào."
    },
    {
      "id": "hoc_11",
      "dialogueContext": "Frank ngấm ngầm kích động mâu thuẫn giữa Tổng thống Garrett Walker và tỷ phú Raymond Tusk:",
      "question": "Chiến thuật thâm độc của Frank để buộc Tổng thống Walker phải từ chức vì bê bối là:",
      "options": [
        "Khai thác scandal quỹ đen rửa tiền thông qua casino của người Trung Quốc",
        "Bắt cóc Tổng thống",
        "Ám sát",
        "Bỏ độc"
      ],
      "answer": "Khai thác scandal quỹ đen rửa tiền thông qua casino của người Trung Quốc",
      "explanationVi": "Frank vừa đóng vai bạn thân khuyên giải, vừa bí mật tuồn tài liệu để Quốc hội tiến hành luận tội Tổng thống."
    },
    {
      "id": "hoc_12",
      "dialogueContext": "Khoảnh khắc Frank chính thức bước vào Phòng Bầu Dục với tư cách Tổng thống thứ 46 của Hoa Kỳ:",
      "question": "Hành động mang tính biểu tượng cuối cùng của Frank trên chiếc bàn Kiên Định (Resolute Desk) là gì?",
      "options": [
        "Gõ chiếc nhẫn hai lần xuống mặt bàn gỗ (*Knock knock*)",
        "Bật khóc",
        "Cười lớn",
        "Nhảy múa"
      ],
      "answer": "Gõ chiếc nhẫn hai lần xuống mặt bàn gỗ (*Knock knock*)",
      "explanationVi": "Hai tiếng gõ nhẫn vang dội kết thúc mùa 2 là tuyên ngôn quyền lực tối thượng của Frank Underwood."
    },
    {
      "id": "hoc_13",
      "dialogueContext": "Chính sách tạo việc làm đầy tranh cãi của Tổng thống Underwood mang tên là gì?",
      "question": "Chương trình việc làm lấy ngân sách từ quỹ cứu trợ thiên tai FEMA là:",
      "options": [
        "America Works (AmWorks)",
        "New Deal 2",
        "Jobs for All",
        "American Dream"
      ],
      "answer": "America Works (AmWorks)",
      "explanationVi": "'America Works' xóa bỏ trợ cấp thất nghiệp để ép mọi người đi làm, gây ra làn sóng biểu tình dữ dội."
    },
    {
      "id": "hoc_14",
      "dialogueContext": "Tổng thống Nga Viktor Petrov (hình mẫu mô phỏng Vladimir Putin) là đối thủ ngoại giao sừng sỏ:",
      "question": "Petrov thể hiện sự ngạo mạn của mình ngay trong bữa tiệc tại Nhà Trắng bằng hành động nào?",
      "options": [
        "Hôn Claire ngay trước mặt Frank và thách đấu uống rượu vodka",
        "Đập vỡ ly",
        "Bỏ về",
        "Chửi bới"
      ],
      "answer": "Hôn Claire ngay trước mặt Frank và thách đấu uống rượu vodka",
      "explanationVi": "Petrov nhìn thấu điểm yếu của Frank và dùng đòn tâm lý hạ nhục chính quyền Mỹ trong đàm phán Trung Đông."
    },
    {
      "id": "hoc_15",
      "dialogueContext": "Claire đòi hỏi quyền lực tương xứng và được bổ nhiệm làm:",
      "question": "Chức vụ ngoại giao quốc tế đầu tiên của Claire là:",
      "options": [
        "US Ambassador to the United Nations (Đại sứ Hoa Kỳ tại Liên Hợp Quốc)",
        "Secretary of State",
        "First Lady only",
        "Defense Minister"
      ],
      "answer": "US Ambassador to the United Nations (Đại sứ Hoa Kỳ tại Liên Hợp Quốc)",
      "explanationVi": "Claire không chấp nhận chỉ làm Đệ nhất Phu nhân đứng sau hậu trường mà muốn trực tiếp làm chính trị."
    },
    {
      "id": "hoc_16",
      "dialogueContext": "Frank bị ám sát hụt tại một buổi vận động tranh cử bởi một người biểu tình:",
      "question": "Frank bị bắn trúng nội tạng nào và suýt chết nếu không được ghép gan khẩn cấp?",
      "options": [
        "His liver (Gan)",
        "His heart",
        "His brain",
        "His leg"
      ],
      "answer": "His liver (Gan)",
      "explanationVi": "Doug Stamper đã dùng quyền lực đen tối để đẩy tên Frank lên đầu danh sách ghép tạng, gián tiếp cướp mạng sống của một bệnh nhân khác."
    },
    {
      "id": "hoc_17",
      "dialogueContext": "Claire tranh cử vị trí gì cùng liên danh với Frank trong cuộc bầu cử Tổng thống mới?",
      "question": "Cặp đôi vợ chồng lập nên kỷ lục lịch sử chưa từng có khi cùng là:",
      "options": [
        "President and Vice President (Tổng thống và Phó Tổng thống)",
        "Two Presidents",
        "Senators",
        "Governors"
      ],
      "answer": "President and Vice President (Tổng thống và Phó Tổng thống)",
      "explanationVi": "Frank và Claire tạo nên liên danh 'Underwood 2016' thâu tóm trọn vẹn hai vị trí lãnh đạo tối cao hành pháp."
    },
    {
      "id": "hoc_18",
      "dialogueContext": "Trước nguy cơ thất bại trong cuộc bầu cử trước ứng viên Will Conway:",
      "question": "Frank và Claire đã dùng thủ đoạn dơ bẩn nào để hoãn cuộc bỏ phiếu?",
      "options": [
        "Tạo ra sự hoảng loạn khủng bố giả mạo và thao túng an ninh mạng",
        "Đốt thùng phiếu",
        "Bắt cóc Conway",
        "Hối lộ toàn dân"
      ],
      "answer": "Tạo ra sự hoảng loạn khủng bố giả mạo và thao túng an ninh mạng",
      "explanationVi": "Lợi dụng nỗi sợ khủng bố để ban bố tình trạng khẩn cấp và phong tỏa các điểm bỏ phiếu bất lợi."
    },
    {
      "id": "hoc_19",
      "dialogueContext": "Frank từ chức để chuyển sang thao túng khu vực tư nhân, để lại chức Tổng thống cho Claire:",
      "question": "Claire tuyên bố lạnh lùng khi quay sang phá vỡ bức tường thứ tư ở tập cuối mùa 5:",
      "options": [
        "My turn. (Đến lượt tôi.)",
        "I miss Frank.",
        "God bless America.",
        "I quit."
      ],
      "answer": "My turn. (Đến lượt tôi.)",
      "explanationVi": "'My turn' - Claire từ chối ân xá cho Frank và khẳng định kỷ nguyên quyền lực tuyệt đối của riêng bà."
    },
    {
      "id": "hoc_20",
      "dialogueContext": "Biểu tượng ẩn dụ của tựa đề phim 'House of Cards' (Lâu đài thẻ bài):",
      "question": "Cụm từ 'House of Cards' phản ánh bản chất của quyền lực xây dựng trên sự dối trá như thế nào?",
      "options": [
        "Một cấu trúc mong manh, có thể sụp đổ tan tành chỉ với một quân bài bị rút ra",
        "Một pháo đài thép kiên cố vĩnh cửu",
        "Một trò chơi trẻ con vô hại",
        "Một ngôi nhà đắt tiền"
      ],
      "answer": "Một cấu trúc mong manh, có thể sụp đổ tan tành chỉ với một quân bài bị rút ra",
      "explanationVi": "Dù quyền lực có được xây dựng tinh vi và đồ sộ đến đâu, nó vẫn chỉ là lâu đài bằng thẻ bài dễ dàng sụp đổ trước sự thật."
    }
  ]
};
