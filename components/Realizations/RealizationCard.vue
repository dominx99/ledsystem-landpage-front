<template>
  <v-card
    class="card-width ma-5 teal dark3"
  >
    <v-img
      height="250"
      :src="realization.mainImage.thumbnail.url"
    ></v-img>
    <v-card-title v-text="realization.name"></v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['realization'],
}
</script>

<style lang="scss" scoped>
.card-width {
  width: calc(100% - 40px);

  @media (min-width: 768px) {
    width: calc(50% - 40px);
  }
}
</style>
