<template>
<section id="offer" class="dark2 pb-16">
  <v-container>
    <h3 class="text-h3 text-center my-16">Oferta</h3>

    <OfferItem
      v-for="(offer, index) in offers"
      :offer="offer"
    />
  </v-container>
</section>
</template>

<script>
import OfferItem from './OfferItem.vue'

export default {
  components: {
    OfferItem,
  },
  data: () => ({
    offers: [
      {
        side: 'left',
        title: 'Oprawy oświetleniowe',
        subtitle: 'Sprzedaż opraw oświetleniowych marek spełniających nasze kryteria jakości i żywotności.',
        img: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/d5aad01cb6cb5eaa6e445c388b33db0f/tlo2.JPG',
        list: [
          'Żyrandole',
          'Kinkiety',
          'Tuby',
          'Wpuszczane',
          'Natynkowe',
          'Zwisy',
        ],
      },
      {
        side: 'right',
        title: 'Usługi Elektroinstalacyjne',
        subtitle: 'Kompleksowe usługi związane z wykonaniem, modernizacją instalacji.',
        img: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/0b10917459018d96b86391322b9f8c2f/tlo1.JPG',
        list: [
          'Montaż instalacji elektrycznych',
          'Montaż instalacji teletechcznicznych',
          'Modernizacja instalacji elektrycznych',
          'Modernizacja instalacji teletechnicznych',
          'Montaż osprzętu elektrycznego',
          'Montaż lamp i oświetlenia',
        ],
      },
      {
        side: 'left',
        title: 'Projektowanie oświetlenia',
        subtitle: 'Planowanie rozmieszczenia oświetlenia oraz dobór lamp i ich parametrów technicznych.',
        img: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/fba4014d2ff385946fbb545e74629cc9/tlo3.JPG',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
      },
    ],
  }),
}
</script>
