import { Topic } from "./types";

export const extraTopics: Topic[] = [
  {
    id: "education",
    name: "Education & School",
    icon: "🎓",
    color: "bg-purple-100 text-purple-600 border-purple-200",
    words: [
      { id: "edu1", word: "university", pronunciation: "/ˌjuː.nɪˈvɜː.sə.ti/", meaning: "trường đại học", example: "She studies at university.", emoji: "🏛️" },
      { id: "edu2", word: "scholarship", pronunciation: "/ˈskɒl.ə.ʃɪp/", meaning: "học bổng", example: "He won a scholarship.", emoji: "📜" },
      { id: "edu3", word: "assignment", pronunciation: "/əˈsaɪn.mənt/", meaning: "bài tập về nhà", example: "Finish your assignment.", emoji: "📝" },
      { id: "edu4", word: "lecture", pronunciation: "/ˈlek.tʃər/", meaning: "bài giảng", example: "The lecture was boring.", emoji: "👨‍🏫" },
      { id: "edu5", word: "professor", pronunciation: "/prəˈfes.ər/", meaning: "giáo sư", example: "The professor is strict.", emoji: "👨‍🎓" },
      { id: "edu6", word: "tuition", pronunciation: "/tʃuːˈɪʃ.ən/", meaning: "học phí", example: "Tuition fees are high.", emoji: "💰" },
      { id: "edu7", word: "semester", pronunciation: "/sɪˈmes.tər/", meaning: "học kỳ", example: "It's the first semester.", emoji: "📅" },
      { id: "edu8", word: "degree", pronunciation: "/dɪˈɡriː/", meaning: "bằng cấp", example: "She has a master's degree.", emoji: "🎓" },
      { id: "edu9", word: "graduate", pronunciation: "/ˈɡrædʒ.u.ət/", meaning: "người tốt nghiệp", example: "He is a recent graduate.", emoji: "🧑‍🎓" },
      { id: "edu10", word: "dormitory", pronunciation: "/ˈdɔː.mɪ.tər.i/", meaning: "ký túc xá", example: "They live in a dormitory.", emoji: "🏢" }
    ]
  },
  {
    id: "health2",
    name: "Health & Fitness",
    icon: "💪",
    color: "bg-rose-100 text-rose-600 border-rose-200",
    words: [
      { id: "ht1", word: "exercise", pronunciation: "/ˈek.sə.saɪz/", meaning: "tập thể dục", example: "Daily exercise is good.", emoji: "🏃" },
      { id: "ht2", word: "nutrition", pronunciation: "/njuːˈtrɪʃ.ən/", meaning: "dinh dưỡng", example: "Good nutrition is vital.", emoji: "🥗" },
      { id: "ht3", word: "muscle", pronunciation: "/ˈmʌs.əl/", meaning: "cơ bắp", example: "He has big muscles.", emoji: "💪" },
      { id: "ht4", word: "diet", pronunciation: "/ˈdaɪ.ət/", meaning: "chế độ ăn", example: "She is on a diet.", emoji: "🍎" },
      { id: "ht5", word: "protein", pronunciation: "/ˈprəʊ.tiːn/", meaning: "chất đạm", example: "Meat contains protein.", emoji: "🥩" },
      { id: "ht6", word: "stamina", pronunciation: "/ˈstæm.ɪ.nə/", meaning: "sức bền", example: "Running builds stamina.", emoji: "🫁" },
      { id: "ht7", word: "yoga", pronunciation: "/ˈjəʊ.ɡə/", meaning: "thể dục yoga", example: "She practices yoga.", emoji: "🧘" },
      { id: "ht8", word: "gymnasium", pronunciation: "/dʒɪmˈneɪ.zi.əm/", meaning: "phòng tập gym", example: "I go to the gymnasium.", emoji: "🏋️" },
      { id: "ht9", word: "injury", pronunciation: "/ˈɪn.dʒər.i/", meaning: "chấn thương", example: "He suffered an injury.", emoji: "🤕" },
      { id: "ht10", word: "recovery", pronunciation: "/rɪˈkʌv.ər.i/", meaning: "sự hồi phục", example: "Speedy recovery to you.", emoji: "❤️‍🩹" }
    ]
  },
  {
    id: "nature",
    name: "Nature & Environment",
    icon: "🌲",
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
    words: [
      { id: "nt1", word: "forest", pronunciation: "/ˈfɒr.ɪst/", meaning: "rừng", example: "The forest is dense.", emoji: "🌳" },
      { id: "nt2", word: "mountain", pronunciation: "/ˈmaʊn.tɪn/", meaning: "núi", example: "We climbed the mountain.", emoji: "⛰️" },
      { id: "nt3", word: "ocean", pronunciation: "/ˈəʊ.ʃən/", meaning: "đại dương", example: "The ocean is deep.", emoji: "🌊" },
      { id: "nt4", word: "river", pronunciation: "/ˈrɪv.ər/", meaning: "sông", example: "The river flows quickly.", emoji: "🏞️" },
      { id: "nt5", word: "desert", pronunciation: "/ˈdez.ət/", meaning: "sa mạc", example: "The desert is hot.", emoji: "🐪" },
      { id: "nt6", word: "valley", pronunciation: "/ˈvæl.i/", meaning: "thung lũng", example: "The valley is green.", emoji: "⛰️" },
      { id: "nt7", word: "island", pronunciation: "/ˈaɪ.lənd/", meaning: "đảo", example: "We visited an island.", emoji: "🏝️" },
      { id: "nt8", word: "hurricane", pronunciation: "/ˈhʌr.ɪ.kən/", meaning: "bão cuồng phong", example: "A hurricane is coming.", emoji: "🌀" },
      { id: "nt9", word: "earthquake", pronunciation: "/ˈɜːθ.kweɪk/", meaning: "động đất", example: "The earthquake was strong.", emoji: "💥" },
      { id: "nt10", word: "volcano", pronunciation: "/vɒlˈkeɪ.nəʊ/", meaning: "núi lửa", example: "The volcano erupted.", emoji: "🌋" }
    ]
  },
  {
    id: "home",
    name: "Home & Furniture",
    icon: "🏠",
    color: "bg-orange-100 text-orange-600 border-orange-200",
    words: [
      { id: "hm1", word: "furniture", pronunciation: "/ˈfɜː.nɪ.tʃər/", meaning: "đồ nội thất", example: "We bought new furniture.", emoji: "🛋️" },
      { id: "hm2", word: "couch", pronunciation: "/kaʊtʃ/", meaning: "ghế sô pha", example: "Sit on the couch.", emoji: "🛋️" },
      { id: "hm3", word: "carpet", pronunciation: "/ˈkɑː.pɪt/", meaning: "tấm thảm", example: "The carpet is soft.", emoji: "🧶" },
      { id: "hm4", word: "curtain", pronunciation: "/ˈkɜː.tən/", meaning: "rèm cửa", example: "Close the curtain.", emoji: "🪟" },
      { id: "hm5", word: "blanket", pronunciation: "/ˈblæŋ.kɪt/", meaning: "cái chăn", example: "I need a blanket.", emoji: "🛌" },
      { id: "hm6", word: "pillow", pronunciation: "/ˈpɪl.əʊ/", meaning: "cái gối", example: "The pillow is fluffy.", emoji: "🛌" },
      { id: "hm7", word: "mirror", pronunciation: "/ˈmɪr.ər/", meaning: "gương", example: "Look in the mirror.", emoji: "🪞" },
      { id: "hm8", word: "wardrobe", pronunciation: "/ˈwɔː.drəʊb/", meaning: "tủ quần áo", example: "Hang it in the wardrobe.", emoji: "🚪" },
      { id: "hm9", word: "bookshelf", pronunciation: "/ˈbʊk.ʃelf/", meaning: "giá sách", example: "The bookshelf is full.", emoji: "📚" },
      { id: "hm10", word: "ceiling", pronunciation: "/ˈsiː.lɪŋ/", meaning: "trần nhà", example: "The ceiling is high.", emoji: "🏠" }
    ]
  },
  {
    id: "art",
    name: "Art & Culture",
    icon: "🎨",
    color: "bg-pink-100 text-pink-600 border-pink-200",
    words: [
      { id: "ar1", word: "museum", pronunciation: "/mjuːˈziː.əm/", meaning: "bảo tàng", example: "We visited the museum.", emoji: "🏛️" },
      { id: "ar2", word: "painting", pronunciation: "/ˈpeɪn.tɪŋ/", meaning: "bức tranh", example: "It is a beautiful painting.", emoji: "🖼️" },
      { id: "ar3", word: "sculpture", pronunciation: "/ˈskʌlp.tʃər/", meaning: "bức tượng", example: "The sculpture is old.", emoji: "🗿" },
      { id: "ar4", word: "gallery", pronunciation: "/ˈɡæl.ər.i/", meaning: "phòng trưng bày", example: "The art gallery is open.", emoji: "🖼️" },
      { id: "ar5", word: "exhibition", pronunciation: "/ˌek.sɪˈbɪʃ.ən/", meaning: "cuộc triển lãm", example: "We saw the exhibition.", emoji: "🎫" },
      { id: "ar6", word: "literature", pronunciation: "/ˈlɪt.rə.tʃər/", meaning: "văn học", example: "He studies literature.", emoji: "📚" },
      { id: "ar7", word: "poetry", pronunciation: "/ˈpəʊ.ɪ.tri/", meaning: "thơ ca", example: "She writes poetry.", emoji: "✍️" },
      { id: "ar8", word: "theatre", pronunciation: "/ˈθɪə.tər/", meaning: "nhà hát", example: "Let's go to the theatre.", emoji: "🎭" },
      { id: "ar9", word: "concert", pronunciation: "/ˈkɒn.sət/", meaning: "buổi hòa nhạc", example: "The concert was loud.", emoji: "🎵" },
      { id: "ar10", word: "festival", pronunciation: "/ˈfes.tɪ.vəl/", meaning: "lễ hội", example: "It is a summer festival.", emoji: "🎉" }
    ]
  }
];
