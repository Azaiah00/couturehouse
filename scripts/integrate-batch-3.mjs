#!/usr/bin/env node
// Batch 3: pull the polished brand assets from Claude Projects/Magic Coils/Brand Assets,
// Teddy Chisom – Beverlys production-ready folder, and Sacrificial Conversations Shop.

import sharp from "sharp";
import { execSync } from "node:child_process";
import { mkdirSync, statSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import ffmpegPkg from "@ffmpeg-installer/ffmpeg";

const FFMPEG = ffmpegPkg.path;
const toWin = (p) => p.replace(/^\/([a-z])\//i, (_, d) => `${d.toUpperCase()}:/`);
const CLAUDE = toWin("/c/Users/LATITUDE-7400/Documents/Claude/Projects");
const PUB = "public";

const sizeMB = (p) => (statSync(p).size / 1024 / 1024).toFixed(1) + "MB";
const sizeKB = (p) => (statSync(p).size / 1024).toFixed(0) + "KB";

async function img(src, dst, maxEdge = 2000) {
  if (!existsSync(src)) { console.log(`  ⚠ missing: ${dst}`); return; }
  mkdirSync(dirname(dst), { recursive: true });
  const srcMB = sizeMB(src);
  await sharp(src)
    .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85, effort: 4 })
    .toFile(dst);
  console.log(`  ✓ ${dst}  ${srcMB} → ${sizeKB(dst)}`);
}

function transcode({ input, output, scale, crf = 28, mute = true }) {
  if (!existsSync(input)) { console.log(`  ⚠ missing: ${output}`); return; }
  mkdirSync(dirname(output), { recursive: true });
  const vfChain = scale
    ? `-vf "scale=${scale.w}:${scale.h}:force_original_aspect_ratio=decrease,pad=${scale.w}:${scale.h}:(ow-iw)/2:(oh-ih)/2,setsar=1"`
    : "";
  const audio = mute ? "-an" : "-c:a aac -b:a 96k";
  const start = Date.now();
  console.log(`  ⏳ ${output}`);
  try {
    execSync(
      `"${FFMPEG}" -y -i "${input}" ${vfChain} -r 30 -c:v libx264 -preset medium ` +
      `-profile:v main -pix_fmt yuv420p -crf ${crf} -movflags +faststart ${audio} "${output}"`,
      { stdio: ["ignore", "pipe", "pipe"] },
    );
    console.log(`  ✓ ${output}  ${sizeMB(output)}  (${((Date.now() - start)/1000).toFixed(1)}s)`);
  } catch (e) {
    console.log(`  ✗ ${output} FAILED`);
  }
}

// ── Magic Coils — Hair Show Photos (Magic Press, 10) ──
console.log("\n🖼  Magic Coils — Magic Press hair show photos (10)");
for (let i = 1; i <= 10; i++) {
  const n = String(i).padStart(2, "0");
  await img(
    `${CLAUDE}/Magic Coils/Brand Assets/Hair Show Photos/Magic Press/MP_${n}.jpg`,
    `${PUB}/work/magic-coils/hair-show/mp-${n}.webp`,
    1800,
  );
}

// ── Magic Coils — Hair Show Photos (Two Strand Twist, 8) ──
console.log("\n🖼  Magic Coils — Two Strand Twist hair show photos (8)");
for (let i = 1; i <= 8; i++) {
  const n = String(i).padStart(2, "0");
  await img(
    `${CLAUDE}/Magic Coils/Brand Assets/Hair Show Photos/Two Strand Twist/TST_${n}.jpg`,
    `${PUB}/work/magic-coils/hair-show/tst-${n}.webp`,
    1800,
  );
}

// ── Magic Coils — Pinterest Pins (6) ──
console.log("\n🖼  Magic Coils — Pinterest pins (6)");
const pins = [
  "01_3in1_LeaveIn_Cream.png",
  "02_SilkPress_Royal.png",
  "03_Serum_Cream.png",
  "04_TwoStrandTwist_Bundle_Royal.png",
  "05_WashDay_Quote.png",
  "06_Founder_Quote.png",
];
for (const pin of pins) {
  const n = pin.split("_")[0];
  await img(
    `${CLAUDE}/Magic Coils/Brand Assets/Pinterest Pins/${pin}`,
    `${PUB}/work/magic-coils/pins/${n}.webp`,
    1600,
  );
}

