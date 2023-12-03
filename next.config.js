/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  ...nextConfig,
};
