import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = "C:/Users/LATITUDE-7400/Documents/Couture House Website";
const generated = join(root, "marketing/instagram/assets/generated");

const sources = [
  ["Start Here / 01", join(generated, "couture-texture-macro-v1.png")],
  ["Start Here / 02", join(generated, "couture-digital-world-v1.png")],
  ["Start Here / 04", join(generated, "couture-sculptural-locs-v1.png")],
  ["Work / 01", join(root, "marketing/instagram/highlights/covers/work.png")],
  ["Work / 02", join(root, "public/portfolio/divine-textures.png")],
  ["Work / 03", join(root, "public/portfolio/og-barnes.png")],
  ["Work / 04", join(root, "public/work/photo-revival/14-2tite-funmi-red-curled-updo-after.webp")],
  ["Work / 05", join(root, "public/portfolio/sacrificial-conversations-2026.webp")],
  ["Work / 06", join(root, "public/work/magic-coils/product-placement/foam-wrap.webp")],
  ["Services / 01", join(root, "marketing/instagram/highlights/covers/services.png")],
  ["Services / 04", join(root, "public/work/magic-coils/product-placement/strengthening-serum.webp")],
  ["Services / 05", join(root, "public/work/photo-revival/15-2tite-linda-mens-cornrows-after.webp")],
  ["Websites / 01", join(root, "marketing/instagram/highlights/covers/websites.png")],
  ["Websites / 02", join(root, "public/portfolio/dreadlocks-salon.png")],
  ["Websites / 03", join(root, "public/portfolio/beverlys-feature-2026.webp")],
  ["Websites / 04", join(root, "public/portfolio/two-tit-experience.png")],
  ["Websites / 05", join(root, "public/portfolio/magic-coils-updated.webp")],
  ["The Glow Up / 01", join(root, "marketing/instagram/highlights/covers/the-glow-up.png")],
  ["The Glow Up / 02 before", join(root, "public/work/photo-revival/02-sculptural-loc-updo-before.webp")],
  ["The Glow Up / 02 after", join(root, "public/work/photo-revival/02-sculptural-loc-updo-after.webp")],
  ["The Glow Up / 03 before", join(root, "public/work/photo-revival/09-charlotte-double-loc-bun-before.webp")],
  ["The Glow Up / 03 after", join(root, "public/work/photo-revival/09-charlotte-double-loc-bun-after.webp")],
  ["The Glow Up / 04 before", join(root, "public/work/photo-revival/13-2tite-linda-long-microlocs-before.webp")],
  ["The Glow Up / 04 after", join(root, "public/work/photo-revival/13-2tite-linda-long-microlocs-after.webp")],
  ["Process / 01", join(root, "marketing/instagram/highlights/covers/process.png")],
  ["Process / 04", join(root, "public/portfolio/sodiq-yusuff.png")],
  ["Process / 06", join(root, "public/portfolio/washington-wizkids.png")],
  ["FAQ / 01", join(root, "marketing/instagram/highlights/covers/faq.png")],
];

const byHash = new Map();
for (const [story, file] of sources) {
  const hash = createHash("sha256").update(await readFile(file)).digest("hex");
  const matches = byHash.get(hash) ?? [];
  matches.push({ story, file: relative(root, file).replaceAll("\\", "/") });
  byHash.set(hash, matches);
}

const duplicates = [...byHash.values()].filter((items) => items.length > 1);
console.log(`Audited ${sources.length} real or generated visual sources across seven Highlights.`);
console.log(`Exact duplicate image groups: ${duplicates.length}.`);
if (duplicates.length) {
  for (const group of duplicates) console.log(JSON.stringify(group, null, 2));
  process.exitCode = 1;
} else {
  console.log("PASS: every audited visual source is unique by SHA-256 content hash.");
}
