<template>
  <v-app-bar
    app
    color="dark"
    fixed
    id="navbar"
    style="background: rgb(16, 21, 30) none repeat scroll 0% 0% !important;"
  >
    <v-container class="py-0 fill-height">
      <v-img
        src="ledlogo_white.png"
        max-height="49"
        max-width="250"
      />
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        text
        @click="$vuetify.goTo(link.targetElement)"
        v-text="link.name"
        class="d-none d-md-flex"
      ></v-btn>
      <v-btn
        icon
        tile
        class="d-sm-flex d-md-none"
        style="margin-right: -12px;"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
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
