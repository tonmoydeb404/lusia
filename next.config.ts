import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.hashnode.com" },
      { hostname: "media.graphassets.com" },
      { hostname: "ap-south-1.graphassets.com" },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
