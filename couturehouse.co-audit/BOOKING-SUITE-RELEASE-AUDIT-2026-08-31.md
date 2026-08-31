# Couture House Co. Website Audit

Audit date: 2026-08-31  
Scope: production site, local source, static output, 14 first-party routes, 11 portfolio destinations, frontend, backend/integrations, technical SEO, structured data, accessibility, performance indicators, images, and backlink authority.

## Executive result

Overall website score: **84/100 after the fixes in this release**. The live baseline was 76/100 because two internal assets were publicly exposed, key HTML routes were cached as immutable, and four portfolio captures were stale or incomplete.

The website's strongest qualities are its art direction, positioning, responsive composition, metadata coverage, server-rendered content, and portfolio depth. The main remaining weakness is the inquiry form's reliance on FormSubmit without first-party validation, throttling, durable storage, or delivery observability.

## Scorecard

| Area | Score | Evidence |
|---|---:|---|
| Visual identity and art direction | 94 | Distinctive system, strong imagery, memorable typography and cohesive editorial direction |
| Frontend and interactions | 88 | Responsive layouts, functional navigation, interactive booking demo, visible focus states |
| Mobile responsiveness | 89 | No intended horizontal scrolling; new booking hero corrected at 390px; 48px menu target |
| Accessibility | 82 | Semantic structure, labels, focus outlines, menu focus loop, Escape handling and reduced-motion support; some low-contrast tertiary copy remains |
| Technical SEO | 84 | Canonicals, unique metadata, robots, sitemap, correct 404s, SSR content and secure canonical redirects |
| On-page/content | 87 | Clear services and audiences; excellent portfolio proof; stronger quantitative case-study evidence would improve trust |
| Structured data | 88 | Organization, WebSite, Service, CreativeWork and WebApplication JSON-LD rendered server-side |
| Performance | 77 | Deferred media and mobile poster behavior are good; hero video, global CSS and OG image remain heavy; field data unavailable |
| Backend/integrations | 60 | Static architecture is reliable, but the inquiry form is third-party-only and D1/Worker scaffolding is dormant |
| Security/deployment hygiene | 86 | Sensitive public artifacts removed from the build; headers are solid; CSP and stronger form protection remain |
| Portfolio freshness | 94 | All 11 destinations resolve; four stale captures refreshed in this release |
| Authority/backlinks | Not scored | Moz DA and link-source coverage unavailable; the required sufficiency gate failed at 0/7 factors |

Weighted SEO health score: **84/100**.

## Critical findings resolved in this release

1. `public/couture-house-lead-dashboard.html` exposed prospect research and campaign operations. It was removed from the public bundle and preserved only as an untracked internal workspace file.
2. Netlify published `dist/server/`, including the compiled server bundle and a generated `prerenderSecret`. Static packaging now removes `server/`, `client/`, and `.vite/` after prerendering.
3. The new booking suite is registered in static generation and the XML sitemap, with explicit fictional-data labeling and no real submission or payment behavior.
4. Divine Textures, OG Barnes, Sacrificial Conversations, and Washington WizKids previews were recaptured from their current live homepages.
5. The soundtrack control was moved away from Work-page copy, the mobile menu target increased to 48px, keyboard focus is managed in the mobile menu, and global reduced-motion behavior was added.

## Technical and backend findings

- All 14 first-party routes build and statically render.
- The rendered-output suite passes 6/6 tests.
- Changed source files pass ESLint.
- A static-reference scan found 334 internal `href`, `src`, and `poster` references with zero missing targets before this release; the new route and assets also build successfully.
- HTTP and `www` redirect to the canonical HTTPS apex in one 301 hop.
- Unknown routes return a real 404.
- HTML cache behavior must be verified after production deployment. Only fingerprinted assets should be immutable.
- The project form posts from the browser to FormSubmit with CAPTCHA disabled and only a honeypot. Migrate to a first-party Netlify Function or Netlify Forms workflow with validation, rate limiting, spam protection, logs and delivery monitoring.
- Add Content Security Policy in report-only mode before enforcing it.
- Clarify the canonical platform: production is static Netlify output while Cloudflare Worker/D1 scaffolding remains unused.

## Preview audit

All 11 portfolio links loaded. Magic Coils, The Dreadlocks Salon, Beverly's, All Things Locs, Sodiq Yusuff MMA, Majestic Contracting and Party Bus R Us were already accurate. Divine Textures, OG Barnes, Sacrificial Conversations and Washington WizKids were refreshed.

## Domain authority

No defensible numeric Moz Domain Authority is available. Moz, Bing Webmaster Tools and DataForSEO were not connected, and the Common Crawl 2026 Q1 centrality query timed out. Because zero of seven backlink factors were supported, no backlink health score or invented DA estimate is reported.

Recommended measurement setup: connect the Moz API for DA/PA/Spam Score and referring domains, then connect Bing Webmaster Tools for current inbound-link evidence.

## Remaining risks

1. Third-party-only inquiry form and weak bot protection.
2. No enforced Content Security Policy.
3. Field Core Web Vitals unavailable; page-weight indicators suggest further media optimization is worthwhile.
4. Some low-opacity tertiary text may miss contrast targets.
5. Sitemap dates are still manually maintained and routes exist in separate build and sitemap lists.

## Verification record

- `vinext build`: passed
- `npm run build:netlify`: passed; 14 routes rendered
- `node --test tests/rendered-html.test.mjs`: 6 passed, 0 failed
- Changed-file ESLint: passed
- Desktop booking-suite visual QA: passed at 1440 × 1200
- Mobile booking-suite visual QA: corrected after the first 390 × 844 capture showed overflow

