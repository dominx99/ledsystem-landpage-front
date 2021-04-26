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
        <v-container class="my-4 mx-5 mx-md-0">
          <v-row>
            <v-col
              v-for="(column, index) in columns"
              :key="index"
              cols="12"
              :md="column.flex"
            >
              <h5 class="text-h5 text-left mb-2" v-text="column.title"></h5>
              <div class="d-flex flex-column justify-start align-start">
                <template
                  v-for="item in column.items"
                >
                  <a
                    v-if="item.href && item.isExternal"
                    :href="item.href"
                    class="d-block white--text text-decoration-none mb-1"
                    v-text="item.title"
                    target="_blank"
                  />

                  <NuxtLink
                    v-else-if="item.href"
                    :to="item.href"
                    class="d-block white--text text-decoration-none mb-1"
                    v-text="item.title"
                  />

                  <a
                    v-else-if="item.hash"
                    @click="goToElement(item.hash)"
                    class="d-block white--text text-decoration-none mb-1"
                    v-text="item.title"
                    :href="item.hash"
                  />

                  <p
                    v-else
                    class="d-block white--text text-decoration-none mb-1"
                    v-text="item.title"
                  />
                </template>
              </div>
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
    columns: [
      {
        title: 'Firma',
        flex: 4,
        items: [
          {
            title: 'Ledsystem Jakub Grajnert',
          },
          {
            title: 'NIP: 744-182-61-64',
          },
          {
            title: 'Dąbrowskiego 18D',
          },
          {
            title: '14-200 Iława',
          },
        ],
      },
      {
        title: 'Na skróty',
        flex: 4,
        items: [
          {
            title: 'Realizacje',
            hash: '#realizations',
          },
          {
            title: 'Oferta',
            hash: '#offer',
          },
          {
            title: 'Kontakt',
            hash: '#contact',
          },
        ],
      },
      {
        title: 'Media',
        flex: 4,
        items: [
          {
            isExternal: true,
            href: 'https://www.facebook.com/ledsystemilawa',
            title: 'Facebook',
          },
          {
            isExternal: true,
            href: 'https://www.instagram.com/ledsystem_ledlighting',
            title: 'Instagram',
          },
          {
            isExternal: true,
            href: 'https://www.youtube.com/watch?v=C_ddnZqj6o0',
            title: 'Youtube',
          },
        ],
      },
    ],
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
  }),
  methods: {
    async goToElement(targetElement) {
      if (this.$route.path != '/') {
        this.$router.push('/')
        setTimeout(() => this.$vuetify.goTo(targetElement), 500)

        return
      }

      this.$vuetify.goTo(targetElement)

      this.extended = false
    },
  }
}
</script>

<style lang="scss">
.footer-card {
  height: 628px;

  @media (min-width: 960px) {
    height: 332px;
  }
}
</style>
