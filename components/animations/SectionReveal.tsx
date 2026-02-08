"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const x = direction === "left" ? distance : direction === "right" ? -distance : 0;
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [direction, distance, delay]);

  return (
    <div ref={sectionRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
