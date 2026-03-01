"use client";

import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { TextReveal } from "@/components/animations/TextReveal";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <main className="pt-40 pb-20 bg-charcoal min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <TextReveal as="h1" className="text-5xl md:text-8xl font-serif text-white uppercase tracking-widest mb-6">
            Let's <span className="text-crimson">Connect</span>
          </TextReveal>
          <p className="text-neutral-400 max-w-2xl mx-auto font-sans text-lg">
            Ready to elevate your brand's digital presence? Tell us about your project and we'll be in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-white mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:hello@couturehouse.co" className="text-lg font-sans text-white hover:text-rose-gold transition-colors">
                      hello@couturehouse.co
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-sans uppercase tracking-widest mb-2">Offices</p>
                    <div className="space-y-2 text-white font-sans text-lg">
                      <p>New York</p>
                      <p>Paris</p>
                      <p>Milan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel-dark p-8 rounded-xl">
              <h4 className="text-xl font-serif text-white mb-4">Newsletter</h4>
              <p className="text-neutral-400 text-sm mb-6 font-sans">
                Insights on design, marketing, and the future of commerce.
              </p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-charcoal border border-white/10 rounded-md px-4 py-3 w-full text-white font-sans focus:outline-none focus:border-rose-gold transition-colors"
                />
                <button className="bg-white/10 text-white px-4 py-3 rounded-md hover:bg-white hover:text-charcoal transition-colors font-sans uppercase tracking-widest text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
