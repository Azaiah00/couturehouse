"use client";

import { useEffect, useRef } from "react";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { TextReveal } from "@/components/animations/TextReveal";

// Real brand reels — produced in-house. Each is a vertical (9:16) muted loop.
const reels = [
  "/reels/r01.mp4",
  "/reels/r02.mp4",
  "/reels/r03.mp4",
  "/reels/r04.mp4",
  "/reels/r05.mp4",
];

function Reel({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  // Pause when out of viewport so we don't burn bandwidth across the marquee duplicates
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative shrink-0 mx-3 md:mx-4 aspect-[9/16] w-[58vw] sm:w-[36vw] md:w-[24vw] lg:w-[18vw] xl:w-[15vw] bg-surface overflow-hidden">
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-3 left-3 text-white/80 text-[10px] uppercase tracking-[0.22em] font-sans">
        {label}
      </span>
    </div>
  );
}

export function HomeReels() {
  return (
    <section className="bg-charcoal py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="max-w-[1600px] mx-auto site-inset mb-16 md:mb-24">
        <span className="eyebrow mb-6 block">In Motion</span>
        <TextReveal
          as="h2"
          className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
        >
          Brand reels<br />on repeat.
        </TextReveal>
        <p className="text-white/55 max-w-xl mt-8 font-sans text-base md:text-lg leading-relaxed">
          A snapshot of the reels we ship across our brand portfolio &mdash; produced,
          edited, and scored in-house.
        </p>
      </div>

      <div className="relative">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10" />

        <InfiniteMarquee speed={0.18} direction={1}>
          <div className="flex items-stretch">
            {reels.map((src, i) => (
              <Reel key={src} src={src} label={`Reel ${String(i + 1).padStart(2, "0")}`} />
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
