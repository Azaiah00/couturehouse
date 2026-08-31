# Technical Findings

- Technical SEO score: 68/100.
- No critical outage or robots/noindex blocker.
- Five primary pages return 200 and server-render complete content.
- HTTPS, HSTS, sitemap, robots, basic security headers, unique titles/descriptions, and one H1 per page are present.
- High: `/work/` and `/services/` HTML is cached for one year as immutable.
- High: no canonical tags exist.
- High: sitemap and internal links use slashless URLs that redirect to final slash URLs.
- High: obsolete `/for-brands` remains indexed and returns 404.
- Medium: no CSP, no skip link, and microcopy size/contrast needs review.
- Medium: four app-level lint errors remain; generated `.netlify` output is not excluded from lint.
