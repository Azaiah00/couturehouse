"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";

const serviceCategories = [
  {
    id: "creative-design",
    title: "Creative & Design",
    desc: "Eye-catching design that performs and tells your brand's story.",
    items: [
      "Ad Creative — High-performing assets for paid social",
      "Social Media Creative — Engaging assets for every platform",
      "Presentation Design — Captivating slides that tell your story",
      "Illustration — Visual storytelling for your brand",
      "Branding — Identity and design systems",
      "Editorial — Reports, eBooks, lookbooks",
      "Print — Tangible work that lasts",
      "Packaging & Merchandise — Bring the brand into the world",
    ],
  },
  {
    id: "production",
    title: "Specialized Production",
    desc: "Effortless video production and immersive experiences at scale.",
    items: [
      "Video Production — Scale your video output",
      "Motion Design — For ads, web, and presentations",
      "Immersive Design — 3D and AR-ready experiences",
      "Product Staging — Studio-grade ecommerce imagery",
      "AI Production — Next-gen creative pipelines",
    ],
  },
  {
    id: "digital",
    title: "Digital & Web",
    desc: "Stunning digital experiences built to engage and convert.",
    items: [
      "Web Design — Sites and landing pages",
      "Design Systems — Consistency at scale",
      "Product Design — Engaging, intuitive interfaces",
      "Email — Click-worthy, deliverable, on-brand",
      "Copywriting — Words that convert",
    ],
  },
  {
    id: "automation",
    title: "Workflow & Campaign Automation",
    desc: "Streamline production and scale campaigns without compromising craft.",
    items: [
      "Workflow Automation — Efficient creative pipelines",
      "Campaign Automation — Multi-channel launches",
      "Creative Pipelines — Move fast without losing quality",
    ],
  },
  {
    id: "strategy",
    title: "Strategy",
    desc: "Brand and campaign strategy from launch to scale.",
    items: [
      "Marketing Strategy — Comprehensive growth roadmaps",
      "Campaign Strategy — Concepts and messaging that move",
      "Brand Positioning — Sharper, more defensible territory",
    ],
  },
  {
    id: "soundtrack",
    title: "Soundtrack & Scoring",
    desc: "Original soundtracks and scoring for ads and digital content. License-free for clients.",
    items: [
      "Ad Soundtracks — Tailored scoring for spots",
      "Sound Design — Immersive audio for digital content",
      "Soundtrack Library — Reusable across campaigns",
    ],
  },
];

export default function ServicesPage() {
  const reduced = useReducedMotion();

  return (
    <main className="bg-charcoal min-h-screen pt-32 md:pt-40 pb-20 site-inset">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-4xl mb-20 md:mb-32">
          <span className="eyebrow mb-6 block">What we do</span>
          <TextReveal
            as="h1"
            className="display-heading text-white text-[clamp(3rem,9vw,9rem)] leading-[0.92]"
          >
            One studio.<br />Every channel.
          </TextReveal>
          <p className="text-white/65 max-w-2xl mt-8 font-sans text-base md:text-lg leading-relaxed">
            A connected suite of services designed to scale your brand across every channel —
            strategy, creative, production, digital, performance and original sound.
          </p>
        </div>

        <div className="space-y-px bg-line">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-charcoal py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
            >
              <div className="md:col-span-1">
                <span className="text-white/40 font-sans text-sm tracking-[0.22em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h2 className="text-white text-3xl md:text-5xl uppercase tracking-tight leading-[0.95] mb-4">
                  {cat.title}
                </h2>
                <p className="text-white/55 font-sans text-sm md:text-base leading-relaxed max-w-md">
                  {cat.desc}
                </p>
              </div>
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {cat.items.map((item) => (
                  <p key={item} className="text-white/75 font-sans text-sm md:text-base">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
