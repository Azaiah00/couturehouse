import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../app/analytics-events.ts", import.meta.url), "utf8");
const javascript = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText;
const { ensureAnalytics, trackEvent } = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`);

test("queues a form event before hydration using Google's command protocol", () => {
  globalThis.window = { location: { pathname: "/start-a-project/", href: "https://couturehouse.co/start-a-project/" } };
  try {
    trackEvent("project_inquiry_start", { form_name: "project-inquiry" });
    ensureAnalytics();
    trackEvent("generate_lead", { form_name: "project-inquiry" });
    const commands = window.dataLayer;
    assert.equal(commands.length, 4, "initialization is sent once without losing early events");
    for (const command of commands) assert.equal(Object.prototype.toString.call(command), "[object Arguments]");
    assert.equal(commands[0][0], "js");
    assert.equal(commands[1][0], "config");
    assert.equal(commands[1][1], "G-4TMQXSC4M5");
    assert.deepEqual(Array.from(commands[2]), ["event", "project_inquiry_start", {
      page_path: "/start-a-project/", form_name: "project-inquiry",
    }]);
    assert.equal(commands[3][1], "generate_lead");
  } finally {
    delete globalThis.window;
  }
});

test("analytics helpers remain safe during server rendering", () => {
  assert.equal(ensureAnalytics(), undefined);
  assert.doesNotThrow(() => trackEvent("project_inquiry_view"));
});
