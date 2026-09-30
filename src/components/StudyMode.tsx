import { useState, useEffect, useRef } from "react";
import { Topic } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, AlertTriangle } from "lucide-react";
import { UserData } from "../App";

interface StudyModeProps {
  topic: Topic;
  onBack: () => void;
  onLearnWord: (wordId: string) => void;
  userData: UserData;
}

const VIETNAMESE_ROASTS = [
  "Mắt để dưới gót chân hay sao mà chọn câu này hả giời!",
  "Học hành kiểu này thì bao giờ mới qua môn hả con giời!",
  "Có mỗi từ này mà cũng chọn sai, não nhảy số chậm thế!",
  "Úi giời ơi, học trước quên sau, kiến thức bay sạch theo gió rồi à!",
  "Trời đất ơi, bấm lụi cũng không trúng, nghiệp quật hay gì!",
  "Nhìn kỹ lại giùm cái coi, chọn bậy bạ vừa thôi chứ!",
  "Học tài thi phận hay do lười chảy thây đây hả bạn ơi!",
  "Ăn cơm hay ăn cám mà chọn cái đáp án trời ơi đất hỡi này!",
  "Não bộ đang ở chế độ tiết kiệm năng lượng hay sao mà bấm thế!",
  "Tỉnh táo lại đi bạn ơi, bấm sai bét nhè rồi kìa, quê xệ chưa!",
  "Quá gà!",
  "Học hành cho tử tế vào!",
  "Có thế mà cũng chọn sai!",
  "Làm một ly nước cam cho tỉnh táo đi!"
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
  rotation: number;
  vRot: number;
}

// Audio Synthesis Engines (Web Audio API)
let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedAudioCtx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
  }
  if (sharedAudioCtx && sharedAudioCtx.state === "suspended") {
    sharedAudioCtx.resume();
  }
  return sharedAudioCtx;
}

// 1. Play Fireworks Explosion & Festive Fanfare Sound
function playFireworksSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    // A. Launch Whistle
    const whistle = ctx.createOscillator();
    const whistleGain = ctx.createGain();
    whistle.type = "sine";
    whistle.frequency.setValueAtTime(400, now);
    whistle.frequency.exponentialRampToValueAtTime(1400, now + 0.2);
    whistleGain.gain.setValueAtTime(0.15, now);
    whistleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    whistle.connect(whistleGain);
    whistleGain.connect(ctx.destination);
    whistle.start(now);
    whistle.stop(now + 0.22);

    // B. Fireworks Boom Explosion (Noise + Lowpass Filter)
    const bufferSize = Math.floor(ctx.sampleRate * 0.9);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(900, now + 0.2);
    filter.frequency.exponentialRampToValueAtTime(80, now + 0.85);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0, now + 0.2);
    noiseGain.gain.linearRampToValueAtTime(0.6, now + 0.23);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.85);

    whiteNoise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    whiteNoise.start(now + 0.2);
    whiteNoise.stop(now + 0.9);

    // C. Multiple Crackles & Sparkles
    for (let i = 0; i < 7; i++) {
      const crackleTime = now + 0.45 + i * 0.06 + Math.random() * 0.05;
      const osc = ctx.createOscillator();
      const cGain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1600 + Math.random() * 1200, crackleTime);
      cGain.gain.setValueAtTime(0.18, crackleTime);
      cGain.gain.exponentialRampToValueAtTime(0.001, crackleTime + 0.05);

      osc.connect(cGain);
      cGain.connect(ctx.destination);
      osc.start(crackleTime);
      osc.stop(crackleTime + 0.06);
    }

    // D. Celebratory Triumphant Chime Chords (C5 - E5 - G5 - C6)
    const chordFrequencies = [523.25, 659.25, 783.99, 1046.50];
    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + 0.3 + idx * 0.09);

      gain.gain.setValueAtTime(0, now + 0.3 + idx * 0.09);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.3 + idx * 0.09 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3 + idx * 0.09 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + 0.3 + idx * 0.09);
      osc.stop(now + 0.3 + idx * 0.09 + 0.65);
    });
  } catch (e) {
    console.error("Fireworks sound error:", e);
  }
}

