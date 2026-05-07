"use client";

import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 1 | -1;
  className?: string;
}

export function InfiniteMarquee({
  children,
  speed = 1,
  direction = 1,
  className = "",
}: InfiniteMarqueeProps) {
  const duration = Math.max(8, 20 / speed);

  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
      <div
        className="flex shrink-0 min-w-max w-max"
        style={{
          animation: `marqueeScroll ${duration}s linear infinite`,
          animationDirection: direction === -1 ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 min-w-max px-4">{children}</div>
        <div className="flex shrink-0 min-w-max px-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
