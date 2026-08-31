import sharp from "sharp";
import { join } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const exportsDir = join(root, "marketing/instagram/exports");
const files = [
  "story-websites-01.png",
  "story-websites-02-positioning.png",
  "story-websites-03-trust.png",
  "story-websites-04-services.png",
  "story-websites-05-commerce.png",
  "story-websites-06.png",
];

const layers = [];
for (let i = 0; i < files.length; i += 1) {
  const thumb = await sharp(join(exportsDir, files[i])).resize(270, 480).png().toBuffer();
  layers.push({ input: thumb, left: 55 + (i % 3) * 305, top: 115 + Math.floor(i / 3) * 520 });
}

const title = Buffer.from(`<svg width="1020" height="1175" xmlns="http://www.w3.org/2000/svg">
  <text x="55" y="66" fill="#fffaf2" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="700" letter-spacing="4">COUTURE HOUSE / WEBSITES HIGHLIGHT</text>
  <text x="965" y="66" fill="#d7ff38" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" letter-spacing="3" text-anchor="end">UPLOAD ORDER 01–06</text>
</svg>`);

await sharp({ create: { width: 1020, height: 1175, channels: 4, background: "#080808" } })
  .composite([...layers, { input: title }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, "marketing/instagram/highlights/websites-highlight-preview.png"));
