"use client";

import Link from "next/link";
import { ReactNode, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 font-sans font-bold text-[14.5px] tracking-[0.02em] rounded-full cursor-pointer transition-[transform,box-shadow] duration-300 px-[26px] py-[15px] will-change-transform";

const variants: Record<Variant, string> = {
  gold: "text-[#22190b] bg-[linear-gradient(180deg,#EBD08C,#C9A24B)] shadow-[0_8px_30px_rgba(201,162,75,0.32)] hover:shadow-[0_14px_42px_rgba(201,162,75,0.46)]",
  ghost:
    "text-chrome-hi bg-white/[0.04] border border-line hover:bg-white/[0.08] hover:-translate-y-0.5",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Magnetic pull on pointer devices (gold buttons). */
  magnetic?: boolean;
}

export function Button({
  href,
  children,
  variant = "gold",
  className,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!magnetic || variant !== "gold") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 6;
    const y = (e.clientY - r.top - r.height / 2) / 6 - 2;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const isInternal = href.startsWith("/");
  const classes = cn(base, variants[variant], className);

  if (isInternal) {
    return (
      <Link
        ref={ref}
        href={href}
        className={classes}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}
