"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white pt-24 pb-10 border-t border-line site-inset relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-20 md:mb-32">
          <h3 className="display-heading text-white text-[clamp(2.5rem,10vw,10rem)] leading-[0.9]">
            Couture<br />House.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-20">
          <div className="col-span-2 max-w-md">
            <p className="text-white/60 font-sans text-sm leading-relaxed">
              A digital creative platform for ambitious brands.
              Strategy, design, production and performance — built to compound.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-6">Studio</h4>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/music" className="hover:text-white transition-colors">Sound</Link></li>
              <li><Link href="/models" className="hover:text-white transition-colors">Talent</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6">Connect</h4>
            <ul className="space-y-3 font-sans text-sm text-white/70">
              <li>
                <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="mailto:hello@couturehouse.co" className="hover:text-white transition-colors">hello@couturehouse.co</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-sans uppercase tracking-[0.22em] text-white/45">
          <p>&copy; {year} Couture House Co.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>New York</span>
            <span>Paris</span>
            <span>Milan</span>
            <span>London</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
