<template>
  <section id="realizations" class="dark1 pb-16">
    <v-container>
      <h3 class="text-h3 text-center my-16">Realizacje</h3>
      <v-row>
        <v-col
          v-for="(realization, index) in realizations"
          :key="index"
          :cols="12"
          :md="6"
        >
          <RealizationCard
            :realization="realization"
          />
        </v-col>
      </v-row>
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
          name: 'Dom Parterowy',
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
              url: 'http://ledsystem.com.pl/img/B/B1mini.jpg',
            },
          },
        },
        {
          name: 'Oświetlenie LED #3',
          mainImage: {
            thumbnail: {
              url: 'http://ledsystem.com.pl/img/C/C1mini.jpg',
            },
          },
        },
      ],
    }
  }
}
</script>
