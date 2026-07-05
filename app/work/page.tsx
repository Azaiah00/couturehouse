import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real salons, real brands, real bookings. Case studies from Beverly's of Nashville, Magic Coils, The Fairyy Loc Mutha, Loc'd By Love, and OG Barnes.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="The House · Selected work"
        title="Real salons. Real brands. Real bookings."
        sub="Not stock photos and not placeholders — clients we've actually shipped for. Each one is proof of a different corner of what we build."
      />

      <section className="pb-[40px] pt-[20px]">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-[26px] px-7">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug}>
              <article className="grid items-stretch overflow-hidden rounded-[24px] border border-line bg-[linear-gradient(180deg,#17151e,#121016)] md:grid-cols-2">
                <figure className={`relative min-h-[300px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 580px"
                    className="object-cover"
                  />
                </figure>
                <div className="p-8 md:p-10">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                    {c.kicker}
                  </div>
                  <h2 className="my-3 text-[clamp(26px,3.4vw,38px)] text-white">{c.name}</h2>
                  <p className="mb-5 text-[15.5px] text-[#cfc9d6]">{c.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line2 px-3 py-1.5 text-[12px] text-chrome"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Your salon could be the next case study."
        sub="Book a 15-minute demo. We'll show you a real build, then map yours — live, on the call."
      />
    </>
  );
}
