"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type AutoPlayVideoProps = { src: string; className?: string; poster?: string; ariaLabel?: string; ariaHidden?: boolean; style?: CSSProperties; startAt?: number; endAt?: number };

export default function AutoPlayVideo({ src, className = "", poster, ariaLabel, ariaHidden = false, style, startAt, endAt }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const attemptPlay = () => {
      if (document.visibilityState === "hidden") return;
      const promise = video.play();
      if (promise) void promise.catch(() => undefined);
    };
    const restart = () => {
      if (typeof startAt === "number" && video.currentTime < startAt) video.currentTime = startAt;
      attemptPlay();
    };
    const observer = new IntersectionObserver((entries) => { if (entries[0]?.isIntersecting) attemptPlay(); }, { rootMargin: "160px 0px", threshold: 0.01 });
    observer.observe(video);
    video.addEventListener("loadedmetadata", restart);
    video.addEventListener("canplay", attemptPlay);
    window.addEventListener("pageshow", attemptPlay);
    document.addEventListener("visibilitychange", attemptPlay);
    document.addEventListener("touchstart", attemptPlay, { passive: true, once: true });
    attemptPlay();
    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", restart);
      video.removeEventListener("canplay", attemptPlay);
      window.removeEventListener("pageshow", attemptPlay);
      document.removeEventListener("visibilitychange", attemptPlay);
      document.removeEventListener("touchstart", attemptPlay);
    };
  }, [src, startAt]);

  const keepLoopInRange = () => {
    const video = videoRef.current;
    if (!video || typeof endAt !== "number" || typeof startAt !== "number") return;
    if (video.currentTime >= endAt) {
      video.currentTime = startAt;
      void video.play().catch(() => undefined);
    }
  };

  return (
    <video ref={videoRef} className={`autoplay-video ${playing ? "is-playing" : ""} ${className}`.trim()} autoPlay muted loop playsInline preload="auto" controls={false} disablePictureInPicture poster={poster} aria-label={ariaLabel} aria-hidden={ariaHidden || undefined} style={style} onPlaying={() => setPlaying(true)} onTimeUpdate={keepLoopInRange}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
