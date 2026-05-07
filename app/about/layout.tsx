import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Couture House Co.",
  description:
    "Couture House is a connected creative platform built for ambitious brands. Strategy, design, production, performance, and original sound.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Couture House Co.",
    description: "A connected creative platform for ambitious brands.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
