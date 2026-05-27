// Single source of truth for work / case studies.
// Consumed by /work, /work/[slug], and the FeaturedWork section on the home page.
//
// To add a project: append a new entry. Slug must be URL-safe.
// Cover image is 4:5 portrait, ≥1600px tall. Gallery items are landscape or portrait.

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
  videos?: string[];
};

export const works: Work[] = [
  {
    slug: "magic-coils",
    title: "Magic Coils",
    category: "Beauty & Personal Care",
    year: "2026",
    cover: "/work/magic-coils/cover.webp",
    tags: [
      "Brand Identity",
      "Packaging Direction",
      "Editorial Photography",
      "Hair Show Production",
      "Ecommerce",
      "Performance Creative",
      "Social",
      "Pinterest System",
    ],
    brief:
      "A luxury professional haircare line built around a single conviction: every strand deserves to be treated like royalty.",
    body: [
      "Magic Coils launched as a category-defining haircare line for women whose hair tells a story. We built the brand world from the inside out — the wordmark, the editorial system, the photography language, the launch packaging — and stood up the digital storefront and performance engine alongside it.",
      "The creative system leans into a single, confident territory: a deep burgundy stage with gold ritual objects and the brand wordmark held like a crest. Every campaign frame is built on that same palette, which lets the brand stay editorial in feed while staying instantly recognisable at any scale — from a TikTok thumbnail to a retail end-cap.",
      "The gallery below is a slice of the brand world we ship: AI-staged marketing concepts, the Magic Press and Two Strand Twist hair show photo sets, end-card systems for reels, Pinterest pin templates, and the brand wordmark in its gold-framed crest form. Couture House continues to operate Magic Coils end-to-end — creative, growth, and lifecycle — out of one connected team.",
    ],
    gallery: [
      // Brand world banners
      "/work/magic-coils/01-throne.webp",
      "/work/magic-coils/02-strand.webp",
      "/work/magic-coils/03-products.webp",
      "/work/magic-coils/04-collection.webp",
      "/work/magic-coils/05-light-of-nature.webp",
      // AI marketing concepts
      "/work/magic-coils/extra/01.webp",
      "/work/magic-coils/extra/02.webp",
      "/work/magic-coils/extra/03.webp",
      "/work/magic-coils/extra/04.webp",
      "/work/magic-coils/extra/05.webp",
      "/work/magic-coils/extra/06.webp",
      "/work/magic-coils/extra/07.webp",
      "/work/magic-coils/extra/08.webp",
      "/work/magic-coils/extra/09.webp",
      // Magic Press hair show
      "/work/magic-coils/hair-show/mp-01.webp",
      "/work/magic-coils/hair-show/mp-02.webp",
      "/work/magic-coils/hair-show/mp-03.webp",
      "/work/magic-coils/hair-show/mp-04.webp",
      "/work/magic-coils/hair-show/mp-05.webp",
      "/work/magic-coils/hair-show/mp-06.webp",
      "/work/magic-coils/hair-show/mp-07.webp",
      "/work/magic-coils/hair-show/mp-08.webp",
      "/work/magic-coils/hair-show/mp-09.webp",
      "/work/magic-coils/hair-show/mp-10.webp",
      // Two Strand Twist hair show
      "/work/magic-coils/hair-show/tst-01.webp",
      "/work/magic-coils/hair-show/tst-02.webp",
      "/work/magic-coils/hair-show/tst-03.webp",
      "/work/magic-coils/hair-show/tst-04.webp",
      "/work/magic-coils/hair-show/tst-05.webp",
      "/work/magic-coils/hair-show/tst-06.webp",
      "/work/magic-coils/hair-show/tst-07.webp",
      "/work/magic-coils/hair-show/tst-08.webp",
      // Pinterest pin system
      "/work/magic-coils/pins/01.webp",
      "/work/magic-coils/pins/02.webp",
      "/work/magic-coils/pins/03.webp",
      "/work/magic-coils/pins/04.webp",
      "/work/magic-coils/pins/05.webp",
      "/work/magic-coils/pins/06.webp",
      // Branded system pieces
      "/work/magic-coils/brand/coronation-portrait.webp",
      "/work/magic-coils/brand/coronation-square.webp",
      "/work/magic-coils/brand/endcard-v1.webp",
      "/work/magic-coils/brand/endcard-v2.webp",
      "/work/magic-coils/brand/fb-cover-a.webp",
      "/work/magic-coils/brand/fb-cover-b.webp",
      "/work/magic-coils/brand/fb-cover-c.webp",
      "/work/magic-coils/brand/logo-ornate.webp",
    ],
    videos: [
      "/work/magic-coils/reel.mp4",
      "/work/magic-coils/magicpress.mp4",
      "/work/magic-coils/studio-still-01.mp4",
      "/work/magic-coils/studio-still-02.mp4",
      "/work/magic-coils/studio-still-03.mp4",
      "/reels/ms-01.mp4",
      "/reels/ms-02.mp4",
      "/reels/ms-03.mp4",
      "/reels/ms-04.mp4",
      "/reels/ms-05.mp4",
    ],
  },
  {
    slug: "sacrificial-conversations",
    title: "Sacrificial Conversations",
    category: "Media & Entertainment",
    year: "2026",
    cover: "/work/sacrificial-conversations/cover.webp",
    tags: [
      "Brand System",
      "Show Identity",
      "Episode Art",
      "Talent Direction",
      "Distribution",
      "Merch & Shop",
    ],
    brief:
      "A faith-rooted conversation series with its own visual world — built to travel across radio, YouTube, and social as one cohesive show.",
    body: [
      "Sacrificial Conversations is a long-form interview series exploring sisterhood, survival, and the stories behind faith leaders, gospel artists, and founders. We built the show identity, the per-episode poster system, and the multi-channel distribution play so every episode lands as one piece — on TabNashville Gospel Radio, on YouTube, and across short-form social.",
      "Each guest gets a hero portrait set inside the show's gilded, candle-lit visual language. The system is loose enough to reflect each subject's character and tight enough that the show reads consistently from one episode to the next.",
      "Powered by an All-Women Edition rotation, the show has become a destination format for stories that don't get told often enough — and a template we now use for any conversation-driven IP we launch. The brand also extends into merch and a content shop, with its own logo lockup and link-tree cover.",
    ],
    gallery: [
      // Episode posters
      "/work/sacrificial-conversations/01-monica.webp",
      "/work/sacrificial-conversations/02-tenisha.webp",
      "/work/sacrificial-conversations/03-thea.webp",
      "/work/sacrificial-conversations/04-blessing-pressing.webp",
      "/work/sacrificial-conversations/05-joy-boyz.webp",
      // Shop & brand assets
      "/work/sacrificial-conversations/brand/shop-cover.webp",
      "/work/sacrificial-conversations/brand/og-linktree.webp",
      "/work/sacrificial-conversations/brand/sc-logo.webp",
    ],
  },
  {
    slug: "beverlys-of-nashville",
    title: "Beverlys of Nashville",
    category: "Beauty & Talent",
    year: "2026",
    cover: "/work/beverlys-of-nashville/cover.webp",
    tags: [
      "Creative Direction",
      "Reel Editing",
      "Talent Branding",
      "Content System",
      "Before / After System",
    ],
    brief:
      "A creative system and ongoing reel pipeline for Beverlys of Nashville — turning every chair transformation into a recognisable on-camera brand.",
    body: [
      "Beverlys of Nashville is a stylist-led studio whose transformations could carry their own brand. We built that brand around it — visual identity, a tight reel system, a before/after thumbnail format, and a content cadence designed to compound week over week.",
      "Each transformation gets the same on-camera structure: anonymous before, mid-process moment, reveal. The format is what makes the work feel like a show, not a salon. We run the editing pipeline so the team can keep their hands in hair.",
      "It's our client model in miniature — operate the creative engine on the founder's behalf, leave the craft to the founder, share in what compounds. The gallery shows the before/after thumbnail system in use; the reels below run the full transformations end-to-end.",
    ],
    gallery: [
      "/work/beverlys-of-nashville/transformations/g1.webp",
      "/work/beverlys-of-nashville/transformations/g2.webp",
      "/work/beverlys-of-nashville/transformations/g3.webp",
      "/work/beverlys-of-nashville/transformations/g4.webp",
      "/work/beverlys-of-nashville/transformations/g6.webp",
      "/work/beverlys-of-nashville/transformations/g7.webp",
    ],
    videos: [
      "/work/beverlys-of-nashville/reel.mp4",
      "/work/beverlys-of-nashville/01-crimson-locs.mp4",
      "/work/beverlys-of-nashville/02-silkpress.mp4",
      "/work/beverlys-of-nashville/03-crimson-review.mp4",
    ],
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getWorkSlugs(): string[] {
  return works.map((w) => w.slug);
}
