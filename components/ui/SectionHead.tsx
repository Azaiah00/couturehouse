import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  className?: string;
}

export function SectionHead({ eyebrow, title, sub, center, className }: SectionHeadProps) {
  return (
    <Reveal className={cn("max-w-[760px]", center && "mx-auto text-center", className)}>
      <div className={cn("eyebrow", center && "block")}>{eyebrow}</div>
      <h2 className="my-[0.3em] text-[clamp(32px,4.6vw,52px)] tracking-[-0.5px]">{title}</h2>
      {sub && <p className="text-[17px] text-[#cfc9d6]">{sub}</p>}
    </Reveal>
  );
}
