import fs from 'fs';
import path from 'path';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const roasts = [
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

const outDir = path.resolve('public/audio/roasts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function synthesize(text, voice, destFile) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  
  return new Promise((resolve, reject) => {
    try {
      const { audioStream } = tts.toStream(text);
      const chunks = [];
      audioStream.on('data', c => chunks.push(c));
      audioStream.on('end', () => {
        const buf = Buffer.concat(chunks);
        fs.writeFileSync(destFile, buf);
        resolve(buf.length);
      });
      audioStream.on('error', err => reject(err));
    } catch (e) {
      reject(e);
    }
  });
}

async function main() {
  console.log('Generating ultra-natural Vietnamese Neural voice audio for 14 roasts...');
  
  for (let i = 0; i < roasts.length; i++) {
    const idx = i + 1;
    const text = roasts[i];
    console.log(`[${idx}/14] Synthesizing: "${text}"`);

    // Female: vi-VN-HoaiMyNeural
    const femaleFile = path.join(outDir, `female_${idx}.mp3`);
    try {
      const fBytes = await synthesize(text, 'vi-VN-HoaiMyNeural', femaleFile);
      console.log(`  -> Female (Hoài My Neural): ${fBytes} bytes`);
    } catch (e) {
      console.error(`  -> Failed female ${idx}:`, e);
    }

    // Small delay to be polite to socket
    await new Promise(r => setTimeout(r, 200));

    // Male: vi-VN-NamMinhNeural
    const maleFile = path.join(outDir, `male_${idx}.mp3`);
    try {
      const mBytes = await synthesize(text, 'vi-VN-NamMinhNeural', maleFile);
      console.log(`  -> Male (Nam Minh Neural): ${mBytes} bytes`);
    } catch (e) {
      console.error(`  -> Failed male ${idx}:`, e);
    }

    await new Promise(r => setTimeout(r, 200));
  }

  console.log('ALL 28 NEURAL VIETNAMESE VOICES GENERATED SUCCESSFULLY!');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
