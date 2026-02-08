"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/lib/i18n/context";
import { SectionReveal } from "@/components/animations/SectionReveal";

// Industries/Work Data
const workProjects = [
  {
    id: 1,
    name: "Luxury Apparel",
    image: "/download (1).png",
    followers: "Creative System",
    category: "Fashion",
    height: "Omnichannel",
    location: "Campaign",
    bio: "A comprehensive creative system for a luxury apparel house. We developed a consistent visual language across paid social, email, and their Shopify storefront, resulting in a cohesive brand presence that defines premium retail.",
    gallery: [
       "/download (1).png",
       "/download (2).png"
    ]
  },
  {
    id: 2,
    name: "Cannabis Dispensary",
    image: "/download (3).png",
    followers: "Growth Strategy",
    category: "Cannabis",
    height: "Local + Digital",
    location: "Performance",
    bio: "Developing compliant marketing strategies and creative assets for a multi-state dispensary brand. Our focus was on localized growth promos and conversion-driven creative that stays within platform policies.",
    gallery: [
      "/download (3).png",
      "/download (4).png"
    ]
  },
  {
    id: 3,
    name: "Home Goods Studio",
    image: "/download (5).png",
    followers: "Ecommerce CRO",
    category: "Home Goods",
    height: "Storefront",
    location: "Optimization",
    bio: "End-to-end ecommerce optimization for a premium home fragrance brand. From product page polish to high-converting email flows, we built a system that turns traffic into loyal customers.",
    gallery: [
      "/download (5).png",
      "/download (6).png"
    ]
  },
  {
    id: 4,
    name: "Jewelry Boutique",
    image: "/download (7).png",
    followers: "Paid Media Creative",
    category: "Jewelry",
    height: "UGC + Motion",
    location: "Campaign",
    bio: "High-end jewelry creative built for performance testing. We produced a library of video and static assets designed to scale across Meta and TikTok, focusing on luxury aesthetics and high engagement.",
    gallery: [
      "/download (7).png",
      "/download (8).png"
    ]
  }
];

export default function ModelsPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t("models.all"));
  const [selectedProject, setSelectedProject] = useState<typeof workProjects[0] | null>(null);

  const categories = [t("models.all"), "Fashion", "Cannabis", "Home Goods", "Jewelry"];

  const filteredProjects = activeCategory === t("models.all") 
    ? workProjects 
    : workProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-24 min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        <SectionReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4 sm:mb-6">
            {t("models.title")}
          </h1>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto mb-6 sm:mb-10 px-4">
            {t("models.description")}
          </p>
        </SectionReveal>
        
        {/* Filters */}
        <SectionReveal delay={0.2}>
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
        </SectionReveal>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 sm:px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-[3/4] bg-neutral-200 cursor-pointer overflow-hidden rounded-sm"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                   <div className="flex justify-between items-end mb-1">
                     <h3 className="text-2xl font-serif text-white">{project.name}</h3>
                     <span className="text-rose-gold font-medium">{project.followers}</span>
                   </div>
                   <p className="text-white/80 text-sm uppercase tracking-wider">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <p>{t("models.noModels")}</p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
            <div className="relative h-[250px] sm:h-[300px] md:h-auto bg-neutral-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold mb-2">{selectedProject.name}</h2>
                <div className="flex items-center gap-4 text-neutral-500 mb-6">
                  <span className="flex items-center gap-1">
                    {selectedProject.followers}
                  </span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">{t("models.category")}</span>
                    <span className="font-medium">{selectedProject.category}</span>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">{t("models.height")}</span>
                    <span className="font-medium">{selectedProject.height}</span>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {selectedProject.bio}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <Link href="/contact" className="w-full">
                  <Button variant="luxury" className="w-full">
                    {t("nav.contact")}
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
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
