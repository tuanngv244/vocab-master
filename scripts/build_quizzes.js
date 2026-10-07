const fs = require('fs');
const path = require('path');

// Helper to create a question
function q(id, dialogueContext, question, options, answer, explanationVi) {
  if (!options.includes(answer)) {
    throw new Error(`Answer "${answer}" not in options for ${id}`);
  }
  return { id, dialogueContext, question, options, answer, explanationVi };
}

// 24 film question banks
const filmQuizzes = {};

// 1. Finding Nemo (A1-A2)
filmQuizzes["finding-nemo"] = [
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

// Helper to quickly build 20 questions for another film
function buildQuizzesForFilm(id, filmName, questions) {
  filmQuizzes[id] = questions;
}

console.log("Saving quiz database generator...");
module.exports = { q, filmQuizzes };
