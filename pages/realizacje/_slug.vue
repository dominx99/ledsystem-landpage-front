<template>
  <v-container>
    <div class="mt-10" v-if="!loading">
      <v-row>
        <v-col :md="6">
          <v-img
            class="rounded-lg"
            :src="mainImageThumbnailUrl()"
          ></v-img>
        </v-col>
        <v-col :md="6">
          <h2 class="text-uppercase h2" v-text="realization.name"></h2>
          <p
            class="subtitle-1 mt-6"
            v-text="realization.description"
          ></p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-col
          :md="2"
          v-for="(image, index) in thumbnails()"
          :key="index"
        >
          <v-img
            :src="image.url"
            class="rounded-lg"
            :aspect-ratio="16/9"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
      return this.realization.mainImage.find(image => image.type == 'thumbnail').url
    },
    thumbnails() {
      return this.realization.images.filter(image => image.type == 'thumbnail')
    },
  }
}
</script>
