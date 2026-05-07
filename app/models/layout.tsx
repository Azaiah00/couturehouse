import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent | Couture House Co.",
  description:
    "Couture House represents talent across fashion, lifestyle, and entertainment.",
  alternates: { canonical: "/models" },
  openGraph: {
    title: "Talent | Couture House Co.",
    description: "Talent representation across fashion, lifestyle, and entertainment.",
    url: "/models",
  },
};

export default function ModelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
