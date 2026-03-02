"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                COUTURE HOUSE <span className="text-crimson text-sm align-top">CO.</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-sans">
              Creative studio for brands that demand more. We build immersive digital experiences, high-converting campaigns, and memorable content.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-sans font-semibold mb-6 text-neutral-500 uppercase tracking-widest">Explore</h3>
            <ul className="space-y-4 font-sans text-neutral-300">
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Services</Link></li>
              <li><Link href="/work" className="hover:text-rose-gold transition-colors">Work</Link></li>
              <li><Link href="/music" className="hover:text-rose-gold transition-colors">Ad Soundtracks</Link></li>
              <li><Link href="/contact" className="hover:text-rose-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-sans font-semibold mb-6 text-neutral-500 uppercase tracking-widest">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-2 text-neutral-500 text-xs font-sans">
              <p>New York • Paris</p>
              <p>Milan • London • Colombia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Couture House Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
