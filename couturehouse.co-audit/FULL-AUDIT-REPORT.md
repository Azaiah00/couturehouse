# Couture House Co. Full Website and Project Audit

Audit date: August 8, 2026  
Live site: https://couturehouse.co  
Scope: all five live routes, desktop and mobile presentation, technical SEO, performance, accessibility signals, content, conversion, trust, structured data, hosting behavior, repository health, and the prior project/growth conversations.

## Executive verdict

Couture House is a strong brand website and a weak-to-moderate growth website.

It succeeds at taste, visual confidence, cultural specificity, mobile presentation, and breadth of creative capability. It does not yet prove business outcomes, establish who is behind the studio, answer enough buyer questions, or provide the search architecture and measurement required to consistently generate qualified leads.

The site should not be redesigned from scratch. Its direction is correct. The next phase is subtraction, proof, productization, search structure, and measurement.

## Scorecard

| Area | Score | Status |
|---|---:|---|
| Visual direction and brand distinctiveness | 90/100 | Strong |
| Mobile visual execution | 88/100 | Strong |
| Measured mobile lab performance | 95-98/100 | Strong |
| Measured desktop lab performance | 99/100 | Strong |
| Technical SEO | 68/100 | Needs work |
| Content quality | 62/100 | Needs focus |
| Positioning clarity | 68/100 | Promising but diluted |
| Conversion readiness | 51/100 | Material gaps |
| E-E-A-T / trust | 54/100 | Material gaps |
| AI citation readiness | 36/100 | Weak |
| Structured data | 0/100 | Missing |
| Weighted SEO health | 57/100 | Not launch-blocking, but growth-limiting |

The Lighthouse SEO score of 100 reflects basic technical checks, not overall search-market readiness. The broader 57/100 SEO health score includes missing canonicals, no schema, shallow architecture, weak authority evidence, and stale indexed content.

## What is working

### Brand and design

- The site is memorable. It does not look like a template salon-marketing agency.
- The typography, contrast, motion, color, music, and editorial composition form a coherent identity.
- "Digital worlds for hair, beauty & culture" is a defensible brand expression.
- "Beautiful enough to stop the scroll. Sharp enough to fill the chair" is the clearest commercial promise on the site.
- The work is culturally relevant to the intended niche, including Magic Coils, Beverly's, The Dreadlocks Salon, All Things Locs, Divine Textures, and OG Barnes.

### Mobile and usability

- The homepage, Work, Services, Studio, and Start a Project pages were visually inspected at 390 by 844 pixels.
- No page-level horizontal overflow was observed.
- The mobile navigation opens, closes, and exposes all core routes.
- The project form is readable and usable on mobile.
- Interactive controls have accessible names, and all 75 rendered images include an alt attribute.
- Reduced-motion and data-saving behavior is considered in the video component.

### Performance implementation

- Noncritical videos are lazy-loaded or click-to-play.
- Mobile and reduced-motion visitors receive the hero poster instead of the large autoplay video.
- Audio uses deferred loading.
- Video posters now correspond to the actual footage.
- All five routes passed the production build and five automated rendering/media tests.
- Unlighthouse lab results:

| Route | Mobile performance | Desktop performance | Accessibility | Best practices | Basic SEO |
|---|---:|---:|---:|---:|---:|
| Home | 95 | 99 | 95 | 96 | 100 |
| Services | 97 | 99 | 95 | 96 | 100 |
| Start a Project | 98 | 99 | 95 | 96 | 100 |
| Studio | 98 | 99 | 95 | 96 | 100 |
| Work | 95 | 99 | 95 | 96 | 100 |

These are controlled lab results. No Search Console, Analytics, or CrUX field data was connected, so real-user Core Web Vitals and traffic cannot be claimed.

### Baseline technical health

- All five primary pages return 200.
- HTTPS and HSTS are active.
- robots.txt and sitemap.xml return 200 and use the correct content types.
- Content is server-rendered and readable without depending on client-side JavaScript.
- Every route has a unique HTML title, meta description, one H1, language declaration, and mobile viewport.
- Security headers include X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and a restrictive Permissions-Policy.
- The production deployment is live and marked ready.

### Conversion foundation

- The Start a Project form qualifies leads by service, budget, timeline, business, and project context.
- "You do not need a perfect brief" lowers anxiety.
- The site explains what happens after an inquiry.
- The form has accessible labels and an email fallback.

## What is not working well enough

### 1. Work and Services HTML can remain stale for one year

The live `/work/` and `/services/` HTML responses use:

`Cache-Control: public,max-age=31536000,immutable`

The cause is the broad `/work/*` and `/services/*` header rules in `netlify.toml`. Those rules were intended for media folders but also match the HTML routes. This can make users continue seeing an old page after a deployment and plausibly explains earlier reports that updates were missing.

This is the first implementation fix.

### 2. The homepage is overloaded

The homepage contains roughly 1,000 rendered words and a very long sequence of overlapping proof modules:

