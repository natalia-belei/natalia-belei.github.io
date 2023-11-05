/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure your client-side Webpack here
    }
    return config;
  },
}