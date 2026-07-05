/* ============================================================
   Couture House Co. — Site content source of truth
   ============================================================ */

export const CONTACT_EMAIL = "hello@couturehouse.com";
export const BOOK_HREF = `mailto:${CONTACT_EMAIL}?subject=Book%20a%2015-min%20demo`;

export const NAV_LINKS = [
  { label: "Websites & Booking", href: "/websites-booking" },
  { label: "Branding & Growth", href: "/branding-growth" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

/* Real clients — shown as the editorial marquee */
export const CLIENTS = [
  "Beverly's of Nashville",
  "Magic Coils",
  "The Fairyy Loc Mutha",
  "Loc'd By Love",
  "OG Barnes",
] as const;

export type CaseStudy = {
  slug: string;
  name: string;
  kicker: string;
  image: string;
  imageAlt: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "beverlys-of-nashville",
    name: "Beverly's of Nashville",
    kicker: "The flagship · 30-year legacy salon",
    image: "/work/hero-color.jpg",
    imageAlt: "Editorial color work — deep curls with red highlights under warm gold light",
    blurb:
      "Master stylist Teddy Chisom's legacy salon. We built the SEO-rich site plus the whole growth engine: brand guide, custom-wig boutique, The Academy, digital courses, a 30-day content calendar, and email sequences.",
    tags: ["Website", "Booking", "Branding", "Academy", "Courses"],
    featured: true,
  },
  {
    slug: "magic-coils",
    name: "Magic Coils",
    kicker: "The brand launch · beauty product",
    image: "/work/magic-coils-silkpress.jpg",
    imageAlt: "Silk-press styling for the Magic Coils hair-care brand",
    blurb:
      "A full beauty-brand launch — identity, an online store, a mascot brand video, and a channel playbook across TikTok Shop, Pinterest, and Instagram with a 90-day growth plan.",
    tags: ["Identity", "Online store", "TikTok Shop", "Content system"],
  },
  {
    slug: "the-fairyy-loc-mutha",
    name: "The Fairyy Loc Mutha",
    kicker: "Couture editorial · loc studio",
    image: "/work/fairyy-locs.jpg",
    imageAlt: "Detailed starter locs styled at The Fairyy Loc Mutha",
    blurb:
      "A high-end editorial site for a master loctician — the top of the \"luxury couture, culturally rooted\" aesthetic, built to make a premium price feel obvious.",
    tags: ["Website", "Editorial design", "Brand"],
  },
  {
    slug: "og-barnes",
    name: "Loc'd By Love & OG Barnes",
    kicker: "Booking-first · multi-brand hub",
    image: "/work/og-barnes-portrait.webp",
    imageAlt: "OG Barnes brand portrait against a gold-leaf backdrop",
    blurb:
      "From a single booking-driven loc salon to OG Barnes' multi-brand hub — locs, wellness, and fitness under one roof with a unified admin. Proof we scale from one chair to a small empire.",
    tags: ["Booking", "Multi-brand", "Admin"],
  },
];

/* Booking demo — the interactive product proof */
export const DEMO_SERVICES = [
  { name: "Silk Press", detail: "Wash, press & style", price: "$95" },
  { name: "Loc Retwist", detail: "Retwist & style", price: "$120" },
  { name: "Custom Wig Install", detail: "Install & finish", price: "$250" },
  { name: "Color & Cut", detail: "Full color service", price: "$180" },
];

export const DEMO_STYLISTS = [
  { name: "Teddy Chisom", detail: "Master Stylist · 30 yrs" },
  { name: "Cecil Chisom", detail: "Master Barber · since 1988" },
  { name: "Next Available", detail: "First open chair" },
];

export const DEMO_TIMES = ["9:30", "11:00", "1:15", "2:45", "4:00", "5:30"];
