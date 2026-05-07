"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";

const pillars = [
  {
    n: "01",
    title: "Brand-First Thinking",
    body: "Every decision starts and ends with the brand. Performance compounds when craft is non-negotiable.",
  },
  {
    n: "02",
    title: "One Connected Team",
    body: "Strategy, creative, production and media work in a single rhythm — no agency tax, no handoffs.",
  },
  {
    n: "03",
    title: "Built for Velocity",
    body: "Workflows, automation, and AI-assisted production let us ship in days what others ship in quarters.",
  },
  {
    n: "04",
    title: "Outcomes, Not Outputs",
    body: "We measure success in revenue, retention and brand equity — not deliverable counts.",
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-charcoal py-32 md:py-48 site-inset border-t border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-28 max-w-4xl">
          <span className="eyebrow mb-6 block">The Couture Difference</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            Consistency is our<br />unfair advantage.
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className="bg-charcoal p-8 md:p-10 min-h-[320px] flex flex-col justify-between"
            >
              <span className="text-white/40 font-sans text-sm tracking-[0.2em]">{p.n}</span>
              <div>
                <h3 className="text-white text-xl md:text-2xl uppercase tracking-tight mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
