import Image from "./components/StaticImage";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer>
      <a className="footer-logo-link" href="/" aria-label="Couture House home"><Image src="/brand/footer-logo.png" alt="Couture House" width={267} height={244} sizes="224px" unoptimized /></a>
      <p>Digital atelier for Black-owned salons, stylists, hair-care brands and culture.</p>
      <div>
        <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram<ArrowUpRight aria-hidden="true" /></a>
        <a href="mailto:hello@couturehouse.co">hello@couturehouse.co<ArrowUpRight aria-hidden="true" /></a>
        <a href="/work/">Work<ArrowUpRight aria-hidden="true" /></a>
        <a href="/services/">Services<ArrowUpRight aria-hidden="true" /></a>
        <a href="/booking-suite/">Booking Suite Demo<ArrowUpRight aria-hidden="true" /></a>
        <a href="/studio/">Studio<ArrowUpRight aria-hidden="true" /></a>
        <a href="/salon-website-audit/">Free website review<ArrowUpRight aria-hidden="true" /></a>
        <a href="/privacy/">Privacy<ArrowUpRight aria-hidden="true" /></a>
        <a href="/terms/">Terms<ArrowUpRight aria-hidden="true" /></a>
      </div>
      <small>&copy; 2026 Couture House Co.</small>
    </footer>
  );
}
