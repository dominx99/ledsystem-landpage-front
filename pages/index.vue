<template>
  <v-layout column>
    <MainVideo />
    <RealizationList />
    <ContactSection />
  </v-layout>
</template>

<script>
import RealizationList from './../components/Realizations/RealizationList'
import ContactSection from './../components/Contact/ContactSection'
import MainVideo from './../components/Landpage/Header/MainVideo'
import MainCarousel from './../components/Landpage/Header/Carousel/MainCarousel.vue'

export default {
  components: {
    MainVideo,
    MainCarousel,
    RealizationList,
    ContactSection,
  },
}
</script>
