/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/google",
        destination: "https://www.google.com",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
