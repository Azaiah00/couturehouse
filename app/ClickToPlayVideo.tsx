"use client";

import { Play } from "lucide-react";
import Image from "next/image";
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
        <video controls autoPlay muted playsInline preload="metadata" poster={poster} aria-label={ariaLabel}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <button className="click-video-trigger" type="button" onClick={() => setActive(true)} aria-label={`Play ${ariaLabel}`}>
          <Image src={poster} alt="" fill sizes="(max-width: 760px) 92vw, 50vw" unoptimized />
          <span className="click-video-play" aria-hidden="true">
            <Play />
            <b>Play film</b>
          </span>
        </button>
      )}
    </div>
  );
}
