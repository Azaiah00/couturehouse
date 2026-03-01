import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/for-brands',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/for-models',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/models',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/ad-center',
        destination: '/music',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
