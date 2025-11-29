"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

// Mock Data
const models = [
  {
    id: 1,
    name: "Elena V.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    followers: "125K",
    category: "Editorial",
    height: "5'10\"",
    location: "New York",
    bio: "Elena specializes in high-fashion editorial work with a focus on luxury aesthetics. Her unique look has graced digital campaigns for top European houses.",
    gallery: [
       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Marcus J.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
    followers: "85K",
    category: "Streetwear",
    height: "6'1\"",
    location: "Los Angeles",
    bio: "Marcus brings a raw, urban energy to digital campaigns. Perfect for streetwear and lifestyle brands looking for authentic representation.",
    gallery: [
       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=2576&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Sophia L.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
    followers: "250K",
    category: "Beauty",
    height: "5'9\"",
    location: "London",
    bio: "With flawless features perfect for beauty close-ups, Sophia is the top choice for cosmetics and skincare brands entering the digital space.",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    name: "Kai R.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    followers: "45K",
    category: "Editorial",
    height: "6'0\"",
    location: "Berlin",
    bio: "Kai's sharp features and versatile look make him ideal for avant-garde fashion and modern luxury campaigns.",
    gallery: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Amara K.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
    followers: "180K",
    category: "Lifestyle",
    height: "5'8\"",
    location: "Miami",
    bio: "Amara radiates warmth and approachability. Her lifestyle-focused content converts highly for consumer brands.",
    gallery: [
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    name: "David C.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    followers: "95K",
    category: "Commercial",
    height: "6'2\"",
    location: "Toronto",
    bio: "David is the quintessential commercial model. Reliable, versatile, and classic.",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
    ]
  }
];

const categories = ["All", "Editorial", "Streetwear", "Beauty", "Lifestyle", "Commercial"];

export default function ModelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  const filteredModels = activeCategory === "All" 
    ? models 
    : models.filter(model => model.category === activeCategory);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="container mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
          Exclusive Roster
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto mb-10">
          Discover the faces that will define your next campaign.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
      <section className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                     <span className="text-gold font-medium">{model.followers}</span>
                   </div>
                   <p className="text-white/80 text-sm uppercase tracking-wider">{model.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredModels.length === 0 && (
          <div className="text-center py-20 text-neutral-400">
            <p>No models found in this category.</p>
          </div>
        )}
      </section>

      {/* Model Modal */}
      <Modal isOpen={!!selectedModel} onClose={() => setSelectedModel(null)}>
        {selectedModel && (
          <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[600px]">
            <div className="relative h-[300px] md:h-auto bg-neutral-100">
              <Image
                src={selectedModel.image}
                alt={selectedModel.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-4xl font-serif font-bold mb-2">{selectedModel.name}</h2>
                <div className="flex items-center gap-4 text-neutral-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Instagram size={18} />
                    {selectedModel.followers} Followers
                  </span>
                  <span>•</span>
                  <span>{selectedModel.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">Category</span>
                    <span className="font-medium">{selectedModel.category}</span>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <span className="block text-neutral-400 text-xs uppercase">Height</span>
                    <span className="font-medium">{selectedModel.height}</span>
                  </div>
                </div>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {selectedModel.bio}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <Button variant="luxury" className="w-full">
                  Partner with {selectedModel.name}
                </Button>
                <Button variant="outline" onClick={() => setSelectedModel(null)}>
                  Close Profile
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

