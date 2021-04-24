<template>
  <v-container>Statystyki</v-container>
</template>

<script>

export default {
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ],
    }
  },
  layout: 'admin',
  middleware: 'auth',
}
</script>
