"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type PortraitVideo = {
  src: string;
  title: string;
  poster: string;
};

// Light-weight placeholder set; swap poster paths when you upload real clips.
const portraitVideos: PortraitVideo[] = [
  { src: "/Video_20251226_234909_771.mp4", title: "Creative System", poster: "/download (1).png" },
  { src: "/Video_20251226_234909_771.mp4", title: "Retail Growth", poster: "/download (3).png" },
  { src: "/Video_20251226_234909_771.mp4", title: "Ecommerce CRO", poster: "/download (5).png" },
  { src: "/Video_20251226_234909_771.mp4", title: "Paid Media", poster: "/download (7).png" },
];

export function PortraitVideoCarouselStub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Auto-rotate focus unless the user is hovering the carousel.
  useEffect(() => {
    if (isHovering) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portraitVideos.length);
      setManualPause(false);
    }, 5200);
    return () => clearInterval(id);
  }, [isHovering]);

  // Keep videos playing muted by default, unmute the focused one when requested.
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      const isActive = idx === activeIndex;
      if (!video) return;

      const allowSound = isActive && soundOn;
      video.muted = !allowSound;

      // Keep everything quietly looping until the user pauses.
      if (!manualPause || !isActive) {
        if (video.paused) {
          video.play().catch(() => {});
        }
      }
    });
  }, [activeIndex, soundOn, manualPause]);

  const railWidth = useMemo(() => portraitVideos.length * 280, []);
  const offset = activeIndex * 280;

  const togglePlay = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setManualPause(false);
    } else {
      video.pause();
      setManualPause(true);
    }
  };

  return (
    <section className="relative bg-black py-12 sm:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-rose-gold mb-2">
              Coming Next
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
              Portrait Stories Carousel
            </h3>
            <p className="text-neutral-300 max-w-xl mt-2 text-sm sm:text-base">
              These portrait (3:4) clips auto-play muted while rotating. Click a card to focus it,
              unmute, and pause or play. Replace the posters and video sources as you upload assets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white text-sm hover:bg-white/15 transition"
            >
              {manualPause ? <Play size={16} /> : <Pause size={16} />}
              {manualPause ? "Play focused" : "Pause focused"}
            </button>
            <button
              onClick={() => setSoundOn((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white text-sm hover:bg-white/15 transition"
            >
              {soundOn ? <VolumeX size={16} /> : <Volume2 size={16} />}
              {soundOn ? "Mute focus" : "Unmute focus"}
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-black via-black/70 to-transparent" />

          <div
            className="flex gap-4 sm:gap-6 py-6 px-4 transition-transform duration-700 ease-out"
            style={{
              width: railWidth,
              transform: `translateX(-${offset}px)`,
            }}
          >
            {portraitVideos.map((clip, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={clip.title}
                  className={`relative w-[220px] sm:w-[260px] aspect-[3/4] overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "border-rose-gold shadow-[0_20px_60px_rgba(183,110,121,0.25)] scale-[1.02]"
                      : "border-white/10 opacity-80 hover:opacity-100"
                  }`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setManualPause(false);
                    setSoundOn(true);
                  }}
                >
                  <video
                    ref={(node) => {
                      if (node) videoRefs.current[idx] = node;
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={clip.src}
                    poster={clip.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-left">
                    <p className="text-white font-semibold text-sm">{clip.title}</p>
                    <p className="text-rose-gold text-xs mt-1">
                      {isActive ? "Focused" : "Previewing"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}





