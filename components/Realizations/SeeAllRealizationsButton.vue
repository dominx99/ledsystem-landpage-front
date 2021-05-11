<template>
  <v-btn
    @click="goToAllRealizations()"
    color="white"
    rounded
    outlined
    class="see-all-realizations-button pa-6"
  >
    Zobacz wszystkie
  </v-btn>
</template>

<script>
export default {
  methods: {
    goToAllRealizations() {
      this.$router.push({ name: 'realizacje' })
    }
  }
}
</script>

<style scoped lang="scss">
.see-all-realizations-button {
  font-size: 130%;
  width: 100%;

  @media (min-width: 960px) {
    width: auto;
  }
}
</style>
