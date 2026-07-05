import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** Constrain inner content to the standard 1160px column (default true). */
  contained?: boolean;
  className?: string;
  innerClassName?: string;
  as?: ElementType;
}

/**
 * Standard vertical rhythm section wrapper — 100px block padding and the
 * shared max-w-[1160px] px-7 content column used site-wide.
 */
export function Section({
  children,
  id,
  contained = true,
  className,
  innerClassName,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative py-[100px]", className)}>
      {contained ? (
        <div className={cn("mx-auto max-w-[1160px] px-7", innerClassName)}>{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
