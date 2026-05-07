"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { works } from "@/lib/work";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(works.map((w) => w.category)))],
    [],
  );

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-4xl mb-12 md:mb-20">
          <span className="eyebrow mb-6 block">Selected Work</span>
          <TextReveal
            as="h1"
            className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]"
          >
            Work that<br />moves brands.
          </TextReveal>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-16 md:mb-24 border-t border-line pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-sans transition-all duration-200 border",
                active === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/60 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filtered.map((work) => (
              <motion.div
                key={work.slug}
                layout
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/work/${work.slug}`}
                  className="group block relative overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Image
                      src={work.cover}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-white/0 group-hover:text-white transition-all" />
                  </div>
                  <div className="pt-5 pb-2">
                    <p className="text-white/55 font-sans text-xs uppercase tracking-[0.22em] mb-2">
                      {work.category} &middot; {work.year}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl uppercase tracking-tight leading-tight">
                      {work.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
