"use client";

// Catches errors at the root of the app tree (including layout failures).
// Renders its own <html> and <body> because the root layout may have failed.

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to the browser console with full detail
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <main style={{ minHeight: "100vh", padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: 0 }}>
            Error
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1, marginTop: "1rem", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            Something broke during render.
          </h1>
          <p style={{ marginTop: "1.5rem", color: "rgba(255,255,255,0.7)" }}>
            This page is showing detail because the production error overlay is suppressed.
            Copy the message below and send it back so we can fix it.
          </p>
          <pre style={{
            marginTop: "2rem",
            padding: "1.25rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            fontSize: 13,
            lineHeight: 1.5,
            overflow: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}>
{`message:  ${error?.message ?? "(no message)"}
name:     ${error?.name ?? "(no name)"}
digest:   ${error?.digest ?? "(no digest)"}

stack:
${error?.stack ?? "(no stack)"}`}
          </pre>
          <button
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              background: "#fff",
              color: "#000",
              border: "none",
              fontSize: 12,
              letterSpacing: 4,
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
