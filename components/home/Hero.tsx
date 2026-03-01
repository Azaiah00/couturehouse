"use client";

import { HeroThree } from "@/components/animations/HeroThree";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <HeroThree />
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
        <TextReveal as="h1" className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white mb-6 uppercase tracking-[0.1em] md:tracking-[0.2em] leading-tight">
          WE CREATE <br className="hidden md:block" />
          <span className="text-crimson">WORLDS</span>
        </TextReveal>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-lg md:text-2xl font-sans text-dusty-rose max-w-2xl font-light tracking-wide"
        >
          Creative studio for brands that demand more.
        </motion.p>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-sans">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-crimson" />
        </motion.div>
      </motion.div>
    </section>
  );
}
