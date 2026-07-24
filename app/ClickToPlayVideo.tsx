"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type ClickToPlayVideoProps = {
  src: string;
  poster: string;
  ariaLabel: string;
  className?: string;
};

export default function ClickToPlayVideo({
  src,
  poster,
  ariaLabel,
  className = "",
}: ClickToPlayVideoProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={`click-video ${active ? "is-active" : ""} ${className}`.trim()}>
      {active ? (
        <video controls autoPlay playsInline preload="metadata" aria-label={ariaLabel}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <button className="click-video-trigger" type="button" onClick={() => setActive(true)} aria-label={`Play ${ariaLabel}`}>
          <img src={poster} alt="" loading="lazy" decoding="async" />
          <span className="click-video-play" aria-hidden="true">
            <Play />
            <b>Play film</b>
          </span>
        </button>
      )}
    </div>
  );
}
