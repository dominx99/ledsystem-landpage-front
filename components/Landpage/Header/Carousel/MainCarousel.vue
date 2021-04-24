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
              :xs="12"
              :sm="12"
              :md="5"
              class="header-column"
            >
              <h2 class="text-h3 title" v-text="item.title"></h2>
              <p class="subtitle" v-text="item.subtitle"></p>
            </v-col>
            <v-col
              :xs="12"
              :sm="12"
              :md="7"
              class="animation-column"
            >
              <component
                :is="item.icon.element"
                :height="item.icon.height"
                :width="item.icon.width"
                :fill="item.icon.color"
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
        src: 'slider/tlo1.jpeg',
        title: 'Projektowanie Oświetlenia',
        subtitle: 'Oświetlamy wnętrza i zewnętrza, aranżując światło dopasowane do potrzeb danego pomieszczenia, przeznaczenia, designu oraz oczekiwań klienta.',
        icon: {
          element: ProjectManagementIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
      {
        src: 'slider/tlo2.jpeg',
        title: 'Taśmy Led',
        subtitle: 'W naszej ofercie znajduje się szerokie spektrum taśm led, pozwalają one tworzyć światło dekoracyjne ale także użytkowe, co udało nam się udowodnić w realizacji MARINA IŁAWA',
        icon: {
          element: LedStripIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
      {
        src: 'slider/tlo3.jpeg',
        title: 'Elektroinstalacje',
        subtitle: 'Zajmujemy się wykonaniem i modernizacją instalacji elektrycznych oraz teletechnicznych. Także koordynacją prac z nimi związanych',
        icon: {
          element: SocketIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
      {
        src: 'slider/tlo4.jpeg',
        title: 'Oprawy Oświetleniowe',
        subtitle: 'Doświadczenie zdobyte w trakcie usług montażowych, wykorzytujemy przy sprzedaży lamp i źródeł śwaitła. Współpracujemy z wieloma renomowanymi markami z POLSKI i EUROPY',
        icon: {
          element: LightbulbIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
          //color: '#84FFFF',
        },
      },
    ],
  })
}

</script>

<style lang="scss">
.carousel-item-image .v-image__image {
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

      .space-column {
        order: 2;
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
          order: 3;
          justify-content: flex-end
        }
      }
    }
  }
}
</style>
