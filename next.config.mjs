/** @type {import('next').NextConfig} */

const env = (key) => process.env[key];
const nextConfig = {
  env: {
    NEXT_PUBLIC_EMAIL_SERVICE_ID: env("NEXT_PUBLIC_EMAIL_SERVICE_ID"),
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID: env("NEXT_PUBLIC_EMAIL_TEMPLATE_ID"),
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: env("NEXT_PUBLIC_EMAIL_PUBLIC_KEY")
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
