"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            {/* Footer logo (slightly larger for visibility on dark background) */}
            <div className="relative h-12 w-48 md:h-14 md:w-56">
              <Image
                src="/footer-logo.png"
                alt="Couture House"
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">{t("footer.services")}</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link href="/for-brands" className="hover:text-white transition-colors">{t("nav.forBrands")}</Link></li>
              <li><Link href="/for-models" className="hover:text-white transition-colors">{t("nav.forModels")}</Link></li>
              <li><Link href="/models" className="hover:text-white transition-colors">{t("nav.modelBoard")}</Link></li>
              <li><Link href="/ad-center" className="hover:text-white transition-colors">{t("nav.adCenter")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">{t("footer.company")}</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("footer.careers")}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">{t("footer.connect")}</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-neutral-500 text-xs">
              New York • Paris • Milan • London • Colombia
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Couture House Co. {t("footer.rights")}</p>
          <p>{t("footer.designed")}</p>
        </div>
      </div>
    </footer>
  );
}

