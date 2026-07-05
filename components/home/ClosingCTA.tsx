import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, BOOK_HREF } from "@/lib/siteData";

export function ClosingCTA() {
  return (
    <section id="book" className="relative overflow-hidden py-[120px] text-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(91,42,62,0.5),transparent_60%),radial-gradient(50%_50%_at_50%_80%,rgba(201,162,75,0.22),transparent_60%)]"
      />
      <Reveal className="relative mx-auto max-w-[1160px] px-7">
        <div className="eyebrow block">Let&apos;s talk</div>
        <h2 className="mb-4 mt-3 text-[clamp(38px,6vw,72px)] tracking-[-0.5px] text-white">
          Let&apos;s fill your chairs.
          <br />
          Fifteen minutes.
        </h2>
        <p className="mx-auto mb-8 max-w-[560px] font-display text-[19px] italic text-chrome">
          See a real salon site we built, then we&apos;ll map yours — live, on the call. No pressure,
          no jargon, no invoice for showing up.
        </p>
        <Button href={BOOK_HREF} className="!px-[34px] !py-[17px] !text-[16px]">
          Book my demo →
        </Button>
        <div className="mt-5.5 text-[14px] text-muted">
          or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold-hi">
            {CONTACT_EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
