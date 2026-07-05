import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

const rows = [
  {
    option: "Salon agencies",
    cost: "$1,500–$3,500 / mo retainer",
    fail: "Locked in, can't escape, cookie-cutter template.",
  },
  {
    option: "Boutique web shops",
    cost: "$3K–$8K upfront",
    fail: "8-week timelines and no clue how a salon runs.",
  },
  {
    option: "Booking apps (GlossGenius, Vagaro)",
    cost: "$24–$50 / mo",
    fail: "The same page every other salon already has.",
  },
  {
    option: "Fiverr freelancer",
    cost: "~$200",
    fail: "Doesn't know the industry, gone after launch.",
  },
];

export function Compare() {
  return (
    <section className="relative pb-[100px] pt-5">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHead
          eyebrow="Why owners choose us"
          title="Fast, affordable, and actually in the industry."
          sub="Everyone else makes you pick two. Here's the honest comparison."
          className="mb-[52px]"
        />

        <Reveal className="overflow-hidden rounded-[18px] border border-line">
          <div className="hidden grid-cols-[1.1fr_1fr_1.4fr] bg-white/[0.03] text-[12px] font-bold uppercase tracking-[0.08em] text-gold-hi sm:grid">
            <div className="border-b border-line2 px-5 py-4">Option</div>
            <div className="border-b border-line2 px-5 py-4">What it really costs</div>
            <div className="border-b border-line2 px-5 py-4">Where it fails you</div>
          </div>

          {rows.map((r) => (
            <div
              key={r.option}
              className="grid grid-cols-1 border-b border-line2 sm:grid-cols-[1.1fr_1fr_1.4fr]"
            >
              <div className="px-5 pt-4 text-[14.5px] font-bold text-white sm:py-4">{r.option}</div>
              <div className="px-5 text-[14.5px] text-[#c9a9a9] sm:py-4">{r.cost}</div>
              <div className="px-5 pb-4 text-[14.5px] text-[#c9a9a9] sm:py-4">{r.fail}</div>
            </div>
          ))}

          <div className="grid grid-cols-1 bg-[linear-gradient(90deg,rgba(201,162,75,0.10),rgba(91,42,62,0.10))] sm:grid-cols-[1.1fr_1fr_1.4fr]">
            <div className="px-5 pt-4 text-[14.5px] font-bold text-gold-hi sm:py-4">Couture House</div>
            <div className="px-5 text-[14.5px] font-semibold text-[#bfe3c3] sm:py-4">
              One clear build fee + light monthly
            </div>
            <div className="px-5 pb-4 text-[14.5px] font-semibold text-[#bfe3c3] sm:py-4">
              Fast, affordable &amp; in the industry — the only one that&apos;s all three.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
