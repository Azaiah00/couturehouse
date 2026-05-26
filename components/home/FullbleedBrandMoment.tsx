"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// One full-viewport, parallax-driven "story moment" — meant to break the rhythm
// of card-and-grid sections with a single, immersive image.
export function FullbleedBrandMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [1.08, 1, 1.08]);
  const titleY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative h-[100vh] md:h-[110vh] overflow-hidden bg-black border-t border-line"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-x-0 -inset-y-[12%] z-0 will-change-transform"
      >
        <Image
          src="/work/magic-coils/01-throne.webp"
          alt="Magic Coils — Crowned in Magic"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
      <div className="absolute inset-0 bg-black/15 z-10" />

      <motion.div
        style={{ y: titleY }}
        className="relative z-20 h-full flex flex-col justify-center site-inset max-w-[1600px] mx-auto"
      >
        <span className="eyebrow mb-6">A brand we built</span>
        <h2 className="display-heading text-white text-[clamp(3.5rem,14vw,14rem)] leading-[0.85] max-w-[10ch]">
          Crowned<br />in Magic.
        </h2>
        <p className="text-white/80 max-w-md mt-8 font-sans text-base md:text-lg leading-relaxed">
          Every campaign in the Magic Coils system is built on one confident territory &mdash;
          deep burgundy, ritual gold, and a brand wordmark worn like a crest.
        </p>
      </motion.div>
    </section>
  );
}
