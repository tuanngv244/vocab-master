import { ReadingArticle } from "./types";

export const readingArticles: ReadingArticle[] = [
  // --- Beginner (A1-A2) Articles ---
  {
    id: "rb1",
    title: "My Daily Morning Routine",
    level: "Beginner A1",
    category: "Daily Life",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    content: [
      "Every morning, my **alarm rings** at six thirty. I **wake up**, **stretch** my arms, and **get out of bed**. The first thing I do is drink a large glass of **warm water**.",
      "Then, I go to the bathroom to **brush my teeth** and **wash my face**. Afterwards, I walk into the kitchen to **prepare breakfast**. I usually fry two fresh eggs and **toast** two slices of bread. I also **brew** a hot cup of black coffee.",
      "While eating breakfast, I listen to English morning radio. At seven forty-five, I put on my coat, grab my **backpack**, and walk to the **bus stop** to **catch bus** number twelve to school."
    ],
    translationVi: [
      "Mỗi buổi sáng, **chuông báo thức reo** lúc sáu giờ ba mươi. Tôi **thức dậy**, **vươn vai** và **bước ra khỏi giường**. Việc đầu tiên tôi làm là uống một cốc lớn **nước ấm**.",
      "Sau đó, tôi vào phòng tắm để **đánh răng** và **rửa mặt**. Tiếp theo, tôi bước vào bếp để **chuẩn bị bữa sáng**. Tôi thường chiên hai quả trứng tươi và **nướng** hai lát bánh mì. Tôi cũng **pha** một tách cà phê đen nóng.",
      "Trong lúc ăn sáng, tôi nghe đài tiếng Anh buổi sáng. Lúc bảy giờ bốn mươi lăm, tôi mặc áo khoác, lấy **ba lô** và đi bộ ra **trạm xe buýt** để **bắt chuyến xe** số mười hai đến trường."
    ],
    questions: [
      {
        question: "What does the writer do right after waking up?",
        options: [
          "Drinks a large glass of warm water.",
          "Brushes their teeth immediately.",
          "Fries two fresh eggs.",
          "Runs to the bus stop."
        ],
        answer: "Drinks a large glass of warm water."
      },
      {
        question: "What does the writer usually eat for breakfast?",
        options: [
          "Pancakes and apple juice.",
          "Two fried eggs and toasted bread.",
          "A bowl of chicken noodle soup.",
          "Only a slice of cheese pizza."
        ],
        answer: "Two fried eggs and toasted bread."
      }
    ]
  },
  {
    id: "rb2",
    title: "A Trip to the Local Supermarket",
    level: "Beginner A1",
    category: "Shopping",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    content: [
      "On Saturday morning, Laura goes shopping at the **local supermarket** near her house. Before leaving home, she writes a **shopping list** on a small piece of paper.",
      "First, she walks to the **fruit section** and selects five red apples, four yellow bananas, and a **bunch of grapes**. Next, she visits the **dairy aisle** to pick up two cartons of **fresh milk** and a block of **butter**.",
      "Finally, she goes to the **checkout counter**. The cashier **scans** each item with a **barcode scanner**. Laura pays for her **groceries** with her **debit card**, packs the food into **reusable cloth bags**, and happily walks home."
    ],
    translationVi: [
      "Vào sáng thứ Bảy, Laura đi mua sắm tại **siêu thị địa phương** gần nhà cô ấy. Trước khi rời khỏi nhà, cô ấy viết một **danh sách mua sắm** trên một mảnh giấy nhỏ.",
      "Đầu tiên, cô ấy đi đến **khu vực hoa quả** và chọn năm quả táo đỏ, bốn quả chuối vàng và một **chùm nho**. Tiếp theo, cô ấy ghé qua **gian hàng bơ sữa** để lấy hai hộp **sữa tươi** và một thanh **bơ**.",
      "Cuối cùng, cô ấy đến **quầy thanh toán**. Thu ngân **quét mã** từng món hàng bằng **máy quét mã vạch**. Laura trả tiền cho số **hàng tạp hóa** bằng **thẻ ghi nợ**, xếp thực phẩm vào các **túi vải tái sử dụng**, và vui vẻ đi bộ về nhà."
    ],
    questions: [
      {
        question: "What does Laura do before going to the supermarket?",
        options: [
          "She calls her friend on the phone.",
          "She writes a shopping list on paper.",
          "She eats a large lunch at a cafe.",
          "She washes her bicycle."
        ],
        answer: "She writes a shopping list on paper."
      },
      {
        question: "How does Laura pay for her groceries?",
        options: [
          "With paper cash.",
          "With her debit card.",
          "Using online coupons.",
          "Her groceries are free."
        ],
        answer: "With her debit card."
      }
    ]
  },
  {
    id: "rb3",
    title: "Meet My Cute Cat, Milo",
    level: "Beginner A1",
    category: "Pets & Animals",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    content: [
      "I have a pet cat named Milo. Milo is two years old and has soft **orange and white fur** with **bright green eyes**.",
      "During the afternoon, Milo loves sleeping in **sunny spots** on the living room sofa. When he is hungry, he **meows softly** beside his food bowl until someone feeds him delicious **canned tuna**.",
      "In the evening, Milo becomes **energetic**. He **chases** a little red rubber ball across the wooden floor and jumps into empty **cardboard boxes**. Having Milo as a pet always brings **happiness** to our family."
    ],
    translationVi: [
      "Tôi có một chú mèo cưng tên là Milo. Milo được hai tuổi và có **bộ lông màu cam trắng** mềm mại cùng đôi **mắt xanh lá sáng ngời**.",
      "Vào buổi chiều, Milo thích ngủ ở những **nơi có nắng chiếu** trên ghế sô pha phòng khách. Khi đói bụng, chú **kêu meo meo êm dịu** bên cạnh bát ăn cho đến khi có người cho ăn món **cá ngừ đóng hộp** thơm ngon.",
      "Vào buổi tối, Milo trở nên **tràn đầy năng lượng**. Chú **đuổi theo** một quả bóng cao su nhỏ màu đỏ khắp sàn gỗ và nhảy vào những chiếc **thùng các-tông** rỗng. Nuôi chú mèo Milo luôn mang lại **niềm hạnh phúc** cho gia đình chúng tôi."
    ],
    questions: [
      {
        question: "What color are Milo's eyes?",
        options: [
          "Bright green.",
          "Dark brown.",
          "Sky blue.",
          "Golden yellow."
        ],
        answer: "Bright green."
      },
      {
        question: "What does Milo do when he is hungry?",
        options: [
          "He hides under the bed.",
          "He meows softly beside his food bowl.",
          "He scratches the front door.",
          "He runs out into the garden."
        ],
        answer: "He meows softly beside his food bowl."
      }
    ]
  },
  {
    id: "rb4",
    title: "My Favorite Season: Autumn",
    level: "Beginner A2",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    content: [
      "Autumn is my **favorite season** of the year. It begins in September and ends in November. During autumn, the **sweltering heat** of summer disappears and is replaced by **cool, gentle breezes**.",
      "The most beautiful part of autumn is the trees. Leaves on **maple** and oak trees change from green to **vibrant shades** of gold, orange, and deep red before they **fall to the ground**.",
      "I enjoy going for long walks in the park wearing a **warm woolen sweater**. In the evening, drinking a cup of hot **cinnamon tea** while reading a novel makes me feel **cozy and peaceful**."
    ],
    translationVi: [
      "Mùa thu là **mùa yêu thích nhất** trong năm của tôi. Mùa này bắt đầu vào tháng Chín và kết thúc vào tháng Mười Một. Trong mùa thu, **cái nóng oi ả** của mùa hè tan biến và được thay thế bằng những **làn gió mát mẻ, dịu nhẹ**.",
      "Phần đẹp nhất của mùa thu chính là cây cối. Lá trên cây **phong** và cây sồi đổi từ màu xanh sang các **sắc thái rực rỡ** vàng óng, cam và đỏ thẫm trước khi **rơi xuống mặt đất**.",
      "Tôi thích đi dạo thật lâu trong công viên trong chiếc **áo len ấm áp**. Vào buổi tối, uống một tách **trà quế** nóng hổi trong khi đọc một cuốn tiểu thuyết khiến tôi cảm thấy vô cùng **ấm cúng và bình yên**."
    ],
    questions: [
      {
        question: "When does autumn begin and end?",
        options: [
          "Begins in March and ends in May.",
          "Begins in September and ends in November.",
          "Begins in June and ends in August.",
          "Begins in December and ends in February."
        ],
        answer: "Begins in September and ends in November."
      },
      {
        question: "What does the writer like to drink on autumn evenings?",
        options: [
          "Hot cinnamon tea.",
          "Iced lemonade.",
          "Cold orange juice.",
          "Chocolate milkshake."
        ],
        answer: "Hot cinnamon tea."
      }
    ]
  },
  {
    id: "rb5",
    title: "Cooking Spaghetti with Family",
    level: "Beginner A1",
    category: "Food & Cooking",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    content: [
      "On Sunday evenings, our family cooks dinner together. Tonight, we decided to make **homemade Italian spaghetti** with **rich tomato sauce** and meatballs.",
      "My father boils water in a large **stainless steel pot** and adds the pasta. My mother chops garlic, sweet onions, and ripe tomatoes to **simmer the sauce**. The kitchen smells **delicious and fragrant**.",
      "My younger brother and I help **set the dining table** with forks, plates, and clean napkins. Eating a hot, home-cooked meal with the people you love is the best way to **conclude the weekend**."
    ],
    translationVi: [
      "Vào các tối Chủ nhật, gia đình tôi cùng nhau nấu bữa tối. Tối nay, chúng tôi quyết định làm món **mì Ý tự nấu tại nhà** với **sốt cà chua đậm đà** và thịt viên.",
      "Bố tôi đun sôi nước trong một chiếc **nồi inox lớn** và thả mì vào. Mẹ tôi băm tỏi, hành tây ngọt và cà chua chín để **ninh nhừ nước sốt**. Căn bếp tỏa mùi thơm ngào ngạt **ngon miệng và hấp dẫn**.",
      "Tôi và em trai giúp **dọn bàn ăn** với nĩa, đĩa và khăn ăn sạch sẽ. Thưởng thức một bữa ăn nóng hổi do nhà nấu cùng những người thân yêu là cách tuyệt vời nhất để **khép lại dịp cuối tuần**."
    ],
    questions: [
      {
        question: "What dish is the family making for Sunday dinner?",
        options: [
          "Italian spaghetti with tomato sauce.",
          "Grilled chicken salad.",
          "Beef hamburgers and french fries.",
          "Seafood fried rice."
        ],
        answer: "Italian spaghetti with tomato sauce."
      },
      {
        question: "How do the writer and their brother help?",
        options: [
          "They wash all the vegetables.",
          "They set the dining table.",
          "They bake dessert in the oven.",
          "They go to the supermarket."
        ],
        answer: "They set the dining table."
      }
    ]
  },
  {
    id: "rb6",
    title: "A Sunny Weekend at the Beach",
    level: "Beginner A1",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    content: [
      "Last weekend, my best friends and I took a bus to the **sunny seaside**. The weather was absolutely perfect with a **cloudless sky** and a warm ocean breeze.",
      "We put our beach towels on the soft **golden sand** and applied **sunscreen**. The water was cool and refreshing. We swam in the gentle waves and built a large **sandcastle** with shells.",
      "At noon, we ate fresh fruit sandwiches and drank cold **coconut water** under a beach umbrella. Watching the **golden sunset** reflect on the ocean waves was an **unforgettable memory**."
    ],
    translationVi: [
      "Cuối tuần trước, tôi và nhóm bạn thân đã bắt xe buýt đến **bờ biển ngập tràn ánh nắng**. Thời tiết vô cùng hoàn hảo với **bầu trời không một gợn mây** và làn gió biển ấm áp.",
      "Chúng tôi trải khăn tắm lên bờ **cát vàng** mịn và thoa **kem chống nắng**. Làn nước mát lạnh và sảng khoái. Chúng tôi bơi trong những con sóng êm đềm và xây một **lâu đài cát** lớn gắn vỏ sò.",
      "Vào buổi trưa, chúng tôi ăn bánh mì kẹp trái cây tươi và uống **nước dừa** lạnh dưới chiếc ô bãi biển. Ngắm nhìn **hoàng hôn rực vàng** phản chiếu trên những con sóng biển là một **kỷ niệm khó quên**."
    ],
    questions: [
      {
        question: "How was the weather at the beach?",
        options: [
          "Rainy and stormy.",
          "Sunny with a cloudless sky.",
          "Snowy and freezing.",
          "Foggy and dark."
        ],
        answer: "Sunny with a cloudless sky."
      },
      {
        question: "What did they drink under the beach umbrella?",
        options: [
          "Hot coffee.",
          "Cold coconut water.",
          "Tomato soup.",
          "Warm milk."
        ],
        answer: "Cold coconut water."
      }
    ]
  },
  {
    id: "rb7",
    title: "Learning English with Music",
    level: "Beginner A2",
    category: "Education",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    content: [
      "Many language teachers recommend listening to English music as a **fun and practical method** to **expand your vocabulary** and **improve listening skills**.",
      "When you listen to a **catchy song**, you naturally repeat the **chorus** and learn how words are **pronounced in real conversations**. Rhymes and rhythms make new words much easier to **memorize**.",
      "You can choose simple pop songs or **acoustic ballads** with **clear vocals**. Writing down the lyrics in a notebook and singing along every day will **boost your confidence** significantly."
    ],
    translationVi: [
      "Nhiều giáo viên dạy ngoại ngữ khuyên nên nghe nhạc tiếng Anh như một **phương pháp thú vị và thực tế** để **mở rộng vốn từ vựng** và **cải thiện kỹ năng nghe**.",
      "Khi bạn lắng nghe một **bài hát bắt tai**, bạn sẽ tự nhiên lặp lại đoạn **điệp khúc** và học được cách các từ được **phát âm trong giao tiếp thực tế**. Giai điệu và nhịp điệu giúp các từ mới trở nên dễ **ghi nhớ** hơn rất nhiều.",
      "Bạn có thể chọn các bài nhạc pop đơn giản hoặc các bản **nhạc mộc (acoustic)** với **giọng hát trong trẻo, rõ lời**. Ghi chép lời bài hát vào sổ tay và hát theo mỗi ngày sẽ giúp bạn **gia tăng sự tự tin** một cách rõ rệt."
    ],
    questions: [
      {
        question: "Why do teachers recommend listening to English music?",
        options: [
          "It helps you sleep faster.",
          "It expands vocabulary and improves listening.",
          "It replaces reading grammar books completely.",
          "It is the only way to pass exams."
        ],
        answer: "It expands vocabulary and improves listening."
      },
      {
        question: "What type of songs is recommended for beginners?",
        options: [
          "Fast rap songs with slang.",
          "Pop songs or acoustic ballads with clear vocals.",
          "Songs with no lyrics.",
          "Opera in ancient Latin."
        ],
        answer: "Pop songs or acoustic ballads with clear vocals."
      }
    ]
  },
  {
    id: "rb8",
    title: "Visiting the City Public Library",
    level: "Beginner A1",
    category: "City & Society",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    content: [
      "The city public library is located in the center of town. It is a large, **quiet building** with three floors filled with **thousands of fascinating books**.",
      "On the first floor, there is a **children's reading corner** and computers with **free internet access**. The second floor contains non-fiction books, history archives, and **silent study desks**.",
      "Anyone who lives in the city can sign up for a **free library card**. With this card, you can **borrow up to five books** for three weeks. It is my favorite place to **focus and study**."
    ],
    translationVi: [
      "Thư viện công cộng thành phố nằm ở trung tâm thị trấn. Đó là một **tòa nhà lớn, yên tĩnh** gồm ba tầng chứa đầy **hàng ngàn cuốn sách hấp dẫn**.",
      "Ở tầng một, có một **góc đọc sách cho trẻ em** và dàn máy tính có **kết nối internet miễn phí**. Tầng hai chứa các loại sách kiến thức thực tế, tài liệu lưu trữ lịch sử và các **bàn học yên tĩnh tuyệt đối**.",
      "Bất kỳ ai sống trong thành phố đều có thể đăng ký một chiếc **thẻ thư viện miễn phí**. Với chiếc thẻ này, bạn có thể **mượn tối đa năm cuốn sách** trong vòng ba tuần. Đây là nơi yêu thích nhất của tôi để **tập trung và học tập**."
    ],
    questions: [
      {
        question: "Where is the city library located?",
        options: [
          "At the international airport.",
          "In the center of town.",
          "On top of a distant mountain.",
          "Inside a shopping mall."
        ],
        answer: "In the center of town."
      },
      {
        question: "How many books can someone borrow with a library card?",
        options: [
          "Only one book.",
          "Up to five books.",
          "Unlimited books forever.",
          "Fifty books at once."
        ],
        answer: "Up to five books."
      }
    ]
  },
  {
    id: "rb9",
    title: "My Job as a Coffee Barista",
    level: "Beginner A2",
    category: "Jobs & Careers",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    content: [
      "My name is Daniel and I work as a **barista** at a cozy cafe called Morning Aroma. My shift usually begins at six o'clock in the morning before most people **wake up**.",
      "My first duty is turning on the **espresso machine** and grinding fresh roasted coffee beans. I learn how to **steam milk** to create smooth foam and pour cute **latte art** patterns like hearts and tulips.",
      "Although working during the **morning rush** is busy, I really enjoy talking with **regular customers** and serving them their favorite warm drinks to **start their workday**."
    ],
    translationVi: [
      "Tôi tên là Daniel và tôi làm công việc của một **nhân viên pha chế (barista)** tại một quán cà phê ấm cúng tên là Morning Aroma. Ca làm việc của tôi thường bắt đầu lúc sáu giờ sáng trước khi phần lớn mọi người **thức giấc**.",
      "Nhiệm vụ đầu tiên của tôi là bật **máy pha cà phê espresso** và xay những hạt cà phê rang tươi mới. Tôi học cách **đánh sữa bằng hơi nước** để tạo bọt mịn và vẽ những hình **nghệ thuật latte** dễ thương như hình trái tim và hoa tulip.",
      "Mặc dù làm việc trong **giờ cao điểm buổi sáng** rất bận rộn, tôi thực sự rất thích trò chuyện với các **khách hàng quen thuộc** và phục vụ họ những món đồ uống ấm áp ưa thích để **khởi đầu ngày làm việc**."
    ],
    questions: [
      {
        question: "What time does Daniel's work shift begin?",
        options: [
          "At six o'clock in the morning.",
          "At noon.",
          "At eight o'clock in the evening.",
          "At midnight."
        ],
        answer: "At six o'clock in the morning."
      },
      {
        question: "What latte art shapes does Daniel pour?",
        options: [
          "Cats and dogs.",
          "Hearts and tulips.",
          "Bicycles and cars.",
          "Stars and moons."
        ],
        answer: "Hearts and tulips."
      }
    ]
  },
  {
    id: "rb10",
    title: "Riding a Bicycle to School",
    level: "Beginner A1",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    content: [
      "Instead of taking the crowded morning bus, I decided to ride my blue **bicycle** to school every day. It takes about twenty minutes to travel three **kilometers**.",
      "Our city has wide, green **bicycle lanes** next to the sidewalks. This makes cycling very safe and convenient. I always wear a sturdy **helmet** and check my **brakes** before departing.",
      "Cycling provides great **daily exercise** for my legs and heart. It also saves money on bus tickets and helps **protect the environment** by reducing air pollution."
    ],
    translationVi: [
      "Thay vì đi chuyến xe buýt đông đúc vào buổi sáng, tôi quyết định đạp chiếc **xe đạp** màu xanh dương của mình đến trường mỗi ngày. Chuyến đi mất khoảng hai mươi phút cho quãng đường ba **ki-lô-mét**.",
      "Thành phố của chúng tôi có những **làn đường dành cho xe đạp** rộng rãi, sơn màu xanh lá cây nằm cạnh vỉa hè. Điều này giúp việc đạp xe rất an toàn và thuận tiện. Tôi luôn đội **mũ bảo hiểm** chắc chắn và kiểm tra **phanh xe** trước khi khởi hành.",
      "Đi xe đạp mang lại bài **tập thể dục hàng ngày** tuyệt vời cho đôi chân và tim mạch. Nó cũng giúp tiết kiệm tiền vé xe buýt và góp phần **bảo vệ môi trường** thông qua việc giảm bớt ô nhiễm không khí."
    ],
    questions: [
      {
        question: "How long does it take the writer to ride to school?",
        options: [
          "About five minutes.",
          "About twenty minutes.",
          "Over two hours.",
          "Ten seconds."
        ],
        answer: "About twenty minutes."
      },
      {
        question: "What does the writer wear for safety?",
        options: [
          "Heavy winter boots.",
          "A sturdy helmet.",
          "A pair of sunglasses.",
          "A swimming cap."
        ],
        answer: "A sturdy helmet."
      }
    ]
  },
  {
    id: "rb11",
    title: "A Surprise Birthday Party for Anna",
    level: "Beginner A1",
    category: "Family & Friends",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    content: [
      "Yesterday was Anna's twentieth birthday. Her friends planned a **secret surprise party** to celebrate this special milestone without letting her know.",
      "While Anna was at university classes, her friends gathered in her living room. They hung colorful **balloons**, placed a homemade **chocolate cake** on the table, and lit twenty tiny candles.",
      "When Anna unlocked the front door at five o'clock, everyone jumped up and shouted: '**Surprise! Happy Birthday!**'. Anna was deeply touched and had tears of joy in her eyes. It was a wonderful and **memorable celebration**."
    ],
    translationVi: [
      "Hôm qua là ngày sinh nhật lần thứ hai mươi của Anna. Bạn bè của cô ấy đã lên kế hoạch cho một **bữa tiệc sinh nhật bất ngờ bí mật** để kỷ niệm cột mốc đặc biệt này mà không để cô biết.",
      "Trong lúc Anna đang học các tiết học ở trường đại học, bạn bè đã tụ tập tại phòng khách nhà cô. Họ treo những chùm **bong bóng** nhiều màu sắc, đặt một chiếc **bánh kem sô-cô-la** tự làm lên bàn và thắp hai mươi ngọn nến nhỏ.",
      "Khi Anna mở khóa cửa trước vào lúc năm giờ chiều, tất cả mọi người nhảy ra và hô vang: '**Bất ngờ chưa! Chúc mừng sinh nhật!**'. Anna vô cùng xúc động và rưng rưng những giọt nước mắt hạnh phúc. Đó là một **buổi kỷ niệm đáng nhớ** và tuyệt vời."
    ],
    questions: [
      {
        question: "How old was Anna on her birthday?",
        options: [
          "Ten years old.",
          "Sixteen years old.",
          "Twentieth years old.",
          "Fifty years old."
        ],
        answer: "Twentieth years old."
      },
      {
        question: "What kind of cake did her friends prepare?",
        options: [
          "Strawberry shortcake.",
          "A homemade chocolate cake.",
          "Lemon pie.",
          "Vanilla cupcake."
        ],
        answer: "A homemade chocolate cake."
      }
    ]
  },
  {
    id: "rb12",
    title: "Planting Flowers in the Garden",
    level: "Beginner A2",
    category: "Nature & Hobbies",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    content: [
      "Spring is the best time to care for the **backyard garden**. Last Saturday, my grandmother and I spent the whole morning planting new flowers.",
      "First, we pulled out all the dry weeds and loosened the dark soil using a small **gardening trowel**. Then, we dug small holes and carefully placed flower seeds into the **moist earth**.",
      "We gently covered the seeds with soil and watered them using a green **watering can**. In a few weeks, brightly colored **sunflowers, daisies, and marigolds** will bloom beautifully."
    ],
    translationVi: [
      "Mùa xuân là thời điểm lý tưởng nhất để chăm sóc **khu vườn sau nhà**. Thứ Bảy tuần trước, tôi và bà ngoại đã dành cả buổi sáng để trồng những khóm hoa mới.",
      "Đầu tiên, chúng tôi nhổ sạch tất cả cỏ dại khô và xới tơi lớp đất đen bằng một chiếc **xẻng làm vườn** nhỏ. Sau đó, chúng tôi đào các hố nhỏ và cẩn thận đặt các hạt giống hoa vào **lớp đất ẩm**.",
      "Chúng tôi nhẹ nhàng phủ đất lên hạt giống và tưới nước bằng một chiếc **bình tưới cây** màu xanh. Trong vài tuần nữa, những bông hoa **hướng dương, cúc họa mi và cúc vạn thọ** rực rỡ sắc màu sẽ nở rộ tuyệt đẹp."
    ],
    questions: [
      {
        question: "When did the writer and grandmother plant flowers?",
        options: [
          "Last Saturday morning.",
          "On a cold winter night.",
          "During a heavy autumn storm.",
          "Two years ago."
        ],
        answer: "Last Saturday morning."
      },
      {
        question: "What types of flowers will bloom in a few weeks?",
        options: [
          "Roses and cactus only.",
          "Sunflowers, daisies, and marigolds.",
          "Pine trees and mushrooms.",
          "Water lilies only."
        ],
        answer: "Sunflowers, daisies, and marigolds."
      }
    ]
  },

  // --- IELTS / Advanced Articles ---
  {
    id: "r4",
    title: "The Mechanics of Cryptocurrencies",
    level: "IELTS 6.5",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
    content: [
      "Cryptocurrencies operate on a technology called **blockchain**, which is essentially a **decentralized, distributed ledger** that records transactions across a network of computers. Unlike traditional fiat currencies managed by central banks, cryptocurrencies rely on **cryptographic algorithms** to ensure security, transparency, and prevent double-spending without needing a trusted third party.",
      "When a transaction occurs, it is combined with other recent transactions into a block. Network participants, often referred to as **miners or validators**, compete to verify the validity of these transactions through **consensus mechanisms** such as Proof of Work (PoW) or Proof of Stake (PoS). Once verified, the block is permanently added to the chain, creating an **immutable historical record**.",
      "However, the cryptocurrency market is notoriously **volatile**. Prices are largely driven by speculation, market sentiment, and regulatory developments rather than intrinsic value. While proponents praise blockchain for its potential to democratize finance, critics highlight severe risks including **regulatory uncertainty, environmental concerns** over energy consumption, and vulnerability to market manipulation."
    ],
    translationVi: [
      "Tiền mã hóa hoạt động trên nền tảng công nghệ gọi là **chuỗi khối (blockchain)**, về bản chất là một **sổ cái phi tập trung, phân tán** ghi lại các giao dịch trên một mạng lưới máy tính. Khác với tiền pháp định truyền thống do các ngân hàng trung ương quản lý, tiền mã hóa dựa vào các **thuật toán mật mã học** để đảm bảo tính an toàn, minh bạch và ngăn chặn hành vi chi tiêu trùng lặp mà không cần một bên thứ ba đáng tin cậy.",
      "Khi một giao dịch diễn ra, nó được kết hợp cùng các giao dịch gần đây khác vào một khối (block). Các thành viên trong mạng lưới, thường được gọi là **thợ đào hoặc người xác thực**, cạnh tranh nhau để chứng minh tính hợp lệ của những giao dịch này thông qua các **cơ chế đồng thuận** như Bằng chứng Công việc (PoW) hoặc Bằng chứng Cổ phần (PoS). Sau khi được xác thực, khối này sẽ được gắn vĩnh viễn vào chuỗi, tạo nên một **bản ghi lịch sử không thể thay đổi**.",
      "Tuy nhiên, thị trường tiền mã hóa nổi tiếng là **biến động dữ dội**. Giá cả phần lớn chịu sự chi phối của việc đầu cơ, tâm lý thị trường và những diễn biến pháp lý thay vì giá trị nội tại. Trong khi những người ủng hộ ca ngợi blockchain vì tiềm năng dân chủ hóa ngành tài chính, các nhà phê bình lại chỉ ra những rủi ro nghiêm trọng bao gồm **sự bất định về mặt pháp lý, mối lo ngại về môi trường** do tiêu thụ nhiều năng lượng, và tính dễ bị tổn thương trước hành vi thao túng thị trường."
    ],
    questions: [
      {
        question: "How are cryptocurrency transactions recorded and secured?",
        options: [
          "Through a central bank.",
          "Using a network of computers to verify and record them.",
          "By printing physical receipts for each transaction.",
          "By employing specialized financial consultants."
        ],
        answer: "Using a network of computers to verify and record them."
      },
      {
        question: "Why is it difficult to alter historical data on a blockchain?",
        options: [
          "Because each block is locked in a physical vault.",
          "Because blocks are encrypted and linked chronologically.",
          "Because only the government has the password.",
          "Because historical data is immediately deleted."
        ],
        answer: "Because blocks are encrypted and linked chronologically."
      }
    ]
  },
  {
    id: "r3",
    title: "The Rise of E-commerce and its Effect on Retail",
    level: "IELTS 6.0",
    category: "Business",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    content: [
      "The last two decades have witnessed a **monumental shift** in consumer behavior, primarily driven by the meteoric rise of **e-commerce platforms**. With the advent of fast-speed internet, mobile payment solutions, and sophisticated logistics networks, consumers can now browse and purchase virtually any product from the comfort of their homes with **unprecedented convenience**.",
      "Traditional **brick-and-mortar stores** are facing intense pressure to adapt. Many established retail brands have suffered declining foot traffic, leading to widespread store closures—a phenomenon often described as the **retail apocalypse**. To survive, conventional retailers are forced to transition into **omnichannel business models**, blending in-person experiences with seamless digital shopping.",
      "One significant advantage of e-commerce is the ability to leverage **consumer data analytics**. Online retailers can track browsing patterns, purchase histories, and demographic details to deliver **hyper-personalized recommendations**, boosting conversion rates and customer loyalty far beyond what traditional stores could ever achieve.",
      "Despite the benefits, e-commerce also brings challenges, particularly concerning **environmental sustainability**. The surging volume of parcel deliveries has dramatically escalated carbon emissions and packaging waste. As consumers become more eco-conscious, retail giants are pressured to invest heavily in **green logistics, electric delivery fleets**, and recyclable materials."
    ],
    translationVi: [
      "Hai thập kỷ qua đã chứng kiến một **bước chuyển dịch mang tính bước ngoặt** trong hành vi của người tiêu dùng, chủ yếu xuất phát từ sự trỗi dậy mạnh mẽ của các **nền tảng thương mại điện tử**. Cùng với sự xuất hiện của internet tốc độ cao, các giải pháp thanh toán di động và mạng lưới hậu cần hiện đại, người tiêu dùng giờ đây có thể xem và mua sắm hầu như mọi sản phẩm ngay tại nhà với **sự tiện lợi chưa từng có**.",
      "Các **cửa hàng bán lẻ truyền thống (brick-and-mortar)** đang phải đối mặt với áp lực thích ứng vô cùng gay gắt. Nhiều thương hiệu bán lẻ lâu đời đã chứng kiến lượng khách trực tiếp sụt giảm, dẫn đến tình trạng đóng cửa hàng loạt—hiện tượng thường được gọi là **ngày tàn của ngành bán lẻ (retail apocalypse)**. Để sinh tồn, các nhà bán lẻ truyền thống buộc phải chuyển hướng sang **mô hình kinh doanh đa kênh (omnichannel)**, kết hợp hài hòa trải nghiệm thực tế với mua sắm kỹ thuật số liền mạch.",
      "Một lợi thế to lớn của thương mại điện tử là khả năng khai thác **phân tích dữ liệu người tiêu dùng**. Các nhà bán lẻ trực tuyến có thể theo dõi thói quen lướt web, lịch sử mua hàng và thông tin nhân khẩu học để đưa ra các **gợi ý siêu cá nhân hóa**, giúp nâng cao tỷ lệ chuyển đổi và lòng trung thành của khách hàng vượt xa những gì mà các cửa hàng truyền thống từng làm được.",
      "Bên cạnh những lợi ích, thương mại điện tử cũng kéo theo không ít thách thức, đặc biệt là về **tính bền vững của môi trường**. Khối lượng bưu kiện giao nhận tăng vọt đã làm gia tăng đáng kể lượng khí thải carbon và rác thải bao bì. Khi người tiêu dùng ngày càng có ý thức bảo vệ môi trường, các gã khổng lồ bán lẻ buộc phải đầu tư mạnh mẽ vào **hậu cần xanh, đội xe giao hàng bằng điện** và các vật liệu có thể tái chế."
    ],
    questions: [
      {
        question: "What is an 'omnichannel' strategy according to the passage?",
        options: [
          "Closing all physical stores to focus purely on online sales.",
          "Blending physical storefronts with online shopping experiences.",
          "Selling only one specific type of product to a niche market.",
          "Employing social media influencers for all marketing efforts."
        ],
        answer: "Blending physical storefronts with online shopping experiences."
      },
      {
        question: "How do online retailers leverage consumer data?",
        options: [
          "By selling it to third-party advertising agencies.",
          "By personalizing marketing efforts and recommending relevant products.",
          "By increasing the price of goods for specific demographics.",
          "By predicting global stock market trends."
        ],
        answer: "By personalizing marketing efforts and recommending relevant products."
      }
    ]
  },
  {
    id: "r1",
    title: "The Future of Artificial Intelligence in Healthcare",
    level: "IELTS 7.0",
    category: "Health & Science",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    content: [
      "Artificial Intelligence (AI) is rapidly transforming various sectors, and healthcare stands at the forefront of this technological revolution. Machine learning models, trained on millions of medical records and high-resolution clinical images, are helping physicians detect **complex diseases** earlier and formulate **tailored treatment plans** with astonishing accuracy.",
      "One major area where AI shines is **diagnostic imaging**. Historically, analyzing X-rays, CT scans, and MRIs required decades of specialist experience, yet human fatigue could occasionally cause subtle anomalies to be overlooked. Deep learning algorithms can now scan thousands of radiological scans in seconds, **identifying malignant tumors** or microscopic fractures with diagnostic precision rivaling top radiologists.",
      "Beyond imaging, **predictive analytics** powered by AI is empowering healthcare providers to anticipate patient deterioration hours before clinical symptoms become overt. By continuously monitoring real-time vital signs in intensive care units, these systems alert medical staff to impending **sepsis or cardiovascular failure**, buying precious time for life-saving interventions.",
      "However, the adoption of AI in healthcare is not without challenges. Issues concerning **data privacy, algorithmic bias**, and the 'black-box' nature of deep neural networks raise serious ethical and regulatory hurdles. Ensuring that AI serves as an **empathetic assistant** rather than an autonomous decision-maker remains paramount for safeguarding patient well-being."
    ],
    translationVi: [
      "Trí tuệ nhân tạo (AI) đang nhanh chóng làm thay đổi nhiều lĩnh vực, và ngành y tế đang đứng ở vị trí tiên phong của cuộc cách mạng công nghệ này. Các mô hình học máy, được huấn luyện dựa trên hàng triệu hồ sơ bệnh án và hình ảnh lâm sàng độ phân giải cao, đang giúp các bác sĩ phát hiện các **căn bệnh phức tạp** sớm hơn và xây dựng các **phác đồ điều trị may đo riêng** với độ chính xác đáng kinh ngạc.",
      "Một lĩnh vực mũi nhọn mà AI tỏa sáng chính là **chẩn đoán hình ảnh y khoa**. Trước đây, việc phân tích phim chụp X-quang, CT và MRI đòi hỏi hàng thập kỷ kinh nghiệm của chuyên gia, song sự mệt mỏi của con người đôi khi có thể khiến các bất thường nhỏ bị bỏ sót. Giờ đây, các thuật toán học sâu có thể quét qua hàng ngàn hình ảnh X-quang chỉ trong vài giây, **nhận diện các khối u ác tính** hoặc vết nứt siêu nhỏ với độ chuẩn xác tương đương các bác sĩ chẩn đoán hình ảnh hàng đầu.",
      "Vượt ra ngoài việc phân tích hình ảnh, **phân tích dự đoán** được hỗ trợ bởi AI đang trao quyền cho các cơ sở y tế dự đoán trước tình trạng suy kiệt của bệnh nhân hàng giờ trước khi các triệu chứng lâm sàng biểu hiện rõ rệt. Nhờ liên tục theo dõi các chỉ số sinh tồn theo thời gian thực tại các phòng chăm sóc đặc biệt (ICU), các hệ thống này cảnh báo đội ngũ y tế về nguy cơ **nhiễm trùng huyết hoặc suy tim mạch** sắp xảy ra, mang lại thời gian quý báu để can thiệp cứu sống bệnh nhân.",
      "Tuy vậy, việc ứng dụng AI vào chăm sóc sức khỏe không phải là không có thách thức. Các vấn đề liên quan đến **quyền riêng tư của dữ liệu, định kiến thuật toán** và bản chất 'hộp đen' khó giải thích của các mạng nơ-ron sâu đặt ra những rào cản đạo đức và pháp lý nghiêm trọng. Việc đảm bảo rằng AI đóng vai trò như một **trợ lý thấu cảm** thay vì một người đưa ra quyết định độc lập vẫn là yếu tố tối quan trọng để bảo vệ sức khỏe và sự an toàn của người bệnh."
    ],
    questions: [
      {
        question: "How is AI primarily aiding physicians in diagnostic imaging?",
        options: [
          "By completely replacing the need for human radiologists.",
          "By rapidly detecting microscopic anomalies and malignant tumors.",
          "By producing lower cost physical X-ray machines.",
          "By managing the hospital appointment scheduling."
        ],
        answer: "By rapidly detecting microscopic anomalies and malignant tumors."
      },
      {
        question: "What is a major ethical concern regarding AI in healthcare?",
        options: [
          "Hospitals spending too much money on computers.",
          "Data privacy issues and algorithmic bias in automated decisions.",
          "Patients refusing to have their blood pressure taken.",
          "Doctors forgetting how to write paper prescriptions."
        ],
        answer: "Data privacy issues and algorithmic bias in automated decisions."
      }
    ]
  },
  {
    id: "r2",
    title: "Urban Sprawl and Environmental Impact",
    level: "IELTS 6.5",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&q=80",
    content: [
      "Urban sprawl, or the **uncontrolled expansion** of urban areas into rural land, has become a defining characteristic of modern city growth. Driven by population increase, affordable automobile transport, and the desire for larger residential living spaces, cities across the globe have expanded outwards, engulfing **fertile agricultural fields and natural habitats**.",
      "One of the most immediate impacts of urban sprawl is the **increased reliance on automobiles**. Low-density suburban neighborhoods are intentionally separated from commercial zones, making walking, cycling, or public transit largely impractical. Consequently, suburban commuters spend hours daily in traffic congestion, substantially **escalating greenhouse gas emissions** and deteriorating local air quality.",
      "Furthermore, the construction of vast suburban infrastructure—such as highways, extensive parking lots, and housing subdivisions—creates vast **impermeable surfaces**. Rainwater cannot infiltrate the soil naturally, leading to exacerbated **stormwater runoff, soil erosion**, and higher risks of urban flash flooding. The destruction of contiguous forests also disrupts **biodiversity corridors**, driving native wildlife away from their natural ecosystems.",
      "City planners are increasingly advocating for **'smart growth' principles** to combat the drawbacks of sprawl. By prioritizing **compact, mixed-use zoning**, revitalizing neglected urban centers, and investing in high-frequency public transportation, communities can foster sustainable economic vitality while preserving **vital open green spaces** for future generations."
    ],
    translationVi: [
      "Sự mở rộng đô thị tràn lan (urban sprawl), hay **sự phát triển thiếu kiểm soát** của các vùng đô thị lấn sang các vùng đất nông thôn, đã trở thành một đặc điểm nổi bật của quá trình phát triển đô thị hiện đại. Dưới tác động của sự gia tăng dân số, phương tiện ô tô giá cả phải chăng và nhu cầu về không gian sống rộng rãi hơn, các thành phố trên toàn cầu đã mở rộng ra bên ngoài, nuốt chửng những **vùng đất nông nghiệp màu mỡ và môi trường sống tự nhiên**.",
      "Một trong những tác động trực tiếp và nhãn tiền nhất của đô thị hóa tràn lan là **sự phụ thuộc ngày càng lớn vào xe hơi**. Các khu dân cư ngoại ô mật độ thấp được xây dựng tách biệt hẳn khỏi các khu thương mại, khiến việc đi bộ, đạp xe hay sử dụng phương tiện giao thông công cộng gần như là bất khả thi. Hậu quả là, những người sống ở ngoại ô phải chôn chân hàng giờ mỗi ngày trong cảnh tắc đường, làm **gia tăng đáng kể lượng khí thải nhà kính** và làm suy giảm chất lượng không khí địa phương.",
      "Hơn nữa, việc xây dựng các công trình hạ tầng ngoại ô khổng lồ—chẳng hạn như đường cao tốc, bãi đậu xe rộng lớn và các phân khu nhà ở—tạo ra những **bề mặt không thấm nước** khổng lồ. Nước mưa không thể ngấm vào đất một cách tự nhiên, dẫn đến tình trạng **nước chảy tràn trên bề mặt tăng cao, xói mòn đất** và nguy cơ lũ quét đô thị lớn hơn. Sự phá hủy các mảng rừng liên tục cũng làm đứt gãy các **hành lang đa dạng sinh học**, đẩy các loài động vật hoang dã bản địa ra khỏi hệ sinh thái tự nhiên của chúng.",
      "Các nhà quy hoạch đô thị đang ngày càng ủng hộ **các nguyên tắc 'phát triển thông minh'** nhằm khắc phục những nhược điểm của sự bành trướng đô thị. Bằng cách ưu tiên **quy hoạch các khu vực tập trung, đa chức năng**, hồi sinh các trung tâm đô thị cũ và đầu tư vào hệ thống giao thông công cộng tần suất cao, các cộng đồng có thể thúc đẩy sức sống kinh tế bền vững trong khi vẫn bảo tồn được những **không gian xanh mở sống còn** cho các thế hệ tương lai."
    ],
    questions: [
      {
        question: "Why does urban sprawl lead to increased air pollution?",
        options: [
          "It forces residents to rely heavily on automobiles due to inefficient public transit.",
          "It encourages the building of more factories in the suburbs.",
          "It requires more electricity to light up large areas.",
          "It creates massive habitat fragmentation."
        ],
        answer: "It forces residents to rely heavily on automobiles due to inefficient public transit."
      },
      {
        question: "How do impermeable surfaces like typical suburban concrete affect the environment?",
        options: [
          "They generate greenhouse gases.",
          "They cause habitat isolation and divide wildlife populations.",
          "They increase the local temperature significantly.",
          "They prevent rainwater absorption, leading to flooding and toxic runoff."
        ],
        answer: "They prevent rainwater absorption, leading to flooding and toxic runoff."
      }
    ]
  }
];
