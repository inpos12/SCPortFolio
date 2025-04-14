import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["user-images.githubusercontent.com"], // 여기에 외부 도메인을 추가합니다.
  },
};

export default nextConfig;
