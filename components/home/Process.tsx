import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const steps = [
  {
    n: "01",
    title: "Book a demo",
    body: "15 minutes. We show you a real salon site live and learn what's broken about yours.",
  },
  {
    n: "02",
    title: "We build",
    body: "You send photos & services; we design and build the site + booking system in days.",
  },
  {
    n: "03",
    title: "You launch",
    body: "Review, tweak, and go live. Your chairs start filling 24/7 the moment it's up.",
  },
  {
    n: "04",
    title: "We keep it running",
    body: "A light monthly keeps it fast, updated, and working. Grow into branding when you're ready.",
  },
];

export function Process() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#0d0c11,#0a0a0c)] py-[100px]">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHead
          eyebrow="How it works"
          title="From hello to live in about a week."
          sub="No 8-week timelines. No jargon. No surprises."
          className="mb-[52px]"
        />

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="h-full rounded-[16px] border border-line bg-white/[0.015] p-[26px]">
                <div className="font-display text-[34px] text-gold-hi">{s.n}</div>
                <h4 className="mb-2 mt-1.5 text-[20px] text-white">{s.title}</h4>
                <p className="text-[14px] text-[#c6c0ce]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
