import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — parent dirs contain stray pnpm lockfiles.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Real client photography is pre-compressed and served from /public.
    unoptimized: true,
  },
  async redirects() {
    return [
      // Old fashion-positioning routes → new beauty-industry routes.
      { source: "/services", destination: "/websites-booking", permanent: true },
      { source: "/for-brands", destination: "/branding-growth", permanent: true },
      { source: "/for-models", destination: "/work", permanent: true },
      { source: "/models", destination: "/work", permanent: true },
      { source: "/music", destination: "/branding-growth", permanent: true },
      { source: "/ad-center", destination: "/branding-growth", permanent: true },
    ];
  },
};

export default nextConfig;
