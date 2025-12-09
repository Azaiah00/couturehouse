"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16 sm:pt-20 md:pt-24">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-rose-gold text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-medium px-2">
            {t("hero.subtitle")}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t("hero.title").split(" ").slice(0, 2).join(" ")} <br />
            <span className="italic text-rose-gold-light">{t("hero.title").split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed px-4">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link href="/for-brands" className="w-full sm:w-auto">
              <Button size="lg" variant="luxury" className="w-full sm:min-w-[200px]">
                {t("hero.ctaBrands")}
              </Button>
            </Link>
            <Link href="/for-models" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:min-w-[200px] text-white border-white hover:bg-white hover:text-charcoal">
                {t("hero.ctaModels")}
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

