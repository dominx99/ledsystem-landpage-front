<template>
  <v-layout column>
    <MainCarousel />
    <RealizationList />
    <InformationCards />
    <ContactSection />
  </v-layout>
</template>

<script>
import RealizationList from './../components/Realizations/RealizationList'
import ContactSection from './../components/Contact/ContactSection'
import InformationCards from './../components/Landpage/Information/InformationCards.vue'
import MainCarousel from './../components/Landpage/Header/Carousel/MainCarousel.vue'

export default {
  components: {
    InformationCards,
    MainCarousel,
    RealizationList,
    ContactSection,
  },
}
</script>
