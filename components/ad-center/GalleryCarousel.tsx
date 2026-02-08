"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  fallback: string;
};

// Up to 20 locally hosted images. Replace filenames with your uploads in /public/gallery.
const localGallery = [
  { src: "/download (1).png", alt: "Retail Creative Highlight 1" },
  { src: "/download (2).png", alt: "Retail Creative Highlight 2" },
  { src: "/download (3).png", alt: "Retail Creative Highlight 3" },
  { src: "/download (4).png", alt: "Retail Creative Highlight 4" },
  { src: "/download (5).png", alt: "Retail Creative Highlight 5" },
  { src: "/download (6).png", alt: "Retail Creative Highlight 6" },
  { src: "/download (7).png", alt: "Retail Creative Highlight 7" },
  { src: "/download (8).png", alt: "Retail Creative Highlight 8" },
  { src: "/download (9).png", alt: "Retail Creative Highlight 9" },
  { src: "/download (10).png", alt: "Retail Creative Highlight 10" },
];

// Gentle fallback set so the carousel always has visuals even before uploads land.
const fallbackPool = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-b8b941837303?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop",
];

function ImageWithFallback({ image }: { image: GalleryImage }) {
  const [src, setSrc] = useState(image.src);
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? image.fallback : src}
      alt={image.alt}
      fill
      sizes="(min-width: 1024px) 240px, 60vw"
      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      onError={() => {
        // If local asset is missing, fall back to a safe remote.
        if (!failed) {
          setFailed(true);
        }
      }}
      priority={false}
    />
  );
}

export function GalleryCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  const galleryImages = useMemo<GalleryImage[]>(() => {
    return localGallery.map((image, idx) => ({
      ...image,
      fallback: fallbackPool[idx % fallbackPool.length],
    }));
  }, []);

  // Duplicate images to achieve a seamless marquee loop.
  const loopImages = useMemo(
    () => [...galleryImages, ...galleryImages],
    [galleryImages]
  );

  return (
    <section className="relative bg-black py-14 sm:py-16 border-t border-white/10">
      <style jsx>{`
        @keyframes gallery-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-rose-gold mb-3">
            House Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3">
            Constantly Flowing Highlights
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg">
            A flowing highlights reel of our latest campaign creatives and retail marketing systems.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-black via-black/70 to-transparent" />

          <div
            className="group relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex items-stretch gap-6 sm:gap-8 py-6 px-4"
              style={{
                animation: `gallery-scroll 42s linear infinite`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {loopImages.map((image, idx) => (
                <div
                  key={`${image.src}-${idx}`}
                  className="relative min-w-[180px] sm:min-w-[220px] max-w-[260px] aspect-[4/5] overflow-hidden rounded-2xl bg-black/60 border border-white/10 shadow-lg shadow-black/30"
                >
                  <ImageWithFallback image={image} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





