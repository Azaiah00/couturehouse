import sharp from "sharp";
import { join } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const exportsDir = join(root, "marketing/instagram/exports");
const files = [
  "carousel-01.png",
  "carousel-02.png",
  "carousel-03.png",
  "carousel-04.png",
  "carousel-05.png",
  "carousel-06.png",
  "carousel-07.png",
];

const layers = [];
for (let i = 0; i < files.length; i += 1) {
  const thumb = await sharp(join(exportsDir, files[i])).resize(220, 275).png().toBuffer();
  const row = Math.floor(i / 4);
  const column = i % 4;
  const secondRowOffset = row === 1 ? 125 : 0;
  layers.push({ input: thumb, left: 40 + secondRowOffset + column * 250, top: 125 + row * 315 });
}

const title = Buffer.from(`<svg width="1040" height="790" xmlns="http://www.w3.org/2000/svg">
  <text x="40" y="54" fill="#fffaf2" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="700" letter-spacing="4">COUTURE HOUSE / SALON WEBSITE CHECK</text>
  <text x="1000" y="94" fill="#d7ff38" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" letter-spacing="3" text-anchor="end">CAROUSEL ORDER 01–07</text>
</svg>`);

await sharp({ create: { width: 1040, height: 790, channels: 4, background: "#080808" } })
  .composite([...layers, { input: title }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, "marketing/instagram/salon-website-check-carousel-preview.png"));
