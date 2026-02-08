"use client";

import Link from "next/link";
import { Check, Star, TrendingUp, Users, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";
import { SectionReveal } from "@/components/animations/SectionReveal";

export default function ForModelsPage() {
  const { t } = useLanguage();

  const requirements = [
    t("forModels.req1"),
    t("forModels.req2"),
    t("forModels.req3"),
    t("forModels.req4"),
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24 text-center">
        <SectionReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
            {t("forModels.title")} <br />
            <span className="text-rose-gold italic">{t("forModels.titleAccent")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-6 sm:mb-10 px-4">
            {t("forModels.description")}
          </p>
          <Link href="#apply" className="inline-block w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full sm:w-auto">{t("forModels.apply")}</Button>
          </Link>
        </SectionReveal>
      </section>

      {/* Image Break */}
      <section className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative mb-12 sm:mb-16 md:mb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/how-to-slide.jpg')] bg-cover bg-[center_top_30%] bg-fixed" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start md:items-center">
          <div>
            <SectionReveal>
              <h2 className="text-rose-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">{t("forModels.benefits")}</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-6 sm:mb-8">{t("forModels.whyChoose")}</h3>
            </SectionReveal>
            
            <div className="space-y-8">
              <SectionReveal delay={0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("forModels.passiveRevenue")}</h4>
                    <p className="text-neutral-600">{t("forModels.passiveRevenueDesc")}</p>
                  </div>
                </div>
              </SectionReveal>
              
              <SectionReveal delay={0.2}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("forModels.premiumBrands")}</h4>
                    <p className="text-neutral-600">{t("forModels.premiumBrandsDesc")}</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("forModels.portfolioGrowth")}</h4>
                    <p className="text-neutral-600">{t("forModels.portfolioGrowthDesc")}</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>

          <SectionReveal direction="left">
            <div className="bg-cream p-6 sm:p-8 md:p-10 rounded-2xl border border-neutral-200">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">{t("forModels.requirements")}</h3>
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
                    <p className="font-bold text-sm">Retail Partner</p>
                    <p className="text-xs text-neutral-400">{t("forModels.modelSince")}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
        
        {/* How It Works Button */}
        <div className="flex justify-center mt-12">
          <a href="#how-it-works" className="scroll-smooth">
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              {t("forModels.howItWorksButton")}
              <ArrowDown className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8 sm:mb-12 text-center">
              {t("forModels.howItWorksTitle")}
            </h2>
          </SectionReveal>

          {/* What We Do */}
          <SectionReveal delay={0.1}>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 text-rose-gold">
                {t("forModels.whatWeDo")}
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t("forModels.whatWeDoDesc")}
              </p>
            </div>
          </SectionReveal>

          {/* How We Deliver */}
          <SectionReveal delay={0.2}>
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 text-rose-gold">
                {t("forModels.howYouGetPaid")}
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t("forModels.howYouGetPaidDesc")}
              </p>
            </div>
          </SectionReveal>

          {/* The Strategy */}
          <div className="mb-12">
            <SectionReveal>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-rose-gold">
                {t("forModels.theProcess")}
              </h3>
            </SectionReveal>
            <ol className="space-y-6">
              {[1, 2, 3, 4, 5].map((step) => (
                <SectionReveal key={step} delay={step * 0.1} direction="right">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold">
                      {step}
                    </div>
                    <p className="text-lg text-neutral-600 leading-relaxed pt-1">
                      {t(`forModels.processStep${step}` as any)}
                    </p>
                  </li>
                </SectionReveal>
              ))}
            </ol>
          </div>

          {/* Why It Works */}
          <div className="mb-12">
            <SectionReveal>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 text-rose-gold">
                {t("forModels.whatMakesItGreat")}
              </h3>
            </SectionReveal>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5].map((benefit) => (
                <SectionReveal key={benefit} delay={benefit * 0.1} direction="right">
                  <li className="flex items-start gap-3">
                    <Check className="text-rose-gold mt-1 shrink-0" />
                    <p className="text-lg text-neutral-600">{t(`forModels.benefit${benefit}` as any)}</p>
                  </li>
                </SectionReveal>
              ))}
            </ul>
          </div>

          {/* Closing Statement */}
          <SectionReveal>
            <div className="bg-rose-gold/5 border-l-4 border-rose-gold p-6 rounded-r-lg">
              <p className="text-lg text-neutral-700 leading-relaxed italic">
                {t("forModels.thinkOfIt")}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="bg-charcoal text-white py-12 sm:py-16 md:py-24">
         <div className="container mx-auto px-4 sm:px-6 text-center">
            <SectionReveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">{t("forModels.readyJoin")}</h2>
              <p className="text-neutral-400 mb-6 sm:mb-10 text-sm sm:text-base px-4">{t("forModels.applications")}</p>
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button variant="gold" size="lg" className="w-full sm:min-w-[200px]">
                  {t("forModels.submitApplication")}
                </Button>
              </Link>
            </SectionReveal>
         </div>
      </section>
    </div>
  );
}
