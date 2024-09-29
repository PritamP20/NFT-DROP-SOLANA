/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io', 'gateway.irys.xyz', 'arweave.net'], // Add all required domains here
  },
};

module.exports = nextConfig;
