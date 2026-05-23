# 08-music/

Optional. Real tracks for the `/music` page.

If you skip this, the page keeps the placeholder track list and the play
button stays decorative.

## To enable real previews

Drop mp3 files (≤ 30 seconds each for previews, or full tracks if you want):

```
01-track-name.mp3
02-track-name.mp3
...
```

And a `tracks.json` listing them:

```json
[
  { "file": "01-track-name.mp3", "title": "Midnight Drive", "category": "Cinematic", "duration": "2:45" },
  { "file": "02-summer-breeze.mp3", "title": "Summer Breeze", "category": "Upbeat", "duration": "1:30" }
]
```

Or skip the JSON and just put metadata in COPY.md section 12 — I'll wire it up either way.
