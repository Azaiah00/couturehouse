"use client";

import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

const industries1 = [
  "Fashion", "Cannabis", "E-Commerce", "Jewelry", "Home Goods", "Beauty"
];

const industries2 = [
  "Podcasts", "Real Estate", "Automotive", "Musicians", "Fitness", "Spas"
];

export function IndustriesMarquee() {
  return (
    <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="mb-16 container mx-auto px-6 text-center">
        <h2 className="text-dusty-rose text-sm font-sans uppercase tracking-widest">Industries We Serve</h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700">
        <InfiniteMarquee speed={0.5} direction={1}>
          <div className="flex gap-8 md:gap-16 items-center">
            {industries1.map((industry, i) => (
              <span key={`1-${i}`} className="text-5xl md:text-8xl font-serif font-bold text-transparent uppercase tracking-wider whitespace-nowrap" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
                {industry}
                <span className="ml-8 md:ml-16 text-crimson/60" style={{ WebkitTextStroke: "0px" }}>✦</span>
              </span>
            ))}
          </div>
        </InfiniteMarquee>
        
        <InfiniteMarquee speed={0.4} direction={-1}>
          <div className="flex gap-8 md:gap-16 items-center mt-4">
            {industries2.map((industry, i) => (
              <span key={`2-${i}`} className="text-5xl md:text-8xl font-serif font-bold text-white uppercase tracking-wider whitespace-nowrap">
                {industry}
                <span className="ml-8 md:ml-16 text-dusty-rose/60">✦</span>
              </span>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  );
}
