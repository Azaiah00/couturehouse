import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Couture House Co.",
  description:
    "Selected work from Couture House — campaigns, creative systems, and digital launches for category-defining brands.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Couture House Co.",
    description: "Selected work for category-defining brands.",
    url: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
