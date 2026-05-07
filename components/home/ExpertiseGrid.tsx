"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

// Swap these images for one branded photo per category.
// Portrait 3:4 works best. ~1200px tall is plenty.
const categories = [
  { label: "Beauty & Personal Care", img: "/download (4).png" },
  { label: "Fashion & Apparel", img: "/download (6).png" },
  { label: "Home & Lifestyle", img: "/download (8).png" },
  { label: "Wellness", img: "/download (10).png" },
  { label: "Food & Beverage", img: "/download (12).png" },
  { label: "Hospitality", img: "/download (14).png" },
  { label: "Consumer Tech", img: "/download (16).png" },
  { label: "Sport & Performance", img: "/download (18).png" },
  { label: "Spirits & Wine", img: "/download (20).png" },
  { label: "Entertainment", img: "/download (22).png" },
  { label: "Creators & Talent", img: "/download (24).png" },
  { label: "Direct-to-Consumer", img: "/download (26).png" },
];

export function ExpertiseGrid() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]")?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (card + 16) * 2, behavior: "smooth" });
  };

  return (
    <section className="bg-charcoal-light py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="max-w-[1600px] mx-auto site-inset mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">Expertise Across Categories</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            Broad in reach.<br />Precise in approach.
          </TextReveal>
          <p className="text-white/65 max-w-xl mt-8 font-sans text-base md:text-lg leading-relaxed">
            We build for category leaders — calibrating creative, channel, and cadence
            to the rhythm of each market we work in.
          </p>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 md:gap-5 overflow-x-auto snap-x site-inset pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((c, i) => (
          <div
            key={c.label}
            data-card
            className="shrink-0 w-[260px] md:w-[300px] lg:w-[340px] snap-start group"
          >
            <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-5">
              <Image
                src={c.img}
                alt={c.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
            <p className="text-white text-sm md:text-base uppercase tracking-[0.18em]">
              {c.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
