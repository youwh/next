/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // baseUrl: process.env.NODE_ENV === 'production' ? '/next' : '',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = process.env.NODE_ENV === 'production' ? '/next/' : '/';
    }
    return config;
  },
};

module.exports = nextConfig;
