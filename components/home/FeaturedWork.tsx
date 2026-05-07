"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { works } from "@/lib/work";

export function FeaturedWork() {
  const reduced = useReducedMotion();
  const featured = works.slice(0, 4);

  return (
    <section className="bg-charcoal py-32 md:py-48 site-inset border-t border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">Selected Work</span>
            <TextReveal
              as="h2"
              className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
            >
              Work that<br />moves brands.
            </TextReveal>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-white/70 hover:text-white text-xs uppercase tracking-[0.22em] font-sans transition-colors"
          >
            View Portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {featured.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={i % 2 !== 0 ? "md:mt-24" : ""}
            >
              <Link href={`/work/${work.slug}`} className="group block relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={work.cover}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-white/55 font-sans text-xs uppercase tracking-[0.22em] mb-3">
                    {work.category}
                  </p>
                  <h3 className="text-white text-3xl md:text-5xl uppercase tracking-tight leading-tight">
                    {work.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
