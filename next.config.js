/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/article',
        destination: '/en/article',
        permanent: true,
      },
      {
        source: '/article/advantages',
        destination: '/en/article/advantages-being-freelance-paraguay',
        permanent: true,
      },
      {
        source: '/article/tourism',
        destination: '/en/article/tourism-paraguay-sites-visit',
        permanent: true,
      },
      {
        source: '/article/lowesttaxedcountries',
        destination: '/en/article/low-taxed-countries-world',
        permanent: true,
      },
      {
        source: '/article/weather',
        destination: '/en/article/climate-paraguay',
        permanent: true,
      },
      {
        source: '/freelance',
        destination: '/move-to-paraguay-as-a-freelancer',
        permanent: true,
      },
      {
        source: '/advantages',
        destination: '/en/article/advantages-being-freelance-paraguay',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es'
  },
  reactStrictMode: true,
})
