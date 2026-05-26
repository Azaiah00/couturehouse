#!/usr/bin/env node
// Transcode landscape hero + move Magic Coils reels into the case study.
// Run from project root:  node scripts/transcode-videos.mjs

import { execSync } from "node:child_process";
import { copyFileSync, mkdirSync, statSync, existsSync, renameSync } from "node:fs";
import { dirname } from "node:path";
import ffmpegPkg from "@ffmpeg-installer/ffmpeg";

const FFMPEG = ffmpegPkg.path;

const PUB = "public";
const DROP = "content-drop";

function sizeMB(p) {
  return (statSync(p).size / 1024 / 1024).toFixed(1) + "MB";
}

function run(cmd) {
  // Use Buffer stdout to avoid console flood
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] });
}

function transcode({ input, output, scale, bitrate = "2500k", preset = "medium", fps = 30, mute = true }) {
  mkdirSync(dirname(output), { recursive: true });
  const vfChain = scale
    ? `-vf "scale=${scale.w}:${scale.h}:force_original_aspect_ratio=decrease,pad=${scale.w}:${scale.h}:(ow-iw)/2:(oh-ih)/2,setsar=1"`
    : "";
  const audio = mute ? "-an" : "-c:a aac -b:a 96k";
  const cmd =
    `"${FFMPEG}" -y -i "${input}" ${vfChain} -r ${fps} ` +
    `-c:v libx264 -preset ${preset} -profile:v main -pix_fmt yuv420p ` +
    `-b:v ${bitrate} -maxrate ${bitrate} -bufsize 5M -movflags +faststart ` +
    `${audio} "${output}"`;
  const start = Date.now();
  console.log(`  ⏳ ${output}`);
  run(cmd);
  console.log(`  ✓ ${output}  ${sizeMB(output)}  (${((Date.now() - start) / 1000).toFixed(1)}s)`);
}

function poster({ input, output, atSeconds = 3, width = 1920 }) {
  mkdirSync(dirname(output), { recursive: true });
  const cmd =
    `"${FFMPEG}" -y -ss ${atSeconds} -i "${input}" -frames:v 1 ` +
    `-vf "scale=${width}:-2" -q:v 4 "${output}"`;
  run(cmd);
  console.log(`  ✓ ${output}  ${sizeMB(output)}  (poster @${atSeconds}s)`);
}

// ── Preserve current hero (Magic Coils MagicPress reel) into the case study ──
const currentHero = `${PUB}/hero-video.mp4`;
const magicPressDst = `${PUB}/work/magic-coils/magicpress.mp4`;
if (existsSync(currentHero) && !existsSync(magicPressDst)) {
  mkdirSync(dirname(magicPressDst), { recursive: true });
  copyFileSync(currentHero, magicPressDst);
  console.log(`✓ Preserved MagicPress → ${magicPressDst}  ${sizeMB(magicPressDst)}`);
}

// ── New landscape hero from the 4K 0308 master ──
console.log("\n🎬  Transcoding hero (4K → 1080p web)\n");
transcode({
  input: `${DROP}/0308 (1).mp4`,
  output: `${PUB}/hero-video.mp4`,
  scale: { w: 1920, h: 1080 },
  bitrate: "2500k",
  preset: "medium",
  fps: 30,
  mute: true,
});

// Replace poster with a frame from the new landscape hero (better match)
console.log("\n🖼  Extracting hero poster from frame @3s\n");
poster({
  input: `${DROP}/0308 (1).mp4`,
  output: `${PUB}/hero-poster.jpg`,
  atSeconds: 3,
  width: 1920,
});

// ── Optional: a couple more Magic Coils vertical clips for the case study ──
// These are the brand reels that round out the case study; light compression
// so the case study page stays fast.
console.log("\n🎬  Compressing Magic Coils vertical clips for the case study\n");

const extraClips = [
  { src: `${DROP}/Video_20260525_221112_565.mp4`, name: "studio-still-01.mp4" },
  { src: `${DROP}/Video_20260525_221116_443.mp4`, name: "studio-still-02.mp4" },
  { src: `${DROP}/hf_20260508_184447_0d78f227-3301-460e-918b-96c80fbfe63b.mp4`, name: "studio-still-03.mp4" },
];

for (const clip of extraClips) {
  if (!existsSync(clip.src)) {
    console.log(`  ⚠ skip ${clip.name} (source missing)`);
    continue;
  }
  transcode({
    input: clip.src,
    output: `${PUB}/work/magic-coils/${clip.name}`,
    scale: { w: 720, h: 1280 },
    bitrate: "1200k",
    preset: "medium",
    fps: 30,
    mute: false,
  });
}

console.log("\n✓ Done\n");
