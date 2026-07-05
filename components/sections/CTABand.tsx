import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, BOOK_HREF } from "@/lib/siteData";

interface CTABandProps {
  title?: string;
  sub?: string;
}

export function CTABand({
  title = "Let's fill your chairs. Fifteen minutes.",
  sub = "See a real salon site we built, then we'll map yours — live, on the call. No pressure, no jargon, no invoice for showing up.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-[110px] text-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(91,42,62,0.5),transparent_60%),radial-gradient(50%_50%_at_50%_80%,rgba(201,162,75,0.22),transparent_60%)]"
      />
      <Reveal className="relative mx-auto max-w-[720px] px-7">
        <h2 className="mb-4 text-[clamp(32px,5vw,58px)] tracking-[-0.5px] text-white">{title}</h2>
        <p className="mx-auto mb-8 max-w-[540px] font-display text-[18px] italic text-chrome">
          {sub}
        </p>
        <Button href={BOOK_HREF} className="!px-[34px] !py-[17px] !text-[16px]">
          Book my demo →
        </Button>
        <div className="mt-5 text-[14px] text-muted">
          or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold-hi">
            {CONTACT_EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