- Hero
- Capability and client strips
- Magic Coils feature
- Three featured salon projects
- A Studio With Range
- Services
- Product-placement showcase
- Brand poster
- Manifesto
- Full campaign film
- Motion showreel
- Beyond the Salon gallery
- Beauty-meets-business section
- Process
- Final CTA

The problem is not raw word count alone. The page repeats the same message through multiple galleries, films, and abstract brand statements. It impresses before it explains, and keeps proving creative range after the point is already made.

Recommendation: reduce the homepage by approximately 25-35%, not 50%. Keep the brand richness while removing duplicate proof.

### 3. The best business message is buried

The explicit audience and result appear near the end:

- Black-owned salons, stylists, and hair-care brands.
- Stop the scroll and fill the chair.

The first screen is visually excellent but commercially broad. A salon owner should understand the target audience, owned-digital-home problem, and booking/trust result before scrolling.

Keep "Digital worlds for hair, beauty & culture" as the brand line, but add an answer-first commercial sentence in the first viewport.

### 4. Positioning is diluted by broad language

Repeated use of "ambitious businesses" weakens niche ownership. Couture House can still accept work outside beauty, but the public acquisition message should make Black-owned salons, stylists, and textured-hair brands the unmistakable primary market.

Non-beauty projects should demonstrate range on the Work page rather than compete with the main niche on the homepage.

### 5. Proof is visual, not commercial

The site shows attractive outputs but lacks internal case studies with:

- Client problem and baseline
- Strategy and constraints
- Booking or purchase journey
- Deliverables and timeline
- Measurable result
- Client quote
- Couture House role and team

Most portfolio links send visitors off-site. This proves the sites exist, but it gives Couture House little searchable, persuasive, first-party evidence.

### 6. The studio has no visible people

The Studio page explains values but does not name the founder, team, experience, or relationship to the niche. This is the largest trust and E-E-A-T gap.

"Built for the culture" becomes more credible when the people, experience, and perspective behind the claim are visible.

### 7. Services are capabilities, not offers

Websites, Apps, Workflows + Automation, and Content are broad capability buckets. They do not answer the questions a qualified salon owner needs before contacting the studio:

- What is included?
- What booking systems can be integrated?
- What is the typical timeline?
- What is the starting investment?
- Who supplies content?
- Who owns the domain, website, accounts, and content?
- What happens after launch?
- What does support cost?

Recommended public offer structure:

1. Websites + Booking
2. Commerce + Content
3. Automation + Care

Keep custom apps as a secondary or discovery-led capability, not an equal first-step offer.

### 8. There is only one conversion rung

"Start a project" is a high-commitment CTA. The form is good, but there is no lower-friction path such as a Salon Digital Presence Scorecard, short audit, or 20-minute fit call.

The footer also lacks a visible email, privacy policy, terms, and a stronger business identity/trust block.

The form uses FormSubmit rather than an owned or directly integrated lead workflow. Netlify Forms is not enabled, and no visible CRM or scheduling connection exists. The form was not submitted during this read-only audit.

### 9. Search architecture is too shallow

Only five routes exist. There are no dedicated pages for high-intent topics such as:

- Salon website design
- Hairstylist website design
- Salon website redesign
- Booking portals and integrations
- Shopify for hair and beauty
- Salon automation
- Content creation
- Individual client case studies

This makes it difficult to rank for non-brand queries or give each offer enough depth.

### 10. Canonical and URL consistency are incomplete

- No page has a canonical tag.
- Internal links and sitemap entries use slashless URLs that redirect to trailing-slash URLs.
- Query variants such as `/start-a-project?service=websites` have no canonical consolidation.
- An obsolete `/for-brands` result remains indexed and currently returns 404.
- Public search still surfaces the previous retail-brand positioning.

Fix canonicals, use final trailing-slash URLs everywhere, add targeted legacy redirects, then submit the corrected sitemap through Google Search Console and Bing Webmaster Tools.

### 11. Structured data is absent

All five pages contain zero JSON-LD, microdata, or RDFa.

Add truthful:

- Organization, WebSite, and WebPage on the homepage
- Service on Services
- BreadcrumbList with visible breadcrumbs on inner routes
- CollectionPage on Work
- VideoObject only when upload date and other required facts can be provided accurately

Do not add LocalBusiness until real in-person eligibility, contact details, and service-area facts are confirmed.

### 12. Images are accessible but not responsive

- All 75 rendered images have alt attributes.
- All 75 lack intrinsic width/height attributes.
- None uses responsive `srcset`/`sizes`.
- Several PNG source assets are 1.4-2.8 MB.

CSS aspect ratios protect some layouts, but intrinsic dimensions and responsive delivery should still be added to reduce CLS risk and transfer waste.

### 13. The remaining media risk is concentrated in the hero

The media library contains approximately:

- 54.93 MB of MP4 files
- 18.58 MB of audio
- 16.39 MB of PNG files
- 7.22 MB of WebP images

Most of this is safely deferred. The main exception is the 10.4 MB desktop hero MP4, even though the visible playback uses only seconds 3-15.

