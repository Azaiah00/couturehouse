// Single source of truth for work / case studies.
// Used by /work, /work/[slug], and the FeaturedWork home section.
//
// To add a project: append an entry. Use a unique URL-safe slug.
// `cover` should be a 4:5 portrait image at /public/work/<slug>.jpg (or any path).

export type Work = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  tags: string[];
  brief: string;
  body: string[];
  gallery?: string[];
};

export const works: Work[] = [
  {
    slug: "luxury-apparel-launch",
    title: "Luxury Apparel Launch",
    category: "Fashion",
    year: "2025",
    cover: "/download (1).png",
    tags: ["Identity System", "Paid Social", "Editorial Photography"],
    brief:
      "Identity, launch creative, and ongoing performance system for a luxury apparel brand entering its first DTC season.",
    body: [
      "Couture House was brought in pre-launch to design the brand system and lead the season-zero campaign across paid, owned and earned. The goal was to establish creative leadership in a saturated category without out-spending incumbent retailers.",
      "We delivered a full identity refresh, an editorial-grade campaign shoot, a creative system for paid social and a launch retainer covering product drops, email and lifecycle. Performance creative and brand creative shared one system end to end.",
    ],
  },
  {
    slug: "dtc-skincare-relaunch",
    title: "DTC Skincare Relaunch",
    category: "Beauty & Personal Care",
    year: "2025",
    cover: "/download (3).png",
    tags: ["Brand Strategy", "Performance Creative", "Lifecycle"],
    brief:
      "A category-leading skincare brand re-platforming after three years — repositioned around a new clinical hero product.",
    body: [
      "We led the strategy refresh, hero claim architecture, packaging direction and creative system that carried the relaunch across owned, paid and retail channels.",
      "Within the first 90 days, performance creative driven by the new system delivered a step change in CAC efficiency while elevating the brand's editorial presence.",
    ],
  },
  {
    slug: "service-studio-system",
    title: "Service Studio Identity",
    category: "Home & Lifestyle",
    year: "2024",
    cover: "/download (5).png",
    tags: ["Identity", "Web", "Editorial"],
    brief:
      "A category-bending service studio came to us to translate their craft into a system that could scale.",
    body: [
      "We rebuilt the brand around a single, confident voice — designed for the founders to extend without us. Identity, web, and a launch editorial covering the studio's first 12 commissions.",
    ],
  },
  {
    slug: "boutique-jewelry-ecommerce",
    title: "Boutique Jewelry Commerce",
    category: "Jewelry",
    year: "2024",
    cover: "/download (7).png",
    tags: ["Ecommerce", "UGC", "CRM"],
    brief:
      "Custom Shopify build, retention program and a UGC engine for a heritage jewelry house going direct.",
    body: [
      "We replatformed the storefront, designed a CRM program tuned for high-AOV repeat behaviour, and stood up a creator program that fed the paid funnel with high-trust UGC.",
    ],
  },
  {
    slug: "winter-collection-film",
    title: "Winter Collection Film",
    category: "Motion & Animation",
    year: "2024",
    cover: "/download (9).png",
    tags: ["Direction", "Production", "Score"],
    brief:
      "A 90-second seasonal film carrying the launch of a winter collection across paid, organic and retail.",
    body: [
      "Concept-to-camera in seven weeks. Original score in-house. Cut down for paid social, vertical and retail screens — one film, every channel.",
    ],
  },
  {
    slug: "modern-dealership-rebrand",
    title: "Modern Dealership Rebrand",
    category: "Automotive",
    year: "2024",
    cover: "/download (11).png",
    tags: ["Identity", "Lead Generation", "OOH"],
    brief:
      "Repositioning a regional dealership group around a modern retail experience — and the creative system to back it up.",
    body: [
      "New name, identity system, web and a localised paid + OOH program built to drive showroom traffic across five locations.",
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getWorkSlugs(): string[] {
  return works.map((w) => w.slug);
}
