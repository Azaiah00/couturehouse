"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
}

export function InfiniteMarquee({ children, speed = 1, direction = 1, className = "" }: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    
    let tween: gsap.core.Tween;
    if (direction === 1) {
      tween = gsap.fromTo(track, { xPercent: 0 }, { xPercent: -50, ease: "none", duration: 20 / speed, repeat: -1 });
    } else {
      tween = gsap.fromTo(track, { xPercent: -50 }, { xPercent: 0, ease: "none", duration: 20 / speed, repeat: -1 });
    }

    return () => {
      tween.kill();
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className={`overflow-hidden flex whitespace-nowrap ${className}`}>
      <div ref={trackRef} className="flex shrink-0 min-w-max w-max">
        <div className="flex shrink-0 min-w-max px-4">
          {children}
        </div>
        <div className="flex shrink-0 min-w-max px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
