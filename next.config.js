/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

const settings = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      }
    ],
  }
};

module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
