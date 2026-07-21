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
  assert.match(html, /Swipe to see every product story/);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working/);
});

test("keeps mobile media previews complete and discoverable", async () => {
  const [css, page, work, form] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/start-a-project/ProjectForm.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /previewAspect:\s*"1905 \/ 848"/);
  assert.match(page, /Swipe to explore more websites/);
  assert.match(page, /Swipe to see every product story/);
  assert.match(work, /Swipe to see every transformation/);
  assert.match(work, /previewAspect:\s*"960 \/ 594"/);
  assert.match(css, /\.full-film-frame\s*\{\s*aspect-ratio:\s*16 \/ 9/);
  assert.match(css, /\.featured-browser \.browser-bar\s*\{\s*display:\s*none/);
  assert.match(css, /\.work-asset-landscape\s*\{[^}]*aspect-ratio:\s*2000 \/ 904/s);
  assert.match(css, /\.mobile-swipe-hint\s*\{[^}]*display:\s*flex/s);
  assert.match(form, /ArrowUpRight, Check, Plus/);
  assert.doesNotMatch(page + work, /&#8599;|&darr;|◆/);
});
