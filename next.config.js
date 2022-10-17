/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.bitkubnext.io'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