Do not remove all videos. Keep one strong hero motion moment and one featured case-study motion moment. Clip and recompress the desktop hero, and move duplicate full-film/showreel material to Work or a case-study page.

### 14. Accessibility polish is still needed

- Some microcopy renders around 8.5-10.5px with low opacity.
- There is no skip-to-content link.
- The fixed soundtrack control visually overlaps the bottom of mobile viewports. It remains usable, but adds crowding around lower controls and copy.
- No complete screen-reader, keyboard-only, or axe conformance test was performed.

### 15. Development hygiene is not fully clean

- The production build succeeds.
- All five automated tests pass.
- App-only lint reports four React effect/state errors and 28 warnings.
- The general lint command also scans generated `.netlify` output, creating thousands of noisy warnings; `.netlify` should be excluded.

These lint findings are not a current outage, but should be cleaned before the codebase grows.

## Keep, move, cut, and add

### Keep

- Current visual identity and overall direction
- Hero design and brand line
- Magic Coils as the primary case
- Three strongest salon/hair projects on the homepage
- "Beautiful enough... fill the chair"
- Explicit Black-owned beauty positioning
- Current project form structure
- Music as an optional brand layer
- Photo-revival disclosure and example

### Move off the homepage

- Most non-beauty projects
- Full campaign film
- Additional showreel material
- Expanded product-placement content
- Repeated portfolio grids

Put these on Work, Content, or individual case-study pages.

### Cut or rewrite

- Most uses of "ambitious businesses"
- Repeated world/momentum/pulse/moving language
- "The Studio page is where our point of view becomes a working model"
- Generic claims without a concrete deliverable, fact, or example
- One of the duplicate range/gallery sections

### Add

- Founder/team identity
- Three to five attributed testimonials
- Three to five internal case studies
- Starting investment and timeline guidance
- Supported booking/e-commerce platforms
- Direct email and trust/legal links
- Lower-friction scorecard/audit CTA
- Analytics, Search Console, Bing, CRM, and call tracking
- Page-specific social metadata and schema

## Chat and project-history status

### Completed

- Replaced the old public website with the current Couture House build.
- Connected and published the public domain on Netlify.
- Updated the GitHub `main` branch with the current public website.
- Restored page availability after deployment problems.
- Improved media loading with posters, intersection loading, and click-to-play behavior.
- Kept mobile/reduced-motion visitors from downloading the hero video automatically.
- Updated Beverly's and Majestic project previews in the portfolio source.
- Corrected Magic Coils and other video preview images so they match the source footage.
- Verified the current mobile layouts and production pages.
- Created a detailed 90-day SEO, social, outreach, prospecting, competitor, and measurement strategy in the local `strategy/` folder.

### Planned but not implemented

- GA4 and conversion events
- Google Search Console and Bing Webmaster Tools
- CRM and scheduling integration
- Google Business Profile eligibility decision and setup
- Testimonials/review collection
- Salon Digital Presence Scorecard
- Productized salon website offer
- Dedicated service landing pages
- Individual case studies
- Social content calendar execution
- Prospecting and outreach routine
- Backlink/partner campaign
- Privacy and terms pages
- Founder/team authority content

The growth strategy exists as a plan, but the measurable acquisition system has not yet been launched.

### Separate Sites mirror

The public domain is hosted on Netlify and is live. The separate managed Sites mirror was not synchronized because sending the source to that managed repository requires explicit authorization. This does not affect `couturehouse.co`.

## Competitive interpretation

Couture House is visually stronger and more culturally specific than many salon website vendors. Competitors generally communicate the commercial offer more directly: booking outcomes, price, timeline, ownership, testimonials, and demos.

Couture House should not compete on cheap, instant, template websites. Its defendable category is premium, culturally fluent digital direction plus websites, booking journeys, commerce, automation, motion, and content. The site needs to explain that value in operational terms and prove the outcome.

## Final recommendation

Keep the direction. Do not add more homepage content. Remove or relocate approximately one-third of the repeated proof, move the salon-owner promise into the first screen, and use the freed space for testimonials, founder identity, and a lower-friction audit CTA.

The next development sprint should prioritize:

1. Fix stale HTML caching.
2. Fix canonical/URL/sitemap/legacy redirects.
3. Compress and clip the desktop hero video.
4. Tighten the homepage and lead with the niche outcome.
5. Add trust, founder, testimonials, and legal/contact information.
6. Install analytics and lead tracking.
7. Publish the first service page and Beverly's case study.

The website is good enough to show today. It is not yet complete as a discoverability and sales system.

## Audit limitations

- No GA4, Search Console, Bing Webmaster Tools, CrUX, commercial backlink index, or GBP data was connected.
- Google PageSpeed's public endpoint was rate-limited, so local Lighthouse lab testing was used.
- Lab performance is not a substitute for 28-day real-user field data.
- The inquiry form was not submitted, because that would send an external message during a read-only audit.
- Public search results can lag behind the live website.
- This was not a formal legal, privacy, penetration-testing, or complete WCAG conformance audit.
