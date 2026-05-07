import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Couture House Co.",
  description:
    "Start a project with Couture House. Tell us about your goals — we usually respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Couture House Co.",
    description: "Start a project with Couture House.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
