import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { to: 10, suffix: " days", label: "Typical launch, not weeks" },
  { to: 24, suffix: "/7", label: "Booking, while you sleep" },
  { to: 0, prefix: "$", zeroLabel: "0", label: "Long-term contracts" },
  { to: 100, suffix: "%", label: "Built for the beauty industry" },
];

export function Stats() {
  return (
    <section className="relative py-[100px]">
      <div className="mx-auto max-w-[1160px] px-7">
        <div className="grid grid-cols-2 gap-[18px] text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="font-display text-[clamp(40px,6vw,64px)] leading-none text-white">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} zeroLabel={s.zeroLabel} />
              </div>
              <div className="mt-2 text-[13px] tracking-[0.06em] text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
