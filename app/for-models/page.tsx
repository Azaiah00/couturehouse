"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Star, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";

export default function ForModelsPage() {
  const { t } = useLanguage();

  const requirements = [
    t("forModels.req1"),
    t("forModels.req2"),
    t("forModels.req3"),
    t("forModels.req4"),
    t("forModels.req5"),
  ];

  return (
    <div className="pt-24 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6">
          {t("forModels.title")} <br />
          <span className="text-rose-gold italic">{t("forModels.titleAccent")}</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-10">
          {t("forModels.description")}
        </p>
        <Link href="#apply">
          <Button variant="default" size="lg">{t("forModels.apply")}</Button>
        </Link>
      </section>

      {/* Image Break */}
      <section className="w-full h-[60vh] relative mb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/valentina-for-model-bckground.png')] bg-cover bg-[center_top_30%] bg-fixed" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-rose-gold text-sm uppercase tracking-[0.2em] mb-4">{t("forModels.benefits")}</h2>
            <h3 className="text-4xl font-serif font-bold text-charcoal mb-8">{t("forModels.whyChoose")}</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t("forModels.passiveRevenue")}</h4>
                  <p className="text-neutral-600">{t("forModels.passiveRevenueDesc")}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t("forModels.premiumBrands")}</h4>
                  <p className="text-neutral-600">{t("forModels.premiumBrandsDesc")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t("forModels.portfolioGrowth")}</h4>
                  <p className="text-neutral-600">{t("forModels.portfolioGrowthDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-10 rounded-2xl border border-neutral-200">
            <h3 className="text-2xl font-serif font-bold mb-6">{t("forModels.requirements")}</h3>
            <ul className="space-y-4">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-700">
                  <Check className="text-rose-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-white rounded-xl border border-neutral-100">
              <p className="text-sm text-neutral-500 italic">
                "{t("forModels.testimonial")}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-neutral-300" />
                </div>
                <div>
                  <p className="font-bold text-sm">Sarah M.</p>
                  <p className="text-xs text-neutral-400">{t("forModels.modelSince")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="bg-charcoal text-white py-24">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t("forModels.readyJoin")}</h2>
            <p className="text-neutral-400 mb-10">{t("forModels.applications")}</p>
            <Link href="/contact?type=model">
              <Button variant="gold" size="lg">{t("forModels.submitApplication")}</Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
