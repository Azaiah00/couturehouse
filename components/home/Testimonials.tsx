"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

// Swap with real client quotes. Keep them short — under 40 words is best.
const quotes = [
  {
    quote:
      "Couture House operates like a single team — strategy, creative and media in one rhythm. We&rsquo;ve never moved this fast on brand work that didn&rsquo;t feel rushed.",
    author: "Founder",
    company: "Skincare brand",
  },
  {
    quote:
      "They built our identity, our launch, and the system that scaled it. The work compounds quarter over quarter.",
    author: "CEO",
    company: "Apparel label",
  },
  {
    quote:
      "We&rsquo;ve worked with three agencies in five years. Couture House is the first that treats brand and performance like the same conversation.",
    author: "Head of Growth",
    company: "DTC consumer brand",
  },
  {
    quote:
      "The film was original, the score was original, and the campaign moved the number we cared about. That&rsquo;s rare.",
    author: "VP Marketing",
    company: "Hospitality group",
  },
];

export function Testimonials() {
  const reduced = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-quote]")?.offsetWidth ?? el.offsetWidth;
    el.scrollBy({ left: dir * (card + 24), behavior: "smooth" });
  };

  return (
    <section className="bg-charcoal-light py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="max-w-[1600px] mx-auto site-inset mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">Said about us</span>
          <TextReveal
            as="h2"
            className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
          >
            What partners<br />tell us.
          </TextReveal>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous quote"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next quote"
            className="w-14 h-14 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory site-inset pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {quotes.map((q, i) => (
          <motion.figure
            key={i}
            data-quote
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="shrink-0 w-[88vw] md:w-[60vw] lg:w-[44vw] xl:w-[36vw] snap-start border border-line p-8 md:p-12 flex flex-col justify-between min-h-[320px] md:min-h-[400px]"
          >
            <blockquote
              className="text-white text-xl md:text-3xl uppercase tracking-tight leading-[1.15] font-medium"
              dangerouslySetInnerHTML={{ __html: `&ldquo;${q.quote}&rdquo;` }}
            />
            <figcaption className="mt-8 pt-8 border-t border-line">
              <p className="text-white text-sm uppercase tracking-[0.18em]">{q.author}</p>
              <p className="text-white/55 font-sans text-sm mt-1">{q.company}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
