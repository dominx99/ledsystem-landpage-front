<template>
  <section>
    <v-container>
      <h3 class="text-h3 text-center my-16">Realizacje</h3>
      <v-layout
        class="d-flex justify-start flex-wrap"
      >
        <RealizationCard
          v-for="(realization, index) in realizations"
          :key="index"
          :realization="realization"
        />
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import RealizationCard from './RealizationCard'

export default {
  components: {
    RealizationCard,
  },
  data() {
    return {
      realizations: [
        {
          name: 'Oświetlenie LED #1',
          mainImage: {
            thumbnail: {
              url: 'http://ledsystem.com.pl/img/A/A1mini.jpg',
            },
          },
        },
        {
          name: 'Oświetlenie LED #2',
          mainImage: {
            thumbnail: {
              url: ''
            },
          },
        },
        {
          name: 'Oświetlenie LED #3',
          mainImage: {
            thumbnail: {
              url: ''
            },
          },
        },
      ],
    }
  }
}
</script>
