#!/usr/bin/env node
// One-off: take files from content-drop/, resize images with sharp, copy videos,
// land everything under /public/ with semantic filenames.
import sharp from "sharp";
import { mkdirSync, copyFileSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const DROP = "content-drop";
const PUB = "public";

const IMAGE_OPS = [
  // Magic Coils — burgundy still-life set for homepage Photo Gallery (square 1:1)
  { src: "Generated Image May 15, 2026 - 7_29PM.jpg", out: "gallery/mc-bowl.webp", maxEdge: 1600 },
  { src: "Generated Image May 15, 2026 - 7_43PM.jpg", out: "gallery/mc-scissors.webp", maxEdge: 1600 },
  { src: "Generated Image May 15, 2026 - 7_46PM.jpg", out: "gallery/mc-crown-head.webp", maxEdge: 1600 },
  { src: "Generated Image May 15, 2026 - 7_52PM.jpg", out: "gallery/mc-lotus.webp", maxEdge: 1600 },
  { src: "Generated Image May 15, 2026 - 7_55PM.jpg", out: "gallery/mc-book-crown.webp", maxEdge: 1600 },
  { src: "Generated Image May 15, 2026 - 8_23PM.jpg", out: "gallery/mc-key.webp", maxEdge: 1600 },

  // Magic Coils — brand banners for the case study page
  { src: "Gemini_Generated_Image_n4wpvin4wpvin4wp.png", out: "work/magic-coils/cover.webp", maxEdge: 2400 },
  { src: "Generated Image March 16, 2026 - 11_16PM.png", out: "work/magic-coils/01-throne.webp", maxEdge: 2000 },
  { src: "Generated Image March 16, 2026 - 11_19PM.png", out: "work/magic-coils/02-strand.webp", maxEdge: 2000 },
  { src: "Generated Image March 16, 2026 - 11_29PM.png", out: "work/magic-coils/03-products.webp", maxEdge: 2000 },
  { src: "Generated Image March 16, 2026 - 11_34PM.png", out: "work/magic-coils/04-collection.webp", maxEdge: 2000 },
  { src: "Generated Image March 16, 2026 - 11_37PM.png", out: "work/magic-coils/05-light-of-nature.webp", maxEdge: 2000 },

  // Sacrificial Conversations — case study
  { src: "Image_20260525_220214_844.jpeg", out: "work/sacrificial-conversations/cover.webp", maxEdge: 2000 },
  { src: "Image_20260525_220215_100.jpeg", out: "work/sacrificial-conversations/01-monica.webp", maxEdge: 1600 },
  { src: "13dce9fa-5daf-4d2b-aa36-bd41066bdd79.png", out: "work/sacrificial-conversations/02-tenisha.webp", maxEdge: 1600 },
  { src: "2dbb80b0-59be-4fe3-aff2-cec41ad2700a.png", out: "work/sacrificial-conversations/03-thea.webp", maxEdge: 1600 },
  { src: "92e8b581-11c0-4a81-9cbb-6d5c0abfab93.png", out: "work/sacrificial-conversations/04-blessing-pressing.webp", maxEdge: 1600 },
  { src: "Generated Image April 01, 2026 - 12_11AM.jpg", out: "work/sacrificial-conversations/05-joy-boyz.webp", maxEdge: 1600 },
];

const VIDEO_OPS = [
  // Hero (replaces the old hero-video.mp4 placeholder)
  { src: "Magic_Coils_MagicPress_v5_2.mp4", out: "hero-video.mp4" },
  // Showreel section (the wide secondary video)
  { src: "hf_20260508_180316_baae07f0-c138-498c-916e-35c7cfb384fd (1).mp4", out: "showreel.mp4" },
  // Magic Coils case study reel
  { src: "Magic_Coils_TwoStrandTwist_Reel.mp4", out: "work/magic-coils/reel.mp4" },
];

const HERO_POSTER_SRC = "Generated Image March 16, 2026 - 11_34PM.png"; // crowned-in-magic banner for a sharp hero poster

let bytesSaved = 0;
let images = 0, videos = 0, skipped = 0;

console.log("\n🖼  Resizing images via sharp\n");
for (const op of IMAGE_OPS) {
  const src = join(DROP, op.src);
  const dst = join(PUB, op.out);
  if (!existsSync(src)) { console.log(`  ⚠ skip ${op.out}  (source missing: ${op.src})`); skipped++; continue; }
  mkdirSync(dirname(dst), { recursive: true });
  const srcSize = statSync(src).size;
  await sharp(src)
    .resize({ width: op.maxEdge, height: op.maxEdge, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85, effort: 4 })
    .toFile(dst);
  const dstSize = statSync(dst).size;
  bytesSaved += srcSize - dstSize;
  images++;
  console.log(`  ✓ ${op.out}  ${(srcSize/1024/1024).toFixed(1)}MB → ${(dstSize/1024).toFixed(0)}KB`);
}

console.log("\n🎯  Hero poster (downscaled JPEG for fast first-paint)\n");
const posterSrc = join(DROP, HERO_POSTER_SRC);
if (existsSync(posterSrc)) {
  const dst = join(PUB, "hero-poster.jpg");
  await sharp(posterSrc).resize({ width: 1920, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(dst);
  console.log(`  ✓ hero-poster.jpg  ${(statSync(dst).size/1024).toFixed(0)}KB`);
} else {
  console.log(`  ⚠ hero poster source missing`);
}

console.log("\n📹  Copying videos\n");
for (const op of VIDEO_OPS) {
  const src = join(DROP, op.src);
  const dst = join(PUB, op.out);
  if (!existsSync(src)) { console.log(`  ⚠ skip ${op.out}  (source missing: ${op.src})`); skipped++; continue; }
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  videos++;
  console.log(`  ✓ ${op.out}  ${(statSync(dst).size/1024/1024).toFixed(1)}MB`);
}

console.log(`\n${"─".repeat(50)}`);
console.log(`✓ ${images} images, ${videos} videos${skipped ? `, ${skipped} skipped` : ""}`);
console.log(`✓ ${(bytesSaved/1024/1024).toFixed(1)} MB saved by resizing`);
console.log(`${"─".repeat(50)}\n`);
