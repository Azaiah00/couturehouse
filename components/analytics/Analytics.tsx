import Script from "next/script";

// Loads Plausible Analytics if NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set.
// To turn on:
//   1) Add the site at https://plausible.io
//   2) Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=couturehouse.co in env
// To use a self-hosted Plausible instance, also set NEXT_PUBLIC_PLAUSIBLE_SCRIPT.
//
// Privacy-first by default — no cookies, no PII.

export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const src =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT ?? "https://plausible.io/js/script.js";

  if (!domain) return null;

  return (
    <Script
      strategy="afterInteractive"
      src={src}
      data-domain={domain}
    />
  );
}
