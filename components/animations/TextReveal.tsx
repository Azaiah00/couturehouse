"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any>;
  delay?: number;
}

export function TextReveal({ children, className = "", as: Component = "div", delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const timer = setTimeout(() => {
      if (!textRef.current) return;

      const split = new SplitType(textRef.current as HTMLElement, {
        types: "chars,words",
        tagName: "span",
      });

      gsap.fromTo(
        split.chars,
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
          delay,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
          },
        }
      );

      return () => {
        split.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    // @ts-expect-error -- ElementType<any> ref forwarding is safe at runtime
    <Component ref={textRef} className={className}>
      {children}
    </Component>
  );
}
