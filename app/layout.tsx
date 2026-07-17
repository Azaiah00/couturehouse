import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "www.couturehouse.co";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") || host.includes("[::1]") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Couture House Co. | Digital Solutions for Hair, Beauty & Culture";
  const description = "Immersive websites, apps, workflow automations and content for salons, stylists, hair care brands and ambitious businesses.";

  return {
    title,
    description,
    icons: {
      icon: "/brand/favicon-logo.png",
      shortcut: "/brand/favicon-logo.png",
      apple: "/brand/favicon-logo.png",
    },
    keywords: [
      "salon website design",
      "hair stylist website design",
      "Black-owned salon marketing",
      "hair care brand web design",
      "business automation",
      "Couture House Co",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "Couture House Co. — Digital, but make it feel human." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
