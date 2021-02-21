<template>
  <v-app>
    <Navbar />

    <v-main class="dark2">
      <nuxt />
    </v-main>
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
