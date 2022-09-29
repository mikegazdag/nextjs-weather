/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    dirs: ['reducers', 'utils', 'contexts', 'hooks'], // Custom folders
  },
};
