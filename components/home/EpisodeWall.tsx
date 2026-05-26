"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const episodes = [
  { src: "/work/sacrificial-conversations/01-monica.webp", title: "Monica — Host", line: "Her Story, Her Strength" },
  { src: "/work/sacrificial-conversations/02-tenisha.webp", title: "Tenisha — Guest", line: "Sharing Her Story" },
  { src: "/work/sacrificial-conversations/03-thea.webp", title: "Thea — All Women Edition", line: "Sisterhood & Survival" },
  { src: "/work/sacrificial-conversations/04-blessing-pressing.webp", title: "Blessing in the Pressing", line: "Donnie & Darryl's Joy Boyz" },
  { src: "/work/sacrificial-conversations/05-joy-boyz.webp", title: "The Unstoppable Joy Boyz", line: "From 1982 to today" },
];

export function EpisodeWall() {
  const reduced = useReducedMotion();
  return (
    <section className="bg-charcoal-light py-32 md:py-48 border-t border-line site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">Episodes In Rotation</span>
            <TextReveal
              as="h2"
              className="display-heading text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95]"
            >
              The stories<br />we put on air.
            </TextReveal>
            <p className="text-white/55 max-w-xl mt-8 font-sans text-base md:text-lg leading-relaxed">
              Selected episode art from Sacrificial Conversations &mdash; one poster system,
              one show identity, every guest framed with the same gilded reverence.
            </p>
          </div>
          <Link
            href="/work/sacrificial-conversations"
            className="group inline-flex items-center gap-3 text-white/70 hover:text-white text-xs uppercase tracking-[0.22em] font-sans transition-colors"
          >
            Inside the Show
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {episodes.map((e, i) => (
            <motion.div
              key={e.src}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3/5] bg-surface overflow-hidden cursor-pointer"
            >
              <Image
                src={e.src}
                alt={e.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs md:text-sm uppercase tracking-[0.18em] font-sans leading-tight">
                  {e.title}
                </p>
                <p className="text-white/65 font-sans text-[11px] mt-1">{e.line}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
