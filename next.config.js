/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.bitkubnext.io'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
