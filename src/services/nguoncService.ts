/**
 * Service tích hợp API phim từ phim.nguonc.com
 * Cung cấp nguồn phát phim thật, phim bộ đầy đủ tập và tìm kiếm phim trực tiếp
 */

import { FilmEpisode } from "../data_film_episodes";
import type { FilmItem, FilmVocabulary, FilmQuote, FilmQuizQuestion } from "../data_films";

export interface NguoncEpisodeItem {
  name: string;
  slug: string;
  embed: string;
  m3u8?: string;
}

export interface NguoncEpisodeServer {
  server_name: string;
  items: NguoncEpisodeItem[];
}

export interface NguoncMovieDetail {
  id: string | number;
  name: string;
  original_name: string;
  slug: string;
  year: string | number;
  description: string;
  total_episodes: number;
  current_episode: string;
  time: string;
  quality: string;
  language: string;
  director?: string | null;
  casts?: string;
  poster_url?: string;
  thumb_url?: string;
  episodes: NguoncEpisodeServer[];
}

export interface NguoncSearchItem {
  name: string;
  original_name: string;
  slug: string;
  year: string;
  description: string;
  total_episodes: number;
  current_episode: string;
  time: string;
  quality: string;
  language: string;
  thumb_url?: string;
  poster_url?: string;
}

// Map các phim học tiếng Anh sang slug phim chuẩn trên Nguồn C
export const FILM_NGUONC_SLUG_MAP: Record<string, string> = {
  // Level A1-A2
  "finding-nemo": "di-tim-nemo",
  "zootopia": "zootopia",
  "lion-king": "vua-su-tu",
  "toy-story": "cau-chuyen-do-choi-3",
  "extra-english": "tieng-anh-la-chuyen-nho",
  "we-bare-bears": "chung-toi-don-gian-la-gau-the-movie",
  "peppa-pig": "heo-peppa",
  "modern-family": "gia-dinh-hien-dai",

  // Level B1-B2
  "how-i-met-your-mother": "khi-bo-gap-me-phan-8", // 24 tập full
  "the-big-bang-theory": "hoc-thuyet-vu-no-lon-phan-7", // 24 tập full
  "the-intern": "bo-gia-hoc-viec",
  "inside-out": "nhung-manh-ghep-cam-xuc",
  "forrest-gump": "cuoc-doi-forrest-gump",
  "harry-potter-1": "harry-potter-va-bao-boi-tu-than-phan-2",
  "friends": "my-best-friends-exorcism",
  "soul": "cuoc-song-nhiem-mau",

  // Level C1-C2
  "suits": "to-tung-phan-6", // 16 tập full
  "sherlock": "sherlock-holmes-phan-5", // 6 tập full
  "the-crown": "hoang-quyen-phan-1", // 10 tập full
  "house-of-cards": "van-bai-chinh-tri-phan-4", // 13 tập full
  "oppenheimer": "oppenheimer", // Bản Full
  "inception": "ke-danh-cap-giac-mo", // Bản Full
  "the-social-network": "mang-xa-hoi", // Bản Full
  "the-kings-speech": "nha-vua-noi-lap" // Bản Full
};

// Cache lưu trong phiên làm việc
const memoryCache: Record<string, NguoncMovieDetail> = {};

/**
 * Lấy chi tiết phim và danh sách tập thật từ phim.nguonc.com
 */
