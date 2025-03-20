/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Необходимо для статического экспорта для Netlify
};

module.exports = nextConfig; 