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
import MainVideo from './../components/Landpage/Header/MainVideo'
import InformationCards from './../components/Landpage/Information/InformationCards.vue'
import MainCarousel from './../components/Landpage/Header/Carousel/MainCarousel.vue'

export default {
  components: {
    MainVideo,
    InformationCards,
    MainCarousel,
    RealizationList,
    ContactSection,
  },
}
</script>