export async function fetchNguoncFilmDetail(slug: string): Promise<NguoncMovieDetail | null> {
  if (!slug) return null;

  if (memoryCache[slug]) {
    return memoryCache[slug];
  }

  // Thử đọc từ localStorage cache
  try {
    const cachedStr = localStorage.getItem(`nguonc_film_${slug}`);
    if (cachedStr) {
      const parsed = JSON.parse(cachedStr);
      memoryCache[slug] = parsed;
      return parsed;
    }
  } catch (e) {
    // ignore
  }

  try {
    const res = await fetch(`https://phim.nguonc.com/api/film/${encodeURIComponent(slug)}`);
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status === "success" && data.movie) {
      const movie: NguoncMovieDetail = data.movie;
      memoryCache[slug] = movie;
      try {
        localStorage.setItem(`nguonc_film_${slug}`, JSON.stringify(movie));
      } catch (e) {
        // storage full
      }
      return movie;
    }
    return null;
  } catch (err) {
    console.warn(`Lỗi khi fetch phim từ Nguồn C (slug: ${slug}):`, err);
    return null;
  }
}

/**
 * Tìm kiếm phim trực tiếp từ kho phim Nguồn C
 */
export async function searchNguoncFilms(keyword: string): Promise<NguoncSearchItem[]> {
  if (!keyword || !keyword.trim()) return [];

  try {
    const res = await fetch(`https://phim.nguonc.com/api/films/search?keyword=${encodeURIComponent(keyword.trim())}`);
    if (!res.ok) return [];

    const data = await res.json();
    if (data.items && Array.isArray(data.items)) {
      return data.items;
    }
    return [];
  } catch (err) {
    console.warn("Lỗi khi tìm kiếm Nguồn C:", err);
    return [];
  }
}

/**
 * Hợp nhất danh sách tập từ Nguồn C (chiếu đủ full các tập) với dữ liệu bài học
 */
export async function getEnrichedEpisodesFromNguonc(
  filmId: string,
  fallbackEpisodes: FilmEpisode[]
): Promise<{ episodes: FilmEpisode[]; isNguoncSource: boolean; totalAvailable: number }> {
  const slug = FILM_NGUONC_SLUG_MAP[filmId];
  if (!slug) {
    return { episodes: fallbackEpisodes, isNguoncSource: false, totalAvailable: fallbackEpisodes.length };
  }

  const nguoncMovie = await fetchNguoncFilmDetail(slug);
  if (!nguoncMovie || !nguoncMovie.episodes || nguoncMovie.episodes.length === 0) {
    return { episodes: fallbackEpisodes, isNguoncSource: false, totalAvailable: fallbackEpisodes.length };
  }

  const server = nguoncMovie.episodes[0];
  const items = server?.items;

  if (!items || items.length === 0) {
    return { episodes: fallbackEpisodes, isNguoncSource: false, totalAvailable: fallbackEpisodes.length };
  }

  // Chuyển đổi danh sách tập Nguồn C sang format FilmEpisode
  const enriched: FilmEpisode[] = items.map((item, index) => {
    // Kiểm tra xem có tập mẫu học tập tương ứng không
    const matchingFallback = fallbackEpisodes[index] || fallbackEpisodes[0];
    const epNum = index + 1;
    const isSingleFull = item.name.toLowerCase() === "full";

    return {
      id: `${filmId}-nguonc-ep${epNum}`,
      episodeNumber: epNum,
      title: isSingleFull ? `Bản Phim Đầy Đủ (Full Movie)` : `Tập ${item.name}: ${matchingFallback?.title || `Episode ${epNum}`}`,
      titleVi: isSingleFull ? `Xem trọn vẹn bản Full HD Vietsub từ Nguồn C` : (matchingFallback?.titleVi || `Tập ${epNum}`),
      duration: matchingFallback?.duration || nguoncMovie.time || "45:00",
      durationSeconds: matchingFallback?.durationSeconds || 2700,
      descriptionVi: matchingFallback?.descriptionVi || nguoncMovie.description || `Thưởng thức trọn vẹn tập ${item.name} chất lượng cao từ Nguồn C.`,
      videoUrl: matchingFallback?.videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: matchingFallback?.youtubeId || "y9FGsJ3PYVw",
      embedUrl: item.embed, // URL phát trực tiếp Nguồn C
      timestamps: matchingFallback?.timestamps || [
        { time: 30, label: "00:30", en: "Let's learn English while watching this episode!", vi: "Hãy cùng học tiếng Anh thật hào hứng với tập phim này!" },
        { time: 90, label: "01:30", en: "Pay attention to native accents and daily expressions.", vi: "Lưu ý nghe kỹ ngữ điệu bản xứ và các cách diễn đạt thường ngày." }
      ]
    };
  });

  return {
    episodes: enriched,
    isNguoncSource: true,
    totalAvailable: enriched.length
  };
}

