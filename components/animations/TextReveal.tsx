"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TextRevealTag =
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "p" | "span" | "div";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: TextRevealTag;
  delay?: number;
}

const motionMap = {
  h1: motion.h1, h2: motion.h2, h3: motion.h3,
  h4: motion.h4, h5: motion.h5, h6: motion.h6,
  p: motion.p, span: motion.span, div: motion.div,
} as const;

export function TextReveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: TextRevealProps) {
  const reduced = useReducedMotion();
  const Component = motionMap[as];

  return (
    <Component
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}
