const fs = require('fs');
const path = require('path');

// Helper function
function q(id, dialogueContext, question, options, answer, explanationVi) {
  if (!options.includes(answer)) {
    throw new Error(`Answer "${answer}" not in options for ${id}`);
  }
  return { id, dialogueContext, question, options, answer, explanationVi };
}

const allQuizzes = {};

// 1. Finding Nemo (A1-A2)
allQuizzes["finding-nemo"] = [
  q("fn_1", "Khi Nemo chuẩn bị bơi ra mép rạn san hô, bố Marlin can ngăn vì sợ nguy hiểm.", "Từ nào chỉ rạn san hô trong tiếng Anh?", ["Coral reef", "Rainforest", "Desert", "Waterfall"], "Coral reef", "'Coral reef' nghĩa là rạn san hô, môi trường sống của cá hề Nemo."),
  q("fn_2", "Dory hát câu khẩu hiệu truyền cảm hứng khi Marlin tuyệt vọng.", "Điền từ vào câu nói nổi tiếng của Dory: 'Just keep _______!'", ["swimming", "running", "flying", "sleeping"], "swimming", "'Just keep swimming' (Cứ tiếp tục bơi đi) là câu thoại biểu tượng của Dory."),
  q("fn_3", "Dory giải thích với Marlin về căn bệnh hay quên của mình.", "Dory nói: 'I suffer from short-term _______ loss.'", ["memory", "money", "vision", "hearing"], "memory", "'Short-term memory loss' là chứng mất trí nhớ ngắn hạn."),
  q("fn_4", "Trong cuộc họp của bầy cá mập ăn chay, Bruce dẫn đầu đọc khẩu hiệu.", "Khẩu hiệu là: 'Fish are friends, not _______!'", ["food", "toys", "pets", "enemies"], "food", "'Fish are friends, not food' (Cá là bạn bè, không phải thức ăn)."),
  q("fn_5", "Người thợ lặn làm rơi vật dụng gì xuống biển có ghi địa chỉ P. Sherman 42 Wallaby Way Sydney?", "Vật dụng đó được gọi là gì?", ["Diver's mask (Kính lặn)", "Flippers (Chân vịt)", "Oxygen tank (Bình dưỡng khí)", "Camera (Máy ảnh)"], "Diver's mask (Kính lặn)", "Chiếc kính lặn có khắc địa chỉ phòng khám nha khoa Sydney."),
  q("fn_6", "Khi bầy mòng biển nhìn thấy con mồi, chúng đồng thanh kêu một từ duy nhất.", "Bầy mòng biển liên tục hét lên từ gì?", ["Mine!", "Fish!", "Run!", "Jump!"], "Mine!", "'Mine!' (Của tao!) là tiếng kêu đặc trưng của bầy hải âu ở cảng Sydney."),
  q("fn_7", "Marlin dặn Nemo: 'The ocean is dangerous.'", "Từ trái nghĩa với 'dangerous' (nguy hiểm) là gì?", ["Safe", "Deep", "Dark", "Huge"], "Safe", "'Safe' nghĩa là an toàn, đối lập với 'dangerous'."),
  q("fn_8", "Rùa biển Crush xưng hô thân mật với Marlin bằng từ lóng của dân lướt sóng.", "Crush thường gọi Marlin là gì?", ["Dude", "Sir", "Master", "Professor"], "Dude", "'Dude' là từ lóng tiếng Mỹ nghĩa là anh bạn, bồ tèo."),
  q("fn_9", "Dory thử giao tiếp với loài sinh vật khổng lồ dưới đáy biển bằng cách nhại giọng kéo dài.", "Dory đã cố nói tiếng của loài vật nào?", ["Whale (Cá voi)", "Shark (Cá mập)", "Dolphin (Cá heo)", "Octopus (Bạch tuộc)"], "Whale (Cá voi)", "Dory tin rằng mình có thể nói 'tiếng Cá voi' (Whale language)."),
  q("fn_10", "Dòng hải lưu đưa Marlin và Dory tới Sydney với tốc độ cực nhanh tên là gì?", "Từ viết tắt của dòng hải lưu Đông Úc là gì?", ["EAC (East Australian Current)", "NASA", "FBI", "WHO"], "EAC (East Australian Current)", "EAC là viết tắt của 'East Australian Current'."),
  q("fn_11", "Khi các chú cá trong bể kính nha sĩ lên kế hoạch tẩu thoát.", "Từ tiếng Anh nào mang nghĩa 'tẩu thoát, trốn thoát'?", ["Escape", "Arrive", "Remain", "Destroy"], "Escape", "'Escape' nghĩa là cuộc tẩu thoát, trốn thoát khỏi nguy hiểm."),
  q("fn_12", "Cá hề bố Marlin được gọi trong tiếng Anh là gì?", "Tên tiếng Anh của loài cá hề là gì?", ["Clownfish", "Goldfish", "Jellyfish", "Starfish"], "Clownfish", "'Clownfish' nghĩa là cá hề."),
  q("fn_13", "Bác bồ nông Nigel cứu Marlin và Dory khỏi lũ mòng biển.", "Từ tiếng Anh chỉ loài chim 'bồ nông' là gì?", ["Pelican", "Seagull", "Penguin", "Eagle"], "Pelican", "'Pelican' nghĩa là chim bồ nông mỏ to."),
  q("fn_14", "Khi Nemo bị kẹt trong lưới đánh cá cùng đàn cá, cậu đã bảo mọi người làm gì?", "Nemo bảo đàn cá: 'Swim _______ together!'", ["down", "up", "away", "back"], "down", "'Swim down!' (Bơi chúc đầu xuống dưới!) để làm đứt lưới tàu cá."),
  q("fn_15", "Vùng rạn san hô rực rỡ nơi Marlin và Nemo sinh sống lúc đầu gọi là gì?", "Từ tiếng Anh chỉ rạn san hô là gì?", ["Great Barrier Reef", "Sahara", "Amazon", "Niagara"], "Great Barrier Reef", "Rạn san hô Great Barrier Reef ở bờ biển nước Úc."),
  q("fn_16", "Nemo có một bên vây nhỏ bơi chậm hơn, được bố gọi yêu thương là gì?", "Chiếc vây may mắn của Nemo được gọi là gì?", ["Lucky fin", "Magic fin", "Super fin", "Baby fin"], "Lucky fin", "'Lucky fin' là chiếc vây may mắn đặc biệt của Nemo."),
  q("fn_17", "Khi Dory nói: 'I can read!', từ 'read' thuộc thì và dạng động từ nào?", "Động từ 'read' sau trợ động từ khuyết thiếu 'can' ở dạng nào?", ["Nguyên thể không 'to' (Bare infinitive)", "V-ing", "Quá khứ phân từ", "To-infinitive"], "Nguyên thể không 'to' (Bare infinitive)", "Sau trợ động từ khuyết thiếu (can/could/should) ta dùng động từ nguyên thể không 'to'."),
  q("fn_18", "Gill - chú cá dẫn đầu trong bể kính có tính cách thế nào?", "Từ nào miêu tả đúng nhất tính cách dũng cảm, kiên định của Gill?", ["Brave and determined", "Cowardly and shy", "Lazy and sleepy", "Careless and noisy"], "Brave and determined", "'Brave and determined' (Dũng cảm và quả quyết)."),
  q("fn_19", "Darla - cô cháu gái nha sĩ đeo niềng răng mà lũ cá trong bể rất khiếp sợ.", "Từ tiếng Anh chỉ 'niềng răng nha khoa' là gì?", ["Braces", "Glasses", "Gloves", "Boots"], "Braces", "'Braces' là mắc cài, niềng răng trong nha khoa."),
  q("fn_20", "Bài học sâu sắc nhất Marlin học được từ rùa bố Crush trong chuyến đi tìm con là gì?", "Marlin học được điều gì về cách nuôi dạy con cái?", ["Phải tin tưởng và để con tự lập trải nghiệm", "Cấm đoán con không được bơi xa", "Nhờ người khác nuôi con", "Không bao giờ nói chuyện với con"], "Phải tin tưởng và để con tự lập trải nghiệm", "Crush dạy Marlin rằng con cái cần được vấp ngã và tự học cách đứng lên.")
];

