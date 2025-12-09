"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'brands' | 'models'>('brands');

  const steps = {
    brands: [
      { title: t("howItWorks.brandsStep1"), desc: t("howItWorks.brandsStep1Desc") },
      { title: t("howItWorks.brandsStep2"), desc: t("howItWorks.brandsStep2Desc") },
      { title: t("howItWorks.brandsStep3"), desc: t("howItWorks.brandsStep3Desc") },
      { title: t("howItWorks.brandsStep4"), desc: t("howItWorks.brandsStep4Desc") },
    ],
    models: [
      { title: t("howItWorks.modelsStep1"), desc: t("howItWorks.modelsStep1Desc") },
      { title: t("howItWorks.modelsStep2"), desc: t("howItWorks.modelsStep2Desc") },
      { title: t("howItWorks.modelsStep3"), desc: t("howItWorks.modelsStep3Desc") },
      { title: t("howItWorks.modelsStep4"), desc: t("howItWorks.modelsStep4Desc") },
    ],
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-charcoal text-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-rose-gold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4">{t("howItWorks.subtitle")}</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 sm:mb-8">{t("howItWorks.title")}</h3>
          
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab('brands')}
              className={`text-lg pb-2 border-b transition-all duration-300 ${
                activeTab === 'brands' ? 'text-white border-rose-gold' : 'text-neutral-500 border-transparent hover:text-neutral-300'
              }`}
            >
              {t("howItWorks.forBrands")}
            </button>
            <button
              onClick={() => setActiveTab('models')}
              className={`text-lg pb-2 border-b transition-all duration-300 ${
                activeTab === 'models' ? 'text-white border-rose-gold' : 'text-neutral-500 border-transparent hover:text-neutral-300'
              }`}
            >
              {t("howItWorks.forModels")}
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
            >
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {steps[activeTab].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-rose-gold font-serif text-xl group-hover:bg-rose-gold group-hover:text-charcoal transition-all duration-300">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2 group-hover:text-rose-gold transition-colors">{step.title}</h4>
                      <p className="text-neutral-400 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-neutral-900 overflow-hidden hidden md:block">
                 {/* Process visual area: use local slide for brands to avoid external fetch */}
                 <div 
                  className={`absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-500 ${
                    activeTab === 'brands' 
                      ? "bg-[url('/how-to-slide.jpg')]" 
                      : "bg-[url('/kendal-val.jpeg')]"
                  }`}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

