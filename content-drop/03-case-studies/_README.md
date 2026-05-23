# 03-case-studies/

One subfolder per real client project. This drives `/work`, `/work/[slug]`,
and the Featured Work section on the homepage. **6+ projects is the goal.**

## Folder structure (per project)

```
03-case-studies/
└── <slug-name>/              ← url-safe, lowercase, hyphens (no spaces)
    ├── cover.jpg             ← 4:5 portrait, ≥ 1600px tall   [REQUIRED]
    ├── story.md              ← copy for the case study        [REQUIRED]
    └── gallery-01.jpg, 02.jpg, …   ← optional extra images
```

## story.md template

Copy this into each project's `story.md`:

```
title: <<Brand name / project title>>
category: <<e.g. Fashion, Beauty, Hospitality>>
year: <<e.g. 2025>>
tags: <<comma-separated capabilities, e.g. Identity System, Paid Social, Editorial>>

---
brief: <<One sentence (≤ 160 chars). Used in OG meta and the page intro.>>

---
body:

<<Paragraph 1 — context / challenge.>>

<<Paragraph 2 — approach / what we did.>>

<<Paragraph 3 — outcome / what changed. (Optional.)>>
```

## Example

`03-case-studies/aura-launch/`
- `cover.jpg`
- `story.md`
- `gallery-01.jpg`, `gallery-02.jpg`

## Notes

- The folder name becomes the URL. So `aura-launch/` → `/work/aura-launch`.
- If client confidentiality matters, you can use generic titles ("Luxury Apparel Brand") — just make the slug match.
- Old `lib/work.ts` placeholders get replaced entirely once you have ≥ 4 real ones.
