"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    id: "creative-design",
    title: "Creative & Design",
    desc: "Eye-catching designs that perform and tell your brand's unique story.",
    items: [
      "Ad Creative - High-performing assets for paid social",
      "Social Media Creative - Engaging assets for all platforms",
      "Presentation Design - Captivating slides that tell your story",
      "Illustration Design - Visual storytelling for your brand",
      "Branding Services - Expertise & custom design services",
      "eBooks & Report Design - Your digital content supercharged",
      "Print Design - Tangible designs that leave a lasting impression",
      "Packaging & Merchandise - Bring your brand to life"
    ]
  },
  {
    id: "production",
    title: "Specialized Production",
    desc: "Effortless video production and immersive experiences at scale.",
    items: [
      "Video Production - Scale your video output effortlessly",
      "Motion Design - For websites, ads, and presentations",
      "Immersive Design - Innovative solutions for 3D/AR",
      "Product Staging - High-quality staging for ecommerce",
      "Realistic AI Ads - Next-gen production for modern brands"
    ]
  },
  {
    id: "digital",
    title: "Digital & Web",
    desc: "Stunning digital experiences built to engage and convert.",
    items: [
      "Web Design - Stunning websites and landing pages",
      "Design Systems - Robust systems driving visual consistency",
      "Product Design - Engaging & intuitive experiences",
      "Email Creation - Click-worthy emails that drive engagement",
      "Copywriting - Persuasive words for clarity and action"
    ]
  },
  {
    id: "automation",
    title: "Workflow & Campaign Automation",
    desc: "Streamline production and scale campaigns without compromising craft.",
    items: [
      "Workflow Automation - Efficient pipelines for creative production",
      "Campaign Automation - Scale launches and multi-channel execution",
      "Creative Pipelines - Move fast without compromising quality"
    ]
  },
  {
    id: "strategy",
    title: "Strategy",
    desc: "Grow your brand with expert consultants and multi-market campaigns.",
    items: [
      "Marketing Strategy - Comprehensive growth roadmaps",
      "Campaign Strategy - Messaging and concept for multi-market campaigns",
      "Concept Creation - Big ideas crafted for maximum impact"
    ]
  },
  {
    id: "soundtrack",
    title: "Soundtrack & Scoring",
    desc: "Copyright-free soundtracks and scoring for ads and digital content. An optional add-on for brands and creators—no licensing worries.",
    items: [
      "Ad Soundtracks - Tailored scoring for campaigns and spots",
      "Sound Design - Immersive audio for digital content",
      "Soundtrack Library - Copyright-free tracks for ads and creators"
    ]
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    sectionsRef.current.forEach((section, i) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <main className="pt-40 pb-20 bg-charcoal min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-6 mb-24">
        <TextReveal as="h1" className="text-5xl md:text-8xl font-serif text-white uppercase tracking-widest mb-6">
          Our <span className="text-crimson">Services</span>
        </TextReveal>
        <p className="text-neutral-400 max-w-2xl font-sans text-lg">
          We provide a comprehensive suite of creative and marketing services designed to scale your brand across every channel.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="space-y-16 md:space-y-32">
          {serviceCategories.map((category, i) => (
            <div 
              key={category.id}
              ref={(el) => { sectionsRef.current[i] = el; }}
              className="border-t border-white/10 pt-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                  <h2 className="text-3xl md:text-4xl font-serif text-white uppercase mb-4">{category.title}</h2>
                  <p className="text-dusty-rose font-sans text-sm">{category.desc}</p>
                </div>
                <div className="md:col-span-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {category.items.map((item, idx) => {
                      const [title, desc] = item.split(" - ");
                      return (
                        <li key={idx} className="glass-panel-dark p-8 rounded-xl border border-white/5 hover:border-dusty-rose/30 transition-colors group">
                          <h3 className="text-white font-serif text-xl mb-3 group-hover:text-crimson transition-colors">{title}</h3>
                          {desc && <p className="text-neutral-400 font-sans text-sm leading-relaxed">{desc}</p>}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cannabis Disclaimer */}
        <div className="mt-32 p-8 glass-panel-dark border border-white/5 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest leading-relaxed">
            Clients are responsible for compliance with local regulations and platform policies. We build creative and strategies designed for compliant execution.
          </p>
        </div>
      </div>
    </main>
  );
}
