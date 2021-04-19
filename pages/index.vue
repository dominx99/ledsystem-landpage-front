<template>
  <v-layout column>
    <MainCarousel />
    <RealizationList />
    <OfferSection />
    <ContactSection />
  </v-layout>
</template>

<script>
import RealizationList from './../components/Realizations/RealizationList'
import ContactSection from './../components/Contact/ContactSection'
import OfferSection from './../components/Landpage/Information/OfferSection.vue'
import MainCarousel from './../components/Landpage/Header/Carousel/MainCarousel.vue'

export default {
  components: {
    OfferSection,
    MainCarousel,
    RealizationList,
    ContactSection,
  },
}
</script>
