import type { NextConfig } from "next";

const isStaticExport = process.env.IS_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  ...(isStaticExport ? { output: "export" as const } : {}),
};

export default nextConfig;
