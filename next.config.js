const nextTranslate = require('next-translate-plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'media.graphassets.com',
      'us-east-1.graphassets.com',
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextTranslate(nextConfig);
