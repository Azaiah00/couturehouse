"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.forBrands"), href: "/for-brands" },
    { name: t("nav.forModels"), href: "/for-models" },
    { name: t("nav.modelBoard"), href: "/models" },
    { name: t("nav.adCenter"), href: "/ad-center" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isAdCenter = pathname === "/ad-center";
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isAdCenter
          ? isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-3"
          : isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4"
          : "bg-charcoal/95 border-b border-black/40 py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 group">
          {/* Clean logo without pill/oval so it sits directly on the header background. */}
          <div className="relative h-8 w-32 sm:h-10 sm:w-40 md:h-12 md:w-48">
            <Image
              src="/logo-couture-house.png"
              alt="Couture House"
              className="object-contain transition-opacity contrast-125 brightness-110"
              fill
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs lg:text-sm font-medium uppercase tracking-wider hover:text-rose-gold transition-colors whitespace-nowrap",
                isAdCenter ? "text-white/90" : isScrolled ? "text-charcoal" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 lg:gap-4">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button variant={isAdCenter ? "luxury" : isScrolled ? "default" : "luxury"} size="sm" className="text-xs lg:text-sm">
                {t("nav.contact")}
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isAdCenter ? "text-white" : "text-charcoal")} />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isAdCenter ? "text-white" : isScrolled ? "text-charcoal" : "text-white"
              )}
            />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl sm:text-2xl font-serif text-charcoal hover:text-rose-gold transition-colors text-center"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-4 mt-4 w-full max-w-xs">
                <LanguageSwitcher />
                <Link href="/contact" className="w-full">
                  <Button size="lg" className="w-full">
                    {t("nav.contact")}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

