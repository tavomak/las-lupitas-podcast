/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

module.exports = nextConfig;
