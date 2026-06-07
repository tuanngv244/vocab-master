import { ReadingArticle, ListeningExercise } from "./types";

export const readingArticles: ReadingArticle[] = [
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
      },
      {
        question: "Which of the following is cited as a challenge of adopting AI in healthcare?",
        options: [
          "A lack of available medical data.",
          "Issues concerning data privacy and algorithmic bias.",
          "The inability of AI to process thousands of images.",
          "The high energy consumption of computers."
        ],
        answer: "Issues concerning data privacy and algorithmic bias."
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
      },
      {
        question: "What is 'smart growth'?",
        options: [
          "Expanding the use of electric cars in sprawling areas.",
          "Developing compact, walkable, and transit-oriented communities.",
          "Transforming all urban areas into agricultural lands.",
          "Building taller structures in suburban neighborhoods."
        ],
        answer: "Developing compact, walkable, and transit-oriented communities."
      }
    ]
  }
];

export const listeningExercises: ListeningExercise[] = [
  {
    id: "l3",
    title: "The Importance of Sleep for Memory",
    level: "IELTS 6.0",
    durationLabel: "30 seconds",
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
        question: "Why might pulling an an all-nighter be a bad idea for studying?",
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
    durationLabel: "45 seconds",
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
    durationLabel: "35 seconds",
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
