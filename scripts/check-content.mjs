#!/usr/bin/env node
// Audit content-drop/ and report what's ready vs missing.
// Usage:  npm run check-content

import { readdirSync, statSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = "content-drop";
const IMG = /\.(jpe?g|png|webp|avif|heic|svg|gif)$/i;
const VID = /\.(mp4|mov|webm|m4v)$/i;
const LOGO_IMG = /\.(png|svg|webp)$/i;

const SPECS = [
  {
    dir: "01-hero",
    label: "Hero (video + poster)",
    expect: [
      { name: "Hero video", required: true, match: (f) => VID.test(f) && /hero/i.test(f) || (VID.test(f) && !/poster/i.test(f)) },
      { name: "Hero poster", required: false, match: (f) => IMG.test(f) && /poster/i.test(f) },
    ],
  },
  {
    dir: "02-gallery",
    label: "Photo gallery",
    counter: { what: "images", filter: (f) => IMG.test(f), min: 7, ideal: 10 },
  },
  {
    dir: "03-case-studies",
    label: "Case studies",
    subdirs: {
      min: 4,
      ideal: 6,
      requireInside: (p) => {
        const files = listFiles(p);
        const hasCover = files.some((f) => /^cover\./i.test(f) && IMG.test(f));
        const hasStory = files.some((f) => /^story\.md$/i.test(f));
        return { hasCover, hasStory };
      },
    },
  },
  {
    dir: "04-brand-partners",
    label: "Brand partner logos",
    counter: { what: "logos", filter: (f) => LOGO_IMG.test(f), min: 6, ideal: 12, note: "Or list names in COPY.md §7" },
  },
  {
    dir: "05-categories",
    label: "Category images",
    counter: { what: "images", filter: (f) => IMG.test(f), min: 6, ideal: 12 },
  },
  {
    dir: "06-logo-favicon",
    label: "Logo + favicon",
    expect: [
      { name: "Logo", required: false, match: (f) => LOGO_IMG.test(f) && /logo/i.test(f) },
      { name: "Favicon", required: false, match: (f) => /favicon/i.test(f) && /\.(png|ico|svg)$/i.test(f) },
    ],
  },
  {
    dir: "07-showreel",
    label: "Showreel video",
    expect: [{ name: "Showreel video", required: false, match: (f) => VID.test(f) }],
  },
  {
    dir: "08-music",
    label: "Music tracks (optional)",
    counter: { what: "tracks", filter: (f) => /\.mp3$/i.test(f), min: 0, ideal: 6 },
  },
];

// ── ANSI ───────────────────────────────────────────────────────────────
const C = {
  reset: "\x1b[0m", dim: "\x1b[2m", bold: "\x1b[1m",
  red: "\x1b[31m", green: "\x1b[32m", yellow: "\x1b[33m", blue: "\x1b[34m", grey: "\x1b[90m",
};
const ok = (s) => `${C.green}✓${C.reset} ${s}`;
const warn = (s) => `${C.yellow}⚠${C.reset} ${s}`;
const miss = (s) => `${C.red}✗${C.reset} ${s}`;
const skip = (s) => `${C.grey}○${C.reset} ${s}`;
const hr = (n = 56) => C.grey + "─".repeat(n) + C.reset;

// ── helpers ────────────────────────────────────────────────────────────
function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter(
    (f) => !f.startsWith("_") && !f.startsWith(".") && f.toLowerCase() !== "readme.md",
  );
}
function listDirs(dir) {
  return listFiles(dir).filter((f) => {
    try { return statSync(join(dir, f)).isDirectory(); } catch { return false; }
  });
}

// ── run ────────────────────────────────────────────────────────────────
let problems = 0;
let warnings = 0;

console.log(`\n${C.bold}📦  Content audit${C.reset}  ${C.dim}— content-drop/${C.reset}\n`);

if (!existsSync(ROOT)) {
  console.log(miss(`The ${ROOT}/ folder is missing. Nothing to audit.`));
  process.exit(0);
}

