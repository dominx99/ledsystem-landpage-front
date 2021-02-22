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
          >
            <v-col
              :xs="12"
              :sm="12"
              :md="5"
              class="header-column"
            >
              <h1 class="text-h3 title" v-text="item.title"></h1>
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

export default {
  data: () => ({
    items: [
      {
        src: 'http://ledsystem.com.pl/img/C/10.jpg',
        title: 'Oświetlenie pomieszczeń',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a porta nisl. Mauris viverra, nibh a rutrum finibus, sapien ex vestibulum eros, vitae ultricies turpis quam vitae nulla',
        icon: {
          element: LightbulbIcon,
          height: 184,
          width: 184,
          color: '#84FFFF',
        },
      },
      {
        src: 'http://ledsystem.com.pl/img/A/1.jpg',
        title: 'Oświetlenie pomieszczeń',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a porta nisl. Mauris viverra, nibh a rutrum finibus, sapien ex vestibulum eros, vitae ultricies turpis quam vitae nulla',
        icon: {
          element: LedStripIcon,
          height: 184,
          width: 184,
        },
      },
      {
        src: 'http://ledsystem.com.pl/img/D/1.jpg',
        title: 'Oświetlenie pomieszczeń',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a porta nisl. Mauris viverra, nibh a rutrum finibus, sapien ex vestibulum eros, vitae ultricies turpis quam vitae nulla',
        icon: {
          element: SocketIcon,
          height: 184,
          width: 184,
          color: '#FEFEFE',
        },
      },
    ],
  })
}

</script>

<style lang="scss">
.carousel-item-image .v-image__image {
  filter: brightness(10%);
}

.header-section {
  .header-container {
    .header-row {
      @media (min-width: 768px) {
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

        @media (min-width: 768px) {
          height: 100%;
          order: 1;
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

        @media (min-width: 768px) {
          height: 100%;
          order: 3;
          justify-content: flex-end
        }
      }
    }
  }
}

@keyframes lightUp {
  0% {
    background: rgb(16, 21, 30);
  }
  20% {
    background: rgb(53, 117, 156);
  }
  40% {
    background: rgb(16, 21, 30);
  }
  100% {
    background: rgb(16, 21, 30);
  }
}
</style>
