<template>
  <v-container id="realizationPage">
    <div class="mt-5" v-if="!loading">
      <v-btn
        icon
        class="mb-10"
        @click="back()"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-row>
        <v-col md="6" cols="12">
          <v-img
            class="rounded-lg"
            :src="mainImageThumbnailUrl()"
            :aspect-ratio="16/9"
            alt="Miniaturka obrazka głównej realizacji"
          ></v-img>
        </v-col>
        <v-col md="6" xs="12">
          <h2 class="text-uppercase h2" v-text="realization.name"></h2>
          <p
            class="subtitle-1 mt-6"
            v-text="realization.description"
          ></p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col
          cols="6"
          md="2"
          v-for="(media, index) in realization.medias"
          :key="index"
        >
          <v-img
            :src="thumbnail(media).url"
            class="rounded-lg bigpicture-image"
            :aspect-ratio="16/9"
            @click="openFullScreen($event, index)"
            :data-bp="original(media).url"
            aria-controls
            alt="Miniaturka jednego z obrazków realizacji"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BigPicture from 'bigpicture'

export default {
  head() {
    return {
      title: `${this.realization.name} | Ledsystem`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow'
        },
      ],
    }
  },
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  computed: mapState({
    realization: state => state.guest.realizations.state.realization,
    loading: state => state.guest.realizations.state.loading.realization,
  }),
  mounted() {
    this.$store.dispatch('guest/realizations/find', this.slug)
  },
  methods: {
    mainImageThumbnailUrl() {
      return this.realization.mainImage.images.find(image => image.type == 'thumbnail').url
    },
    thumbnail(media) {
      return media.images.find(image => image.type == 'thumbnail')
    },
    original(media) {
      return media.images.find(image => image.type == 'original')
    },
    back() {
      if (this.$router.history._startLocation == this.$router.history.current.path) {
        this.$router.push('/')

        return
      }

      this.$router.back()
    },
    openFullScreen(e, key) {
      BigPicture({
        el: e.target,
        gallery: document.querySelectorAll('#realizationPage .bigpicture-image'),
        position: key,
      })
    },
  }
}
</script>
