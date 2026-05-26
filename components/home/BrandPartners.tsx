"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

// Real brands operated through Couture House. Add new brands here as they launch.
const brands = [
  "MAGIC COILS",
  "SACRIFICIAL CONVERSATIONS",
  "BNG REMODEL",
  "FREDERICK SALES",
  "COUTURE HOUSE CO.",
];

// Marquees look thin with only 5 names — repeat so the bands feel continuous.
const rowA = [...brands, ...brands];
const rowB = [...brands.slice(2), ...brands, ...brands.slice(0, 2)];

export function BrandPartners() {
  return (
    <section className="bg-charcoal py-32 md:py-48 border-y border-line overflow-hidden">
      <div className="site-inset max-w-[1600px] mx-auto mb-16 md:mb-24">
        <span className="eyebrow mb-6 block">Our Brands</span>
        <TextReveal
          as="h2"
          className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] max-w-4xl"
        >
          Properties we built.<br />Brands we operate.
        </TextReveal>
      </div>

      <div className="flex flex-col gap-10">
        <InfiniteMarquee speed={0.4} direction={1}>
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {rowA.map((b, i) => (
              <span
                key={`a-${i}`}
                className="text-white/35 hover:text-white transition-colors text-3xl md:text-5xl uppercase tracking-tight font-medium whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        </InfiniteMarquee>
        <InfiniteMarquee speed={0.4} direction={-1}>
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {rowB.map((b, i) => (
              <span
                key={`b-${i}`}
                className="text-white/35 hover:text-white transition-colors text-3xl md:text-5xl uppercase tracking-tight font-medium whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
