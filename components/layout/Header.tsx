"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Music", href: "/music" },
  { name: "Models", href: "/models" },
  { name: "For Brands", href: "/for-brands" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
          <Link href="/" className="relative z-50 flex items-center">
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
            onClick={() => setOpen(!open)}
            className="relative z-50 w-10 h-10 flex items-center justify-center text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center site-inset">
              <nav className="max-w-[1600px] mx-auto w-full">
                <ul className="flex flex-col gap-2 md:gap-4">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between py-4 md:py-6 border-b border-line hover:border-white/40 transition-colors"
                      >
                        <span className="display-heading text-white text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] group-hover:text-white/70 transition-colors">
                          {item.name}
                        </span>
                        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border-t border-line site-inset py-8 max-w-[1600px] mx-auto w-full flex flex-col md:flex-row md:justify-between gap-6 text-xs uppercase tracking-[0.22em] text-white/50 font-sans"
            >
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Twitter</a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span>New York</span>
                <span>Paris</span>
                <span>Milan</span>
                <span>London</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
