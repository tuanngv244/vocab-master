import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const topics = [
  { id: "animals", name: "Animals & Pets" },
  { id: "food", name: "Food & Drinks" },
  { id: "family", name: "Family & People" },
  { id: "emotions", name: "Feelings & Emotions" },
  { id: "colors", name: "Colors & Shapes" },
  { id: "school", name: "School & Study" },
  { id: "weather", name: "Weather & Seasons" },
  { id: "body", name: "Body Parts" },
  { id: "actions", name: "Daily Actions" },
  { id: "numbers", name: "Numbers & Counting" },
  { id: "shapes", name: "Shapes & Sizes" },
  { id: "clothes", name: "Clothes & Fashion" },
  { id: "business", name: "Business & Work" },
  { id: "travel", name: "Travel & Transport" },
  { id: "education", name: "Education & School" },
  { id: "health2", name: "Health & Fitness" },
  { id: "nature", name: "Nature & Environment" },
  { id: "home", name: "Home & Furniture" },
  { id: "art", name: "Art & Culture" },
  { id: "science", name: "Science & Space" },
  { id: "hobbies", name: "Hobbies & Free Time" },
  { id: "jobs", name: "Professions & Jobs" },
  { id: "vehicles", name: "Vehicles & Transport" },
  { id: "technology2", name: "Devices & Tech" },
  { id: "society", name: "Society & Community" },
  { id: "shopping", name: "Shopping & Retail" },
  { id: "communication", name: "Communication & Media" },
  { id: "finance", name: "Finance & Money" },
  { id: "materials", name: "Materials & Textures" },
  { id: "time", name: "Time & Calendar" },
  { id: "space", name: "Space Exploration" },
  { id: "kitchen", name: "Kitchen & Cooking" },
  { id: "law", name: "Law & Justice" },
  { id: "geography", name: "Geography" }
];

async function run() {
  const allVocab = {};
  console.log("Starting generation in parallel...");
  
  await Promise.all(topics.map(async (topic) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an English teacher generating vocabulary lists for Vietnamese learners.
Generate exactly 45 unique English words (mix of basic to advanced) for the topic: "${topic.name}".
Respond ONLY with a valid stringified JSON ARRAY of objects. NO markdown formatting.
Each object must exactly match this shape:
{
  "id": "${topic.id}_xxx",
  "word": "word",
  "pronunciation": "/pronunciation/",
  "meaning": "Vietnamese meaning",
  "example": "Simple English sentence.",
  "emoji": "🐯"
}`,
        config: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      });
      
      let text = response.text;
      const words = JSON.parse(text);
      allVocab[topic.id] = words.slice(0, 45);
      console.log(`Generated ${words.length} words for ${topic.id}`);
    } catch (err) {
      console.error(`Failed for ${topic.id}:`, err.message);
      allVocab[topic.id] = [];
    }
  }));
  
  // Also load the old ones to see? No, we will just export and merge via app code!
  const fileContent = `import { Word } from "./types";
export const generatedVocab: Record<string, Word[]> = ${JSON.stringify(allVocab, null, 2)};
`;

  fs.writeFileSync('./src/generated_data.ts', fileContent);
  console.log("Finished generating src/generated_data.ts !");
}

run();
