"use client";

import Image from "next/image";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";
import { TextReveal } from "@/components/animations/TextReveal";

// Magic Coils brand still-life set — burgundy stage, gold ritual objects.
// Each image is ~30-80KB WebP.
const frames = [
  { src: "/gallery/mc-bowl.webp", alt: "Ceramic mixing bowl with hair treatment and gold brush" },
  { src: "/gallery/mc-scissors.webp", alt: "Gold shears against a strand of hair" },
  { src: "/gallery/mc-crown-head.webp", alt: "Mannequin head wearing a delicate crown" },
  { src: "/gallery/mc-lotus.webp", alt: "Pink lotus flower framed by gilded leaves" },
  { src: "/gallery/mc-book-crown.webp", alt: "Open gilded book under a small crown" },
  { src: "/gallery/mc-key.webp", alt: "Ornate gold key on burgundy velvet" },
];

function Frame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative shrink-0 mx-3 md:mx-4 aspect-square w-[70vw] sm:w-[50vw] md:w-[36vw] lg:w-[28vw] xl:w-[24vw] bg-surface overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 36vw, 24vw"
        priority={priority}
      />
    </div>
  );
}

export function PhotoGallery() {
  return (
    <section className="bg-charcoal py-32 md:py-48 border-t border-line overflow-hidden">
      <div className="max-w-[1600px] mx-auto site-inset mb-16 md:mb-24">
        <span className="eyebrow mb-6 block">Selected Frames</span>
        <TextReveal
          as="h2"
          className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
        >
          Made with care.<br />Built to convert.
        </TextReveal>
      </div>

      <div className="relative">
        {/* Soft edge fades — keep the flow elegant, not abrupt */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10" />

        <InfiniteMarquee speed={0.25} direction={1}>
          <div className="flex items-center">
            {frames.map((f, i) => (
              <Frame key={f.src} src={f.src} alt={f.alt} priority={i < 2} />
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
