import type { Metadata } from "next";
import Image from "next/image";
import {
  Palette,
  ShoppingBag,
  Megaphone,
  Bot,
  GraduationCap,
  Mail,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { BOOK_HREF } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Branding & Growth",
  description:
    "Brand identity, online store, ad creative, agentic content systems, digital products & courses — the full growth house for beauty brands. It's what we built for Beverly's and Magic Coils.",
};

const services = [
  { icon: Palette, title: "Brand identity & logo", body: "A mark and system that makes premium pricing feel obvious." },
  { icon: ShoppingBag, title: "Online store build", body: "Sell products, gift cards, and retail — TikTok Shop ready." },
  { icon: Megaphone, title: "Ad & marketing creative", body: "Scroll-stopping ads and campaign creative that converts." },
  { icon: Bot, title: "Agentic content systems", body: "Always-on content that runs itself and posts for you." },
  { icon: GraduationCap, title: "Digital products & courses", body: "Package your expertise — academies, courses, playbooks." },
  { icon: Mail, title: "Email & social playbooks", body: "Sequences and calendars that keep clients coming back." },
];

export default function BrandingGrowthPage() {
  return (
    <>
      <PageHero
        eyebrow="Branding & Growth · The elevator"
        title="From great hair to a great brand."
        sub="When you're ready to be bigger than your chair, we build the whole house: identity & logo, an online store for products and gift cards, ad creative, and content systems that post for you. It's what we did for Beverly's and Magic Coils."
      >
        <Button href={BOOK_HREF}>Book a 15-min demo →</Button>
      </PageHero>

      <section className="py-[100px]">
        <div className="mx-auto max-w-[1160px] px-7">
          <SectionHead
            eyebrow="The services"
            title="Everything it takes to become a brand people follow."
            className="mb-[52px]"
          />
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-[16px] border border-line bg-white/[0.015] p-7">
                  <s.icon className="mb-4 text-gold-hi" size={28} strokeWidth={1.5} />
                  <h4 className="mb-2 text-[21px] text-white">{s.title}</h4>
                  <p className="text-[14.5px] text-[#c6c0ce]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof band — Beverly's */}
      <section className="relative overflow-hidden py-[100px]">
        <div className="mx-auto grid max-w-[1160px] items-center gap-11 px-7 md:grid-cols-2">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-line">
            <Image
              src="/work/hero-color.jpg"
              alt="Editorial color work from Beverly's of Nashville"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="eyebrow">The ceiling of the offer</div>
            <h2 className="my-3 text-[clamp(28px,4vw,44px)] text-white">
              We don&apos;t just build the site. We build the whole business around it.
            </h2>
            <p className="mb-4 text-[16px] text-[#cfc9d6]">
              For Beverly&apos;s of Nashville — a 30-year legacy salon — we shipped a brand style
              guide, a custom-wig boutique, The Academy for education, digital products and courses,
              a 30-day content calendar, email sequences, and an animated ad. One partner, the whole
              house.
            </p>
            <Button href="/work" variant="ghost" magnetic={false}>
              See the case studies →
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ready to build the whole house?"
        sub="Book a 15-minute demo. We'll show you what a full brand build looks like — and where to start."
      />
    </>
  );
}
