import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="footer-logo-link" href="/" aria-label="Couture House home"><Image src="/brand/footer-logo.png" alt="Couture House" width={267} height={244} sizes="224px" unoptimized /></Link>
      <p>Digital atelier for Black-owned salons, stylists, hair-care brands and culture.</p>
      <div>
        <a href="https://www.instagram.com/couturehouse.co/" target="_blank" rel="noreferrer">Instagram<ArrowUpRight aria-hidden="true" /></a>
        <a href="mailto:hello@couturehouse.co">hello@couturehouse.co<ArrowUpRight aria-hidden="true" /></a>
        <Link href="/work/">Work<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/services/">Services<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/studio/">Studio<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/privacy/">Privacy<ArrowUpRight aria-hidden="true" /></Link>
        <Link href="/terms/">Terms<ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <small>&copy; 2026 Couture House Co.</small>
    </footer>
  );
}
