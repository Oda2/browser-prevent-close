/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['purr.objects-us-east-1.dream.io']
  }
}

module.exports = nextConfig
