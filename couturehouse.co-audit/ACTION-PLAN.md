# Couture House Co. Action Plan

## Completed now

- Launch the interactive client/owner booking-suite showcase.
- Link the showcase from the service page and footer.
- Register the route in static output and sitemap.
- Refresh four stale portfolio previews.
- Remove the exposed internal lead dashboard from the public bundle.
- Strip server/client build internals from deploy output.
- Correct the soundtrack overlap, mobile touch target, menu focus behavior, reduced-motion handling and booking-page mobile overflow.

## Next 7 days

1. Replace FormSubmit with a first-party lead endpoint. Add server-side validation, rate limiting, bot protection, structured logs, a durable submission record and monitored email delivery.
2. Verify after deployment that these return 404: `/couture-house-lead-dashboard.html`, `/server/index.js`, and `/server/vinext-server.json`.
3. Verify every HTML route returns `Cache-Control: public, max-age=0, must-revalidate`; only fingerprinted static assets should be immutable.
4. Add a branded 404 page.

## Next 30 days

1. Add a report-only CSP, review violations, then enforce a minimal policy.
2. Compress or replace the 2.2 MB OG image and review the 1.8 MB desktop hero video.
3. Capture Lighthouse and CrUX field data once API quota is available.
4. Add quantitative outcomes and testimonials to the case studies.
5. Generate sitemap and static route output from one shared route manifest.
6. Review low-opacity tertiary text against WCAG AA contrast.

## Authority setup

1. Connect Moz API and capture DA, PA, Spam Score, referring domains and top-linked pages.
2. Verify the domain in Bing Webmaster Tools and export inbound links.
3. Establish a quarterly backlink baseline and brand-mention outreach list.

