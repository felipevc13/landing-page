/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const withPlugins = require('next-compose-plugins')

const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([optimizedImages])
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
