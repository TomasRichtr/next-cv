import type {
  NextConfig,
} from "next";

const awsHostname = process.env.AWS_BUCKET_URL
  ? process.env.AWS_BUCKET_URL.replace(/^https?:\/\//, "").split("/")[0]
  : "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: awsHostname
      ? [
          {
            protocol: "https",
            hostname: awsHostname,
            port: "",
            pathname: "/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