// 2. Play Wrong Buzzer Sound
function playWrongSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    [240, 180].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now + idx * 0.16);

      gain.gain.setValueAtTime(0, now + idx * 0.16);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.16 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.16 + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.16);
      osc.stop(now + idx * 0.16 + 0.2);
    });
  } catch (e) {
    console.error("Wrong buzzer sound error:", e);
  }
}

// 3. Play Realistic Vietnamese Roast Voice (Male & Female Random)
let currentRoastAudio: HTMLAudioElement | null = null;
const roastAudioCache: Record<string, HTMLAudioElement> = {};

if (typeof window !== "undefined") {
  // Preload all 28 audio files (14 female, 14 male) with neural voice tag
  for (let i = 1; i <= 14; i++) {
    const fAudio = new Audio(`/audio/roasts/female_${i}.mp3?v=neural`);
    fAudio.preload = "auto";
    roastAudioCache[`female_${i}`] = fAudio;

    const mAudio = new Audio(`/audio/roasts/male_${i}.mp3?v=neural`);
    mAudio.preload = "auto";
    roastAudioCache[`male_${i}`] = mAudio;
  }
}

function playVietnameseRoastAudio() {
  try {
    if (typeof window === "undefined") return;

    // Stop any existing playing audio
    if (currentRoastAudio) {
      currentRoastAudio.pause();
      currentRoastAudio.currentTime = 0;
    }

    // Play wrong buzzer sound first
    playWrongSound();

    // Random roast index from 1 to 14 (full list of 14 Vietnamese roasts)
    const roastIndex = Math.floor(Math.random() * VIETNAMESE_ROASTS.length) + 1;
    // 50% Male or 50% Female voice
    const isMale = Math.random() < 0.5;
    const gender = isMale ? "male" : "female";
    const cacheKey = `${gender}_${roastIndex}`;

    let audio = roastAudioCache[cacheKey];
    if (!audio) {
      audio = new Audio(`/audio/roasts/${gender}_${roastIndex}.mp3?v=neural`);
      roastAudioCache[cacheKey] = audio;
    }

    currentRoastAudio = audio;
    audio.currentTime = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Audio file play error, fallback to TTS:", err);
        // Fallback only if audio file fails to load AND a Vietnamese voice exists
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.cancel();
          const text = VIETNAMESE_ROASTS[roastIndex - 1];
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = "vi-VN";
          const voices = window.speechSynthesis.getVoices();
          // STRICT: only speak if Vietnamese voice exists; NEVER speak Vietnamese using an English voice!
          const viVoice = voices.find((v) => v.lang.toLowerCase().includes("vi"));
          if (viVoice) {
            utterance.voice = viVoice;
            window.speechSynthesis.speak(utterance);
          }
        }
      });
    }
  } catch (e) {
    console.error("Roast audio error:", e);
  }
}

