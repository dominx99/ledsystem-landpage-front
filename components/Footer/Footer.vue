<template>
  <v-card
    height="54"
  >
    <v-footer
      absolute
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="teal darken-2 text-center"
        color="primary"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} &copy; <strong>Dominik Chylo</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
