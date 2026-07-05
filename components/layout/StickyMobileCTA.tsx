"use client";

import { useEffect, useState } from "react";
import { BOOK_HREF } from "@/lib/siteData";
import { cn } from "@/lib/utils";

/** Persistent gold "Book a demo" bar on mobile — appears after the hero. */
export function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/90 p-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <a
        href={BOOK_HREF}
        className="flex w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#EBD08C,#C9A24B)] py-3.5 text-[15px] font-bold text-[#22190b]"
      >
        Book a 15-min demo →
      </a>
    </div>
  );
}
