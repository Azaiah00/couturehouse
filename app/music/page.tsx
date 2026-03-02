"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextReveal } from "@/components/animations/TextReveal";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// Placeholder tracks
const tracks = [
  { id: 1, title: "Midnight Drive", category: "Cinematic", duration: "2:45" },
  { id: 2, title: "Summer Breeze", category: "Upbeat", duration: "1:30" },
  { id: 3, title: "Urban Pulse", category: "Hip Hop / Trap", duration: "3:15" },
  { id: 4, title: "Ethereal Voices", category: "Ambient", duration: "4:00" },
  { id: 5, title: "Neon Lights", category: "Synthwave", duration: "2:20" },
  { id: 6, title: "Corporate Success", category: "Corporate", duration: "1:50" },
];

export default function MusicPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const colors = ['bg-rose-gold', 'bg-crimson', 'bg-dusty-rose'];

  useEffect(() => {
    if (playingId) {
      // Animate bars when playing
      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.to(bar, {
          height: () => 10 + Math.random() * 90 + "%",
          duration: 0.1 + Math.random() * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    } else {
      // Stop animation
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        gsap.killTweensOf(bar);
        gsap.to(bar, { height: "10%", duration: 0.5 });
      });
    }
  }, [playingId]);

  const togglePlay = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // TODO: Actual Web Audio API integration would go here
    }
  };

  return (
    <main className="pt-40 pb-20 bg-charcoal min-h-screen">
      <div className="container mx-auto px-6 mb-16">
        <TextReveal as="h1" className="text-5xl md:text-8xl font-serif text-white uppercase tracking-widest mb-6">
          Ad <span className="text-rose-gold">Soundtracks</span>
        </TextReveal>
        <p className="text-neutral-400 max-w-2xl font-sans text-lg">
          Copyright-free soundtracks and scoring for ads and digital content. An optional add-on for brands and creators—use in your campaigns without licensing worries.
        </p>
      </div>

      {/* Global Visualizer */}
      <div className="container mx-auto px-6 mb-12">
        <div className="w-full h-32 md:h-48 glass-panel-dark rounded-xl border border-white/5 p-6 flex items-end justify-center gap-1 md:gap-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              ref={(el) => { barsRef.current[i] = el; }}
              className={`w-2 md:w-3 lg:w-4 ${colors[i % 3]} rounded-t-sm`}
              style={{ height: "10%" }}
            />
          ))}
        </div>
      </div>

      {/* Track List */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-serif text-white uppercase tracking-widest">Soundtracks</h2>
          <button 
            onClick={() => setMuted(!muted)}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        <div className="space-y-4">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className={`group flex items-center justify-between p-4 md:p-6 rounded-xl border transition-all duration-300 ${
                playingId === track.id 
                  ? "bg-crimson/10 border-crimson/50" 
                  : "glass-panel border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => togglePlay(track.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    playingId === track.id
                      ? "bg-crimson text-white"
                      : "bg-white/10 text-white hover:bg-white hover:text-charcoal"
                  }`}
                >
                  {playingId === track.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-1" />
                  )}
                </button>
                <div>
                  <h3 className="text-white font-sans font-medium text-lg">{track.title}</h3>
                  <p className="text-dusty-rose font-sans text-xs uppercase tracking-widest mt-1">{track.category}</p>
                </div>
              </div>
              <div className="text-neutral-500 font-sans text-sm">
                {track.duration}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-500 font-sans text-sm">
            Need something specific? <a href="/contact" className="text-rose-gold hover:underline">Request custom scoring</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
