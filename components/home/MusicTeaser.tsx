"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";

export function MusicTeaser() {
  const reduced = useReducedMotion();
  const bars = Array.from({ length: 60 }, (_, i) => i);

  return (
    <section className="bg-charcoal-light py-32 md:py-48 site-inset border-t border-line relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] flex items-center justify-center gap-1 md:gap-2 pointer-events-none"
        aria-hidden="true"
      >
        {bars.map((i) => (
          <motion.div
            key={i}
            className="w-2 md:w-3 bg-white"
            initial={{ height: "20%" }}
            animate={
              reduced
                ? { height: "30%" }
                : {
                    height: ["20%", `${30 + ((i * 7) % 60)}%`, "20%"],
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.8 + ((i * 13) % 100) / 100,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: ((i * 11) % 100) / 200,
                  }
            }
          />
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7">
          <span className="eyebrow mb-6 block">Sound & Score</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            Original sound.<br />License-free.
          </TextReveal>
          <p className="text-white/60 max-w-xl font-sans mt-8 text-base md:text-lg leading-relaxed">
            A growing library of original soundtracks and scoring built for ads, content
            and brand films. Use them across your campaigns &mdash; without licensing friction.
          </p>
        </div>

        <div className="md:col-span-5 flex md:justify-end">
          <Link
            href="/music"
            className="group inline-flex items-center gap-4 border border-white/20 hover:border-white/60 px-8 py-5 transition-all"
          >
            <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            </span>
            <span className="font-sans uppercase tracking-[0.22em] text-xs text-white">
              Browse Library
            </span>
            <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
