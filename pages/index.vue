<template>
  <v-layout column>
    <MainCarousel />
    <RealizationVisibleOnMainPageList />
    <OfferSection />
    <ContactSection />
  </v-layout>
</template>

<script>
import RealizationVisibleOnMainPageList from './../components/Realizations/RealizationVisibleOnMainPageList.vue'
import ContactSection from './../components/Contact/ContactSection'
import OfferSection from './../components/Landpage/Information/OfferSection.vue'
import MainCarousel from './../components/Landpage/Header/Carousel/MainCarousel.vue'

export default {
  components: {
    OfferSection,
    MainCarousel,
    RealizationVisibleOnMainPageList,
    ContactSection,
  },
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow'
        }
      ],
    }
  },
}
</script>
