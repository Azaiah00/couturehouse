"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";

// Mock ad portfolio data - replace with actual examples
const adPortfolio = [
  {
    id: 1,
    title: "Luxury Fashion Campaign",
    category: "Editorial",
    thumbnail: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2673&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "High-end fashion editorial featuring our elite models",
    brand: "Premium Label",
  },
  {
    id: 2,
    title: "Streetwear Collection",
    category: "Lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "Urban streetwear campaign with authentic model representation",
    brand: "Urban Edge",
  },
  {
    id: 3,
    title: "Beauty Product Launch",
    category: "Beauty",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "Glamorous beauty campaign showcasing product details",
    brand: "Glamour Cosmetics",
  },
  {
    id: 4,
    title: "Luxury Accessories",
    category: "Accessories",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "Elegant accessories styled on our exclusive models",
    brand: "Elite Accessories",
  },
  {
    id: 5,
    title: "Summer Collection",
    category: "Seasonal",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-b8b941837303?q=80&w=2532&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "Vibrant summer collection with lifestyle imagery",
    brand: "Coastal Fashion",
  },
  {
    id: 6,
    title: "Evening Wear",
    category: "Formal",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
    video: "/hero-video.mp4",
    description: "Sophisticated evening wear campaign",
    brand: "Black Tie Collection",
  },
];

export default function AdCenterPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t("adCenter.all"));
  
  const categories = [t("adCenter.all"), "Editorial", "Lifestyle", "Beauty", "Accessories", "Seasonal", "Formal"];
  const [selectedAd, setSelectedAd] = useState<typeof adPortfolio[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const filteredAds = selectedCategory === t("adCenter.all") 
    ? adPortfolio 
    : adPortfolio.filter(ad => ad.category === selectedCategory);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (selectedAd && videoRef.current) {
      videoRef.current.load();
    }
  }, [selectedAd]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Video */}
      <motion.section 
        style={{ opacity }}
        className="relative min-h-screen w-full flex items-center justify-center pt-16 md:pt-20"
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-contain"
            loop
            muted={isMuted}
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <Sparkles className="w-12 h-12 text-rose-gold" />
              </motion.div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                  <span className="block">Ad</span>
                  <span className="text-rose-gold italic block">Center</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-lg font-light leading-relaxed">
                  {t("adCenter.subtitle")}
                </p>
              </div>
              
              {/* Video Controls */}
              <div className="flex items-center gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlayPause}
                  className="w-14 h-14 rounded-full bg-rose-gold/90 hover:bg-rose-gold flex items-center justify-center text-black transition-all shadow-lg shadow-rose-gold/50"
                >
                  {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMute}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all backdrop-blur-sm border border-white/20"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </motion.button>
                <span className="text-sm text-neutral-400 ml-2">
                  {isPlaying ? "Playing" : "Paused"}
                </span>
              </div>
            </motion.div>

            {/* Right Side - Video Area (spacer for visual balance) */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-rose-gold rotate-90" />
        </motion.div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              {t("adCenter.portfolio").split(" ")[0]} <span className="text-rose-gold">{t("adCenter.portfolio").split(" ")[1]}</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl">
              {t("adCenter.portfolioDesc")}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-rose-gold text-black"
                    : "bg-neutral-900 text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Ad Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAds.map((ad, index) => (
                <motion.div
                  key={ad.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedAd(ad)}
                  className="group relative aspect-[16/9] bg-neutral-900 rounded-lg overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={ad.thumbnail}
                      alt={ad.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 0px rgba(183, 110, 121, 0.5)",
                          "0 0 30px rgba(183, 110, 121, 0.8)",
                          "0 0 0px rgba(183, 110, 121, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 rounded-full bg-rose-gold/90 flex items-center justify-center backdrop-blur-sm"
                    >
                      <Play size={32} className="text-black ml-1" />
                    </motion.div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.div>

                  {/* Info Overlay */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="text-lg font-bold mb-1">{ad.title}</h3>
                    <p className="text-sm text-neutral-400 mb-2">{ad.brand}</p>
                    <p className="text-xs text-neutral-500 mb-3 line-clamp-2">{ad.description}</p>
                    <motion.span 
                      className="inline-block px-3 py-1 text-xs bg-rose-gold/20 text-rose-gold rounded-full border border-rose-gold/30"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(183, 110, 121, 0.3)" }}
                    >
                      {ad.category}
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl"
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${(i * 20) % 100}%`,
                top: `${(i * 15) % 100}%`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Ready to Create <span className="text-rose-gold">Cinematic Ads</span>?
            </h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Add premium video ad production to your package or purchase as a standalone service
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900 border border-rose-gold/30 rounded-xl p-8"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">{t("adCenter.included")}</h3>
                <p className="text-neutral-400 mb-6">{t("adCenter.includedDesc")}</p>
                <p className="text-3xl font-bold text-rose-gold mb-2">Free</p>
                <p className="text-sm text-neutral-500">With qualifying orders</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-rose-gold/20 to-rose-gold/10 border-2 border-rose-gold rounded-xl p-8 relative"
              >
                <div className="absolute top-4 right-4 bg-rose-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{t("adCenter.addOn")}</h3>
                <p className="text-neutral-300 mb-6">{t("adCenter.addOnDesc")}</p>
                <p className="text-3xl font-bold text-rose-gold mb-2">$299</p>
                <p className="text-sm text-neutral-400">Per video ad</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900 border border-rose-gold/30 rounded-xl p-8"
              >
                <h3 className="text-2xl font-serif font-bold mb-4">{t("adCenter.standalone")}</h3>
                <p className="text-neutral-400 mb-6">{t("adCenter.standaloneDesc")}</p>
                <p className="text-3xl font-bold text-rose-gold mb-2">$499</p>
                <p className="text-sm text-neutral-500">Per video ad</p>
              </motion.div>
            </div>

            <Link href="/contact">
              <Button variant="luxury" size="lg" className="bg-rose-gold hover:bg-rose-gold-dark">
                {t("adCenter.getStarted")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedAd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedAd(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden"
            >
              <video
                src={selectedAd.video}
                controls
                autoPlay
                className="w-full h-full"
              />
              <button
                onClick={() => setSelectedAd(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

