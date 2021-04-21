<template>
<section id="offer" class="dark2 darken-1 pb-16">
  <v-container>
    <h3 class="text-h3 text-center my-16">Oferta</h3>

    <OfferItem
      v-for="(offer, index) in offers"
      :offer="offer"
      :key="index"
      :index="index"
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
        title: 'Oprawy oświetleniowe',
        subtitle: 'Sprzedaż opraw oświetleniowych marek spełniających nasze kryteria jakości i żywotności.',
        img: 'offer/oprawy_oswietleniowe.jpg',
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
        title: 'Usługi Elektroinstalacyjne',
        subtitle: 'Kompleksowe usługi związane z wykonaniem, modernizacją instalacji.',
        img: 'offer/elektroinstalacje.jpg',
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
        title: 'Projektowanie oświetlenia',
        subtitle: 'Planowanie rozmieszczenia oświetlenia oraz dobór lamp i ich parametrów technicznych.',
        img: 'offer/tasmy_led.jpg',
        list: [
          'Poznajemy twoje potrzeby',
          'Przedstawiamy ofertę',
          'Wybieramy najlepsze dla ciebie rozwiązanie',
          'Dostarczamy produkt w miejsce inwestycji',
          'Prowadzimy wsparcie techniczne',
        ],
      },
      {
        title: 'Taśmy LED i Akcesoria',
        subtitle: 'Profesjonalne taśmy led dla zastosowań dekoracyjnych i użytkowych.',
        img: 'offer/tasmy_led.jpg',
        list: [
          'Taśmy LED 12/24V',
          'Taśmy LED RGB, RGBW',
          'Cyfrowe Taśmy LED',
          'Sterowniki',
          'Profile LED',
          'Zasilacze',
          'Akcesoria',
        ],
      },
      {
        title: 'Włączniki dotykowe',
        subtitle: 'Renomowana marka LIVOLO, dotykowe szklane włączniki.',
        img: 'offer/osprzet_elektryczny.jpg',
        list: [
          'Szeroka gama kolorów',
          'Wysoka jakość wykonania',
          'Montaż i Konfiguracja',
          'Pomoc Techniczna',
          'Mnogość rozwiazań',
        ],
      },
    ],
  }),
}
</script>
