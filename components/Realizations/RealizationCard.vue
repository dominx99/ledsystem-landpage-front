<template>
  <v-card
    class="teal dark3"
  >
    <v-img
      :aspect-ratio="16/7"
      :src="realization.mainImage.thumbnail.url"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: ['realization'],
}
</script>
