import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const routeManifest = JSON.parse(await readFile(new URL("./routes.json", import.meta.url), "utf8"));
const routes = routeManifest.map(route => route.path);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static-build", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const clientDirectory = fileURLToPath(new URL("../dist/client/", import.meta.url));
const staticDirectory = fileURLToPath(new URL("../dist/", import.meta.url));
const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const context = {
  waitUntil() {},
  passThroughOnException() {},
};

for (const entry of await readdir(clientDirectory)) {
  await cp(join(clientDirectory, entry), join(staticDirectory, entry), {
    recursive: true,
    force: true,
  });
}

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://couturehouse.co${route}`, {
      headers: { accept: "text/html" },
    }),
    env,
    context,
  );

  if (!response.ok) {
    throw new Error(`Unable to render ${route}: ${response.status}`);
  }

  const html = await response.text();
  const outputDirectory =
    route === "/" ? new URL("../dist/", import.meta.url) : new URL(`../dist${route}/`, import.meta.url);
  const outputPath = fileURLToPath(outputDirectory);
  await mkdir(outputPath, { recursive: true });
  await writeFile(join(outputPath, "index.html"), html, "utf8");
  console.log(`Rendered ${route}`);
}

// Publish-directory rules are honored by both CLI and Git-based deploys.
await cp(new URL("../public/_headers", import.meta.url), join(staticDirectory, "_headers"));
await cp(new URL("../public/_redirects", import.meta.url), join(staticDirectory, "_redirects"));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routeManifest.map(({path, lastmod}) => `
  <url><loc>https://couturehouse.co${path}</loc><lastmod>${lastmod}</lastmod></url>`).join("")}
</urlset>
`;
await writeFile(join(staticDirectory, "sitemap.xml"), sitemap);
await Promise.all([
  rm(join(staticDirectory, "server"), { recursive: true, force: true }),
  rm(join(staticDirectory, "client"), { recursive: true, force: true }),
  rm(join(staticDirectory, ".vite"), { recursive: true, force: true }),
  rm(join(staticDirectory, "couture-house-lead-dashboard.html"), { force: true }),
]);
console.log("Wrote Netlify cache and security headers");
