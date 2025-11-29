"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const steps = {
  brands: [
    { title: "Submit Products", desc: "Upload your product images to our secure platform." },
    { title: "Model Match", desc: "Our AI matches you with the perfect models for your aesthetic." },
    { title: "Digital Styling", desc: "We render your products on models with photorealistic precision." },
    { title: "Launch Campaign", desc: "Receive high-res content ready for your marketing channels." },
  ],
  models: [
    { title: "Apply to Join", desc: "Submit your portfolio and verify your social following." },
    { title: "Get Approved", desc: "Join our exclusive roster of elite digital talent." },
    { title: "Receive Offers", desc: "Get matched with premium brands that fit your style." },
    { title: "Earn Revenue", desc: "Get paid for partnerships without physical photoshoots." },
  ],
};

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'brands' | 'models'>('brands');

  return (
    <section className="py-32 bg-charcoal text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-4">Process</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">How It Works</h3>
          
          <div className="flex justify-center gap-8 mb-12">
            <button
              onClick={() => setActiveTab('brands')}
              className={`text-lg pb-2 border-b transition-all duration-300 ${
                activeTab === 'brands' ? 'text-white border-gold' : 'text-neutral-500 border-transparent hover:text-neutral-300'
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => setActiveTab('models')}
              className={`text-lg pb-2 border-b transition-all duration-300 ${
                activeTab === 'models' ? 'text-white border-gold' : 'text-neutral-500 border-transparent hover:text-neutral-300'
              }`}
            >
              For Models
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
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-12">
                {steps[activeTab].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold font-serif text-xl group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{step.title}</h4>
                      <p className="text-neutral-400 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-[600px] bg-neutral-900 overflow-hidden hidden md:block">
                 {/* Placeholder for Process Image */}
                 <div 
                  className={`absolute inset-0 bg-cover bg-center opacity-60 transition-opacity duration-500 ${
                    activeTab === 'brands' 
                      ? "bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop')]" 
                      : "bg-[url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop')]"
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

