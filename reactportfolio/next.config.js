/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '/jobs-react-portfolio',
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