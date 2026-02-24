/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  env: {
    NEXT_PUBLIC_WHATSAPP: '+1234567890',
    NEXT_PUBLIC_INSTAGRAM: 'https://instagram.com/yourhandle',
    NEXT_PUBLIC_EMAIL: 'your@email.com',
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;