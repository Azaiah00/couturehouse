"use client";

import { useRef, useState } from "react";

export default function PageSoundtrack({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  async function toggleSound() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) { audio.pause(); setPlaying(false); return; }
    audio.volume = 0.38;
    try { await audio.play(); setPlaying(true); setError(false); }
    catch { setError(true); }
  }
  return <div className={`soundtrack-control soundtrack-${playing ? "playing" : "paused"}`}>
    <audio ref={audioRef} src={src} loop preload="none" onError={() => { setError(true); setPlaying(false); }} />
    <button type="button" onClick={toggleSound}>
      <span className="soundtrack-bars" aria-hidden="true"><i /><i /><i /><i /></span>
      <span className="soundtrack-copy"><small>{playing ? "Pause soundtrack" : "Play soundtrack"}</small><strong>{title}</strong></span>
    </button>
    {error && <span role="status">Audio unavailable. Please try again.</span>}
  </div>;
}
