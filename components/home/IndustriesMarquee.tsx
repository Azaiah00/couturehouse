"use client";

import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

const wordsA = [
  "Brand", "Strategy", "Design", "Production", "Performance", "Sound",
];
const wordsB = [
  "Creative", "Commerce", "Content", "Identity", "Growth", "Story",
];

export function IndustriesMarquee() {
  return (
    <section className="bg-charcoal py-24 md:py-32 border-y border-line overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-8">
        <InfiniteMarquee speed={0.4} direction={1}>
          <div className="flex gap-12 md:gap-24 items-center px-6">
            {wordsA.map((w, i) => (
              <span
                key={`a-${i}`}
                className="text-5xl md:text-7xl lg:text-9xl uppercase tracking-tight font-medium whitespace-nowrap text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                {w}
                <span className="ml-12 md:ml-24 text-white/30" style={{ WebkitTextStroke: "0px" }}>—</span>
              </span>
            ))}
          </div>
        </InfiniteMarquee>

        <InfiniteMarquee speed={0.5} direction={-1}>
          <div className="flex gap-12 md:gap-24 items-center px-6">
            {wordsB.map((w, i) => (
              <span
                key={`b-${i}`}
                className="text-5xl md:text-7xl lg:text-9xl uppercase tracking-tight font-medium whitespace-nowrap text-white/85"
              >
                {w}
                <span className="ml-12 md:ml-24 text-white/25">—</span>
              </span>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
