import { Word } from "./types";

export function loadExtra(prefix: string, raw: string): Word[] {
  return raw.trim().split('\n').filter(Boolean).map((line, i) => {
    const [word, pronunciation, meaning, example, emoji] = line.split('|');
    return { 
      id: `${prefix}_e${i}`, 
      word: word.trim(), 
      pronunciation: pronunciation.trim(), 
      meaning: meaning.trim(), 
      example: example.trim(), 
      emoji: (emoji || '✨').trim() 
    };
  });
}
