import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Gold uppercase kicker label used above section headings. */
export function Eyebrow({
  children,
  center,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return <div className={cn("eyebrow", center && "block", className)}>{children}</div>;
}
