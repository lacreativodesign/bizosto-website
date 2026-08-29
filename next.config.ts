import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-b.saashub.com",
        pathname: "/img/badges/**",
      },
    ],
  },
};

export default nextConfig;
