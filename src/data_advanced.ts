import { ListeningExercise } from "./types";
export { readingArticles } from "./data_reading";

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
