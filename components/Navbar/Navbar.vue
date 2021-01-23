<template>
  <v-app-bar
  app
  color="dark"
  fixed
  style="opacity: .97"
>
    <v-container class="py-0 fill-height">
      <v-toolbar-title
        class="headline text-uppercase navbar-title"
        style="letter-spacing: 2px !important; cursor: pointer"
        @click="$router.push('/')"
      >
        Ledsystem
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link"
        text
      >
        {{ link }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: [
      'Realizacje',
      'Kontakt',
    ],
  }),
}
</script>
