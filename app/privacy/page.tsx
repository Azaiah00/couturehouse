import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CONTACT_EMAIL } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Couture House Co. handles your information.",
};

const sections = [
  {
    h: "What we collect",
    p: "When you book a demo or email us, we collect the details you choose to share — your name, salon or brand name, phone number, email, and anything you tell us about your project. We don't sell or rent your information to anyone.",
  },
  {
    h: "How we use it",
    p: "We use your information only to respond to you, prepare your demo, and deliver the work you hire us for. That's it.",
  },
  {
    h: "Analytics",
    p: "We may use privacy-respecting analytics to understand how the site is used and improve it. This is aggregate and not tied to your identity.",
  },
  {
    h: "Your choices",
    p: "You can ask us to update or delete your information at any time. Just email us and we'll take care of it.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-[110px] pt-[10px]">
        <div className="mx-auto max-w-[760px] px-7">
          {sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="mb-2.5 text-[24px] text-white">{s.h}</h2>
              <p className="text-[15.5px] text-[#cfc9d6]">{s.p}</p>
            </div>
          ))}
          <p className="text-[15.5px] text-[#cfc9d6]">
            Questions? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold-hi">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
