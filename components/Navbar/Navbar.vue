<template>
  <v-app-bar
  app
  color="dark"
  fixed
  style="opacity: .97"
  id="navbar"
>
    <v-container class="py-0 fill-height">
      <v-toolbar-title
        class="headline text-uppercase navbar-title"
        style="letter-spacing: 2px !important; cursor: pointer"
        @click="logoAction()"
      >
        Ledsystem
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        text
        @click="$vuetify.goTo(link.targetElement)"
        v-text="link.name"
      ></v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Realizacje',
        targetElement: '#realizations',
      },
      {
        name: 'Kontakt',
        targetElement: '#contact',
      }
    ],
  }),
  methods: {
    logoAction() {
      if (this.$route.name === 'index') {
        this.$vuetify.goTo('#navbar')

        return
      }

      this.$router.push('/')
    }
  },
}
</script>
