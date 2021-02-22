<template>
<section id="information-cards" class="dark2 pb-16">
  <v-container>
    <h3 class="text-h3 text-center my-16">Oferta</h3>
    <v-row dense>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        :md="card.flex.cols"
        :xs="card.flex.md"
      >
        <InformationCard
          :card="card"
        />
      </v-col>
    </v-row>
  </v-container>
</section>
</template>

<script>
import InformationCard from './InformationCard'

export default {
  components: {
    InformationCard,
  },
  data: () => ({
    cards: [
      {
        title: 'Doradztwo oświetleniowe',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
        flex: {
          cols: 6,
          md: 12,
        },
        color: 'blue darken-1'
      },
      {
        title: 'Oprawy oświetleniowe',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
        flex: {
          cols: 6,
          md: 12,
        },
        color: 'cyan darken-1'
      },
      {
        title: 'Oświetlenie',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
        flex: {
          cols: 6,
          md: 12,
        },
        color: 'teal darken-1'
      },
      {
        title: 'Oświetlenie',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
        flex: {
          cols: 6,
          md: 12,
        },
        color: 'green darken-1'
      },
    ],
  }),
}
</script>
