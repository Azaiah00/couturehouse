"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const works = [
  { id: 1, title: "Luxury Apparel", category: "Creative System", img: "/download (1).png" },
  { id: 2, title: "Product Growth", category: "Local Promos", img: "/download (2).png" },
  { id: 3, title: "Candle Studio", category: "Branding", img: "/download (3).png" },
  { id: 4, title: "Jewelry Boutique", category: "Ads + Email", img: "/download (4).png" },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex justify-between items-end">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-serif text-white uppercase">
            Featured Work
          </TextReveal>
          <Link href="/work" className="hidden md:block text-crimson hover:text-white transition-colors uppercase tracking-widest text-sm font-sans">
            View Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {works.map((work, i) => (
            <Link 
              key={work.id} 
              href="/work"
              ref={(el) => { itemsRef.current[i] = el; }}
              className={`group block relative overflow-hidden rounded-xl ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-cream-dark">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-dusty-rose font-sans text-xs uppercase tracking-widest mb-2">{work.category}</p>
                <h3 className="text-2xl md:text-4xl font-serif text-white group-hover:text-crimson transition-colors">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="text-crimson hover:text-white transition-colors uppercase tracking-widest text-sm font-sans">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
