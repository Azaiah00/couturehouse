import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, sub, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-0 pb-16 pt-[150px]">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div className="silk" />
        <div className="grain" />
      </div>
      <div className="relative z-2 mx-auto max-w-[1160px] px-7">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="my-4 max-w-[16ch] text-[clamp(40px,6.4vw,80px)] tracking-[-1px] text-white">
          {title}
        </h1>
        {sub && <p className="max-w-[620px] font-display text-[clamp(18px,2.2vw,24px)] text-chrome">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3.5">{children}</div>}
      </div>
    </section>
  );
}