// 2. Peppa Pig (A1-A2)
allQuizzes["peppa-pig"] = [
  q("pp_1", "Trò chơi yêu thích số một của Heo Peppa mỗi khi trời mưa là gì?", "Peppa loves jumping in muddy _______.", ["puddles", "rivers", "swimming pools", "oceans"], "puddles", "'Muddy puddles' là những vũng bùn lầy sau cơn mưa."),
  q("pp_2", "Mẹ Heo dặn Peppa trước khi ra ngoài nghịch bùn:", "If you jump in muddy puddles, you must wear your _______.", ["boots", "hat", "gloves", "glasses"], "boots", "'Boots' là đôi ủng đi mưa bảo vệ chân."),
  q("pp_3", "Món đồ chơi em bé George yêu thích nhất và luôn ôm bên mình là gì?", "Món đồ chơi của George là gì?", ["Mr. Dinosaur", "Teddy Bear", "Toy Car", "Robot"], "Mr. Dinosaur", "'Mr. Dinosaur' là chú khủng long xanh của bé George."),
  q("pp_4", "Khi Daddy Pig tự hào về khả năng làm việc nhà của mình, ông thường nói câu cửa miệng nào?", "Daddy Pig tự nhận: 'I am a bit of an _______ at this.'", ["expert", "amateur", "alien", "actor"], "expert", "'Expert' nghĩa là chuyên gia, người sành sỏi."),
  q("pp_5", "Âm thanh tiếng kêu đặc trưng của gia đình Heo Peppa mỗi khi cười là gì?", "Tiếng khịt mũi trong tiếng Anh là gì?", ["Snort", "Meow", "Bark", "Chirp"], "Snort", "'Snort' là tiếng khịt mũi đặc trưng của loài heo."),
  q("pp_6", "Bà Heo (Granny Pig) nuôi những con vật gì trong chuồng ngoài vườn?", "Từ tiếng Anh chỉ 'những con gà' là gì?", ["Chickens", "Lions", "Monkeys", "Tigers"], "Chickens", "'Chickens' là bầy gà đẻ trứng của bà Heo."),
  q("pp_7", "Người bạn thân nhất của Peppa ở lớp mẫu giáo là ai?", "Người bạn thân nhất là cừu Suzy tên tiếng Anh là gì?", ["Suzy Sheep", "Danny Dog", "Pedro Pony", "Rebecca Rabbit"], "Suzy Sheep", "Suzy Sheep (Bạn Cừu Suzy) là bạn thân của Peppa."),
  q("pp_8", "Cô giáo dạy lớp mẫu giáo của Peppa là ai?", "Tên cô giáo dạy mẫu giáo là gì?", ["Madame Gazelle", "Doctor Elephant", "Mister Bull", "Mister Fox"], "Madame Gazelle", "Madame Gazelle là cô giáo linh dương dạy nhạc và vẽ."),
  q("pp_9", "Bác nha sĩ khám răng cho Peppa và George tên là gì?", "Tên của bác sĩ voi là gì?", ["Dr. Elephant", "Dr. Bear", "Dr. Cat", "Dr. Dog"], "Dr. Elephant", "Dr. Elephant là bác sĩ nha khoa khám răng cho các bạn nhỏ."),
  q("pp_10", "Daddy Pig thường xuyên làm mất đồ vật gì và cả nhà phải đi tìm giúp?", "Daddy Pig hay để quên món đồ gì?", ["Glasses (Mắt kính)", "Shoes (Giày)", "Watch (Đồng hồ)", "Wallet (Ví tiền)"], "Glasses (Mắt kính)", "Daddy Pig rất hay để quên cặp kính mắt của mình."),
  q("pp_11", "Ông Heo (Grandpa Pig) có sở thích gì đặc biệt trong vườn?", "Grandpa Pig rất thích làm công việc gì?", ["Gardening (Làm vườn)", "Cooking (Nấu ăn)", "Painting (Vẽ tranh)", "Singing (Ca hát)"], "Gardening (Làm vườn)", "Grandpa Pig rất mê trồng rau củ quả trong vườn nhà."),
  q("pp_12", "Phương tiện giao thông của ông Heo mà Peppa rất thích đi cùng là gì?", "Chiếc thuyền nhỏ của ông Heo trong tiếng Anh là gì?", ["Boat", "Airplane", "Helicopter", "Submarine"], "Boat", "Grandpa Pig sở hữu một chiếc thuyền gỗ nhỏ đi dạo trên sông."),
  q("pp_13", "Món ăn ngọt mà Peppa và các bạn nhỏ cực kỳ háo hức trong tiệc sinh nhật là gì?", "Từ tiếng Anh chỉ 'bánh kem sinh nhật' là gì?", ["Birthday cake", "Pizza", "Salad", "Soup"], "Birthday cake", "'Birthday cake' là bánh kem sinh nhật."),
  q("pp_14", "Khi trời có tuyết rơi, các bạn nhỏ rủ nhau chơi trò nặn người tuyết.", "Từ tiếng Anh chỉ 'người tuyết' là gì?", ["Snowman", "Sandcastle", "Scarecrow", "Statue"], "Snowman", "'Snowman' là người tuyết đắp bằng tuyết trắng."),
  q("pp_15", "Khi George khóc nhè, mắt cậu thường bắn ra những giọt nước mắt thế nào?", "George khóc nước mắt bắn ra thành hình tia vòi rồng, câu miêu tả là:", ["Fountains of tears", "Fire of tears", "Clouds of dust", "Smiles of joy"], "Fountains of tears", "Phim hoạt hình miêu tả nước mắt George bắn ra như đài phun nước."),
  q("pp_16", "Ngôi nhà của gia đình Peppa nằm ở vị trí địa hình nào?", "Ngôi nhà của gia đình Peppa nằm ở đâu?", ["On top of a hill (Trên đỉnh đồi)", "Under the sea", "In a dark cave", "In a high tree"], "On top of a hill (Trên đỉnh đồi)", "Ngôi nhà màu vàng của Peppa tọa lạc ngay trên đỉnh một ngọn đồi xanh cỏ."),
  q("pp_17", "Từ tiếng Anh miêu tả động tác 'nhảy lên nhảy xuống' trong vũng nước là gì?", "Cụm từ tiếng Anh là gì?", ["Jumping up and down", "Sitting still", "Lying down", "Sleeping quiet"], "Jumping up and down", "'Jumping up and down' nghĩa là nhảy tưng bừng lên xuống."),
  q("pp_18", "Màu sắc chiếc váy liền thân quen thuộc mà Peppa mặc hàng ngày là màu gì?", "Peppa mặc váy màu gì?", ["Red (Màu đỏ)", "Green (Màu xanh lá)", "Yellow (Màu vàng)", "Black (Màu đen)"], "Red (Màu đỏ)", "Peppa Pig luôn mặc chiếc váy màu đỏ đặc trưng."),
  q("pp_19", "Cậu em trai George mặc trang phục màu gì?", "George mặc áo màu gì?", ["Blue (Màu xanh dương)", "Pink (Màu hồng)", "Purple (Màu tím)", "White (Màu trắng)"], "Blue (Màu xanh dương)", "George mặc bộ đồ màu xanh dương tươi sáng."),
  q("pp_20", "Ở cuối mỗi tập phim, cả gia đình Peppa thường làm gì trên mặt đất khi cùng nhau cười vang?", "Họ thường làm gì khi cười sảng khoái?", ["Fall over on their backs laughing", "Run away fast", "Cry out loud", "Hide behind the tree"], "Fall over on their backs laughing", "Cả nhà Peppa luôn ngã lăn ra cười nghiêng ngả trên bãi cỏ.")
];

// Export object for generation
module.exports = { allQuizzes, q };
