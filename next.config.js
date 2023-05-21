const nextTranslate = require('next-translate-plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'media.graphassets.com',
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  ignoreDuringBuilds: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextTranslate(nextConfig);
