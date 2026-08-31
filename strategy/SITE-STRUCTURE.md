# Couture House Growth Site Structure

## Architecture objective

The current five-page site should remain visually premium while gaining specific pages that can rank, answer objections, prove results, and convert a salon owner.

Do not publish thin pages simply to increase URL count. Every page must have a distinct audience, search intent, useful proof, and conversion action.

## Recommended hierarchy

```text
/
├── /salon-website-design
├── /hair-stylist-website-design
├── /black-owned-salon-web-design
├── /salon-website-redesign
├── /salon-booking-portals
├── /salon-automation
├── /shopify-for-hair-and-beauty
├── /salon-content-creation
├── /salon-digital-growth
├── /work
│   ├── /work/magic-coils
│   ├── /work/beverlys-of-nashville
│   ├── /work/the-dreadlocks-salon
│   ├── /work/all-things-locs
│   └── /work/divine-textures
├── /process
├── /pricing
├── /salon-digital-presence-scorecard
├── /insights
│   ├── /insights/does-a-hairstylist-need-a-website
│   ├── /insights/instagram-vs-website-for-salons
│   ├── /insights/how-much-does-a-salon-website-cost
│   ├── /insights/salon-website-mobile-checklist
│   ├── /insights/salon-booking-platform-vs-website
│   ├── /insights/how-to-add-booking-to-a-salon-website
│   ├── /insights/how-salons-can-get-more-reviews
│   ├── /insights/shopify-for-salon-products
│   └── /insights/salon-digital-presence-checklist
├── /studio
├── /start-a-project
├── /privacy
└── /terms
```

## Page roles

### Homepage

**Primary job:** Make the niche, outcome, proof, and next step unmistakable.

Suggested title:

`Web Design & Booking Systems for Black-Owned Salons | Couture House`

Suggested description:

`Couture House builds premium websites, booking portals, Shopify stores, automations and content for Black-owned salons, stylists and textured-hair brands.`

Recommended above-the-fold structure:

- Eyebrow: Digital growth studio for Black-owned salons and stylists.
- H1: Turn your artistry into a digital home that gets found, trusted, and booked.
- Supporting proof: Salon websites, booking portals, Shopify, automations, and content.
- Primary CTA: Get your free salon website score.
- Secondary CTA: View salon work.

### Commercial service pages

Each page should include:

1. The audience and problem in the H1.
2. Specific business outcomes.
3. What is included and excluded.
4. Process and timeline.
5. Relevant case study.
6. Platforms/integrations supported.
7. FAQs.
8. Starting investment or clear qualification language.
9. Audit and fit-call CTA.

Target 800–1,500 genuinely useful words, but do not write to a word count when the topic is complete sooner.

### Case studies

Each case study should include:

- Client and market.
- Business stage.
- Original challenge.
- Audience insight.
- Before experience.
- Strategy.
- Design and technical solution.
- Booking/commerce/content journey.
- Mobile screenshots.
- Timeline.
- Results, with measurement period and source.
- Client quote.
- Services delivered.
- Next-step CTA.

If numbers are unavailable, collect qualitative outcomes rather than inventing metrics:

- Easier updates.
- Fewer repetitive DMs.
- Clearer service discovery.
- Better client feedback.
- More professional sales conversations.

### Scorecard landing page

The page should be focused and distraction-light:

- One promise.
- Five score categories.
- What the user receives.
- Short form.
- Consent language.
- Immediate result or thank-you page.
- Calendar invitation only after value is delivered.

### Insights

Every article should:

- Answer the main question in the first 100 words.
- Include examples from real salon workflows.
- Link to one service page and one case study.
- Include an author/reviewer with relevant experience.
- Show last updated date.
- End with a relevant diagnostic CTA.
- Use Article or BlogPosting schema.

## Navigation

Recommended desktop navigation:

- Work.
- Services.
- Salon Growth.
- Studio.
- Free Audit.

Recommended Services dropdown:

