import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Couture House Co.",
  description:
    "How Couture House collects, uses, and protects information across our platform and services.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
