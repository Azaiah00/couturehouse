"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

// Magic Coils brand still-life set — burgundy stage, gold ritual objects.
// All optimized via sharp to ~30-80KB each, served as WebP.
const frames = [
  { src: "/gallery/mc-bowl.webp", alt: "Ceramic mixing bowl with hair treatment and gold brush" },
  { src: "/gallery/mc-scissors.webp", alt: "Gold shears against a strand of hair" },
  { src: "/gallery/mc-crown-head.webp", alt: "Mannequin head wearing a delicate crown" },
  { src: "/gallery/mc-lotus.webp", alt: "Pink lotus flower framed by gilded leaves" },
  { src: "/gallery/mc-book-crown.webp", alt: "Open gilded book under a small crown" },
  { src: "/gallery/mc-key.webp", alt: "Ornate gold key on burgundy velvet" },
];

export function PhotoGallery() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const itemWidth = el.querySelector<HTMLDivElement>("[data-frame]")?.offsetWidth ?? el.offsetWidth * 0.6;
    el.scrollBy({ left: dir * (itemWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="bg-charcoal py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="max-w-[1600px] mx-auto site-inset mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">Selected Frames</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            Made with care.<br />Built to convert.
          </TextReveal>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scroller}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pl-[8vw] pr-[8vw] md:pl-[16vw] md:pr-[16vw] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {frames.map((f, i) => (
            <div
              key={f.src}
              data-frame
              className="relative shrink-0 w-[82vw] md:w-[60vw] lg:w-[48vw] xl:w-[40vw] aspect-square snap-center bg-surface overflow-hidden"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 82vw, (max-width: 1024px) 60vw, 48vw"
                priority={i < 2}
              />
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-3 mt-8">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
