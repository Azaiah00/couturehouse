"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "120+", label: "Brands launched" },
  { value: "12", label: "Categories" },
  { value: "4", label: "Studio cities" },
  { value: "365", label: "Days under one roof" },
];

const principles = [
  {
    n: "01",
    title: "Brand-first",
    body: "Every decision starts and ends with the brand. Performance compounds when craft is non-negotiable.",
  },
  {
    n: "02",
    title: "One connected team",
    body: "Strategy, creative, production, and media in a single rhythm — no agency tax, no handoffs.",
  },
  {
    n: "03",
    title: "Built for velocity",
    body: "Workflows, automation, and AI-assisted production let us ship in days what others ship in quarters.",
  },
  {
    n: "04",
    title: "Outcomes, not outputs",
    body: "We measure success in revenue, retention, and brand equity — not deliverable counts.",
  },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-5xl mb-24 md:mb-40">
          <span className="eyebrow mb-6 block">About</span>
          <TextReveal
            as="h1"
            className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]"
          >
            A platform<br />for ambitious<br />brands.
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-40">
          <div className="md:col-span-5">
            <span className="eyebrow mb-6 block">Our story</span>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 text-white/75 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Couture House is a creative platform engineered for founders and
              category-defining brands. We were built to do the work that ad agencies,
              creative studios, and growth teams used to do separately &mdash; under one
              roof, on one schedule, accountable to one outcome.
            </p>
            <p>
              We work as an embedded team. Strategy, design, production, and performance
              meet weekly. Decisions get made in hours, not weeks. Brand and revenue
              compound together &mdash; that&rsquo;s the whole thesis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border-y border-line mb-24 md:mb-40">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="bg-charcoal p-8 md:p-12 flex flex-col justify-end min-h-[180px] md:min-h-[240px]"
            >
              <p className="text-white text-4xl md:text-6xl uppercase tracking-tight leading-none mb-2">
                {s.value}
              </p>
              <p className="text-white/55 font-sans text-xs uppercase tracking-[0.2em]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-4">
            <span className="eyebrow mb-6 block">How we work</span>
            <h2 className="display-heading text-white text-[clamp(2rem,4vw,4rem)] leading-[0.95] max-w-md">
              Four principles.
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
            {principles.map((p) => (
              <div
                key={p.n}
                className="bg-charcoal p-8 md:p-10 min-h-[260px] flex flex-col justify-between"
              >
                <span className="text-white/40 font-sans text-sm tracking-[0.22em]">{p.n}</span>
                <div>
                  <h3 className="text-white text-xl md:text-2xl uppercase tracking-tight mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-white/55 font-sans text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-16 md:pt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="display-heading text-white text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] max-w-3xl">
            Build with us.
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.22em] font-sans hover:bg-white/85 transition-colors w-fit"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
