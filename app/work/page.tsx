"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { TextReveal } from "@/components/animations/TextReveal";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Fashion", "Cannabis", "Home Goods", "Jewelry", "Automotive"];

const portfolio = [
  { id: 1, title: "Luxury Apparel Launch", category: "Fashion", tags: ["Creative System", "Paid Social"], img: "/download (1).png" },
  { id: 2, title: "Cannabis Dispensary Growth", category: "Cannabis", tags: ["Local Promos", "OOH"], img: "/download (2).png" },
  { id: 3, title: "Artisan Candle Studio", category: "Home Goods", tags: ["Branding", "Ecommerce CRO"], img: "/download (3).png" },
  { id: 4, title: "Boutique Jewelry", category: "Jewelry", tags: ["UGC Ads", "Email/SMS"], img: "/download (4).png" },
  { id: 5, title: "Winter Collection", category: "Fashion", tags: ["Video Production", "Web Design"], img: "/download (5).png" },
  { id: 6, title: "Modern Dealership", category: "Automotive", tags: ["AI Ads", "Lead Gen"], img: "/download (6).png" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null);
  
  const filteredPortfolio = activeCategory === "All" 
    ? portfolio 
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <main className="pt-40 pb-20 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 mb-16">
        <TextReveal as="h1" className="text-5xl md:text-8xl font-serif text-white uppercase tracking-widest mb-6">
          Selected <span className="text-crimson">Work</span>
        </TextReveal>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-sans tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-crimson text-white border-crimson border" 
                  : "border border-white/20 text-white hover:border-dusty-rose hover:text-dusty-rose"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPortfolio.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-cream-dark mb-4">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-dusty-rose font-sans text-xs uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-cream-dark border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-crimson hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:min-h-[600px]">
                <Image
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-dusty-rose font-sans text-sm uppercase tracking-widest mb-4">{selectedProject.category}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-crimson/10 border border-crimson/20 text-white rounded-full text-xs font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6 text-neutral-400 font-sans leading-relaxed">
                  <p>
                    {/* TODO: Add real case study content */}
                    This is a placeholder for the project case study. Here we will detail the challenge, the strategy implemented, and the creative solutions delivered to achieve the brand's goals.
                  </p>
                  <p>
                    Our approach focused on building a consistent visual language that scales seamlessly across paid social, email marketing, and onsite experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
