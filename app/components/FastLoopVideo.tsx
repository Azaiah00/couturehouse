"use client";

type FastLoopVideoProps = {
  src: string;
  poster: string;
  label?: string;
  rate?: number;
};

export default function FastLoopVideo({ src, poster, label, rate = 1.35 }: FastLoopVideoProps) {
  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} aria-label={label} onLoadedMetadata={(event) => { event.currentTarget.playbackRate = rate; }}>
      <source src={src} type="video/webm" />
    </video>
  );
}
