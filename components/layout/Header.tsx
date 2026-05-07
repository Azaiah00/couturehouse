"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Music", href: "/music" },
  { name: "Models", href: "/models" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll, save focus, focus first menu item, restore on close.
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      previousFocus.current?.focus?.();
      return;
    }
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const firstLink = overlayRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap + Escape to close
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;

      const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || open
            ? "bg-black/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent",
        )}
      >
        <div className="site-inset flex items-center justify-between py-5 md:py-6">
          <Link href="/" className="relative z-50 flex items-center" aria-label="Couture House home">
            {logoError ? (
              <span className="text-white text-base md:text-lg uppercase tracking-[0.32em]">
                Couture House
              </span>
            ) : (
              <div className="relative h-7 w-[130px] md:h-8 md:w-[150px]">
                <Image
                  src="/logo-couture-house.png"
                  alt="Couture House Co."
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="150px"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </Link>

          <button
            ref={triggerRef}
            onClick={() => setOpen(!open)}
            className="relative z-50 flex items-center gap-3 text-white group"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-menu"
          >
            <span className="hidden sm:inline text-[11px] uppercase tracking-[0.22em] text-white/70 group-hover:text-white transition-colors">
              {open ? "Close" : "Menu"}
            </span>
            <span className="w-9 h-9 flex items-center justify-center border border-white/20 group-hover:border-white/60 transition-colors">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            id="primary-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Primary navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <div className="h-full flex flex-col pt-28 md:pt-32 pb-12 site-inset">
              <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 flex-1">
                <div className="md:col-span-3 md:col-start-1 flex flex-col gap-3">
                  <span className="eyebrow">Navigate</span>
                </div>

                <nav className="md:col-span-7" aria-label="Primary">
                  <ul className="flex flex-col">
                    {navItems.map((item, i) => {
                      const active = pathname === item.href;
                      return (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.05 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-baseline gap-4 py-4 md:py-5 border-b border-line hover:border-white/40 transition-colors"
                            aria-current={active ? "page" : undefined}
                          >
                            <span className="text-white/35 font-sans text-xs tracking-[0.22em] w-8">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "uppercase tracking-tight text-2xl md:text-3xl lg:text-4xl transition-colors",
                                active ? "text-white" : "text-white/70 group-hover:text-white",
                              )}
                            >
                              {item.name}
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="border-t border-line pt-8 mt-12 max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 text-xs uppercase tracking-[0.22em] text-white/50 font-sans"
              >
                <div className="md:col-span-3 md:col-start-1">
                  <p className="text-white/40 mb-2">Get in touch</p>
                  <a
                    href="mailto:hello@couturehouse.co"
                    className="text-white hover:text-white/70 normal-case tracking-normal text-sm"
                  >
                    hello@couturehouse.co
                  </a>
                </div>
                <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 md:items-end">
                  <a
                    href="https://www.instagram.com/couturehouse.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                  <a href="#" className="hover:text-white">LinkedIn</a>
                  <a href="#" className="hover:text-white">Twitter</a>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 md:justify-end md:items-end">
                  <span>NYC</span>
                  <span>Paris</span>
                  <span>Milan</span>
                  <span>London</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
