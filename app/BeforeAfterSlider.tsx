"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  alt: string;
  title?: string;
  note?: string;
  priority?: boolean;
};

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  title,
  note,
  priority = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="revival-comparison">
      <div className="revival-comparison-media">
        <img
          className="revival-before"
          src={after}
          alt={`Couture House enhanced — ${alt}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="revival-after" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={before}
            alt={`Original content — ${alt}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
        <div className="revival-divider" style={{ left: `${position}%` }} aria-hidden="true">
          <span>&larr;&nbsp; Slide &nbsp;&rarr;</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare original and enhanced versions of ${alt}`}
        />
        <span className="revival-label revival-label-before">Original content</span>
        <span className="revival-label revival-label-after">Couture House enhanced</span>
      </div>
      {(title || note) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {note && <span>{note}</span>}
        </figcaption>
      )}
    </figure>
  );
}