/**
 * Chuyển đổi một bộ phim từ API Nguồn C thành một FilmItem đầy đủ bài học,
 * bao gồm danh sách đầy đủ các tập phim, bộ từ vựng, câu thoại và 20 câu hỏi thử thách.
 */
export function createFilmItemFromNguoncMovie(movie: NguoncMovieDetail): FilmItem {
  const filmId = `online-${movie.slug}`;
  const server = movie.episodes?.[0];
  const items = server?.items || [];

  const episodes: FilmEpisode[] = items.map((item, idx) => {
    const epNum = idx + 1;
    const isSingleFull = item.name.toLowerCase() === "full";
    return {
      id: `${filmId}-ep${epNum}`,
      episodeNumber: epNum,
      title: isSingleFull ? `Bản Phim Trọn Vẹn (${movie.name})` : `Tập ${item.name}: ${movie.original_name || movie.name}`,
      titleVi: isSingleFull ? `Xem trọn vẹn bản Full HD Vietsub từ Nguồn C` : `Tập ${item.name} - Vietsub Full HD`,
      duration: movie.time || "45:00",
      durationSeconds: 2700,
      descriptionVi: movie.description || `Xem tập ${item.name} của ${movie.name} trên Nguồn C`,
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      youtubeId: "y9FGsJ3PYVw",
      embedUrl: item.embed,
      timestamps: [
        { time: 30, label: "00:30", en: "Let's learn English while watching this episode!", vi: "Hãy cùng học tiếng Anh thật hào hứng với tập phim này!" },
        { time: 120, label: "02:00", en: "Listen closely to authentic dialogue and expressions.", vi: "Lắng nghe kỹ cách diễn đạt tự nhiên của nhân vật." }
      ]
    };
  });

  const yearNum = typeof movie.year === "number" ? movie.year : parseInt(String(movie.year)) || 2023;
  const isSeries = items.length > 1;

  // 10 từ vựng cốt lõi cho phim
  const vocabularies: FilmVocabulary[] = [
    {
      word: "plot twist",
      phonetic: "/plɒt twɪst/",
      meaningVi: "Bước ngoặt cốt truyện bất ngờ, đảo ngược kỳ vọng của người xem",
      exampleSentence: "The season finale ended with an unbelievable plot twist.",
      exampleVi: "Tập cuối mùa đã kết thúc bằng một cú lội ngược dòng cốt truyện không thể tin nổi."
    },
    {
      word: "cliffhanger",
      phonetic: "/ˈklɪfˌhæŋ.ər/",
      meaningVi: "Cái kết lửng lơ gây tò mò, nghẹt thở chờ tập kế tiếp",
      exampleSentence: "The episode leaves the viewers on a massive cliffhanger.",
      exampleVi: "Tập phim để lại cho khán giả một cái kết lơ lửng đầy kịch tính."
    },
    {
      word: "subtle",
      phonetic: "/ˈsʌt.əl/",
      meaningVi: "Tinh tế, kín đáo, không quá lộ liễu (diễn xuất, chi tiết phim)",
      exampleSentence: "Her facial expression showed subtle hints of grief.",
      exampleVi: "Biểu cảm khuôn mặt của cô ấy thể hiện những nét đau buồn rất tinh tế."
    },
    {
      word: "binge-watch",
      phonetic: "/ˈbɪndʒ wɒtʃ/",
      meaningVi: "Cày phim liên tục nhiều tập trong một khoảng thời gian ngắn",
      exampleSentence: "I stayed up all night to binge-watch this entire series.",
      exampleVi: "Tôi đã thức cả đêm để cày hết bộ phim truyền hình này."
    },
    {
      word: "cinematography",
      phonetic: "/ˌsɪn.ə.məˈtɒɡ.rə.fi/",
      meaningVi: "Nghệ thuật quay phim, góc quay và ánh sáng điện ảnh",
      exampleSentence: "The cinematography in this film was visually stunning.",
      exampleVi: "Nghệ thuật quay phim trong tác phẩm này đẹp đến choáng ngợp."
    },
    {
      word: "compelling",
      phonetic: "/kəmˈpel.ɪŋ/",
      meaningVi: "Hấp dẫn, lôi cuốn, thuyết phục đến mức không thể rời mắt",
      exampleSentence: "The main character has a deeply compelling backstory.",
      exampleVi: "Nhân vật chính có một câu chuyện quá khứ vô cùng lôi cuốn."
    },
    {
      word: "dialogue",
      phonetic: "/ˈdaɪ.ə.lɒɡ/",
      meaningVi: "Lời thoại, cuộc trò chuyện giữa các nhân vật trong tác phẩm",
      exampleSentence: "The movie is famous for its fast-paced, witty dialogue.",
      exampleVi: "Bộ phim nổi tiếng nhờ những câu thoại nhanh và dí dỏm."
    },
    {
      word: "understatement",
      phonetic: "/ˌʌn.dəˈsteɪt.mənt/",
      meaningVi: "Cách nói giảm nói tránh, miêu tả sự việc nhẹ hơn thực tế",
      exampleSentence: "Saying this mission was dangerous is a huge understatement.",
      exampleVi: "Nói rằng nhiệm vụ này nguy hiểm vẫn là quá nhẹ so với thực tế."
    },
    {
      word: "redemption",
      phonetic: "/rɪˈdemp.ʃən/",
      meaningVi: "Sự chuộc lỗi, hoàn lương, cứu rỗi phẩm giá nhân vật",
      exampleSentence: "His entire journey is a path toward self-redemption.",
      exampleVi: "Toàn bộ hành trình của anh ấy là con đường tìm kiếm sự chuộc lỗi."
    },
    {
      word: "foreshadow",
      phonetic: "/fɔːˈʃæd.əʊ/",
      meaningVi: "Điềm báo trước, gài cắm manh mối về biến cố tương lai",
      exampleSentence: "The opening scene foreshadows the tragic ending.",
      exampleVi: "Cảnh mở đầu đã gài gắm điềm báo về cái kết bi thương phía sau."
    }
  ];

  // 4 câu thoại then chốt
  const quotes: FilmQuote[] = [
    {
      en: "Every story has a beginning, but some secrets never stay buried.",
      vi: "Mọi câu chuyện đều có khởi đầu, nhưng có những bí mật không bao giờ chịu chôn vùi.",
      character: movie.original_name || movie.name,
      explanationVi: "Lời dẫn then chốt thể hiện mâu thuẫn trung tâm và chiều sâu tâm lý của bộ phim. Cụm 'stay buried' dùng dạng bị động với trạng thái tồn tại kéo dài của bí mật."
    },
    {
      en: "When you have nothing left to lose, that is when you find your true courage.",
      vi: "Khi bạn không còn gì để mất, đó là lúc bạn tìm thấy lòng dũng cảm chân chính.",
      character: "Nhân vật chính",
      explanationVi: "Khoảnh khắc nhân vật đưa ra quyết định bước ngoặt để đối mặt với thử thách cam go. Cấu trúc 'have nothing left to lose' là thành ngữ kinh điển miêu tả sự kiên định tột cùng."
    },
    {
      en: "Actions define who we are far more than our promises ever could.",
      vi: "Hành động định nghĩa chúng ta là ai rõ ràng hơn rất nhiều so với những lời hứa hẹn.",
      character: "Nhân vật trung tâm",
      explanationVi: "Cuộc đối thoại trực diện khẳng định giá trị của việc làm thực tế so với lời nói suông. 'Far more than' là cấu trúc so sánh tăng tiến nhấn mạnh mức độ áp đảo của vế trước."
    },
    {
      en: "The hardest battles are the ones we fight within ourselves.",
      vi: "Những trận chiến cam go nhất chính là trận chiến ta phải chiến đấu trong chính nội tâm.",
      character: "Thông điệp bộ phim",
      explanationVi: "Đúc kết triết lý sống và quá trình vượt qua khủng hoảng tâm lý của nhân vật. Cụm danh từ 'the ones we fight' giản lược đại từ quan hệ 'that / which'."
    }
  ];

  // Tạo 20 câu hỏi thử thách tương tác chuẩn mực
  const quiz: FilmQuizQuestion[] = [
    {
      id: `${filmId}-q1`,
      dialogueContext: `Trong phân cảnh đối thoại mở đầu của phim ${movie.name}:`,
      question: "Cụm từ nào đồng nghĩa với 'plot twist' khi nói về diễn biến kịch tính?",
      options: ["An unexpected turn of events", "A predictable ending", "A boring conversation", "A character background"],
      answer: "An unexpected turn of events",
      explanationVi: "'Plot twist' nghĩa là bước ngoặt bất ngờ trong cốt truyện, đồng nghĩa với 'an unexpected turn of events'."
    },
    {
      id: `${filmId}-q2`,
      dialogueContext: "Khi nhân vật bị đẩy vào tình thế ngàn cân treo sợi tóc cuối tập phim:",
      question: "Thuật ngữ điện ảnh miêu tả cái kết nghẹt thở làm người xem háo hức chờ tập sau là:",
      options: ["Cliffhanger", "Flashback", "Epilogue", "Prologue"],
      answer: "Cliffhanger",
      explanationVi: "'Cliffhanger' chỉ kết thúc lửng lơ đầy hồi hộp để cuốn hút khán giả đón xem tập tiếp theo."
    },
    {
      id: `${filmId}-q3`,
      dialogueContext: "Nhân vật nhận xét về mức độ nguy hiểm: 'Saying this was risky is an understatement':",
      question: "'Understatement' mang ý nghĩa gì trong ngữ cảnh hội thoại?",
      options: ["Cách nói giảm nói tránh thực tế", "Lời nói dối trắng trợn", "Sự cường điệu phóng đại", "Lời khen ngợi trang trọng"],
      answer: "Cách nói giảm nói tránh thực tế",
      explanationVi: "'Understatement' là cách diễn đạt nhẹ nhàng hơn so với mức độ thật sự nghiêm trọng của sự việc."
    },
    {
      id: `${filmId}-q4`,
      dialogueContext: "Hai người bạn rủ nhau thức đêm xem liền một mạch bộ phim này:",
      question: "Động từ tiếng Anh tự nhiên nhất cho hành động 'cày phim liên tục' là:",
      options: ["Binge-watch", "Over-look", "Fast-scan", "Multi-view"],
      answer: "Binge-watch",
      explanationVi: "'Binge-watch' là động từ chuẩn quốc tế chỉ việc xem liên tù tì nhiều tập phim."
    },
    {
      id: `${filmId}-q5`,
      dialogueContext: "Đạo diễn dùng chi tiết chiếc đồng hồ vỡ ở đầu phim để ám chỉ thảm kịch sau này:",
      question: "Thủ pháp nghệ thuật gài cắm điềm báo trước này được gọi là:",
      options: ["Foreshadowing", "Monologue", "Parody", "Sarcasm"],
      answer: "Foreshadowing",
      explanationVi: "'Foreshadow' (điềm báo) là biện pháp cài cắm manh mối về sự kiện sẽ xảy ra trong tương lai."
    },
    {
      id: `${filmId}-q6`,
      dialogueContext: "Nhân vật thốt lên: 'We need to keep a low profile until things calm down!':",
      question: "Thành ngữ 'keep a low profile' có nghĩa là gì?",
      options: ["Tránh gây chú ý, giữ kín tung tích", "Hạ thấp tiêu chuẩn công việc", "Cúi đầu chào người khác", "Giảm âm lượng tivi"],
      answer: "Tránh gây chú ý, giữ kín tung tích",
      explanationVi: "'Keep a low profile' nghĩa là giữ mình kín đáo, tránh thu hút sự chú ý của người xung quanh."
    },
    {
      id: `${filmId}-q7`,
      dialogueContext: "Khi nhân vật trải qua hành trình hối lỗi và làm lại cuộc đời:",
      question: "Từ vựng nào diễn tả sự chuộc lỗi và hoàn lương đạo đức?",
      options: ["Redemption", "Corruption", "Deception", "Suspension"],
      answer: "Redemption",
      explanationVi: "'Redemption' có nghĩa là sự chuộc lỗi, cứu rỗi phẩm giá sau những sai lầm."
    },
    {
      id: `${filmId}-q8`,
      dialogueContext: "Nhân vật nói: 'I can't make heads or tails of this situation!':",
      question: "Thành ngữ 'can't make heads or tails of' thể hiện trạng thái gì?",
      options: ["Hoàn toàn không hiểu đầu đuôi sự việc ra sao", "Đang tung đồng xu may rủi", "Rất hào hứng tham gia", "Đã nắm rõ toàn bộ kế hoạch"],
      answer: "Hoàn toàn không hiểu đầu đuôi sự việc ra sao",
      explanationVi: "'Cannot make heads or tails of sth' là thành ngữ diễn tả sự bối rối, không thể hiểu nổi chuyện gì đang diễn ra."
    },
    {
      id: `${filmId}-q9`,
      dialogueContext: "Lời khen ngợi về cốt truyện: 'The storyline is absolutely compelling!':",
      question: "Tính từ 'compelling' có nghĩa tương đương với từ nào?",
      options: ["Captivating and persuasive", "Tedious and boring", "Confusing and chaotic", "Repetitive"],
      answer: "Captivating and persuasive",
      explanationVi: "'Compelling' mang nghĩa lôi cuốn, thuyết phục đến mức không thể rời mắt (captivating)."
    },
    {
      id: `${filmId}-q10`,
      dialogueContext: "Nhân vật thám tử khuyên đồng đội: 'Take everything he says with a grain of salt!':",
      question: "Lời khuyên 'take sth with a grain of salt' khuyên người nghe nên:",
      options: ["Tiếp nhận thông tin với sự hoài nghi, chớ vội tin hoàn toàn", "Cho thêm chút muối vào bữa ăn", "Ghi nhớ từng câu từng chữ", "Từ chối lắng nghe"],
      answer: "Tiếp nhận thông tin với sự hoài nghi, chớ vội tin hoàn toàn",
      explanationVi: "'Take sth with a grain of salt' nghĩa là nghe có chọn lọc và cẩn trọng hoài nghi tính xác thực."
    },
    {
      id: `${filmId}-q11`,
      dialogueContext: "Nhân vật bộc bạch: 'I decided to bite the bullet and tell the truth':",
      question: "'Bite the bullet' miêu tả hành động gì trong tình thế khó xử?",
      options: ["Cắn răng chấp nhận làm một việc gian nan cần thiết", "Hành động thiếu suy nghĩ", "Bỏ cuộc giữa chừng", "Tìm kiếm sự trợ giúp"],
      answer: "Cắn răng chấp nhận làm một việc gian nan cần thiết",
      explanationVi: "'Bite the bullet' nghĩa là nghiến răng cam chịu thực hiện việc khó khăn mà mình từng né tránh."
    },
    {
      id: `${filmId}-q12`,
      dialogueContext: "Khi phân tích nghệ thuật quay phim và góc máy xuất sắc của tác phẩm:",
      question: "Thuật ngữ chuyên môn nào chỉ nghệ thuật hình ảnh và quay phim?",
      options: ["Cinematography", "Choreography", "Typography", "Cartography"],
      answer: "Cinematography",
      explanationVi: "'Cinematography' là thuật ngữ điện ảnh chỉ nghệ thuật quay phim, ánh sáng và góc máy."
    },
    {
      id: `${filmId}-q13`,
      dialogueContext: "Nhân vật nói: 'Let's not jump the gun; we need more evidence':",
      question: "'Jump the gun' là thành ngữ cảnh báo về điều gì?",
      options: ["Hấp tấp hành động quá sớm trước thời điểm thích hợp", "Làm mất vũ khí", "Chạy trốn khỏi hiện trường", "Bắn súng bất cẩn"],
      answer: "Hấp tấp hành động quá sớm trước thời điểm thích hợp",
      explanationVi: "'Jump the gun' xuất phát từ chạy điền kinh, chỉ việc hấp tấp hành động khi chưa đến lúc."
    },
    {
      id: `${filmId}-q14`,
      dialogueContext: "Người đối thoại nhận xét: 'Her acting was nuanced and subtle':",
      question: "Tính từ 'subtle' nhấn mạnh đặc điểm diễn xuất nào?",
      options: ["Tinh tế, biểu cảm có chiều sâu nội tâm", "Ồn ào, khoa trương quá đà", "Thiếu cảm xúc tự nhiên", "Căng thẳng và bạo lực"],
      answer: "Tinh tế, biểu cảm có chiều sâu nội tâm",
      explanationVi: "'Subtle' miêu tả nét diễn xuất tinh tế, không gượng ép mà đi sâu vào cảm xúc người xem."
    },
    {
      id: `${filmId}-q15`,
      dialogueContext: "Nhân vật cảnh báo người bạn: 'Don't burn your bridges on your way out!':",
      question: "Cụm 'burn your bridges' nhắc nhở điều gì khi rời bỏ một nơi chốn/mối quan hệ?",
      options: ["Tránh cắt đứt hoàn toàn đường lui hoặc làm rạn nứt quan hệ", "Đừng làm hỏng công trình công cộng", "Nên đốt hết giấy tờ liên quan", "Cần phải rời đi thật nhanh"],
      answer: "Tránh cắt đứt hoàn toàn đường lui hoặc làm rạn nứt quan hệ",
      explanationVi: "'Burn your bridges' (đốt cầu) là tự tay triệt tiêu đường lui và hủy hoại các mối quan hệ có thể cần sau này."
    },
    {
      id: `${filmId}-q16`,
      dialogueContext: "Khi nhân vật cố gắng giữ bình tĩnh trước áp lực cực hạn:",
      question: "Cụm thành ngữ nào diễn tả 'giữ được sự bình tĩnh và tỉnh táo'?",
      options: ["Keep one's composure", "Lose one's mind", "Fly off the handle", "Hit the roof"],
      answer: "Keep one's composure",
      explanationVi: "'Keep one's composure' có nghĩa là duy trì sự bình tĩnh, điềm tĩnh trước sóng gió."
    },
    {
      id: `${filmId}-q17`,
      dialogueContext: "Một nhân vật động viên: 'Every cloud has a silver lining, never lose hope':",
      question: "'Every cloud has a silver lining' mang hàm ý tích cực nào?",
      options: ["Trong mọi hoàn cảnh khó khăn đều le lói một điều tốt đẹp", "Trời sắp có giông bão lớn", "Bầu trời luôn đổi màu", "Hãy chuẩn bị ô che mưa"],
      answer: "Trong mọi hoàn cảnh khó khăn đều le lói một điều tốt đẹp",
      explanationVi: "Thành ngữ 'Every cloud has a silver lining' khuyên ta luôn nhìn thấy điểm sáng lạc quan giữa giông bão."
    },
    {
      id: `${filmId}-q18`,
      dialogueContext: "Nhân vật thốt lên đầy bất ngờ: 'That revelation came out of the blue!':",
      question: "Cụm từ 'out of the blue' miêu tả tính chất gì của sự việc?",
      options: ["Đột ngột, hoàn toàn bất ngờ không báo trước", "Nảy sinh từ đại dương", "Mang màu xanh da trời", "Rất buồn bã và u uất"],
      answer: "Đột ngột, hoàn toàn bất ngờ không báo trước",
      explanationVi: "'Out of the blue' nghĩa là hoàn toàn bất thình lình, không hề có điềm báo trước."
    },
    {
      id: `${filmId}-q19`,
      dialogueContext: "Hai nhân vật bắt tay làm hòa sau chuỗi hiểu lầm kéo dài:",
      question: "Thành ngữ kinh điển nào diễn tả hành động 'giảng hòa, chôn vùi thù hận quá khứ'?",
      options: ["Bury the hatchet", "Turn the tide", "Break the ice", "Spill the beans"],
      answer: "Bury the hatchet",
      explanationVi: "'Bury the hatchet' (chôn chiếc rìu) có nguồn gốc từ thổ dân Bắc Mỹ, nghĩa là đình chiến và hòa giải."
    },
    {
      id: `${filmId}-q20`,
      dialogueContext: "Câu chốt kết thúc phân cảnh xúc động: 'We are in this together, through thick and thin':",
      question: "Cụm 'through thick and thin' khẳng định sự gắn bó như thế nào?",
      options: ["Cùng nhau vượt qua mọi thăng trầm, vui buồn khó khăn", "Dù béo hay gầy", "Chỉ bên nhau khi mọi chuyện thuận lợi", "Tạm thời hợp tác ngắn hạn"],
      answer: "Cùng nhau vượt qua mọi thăng trầm, vui buồn khó khăn",
      explanationVi: "'Through thick and thin' nghĩa là đồng cam cộng khổ, gắn bó keo sơn trong mọi hoàn cảnh dù thuận lợi hay khó khăn."
    }
  ];

  return {
    id: filmId,
    title: movie.original_name || movie.name,
    titleVi: movie.name,
    type: "live_action",
    level: "B1-B2",
    levelLabel: isSeries ? `Phim Bộ (${items.length} Tập HD)` : "Phim Lẻ (Bản Full HD)",
    rating: movie.quality || "HD Vietsub",
    year: yearNum,
    accent: "Anh - Mỹ (US)",
    durationOrSeasons: isSeries ? `${items.length} tập` : (movie.time || "Full Movie"),
    genre: ["Drama", "Action", "Cinema", "English Learning"],
    tagline: `Trải nghiệm học tiếng Anh chân thực cùng tác phẩm ${movie.name}`,
    icon: isSeries ? "📺" : "🎬",
    bannerGradient: "from-indigo-900 via-slate-900 to-purple-950",
    summaryVi: movie.description || `Tác phẩm điện ảnh ${movie.name} phát hành năm ${yearNum}. Khám phá vốn từ vựng, phản xạ nghe và câu thoại phong phú từ Nguồn C.`,
    whyLearn: "Học phản xạ giao tiếp tự nhiên và từ vựng điện ảnh sống động qua tác phẩm.",
    watchingTip: "Xem lần 1 với phụ đề để hiểu nội dung, sau đó luyện nghe và làm 20 câu hỏi thử thách.",
    episodes: episodes,
    keyVocabularies: vocabularies,
    iconicQuotes: quotes,
    quiz: quiz
  };
}

