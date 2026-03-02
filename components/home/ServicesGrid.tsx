"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Creative & Design",
    desc: "Ad creative, branding, illustration, and design systems.",
    sub: ["Ad Creative", "Social Media", "Branding", "Print & Packaging", "Presentations"]
  },
  {
    title: "Production",
    desc: "Video production, motion design, and AI-generated staging.",
    sub: ["Video Production", "Motion Design", "Animated Videos", "AI Ads", "Product Staging"]
  },
  {
    title: "Digital",
    desc: "Web design, email creation, and persuasive copywriting.",
    sub: ["Web Design", "Email Campaigns", "Product Design", "Copywriting", "Landing Pages"]
  },
  {
    title: "Workflow & Campaign Automation",
    desc: "Streamline production and scale campaigns without compromising craft.",
    sub: ["Workflow Automation", "Campaign Automation", "Creative Pipelines"]
  },
  {
    title: "Strategy",
    desc: "Marketing and campaign strategy for multi-market growth.",
    sub: ["Marketing Strategy", "Campaign Strategy", "Concept Creation"]
  },
  {
    title: "Soundtrack & Scoring",
    desc: "Copyright-free tracks for ads and content—an add-on for brands and creators.",
    sub: ["Ad Soundtracks", "Sound Design", "Scoring", "Soundtrack Library"]
  }
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-charcoal-light relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <TextReveal as="h2" className="text-4xl md:text-6xl font-serif text-white uppercase">
            Capabilities
          </TextReveal>
          <Link href="/services" className="group flex items-center gap-2 text-crimson hover:text-white transition-colors uppercase tracking-widest text-sm font-sans">
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <div 
              key={srv.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group glass-panel-dark p-8 rounded-xl border border-white/5 hover:border-dusty-rose/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-dusty-rose/5 to-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-dusty-rose transition-colors">{srv.title}</h3>
                <p className="text-neutral-400 font-sans text-sm mb-6 h-10">{srv.desc}</p>
                
                <div className="space-y-2 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <div className="pt-4 border-t border-white/10">
                    {srv.sub.map((s, idx) => (
                      <p key={idx} className="text-xs font-sans text-neutral-300 py-1 flex items-center gap-2">
                        <span className={`w-1 h-1 ${idx % 2 === 0 ? 'bg-crimson' : 'bg-rose-gold'} rounded-full`} />
                        {s}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
