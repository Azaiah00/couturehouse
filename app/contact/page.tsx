import type { Metadata } from "next";
import { Clock, MessageCircleOff, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { DemoForm } from "@/components/forms/DemoForm";
import { CONTACT_EMAIL } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a free 15-minute demo. See a real salon site we built, then we'll map yours — live, on the call. No pressure, no jargon.",
};

const reassurance = [
  { icon: Clock, text: "Just 15 minutes" },
  { icon: MessageCircleOff, text: "No pressure, no jargon" },
  { icon: Sparkles, text: "See a real salon we built" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title="Let's fill your chairs. Fifteen minutes."
        sub="See a real salon site we built, then we'll map yours — live, on the call. Tell us what's broken and we'll take it from there."
      />

      <section className="pb-[110px] pt-[10px]">
        <div className="mx-auto grid max-w-[1000px] items-start gap-12 px-7 md:grid-cols-[1fr_1.1fr]">
          <div>
            <ul className="flex flex-col gap-4">
              {reassurance.map((r) => (
                <li key={r.text} className="flex items-center gap-3 text-[16px] text-chrome">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-gold-hi">
                    <r.icon size={18} strokeWidth={1.5} />
                  </span>
                  {r.text}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[16px] border border-line bg-white/[0.015] p-6">
              <p className="text-[14.5px] text-[#cfc9d6]">
                Prefer to just email? Reach us any time at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold-hi">
                  {CONTACT_EMAIL}
                </a>
                . We reply fast — usually the same day.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] border border-line bg-[linear-gradient(180deg,#17151e,#121016)] p-6 sm:p-8">
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
