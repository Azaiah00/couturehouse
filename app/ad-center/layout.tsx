import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Gallery | Couture House Co",
  description: "One hero film, flowing imagery, and portrait stories in motion.",
};

export default function AdCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


