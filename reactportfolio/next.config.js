/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '/test-react-portfolio',
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