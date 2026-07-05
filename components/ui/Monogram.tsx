import { cn } from "@/lib/utils";

/** Chrome CH monogram, rendered in CSS so it stays crisp at any size. */
export function Monogram({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("monogram shrink-0", className)}
      style={{ width: size, height: size, fontSize: size * 0.44 }}
    >
      CH
    </span>
  );
}
