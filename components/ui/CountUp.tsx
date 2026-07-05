"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  /** Text shown when `to` is 0 (e.g. a stylised "$0"). */
  zeroLabel?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  zeroLabel,
  duration = 1100,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(
    to === 0 ? `${prefix}${zeroLabel ?? "0"}${suffix}` : `${prefix}0${suffix}`
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (to === 0) {
      setDisplay(`${prefix}${zeroLabel ?? "0"}${suffix}`);
      return;
    }
    if (prefersReduced) {
      setDisplay(`${prefix}${to}${suffix}`);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const n = Math.round(to * (1 - Math.pow(1 - p, 3)));
            setDisplay(`${prefix}${n}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, prefix, suffix, zeroLabel, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
