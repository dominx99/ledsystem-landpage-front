<template>
  <div class="media-card dark3 d-flex justify-center align-center">
    <v-btn
      v-for="icon in icons"
      :key="icon"
      class="mx-4 pa-8"
      icon
    >
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-youtube',
      ],
    }),
  }
</script>

<style lang="scss">
.media-card {
  width: 100%;
  height: 100%;
  border-radius: 0 0 8px 8px;

  @media (min-width: 768px) {
    border-radius: 0 8px 8px 0;
  }
}
</style>

