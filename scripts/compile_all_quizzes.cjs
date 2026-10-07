const fs = require('fs');
const path = require('path');

// Require all modules to register questions into quizzes map
const { quizzes } = require('./make_quiz_dataset.cjs');
require('./build_full_quizzes.cjs');
require('./create_quizzes_7_to_16.cjs');
require('./create_quizzes_16_to_20.cjs');
require('./create_quizzes_21_to_24.cjs');

const filmIds = [
  // A1-A2 (8)
  "finding-nemo", "peppa-pig", "we-bare-bears", "extra-english",
  "zootopia", "lion-king", "toy-story", "modern-family",
  // B1-B2 (8)
  "friends", "inside-out", "harry-potter-1", "forrest-gump",
  "how-i-met-your-mother", "the-big-bang-theory", "the-intern", "soul",
  // C1-C2 (8)
  "suits", "sherlock", "the-social-network", "the-kings-speech",
  "the-crown", "oppenheimer", "inception", "house-of-cards"
];

console.log("Validating all 24 films...");
let totalQuestions = 0;

for (const id of filmIds) {
  const list = quizzes[id];
  if (!list || list.length < 20) {
    console.error(`ERROR: Film "${id}" has only ${list ? list.length : 0} questions!`);
    process.exit(1);
  }
  totalQuestions += list.length;
  console.log(`- ${id}: ${list.length} questions OK`);
}

console.log(`All 24 films validated! Total questions: ${totalQuestions} (Minimum required: 480)`);

// Generate TS output
const tsContent = `import { FilmQuizQuestion } from "./data_films";

/**
 * Ngân hàng câu hỏi trắc nghiệm tương tác chuyên sâu cho 24 bộ phim tiếng Anh
 * Mỗi bộ phim chứa tối thiểu 20 câu hỏi ngữ cảnh, ngữ pháp, từ vựng và đàm thoại
 * Tổng cộng: ${totalQuestions} câu hỏi bản xứ
 */
export const filmQuizzesMap: Record<string, FilmQuizQuestion[]> = ${JSON.stringify(quizzes, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/data_film_quizzes.ts');
fs.writeFileSync(outputPath, tsContent, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${totalQuestions} questions!`);
