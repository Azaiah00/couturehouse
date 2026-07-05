import Link from "next/link";
import { Monogram } from "@/components/ui/Monogram";
import { NAV_LINKS, CONTACT_EMAIL, BOOK_HREF } from "@/lib/siteData";

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="mb-3 flex items-center gap-3">
              <Monogram size={30} />
              <b className="font-display text-[20px] tracking-[0.5px] text-white">
                Couture House
              </b>
            </Link>
            <p className="text-sm text-muted">
              The digital house for the beauty industry — couture-quality websites, booking, and
              branding for Black-owned hair salons &amp; beauty brands.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="eyebrow mb-1">Explore</span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-chrome transition-colors hover:text-gold-hi"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm text-chrome transition-colors hover:text-gold-hi"
            >
              Book a Demo
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Let&apos;s talk</span>
            <a href={BOOK_HREF} className="text-sm font-semibold text-gold-hi">
              Book a 15-min demo →
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-chrome hover:text-gold-hi">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line2 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Couture House Co. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold-hi">
              Privacy
            </Link>
            <span className="font-display text-sm text-chrome">
              The digital house for the beauty industry.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
