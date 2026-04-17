import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-apht.onrender.com",
      },
    ],
  },
};

export default nextConfig;
