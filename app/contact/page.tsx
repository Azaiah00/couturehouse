"use client";

import { Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLanguage } from "@/lib/i18n/context";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t("contact.title")} <br />
            <span className="text-rose-gold italic">{t("contact.titleAccent")}</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto px-4">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10 lg:col-span-1">
            <div>
              <h3 className="text-xl font-serif font-bold mb-6 text-charcoal">{t("contact.contactInfo")}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-rose-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">{t("contact.email")}</p>
                    <a href="mailto:couturehousefirm@gmail.com" className="text-lg font-medium hover:text-rose-gold transition-colors">
                      couturehousefirm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-rose-gold">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider mb-1">{t("contact.officeHours")}</p>
                    <p className="text-lg font-medium">
                      9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-charcoal text-white p-6 sm:p-8 rounded-sm">
              <h4 className="text-base sm:text-lg font-serif mb-3 sm:mb-4">{t("contact.newsletter")}</h4>
              <p className="text-neutral-400 text-xs sm:text-sm mb-4 sm:mb-6">
                {t("contact.newsletterDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder={t("contact.emailPlaceholder")} 
                  className="bg-white/10 border border-white/20 rounded-sm px-4 py-2 w-full text-sm focus:outline-none focus:border-rose-gold"
                />
                <button className="bg-rose-gold text-white px-4 py-2 rounded-sm hover:bg-rose-gold-dark transition-colors font-medium text-sm whitespace-nowrap">
                  {t("contact.join")}
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
