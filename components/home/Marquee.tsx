import { CLIENTS } from "@/lib/siteData";

export function Marquee() {
  // Duplicate the list so the track loops seamlessly.
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <div className="relative overflow-hidden border-y border-line2 bg-white/[0.015] py-7">
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.28em] text-muted">
        Trusted by salons &amp; beauty brands who are masters of their craft
      </p>
      <div className="mtrack gap-[70px]">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-[24px] text-chrome"
            aria-hidden={i >= CLIENTS.length}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
