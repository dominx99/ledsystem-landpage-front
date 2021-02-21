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

<style>
.media-card {
  width: 50%;
}
</style>

