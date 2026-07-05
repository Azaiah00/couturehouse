"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DEMO_SERVICES, DEMO_STYLISTS, DEMO_TIMES, BOOK_HREF } from "@/lib/siteData";
import { cn } from "@/lib/utils";

const STEP_LABELS = [
  "Step 1 · Choose a service",
  "Step 2 · Choose your stylist",
  "Step 3 · Pick a time · Fri, Jul 10",
];

export function BookingDemo() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<number | null>(null);
  const [stylist, setStylist] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);

  const selectedForStep =
    step === 0 ? service : step === 1 ? stylist : step === 2 ? time : 0;
  const canAdvance = step >= 3 || selectedForStep !== null;

  const reset = () => {
    setStep(0);
    setService(null);
    setStylist(null);
    setTime(null);
  };

  const onCta = () => {
    if (step >= 3) return reset();
    if (!canAdvance) return;
    setStep((s) => s + 1);
  };

  const ctaLabel =
    step === 0 || step === 1 ? "Continue" : step === 2 ? "Confirm booking" : "Try it again";

  return (
    <section
      id="demo"
      className="scroll-mt-24 bg-[linear-gradient(180deg,#0e0d12,#141019)] py-[100px]"
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-11 px-7 md:grid-cols-[1fr_1.05fr]">
        <Reveal className="demo-copy">
          <div className="eyebrow">The product, working</div>
          <h2 className="mb-4 mt-3 text-[clamp(30px,4vw,46px)]">
            A website that works the front desk for you.
          </h2>
          <p className="max-w-[520px] text-[16.5px] text-[#cfc9d6]">
            This is the booking flow we build into every salon site — your clients pick a service,
            choose a stylist, lock a time, and leave a deposit. 24/7. No phone tag, no no-shows. Try
            it →
          </p>
          <div className="mt-6">
            <Button href={BOOK_HREF}>Book a demo &amp; see yours →</Button>
          </div>
        </Reveal>

        {/* Phone */}
        <Reveal delay={120} className="flex justify-center">
          <div className="w-[330px] max-w-full rounded-[34px] border border-line bg-[linear-gradient(160deg,#2a2833,#111017)] p-3.5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <div className="relative min-h-[540px] overflow-hidden rounded-[24px] border border-line2 bg-[#0d0c11]">
              {/* header */}
              <div className="border-b border-line2 bg-[linear-gradient(180deg,rgba(91,42,62,0.4),transparent)] px-5 pb-3 pt-5">
                <div className="text-[11px] uppercase tracking-[0.1em] text-muted">
                  Couture House Booking
                </div>
                <div className="font-display text-[22px] text-white">Beverly&apos;s of Nashville</div>
              </div>

              {/* body */}
              <div className="p-[18px]">
                {step < 3 && (
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    {STEP_LABELS[step]}
                  </div>
                )}

                {step === 0 &&
                  DEMO_SERVICES.map((s, i) => (
                    <Option
                      key={s.name}
                      title={s.name}
                      detail={s.detail}
                      right={s.price}
                      selected={service === i}
                      onClick={() => setService(i)}
                    />
                  ))}

                {step === 1 &&
                  DEMO_STYLISTS.map((s, i) => (
                    <Option
                      key={s.name}
                      title={s.name}
                      detail={s.detail}
                      right="›"
                      selected={stylist === i}
                      onClick={() => setStylist(i)}
                    />
                  ))}

                {step === 2 && (
                  <>
                    <div className="grid grid-cols-3 gap-[9px]">
                      {DEMO_TIMES.map((t, i) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(i)}
                          className={cn(
                            "rounded-[12px] border px-1.5 py-3 text-center text-[13.5px] font-semibold transition-colors",
                            time === i
                              ? "border-gold bg-gold/15 text-white"
                              : "border-line2 hover:border-gold hover:bg-gold/10"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4 rounded-[12px] border border-dashed border-line px-4 py-3.5 text-[12.5px] text-muted">
                      A small deposit holds your spot &amp; cuts no-shows. 💳
                    </div>
                  </>
                )}

                {step >= 3 && service !== null && stylist !== null && time !== null && (
                  <div className="px-4 py-8 text-center">
                    <div className="mx-auto mb-[18px] grid h-[70px] w-[70px] place-items-center rounded-full bg-[linear-gradient(180deg,#EBD08C,#C9A24B)] text-[34px] text-[#22190b]">
                      ✓
                    </div>
                    <h3 className="mb-2 text-[26px] text-white">You&apos;re booked!</h3>
                    <p className="text-[14px] text-muted">
                      {DEMO_SERVICES[service].name} with {DEMO_STYLISTS[stylist].name}
                      <br />
                      Fri, Jul 10 · {DEMO_TIMES[time]} PM
                    </p>
                    <p className="mt-3.5 text-gold-hi">Confirmation + reminder sent 📲</p>
                  </div>
                )}
              </div>

              {/* footer */}
              <div className="px-[18px] pb-5 pt-3.5">
                <button
                  type="button"
                  onClick={onCta}
                  className={cn(
                    "flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#EBD08C,#C9A24B)] px-6 py-3.5 text-[14.5px] font-bold text-[#22190b] shadow-[0_8px_30px_rgba(201,162,75,0.32)] transition-opacity",
                    !canAdvance && "opacity-50"
                  )}
                >
                  {step >= 3 && <RotateCcw size={15} />}
                  {ctaLabel}
                </button>
                <div className="mt-3.5 flex justify-center gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-1 w-[26px] rounded-sm transition-colors",
                        i <= step ? "bg-gold" : "bg-line2"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Option({
  title,
  detail,
  right,
  selected,
  onClick,
}: {
  title: string;
  detail: string;
  right: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "mb-2.5 flex w-full items-center justify-between rounded-[14px] border px-4 py-3.5 text-left transition-all",
        selected
          ? "border-gold bg-gold/15"
          : "border-line2 bg-white/[0.02] hover:translate-x-[3px] hover:border-gold hover:bg-gold/10"
      )}
    >
      <span>
        <span className="block text-[14.5px] font-semibold text-white">{title}</span>
        <span className="block text-[12px] text-muted">{detail}</span>
      </span>
      <span className="font-display text-[18px] text-gold-hi">{right}</span>
    </button>
  );
}
