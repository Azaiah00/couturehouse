import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/context";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Couture House Co | Digital Marketing Studio for Retail Brands",
  description: "Design-forward marketing for ecommerce and brick & mortar. We build creative systems, paid media, and performance-minded marketing assets.",
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-charcoal overflow-x-hidden`}
      >
        <LanguageProvider>
          <Header />
          {/* Main content wrapper with simple fade */}
          <main className="min-h-screen">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
