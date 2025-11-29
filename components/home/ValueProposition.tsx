"use client";

import { motion } from "framer-motion";
import { Camera, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    title: "For Brands",
    description: "Send us product images. We digitally render them on our models. Receive professional campaign-ready content. No shipping required.",
    icon: Camera,
  },
  {
    title: "For Models",
    description: "Join our roster. Get matched with premium brands. Earn from partnerships without photoshoot commitments.",
    icon: Zap,
  },
  {
    title: "The Result",
    description: "Seamless collaborations. Faster turnarounds. Maximum exposure. Revenue for all parties without the logistical headaches.",
    icon: TrendingUp,
  },
];

export function ValueProposition() {
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