- Salon Websites.
- Stylist Websites.
- Booking Portals.
- Shopify.
- Automation.
- Content.

Keep “Start a project” as a secondary conversion page. Use “Free salon website audit” for cold visitors and “Start a project” for warm referrals.

## Internal-link system

```text
Homepage
  ├── links to top three salon services
  ├── links to top three salon case studies
  └── links to scorecard

Service page
  ├── links to one relevant case study
  ├── links to two supporting articles
  └── links to scorecard and project form

Article
  ├── links to its parent service
  ├── links to another article in the cluster
  └── links to one proof page

Case study
  ├── links to services delivered
  ├── links to related case study
  └── links to fit call
```

Use descriptive link language such as “salon booking portal design,” not repeated “learn more.”

## Structured data plan

| Page type | Schema |
|---|---|
| Homepage | Organization and ProfessionalService |
| Service | Service |
| Case study | Article plus Organization/Person references where appropriate |
| Insight | BlogPosting or Article |
| Team/founder profile | Person and ProfilePage |
| FAQ | FAQPage only when questions and answers are visibly present and current |
| Breadcrumbs | BreadcrumbList |

Organization markup should include:

- Name.
- Canonical URL.
- Logo.
- Description.
- Contact point.
- `sameAs` links for Instagram, TikTok, and verified profiles.
- Area served as United States if service is nationwide.

Do not use LocalBusiness or a physical address unless the real operation qualifies and the information is publicly accurate.

## Technical SEO changes

Priority:

1. Add self-referencing canonicals.
2. Add Organization/ProfessionalService structured data.
3. Create a proper dynamic sitemap as pages are added.
4. Add a redirect from the obsolete `/for-brands` URL to the most relevant current page, probably `/services` until `/salon-digital-growth` exists.
5. Verify the site in Google Search Console and Bing Webmaster Tools.
6. Submit the sitemap and request reindexing of the homepage and core pages.
7. Inspect Google’s cached title/snippet after reindexing because old retail positioning is still appearing.
8. Add shareable open-graph images for each case study and major service.
9. Track form completions and fit-call bookings.
10. Keep mobile media deferred and target Core Web Vitals:
   - LCP at or below 2.5 seconds.
   - INP at or below 200 milliseconds.
   - CLS at or below 0.1.

## Conversion additions

- Free audit/scorecard CTA.
- Fit-call calendar.
- Three to five testimonials.
- Review platform badge only after a real profile exists.
- “Starting at” pricing or a minimum engagement.
- Typical project timeline.
- Clear ownership statement: client owns site, domain, content, and accounts subject to contract.
- Supported booking-platform list.
- Booking-portal demo.
- Before/after mobile slider or video.
- Newsletter or useful salon-growth email.
- TikTok link in navigation/footer.
- FAQ addressing content, photography, booking tools, SEO timelines, payments, and maintenance.

## Content quality gates

A page is ready only if it:

- Matches one unique intent.
- Provides information not already covered by another page.
- Includes real expertise, example, or proof.
- Has a clear title, description, H1, canonical, and social image.
- Links into and out of the site architecture.
- Works at 390px, 768px, and desktop widths.
- Does not autoplay nonessential media on mobile.
- Has no fabricated statistics, reviews, locations, or client outcomes.
- Has a measurable CTA.

## Launch order

### Release 1

- Homepage messaging refinement.
- `/salon-website-design`.
- `/salon-booking-portals`.
- `/work/beverlys-of-nashville`.
- `/work/magic-coils`.
- Scorecard.
- Schema, analytics, Search Console, and redirect.

### Release 2

- `/hair-stylist-website-design`.
- `/salon-website-redesign`.
- `/shopify-for-hair-and-beauty`.
- Two additional case studies.
- Four insight articles.

### Release 3

- Automation, content, and digital-growth service pages.
- Remaining case studies.
- Pricing/process.
- Ongoing insight clusters.

Avoid location pages until Couture House chooses a real geographic strategy and can add market-specific proof. Do not create interchangeable city pages.
