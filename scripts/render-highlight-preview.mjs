import sharp from "sharp";
import { join } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const covers = join(root, "marketing/instagram/highlights/covers");
const out = join(root, "marketing/instagram/highlights/highlight-cover-preview.png");
const items = [
  ["start-here.png", "START HERE"],
  ["work.png", "WORK"],
  ["services.png", "SERVICES"],
  ["websites.png", "WEBSITES"],
  ["the-glow-up.png", "THE GLOW UP"],
  ["process.png", "PROCESS"],
  ["faq.png", "FAQ"],
  ["reviews.png", "REVIEWS"],
];

const size = 300;
const mask = Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="146" fill="white"/></svg>`);
const layers = [];

for (let i = 0; i < items.length; i += 1) {
  const [file] = items[i];
  const circle = await sharp(join(covers, file))
    .resize(size, size, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
  layers.push({ input: circle, left: 70 + (i % 3) * 380, top: 170 + Math.floor(i / 3) * 430 });
}

const labels = items.map(([, label], i) => {
  const x = 220 + (i % 3) * 380;
  const y = 515 + Math.floor(i / 3) * 430;
  return `<text x="${x}" y="${y}" fill="#fffaf2" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" letter-spacing="3" text-anchor="middle">${label}</text>`;
}).join("");

const overlay = Buffer.from(`<svg width="1280" height="1450" xmlns="http://www.w3.org/2000/svg">
  <text x="70" y="75" fill="#fffaf2" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700" letter-spacing="5">COUTURE HOUSE / HIGHLIGHTS</text>
  <text x="1210" y="75" fill="#d7ff38" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" letter-spacing="3" text-anchor="end">CIRCLE-CROP PREVIEW</text>
  ${labels}
</svg>`);

await sharp({ create: { width: 1280, height: 1450, channels: 4, background: "#080808" } })
  .composite([...layers, { input: overlay }])
  .png({ compressionLevel: 9 })
  .toFile(out);

console.log(out);
