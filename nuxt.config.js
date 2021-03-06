import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Ledsystem',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Usługi elektryczne, modernizacja i wykonanie instalacji. Sprzedaż i doradztwo w zakresie oświetlenia, taśm LED, sterowników i zasilaczy.'
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.SELF_URL,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#752929',
          accent: colors.grey.darken1,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: "#212121",
          dark1: '#212121',
          dark2: '#424242',
          dark3: '#616161',
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: process.env.PORT,
  },

  env: {
    baseUrl: process.env.BASE_URL,
    nodeEnv: process.env.NODE_ENV,
  },

  generate: {
    routes(callback) {
      axios
        .get(process.env.GENERATE_BASE_URL + '/api/v1/realizations')
        .then(res => {
          let resultRoutes = []

          res.data.forEach(realization => {
            resultRoutes.push('/realizacje/' + realization.slug)
            resultRoutes.push('/admin/realizacje/' + realization.slug)
          })

          callback(null, resultRoutes)
        })
        .catch(callback)
    }
  },
}
