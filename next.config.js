/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    domains: ['i.imgur.com', 'medium.com', 'cdn-images-1.medium.com'],
  },
};

module.exports = nextConfig;
