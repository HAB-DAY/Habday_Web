/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['habday.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
