<template>
  <v-card
    class="footer-card"
  >
    <v-footer
      absolute
      padless
    >
      <v-card
        flat
        tile
        width="100%"
        class="darken-2 text-center"
        color="primary"
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-list
                color="transparent"
              >
                <v-list-item class="text-h5">Społeczność</v-list-item>
                <v-list-item>Facebook</v-list-item>
                <v-list-item>Instagram</v-list-item>
                <v-list-item>Youtube</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <v-list
                color="transparent"
              >
                <v-list-item class="text-h5">Społeczność</v-list-item>
                <v-list-item>Facebook</v-list-item>
                <v-list-item>Instagram</v-list-item>
                <v-list-item>Youtube</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" md="4">
              <v-list
                color="transparent"
              >
                <v-list-item class="text-h5">Społeczność</v-list-item>
                <v-list-item>Facebook</v-list-item>
                <v-list-item>Instagram</v-list-item>
                <v-list-item>Youtube</v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <v-card-text>
          <template
            v-for="(icon, index) in icons"
          >
            <v-btn
              class="mx-4"
              icon
              :href="icon.link"
              target="_blank"
            >
              <v-icon size="24px" v-text="icon.icon"></v-icon>
            </v-btn>
          </template>
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
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/ledsystemilawa'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/ledsystem_ledlighting'
      },
      {
        icon: 'mdi-youtube',
        link: 'https://www.youtube.com/watch?v=C_ddnZqj6o0'
      },
    ],
  })
}
</script>

<style lang="scss">
.footer-card {
  height: 820px;

  @media (min-width: 960px) {
    height: 356px;
  }
}
</style>
