import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Brands | Couture House Co.",
  description:
    "How brands work with Couture House — a connected creative platform built around your roadmap.",
  alternates: { canonical: "/for-brands" },
  openGraph: {
    title: "For Brands | Couture House Co.",
    description: "Partner with a connected creative platform built for ambitious brands.",
    url: "/for-brands",
  },
};

export default function ForBrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
