# Couture House Priority Action Plan

## Phase 1: Immediate technical fixes (next 72 hours)

1. Restrict the `/work/*` and `/services/*` immutable cache rules to media assets so HTML revalidates normally.
2. Add self-referencing canonical URLs to all five pages.
3. Standardize internal links, sitemap URLs, Open Graph URLs, and canonicals on trailing-slash URLs.
4. Add a targeted redirect from `/for-brands` to the closest current relevant page.
5. Restore Privacy and Terms pages; redirect only old URLs with a real equivalent.
6. Update sitemap `lastmod` values truthfully and resubmit after Search Console/Bing setup.
7. Exclude `.netlify` from lint and fix the four app-level React effect/state lint errors.

Definition of done:

- Work and Services HTML no longer returns one-year immutable caching.
- Every indexable page has one correct canonical.
- No sitemap/internal link requires a redirect.
- The old indexed `/for-brands` URL no longer returns 404.
- Build, tests, and app-only lint pass.

## Phase 2: Homepage and media focus (week 1)

1. Keep the visual hero but add an audience/outcome sentence in the first viewport.
2. Move "Beautiful enough to stop the scroll. Sharp enough to fill the chair" upward.
3. Reduce homepage length by 25-35%.
4. Keep Magic Coils and three salon/hair proof projects.
5. Merge or remove duplicate range/gallery/showreel sections.
6. Move most non-beauty work and long films to Work or case studies.
7. Clip the hero to the actual 12-second range, lower the bitrate, and provide modern/fallback formats.
8. Compress oversized PNG/social assets and add intrinsic image dimensions plus responsive variants.
9. Increase important microcopy size/contrast and add a skip-to-content link.
10. Reconsider the mobile soundtrack bar position so it does not crowd form controls or footer content.

Definition of done:

- A salon owner can identify audience, offer, and outcome without scrolling.
- The homepage has one primary portfolio story instead of repeated galleries.
- Desktop hero transfer is materially smaller.

## Phase 3: Trust and conversion (weeks 1-2)

1. Add founder/team names, photos, roles, experience, and professional profiles.
2. Collect three to five attributed client testimonials with permission.
3. Add visible email, response-time expectation, privacy, terms, and ownership/support language.
4. Productize the main offer around Websites + Booking.
5. Publish starting investment, typical timeline, deliverables, supported platforms, and client responsibilities.
6. Add a lower-friction Salon Digital Presence Scorecard or short audit.
7. Add a 20-minute fit-call option after the scorecard or form.
8. Move lead handling to an owned/tested form workflow connected to CRM and analytics.
9. Perform a real end-to-end form test with an approved test inquiry.

Definition of done:

- Visitors can verify who Couture House is, what an engagement includes, and what happens next.
- Every inquiry is captured, attributed, and followed up.

## Phase 4: Search foundation (weeks 2-4)

1. Connect GA4, Google Search Console, Bing Webmaster Tools, and conversion events.
2. Add Organization/WebSite/WebPage schema on the homepage.
3. Add visible breadcrumbs and BreadcrumbList schema to inner pages.
4. Add Service schema to Services and page-specific Open Graph/Twitter metadata.
5. Publish `/salon-website-design/`.
6. Publish `/work/beverlys-of-nashville/`.
7. Publish `/work/magic-coils/`.
8. Secure approved client backlinks to the matching case studies.

Definition of done:

- Search engines see clear entities, final URLs, commercial topics, and first-party proof.
- Traffic and conversions can be measured.

## Phase 5: 90-day demand engine

1. Execute the existing 12-week social calendar.
2. Publish one useful service/case/insight page per week.
3. Start with Nashville and Oakland proof-led prospecting.
4. Research 50 qualified prospects weekly and add 30 scoring 70+.
5. Create 15 meaningful public interactions and 10 permission-based messages weekly.
6. Offer three to five short audits weekly.
7. Request introductions from existing clients.
8. Review traffic, scorecards, calls, proposals, close rate, and objections every Friday.

## Do not do

- Do not add more homepage sections or videos.
- Do not remove all video; compress and relocate strategically.
- Do not broaden the primary acquisition message beyond hair/beauty during the 90-day focus.
- Do not create a Google Business Profile unless in-person eligibility is real.
- Do not build a custom booking platform without a documented business bottleneck.
- Do not run paid ads before analytics and lead attribution are working.
- Do not buy followers, reviews, directory spam, or backlinks.
