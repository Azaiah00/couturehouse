# Couture House Co.

**The digital house for the beauty industry.**

Marketing site for Couture House Co. — we build couture-quality websites, booking
systems, and branding for **Black-owned hair salons and beauty brands**.

Two offers the site sells:

1. **Websites + Booking** — a custom site with 24/7 online booking, deposits, no-show
   protection, and a Google presence. Live in 5–10 days.
2. **Branding & Growth** — logo/identity, online store, ad creative, agentic content
   systems, and digital products & courses.

No pricing is shown; every CTA drives to **Book a 15-min demo** (`hello@couturehouse.com`).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **Framer Motion**, **GSAP**, **Lenis** for motion; scroll reveals via IntersectionObserver
- Deployed on **Netlify** (`@netlify/plugin-nextjs`)

## Design system

Luxury couture, culturally rooted — ink black + chrome + couture gold as the spine,
warmed with plum / amber / espresso / warm paper. Display type is **Cormorant Garamond**;
UI/body is **Manrope**. All motion respects `prefers-reduced-motion`.

## Structure

```
app/
  page.tsx                 Home (hero, paths, compare, live booking demo, work, process, stats, CTA)
  websites-booking/        Core offer + interactive booking demo
  branding-growth/         Growth offer + Beverly's proof band
  work/                    Real case studies
  about/                   Positioning & trust
  contact/                 Book a demo (mailto-backed form)
  privacy/                 Privacy policy
  sitemap.ts · robots.ts   SEO
components/
  home/ · layout/ · sections/ · ui/ · forms/ · animations/
lib/
  siteData.ts              Nav, clients, case studies, booking-demo data
public/
  brand/ · clients/ · work/  Real Couture House + client assets
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content source of truth

Nav, clients, case studies, and the booking-demo data all live in `lib/siteData.ts`.
Contact email and the "Book a demo" mailto link are defined there too.
