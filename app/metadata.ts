import type { Metadata } from "next";

export function buildPageMetadata(title: string, description: string, canonical: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website", images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-v2.png"] },
  };
}
