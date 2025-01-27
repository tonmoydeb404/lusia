import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.hashnode.com" }],
  },
};

export default nextConfig;
