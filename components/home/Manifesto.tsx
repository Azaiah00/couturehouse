"use client";

import { TextReveal } from "@/components/animations/TextReveal";

export function Manifesto() {
  return (
    <section className="bg-charcoal py-32 md:py-48 site-inset">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-7">
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,7vw,7rem)] leading-[0.95]"
          >
            We build the systems behind the brands you love.
          </TextReveal>
        </div>

        <div className="md:col-span-5 md:pt-6 flex flex-col gap-6 text-white/70 font-sans text-base md:text-lg leading-relaxed">
          <p>
            Couture House is a creative platform engineered for ambitious founders
            and category-defining brands. We bring strategy, design, production
            and performance into a single execution layer.
          </p>
          <p>
            From identity to launch to scale, our work is brand-first and
            built to compound — every campaign, every channel, every quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
