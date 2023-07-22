/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/oauth2.0/:path*',
  //       destination: 'https://nid.naver.com/oauth2.0/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
