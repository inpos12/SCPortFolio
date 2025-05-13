import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
