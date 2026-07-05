import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { CASE_STUDIES } from "@/lib/siteData";

export function CaseStudies() {
  return (
    <section id="work" className="relative py-[100px]">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHead
          eyebrow="Selected work"
          title="Real salons. Real brands. Real bookings."
          sub="Not stock photos — clients we've actually shipped for."
          className="mb-[52px]"
        />

        <div className="grid gap-[22px] md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 90}>
              <Link
                href="/work"
                className="group block h-full overflow-hidden rounded-[20px] border border-line bg-[linear-gradient(180deg,#17151e,#121016)] transition-[transform,border-color] duration-400 hover:-translate-y-1.5 hover:border-gold/50"
              >
                <div className="relative h-[220px] overflow-hidden border-b border-line2">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(10,10,12,0.85))]" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                    {c.kicker}
                  </div>
                  <h4 className="my-2 text-[24px] text-white">{c.name}</h4>
                  <p className="mb-3.5 text-[14.5px] text-[#cfc9d6]">{c.blurb}</p>
                  <div className="flex flex-wrap gap-[7px]">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line2 px-[11px] py-[5px] text-[11px] text-chrome"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
