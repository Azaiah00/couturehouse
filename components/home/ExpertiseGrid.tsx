"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";

const categories = [
  "Beauty & Personal Care",
  "Fashion & Apparel",
  "Home & Lifestyle",
  "Wellness",
  "Food & Beverage",
  "Hospitality",
  "Consumer Tech",
  "Sport & Performance",
  "Spirits & Wine",
  "Entertainment",
  "Creators & Talent",
  "Direct-to-Consumer",
];

export function ExpertiseGrid() {
  return (
    <section className="bg-charcoal-light py-32 md:py-48 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-28 max-w-4xl">
          <span className="eyebrow mb-6 block">Expertise Across Categories</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            Broad in reach.<br />Precise in approach.
          </TextReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-line">
          {categories.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="border-b border-r border-line py-10 md:py-14 px-6 md:px-8 group hover:bg-surface transition-colors"
            >
              <span className="text-white/30 font-sans text-xs tracking-[0.2em] block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white text-base md:text-xl uppercase tracking-tight leading-tight">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
