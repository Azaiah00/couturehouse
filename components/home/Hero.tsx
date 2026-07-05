import { Monogram } from "@/components/ui/Monogram";
import { Button } from "@/components/ui/Button";
import { BOOK_HREF } from "@/lib/siteData";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-20 pt-[120px]">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="silk" />
        <div className="grain" />
      </div>

      <div className="relative z-2 mx-auto w-full max-w-[1160px] px-7">
        <Monogram size={70} className="mb-7 fade-up" />

        <h1 className="fade-up max-w-[14ch] text-[clamp(44px,7.4vw,92px)] tracking-[-1px] [animation-delay:0.25s]">
          <span className="sweep-text">Your chair is empty because your website is.</span>
        </h1>

        <p className="fade-up my-8 max-w-[640px] font-display text-[clamp(19px,2.4vw,26px)] text-chrome [animation-delay:0.45s]">
          Couture House builds the site, booking system, and brand that fill Black-owned salons —
          couture quality, live in days, without the $3,000 agency invoice.
        </p>

        <div className="fade-up flex flex-wrap gap-3.5 [animation-delay:0.6s]">
          <Button href={BOOK_HREF}>Book a 15-min demo →</Button>
          <Button href="#demo" variant="ghost" magnetic={false}>
            See a real salon we built
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-9 left-1/2 z-2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-muted">
        Scroll
      </div>
    </section>
  );
}
