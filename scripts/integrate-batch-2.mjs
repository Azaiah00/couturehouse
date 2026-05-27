#!/usr/bin/env node
// Batch 2 integration:
//   - 9 additional Magic Coils marketing concepts → /public/work/magic-coils/extra/
//   - 5 Magic Coils final branded reels → /public/reels/ms-NN.mp4 (replace placeholder reels)
//   - BNG Remodel hero + clips → /public/work/bng-remodel/
//   - Teddy Chisom (Beverlys of Nashville) reel → /public/work/teddy-chisom/
//   - Extract first-frame covers (4:5 cropped) for case studies that need them

import sharp from "sharp";
import { execSync } from "node:child_process";
import { copyFileSync, mkdirSync, statSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import ffmpegPkg from "@ffmpeg-installer/ffmpeg";

const FFMPEG = ffmpegPkg.path;
const PUB = "public";

// Convert Git-Bash style "/c/Users/..." into Windows-friendly "C:/Users/..." so
// both Node fs and ffmpeg subprocess accept the paths.
const toWin = (p) => p.replace(/^\/([a-z])\//i, (_, d) => `${d.toUpperCase()}:/`);
const CLAUDE = toWin("/c/Users/LATITUDE-7400/Documents/Claude/Projects");
const DLDS = toWin("/c/Users/LATITUDE-7400/Downloads");

const sizeMB = (p) => (statSync(p).size / 1024 / 1024).toFixed(1) + "MB";

function run(cmd) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] });
}

function transcode({ input, output, scale, crf = 28, fps = 30, mute = true, preset = "medium" }) {
  mkdirSync(dirname(output), { recursive: true });
  const vfChain = scale
    ? `-vf "scale=${scale.w}:${scale.h}:force_original_aspect_ratio=decrease,pad=${scale.w}:${scale.h}:(ow-iw)/2:(oh-ih)/2,setsar=1"`
    : "";
  const audio = mute ? "-an" : "-c:a aac -b:a 96k";
  const cmd =
    `"${FFMPEG}" -y -i "${input}" ${vfChain} -r ${fps} ` +
    `-c:v libx264 -preset ${preset} -profile:v main -pix_fmt yuv420p ` +
    `-crf ${crf} -movflags +faststart ${audio} "${output}"`;
  const start = Date.now();
  console.log(`  ⏳ ${output}`);
  try {
    run(cmd);
    console.log(`  ✓ ${output}  ${sizeMB(output)}  (${((Date.now() - start) / 1000).toFixed(1)}s)`);
  } catch (e) {
    console.log(`  ✗ ${output}  FAILED: ${e.message.slice(0, 200)}`);
  }
}

function extractFrame({ input, output, atSeconds = 1, width = 1200 }) {
  mkdirSync(dirname(output), { recursive: true });
  try {
    run(
      `"${FFMPEG}" -y -ss ${atSeconds} -i "${input}" -frames:v 1 ` +
      `-vf "scale=${width}:-2" -q:v 4 "${output}"`,
    );
    console.log(`  ✓ ${output}  ${sizeMB(output)}  (frame @${atSeconds}s)`);
  } catch (e) {
    console.log(`  ✗ ${output}  FAILED frame extract`);
  }
}

// Crop a JPG to 4:5 portrait, then convert to WebP for case-study covers
async function makePortraitCover({ input, output, maxEdge = 1600 }) {
  if (!existsSync(input)) { console.log(`  ⚠ skip cover, source missing: ${input}`); return; }
  mkdirSync(dirname(output), { recursive: true });
  const meta = await sharp(input).metadata();
  const targetW = Math.min(maxEdge, meta.width || maxEdge);
  const targetH = Math.round(targetW * (5 / 4));
  await sharp(input)
    .resize({ width: targetW, height: targetH, fit: "cover", position: "centre" })
    .webp({ quality: 85, effort: 4 })
    .toFile(output);
  console.log(`  ✓ ${output}  ${sizeMB(output)}`);
}

// ── 1. Magic Coils marketing concepts (NEW additions) ─────────────────────
console.log("\n🖼  Magic Coils — extra marketing concepts (9)\n");
const mcExtras = [
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/Generated Image March 16, 2026 - 11_42PM.png`, name: "01.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/Generated Image March 16, 2026 - 11_45PM.png`, name: "02.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/d043a780-0204-4149-96f1-af4fda787624.png`, name: "03.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/184aa30d-b206-49c0-8ffa-04b68da35b05.png`, name: "04.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/d36f2247-2082-4c25-baea-27bdf7c4c734.png`, name: "05.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/2b647663-d742-42aa-aca7-3bda2715d0c9.png`, name: "06.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/316f919e-e358-4d60-ab94-31803ef82252.png`, name: "07.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/be3c57e5-d990-484b-a7a3-1703e97cf84a.png`, name: "08.webp" },
  { src: `${CLAUDE}/Magic Coils/AI Marketing Content/Generated Concepts/08aaf919-9166-4be9-8c89-ca2754d0e741.png`, name: "09.webp" },
];
for (const ex of mcExtras) {
  if (!existsSync(ex.src)) { console.log(`  ⚠ skip ${ex.name}`); continue; }
  const out = `${PUB}/work/magic-coils/extra/${ex.name}`;
  mkdirSync(dirname(out), { recursive: true });
  const srcMB = (statSync(ex.src).size / 1024 / 1024).toFixed(1);
  await sharp(ex.src)
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85, effort: 4 })
    .toFile(out);
  console.log(`  ✓ ${out}  ${srcMB}MB → ${sizeMB(out)}`);
}

