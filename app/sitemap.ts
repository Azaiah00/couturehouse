import type { MetadataRoute } from "next";
import { works } from "@/lib/work";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://couturehouse.co";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
};

const staticRoutes: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/music", priority: 0.7, changeFrequency: "monthly" },
  { path: "/models", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-brands", priority: 0.7, changeFrequency: "monthly" },
  { path: "/for-models", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ad-center", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const workEntries = works.map((w) => ({
    url: `${SITE_URL}/work/${w.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...workEntries];
}
