import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  poweredByHeader: false,

  // Image optimization (when needed)
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Strict React mode for catching issues early
  reactStrictMode: true,
};

export default nextConfig;
