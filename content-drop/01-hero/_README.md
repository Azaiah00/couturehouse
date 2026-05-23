# 01-hero/

Two files. One folder.

| File | Spec | Notes |
|---|---|---|
| `hero-video.mp4` | 1920×1080+, mp4 / h.264, 8–20s loop, no on-screen text | This auto-plays muted on the homepage. The loop seam should be invisible. |
| `hero-poster.jpg` | 1920×1080 jpg, ≤ 500 KB | Shown for the split-second before the video loads. Pick a strong still from the video itself. |

## Filename rules

- `hero-video.mp4` (or `.mov`, `.webm`) — I look for any file starting with `hero` and a video extension.
- `hero-poster.jpg` (or `.png`) — anything starting with `hero` containing `poster` and an image extension.

## If you have multiple candidates

Drop them all. Add a `pick.md` with one line:

```
hero-video: my-cinematic-edit.mp4
hero-poster: studio-still-04.jpg
```
