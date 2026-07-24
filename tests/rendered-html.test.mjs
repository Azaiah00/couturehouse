import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Couture House experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.match(html, /<title>Couture House Co\./i);
  assert.match(html, /Digital worlds/);
  assert.match(html, /WORK THAT/);
  assert.match(html, /Swipe to explore more websites/);
  assert.match(html, /Swipe right to see more products/);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working/);
});

test("defers noncritical video, audio, and image loading", async () => {
  const [video, clickVideo, soundtrack, page, work, services] = await Promise.all([
    readFile(new URL("../app/AutoPlayVideo.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ClickToPlayVideo.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/PageSoundtrack.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(video, /priority\s*=\s*false/);
  assert.match(video, /preload=\{priority \? "metadata" : "none"\}/);
  assert.match(video, /shouldLoad && <source/);
  assert.match(video, /posterOnlyOnMobile/);
  assert.doesNotMatch(video, /preload="auto"/);
  assert.match(clickVideo, /active \? \(/);
  assert.match(clickVideo, /preload="metadata"/);
  assert.match(clickVideo, /onClick=\{\(\) => setActive\(true\)\}/);
  assert.match(soundtrack, /preload="none"/);
  assert.doesNotMatch(soundtrack, /<audio[^>]*autoPlay/);
  assert.match(page, /hero-video[\s\S]*priority posterOnlyOnMobile ariaHidden/);
  assert.match(page, /website-preview-image[\s\S]*loading="lazy"[\s\S]*decoding="async"/);
  assert.match(work, /website-preview-image[\s\S]*loading="lazy"[\s\S]*decoding="async"/);
  assert.doesNotMatch(services, /<BeforeAfterSlider[\s\S]*\bpriority\b[\s\S]*\/>/);
});

test("keeps mobile media previews complete and discoverable", async () => {
  const [css, page, work, form, studio] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/start-a-project/ProjectForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/studio/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /previewAspect:\s*"1905 \/ 848"/);
  assert.match(page, /Swipe to explore more websites/);
  assert.match(page, /Swipe right to see more products/);
  assert.match(page, /featured-reel-01\.mp4/);
  assert.match(page, /featured-reel-02\.mp4/);
  assert.doesNotMatch(page, /magicpress\.mp4|magic-coils\/reel\.mp4/);
  assert.ok(
    page.indexOf('className="product-world-gallery"') < page.indexOf('Swipe right to see more products'),
    "the mobile swipe instruction should sit beneath the product carousel",
  );
  assert.doesNotMatch(page, /case-hero|case-product case-wide|motion-card-secondary/);
  assert.doesNotMatch(work, /Swipe to see every transformation/);
  assert.match(work, /Original and enhanced versions, presented together/);
  assert.doesNotMatch(work, /partnership-chapter-beverly|hair-color-mastery-approved/);
  assert.doesNotMatch(work, /03-products\.webp|magic-coils\/extra\/04\.webp/);
  assert.doesNotMatch(work, /Long Twists|Ombré Braids/);
  assert.equal((work.match(/before:\s*"\/work\/photo-revival\//g) ?? []).length, 4);
  assert.match(await readFile(new URL("../app/BeforeAfterSlider.tsx", import.meta.url), "utf8"), /revival-mobile-pair/);
  assert.match(work, /majestic-contracting-preview\.png/);
  assert.match(work, /previewAspect:\s*"1234 \/ 712"/);
  assert.match(css, /\.full-film-frame\s*\{\s*aspect-ratio:\s*16 \/ 9/);
  assert.match(css, /\.featured-browser \.browser-bar\s*\{\s*display:\s*none/);
  assert.match(css, /\.work-asset-landscape\s*\{[^}]*aspect-ratio:\s*2000 \/ 904/s);
  assert.match(css, /\.mobile-swipe-hint\s*\{[^}]*display:\s*flex/s);
  assert.match(css, /\.website-preview-image\s*\{[^}]*object-fit:\s*contain\s*!important/s);
  assert.match(css, /\.revival-comparison-media\s*\{\s*display:\s*none/s);
  assert.match(css, /\.revival-mobile-pair\s*\{\s*display:\s*grid/s);
  assert.match(css, /\.full-film-frame video\s*\{\s*object-fit:\s*cover/s);
  assert.match(form, /ArrowUpRight, Check, Plus/);
  assert.doesNotMatch(studio, /winter-look-02\.png/);
  assert.equal((studio.match(/magic-coils\/extra\/(?:04|06)\.webp/g) ?? []).length, 2);
  assert.doesNotMatch(page + work, /&#8599;|&darr;|◆/);
});
