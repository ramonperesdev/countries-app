/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
