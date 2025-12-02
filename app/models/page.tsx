"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/lib/i18n/context";

// Models Data
const models = [
  {
    id: 1,
    name: "Kendal",
    image: "/kendal-profile.PNG",
    followers: "In-House Model",
    category: "Editorial",
    height: "5'10\"",
    location: "New York",
    bio: "Kendal is our exclusive in-house model, specializing in high-fashion editorial work with a focus on luxury aesthetics. Her versatile look has graced digital campaigns for premium brands.",
    gallery: [
       "/kendal-profile.PNG"
    ]
  },
  {
    id: 2,
    name: "Valentina",
    image: "/new-valentina-profile.png",
    followers: "14.7K",
    category: "Fashion",
    height: "5'6\"",
    location: "Colombia",
    bio: "Valentina brings elegance and sophistication to every campaign. With 14.7K engaged followers, she's perfect for fashion and lifestyle brands looking for authentic, high-quality representation.",
    gallery: [
      "/new-valentina-profile.png"
    ]
  },
  {
    id: 3,
    name: "Ally",
    image: "/ally-profile.png",
    followers: "In-House Model",
    category: "Fashion",
    height: "5'6\"",
    location: "Colombia",
    bio: "Ally brings fresh energy and versatility to our model board. Her dynamic presence and authentic style make her perfect for fashion campaigns seeking contemporary elegance.",
    gallery: [
      "/ally-profile.png"
    ]
  },
  {
    id: 4,
    name: "Dahiana",
    image: "/dahiana-profile.PNG",
    followers: "In-House Model",
    category: "Editorial",
    height: "5'7\"",
    location: "Colombia",
    bio: "Dahiana combines grace and sophistication with a modern edge. Her editorial versatility and commanding presence make her ideal for luxury fashion and high-end brand campaigns.",
    gallery: [
      "/dahiana-profile.PNG"
    ]
  }
];

export default function ModelsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t("models.all"));
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  const categories = [t("models.all"), "Editorial", "Fashion", "Lifestyle"];

  // Show all models in all categories until we have more models
  const filteredModels = models;

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6">
          {t("models.title")}
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto mb-6 sm:mb-10 px-4">
          {t("models.description")}
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-charcoal text-white shadow-lg scale-105"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 sm:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredModels.map((model) => (
              <motion.div
                layout
                key={model.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedModel(model)}
                className="group relative aspect-[3/4] bg-neutral-200 cursor-pointer overflow-hidden rounded-sm"
              >
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="flex justify-between items-end mb-1">
                     <h3 className="text-2xl font-serif text-white">{model.name}</h3>
                     <span className="text-rose-gold font-medium">{model.followers}</span>
                   </div>
                   <p className="text-white/80 text-sm uppercase tracking-wider">{model.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredModels.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <p>{t("models.noModels")}</p>
          </div>
        )}
      </section>

      {/* Model Modal */}
      <Modal isOpen={!!selectedModel} onClose={() => setSelectedModel(null)}>
        {selectedModel && (
          <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
            <div className="relative h-[250px] sm:h-[300px] md:h-auto bg-neutral-100">
              <Image
                src={selectedModel.image}
                alt={selectedModel.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold mb-2">{selectedModel.name}</h2>
                <div className="flex items-center gap-4 text-neutral-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Instagram size={18} />
                    {selectedModel.followers} {t("models.followers")}
                  </span>
                  <span>•</span>
                  <span>{selectedModel.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">{t("models.category")}</span>
                    <span className="font-medium">{selectedModel.category}</span>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">{t("models.height")}</span>
                    <span className="font-medium">{selectedModel.height}</span>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {selectedModel.bio}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <Button variant="luxury" className="w-full">
                  {t("models.partnerWith")} {selectedModel.name}
                </Button>
                <Button variant="outline" onClick={() => setSelectedModel(null)}>
                  {t("models.closeProfile")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

