<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-breakpoint="600"
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
        <v-list-item
          link
          @click="goToHomepage()"
        >
          <v-list-item-action>
            <v-icon>mdi-lightbulb</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Strona główna</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          @click="handleLogout()"
        >
          <v-list-item-action>
            <v-icon>mdi-door</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Wyloguj</v-list-item-title>
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

    <v-main>
      <v-container
        fluid
      >
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions('auth', ['logout']),
    toggleTheme() {
      this.$vuetify.theme.dark = ! this.$vuetify.theme.dark
    },
    handleLogout() {
      this.logout()

      this.$router.push({ name: 'login' })
    },
    goToHomepage() {
      this.$router.push({ name: 'index' })
    },
  }
}
</script>
