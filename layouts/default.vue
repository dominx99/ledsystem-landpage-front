<template>
  <v-app>
    <Navbar />

    <v-main class="dark2 darken-1">
      <nuxt />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from './../components/Navbar/Navbar'
import Footer from './../components/Footer/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  head() {
    let productionScripts = []

    if (process.env.NODE_ENV === 'prod') {
      productionScripts = [
        { hid: 'analytics', src: 'https://www.googletagmanager.com/gtag/js?id=G-YLDB5297ZG', defer: true },
        {
          hid: 'analytics-script',
          innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-YLDB5297ZG');",
          type: 'text/javascript' }
      ]
    }

    return {
      script: [].concat(productionScripts),
      __dangerouslyDisableSanitizersByTagID: {
        'analytics-script': ['innerHTML']
      }
    }
  }
}
</script>
