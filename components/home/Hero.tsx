"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
  }, [muted]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 site-inset">
        <motion.h1
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading text-white text-[clamp(3rem,11vw,11rem)] leading-[0.9] max-w-[18ch]"
        >
          We create<br />worlds.
        </motion.h1>

        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-6 text-white/65 max-w-md font-sans text-base md:text-lg"
        >
          A digital platform for the brands shaping what comes next.
        </motion.p>
      </div>

      <button
        onClick={() => setMuted(!muted)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute right-6 bottom-6 z-20 flex items-center gap-3 group"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors hidden md:inline">
          {muted ? "Turn up the volume" : "Mute"}
        </span>
        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/60 transition-all">
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </span>
      </button>
    </section>
  );
}
