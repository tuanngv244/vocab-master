export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  example: string;
  emoji: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  color: string;
  words: Word[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface ReadingArticle {
  id: string;
  title: string;
  level: string;
  category: string;
  image: string;
  content: string[];
  questions: QuizQuestion[];
}

export interface ListeningExercise {
  id: string;
  title: string;
  level: string;
  durationLabel: string;
  script: string;
  questions: QuizQuestion[];
}
