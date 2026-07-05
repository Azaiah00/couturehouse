import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const paths = [
  {
    href: "/websites-booking",
    variant: "a" as const,
    tag: "Path A · Get found & get booked",
    title: "Websites & Booking",
    body: "A stunning site with 24/7 online booking, deposits, and no-show protection — so your chairs fill while you sleep. Live in 5–10 days.",
    detail: "Custom design · Booking & deposits · Google presence · Mobile-perfect →",
  },
  {
    href: "/branding-growth",
    variant: "b" as const,
    tag: "Path B · Build the brand",
    title: "Branding & Growth",
    body: "Logo & identity, an online store, ads, and always-on content systems that turn your salon into a brand — the way we did for Beverly's and Magic Coils.",
    detail: "Identity · Online store · Ad creative · Agentic content · Courses →",
  },
];

export function TwoPaths() {
  return (
    <section id="paths" className="relative py-[100px]">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHead
          eyebrow="What we do"
          title="Two ways we make your salon money."
          sub="Start with the site that fills your chairs. Grow into the brand people follow, trust, and buy from."
          className="mb-[52px]"
        />

        <div className="grid gap-[22px] md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.href} delay={i * 90}>
              <Link
                href={p.href}
                className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[22px] border border-line p-9 transition-[transform,border-color] duration-400 hover:-translate-y-1.5 hover:border-gold/55 ${
                  p.variant === "a"
                    ? "bg-[linear-gradient(160deg,#1c1a24,#0e0d12)]"
                    : "bg-[linear-gradient(160deg,rgba(91,42,62,0.62),#120f0e)]"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute -right-[70px] -top-[90px] h-[280px] w-[280px] rounded-full opacity-50 blur-[60px] ${
                    p.variant === "a" ? "bg-gold/40" : "bg-amber/50"
                  }`}
                />
                <div className="relative text-xs font-bold uppercase tracking-[0.2em] text-gold-hi">
                  {p.tag}
                </div>
                <h3 className="relative my-3 text-[34px] text-white">{p.title}</h3>
                <p className="relative mb-5 text-[#dad5e0]">{p.body}</p>
                <span className="relative text-sm font-bold tracking-[0.02em] text-gold-hi">
                  {p.detail}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
