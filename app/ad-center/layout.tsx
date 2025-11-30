import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Center | Couture House Co",
  description: "Explore our portfolio of cinematic ad campaigns. Premium video production for luxury fashion brands.",
};

export default function AdCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


