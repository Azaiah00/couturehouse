"use client";

import { motion } from "framer-motion";
import { Camera, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function ValueProposition() {
  const { t } = useLanguage();

  const features = [
    {
      title: t("valueProp.forBrands"),
      description: t("valueProp.forBrandsDesc"),
      icon: Camera,
    },
    {
      title: t("valueProp.forModels"),
      description: t("valueProp.forModelsDesc"),
      icon: Zap,
    },
    {
      title: t("valueProp.theResult"),
      description: t("valueProp.theResultDesc"),
      icon: TrendingUp,
    },
  ];
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group p-8 border border-transparent hover:border-rose-gold/20 hover:bg-white transition-all duration-500 ease-out"
            >
              <div className="mb-6 text-rose-gold group-hover:scale-110 transition-transform duration-500">
                <feature.icon size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-charcoal group-hover:text-rose-gold-dark transition-colors">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

