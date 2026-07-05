import type { Metadata } from "next";
import {
  CalendarClock,
  CreditCard,
  MapPin,
  Smartphone,
  Search,
  Images,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { BookingDemo } from "@/components/home/BookingDemo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { BOOK_HREF } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Websites & Booking",
  description:
    "A couture salon website with 24/7 online booking, deposits, no-show protection, and a Google presence that gets you found. Live in 5–10 days.",
};

const included = [
  { icon: Smartphone, title: "Custom design", body: "Built for your salon, mobile-perfect, fast." },
  { icon: CalendarClock, title: "Online booking & calendar", body: "24/7 self-serve booking, synced." },
  { icon: CreditCard, title: "Deposits & no-show protection", body: "Hold the spot, protect the chair." },
  { icon: ListChecks, title: "Service menu", body: "Every service, priced and bookable." },
  { icon: Images, title: "Gallery", body: "Your real work, shown like editorial." },
  { icon: MapPin, title: "Google Business setup", body: "Show up on the map and in search." },
  { icon: Search, title: "Basic SEO", body: "Rank for the searches that book calls." },
  { icon: ShieldCheck, title: "We keep it running", body: "A light monthly keeps it working." },
];

export default function WebsitesBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Websites & Booking · The volume engine"
        title="A website that works the front desk for you."
        sub="Every day without online booking is bookings walking to the salon down the street. We build you a couture site with booking, deposits, reminders, and a Google presence that gets you found — then we keep it running for a small monthly. That's it."
      >
        <Button href="#demo" magnetic={false}>
          Watch the booking flow live ↓
        </Button>
        <Button href={BOOK_HREF} variant="ghost" magnetic={false}>
          Book a demo
        </Button>
      </PageHero>

      <BookingDemo />

      <section className="py-[100px]">
        <div className="mx-auto max-w-[1160px] px-7">
          <SectionHead
            eyebrow="What's included"
            title="Everything a busy salon actually needs."
            sub="One clear build fee, then a light monthly. No retainer, no lock-in."
            className="mb-[52px]"
          />
          <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {included.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 70}>
                <div className="h-full rounded-[16px] border border-line bg-white/[0.015] p-[26px]">
                  <f.icon className="mb-4 text-gold-hi" size={26} strokeWidth={1.5} />
                  <h4 className="mb-2 text-[19px] text-white">{f.title}</h4>
                  <p className="text-[14px] text-[#c6c0ce]">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="See the booking flow on your own salon."
        sub="Book a 15-minute demo and we'll show you exactly how it fills your chairs — live, on the call."
      />
    </>
  );
}
