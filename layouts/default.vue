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
}
</script>
