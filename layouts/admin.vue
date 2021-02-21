<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-break-point="600"
      :mini-variant="$vuetify.breakpoint.mdAndDown && $vuetify.breakpoint.smAndUp"
      :style="{background: $vuetify.theme.themes[theme].drawer}"
      app
    >
      <v-list dense>
        <v-list-item
          link
          to="/admin/realizacje"
        >
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Realizacje</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="toggleTheme()"
        >
          <v-list-item-action>
            <v-icon>mdi-brightness-6</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ciemny tryb</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Ledsystem</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './../components/Admin/Navbar/Navbar'

export default {
  components: {
    Navbar,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = ! this.$vuetify.theme.dark
    }
  }
}
</script>
