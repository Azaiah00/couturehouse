"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Play } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export function MusicTeaser() {
  const containerRef = useRef<HTMLElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const colors = ['bg-rose-gold', 'bg-crimson', 'bg-dusty-rose'];

  useEffect(() => {
    if (!containerRef.current) return;

    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      gsap.to(bar, {
        height: () => 20 + Math.random() * 80 + "%",
        duration: 0.1 + Math.random() * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 0.5,
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cream-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center gap-1 md:gap-2">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            ref={(el) => { barsRef.current[i] = el; }}
            className={`w-2 md:w-3 lg:w-4 ${colors[i % 3]} rounded-full`}
            style={{ height: "20%" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <TextReveal as="h2" className="text-3xl md:text-5xl font-serif text-white uppercase mb-6 tracking-widest">
          Sonic Architecture
        </TextReveal>
        <p className="text-neutral-400 max-w-xl font-sans mb-10 text-lg">
          Custom ad music, sound design, and an exclusive audio library built to elevate your campaigns.
        </p>
        <Link 
          href="/music"
          className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md px-8 py-4 rounded-full transition-all duration-300"
        >
          <div className="w-10 h-10 bg-crimson text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-4 h-4 ml-1" />
          </div>
          <span className="font-sans uppercase tracking-widest text-sm text-white">Explore Our Sound</span>
        </Link>
      </div>
    </section>
  );
}
