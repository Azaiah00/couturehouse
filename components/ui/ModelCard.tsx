"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

interface ModelCardProps {
  name: string;
  image: string;
  followers: string;
  tags: string[];
}

export function ModelCard({ name, image, followers, tags }: ModelCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden bg-neutral-100 aspect-[3/4] cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-2xl font-serif text-white">{name}</h3>
          <div className="flex items-center gap-2 text-rose-gold">
            <Instagram size={16} />
            <span className="text-sm font-medium">{followers}</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-white/80 uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

