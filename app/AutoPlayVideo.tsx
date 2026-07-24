"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type AutoPlayVideoProps = {
  src: string;
  className?: string;
  poster?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  style?: CSSProperties;
  startAt?: number;
  endAt?: number;
  priority?: boolean;
  posterOnlyOnMobile?: boolean;
};

export default function AutoPlayVideo({
  src,
  className = "",
  poster,
  ariaLabel,
  ariaHidden = false,
  style,
  startAt,
  endAt,
  priority = false,
  posterOnlyOnMobile = false,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority && !posterOnlyOnMobile);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (priority) {
      const mobileQuery = window.matchMedia("(max-width: 700px)");
      const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      const updatePriorityLoading = () => {
        const usePoster = posterOnlyOnMobile && (mobileQuery.matches || reducedMotionQuery.matches || connection?.saveData);
        setShouldLoad(!usePoster);
      };

      updatePriorityLoading();
      mobileQuery.addEventListener("change", updatePriorityLoading);
      reducedMotionQuery.addEventListener("change", updatePriorityLoading);
      return () => {
        mobileQuery.removeEventListener("change", updatePriorityLoading);
        reducedMotionQuery.removeEventListener("change", updatePriorityLoading);
      };
    }

    setShouldLoad(false);
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setShouldLoad(true);
        loadObserver.disconnect();
      },
      { rootMargin: "320px 0px", threshold: 0.01 },
    );
    loadObserver.observe(video);
    return () => loadObserver.disconnect();
  }, [posterOnlyOnMobile, priority, src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.muted = true;
    video.defaultMuted = true;
    let withinPlaybackRange = priority;

    const attemptPlay = () => {
      if (!withinPlaybackRange || document.visibilityState === "hidden") return;
      const promise = video.play();
      if (promise) void promise.catch(() => undefined);
    };
    const restart = () => {
      if (typeof startAt === "number" && video.currentTime < startAt) video.currentTime = startAt;
      attemptPlay();
    };
    const playbackObserver = new IntersectionObserver(
      (entries) => {
        withinPlaybackRange = Boolean(entries[0]?.isIntersecting);
        if (withinPlaybackRange) attemptPlay();
        else video.pause();
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") video.pause();
      else attemptPlay();
    };

    playbackObserver.observe(video);
    video.addEventListener("loadedmetadata", restart);
    video.addEventListener("canplay", attemptPlay);
    window.addEventListener("pageshow", attemptPlay);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("touchstart", attemptPlay, { passive: true, once: true });
    video.load();
    if (priority) attemptPlay();

    return () => {
      playbackObserver.disconnect();
      video.removeEventListener("loadedmetadata", restart);
      video.removeEventListener("canplay", attemptPlay);
      window.removeEventListener("pageshow", attemptPlay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("touchstart", attemptPlay);
    };
  }, [priority, shouldLoad, src, startAt]);

  const keepLoopInRange = () => {
    const video = videoRef.current;
    if (!video || typeof endAt !== "number" || typeof startAt !== "number") return;
    if (video.currentTime >= endAt) {
      video.currentTime = startAt;
      void video.play().catch(() => undefined);
    }
  };

  return (
    <video ref={videoRef} className={`autoplay-video ${playing ? "is-playing" : ""} ${poster && !shouldLoad ? "is-poster" : ""} ${className}`.trim()} autoPlay={priority} muted loop playsInline preload={priority ? "metadata" : "none"} controls={false} disablePictureInPicture poster={poster} aria-label={ariaLabel} aria-hidden={ariaHidden || undefined} style={style} onPlaying={() => setPlaying(true)} onTimeUpdate={keepLoopInRange}>
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
