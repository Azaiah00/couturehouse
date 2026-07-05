"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, BOOK_HREF } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-60 border-b border-transparent transition-[background,border-color,padding] duration-300",
          scrolled && "bg-ink/80 backdrop-blur-[14px] border-line"
        )}
      >
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-7 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Couture House — home">
            <Monogram size={34} />
            <b className="font-display text-[21px] tracking-[0.5px] text-white">Couture House</b>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-semibold tracking-[0.02em] text-chrome transition-colors hover:text-gold-hi"
              >
                {link.label}
              </Link>
            ))}
            <Button href={BOOK_HREF} className="!px-5 !py-[11px]" magnetic={false}>
              Book a Demo
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-chrome-hi md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-ink/97 px-8 pb-10 pt-28 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line2 py-4 font-display text-[28px] text-chrome-hi"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <Button
            href={BOOK_HREF}
            className="w-full"
            magnetic={false}
          >
            Book a 15-min demo →
          </Button>
        </div>
      </div>
    </>
  );
}
