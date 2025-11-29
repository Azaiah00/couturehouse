import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-widest uppercase">
              Couture<span className="text-rose-gold">House</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              The premier luxury modeling agency bridging high-fashion brands with elite digital talent. Where fashion meets influence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">Services</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link href="/for-brands" className="hover:text-white transition-colors">For Brands</Link></li>
              <li><Link href="/for-models" className="hover:text-white transition-colors">For Models</Link></li>
              <li><Link href="/models" className="hover:text-white transition-colors">Model Board</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">Company</h3>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif mb-6 text-rose-gold">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-neutral-500 text-xs">
              New York • Paris • Milan • London
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Couture House Co. All rights reserved.</p>
          <p>Designed for Luxury.</p>
        </div>
      </div>
    </footer>
  );
}

