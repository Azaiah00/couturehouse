import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://couturehouse.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Couture House Co. — The digital house for the beauty industry",
    template: "%s · Couture House Co.",
  },
  description:
    "Couture House builds couture-quality websites, booking systems, and branding for Black-owned hair salons and beauty brands. Live in 5–10 days. Book a 15-min demo.",
  keywords: [
    "salon website design",
    "hair salon booking system",
    "website for Black-owned salon",
    "beauty brand website design",
    "salon branding agency",
    "loc salon website",
    "custom wig boutique website",
  ],
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Couture House Co. — The digital house for the beauty industry",
    description:
      "Couture-quality websites, booking systems, and branding for Black-owned hair salons and beauty brands. Live in days, not weeks.",
    siteName: "Couture House Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couture House Co. — The digital house for the beauty industry",
    description:
      "Couture-quality websites, booking, and branding for Black-owned hair salons and beauty brands.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} bg-ink text-txt overflow-x-hidden`}
      >
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
