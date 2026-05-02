import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.100.1'],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
