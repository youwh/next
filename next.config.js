/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/next' : '',
};

module.exports = nextConfig;
