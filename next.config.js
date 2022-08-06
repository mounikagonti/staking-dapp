/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    ALCHEMY_ID: "",
  },
}

module.exports = nextConfig
