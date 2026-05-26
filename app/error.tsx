"use client";

// Catches errors inside route segments (not the root layout itself).
// Renders inside the existing layout so the header / footer stay around it.

import { useEffect } from "react";

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[RouteError]", error);
  }, [error]);

  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1100px] mx-auto">
        <span className="eyebrow mb-6 block">Error</span>
        <h1 className="display-heading text-white text-[clamp(2.5rem,7vw,7rem)] leading-[0.92]">
          Something broke<br />on this page.
        </h1>
        <p className="text-white/65 max-w-xl mt-8 font-sans text-base md:text-lg">
          The detail below is shown deliberately while we shake the new redesign down.
          Copy it back to me so I can fix the cause.
        </p>
        <pre className="mt-10 p-6 border border-line bg-surface text-white/85 font-sans text-sm whitespace-pre-wrap break-words overflow-auto">
{`message:  ${error?.message ?? "(no message)"}
name:     ${error?.name ?? "(no name)"}
digest:   ${error?.digest ?? "(no digest)"}

stack:
${error?.stack ?? "(no stack)"}`}
        </pre>
        <button
          onClick={reset}
          className="mt-10 px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.22em] font-sans hover:bg-white/85 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