// ── 2. Magic Coils branded reels → replace placeholder homepage reels ─────
console.log("\n🎬  Magic Coils — final branded reels (homepage strip)\n");
const mcReels = [
  { src: `${CLAUDE}/Magic Coils/Video Content/Final Branded Reels/Magic_Press_v3_Reel.mp4`, name: "ms-01.mp4" },
  { src: `${CLAUDE}/Magic Coils/Video Content/Magic_Coils_Wash_Day_GRWM_Reel.mp4`, name: "ms-02.mp4" },
  { src: `${DLDS}/Magic Coils/Sensitive Scalp Relief_ My Secret Hair Oil Solution!.mp4`, name: "ms-03.mp4" },
  { src: `${DLDS}/Magic Coils/Hair Oil vs. Body Souffle_ The Ultimate Beauty Showdown!.mp4`, name: "ms-04.mp4" },
  { src: `${DLDS}/Magic Coils/Natural Hair Serum_ Cold-Pressed Goodness for Your Hair!.mp4`, name: "ms-05.mp4" },
];
for (const r of mcReels) {
  transcode({
    input: r.src, output: `${PUB}/reels/${r.name}`,
    scale: { w: 720, h: 1280 }, crf: 28, mute: true,
  });
}

// ── 3. BNG Remodel — new case study ──────────────────────────────────────
console.log("\n🎬  BNG Remodel — case study videos\n");
const bngClips = [
  { src: `${DLDS}/BNG Remodel/0308-bng-remodel-sample-vid.mp4`, name: "hero.mp4", scale: { w: 1920, h: 1080 }, crf: 26 },
  { src: `${CLAUDE}/BNG Remodel/Opus Clips - 2026-05-23/House Renovation_ Wood Plank & Floor Makeover Revealed.mp4`, name: "01-wood-plank.mp4", scale: { w: 720, h: 1280 }, crf: 28 },
  { src: `${CLAUDE}/BNG Remodel/Opus Clips - 2026-05-23/Gorgeous Home Paint Transformation_ East Nashville Gem.mp4`, name: "02-paint.mp4", scale: { w: 720, h: 1280 }, crf: 28 },
  { src: `${CLAUDE}/BNG Remodel/Opus Clips - 2026-05-23/Steam Shower Repair_ We Fixed It!.mp4`, name: "03-shower.mp4", scale: { w: 720, h: 1280 }, crf: 28 },
  { src: `${CLAUDE}/BNG Remodel/Opus Clips - 2026-05-23/House Flip_ Drywall Repair & Full Paint Transformation.mp4`, name: "04-drywall.mp4", scale: { w: 720, h: 1280 }, crf: 28 },
];
for (const c of bngClips) {
  transcode({
    input: c.src, output: `${PUB}/work/bng-remodel/${c.name}`,
    scale: c.scale, crf: c.crf, mute: true,
  });
}

// BNG cover frame (extract from hero video, then crop to 4:5)
console.log("\n🖼  BNG Remodel — cover frame\n");
extractFrame({
  input: `${DLDS}/BNG Remodel/0308-bng-remodel-sample-vid.mp4`,
  output: `${PUB}/work/bng-remodel/_cover-source.jpg`,
  atSeconds: 8, width: 1920,
});
await makePortraitCover({
  input: `${PUB}/work/bng-remodel/_cover-source.jpg`,
  output: `${PUB}/work/bng-remodel/cover.webp`,
  maxEdge: 1600,
});

// ── 4. Teddy Chisom — Beverlys of Nashville client case study ────────────
console.log("\n🎬  Teddy Chisom — client work\n");
transcode({
  input: `${CLAUDE}/Video Editing/Teddy-Chsom-Reel-v2.mp4`,
  output: `${PUB}/work/teddy-chisom/reel.mp4`,
  scale: { w: 720, h: 1280 }, crf: 28, mute: false, // keep audio on this one
});
transcode({
  input: `${CLAUDE}/Teddy Chisom - Beverlys of Nashville/Crimson-Locs-Transformation-TheySaidLocs.mp4`,
  output: `${PUB}/work/teddy-chisom/01-crimson-locs.mp4`,
  scale: { w: 720, h: 1280 }, crf: 28, mute: false,
});

console.log("\n🖼  Teddy Chisom — cover frame\n");
extractFrame({
  input: `${CLAUDE}/Video Editing/Teddy-Chsom-Reel-v2.mp4`,
  output: `${PUB}/work/teddy-chisom/_cover-source.jpg`,
  atSeconds: 2, width: 1200,
});
await makePortraitCover({
  input: `${PUB}/work/teddy-chisom/_cover-source.jpg`,
  output: `${PUB}/work/teddy-chisom/cover.webp`,
  maxEdge: 1600,
});

console.log("\n✓ Batch 2 done.\n");
