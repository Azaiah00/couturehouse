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
    { name: t("nav.about"), href: "/about" },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4"
          : "bg-charcoal/95 border-b border-black/40 py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 group">
          {/* Clean logo without pill/oval so it sits directly on the header background. */}
          <div className="relative h-10 w-40 md:h-12 md:w-48">
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
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider hover:text-rose-gold transition-colors",
                isScrolled ? "text-charcoal" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button variant={isScrolled ? "default" : "luxury"} size="sm">
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
            <X className="w-6 h-6 text-charcoal" />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-charcoal" : "text-white"
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
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-serif text-charcoal hover:text-rose-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-4 mt-4">
                <LanguageSwitcher />
                <Link href="/contact">
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

