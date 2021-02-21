<template>
  <v-card
    height="122"
  >
    <v-footer
      absolute
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="purple darken-3 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} &copy; <strong>Dominik Chylo</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
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
