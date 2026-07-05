import type { MetadataRoute } from "next";

const BASE = "https://couturehouse.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/websites-booking",
    "/branding-growth",
    "/work",
    "/about",
    "/contact",
    "/privacy",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