for (const spec of SPECS) {
  const path = join(ROOT, spec.dir);
  console.log(`${C.bold}${spec.label}${C.reset}  ${C.grey}${spec.dir}/${C.reset}`);
  console.log(hr());

  const files = listFiles(path);

  if (spec.expect) {
    for (const item of spec.expect) {
      const found = files.find(item.match);
      if (found) console.log("  " + ok(`${item.name}: ${found}`));
      else if (item.required) { console.log("  " + miss(`${item.name}: MISSING`)); problems++; }
      else console.log("  " + skip(`${item.name}: not provided yet`));
    }
  }

  if (spec.counter) {
    const c = spec.counter;
    const matches = files.filter(c.filter);
    const note = c.note ? `  ${C.dim}(${c.note})${C.reset}` : "";
    if (matches.length >= c.ideal) {
      console.log("  " + ok(`${matches.length} ${c.what} (ideal ${c.ideal})${note}`));
    } else if (matches.length >= c.min) {
      console.log("  " + warn(`${matches.length} ${c.what} (need ${c.min}+, ideal ${c.ideal})${note}`));
      warnings++;
    } else {
      console.log("  " + (c.min === 0 ? skip : miss)(`${matches.length} ${c.what} (need ${c.min}+, ideal ${c.ideal})${note}`));
      if (c.min > 0) problems++;
    }
  }

  if (spec.subdirs) {
    const subs = listDirs(path);
    const s = spec.subdirs;
    if (subs.length >= s.ideal) console.log("  " + ok(`${subs.length} project folders (ideal ${s.ideal})`));
    else if (subs.length >= s.min) { console.log("  " + warn(`${subs.length} project folders (need ${s.min}+, ideal ${s.ideal})`)); warnings++; }
    else { console.log("  " + miss(`${subs.length} project folders (need ${s.min}+, ideal ${s.ideal})`)); problems++; }

    for (const sub of subs) {
      const check = s.requireInside(join(path, sub));
      const labelParts = [];
      labelParts.push(check.hasCover ? `${C.green}cover${C.reset}` : `${C.red}cover${C.reset}`);
      labelParts.push(check.hasStory ? `${C.green}story.md${C.reset}` : `${C.red}story.md${C.reset}`);
      if (!check.hasCover || !check.hasStory) problems++;
      console.log(`    ${C.dim}└${C.reset} ${sub}  [${labelParts.join(" ")}]`);
    }
  }

  console.log("");
}

// ── COPY.md ────────────────────────────────────────────────────────────
console.log(`${C.bold}Copy${C.reset}  ${C.grey}COPY.md${C.reset}`);
console.log(hr());
const copyPath = join(ROOT, "COPY.md");
if (!existsSync(copyPath)) {
  console.log("  " + miss("COPY.md missing"));
  problems++;
} else {
  const txt = readFileSync(copyPath, "utf8");
  const todos = (txt.match(/<<\s*TODO/gi) || []).length;
  if (todos === 0) console.log("  " + ok("All COPY sections filled in"));
  else { console.log("  " + warn(`${todos} <<TODO>> placeholder(s) remaining in COPY.md`)); warnings++; }
}

// ── loose files in content-drop/ root ──────────────────────────────────
const loose = listFiles(ROOT).filter((f) => {
  try { return statSync(join(ROOT, f)).isFile(); } catch { return false; }
}).filter((f) => f.toLowerCase() !== "copy.md");

if (loose.length > 0) {
  console.log(`${C.bold}Loose files in content-drop/ root${C.reset}`);
  console.log(hr());
  console.log(`  ${C.yellow}⚠${C.reset} ${loose.length} file(s) sitting in the root instead of a numbered subfolder.`);
  console.log(`  ${C.dim}These won't be counted toward any section. Move them into the right folder.${C.reset}`);
  for (const f of loose.slice(0, 15)) console.log(`    ${C.grey}└${C.reset} ${f}`);
  if (loose.length > 15) console.log(`    ${C.grey}└ … and ${loose.length - 15} more${C.reset}`);
  console.log("");
  warnings++;
}

// ── summary ────────────────────────────────────────────────────────────
console.log("");
console.log(hr(60));
if (problems === 0 && warnings === 0) {
  console.log(`${C.green}${C.bold}  ✓ Everything looks ready to integrate.${C.reset}`);
} else if (problems === 0) {
  console.log(`${C.yellow}${C.bold}  ⚠ ${warnings} warning(s), no blockers.${C.reset}  ${C.dim}You can integrate now or wait for more content.${C.reset}`);
} else {
  console.log(`${C.red}${C.bold}  ✗ ${problems} required item(s) missing${C.reset}  ${C.yellow}+ ${warnings} warning(s)${C.reset}`);
}
console.log(hr(60));
console.log("");
