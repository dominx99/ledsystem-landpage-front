<template>
  <div class="media-card dark3 pa-5 pa-md-10 d-flex flex-column">
    <h3 class="mb-3">Let's get in touch</h3>
    <p>We are open to any suggestions or just to have chat.</p>
    <v-list
      three-line
      color="transparent"
    >
      <template>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>503 482 315</v-list-item-title>
            <v-list-item-subtitle>Telefon komórkowy</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-email</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>jakub@ledsystem.com.pl</v-list-item-title>
            <v-list-item-subtitle>Email</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-map</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jarosława Dąbrowskiego 18D</v-list-item-title>
            <v-list-item-title>14-200 Iława</v-list-item-title>
            <v-list-item-subtitle class="mt-3">Adres</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <div class="mt-auto">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 pa-8"
        icon
      >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-youtube',
      ],
    }),
  }
</script>

<style lang="scss">
.media-card {
  width: 100%;
  height: 100%;
  border-radius: 0 0 8px 8px;

  @media (min-width: 768px) {
    border-radius: 0 8px 8px 0;
  }
}
</style>

