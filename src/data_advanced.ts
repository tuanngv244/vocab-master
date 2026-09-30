import { ReadingArticle, ListeningExercise } from "./types";

export const readingArticles: ReadingArticle[] = [
  // --- Beginner (A1-A2) Articles ---
  {
    id: "rb1",
    title: "My Daily Morning Routine",
    level: "Beginner A1",
    category: "Daily Life",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    content: [
      "Every morning, my alarm rings at six thirty. I wake up, stretch my arms, and get out of bed. The first thing I do is drink a large glass of warm water.",
      "Then, I go to the bathroom to brush my teeth and wash my face. Afterwards, I walk into the kitchen to prepare breakfast. I usually fry two fresh eggs and toast two slices of bread. I also brew a hot cup of black coffee.",
      "While eating breakfast, I listen to English morning radio. At seven forty-five, I put on my coat, grab my backpack, and walk to the bus stop to catch bus number twelve to school."
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
      "On Saturday morning, Laura goes shopping at the local supermarket near her house. Before leaving home, she writes a shopping list on a small piece of paper.",
      "First, she walks to the fruit section and selects five red apples, four yellow bananas, and a bunch of green grapes. Next, she visits the dairy aisle to pick up two cartons of fresh milk and a block of butter.",
      "Finally, she goes to the checkout counter. The cashier scans each item with a barcode scanner. Laura pays for her groceries with her debit card, packs the food into reusable cloth bags, and happily walks home."
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
      "I have a pet cat named Milo. Milo is two years old and has soft orange and white fur with bright green eyes.",
      "During the afternoon, Milo loves sleeping in sunny spots on the living room sofa. When he is hungry, he meows softly beside his food bowl until someone feeds him delicious canned tuna.",
      "In the evening, Milo becomes energetic. He chases a little red rubber ball across the wooden floor and jumps into empty cardboard boxes. Having Milo as a pet always brings happiness to our family."
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
          "He sleeps on the living room sofa."
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
      "Autumn is my favorite season of the year. It begins in September and ends in November. The hot weather of summer disappears, and the air becomes cool and fresh.",
      "The most beautiful part of autumn is the trees. Leaves on maple and oak trees change from green to brilliant shades of orange, yellow, and deep red. On windy days, dry leaves fall gently to the ground like rain.",
      "I enjoy going for long walks in the park wearing a warm woolen sweater. In the evening, I like sitting near the window with a hot cup of cinnamon tea and reading a good book."
    ],
    questions: [
      {
        question: "When does autumn take place according to the text?",
        options: [
          "From March to May.",
          "From June to August.",
          "From September to November.",
          "From December to February."
        ],
        answer: "From September to November."
      },
      {
        question: "What color do tree leaves become in autumn?",
        options: [
          "Only dark blue and purple.",
          "Brilliant shades of orange, yellow, and red.",
          "Bright silver and gold.",
          "They stay bright green all year."
        ],
        answer: "Brilliant shades of orange, yellow, and red."
      }
    ]
  },
  {
    id: "rb5",
    title: "Cooking Spaghetti with Family",
    level: "Beginner A1",
    category: "Food & Cooking",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    content: [
      "On Sunday evenings, our family cooks dinner together. Tonight, we decided to make Italian spaghetti with rich tomato sauce.",
      "My father boils water in a large stainless steel pot and adds the pasta. My mother chops garlic, sweet onions, and red ripe tomatoes on the wooden cutting board.",
      "My younger brother and I help set the dining table with forks, plates, and clean napkins. When the pasta is tender, we mix it with the hot sauce and sprinkle grated parmesan cheese on top. It tastes wonderful!"
    ],
    questions: [
      {
        question: "Who chops the garlic, onions, and tomatoes?",
        options: [
          "The writer's mother.",
          "The writer's father.",
          "The younger brother.",
          "The restaurant chef."
        ],
        answer: "The writer's mother."
      },
      {
        question: "What do the children do to help with dinner?",
        options: [
          "They boil the pasta.",
          "They wash all the pots.",
          "They set the dining table with forks and plates.",
          "They go to the store to buy sauce."
        ],
        answer: "They set the dining table with forks and plates."
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
      "Last weekend, my best friends and I took a bus to the sunny seaside. The weather was perfect with clear blue skies and a gentle sea breeze.",
      "We put our beach towels on the soft golden sand and applied sunscreen. The water in the ocean was cool and refreshing. We swam for an hour and built a tall sandcastle with seashells on top.",
      "At noon, we ate fresh fruit sandwiches and drank cold coconut water under a beach umbrella. Before going home, we watched the golden sunset reflect over the ocean waves."
    ],
    questions: [
      {
        question: "How did the friends travel to the seaside?",
        options: [
          "By taking a bus.",
          "By riding motorbikes.",
          "By taking an airplane.",
          "By sailing on a boat."
        ],
        answer: "By taking a bus."
      },
      {
        question: "What did they drink under the beach umbrella?",
        options: [
          "Hot green tea.",
          "Cold coconut water.",
          "Apple cider.",
          "Tomato juice."
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
      "Many language teachers recommend listening to English music as a fun and practical way to improve vocabulary and pronunciation.",
      "When you listen to a catchy song, you naturally repeat the chorus and learn how native speakers connect sounds. Reading the song lyrics while listening helps you connect written words with their actual pronunciation.",
      "You can choose simple pop songs or acoustic ballads with clear vocals. Writing down new words from the lyrics in a notebook and singing along every day will make your English speaking much more natural."
    ],
    questions: [
      {
        question: "Why does listening to songs help English learners?",
        options: [
          "It helps them learn grammar rules from textbooks.",
          "It improves vocabulary and helps them practice natural pronunciation.",
          "It teaches them how to play acoustic instruments.",
          "It makes studying unnecessary."
        ],
        answer: "It improves vocabulary and helps them practice natural pronunciation."
      },
      {
        question: "What is recommended when listening to English songs?",
        options: [
          "Reading the lyrics while listening and writing down new words.",
          "Turning the volume up to maximum level.",
          "Listening only to songs with no singer.",
          "Translating every single word into Latin."
        ],
        answer: "Reading the lyrics while listening and writing down new words."
      }
    ]
  },
  {
    id: "rb8",
    title: "Visiting the City Public Library",
    level: "Beginner A1",
    category: "Community",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    content: [
      "The city public library is located in the center of town. It is a large, quiet building with three floors and thousands of books.",
      "On the first floor, there is a children's reading corner and computers with free internet access. The second floor contains fiction novels, history books, and quiet study desks with reading lamps.",
      "Anyone who lives in the city can sign up for a free library card. With this card, you can borrow up to five books for three weeks. It is my favorite place to study on weekends."
    ],
    questions: [
      {
        question: "How many books can a member borrow at one time?",
        options: [
          "Up to two books.",
          "Up to five books.",
          "Up to ten books.",
          "Only one book."
        ],
        answer: "Up to five books."
      },
      {
        question: "What is found on the second floor of the library?",
        options: [
          "A cafeteria and coffee shop.",
          "Fiction novels, history books, and quiet study desks.",
          "A children's playground.",
          "A sports gymnasium."
        ],
        answer: "Fiction novels, history books, and quiet study desks."
      }
    ]
  },
  {
    id: "rb9",
    title: "My Job as a Coffee Barista",
    level: "Beginner A2",
    category: "Work & Jobs",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
    content: [
      "My name is Daniel and I work as a barista at a cozy cafe called Morning Aroma. My shift begins at seven o'clock in the morning.",
      "My first duty is turning on the espresso machine and grinding fresh roasted coffee beans. When customers arrive on their way to work, I take their orders with a warm smile and prepare hot lattes, cappuccinos, or iced americanos.",
      "Although working during the morning rush is busy, I really enjoy talking with regular customers and practicing latte art on milk foam."
    ],
    questions: [
      {
        question: "What is Daniel's job?",
        options: [
          "He is a bus driver.",
          "He is a barista at a cafe.",
          "He is a school teacher.",
          "He is a hotel receptionist."
        ],
        answer: "He is a barista at a cafe."
      },
      {
        question: "What does Daniel like about his work?",
        options: [
          "Leaving work very late at night.",
          "Talking with regular customers and practicing latte art.",
          "Drinking ten cups of coffee each morning.",
          "Working completely alone with no people."
        ],
        answer: "Talking with regular customers and practicing latte art."
      }
    ]
  },
  {
    id: "rb10",
    title: "Riding a Bicycle to School",
    level: "Beginner A1",
    category: "Transport & Health",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80",
    content: [
      "Instead of taking the crowded morning bus, I decided to ride my blue bicycle to school every day. My school is about three kilometers from my home.",
      "Our city has wide, green bicycle lanes next to the sidewalks. This makes cycling very safe and convenient. I always wear a sturdy helmet and bright clothes so car drivers can see me easily.",
      "Cycling provides great daily exercise for my legs and heart. It also saves money on bus tickets and protects the environment from air pollution."
    ],
    questions: [
      {
        question: "Why does the writer feel safe riding their bicycle in the city?",
        options: [
          "Because the city has wide, green bicycle lanes.",
          "Because there are no cars on the streets.",
          "Because the police escort them to school.",
          "Because they ride on the highway."
        ],
        answer: "Because the city has wide, green bicycle lanes."
      },
      {
        question: "What safety equipment does the writer always wear?",
        options: [
          "A thick winter coat.",
          "A sturdy helmet.",
          "Dark black sunglasses.",
          "Swimming goggles."
        ],
        answer: "A sturdy helmet."
      }
    ]
  },
  {
    id: "rb11",
    title: "A Surprise Birthday Party for Anna",
    level: "Beginner A1",
    category: "Celebrations",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
    content: [
      "Yesterday was Anna's twentieth birthday. Her friends planned a secret surprise party at her apartment.",
      "While Anna was at university classes, her friends gathered in her living room. They decorated the walls with colorful helium balloons and paper streamers. Anna's roommate baked a double-chocolate birthday cake with twenty small candles.",
      "When Anna unlocked the front door at five o'clock, everyone jumped up and shouted 'Surprise! Happy Birthday!' Anna was so happy that tears filled her eyes. We ate cake and danced until nine o'clock."
    ],
    questions: [
      {
        question: "Where did the surprise party take place?",
        options: [
          "At a luxury restaurant.",
          "In Anna's living room at her apartment.",
          "In a school classroom.",
          "At an outdoor park."
        ],
        answer: "In Anna's living room at her apartment."
      },
      {
        question: "What kind of cake did Anna's roommate bake?",
        options: [
          "A double-chocolate cake with twenty candles.",
          "A lemon vanilla cake.",
          "A strawberry cheesecake.",
          "An apple pie."
        ],
        answer: "A double-chocolate cake with twenty candles."
      }
    ]
  },
  {
    id: "rb12",
    title: "Planting Flowers in the Garden",
    level: "Beginner A2",
    category: "Hobbies & Nature",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    content: [
      "Spring is the best time to care for the backyard garden. Last Saturday, my grandfather and I decided to plant colorful flowers along the stone walkway.",
      "First, we pulled out all the dry weeds and loosened the dark soil using a small garden shovel. Then, we made small holes and planted seeds of red tulips, yellow sunflowers, and purple lavender.",
      "We gently covered the seeds with soil and watered them using a green watering can. Grandfather said that with warm sunshine and care, we will see lovely green sprouts in two weeks."
    ],
    questions: [
      {
        question: "What flowers did they plant along the walkway?",
        options: [
          "Tulips, sunflowers, and lavender.",
          "Only white roses.",
          "Cactus and bamboo.",
          "Cherry trees."
        ],
        answer: "Tulips, sunflowers, and lavender."
      },
      {
        question: "What did they use to water the seeds?",
        options: [
          "A green watering can.",
          "A bucket of cold river water.",
          "An electric water pump.",
          "They waited for rain."
        ],
        answer: "A green watering can."
      }
    ]
  },

  // --- Advanced (IELTS 6.0+) Articles ---
  {
    id: "r4",
    title: "The Mechanics of Cryptocurrencies",
    level: "IELTS 6.5",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80",
    content: [
      "Cryptocurrencies operate on a technology called blockchain, which is essentially a decentralized ledger. Unlike traditional fiat currencies controlled by central banks, cryptocurrencies rely on a network of computers to verify and record transactions.",
      "When a transaction occurs, it is combined with other recent transactions into a 'block'. This block is then encrypted using complex algorithms and linked to the preceding block, forming a 'chain' of chronological data. This structure makes it incredibly difficult to alter historical data, providing a high level of security and transparency.",
      "However, the cryptocurrency market is notoriously volatile. Prices are largely driven by speculation rather than intrinsic value, leading to severe fluctuations. Investors and financial regulators differ on whether digital currencies represent the future of finance or a high-stakes bubble waiting to burst."
    ],
    questions: [
      {
        question: "How do cryptocurrencies verify transactions?",
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
      "The last two decades have witnessed a monumental shift in consumer behavior, primarily driven by the advent and exponential growth of e-commerce. Online shopping platforms have transformed the retail landscape, offering unprecedented convenience, a vast array of choices, and often, competitive pricing.",
      "Traditional brick-and-mortar stores are facing intense pressure to adapt. Many established retailers have been forced to downsize or close entirely due to the changing market dynamics. However, some have successfully integrated 'omnichannel' strategies, blending physical storefronts with robust online shopping experiences.",
      "One significant advantage of e-commerce is the ability to leverage consumer data. Online retailers can track browsing habits, purchase history, and demographic information to personalize marketing efforts and recommend relevant products. This level of targeted advertising is difficult to achieve in a traditional retail setting.",
      "Despite the benefits, e-commerce also brings challenges, particularly concerning logistics and the environment. The demand for fast shipping has led to an increase in packaging waste and carbon emissions from delivery vehicles. Finding sustainable solutions for the 'last-mile' delivery problem remains a key focus for the industry."
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
      },
      {
        question: "What environmental challenge is associated with e-commerce?",
        options: [
          "The excessive electricity used by large shopping malls.",
          "The depletion of natural resources used to manufacture computers.",
          "An increase in packaging waste and emissions from delivery vehicles.",
          "The destruction of forests to build massive server farms."
        ],
        answer: "An increase in packaging waste and emissions from delivery vehicles."
      }
    ]
  },
  {
    id: "r1",
    title: "The Future of Artificial Intelligence in Healthcare",
    level: "IELTS 7.0",
    category: "Science & Technology",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?w=800&q=80",
    content: [
      "Artificial Intelligence (AI) is rapidly transforming various sectors, and healthcare is arguably one of the most impacted. The integration of machine learning algorithms and advanced data analytics is changing how medical professionals diagnose illnesses, customize treatments, and predict patient outcomes.",
      "One major area where AI shines is diagnostic imaging. Historically, analyzing X-rays, MRIs, and CT scans has been a time-consuming process heavily reliant on the subjective interpretation of radiologists. Today, AI systems can scan thousands of images in seconds, detecting minute anomalies that might escape the human eye. This not only speeds up the diagnostic process but also significantly reduces the margin for error.",
      "Beyond imaging, predictive analytics powered by AI is empowering healthcare providers to take a proactive approach to patient care. By analyzing historical patient data, AI can forecast potential health crises before they manifest, allowing for early intervention. For example, algorithms can predict which patients are at high risk of rapid deterioration, enabling hospitals to allocate resources more efficiently.",
      "However, the adoption of AI in healthcare is not without challenges. Issues concerning data privacy, algorithmic bias, and the exact role of the physician in an AI-driven environment remain subjects of intense debate. Critics argue that while AI can offer data-driven insights, it lacks the empathetic discretion necessary for complex medical decisions. As technology continues to evolve, striking a balance between artificial and human intelligence will be critical."
    ],
    questions: [
      {
        question: "According to the passage, how is AI primarily changing diagnostic imaging?",
        options: [
          "By completely replacing the need for human radiologists.",
          "By scanning images rapidly and identifying small anomalies.",
          "By making the equipment itself much cheaper to produce.",
          "By making MRIs and X-rays obsolete."
        ],
        answer: "By scanning images rapidly and identifying small anomalies."
      },
      {
        question: "What is one benefit of predictive analytics mentioned in the text?",
        options: [
          "It helps hospitals eliminate the need for emergency rooms.",
          "It lowers the overall cost of pharmaceuticals.",
          "It predicts a doctor's schedule for efficiency.",
          "It allows for early intervention by forecasting potential health crises."
        ],
        answer: "It allows for early intervention by forecasting potential health crises."
      }
    ]
  },
  {
    id: "r2",
    title: "Urban Sprawl and Environmental Impact",
    level: "IELTS 6.5",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    content: [
      "Urban sprawl, or the uncontrolled expansion of urban areas, has become a defining characteristic of modern city development. As populations grow, cities expand outward, often enveloping surrounding agricultural lands and natural habitats. This phenomenon contributes significantly to a range of environmental and social issues.",
      "One of the most immediate impacts of urban sprawl is the increased reliance on automobiles. Because sprawled communities are spread out, public transportation is often inefficient or unavailable, forcing residents to drive. This high dependency on cars leads to severe traffic congestion and staggering increases in air pollution and greenhouse gas emissions, further exacerbating global climate change.",
      "Furthermore, the construction of vast suburban infrastructure—such as roads, parking lots, and housing developments—causes massive habitat fragmentation. Wildlife populations are divided and isolated, which restricts their movement and significantly decreases local biodiversity. Moreover, large areas of impermeable surfaces like concrete prevent rainwater from soaking into the earth, which can lead to increased flooding and the contamination of nearby water bodies through toxic runoff.",
      "City planners are increasingly advocating for 'smart growth' principles to combat sprawl. This involves developing compact, walkable, and transit-oriented communities. By concentrating development within existing urban boundaries and preserving open spaces, cities can mitigate the adverse environmental effects of sprawl while fostering more vibrant and sustainable communities."
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

export const listeningExercises: ListeningExercise[] = [
  // --- Beginner (A1-A2) Exercises ---
  {
    id: "lb1",
    title: "Ordering Coffee at a Cafe",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Barista: Hello! Welcome to Sun Cafe. What can I get for you today? Customer: Hi, I would like one hot latte with oat milk, please. Barista: Sure thing! Would you like a small or medium cup? Customer: Medium, please. And could I also have one fresh chocolate muffin? Barista: Absolutely! That will be six dollars in total. You can tap your card right here.",
    questions: [
      {
        question: "What drink did the customer order?",
        options: [
          "An iced caramel macchiato.",
          "A hot latte with oat milk.",
          "A cup of hot green tea.",
          "An orange smoothie."
        ],
        answer: "A hot latte with oat milk."
      },
      {
        question: "What bakery item did the customer add to their order?",
        options: [
          "A blueberry bagel.",
          "A chocolate muffin.",
          "A slice of cheesecake.",
          "A butter croissant."
        ],
        answer: "A chocolate muffin."
      }
    ]
  },
  {
    id: "lb2",
    title: "Asking for Directions to the Train Station",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Tourist: Excuse me, could you tell me how to get to the central train station? Local: Yes, of course! Walk straight down this street for two blocks. When you reach the bookstore, turn left onto King Street. The train station is a large brick building right across from the public park. Tourist: Thank you so much for your help! Local: You are very welcome! Have a wonderful day!",
    questions: [
      {
        question: "How many blocks should the tourist walk straight before turning?",
        options: [
          "Two blocks.",
          "Five blocks.",
          "One block.",
          "Three blocks."
        ],
        answer: "Two blocks."
      },
      {
        question: "Where is the train station located?",
        options: [
          "Behind a large hospital.",
          "Right across from the public park.",
          "Inside the shopping mall.",
          "Next to the airport terminal."
        ],
        answer: "Right across from the public park."
      }
    ]
  },
  {
    id: "lb3",
    title: "Checking into a Hotel",
    level: "Beginner A1",
    durationLabel: "30s",
    script: "Guest: Good afternoon. I have a hotel room reservation under the name David Miller. Receptionist: Welcome to Grand Hotel, Mr. Miller. Let me check our system. Yes, here it is: a non-smoking single room for three nights. Your room is number 504 on the fifth floor. Breakfast is included and served every morning from seven to ten in the ground floor dining room. Here is your keycard.",
    questions: [
      {
        question: "What is the guest's room number?",
        options: [
          "Room 304.",
          "Room 504.",
          "Room 702.",
          "Room 105."
        ],
        answer: "Room 504."
      },
      {
        question: "What time is breakfast served at the hotel?",
        options: [
          "From six to nine in the morning.",
          "From seven to ten in the morning.",
          "From eight to eleven in the morning.",
          "Breakfast is not included."
        ],
        answer: "From seven to ten in the morning."
      }
    ]
  },
  {
    id: "lb4",
    title: "Talking About Weekend Plans",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Tom: Hi Sarah! Do you have any special plans for this Saturday? Sarah: Hi Tom! Yes, my sister and I are going to have a picnic in the botanical garden. The forecast says it will be sunny and warm. What about you? Tom: That sounds lovely! My friends and I bought tickets to watch our local football team play at the stadium on Saturday afternoon.",
    questions: [
      {
        question: "Where is Sarah going this Saturday?",
        options: [
          "To the cinema.",
          "To have a picnic in the botanical garden.",
          "To the library to study.",
          "To a friend's wedding party."
        ],
        answer: "To have a picnic in the botanical garden."
      },
      {
        question: "What is Tom going to do?",
        options: [
          "Play golf by himself.",
          "Watch a football match at the stadium with friends.",
          "Clean his apartment.",
          "Go swimming at the beach."
        ],
        answer: "Watch a football match at the stadium with friends."
      }
    ]
  },
  {
    id: "lb5",
    title: "Train Delay Announcement",
    level: "Beginner A2",
    durationLabel: "20s",
    script: "Announcement: Attention passengers waiting on Platform 3. The 10:15 morning express train to Oxford has been delayed by approximately fifteen minutes due to routine track maintenance. The train is now scheduled to arrive at 10:30. We sincerely apologize for any inconvenience. Please stay safely behind the yellow line.",
    questions: [
      {
        question: "Which train is delayed?",
        options: [
          "The 9:00 train to London.",
          "The 10:15 train to Oxford.",
          "The 11:30 train to Cambridge.",
          "The midnight freight train."
        ],
        answer: "The 10:15 train to Oxford."
      },
      {
        question: "Why was the train delayed?",
        options: [
          "Due to heavy snow.",
          "Due to routine track maintenance.",
          "Because the driver was late.",
          "Because of a power outage."
        ],
        answer: "Due to routine track maintenance."
      }
    ]
  },
  {
    id: "lb6",
    title: "Meeting a Friendly New Neighbor",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Mark: Hello! I am Mark. I just moved into apartment 4B yesterday afternoon. Elena: Oh, hello Mark! Nice to meet you. I am Elena, living right across the hall in 4A. Welcome to our building! Mark: Thank you Elena. Everyone seems very friendly here. Elena: It is a quiet and safe building. If you need to borrow any kitchen utensils or need tips about local markets, feel free to knock on my door!",
    questions: [
      {
        question: "Which apartment did Mark move into?",
        options: [
          "Apartment 2C.",
          "Apartment 4B.",
          "Apartment 5A.",
          "Apartment 101."
        ],
        answer: "Apartment 4B."
      },
      {
        question: "What does Elena offer to help Mark with?",
        options: [
          "Borrowing kitchen utensils or sharing local market tips.",
          "Painting his apartment walls.",
          "Fixing his car engine.",
          "Paying his electricity bill."
        ],
        answer: "Borrowing kitchen utensils or sharing local market tips."
      }
    ]
  },
  {
    id: "lb7",
    title: "Doctor's Advice for a Mild Cold",
    level: "Beginner A2",
    durationLabel: "25s",
    script: "Doctor: Well, Alex, I have checked your temperature and examined your throat. You have a mild seasonal cold, nothing serious. Here is what you should do: drink plenty of warm water with honey, get at least eight hours of sleep, and take one vitamin C tablet daily after your breakfast. If you still have a fever after three days, please return to the clinic.",
    questions: [
      {
        question: "What illness does Alex have?",
        options: [
          "A broken bone.",
          "A mild seasonal cold.",
          "An ear infection.",
          "A stomach flu."
        ],
        answer: "A mild seasonal cold."
      },
      {
        question: "When should Alex take the vitamin C tablet?",
        options: [
          "Before going to bed.",
          "Once daily after breakfast.",
          "Before exercising.",
          "Every two hours."
        ],
        answer: "Once daily after breakfast."
      }
    ]
  },
  {
    id: "lb8",
    title: "Shopping for a Winter Jacket",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Shop Assistant: Good morning! Can I help you find something? Shopper: Yes, please. I am looking for a warm winter jacket in size medium. Shop Assistant: Certainly! We have this dark blue waterproof jacket on sale. It has a warm fleece inner lining and a detachable hood. Would you like to try it on in the fitting room over there? Shopper: That sounds great, thank you!",
    questions: [
      {
        question: "What size jacket is the shopper looking for?",
        options: [
          "Size Small.",
          "Size Medium.",
          "Size Large.",
          "Size Extra Large."
        ],
        answer: "Size Medium."
      },
      {
        question: "What feature does the jacket have?",
        options: [
          "It is made of pure silk.",
          "It is waterproof with a warm fleece lining.",
          "It has built-in electronic speakers.",
          "It only comes in bright yellow."
        ],
        answer: "It is waterproof with a warm fleece lining."
      }
    ]
  },
  {
    id: "lb9",
    title: "Inviting a Friend to Dinner",
    level: "Beginner A1",
    durationLabel: "20s",
    script: "Kevin: Hey Lisa! Are you free this Friday evening? Lisa: Yes, I do not have any plans yet. What is happening? Kevin: I am making homemade Italian pizza with crispy crust and inviting a few friends over to my place. Would you like to join us? Lisa: That sounds wonderful! I would love to come. What time should I arrive? Kevin: Around seven o'clock would be perfect!",
    questions: [
      {
        question: "What food is Kevin cooking this Friday?",
        options: [
          "Homemade Italian pizza.",
          "Barbecue hamburgers.",
          "Japanese sushi rolls.",
          "Spicy chicken soup."
        ],
        answer: "Homemade Italian pizza."
      },
      {
        question: "What time should Lisa arrive at Kevin's place?",
        options: [
          "At five o'clock.",
          "Around seven o'clock.",
          "At nine o'clock.",
          "At noon."
        ],
        answer: "Around seven o'clock."
      }
    ]
  },
  {
    id: "lb10",
    title: "Daily Weather Forecast",
    level: "Beginner A1",
    durationLabel: "20s",
    script: "Weather Reporter: Good evening, here is tomorrow's weather forecast for the metropolitan area. The morning will start slightly cool with patches of light fog. By midday, clouds will part, giving way to bright sunshine. The afternoon temperature will reach a comfortable high of twenty-two degrees Celsius. Have an enjoyable day tomorrow!",
    questions: [
      {
        question: "What will the weather be like by midday?",
        options: [
          "Heavy thunderstorm.",
          "Bright sunshine as clouds part.",
          "Freezing blizzard.",
          "Non-stop pouring rain."
        ],
        answer: "Bright sunshine as clouds part."
      },
      {
        question: "What is the expected high temperature for tomorrow afternoon?",
        options: [
          "Ten degrees Celsius.",
          "Twenty-two degrees Celsius.",
          "Thirty-five degrees Celsius.",
          "Zero degrees Celsius."
        ],
        answer: "Twenty-two degrees Celsius."
      }
    ]
  },
  {
    id: "lb11",
    title: "Airport Final Boarding Call",
    level: "Beginner A2",
    durationLabel: "25s",
    script: "Airport Announcer: This is the final boarding call for passengers booked on Pacific Airlines flight PA408 to Tokyo. All remaining passengers should proceed immediately to Gate 17. Please have your passport and boarding pass open and ready in hand. The aircraft doors will close in ten minutes. Thank you.",
    questions: [
      {
        question: "What is the destination of flight PA408?",
        options: [
          "Paris.",
          "Tokyo.",
          "New York.",
          "Sydney."
        ],
        answer: "Tokyo."
      },
      {
        question: "Which departure gate should passengers proceed to?",
        options: [
          "Gate 5.",
          "Gate 17.",
          "Gate 24.",
          "Gate 31."
        ],
        answer: "Gate 17."
      }
    ]
  },
  {
    id: "lb12",
    title: "Describing a Family Vacation Photo",
    level: "Beginner A1",
    durationLabel: "25s",
    script: "Speaker: Take a look at this picture from our summer trip to the countryside. On the left, my grandfather is wearing his favorite straw sun hat. In the middle, my little brother is laughing on the green grass with our golden retriever puppy, and my mother is holding a bowl of freshly picked strawberries. It was such a peaceful afternoon.",
    questions: [
      {
        question: "What is the grandfather wearing in the photo?",
        options: [
          "A black suit.",
          "His favorite straw sun hat.",
          "A baseball cap.",
          "A warm winter scarf."
        ],
        answer: "His favorite straw sun hat."
      },
      {
        question: "What is the mother holding in her hands?",
        options: [
          "A camera.",
          "A bowl of freshly picked strawberries.",
          "A bouquet of red flowers.",
          "A glass of lemonade."
        ],
        answer: "A bowl of freshly picked strawberries."
      }
    ]
  },

  // --- Advanced (IELTS 6.0+) Exercises ---
  {
    id: "l4",
    title: "Understanding Microplastics",
    level: "IELTS 6.5",
    durationLabel: "40s",
    script: "Microplastics are tiny plastic particles, typically less than five millimeters in length, that are increasingly polluting our environment. They originate from a variety of sources, including the breakdown of larger plastic debris, microbeads in cosmetics, and synthetic fibers shedding from clothing during washing. Because of their small size, microplastics easily slip through water filtration systems and end up in oceans and rivers. Marine life often mistakes these particles for food, leading to severe health issues for the animals and potentially entering the human food chain. Addressing this issue requires comprehensive policy changes and a shift in consumer habits.",
    questions: [
      {
        question: "What is one source of microplastics mentioned in the talk?",
        options: [
          "Metal shavings from factories.",
          "Synthetic fibers from clothing during washing.",
          "Natural degradation of rocks.",
          "Wood particles from deforestation."
        ],
        answer: "Synthetic fibers from clothing during washing."
      },
      {
        question: "Why do microplastics end up in oceans and rivers?",
        options: [
          "Because they are intentionally dumped there.",
          "Because they evaporate and fall as rain.",
          "Because they slip through water filtration systems due to their small size.",
          "Because marine life carries them there."
        ],
        answer: "Because they slip through water filtration systems due to their small size."
      }
    ]
  },
  {
    id: "l3",
    title: "The Importance of Sleep for Memory",
    level: "IELTS 6.0",
    durationLabel: "30s",
    script: "It's common knowledge that a good night's sleep leaves you feeling refreshed. But did you know that sleep is actually crucial for memory consolidation? During the deep stages of sleep, your brain is hard at work processing the day's events. It actively transfers information from short-term memory into long-term storage. So, if you're cramming for an exam, pulling an all-nighter might actually be counterproductive. Without adequate sleep, the brain struggles to retain new facts and figures.",
    questions: [
      {
        question: "According to the speaker, what happens during the deep stages of sleep?",
        options: [
          "The brain completely shuts down.",
          "The brain transfers information to long-term storage.",
          "The brain dreams about the next day.",
          "Short-term memory is erased."
        ],
        answer: "The brain transfers information to long-term storage."
      },
      {
        question: "Why might pulling an all-nighter be a bad idea for studying?",
        options: [
          "Because you will be too tired to write.",
          "Because it causes headaches.",
          "Because the brain cannot retain new facts without sleep.",
          "Because you will oversleep the next morning."
        ],
        answer: "Because the brain cannot retain new facts without sleep."
      }
    ]
  },
  {
    id: "l1",
    title: "Climate Change and Coastal Cities",
    level: "IELTS 6.5",
    durationLabel: "45s",
    script: "Welcome to today's lecture on the impact of climate change on coastal cities. As you all know, rising sea levels pose a significant threat to low-lying areas across the globe. Today, we will discuss two separate case studies. First, we will examine the ongoing water infrastructure struggles in Miami, where routine high tides routinely flood central avenues. Second, we will look at the Netherlands and their extensive engineering works, explicitly their 'Room for the River' project, which completely redefines how civil engineers handle encroaching tides. By comparing these two approaches to coastal management, we can better understand how human innovation aims to counteract the realities of a warming planet.",
    questions: [
      {
        question: "What is the main topic of the lecture?",
        options: [
          "The history of oceanography.",
          "The impact of climate change on coastal cities.",
          "Tourism in Miami and the Netherlands.",
          "How to build stronger coastal properties."
        ],
        answer: "The impact of climate change on coastal cities."
      },
      {
        question: "Which specific project in the Netherlands is mentioned?",
        options: [
          "The Great Wall Project",
          "The Room for the River Project",
          "The Coastal Barrier System",
          "The Delta Works Expansion"
        ],
        answer: "The Room for the River Project"
      }
    ]
  },
  {
    id: "l2",
    title: "The Psychology of Advertising",
    level: "IELTS 7.0",
    durationLabel: "35s",
    script: "Advertising is not just about showing a product; it's about connecting with consumer psychology. Marketers invest heavily in understanding what drives consumer behavior. One key concept is 'social proof'. Humans are naturally inclined to look to others when making decisions. If an advertisement can convince you that everyone else is using a particular product, you are significantly more likely to purchase it yourself. This is why testimonials from regular people are often more effective than celebrity endorsements. They create a powerful sense of relatability and trust that celebrities simply cannot match.",
    questions: [
      {
        question: "What is 'social proof' in the context of the talk?",
        options: [
          "A document proving the quality of a product.",
          "The tendency of humans to look to others when making decisions.",
          "A celebrity endorsement.",
          "The amount of money spent on an advertising campaign."
        ],
        answer: "The tendency of humans to look to others when making decisions."
      },
      {
        question: "Why are testimonials from regular people often more effective than celebrity endorsements?",
        options: [
          "Because celebrities charge too much money.",
          "Because regular people speak more clearly.",
          "Because they create a powerful sense of relatability and trust.",
          "Because regular people use the product more often."
        ],
        answer: "Because they create a powerful sense of relatability and trust."
      }
    ]
  }
];
