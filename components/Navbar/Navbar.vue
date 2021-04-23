<template>
  <v-app-bar
    app
    fixed
    id="navbar"
    color="dark"
    class="dark1"
  >
    <v-container class="py-0 fill-height">
      <v-img
        src="/ledlogo_white.png"
        max-height="49"
        max-width="200"
        width="200"
        type="button"
        contain
        class="transparent"
        @click="logoAction()"
      />
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        text
        @click="goToElement(link.targetElement)"
        v-text="link.name"
        class="d-none d-md-flex"
      ></v-btn>
      <v-btn
        icon
        tile
        class="d-sm-flex d-md-none"
        style="margin-right: -12px;"
        @click="extended = ! extended"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>

    <template
      v-slot:extension
      v-if="extended"
    >
      <v-list
        class="navbar-list-group"
      >
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            @click="goToElement(link.targetElement)"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    extended: false,
    links: [
      {
        icon: 'mdi-inbox',
        name: 'Realizacje',
        targetElement: '#realizations',
      },
      {
        icon: 'mdi-inbox',
        name: 'Oferta',
        targetElement: '#offer',
      },
      {
        icon: 'mdi-email-open',
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
    },
    async goToElement(targetElement) {
      if (this.$route.path != '/') {
        this.$router.push('/')
        setTimeout(() => this.$vuetify.goTo(targetElement), 500)

        return
      }

      this.$vuetify.goTo(targetElement)

      this.extended = false
    },
  },
}
</script>

<style lang="scss">
#navbar {
  height: fit-content !important;
}
.v-toolbar__extension {
  height: fit-content !important;
}

.navbar-list-group {
  width: 100%;
  background-color: inherit !important;
}
</style>
