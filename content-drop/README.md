# content-drop/ — one folder for everything

This is your single inbox for site content. Drop files into the right subfolder,
fill in `COPY.md`, then run the audit and tell me when it's ready.

## How it works

1. Open the subfolder that matches what you're sending (each has a short `_README.md` with specs).
2. Drop the file(s) in. Use the suggested filename if there is one — otherwise any name is fine.
3. For all text/copy, edit **`COPY.md`** in this folder. Replace every `<<TODO …>>` marker.
4. From the project root, run:

   ```
   npm run check-content
   ```

   You'll get a green/red report showing exactly what landed and what's missing.

5. When the report looks how you want it (you don't need everything!), tell me — I'll integrate the next batch in one PR.

## What's in here

| Folder | What goes here |
|---|---|
| `01-hero/` | 1 hero video + 1 poster still |
| `02-gallery/` | 7–10 wide lifestyle / product photos |
| `03-case-studies/` | One subfolder per real project |
| `04-brand-partners/` | Client/partner logos (or just a names list) |
| `05-categories/` | 12 portrait images, one per industry category |
| `06-logo-favicon/` | Higher-res logo + square favicon |
| `07-showreel/` | The wide-format secondary video |
| `08-music/` | Track files + a small JSON metadata list (optional) |

All text content lives in **`COPY.md`** — one file, every section in order.

## Notes

- **File size**: hero videos can be big. The `.gitignore` is configured so binary
  files in `content-drop/` aren't committed to git — they only need to live on
  your machine until I integrate them.
- **Multiple candidates**: if you have 3 hero videos and aren't sure which one,
  drop them all and add a one-line `pick.md` next to them saying which to use.
- **You don't have to do everything at once** — drop what you have, run the
  audit, ship a batch, then iterate.
