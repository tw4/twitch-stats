/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    AUTHORIZATION_TOKEN: process.env.AUTHORIZATION_TOKEN,
    CLIENT_ID: process.env.CLIENT_ID,
    PARENT: process.env.PARENT,
  },
};

module.exports = nextConfig;
