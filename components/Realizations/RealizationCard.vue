<template>
  <v-card
    class="teal dark3"
  >
    <v-img
      :aspect-ratio="16/7"
      :src="thumbnailUrl()"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: ['realization'],
  methods: {
    thumbnailUrl() {
      return this.realization.mainImage.find(image => image.type == 'thumbnail').url
    }
  }
}
</script>
