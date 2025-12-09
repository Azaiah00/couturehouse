"use client";

import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, Globe, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/ui/PricingCard";
import { useLanguage } from "@/lib/i18n/context";

export default function ForBrandsPage() {
  const { t } = useLanguage();

  const benefits = [
    { title: t("forBrands.noSamples"), desc: t("forBrands.noSamplesDesc"), icon: Layers },
    { title: t("forBrands.faster"), desc: t("forBrands.fasterDesc"), icon: Clock },
    { title: t("forBrands.costEffective"), desc: t("forBrands.costEffectiveDesc"), icon: DollarSign },
    { title: t("forBrands.globalReach"), desc: t("forBrands.globalReachDesc"), icon: Globe },
    { title: t("forBrands.professionalQuality"), desc: t("forBrands.professionalQualityDesc"), icon: CheckCircle2 },
    { title: t("forBrands.scalable"), desc: t("forBrands.scalableDesc"), icon: Zap },
  ];

  const pricingTiers = [
    {
      title: t("forBrands.starterTitle"),
      price: t("forBrands.starterPrice"),
      priceNote: t("forBrands.starterNote"),
      examplePrice: "$500",
      exampleCount: "10 images",
      description: t("forBrands.starterDesc"),
      features: [
        t("forBrands.starterFeature1"),
        t("forBrands.starterFeature2"),
        t("forBrands.starterFeature3"),
        t("forBrands.starterFeature4"),
      ],
      savings: null
    },
    {
      title: t("forBrands.volumeTitle"),
      price: t("forBrands.volumePrice"),
      priceNote: t("forBrands.volumeNote"),
      examplePrice: "$1,350",
      exampleCount: "30 images",
      description: t("forBrands.volumeDesc"),
      isPopular: true,
      features: [
        t("forBrands.volumeFeature1"),
        t("forBrands.volumeFeature2"),
        t("forBrands.volumeFeature3"),
        t("forBrands.volumeFeature4"),
        t("forBrands.volumeFeature5"),
      ],
      savings: t("forBrands.volumeSavings")
    },
    {
      title: t("forBrands.eliteTitle"),
      price: t("forBrands.elitePrice"),
      priceNote: t("forBrands.eliteNote"),
      examplePrice: "$12,000",
      exampleCount: "Unlimited images + 8 videos",
      description: t("forBrands.eliteDesc"),
      features: [
        t("forBrands.eliteFeature1"),
        t("forBrands.eliteFeature2"),
        t("forBrands.eliteFeature3"),
        t("forBrands.eliteFeature4"),
        t("forBrands.eliteFeature5"),
        t("forBrands.eliteFeature6"),
        t("forBrands.eliteFeature7"),
      ],
      savings: t("forBrands.eliteSavings")
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-charcoal mb-4 sm:mb-6 leading-tight">
          {t("forBrands.title")} <br />
          <span className="text-rose-gold italic">{t("forBrands.titleAccent")}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-6 sm:mb-10 px-4">
          {t("forBrands.description")}
        </p>
        <Link href="#pricing">
          <Button variant="luxury" size="lg" className="w-full sm:w-auto">{t("forBrands.viewPricing")}</Button>
        </Link>
      </section>

      {/* Benefits Grid */}
      <section className="bg-cream py-12 sm:py-16 md:py-24 mb-12 sm:mb-16 md:mb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-rose-gold mb-6 shadow-sm">
                  <benefit.icon size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-rose-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">{t("forBrands.investment")}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4 sm:mb-6">{t("forBrands.packages")}</h3>
          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto px-4">
            {t("forBrands.pricingDesc")}
          </p>
        </div>

        {/* What's Included - All Packages */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 bg-gradient-to-br from-rose-gold/5 via-rose-gold/10 to-rose-gold/5 rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-rose-gold/20">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-2 sm:mb-3">{t("forBrands.includedTitle")}</h3>
            <p className="text-sm sm:text-base text-neutral-600 px-4">{t("forBrands.includedDesc")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">{t("forBrands.realModel")}</h4>
              <p className="text-sm text-neutral-600">{t("forBrands.realModelDesc")}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">{t("forBrands.modelPromo")}</h4>
              <p className="text-sm text-neutral-600">{t("forBrands.modelPromoDesc")}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">{t("forBrands.couturePost")}</h4>
              <p className="text-sm text-neutral-600">{t("forBrands.couturePostDesc")}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-rose-gold/20 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal mb-2">{t("forBrands.interactiveSales")}</h4>
              <p className="text-sm text-neutral-600">{t("forBrands.interactiveSalesDesc")}</p>
            </div>
          </div>
        </div>

        {/* Pricing Structure Visual */}
        <div className="max-w-4xl mx-auto mb-16 bg-cream rounded-2xl p-8 md:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-serif font-bold text-charcoal mb-4">{t("forBrands.howItWorksTitle")}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">{t("forBrands.smallOrders")}</h5>
                    <p className="text-neutral-600 text-sm">{t("forBrands.smallOrdersDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">{t("forBrands.volumeOrders")}</h5>
                    <p className="text-neutral-600 text-sm">{t("forBrands.volumeOrdersDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">{t("forBrands.enterprise")}</h5>
                    <p className="text-neutral-600 text-sm">{t("forBrands.enterpriseDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h5 className="font-bold text-charcoal mb-4 text-center">{t("forBrands.calculation")}</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600">5 images</span>
                  <span className="font-bold text-charcoal">$250</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                  <span className="text-neutral-600">15 images</span>
                  <span className="font-bold text-charcoal">$750</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-rose-gold/30">
                  <span className="text-neutral-600">20 images</span>
                  <span className="font-bold text-rose-gold">$900</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">50 images</span>
                  <span className="font-bold text-rose-gold">$2,250</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-rose-gold/30 mt-2">
                  <span className="text-neutral-600 font-medium">100 images</span>
                  <span className="font-bold text-rose-gold text-lg">$4,500</span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-4 text-center italic">{t("forBrands.volumePricing")}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-start">
          {pricingTiers.map((tier) => (
            <PricingCard 
              key={tier.title} 
              title={tier.title}
              price={tier.price}
              priceNote={tier.priceNote}
              examplePrice={tier.examplePrice}
              exampleCount={tier.exampleCount}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              savings={tier.savings}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-neutral-500 mb-4">{t("forBrands.customSolution")}</p>
          <Link href="/contact">
            <Button variant="link">{t("forBrands.contactSales")}</Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-charcoal text-white rounded-2xl p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6">{t("forBrands.readyTitle")}</h2>
            <p className="text-neutral-300 text-base sm:text-lg mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
              {t("forBrands.readyDesc")}
            </p>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button variant="gold" size="lg" className="w-full sm:min-w-[200px]">
                {t("forBrands.startPartnership")}
              </Button>
            </Link>
          </div>
          {/* Decorative BG */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        </div>
      </section>
    </div>
  );
}
