/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['es'],
    defaultLocale: 'es'
  },
  reactStrictMode: true,
})
