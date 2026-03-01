"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export function Showreel() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { scale: 0.8, opacity: 0, borderRadius: "2rem" },
      {
        scale: 1,
        opacity: 1,
        borderRadius: "0rem",
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
    <section ref={containerRef} className="relative w-full py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-6 mb-12">
        <TextReveal as="h2" className="text-3xl md:text-5xl lg:text-7xl font-serif text-white">
          EVERY BRAND HAS A STORY. <br/>
          <span className="text-dusty-rose">WE MAKE IT UNFORGETTABLE.</span>
        </TextReveal>
      </div>
      
      <div ref={videoRef} className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-black max-w-[1920px] mx-auto">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] opacity-60"
        >
          <source src="/Video_20251226_234909_771.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      </div>
    </section>
  );
}
