"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

// Swap these for real campaign / product / lifestyle photography.
// Aim for landscape 16:10 or 3:2 — high resolution (>= 2400px wide).
const frames = [
  { src: "/download (1).png", alt: "Campaign frame 01" },
  { src: "/download (3).png", alt: "Campaign frame 02" },
  { src: "/download (5).png", alt: "Campaign frame 03" },
  { src: "/download (7).png", alt: "Campaign frame 04" },
  { src: "/download (9).png", alt: "Campaign frame 05" },
  { src: "/download (11).png", alt: "Campaign frame 06" },
  { src: "/download (13).png", alt: "Campaign frame 07" },
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
              key={i}
              data-frame
              className="relative shrink-0 w-[82vw] md:w-[68vw] lg:w-[60vw] xl:w-[50vw] aspect-[16/10] snap-center bg-surface overflow-hidden"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 82vw, (max-width: 1024px) 68vw, 60vw"
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
