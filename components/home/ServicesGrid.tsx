"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  {
    n: "01",
    title: "Creative & Design",
    desc: "Brand identity, ad creative, design systems, packaging.",
    sub: ["Identity Systems", "Ad Creative", "Packaging", "Editorial"],
  },
  {
    n: "02",
    title: "Production",
    desc: "Video, motion, photography, AI-assisted staging.",
    sub: ["Video Production", "Motion Design", "Photography", "AI Production"],
  },
  {
    n: "03",
    title: "Digital",
    desc: "Web, ecommerce, email, landing pages, copy.",
    sub: ["Web Design", "Ecommerce", "Email", "Copywriting"],
  },
  {
    n: "04",
    title: "Performance",
    desc: "Paid media, retention, analytics, growth strategy.",
    sub: ["Paid Media", "CRM", "Analytics", "Growth"],
  },
  {
    n: "05",
    title: "Strategy",
    desc: "Brand, marketing, and category strategy from launch to scale.",
    sub: ["Brand Strategy", "Go-To-Market", "Positioning", "Research"],
  },
  {
    n: "06",
    title: "Sound & Score",
    desc: "Original ad soundtracks and scoring — license-free.",
    sub: ["Soundtracks", "Sound Design", "Scoring", "Library"],
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-charcoal py-32 md:py-48 site-inset border-t border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">360° Connected Studio</span>
            <TextReveal
              as="h2"
              className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
            >
              One studio.<br />Every channel.
            </TextReveal>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-white/70 hover:text-white text-xs uppercase tracking-[0.22em] font-sans transition-colors"
          >
            All Services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="bg-charcoal p-8 md:p-10 group relative overflow-hidden hover:bg-surface transition-colors duration-500 min-h-[340px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <span className="text-white/40 font-sans text-sm tracking-[0.2em]">{s.n}</span>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>

              <div>
                <h3 className="text-white text-2xl md:text-3xl uppercase tracking-tight mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {s.sub.map((t) => (
                    <span
                      key={t}
                      className="text-white/35 group-hover:text-white/70 transition-colors text-xs uppercase tracking-[0.18em] font-sans"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
