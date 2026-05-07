import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Talent | Couture House Co.",
  description:
    "Apply to be represented by Couture House. We work with talent across fashion, lifestyle, and entertainment.",
  alternates: { canonical: "/for-models" },
  openGraph: {
    title: "For Talent | Couture House Co.",
    description: "Apply to be represented by Couture House.",
    url: "/for-models",
  },
};

export default function ForModelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
