import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Couture House Co.",
  description: "Terms governing use of the Couture House Co. website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
