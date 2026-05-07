"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

const partners = [
  "AURA",
  "MAISON ROUGE",
  "STUDIO NORTH",
  "PALOMA",
  "OBJECT&CO",
  "ATELIER 12",
  "LUMEN",
  "HARPER+CO",
  "VESPERA",
  "TIDELINE",
  "MONOGRAM",
  "FIELDNOTES",
];

export function BrandPartners() {
  return (
    <section className="bg-charcoal py-32 md:py-48 border-y border-line overflow-hidden">
      <div className="site-inset max-w-[1600px] mx-auto mb-16 md:mb-24">
        <span className="eyebrow mb-6 block">Brand Partners</span>
        <TextReveal
          as="h2"
          className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] max-w-4xl"
        >
          Trusted by founders<br />building category leaders.
        </TextReveal>
      </div>

      <div className="flex flex-col gap-10">
        <InfiniteMarquee speed={0.4} direction={1}>
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {partners.slice(0, 6).map((p, i) => (
              <span
                key={`a-${i}`}
                className="text-white/35 hover:text-white transition-colors text-3xl md:text-5xl uppercase tracking-tight font-medium whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </InfiniteMarquee>
        <InfiniteMarquee speed={0.4} direction={-1}>
          <div className="flex items-center gap-16 md:gap-24 px-8">
            {partners.slice(6).map((p, i) => (
              <span
                key={`b-${i}`}
                className="text-white/35 hover:text-white transition-colors text-3xl md:text-5xl uppercase tracking-tight font-medium whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