export default function StudyMode({ topic, onBack, onLearnWord, userData }: StudyModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const word = topic.words[currentIndex];

  // Pre-load voices on component mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  // Generate 4 randomized options (1 correct + 3 distractors) for current word
  useEffect(() => {
    if (!word) return;

    const otherWords = topic.words.filter(w => w.id !== word.id && w.meaning !== word.meaning);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
    const distractors = shuffledOthers.slice(0, 3).map(w => w.meaning);

    const fallbackDistractors = ["thời tiết", "chuyến đi", "gia đình", "bạn bè"];
    while (distractors.length < 3) {
      const fb = fallbackDistractors[distractors.length % fallbackDistractors.length];
      if (!distractors.includes(fb) && fb !== word.meaning) {
        distractors.push(fb);
      } else {
        distractors.push(`Lựa chọn ${distractors.length + 1}`);
      }
    }

    const allOpts = [word.meaning, ...distractors].sort(() => 0.5 - Math.random());
    setOptions(allOpts);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowWarning(false);
    setIsFlipped(false);
    setShowFireworks(false);
  }, [currentIndex, topic]);

  // Fireworks Animation Canvas Engine
  useEffect(() => {
    if (!showFireworks || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#eab308", "#06b6d4"];
    const particles: Particle[] = [];

    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.42;

    for (let i = 0; i < 120; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 11 + 3;
      particles.push({
        x: centerX + (Math.random() - 0.5) * 40,
        y: centerY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 3,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        if (p.alpha > 0) {
          alive = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.25;
          p.vx *= 0.98;
          p.rotation += p.vRot;
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
          ctx.restore();
        }
      });

      if (alive) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        setShowFireworks(false);
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [showFireworks]);

  // Handle Option Selection
  const handleSelectOption = (opt: string) => {
    if (selectedOption !== null) return; // already answered

    setSelectedOption(opt);
    setShowWarning(false);

    const correct = opt === word.meaning;
    setIsCorrect(correct);

    // Play Audio directly inside the user click handler
    if (correct) {
      // 1. Play celebratory fireworks audio sound!
      playFireworksSound();
      setShowFireworks(true);
    } else {
      // 2. Play funny buzzer sound and realistic Vietnamese roast voice (male/female random)!
      playVietnameseRoastAudio();
    }

    // Flip card automatically after 400ms to reveal the back
    setTimeout(() => {
      setIsFlipped(true);
      onLearnWord(word.id);
    }, 450);
  };

  const handleCardClick = () => {
    if (!isFlipped) {
      if (selectedOption === null) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2500);
        return;
      }
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        handleCardClick();
      } else if (e.code === "Enter" || e.code === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (!isFlipped && selectedOption === null) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          const idx = parseInt(e.key) - 1;
          if (options[idx]) handleSelectOption(options[idx]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, topic.words.length, isFlipped, selectedOption, options]);

  const handleNext = () => {
    if (currentIndex < topic.words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const speakEnglish = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const progressPercent = Math.round(((currentIndex + 1) / topic.words.length) * 100);
  const masteredCount = topic.words.filter(w => userData.learned[w.id]).length;

  return (
    <div className="flex flex-col min-h-full relative w-full items-center">
      {/* Fireworks Canvas Overlay */}
      {showFireworks && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-50 w-full h-full"
        />
      )}

      <div className="flex-1 w-full max-w-[620px] p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center min-h-[460px]">
        {/* Progress Bar */}
        <div className="w-full max-w-[560px] mb-4 md:mb-6">
          <div className="flex justify-between mb-2 text-[10px] sm:text-xs font-bold text-slate-400 uppercase">
            <span>Từ {currentIndex + 1} / {topic.words.length}</span>
            <span>{progressPercent}% Hoàn thành</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Warning if trying to flip without answering */}
        <AnimatePresence>
          {showWarning && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 bg-amber-500 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 z-20"
            >
              <AlertTriangle size={16} />
              Vui lòng chọn 1 trong 4 đáp án trước khi lật thẻ!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flashcard with 3D Flip */}
        <div className="relative group w-full max-w-[540px] flex-1 min-h-[430px] sm:min-h-[460px]" style={{ perspective: 1000 }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-[40px] blur opacity-25"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex + (isFlipped ? "-flipped" : "-front")}
              initial={{ rotateY: isFlipped ? 180 : 0, opacity: 0, scale: 0.95 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: isFlipped ? 0 : -180, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-white rounded-[32px] shadow-2xl shadow-slate-200 border border-slate-100 p-5 sm:p-7 flex flex-col justify-between"
            >
              {!isFlipped ? (
                // === FRONT OF CARD: WORD + 4 CHOICES ===
                <div className="flex flex-col h-full justify-between">
                  <div className="text-center pt-2">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl mb-3 shadow-inner mx-auto">
                      {word.emoji}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                      {word.word}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1">
                      Chọn 1 trong 4 nghĩa bên dưới để lật thẻ
                    </p>
                  </div>

                  {/* 4 Choices Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                    {options.map((opt, i) => {
                      const letter = ["A", "B", "C", "D"][i];
                      const isSelected = selectedOption === opt;
                      const isOptionCorrect = opt === word.meaning;
                      
                      let btnStyle = "bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-slate-700 border-slate-200";
                      if (selectedOption !== null) {
                        if (isSelected && isCorrect) {
                          btnStyle = "bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-500/20";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-red-500 text-white border-red-600 shadow-md shadow-red-500/20";
                        } else if (isOptionCorrect) {
                          btnStyle = "bg-emerald-100 text-emerald-800 border-emerald-400 font-bold";
                        } else {
                          btnStyle = "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={i}
                          disabled={selectedOption !== null}
                          onClick={() => handleSelectOption(opt)}
                          className={`p-3 sm:p-3.5 rounded-2xl border-2 text-left transition-all flex items-center gap-3 font-semibold text-sm active:scale-98 ${btnStyle}`}
                        >
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                            isSelected 
                              ? "bg-white/25 text-white" 
                              : "bg-white text-slate-600 border border-slate-200"
                          }`}>
                            {letter}
                          </span>
                          <span className="truncate">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-center pt-1 border-t border-slate-100">
                    <p className="text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                      {selectedOption === null ? "👉 Bấm chọn đáp án để tự động lật thẻ" : "Đang lật thẻ..."}
                    </p>
                  </div>
                </div>
              ) : (
                // === BACK OF CARD: CLEAN RESULT & DEFINITION (NO TEXT ROAST/CELEBRATION) ===
                <div className="flex flex-col justify-between h-full w-full overflow-y-auto pr-1">
                  {/* Word Details */}
                  <div className="text-center w-full mt-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl mb-3 shadow-inner mx-auto shrink-0">
                      {word.emoji}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{word.word}</h3>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="text-slate-500 font-mono text-base sm:text-lg">{word.pronunciation}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); speakEnglish(word.word); }}
                        className="w-9 h-9 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-100 transition-colors"
                        title="Phát âm tiếng Anh"
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Definition and Example */}
                  <div className="w-full pt-4 border-t border-slate-100 mt-4 shrink-0">
                    <div className="flex flex-col gap-2.5">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Nghĩa tiếng Việt</p>
                        <p className="text-lg sm:text-xl font-black text-emerald-700">{word.meaning}</p>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Ví dụ thực tế</p>
                        <p className="text-xs sm:text-sm font-medium text-slate-700 italic">"{word.example}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Control Buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-6 mb-2 w-full max-w-[540px]">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-12 h-12 flex-shrink-0 sm:w-14 sm:h-14 rounded-2xl border-2 border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-100 transition-all active:scale-95 disabled:opacity-40 disabled:hover:bg-transparent"
            title="Từ trước đó"
          >
            <span className="text-2xl leading-none">←</span>
          </button>
          
          <button
            onClick={handleCardClick}
            className={`flex-1 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
              isFlipped
                ? "bg-slate-800 text-white shadow-slate-300 hover:bg-slate-900"
                : "bg-emerald-600 text-white shadow-emerald-500/20 hover:bg-emerald-700"
            }`}
          >
            {isFlipped ? "🔄 Lật lại mặt câu hỏi" : "Lật thẻ xem đáp án"}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === topic.words.length - 1}
            className="w-12 h-12 flex-shrink-0 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all active:scale-95 disabled:opacity-40 disabled:hover:bg-emerald-500"
            title="Từ tiếp theo"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Footer */}
      <footer className="h-14 bg-white border-t border-slate-100 px-4 md:px-8 flex items-center gap-4 sm:gap-8 mt-auto shrink-0 w-full overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
          <span className="text-xs sm:text-sm font-semibold text-slate-600">Đã học: <span className="text-slate-900 font-bold">{masteredCount}</span></span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-xs sm:text-sm font-semibold text-slate-600">Tổng từ: <span className="text-slate-900 font-bold">{topic.words.length}</span></span>
        </div>
        <div className="ml-auto text-xs text-slate-400 font-medium hidden md:block shrink-0">
          Phím số <kbd className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-sans">1-4</kbd> chọn nhanh • <kbd className="bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 font-sans">Enter / →</kbd> từ kế tiếp
        </div>
      </footer>
    </div>
  );
}