// ── Magic Coils — End Cards + Coronation Reel covers + FB covers ──
console.log("\n🖼  Magic Coils — End cards + Coronation + FB covers");
const branded = [
  { src: `${CLAUDE}/Magic Coils/Brand Assets/EndCard_CrownedInMagic_1080x1920.png`, name: "endcard-v1.webp", e: 1600 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/EndCard_CrownedInMagic_v2_1072x1928.png`, name: "endcard-v2.webp", e: 1600 },
  { src: `${CLAUDE}/Magic Coils/MagicCoils_CoronationReel_Cover_1080x1080.png`, name: "coronation-square.webp", e: 1600 },
  { src: `${CLAUDE}/Magic Coils/MagicCoils_CoronationReel_Cover_1080x1920.png`, name: "coronation-portrait.webp", e: 1600 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/Social Media Assets/FB_Cover_A_Brand_Statement.png`, name: "fb-cover-a.webp", e: 2000 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/Social Media Assets/FB_Cover_B_Launch_Announcement.png`, name: "fb-cover-b.webp", e: 2000 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/Social Media Assets/FB_Cover_C_Product_Lineup.png`, name: "fb-cover-c.webp", e: 2000 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/magic-coils-logo.png`, name: "logo.webp", e: 800 },
  { src: `${CLAUDE}/Magic Coils/Brand Assets/Hair Show Photos/Magic Press/MC_Logo_Ornate_Gold_Frame.JPG`, name: "logo-ornate.webp", e: 1200 },
];
for (const b of branded) {
  await img(b.src, `${PUB}/work/magic-coils/brand/${b.name}`, b.e);
}

// ── Beverlys of Nashville — Before/After Splits (6) ──
console.log("\n🖼  Beverlys of Nashville — Before/After splits (6)");
for (const split of ["G1", "G2", "G3", "G4", "G6", "G7"]) {
  await img(
    `${CLAUDE}/Teddy Chisom - Beverlys of Nashville/10 - Production Ready/Thumbnails/Before-After Splits/${split}_split.jpg`,
    `${PUB}/work/beverlys-of-nashville/transformations/${split.toLowerCase()}.webp`,
    1600,
  );
}

// ── Beverlys of Nashville — additional production reels ──
console.log("\n🎬  Beverlys of Nashville — additional reels");
transcode({
  input: `${CLAUDE}/Teddy Chisom - Beverlys of Nashville/10 - Production Ready/beverlys_day9_silkpress_reel.mp4`,
  output: `${PUB}/work/beverlys-of-nashville/02-silkpress.mp4`,
  scale: { w: 720, h: 1280 },
  crf: 28,
  mute: false,
});
transcode({
  input: `${CLAUDE}/Teddy Chisom - Beverlys of Nashville/10 - Production Ready/Crimson-Locs-TheySaidLocs-REVIEW.mp4`,
  output: `${PUB}/work/beverlys-of-nashville/03-crimson-review.mp4`,
  scale: { w: 720, h: 1280 },
  crf: 28,
  mute: false,
});

// ── Sacrificial Conversations — Shop brand assets ──
console.log("\n🖼  Sacrificial Conversations — brand assets");
await img(`${CLAUDE}/Sacrificial Conversations Shop/sc-logo.webp`, `${PUB}/work/sacrificial-conversations/brand/sc-logo.webp`, 800);
await img(`${CLAUDE}/Sacrificial Conversations Shop/image.webp`, `${PUB}/work/sacrificial-conversations/brand/shop-cover.webp`, 2000);
await img(`${CLAUDE}/Sacrificial Conversations Shop/og-linktree.jpg`, `${PUB}/work/sacrificial-conversations/brand/og-linktree.webp`, 2000);

console.log("\n✓ Batch 3 done\n");
