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
  assert.match(html, /aria-label="Digital worlds for hair, beauty and culture\."/);
  assert.match(html, /WORK THAT/);
  assert.match(html, /Beauty meets business/);
  assert.match(html, /Explore services in detail/);
  assert.doesNotMatch(html, /Swipe to explore more websites|Swipe right to see more products/);
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
  assert.match(clickVideo, /poster=\{poster\}/);
  assert.match(clickVideo, /autoPlay muted playsInline/);
  assert.match(clickVideo, /onClick=\{\(\) => setActive\(true\)\}/);
  assert.match(soundtrack, /preload="none"/);
  assert.doesNotMatch(soundtrack, /<audio[^>]*autoPlay/);
  assert.match(page, /hero-video[\s\S]*priority posterOnlyOnMobile ariaHidden/);
  assert.match(page, /website-preview-image[\s\S]*sizes="\(max-width: 760px\) 100vw, 65vw"[\s\S]*unoptimized/);
  assert.match(work, /website-preview-image[\s\S]*sizes="\(max-width: 760px\) 100vw, 50vw"[\s\S]*unoptimized/);
  assert.doesNotMatch(services, /<BeforeAfterSlider[\s\S]*\bpriority\b[\s\S]*\/>/);
});

test("uses a frame from each source video as its click-to-play poster", async () => {
  const [page, work, services] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /featured-reel-01\.mp4" poster="\/work\/magic-coils\/reel-poster-01-v2\.webp"/);
  assert.match(page, /featured-reel-02\.mp4" poster="\/work\/magic-coils\/reel-poster-02-v2\.webp"/);
  assert.doesNotMatch(page, /hero-video\.mp4" poster="\/brand\/full-campaign-film-poster-v2\.webp"/);
  assert.doesNotMatch(page, /work-moves-r01\.mp4" poster="\/brand\/work-moves-poster-v2\.webp"/);
  assert.match(work, /hero-video\.mp4" poster="\/brand\/full-campaign-film-poster-v2\.webp"/);
  assert.match(services, /sacrificial-conversations-reel-02\.mp4" poster="\/services\/sacrificial-conversations-reel-02-poster-v2\.webp"/);
  assert.match(work, /showreel\.mp4" poster="\/work\/partnership\/teddy-monica-campaign-film-poster-v2\.webp"/);
  assert.doesNotMatch(page + work, /ClickToPlayVideo[^>]*poster="\/brand\/video-poster\.webp"/);
  assert.doesNotMatch(services, /sacrificial-conversations-reel-02\.mp4" poster="\/portfolio\/sacrificial-conversations\.jpg"/);
  assert.doesNotMatch(work, /showreel\.mp4" poster="\/work\/partnership\/podcast-new-episode\.webp"/);
});

test("publishes the current vinext output on Netlify", async () => {
  const [netlify, packageJson, staticBuild] = await Promise.all([
    readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../scripts/build-netlify-static.mjs", import.meta.url), "utf8"),
  ]);

  assert.match(netlify, /command = "npm run build:netlify"/);
  assert.match(netlify, /publish = "dist"/);
  assert.match(packageJson, /"build:netlify": "vinext build && node scripts\/build-netlify-static\.mjs"/);
  assert.match(staticBuild, /"\/work\/"/);
  assert.match(staticBuild, /"\/services\/salon-website-design\/"/);
  assert.match(staticBuild, /"\/case-studies\/magic-coils\/"/);
  assert.match(staticBuild, /"\/start-a-project\/"/);
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
  assert.doesNotMatch(page, /Swipe to explore more websites/);
  assert.doesNotMatch(page, /Swipe right to see more products/);
  assert.match(page, /featured-reel-01\.mp4/);
  assert.match(page, /featured-reel-02\.mp4/);
  assert.match(page, /beverlys-feature-2026\.webp/);
  assert.doesNotMatch(page, /magicpress\.mp4|magic-coils\/reel\.mp4/);
  assert.doesNotMatch(page, /className="product-world-gallery"|className="work-glimpse"|className="more-work"/);
  assert.doesNotMatch(page, /case-hero|case-product case-wide|motion-card-secondary/);
  assert.doesNotMatch(work, /Swipe to see every transformation/);
  assert.match(work, /Original and enhanced work from two salon worlds, presented together/);
  assert.match(work, /Charlotte \/ Double Loc Bun/);
  assert.match(work, /2Tite \/ Beaded Loc Finish/);
  assert.doesNotMatch(work, /partnership-chapter-beverly|hair-color-mastery-approved/);
  assert.doesNotMatch(work, /03-products\.webp/);
  assert.doesNotMatch(work, /Long Twists|Ombré Braids/);
  assert.equal((work.match(/before:\s*"\/work\/photo-revival\//g) ?? []).length, 8);
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
  assert.match(studio, /magic-coils\/reel-poster-02\.webp/);
  assert.match(studio, /magic-coils\/extra\/06\.webp/);
  assert.doesNotMatch(page + work, /&#8599;|&darr;|◆/);
});
