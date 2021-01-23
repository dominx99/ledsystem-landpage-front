<template>
  <v-app id="inspire">
    <Navbar />

    <v-main class="grey darken-4">
      <v-content class="pa-0">
        <nuxt />
      </v-content>
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
}
</script>
