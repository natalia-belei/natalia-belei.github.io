/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  basePath: '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configure your client-side Webpack here
    }

    config.module.rules.push({
      test: /\.pdf$/,
      use: 'raw-loader',
    });

    return config;
  },
}