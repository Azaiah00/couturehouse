import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="footer-logo-link" href="/" aria-label="Couture House home"><img src="/brand/footer-logo.png" alt="Couture House" /></Link>
      <p>Digital atelier for hair, beauty, culture and ambitious businesses.</p>
      <div>
        <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram<ArrowUpRight aria-hidden="true" /></a>
        <Link href="/work">Work<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/services">Services<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/studio">Studio<ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <small>&copy; 2026 Couture House Co.</small>
    </footer>
  );
}
