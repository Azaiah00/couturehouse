import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
const root = new URL("../dist/", import.meta.url);
const read = path => readFile(new URL(path, root), "utf8");

test("every declared route ships HTML, a canonical, and local image variants", async () => {
  const routes = JSON.parse(await readFile(new URL("../scripts/routes.json", import.meta.url), "utf8"));
  for (const route of routes) {
    const html = await read(`${route.path.slice(1)}index.html`);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, route.path);
    assert.ok(html.includes(`https://couturehouse.co${route.path}`), route.path);
    assert.ok(!html.includes('/_vinext/image?'), route.path);
    for (const tag of html.matchAll(/<img\b[^>]*>/g)) {
      const src = tag[0].match(/src="([^"]+)"/)?.[1];
      if (src?.startsWith('/')) await access(new URL(src.slice(1), root));
      for (const variant of (tag[0].match(/srcSet="([^"]+)"/i)?.[1] || '').split(',')) {
        const url = variant.trim().split(' ')[0];
        if (url) await access(new URL(url.slice(1), root));
      }
    }
  }
});
test("both forms expose every submitted field to Netlify detection", async () => {
  const skeleton = await read('__forms.html');
  for (const [file, name, extra] of [
    ['start-a-project/ProjectForm.tsx', 'project-inquiry', ['services','subject']],
    ['salon-website-audit/AuditForm.tsx', 'salon-website-review', ['subject','traffic_source','traffic_medium','campaign','content']],
  ]) {
    const source = await readFile(new URL(`../app/${file}`, import.meta.url), 'utf8');
    const form = skeleton.match(new RegExp(`<form name="${name}"[\\s\\S]+?</form>`))?.[0];
    assert.ok(form, name);
    for (const field of [...source.matchAll(/<(?:input|select|textarea)[^>]*name="([^"]+)"/g)].map(m => m[1]).concat(extra)) {
      assert.ok(form.includes(`name="${field}"`), `${name}: ${field}`);
    }
  }
});
test("static deployment includes redirect and review discovery paths", async () => {
  assert.match(await read('_redirects'), /\/for-brands\/ \/services\/ 301/);
  for (const page of ['index.html', 'services/index.html', 'case-studies/magic-coils/index.html']) assert.ok((await read(page)).includes('href="/salon-website-audit/"'));
  const work = await read('work/index.html');
  assert.ok(work.indexOf('id="websites"') < work.indexOf('id="campaigns"'));
});
