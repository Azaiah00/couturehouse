import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Couture House Co. | Digital Solutions for Hair, Beauty & Culture";
const description =
  "Immersive websites, apps, workflow automations and content for salons, stylists, hair care brands and ambitious businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://couturehouse.co"),
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
    images: [
      {
        url: "/og-v2.png",
        width: 1536,
        height: 1024,
        alt: "Couture House Co. - Digital worlds for hair, beauty and culture.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-v2.png"],
  },
};

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
