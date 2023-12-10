/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['swc-plugin-coverage-instrument', {}]],
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
