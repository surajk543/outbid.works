import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The libSQL client ships a native binding for local file databases, which
  // breaks if the bundler tries to inline it.
  serverExternalPackages: ["@libsql/client"],
  images: {
    remotePatterns: [
      // YouTube poster frames are derived from the video id, so they are the
      // one thumbnail source we can build without an API call.
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
