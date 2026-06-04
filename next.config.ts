import type { NextConfig } from "next";

function cmsImagePatterns(): NonNullable<NextConfig["images"]>["remotePatterns"] {
  const patterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
    {
      protocol: "http",
      hostname: "127.0.0.1",
      port: "1337",
      pathname: "/**",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "1337",
      pathname: "/**",
    },
  ];

  const cmsUrl = process.env.CMS_URL;
  if (cmsUrl) {
    try {
      const parsed = new URL(cmsUrl);
      const protocol = parsed.protocol.replace(":", "") as "http" | "https";
      patterns.push({
        protocol,
        hostname: parsed.hostname,
        port: parsed.port || undefined,
        pathname: "/**",
      });
    } catch {
      // ignore invalid CMS_URL at build time
    }
  }

  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: cmsImagePatterns(),
  },
};

export default nextConfig;
