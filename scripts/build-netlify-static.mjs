import { cp, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const routes = [
  "/",
  "/work/",
  "/services/",
  "/services/salon-website-design/",
  "/services/booking-portals-automation/",
  "/services/shopify-ecommerce/",
  "/services/content-creation/",
  "/case-studies/magic-coils/",
  "/case-studies/beverlys-of-nashville/",
  "/studio/",
  "/start-a-project/",
  "/privacy/",
  "/terms/",
];
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

const netlifyHeaders = `/*
  Cache-Control: public, max-age=0, must-revalidate
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/work
  Cache-Control: no-cache, no-store, must-revalidate

/work/
  Cache-Control: no-cache, no-store, must-revalidate

/work/index.html
  Cache-Control: no-cache, no-store, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

await writeFile(join(staticDirectory, "_headers"), netlifyHeaders, "utf8");
console.log("Wrote Netlify cache and security headers");
