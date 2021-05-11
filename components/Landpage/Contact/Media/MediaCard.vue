<template>
  <div class="media-card dark3 darken-2 pa-5 pa-md-10 d-flex flex-column">
    <h3 class="mb-3">Masz pytania? Zadzwoń!</h3>
    <p>Jesteśmy dostępni od poniedziałku do piątku od 9:00 do 17:00.</p>
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
            <v-list-item-subtitle>Sprzedaż Detaliczna</v-list-item-subtitle>
            <v-list-item-title>+48 533 767 994</v-list-item-title>
            <v-list-item-title>agata@ledsystem.com.pl</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-lightbulb</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-subtitle>Inwestycje / Montaże</v-list-item-subtitle>
            <v-list-item-title>+48 608 590 149</v-list-item-title>
            <v-list-item-title>jakub@Ledsystem.com.pl</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle>Dział techniczny</v-list-item-subtitle>
            <v-list-item-title>+48 503 482 315</v-list-item-title>
            <v-list-item-title>robert@ledsystem.com.pl</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-map</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle>Lokalizacja</v-list-item-subtitle>
            <v-list-item-title>Jarosława Dąbrowskiego 18D</v-list-item-title>
            <v-list-item-title>14-200 Iława</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

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

