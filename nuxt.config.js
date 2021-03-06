export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'chaldal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/css/style.css',
    '~assets/css/utility.css',
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/fontawesome.js",
    "~/plugins/global.js",
    { src: '~/plugins/vuex-persist', ssr: false }
   
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'https://surebuyn.herokuapp.com/', // Used as fallback if no runtime config is provided
  },

  // axios: {
  //   baseURL: 'http://localhost:5000', // Used as fallback if no runtime config is provided
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
