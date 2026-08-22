import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ulloa-construction.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Canonical host redirect: non-www -> www (308 permanent).
        // The host `value` is matched as a regex, so it is anchored with
        // ^...$ to avoid also matching `www.ulloa-construction.com`, which
        // would cause an infinite redirect loop.
        source: "/:path*",
        has: [{ type: "host", value: "^ulloa-construction\\.com$" }],
        destination: "https://www.ulloa-construction.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
