"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
  const reduced = useReducedMotion();

  const x = direction === "left" ? distance : direction === "right" ? -distance : 0;
  const y = direction === "up" ? distance : direction === "down" ? -distance : 0;

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 1 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
