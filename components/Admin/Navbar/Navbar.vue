<template>
  <v-app-bar
    color="deep-purple"
    dark
  >
    <v-app-bar-nav-icon
      @click="drawer = true"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Ledsystem</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
