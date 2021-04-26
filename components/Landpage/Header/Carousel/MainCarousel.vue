<template>
<section class="header-section">
  <v-carousel
    hide-delimiters
    height="540"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="carousel-item-image"
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-container
          class="header-container fill-height"
        >
          <v-row
            class="header-row"
            no-gutters
          >
            <v-col
              cols="12"
              md="5"
              class="header-column"
            >
              <h2 class="text-h3 title" v-text="item.title"></h2>
              <p class="subtitle" v-text="item.subtitle"></p>
            </v-col>
            <v-col
              cols="12"
              md="7"
              class="animation-column"
            >
              <component
                v-if="item.icon"
                :is="item.icon.element"
                :height="item.icon.height"
                :width="item.icon.width"
                :fill="item.icon.color"
                class="mb-5 mb-md-0"
              />
              <v-img
                class="icon-img mb-5 mb-md-0"
                v-if="item.img"
                contain
                :src="item.img.src"
                :max-width="item.img.width"
                :style="{ maxHeight: item.img.height + 'px' }"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</section>
</template>

<script>
import LightbulbIcon from './../../../Icons/LightbulbIcon.vue'
import LedStripIcon from './../../../Icons/LedStripIcon.vue'
import SocketIcon from './../../../Icons/SocketIcon.vue'
import ProjectManagementIcon from './../../../Icons/ProjectManagmentIcon.vue'

export default {
  data: () => ({
    items: [
      {
        src: 'slider/projektowanie_slider.jpg',
        title: 'Projektowanie Oświetlenia',
        subtitle: 'Oferujemy usługi związane z doradztwem w zakresie oświetlenia. Aranżujemy światło dopasowane do potrzeb i oczekiwań wizualnych klienta.',
        icon: {
          element: ProjectManagementIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
      {
        src: 'slider/tasmy_led.jpg',
        title: 'Taśmy Led',
        subtitle: 'W naszej ofercie znajduje się szeroki wybór taśm led, różnią się one przeróżnymi parametrami. Z pewnością jakąś dla Ciebie wybierzemy!',
        img: {
          src: 'slider/icons/tasma.png',
          width: 184,
        },
      },
      {
        src: 'slider/elektryka.jpg',
        title: 'Elektroinstalacje',
        subtitle: 'Zajmujemy się wykonaniem i modernizacją instalacji elektrycznych oraz teletechnicznych. Także koordynacją prac z nimi związanych.',
        icon: {
          element: SocketIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
      {
        src: 'slider/oprawy.jpg',
        title: 'Oprawy Oświetleniowe',
        subtitle: 'Doświadczenie zdobyte w trakcie usług montażowych, wykorzystujemy przy sprzedaży lamp i źródeł śwaitła. Współpracujemy z wieloma renomowanymi markami z POLSKI i EUROPY.',
        icon: {
          element: LightbulbIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
          //color: '#84FFFF',
        },
      },
      {
        src: 'slider/akcesoria_led.jpg',
        title: 'Akcesoria LED',
        subtitle: 'Zasilacze 12V, 24V - wodoodporne lub modułowe. Sterowniki, piloty i panele sterujące. Do wszystkich taśm. Profile aluminiowe, natynkowe, wpuszczane, architektoniczne.',
        img: {
          src: 'slider/icons/pilot.png',
          width: 184,
          height: 220,
        },
      },
      {
        src: 'slider/montaz_tasm_led.jpg',
        title: 'Montaż Taśm LED',
        subtitle: 'Od wielu lat zajmujemy się montażem taśm led. Dbamy o każdy detal mogący wpłynąć na działanie i efekt świecenia taśmy.',
        img: {
          src: 'slider/icons/montaz_tasm.png',
          width: 184,
        },
      },
    ],
  })
}

</script>

<style lang="scss">
.carousel-item-image .v-image__image--cover {
  filter: brightness(60%);
}

.header-section {
  .header-container {
    .header-row {
      @media (min-width: 960px) {
        align-items: center;
      }

      .header-column {
        height: 55%;
        order: 2;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        padding: 0 2.5rem;

        @media (min-width: 960px) {
          height: 100%;
          order: 1;
          padding: 0;
          margin: 0;
          text-align: left;
          align-items: flex-start;
        }

        .title {
          margin-bottom: 2rem;
        }

        .subtitle {
          text-align: justify;
          line-height: 180%;
        }
      }

      .animation-column {
        height: 45%;
        order: 1;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;

        @media (min-width: 960px) {
          height: 100%;
          order: 2;
          justify-content: flex-end
        }

        .icon-img {
          @media (min-width: 960px) {
            max-height: initial !important;
          }
        }
      }
    }
  }
}
</style>
