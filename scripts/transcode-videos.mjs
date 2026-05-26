#!/usr/bin/env node
// Transcode pipeline:
//  - Re-encode hero tighter (CRF 26, target ~10-12MB)
//  - Compress remaining vertical phone clips into a /public/reels/ pack
//  - Extract a fresh hero-poster.jpg
//
// Run from project root:  node scripts/transcode-videos.mjs

import { execSync } from "node:child_process";
import { copyFileSync, mkdirSync, statSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import ffmpegPkg from "@ffmpeg-installer/ffmpeg";

const FFMPEG = ffmpegPkg.path;
const PUB = "public";
const DROP = "content-drop";

const sizeMB = (p) => (statSync(p).size / 1024 / 1024).toFixed(1) + "MB";
const run = (cmd) => execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] });

function transcode({ input, output, scale, crf = 24, preset = "medium", fps = 30, mute = true }) {
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
  console.log(`  ⏳ ${output}  (CRF ${crf})`);
  run(cmd);
  console.log(`  ✓ ${output}  ${sizeMB(output)}  (${((Date.now() - start) / 1000).toFixed(1)}s)`);
}

function poster({ input, output, atSeconds = 3, width = 1920 }) {
  mkdirSync(dirname(output), { recursive: true });
  run(
    `"${FFMPEG}" -y -ss ${atSeconds} -i "${input}" -frames:v 1 ` +
    `-vf "scale=${width}:-2" -q:v 4 "${output}"`,
  );
  console.log(`  ✓ ${output}  ${sizeMB(output)}  (poster @${atSeconds}s)`);
}

// Preserve MagicPress as a case study reel (only first time)
const currentHero = `${PUB}/hero-video.mp4`;
const magicPressDst = `${PUB}/work/magic-coils/magicpress.mp4`;
if (existsSync(currentHero) && !existsSync(magicPressDst)) {
  mkdirSync(dirname(magicPressDst), { recursive: true });
  copyFileSync(currentHero, magicPressDst);
  console.log(`✓ Preserved MagicPress → ${magicPressDst}  ${sizeMB(magicPressDst)}`);
}

// ── New landscape hero — CRF 26 for ~10-12MB ──
console.log("\n🎬  Re-encoding hero (4K → 1080p, CRF 26)\n");
transcode({
  input: `${DROP}/0308 (1).mp4`,
  output: `${PUB}/hero-video.mp4`,
  scale: { w: 1920, h: 1080 },
  crf: 26,
  preset: "medium",
  fps: 30,
  mute: true,
});

console.log("\n🖼  Hero poster\n");
poster({ input: `${DROP}/0308 (1).mp4`, output: `${PUB}/hero-poster.jpg`, atSeconds: 3, width: 1920 });

// ── Magic Coils case study supplementary clips ──
console.log("\n🎬  Magic Coils case study supplementary clips\n");
const caseClips = [
  { src: `${DROP}/Video_20260525_221112_565.mp4`, name: "studio-still-01.mp4" },
  { src: `${DROP}/Video_20260525_221116_443.mp4`, name: "studio-still-02.mp4" },
  { src: `${DROP}/hf_20260508_184447_0d78f227-3301-460e-918b-96c80fbfe63b.mp4`, name: "studio-still-03.mp4" },
];
for (const clip of caseClips) {
  if (!existsSync(clip.src)) { console.log(`  ⚠ skip ${clip.name}`); continue; }
  if (existsSync(`${PUB}/work/magic-coils/${clip.name}`)) { console.log(`  · keep existing ${clip.name}  ${sizeMB(`${PUB}/work/magic-coils/${clip.name}`)}`); continue; }
  transcode({
    input: clip.src,
    output: `${PUB}/work/magic-coils/${clip.name}`,
    scale: { w: 720, h: 1280 },
    crf: 28,
    preset: "medium",
    fps: 30,
    mute: false,
  });
}

// ── Homepage reels strip — auto-playing vertical reels ──
console.log("\n🎬  Homepage Reels strip — compressing the remaining vertical clips\n");
const homeReels = [
  { src: `${DROP}/Video_20260525_220215_155.mp4`, name: "r01.mp4" },
  { src: `${DROP}/Video_20260525_220215_156.mp4`, name: "r02.mp4" },
  { src: `${DROP}/Video_20260525_220215_157.mp4`, name: "r03.mp4" },
  { src: `${DROP}/Video_20260525_221112_550.mp4`, name: "r04.mp4" },
  { src: `${DROP}/Video_20260523_221908_219.mp4`, name: "r05.mp4" },
];
for (const clip of homeReels) {
  if (!existsSync(clip.src)) { console.log(`  ⚠ skip ${clip.name}`); continue; }
  transcode({
    input: clip.src,
    output: `${PUB}/reels/${clip.name}`,
    scale: { w: 720, h: 1280 },
    crf: 28,
    preset: "medium",
    fps: 30,
    mute: true, // marquee reels are muted; autoplay-friendly
  });
}

console.log("\n✓ Done\n");
