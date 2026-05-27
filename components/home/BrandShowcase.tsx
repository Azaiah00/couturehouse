"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Editorial-style brand spotlights — each one is its own near-fullbleed moment.
// Order: own brands first, then client work.
const showcases = [
  {
    slug: "magic-coils",
    name: "Magic Coils",
    tagline:
      "A luxury professional haircare line crowned in burgundy and gold. Built and operated end-to-end from one connected studio.",
    category: "Beauty & Personal Care",
    image: "/work/magic-coils/02-strand.webp",
  },
  {
    slug: "sacrificial-conversations",
    name: "Sacrificial Conversations",
    tagline:
      "A faith-rooted interview series with its own gilded visual world &mdash; running across radio, YouTube and short-form social.",
    category: "Media & Entertainment",
    image: "/work/sacrificial-conversations/02-tenisha.webp",
  },
  {
    slug: "beverlys-of-nashville",
    name: "Beverlys of Nashville",
    tagline:
      "A creative system and ongoing reel pipeline for a stylist-led Nashville studio &mdash; every chair transformation cut to compound.",
    category: "Client &mdash; Beauty &amp; Talent",
    image: "/work/beverlys-of-nashville/cover.webp",
  },
];

export function BrandShowcase() {
  const reduced = useReducedMotion();
  return (
    <section className="bg-charcoal border-t border-line">
      {showcases.map((s, i) => (
        <Link
          key={s.slug}
          href={`/work/${s.slug}`}
          className="block relative h-[60vh] md:h-[78vh] overflow-hidden group"
        >
          <Image
            src={s.image}
            alt={s.name}
            fill
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-20 site-inset max-w-[1600px] mx-auto"
          >
            <span
              className="eyebrow mb-4"
              dangerouslySetInnerHTML={{
                __html: `Property ${String(i + 1).padStart(2, "0")} &middot; ${s.category}`,
              }}
            />
            <h2 className="display-heading text-white text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] mb-6 max-w-[16ch]">
              {s.name}
            </h2>
            <p
              className="text-white/80 max-w-xl font-sans text-base md:text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: s.tagline }}
            />
            <span className="inline-flex items-center gap-3 text-white text-xs uppercase tracking-[0.22em] font-sans w-fit group-hover:translate-x-1 transition-transform">
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.div>
        </Link>
      ))}
    </section>
  );
}
