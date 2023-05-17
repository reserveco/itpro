// const { promisify } = require('util')
// import { promisify } from 'util'
import { ProvidePlugin } from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'world-server',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css',
      },
      /* {
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css',
      }, */
    ],
    script: [
      // 'https://unpkg.com/@ionic/core@0.0.2-30/dist/ionic.js',
      // 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js',
      // 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js',
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/assets/js/scripts.js',
      mode: 'client',
    },
  ],

  types: ['@types/jquery', '@types/datatables.net'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // 'nuxt-vite',
    'nuxt-webpack-optimisations',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/nuxt-uikit
    'nuxt-uikit',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [],
    plugins: [
      new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ],
  },

  render: {
    asyncScripts: true,
  },
}
