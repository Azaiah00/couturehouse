"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { GalleryCarousel } from "@/components/ad-center/GalleryCarousel";
import { PortraitVideoCarouselStub } from "@/components/ad-center/PortraitVideoCarouselStub";

export default function HouseGalleryPage() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.4]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Keep autoplay responsive to UI state.
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Single hero video stays dominant at the top. */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen w-full flex items-center justify-center pt-16 md:pt-20"
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-contain"
            loop
            muted={isMuted}
            playsInline
            autoPlay
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[60vh] sm:min-h-[80vh]">
            <div className="space-y-5 sm:space-y-7">
              <p className="text-sm uppercase tracking-[0.35em] text-rose-gold">
                {t("adCenter.subtitle")}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight">
                {t("adCenter.title")}
              </h1>
              <p className="text-neutral-200 text-base sm:text-lg md:text-xl max-w-2xl">
                {t("adCenter.galleryDescription")}
              </p>
            </div>

            <div className="flex items-center justify-start lg:justify-end gap-3 sm:gap-4">
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-gold/90 hover:bg-rose-gold flex items-center justify-center text-black transition-all shadow-lg shadow-rose-gold/50"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              <button
                onClick={() => {
                  if (!videoRef.current) return;
                  videoRef.current.muted = !isMuted;
                  setIsMuted(!isMuted);
                }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm border border-white/20"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image carousel immediately under the hero video. */}
      <GalleryCarousel />

      {/* Stubbed portrait carousel ready for future uploads. */}
      <PortraitVideoCarouselStub />
    </div>
  );
}

