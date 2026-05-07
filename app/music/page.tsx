"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

// Placeholder tracks — replace with real catalog metadata + audio sources.
const tracks = [
  { id: 1, title: "Midnight Drive", category: "Cinematic", duration: "2:45" },
  { id: 2, title: "Summer Breeze", category: "Upbeat", duration: "1:30" },
  { id: 3, title: "Urban Pulse", category: "Hip Hop / Trap", duration: "3:15" },
  { id: 4, title: "Ethereal Voices", category: "Ambient", duration: "4:00" },
  { id: 5, title: "Neon Lights", category: "Synthwave", duration: "2:20" },
  { id: 6, title: "Studio Hours", category: "Corporate", duration: "1:50" },
];

export default function MusicPage() {
  const reduced = useReducedMotion();
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);

  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-4xl mb-12 md:mb-20">
          <span className="eyebrow mb-6 block">Sound &amp; Score</span>
          <TextReveal
            as="h1"
            className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]"
          >
            Original sound.<br />License-free.
          </TextReveal>
          <p className="text-white/65 max-w-2xl mt-8 font-sans text-base md:text-lg leading-relaxed">
            Original soundtracks and scoring built for ads, content and brand films.
            Use them across your campaigns &mdash; without licensing friction.
          </p>
        </div>

        <div
          className="w-full h-32 md:h-48 border border-line p-6 flex items-end justify-center gap-1 md:gap-2 mb-12"
          aria-hidden="true"
        >
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="w-2 md:w-3 lg:w-4 bg-white/40"
              initial={{ height: "10%" }}
              animate={
                reduced
                  ? { height: "20%" }
                  : playingId !== null
                  ? { height: ["12%", `${20 + ((i * 17) % 70)}%`, "12%"] }
                  : { height: "10%" }
              }
              transition={
                reduced || playingId === null
                  ? { duration: 0.4 }
                  : {
                      duration: 0.5 + ((i * 7) % 80) / 200,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: ((i * 13) % 100) / 250,
                    }
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center mb-6 border-t border-line pt-8">
          <h2 className="eyebrow">Tracks</h2>
          <button
            onClick={() => setMuted(!muted)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        <ul className="divide-y divide-line border-t border-line">
          {tracks.map((track) => {
            const playing = playingId === track.id;
            return (
              <li
                key={track.id}
                className="grid grid-cols-12 gap-4 items-center py-5 group"
              >
                <button
                  onClick={() => setPlayingId(playing ? null : track.id)}
                  aria-label={playing ? "Pause" : "Play"}
                  className="col-span-2 md:col-span-1 w-10 h-10 border border-white/20 group-hover:border-white/60 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
                </button>
                <div className="col-span-7 md:col-span-7">
                  <p className="text-white text-base md:text-lg uppercase tracking-tight leading-tight">
                    {track.title}
                  </p>
                </div>
                <p className="col-span-2 md:col-span-3 text-white/50 font-sans text-xs md:text-sm uppercase tracking-[0.18em]">
                  {track.category}
                </p>
                <p className="col-span-1 md:col-span-1 text-white/50 font-sans text-xs md:text-sm text-right tabular-nums">
                  {track.duration}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
