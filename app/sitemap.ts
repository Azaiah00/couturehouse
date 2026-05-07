import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://couturehouse.co";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/music", priority: 0.7, changeFrequency: "monthly" },
  { path: "/models", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-brands", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-models", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ad-center", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
