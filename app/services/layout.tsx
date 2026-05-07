import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Couture House Co.",
  description:
    "One studio, every channel. Brand strategy, creative, production, digital, performance, and original sound — built to compound.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Couture House Co.",
    description: "One studio, every channel. Strategy, creative, production, performance, and sound.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
