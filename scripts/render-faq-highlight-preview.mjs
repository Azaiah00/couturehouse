import sharp from "sharp";
import { join } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const exportsDir = join(root, "marketing/instagram/exports");
const files = [
  "story-faq-01.png",
  "story-faq-02-remote.png",
  "story-faq-03-booking-platform.png",
  "story-faq-04-photos.png",
  "story-faq-05-timeline.png",
  "story-faq-06-investment.png",
  "story-faq-07-redesign.png",
  "story-faq-08.png",
];

const layers = [];
for (let i = 0; i < files.length; i += 1) {
  const thumb = await sharp(join(exportsDir, files[i])).resize(270, 480).png().toBuffer();
  layers.push({ input: thumb, left: 55 + (i % 4) * 305, top: 135 + Math.floor(i / 4) * 520 });
}

const title = Buffer.from(`<svg width="1320" height="1175" xmlns="http://www.w3.org/2000/svg">
  <text x="55" y="58" fill="#fffaf2" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="700" letter-spacing="4">COUTURE HOUSE / FAQ HIGHLIGHT</text>
  <text x="1265" y="98" fill="#d7ff38" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" letter-spacing="3" text-anchor="end">UPLOAD ORDER 01–08</text>
</svg>`);

await sharp({ create: { width: 1320, height: 1175, channels: 4, background: "#080808" } })
  .composite([...layers, { input: title }])
  .png({ compressionLevel: 9 })
  .toFile(join(root, "marketing/instagram/highlights/faq-highlight-preview.png"));

