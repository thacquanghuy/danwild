/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "main.scss";`,
  },
  images: {
    domains: ['www.webfx.com'],
  },
}
