# Technical and backend findings

- Live baseline technical SEO: 72/100; projected after verified deployment fixes: 84/100.
- Canonical redirects, HTTPS, HSTS, robots, sitemap, SSR content, metadata, JSON-LD and true 404 behavior passed.
- Critical live exposure: public lead dashboard. Removed from the local public bundle.
- Critical live exposure: `dist/server/` and generated prerender secret. Packaging now strips server, client and Vite internals.
- High: HTML routes were served with one-year immutable caching. Verify headers after deploy.
- High: inquiry submission relies entirely on FormSubmit, CAPTCHA is disabled, and there is no first-party validation, throttling, durable storage or delivery monitoring.
- Medium: no CSP, stale manual sitemap dates, no branded 404, and dormant Cloudflare/D1 scaffolding.
- Performance field data was unavailable. Source indicators: 1.8 MB priority desktop hero video, about 111 KB CSS, about 190 KB framework JavaScript before compression and a 2.2 MB OG image.

