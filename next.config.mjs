// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  poweredByHeader: false,
  // experimental: {
  //   typedRoutes: true,
  // },
};

export default nextConfig;
