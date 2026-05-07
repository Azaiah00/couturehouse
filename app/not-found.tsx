import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | Couture House Co.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="bg-charcoal min-h-screen flex items-center site-inset pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 block">404</span>
          <h1 className="display-heading text-white text-[clamp(3rem,12vw,12rem)] leading-[0.88]">
            Off the<br />grid.
          </h1>
          <p className="text-white/65 max-w-lg mt-10 font-sans text-base md:text-lg leading-relaxed">
            We couldn&rsquo;t find the page you were looking for. It may have moved or never existed.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.22em] font-sans hover:bg-white/85 transition-colors"
            >
              Back to home
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-sans hover:border-white/60 transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
