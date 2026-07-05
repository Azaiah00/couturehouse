import type { Metadata } from "next";
import { Zap, Scissors, Unlock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Couture House is the digital house for the beauty industry — the trusted partner for Black-owned hair salons and beauty brands. Fast, in the industry, and no cage.",
};

const pillars = [
  {
    icon: Zap,
    title: "Fast",
    body: "Live in 5–10 days, not 6–10 weeks. Same-week momentum protects your word-of-mouth.",
  },
  {
    icon: Scissors,
    title: "In the industry",
    body: "We don't ask what a silk press or a retwist is. We build for how salons actually run — deposits, no-shows, rebooking, retail.",
  },
  {
    icon: Unlock,
    title: "No cage",
    body: "No $1,500/mo retainer, no lock-in. A simple monthly that keeps the site working — cancel anytime (you won't).",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · The house"
        title="The house that dresses beauty brands for the internet."
        sub="Couture House builds couture-level websites, booking systems, and brands for Black-owned hair & beauty businesses — fast, without the $3,000 agency invoice or the 8-week wait — by people who already speak the language of the chair."
      />

      <section className="py-[80px]">
        <div className="mx-auto max-w-[820px] px-7">
          <Reveal>
            <p className="mb-6 font-display text-[clamp(20px,2.6vw,28px)] leading-[1.4] text-[#ede8df]">
              You&apos;re a master of your craft and invisible online. The $69B US hair industry is
              full of shops that are excellent at hair and losing bookings every day to a broken link
              or no site at all.
            </p>
            <p className="mb-5 text-[16.5px] text-[#cfc9d6]">
              We&apos;re not a New-York-to-Milan fashion studio. We&apos;re the trusted digital
              partner for Black-owned salons and beauty brands. We talk about{" "}
              <span className="text-white">chairs filled, money made, and a name done justice</span>
              — not &quot;digital experiences&quot; and &quot;synergy.&quot; Couture in the visuals,
              kitchen-table honesty in the words.
            </p>
            <p className="text-[16.5px] text-[#cfc9d6]">
              Two offers, one house: a high-volume{" "}
              <span className="text-gold-hi">website + booking</span> product that fills your chairs,
              and a higher-ticket <span className="text-gold-hi">branding & growth</span> practice for
              when you&apos;re ready to be bigger than your chair.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-[100px]">
        <div className="mx-auto max-w-[1160px] px-7">
          <SectionHead
            eyebrow="Why owners trust us"
            title="Fast, in the industry, and no cage."
            className="mb-[52px]"
          />
          <div className="grid gap-[18px] md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-[16px] border border-line bg-white/[0.015] p-8">
                  <p.icon className="mb-4 text-gold-hi" size={30} strokeWidth={1.5} />
                  <h3 className="mb-3 text-[26px] text-white">{p.title}</h3>
                  <p className="text-[15px] text-[#c6c0ce]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
