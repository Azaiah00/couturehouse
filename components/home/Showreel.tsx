"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Showreel() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;
    gsap.fromTo(
      videoRef.current,
      { scale: 0.9, opacity: 0.7 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="bg-charcoal py-20 md:py-32 site-inset">
      <div ref={videoRef} className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-black max-w-[1800px] mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video_20251226_234909_771.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </section>
  );
}
