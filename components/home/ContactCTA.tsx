"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactCTA() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(
      containerRef.current,
      { backgroundPosition: "0% 0%" },
      {
        backgroundPosition: "0% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(117,10,26,0.2) 0%, rgba(151,80,112,0.1) 40%, rgba(13,25,39,1) 100%)",
        backgroundSize: "100% 200%",
      }}
    >
      <div className="relative z-10 max-w-3xl">
        <TextReveal as="h2" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white uppercase mb-8 leading-none tracking-widest">
          LET'S BUILD <br/>
          <span className="text-crimson">SOMETHING ICONIC.</span>
        </TextReveal>
        
        <p className="text-neutral-400 font-sans mb-12 text-lg">
          Ready to elevate your brand's digital presence? Start the conversation today.
        </p>
        
        <Link href="/contact">
          <Button variant="luxury" size="lg" className="px-12 py-6 text-lg">
            Start a Project
          </Button>
        </Link>
      </div>
    </section>
  );
}
