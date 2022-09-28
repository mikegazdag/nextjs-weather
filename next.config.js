/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    dirs: ['reducers', 'utils', 'contexts', 'hooks'], // Custom folders
  },
};
