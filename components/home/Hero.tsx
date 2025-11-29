"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509631179647-b8b941837303?q=80&w=2532&auto=format&fit=crop')] 
          bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-rose-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6 font-medium">
            The Future of Fashion Modeling
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            Where Fashion <br />
            <span className="italic text-rose-gold-light">Meets Influence</span>
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We bridge the gap between high-fashion brands and influential models through revolutionary virtual staging technology.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/for-brands">
              <Button size="lg" variant="luxury" className="min-w-[200px]">
                Partner as a Brand
              </Button>
            </Link>
            <Link href="/for-models">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal min-w-[200px]">
                Join as a Model
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-rose-gold to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}

