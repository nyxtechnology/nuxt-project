const path = require('path')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
     // Doc: https://github.com/nuxt-community/router-module
    ['@nuxtjs/router', {
      path: path.resolve(__dirname, 'router'),
      fileName: 'index.js'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/pwa-module
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/browserconfig
    '@nuxtjs/browserconfig',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/component-cache
    ['@nuxtjs/component-cache', {
      maxAge: 1000 * 60 * 60
    }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Apollo module configuration
   ** See https://github.com/nuxt-community/apollo-module#setup
   */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://admin.pece.local'
      }
    }
  },
  /*
   ** Sitemap module configuration
   ** See https://github.com/nuxt-community/sitemap-module#setup
   ** See https://github.com/ekalinin/sitemap.js#usage
   */
  sitemap: {
    hostname: '#',
    gzip: true
  },
  /*
   ** svg Sprite configuration
   */
  svgSprite: {
    input: '~/assets/svg/'
  },
  /*
   ** Browser config
   */
  browserconfig: {
    TileColor: '#6c6fd4'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
