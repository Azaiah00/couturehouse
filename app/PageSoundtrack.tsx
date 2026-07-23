"use client";

import { useEffect, useRef, useState } from "react";

type PageSoundtrackProps = {
  src: string;
  title: string;
};

const preferenceKey = "couture-house-sound";

export default function PageSoundtrack({ src, title }: PageSoundtrackProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<"loading" | "playing" | "paused" | "blocked">("blocked");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.38;
    const storedPreference = window.sessionStorage.getItem(preferenceKey);
    if (storedPreference === "off") {
      setStatus("paused");
      return;
    }
    if (storedPreference !== "on") {
      setStatus("blocked");
      return;
    }

    const start = async () => {
      try {
        await audio.play();
        window.sessionStorage.setItem(preferenceKey, "on");
        setStatus("playing");
      } catch {
        setStatus("blocked");
      }
    };

    void start();
  }, [src]);

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      window.sessionStorage.setItem(preferenceKey, "off");
      setStatus("paused");
      return;
    }

    try {
      await audio.play();
      window.sessionStorage.setItem(preferenceKey, "on");
      setStatus("playing");
    } catch {
      setStatus("blocked");
    }
  };

  const needsInvitation = status === "blocked";

  return (
    <div className={`soundtrack-control soundtrack-${status}`}>
      <audio ref={audioRef} src={src} loop preload="none" />
      {needsInvitation && <span className="soundtrack-invitation">This world has a soundtrack</span>}
      <button type="button" onClick={toggleSound} aria-label={`${status === "playing" ? "Pause" : "Play"} ${title}`}>
        <span className="soundtrack-bars" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="soundtrack-copy">
          <small>{needsInvitation ? "Play soundtrack" : status === "playing" ? "Sound on" : status === "loading" ? "Loading sound" : "Sound off"}</small>
          <strong>{title}</strong>
        </span>
      </button>
    </div>
  );
}
