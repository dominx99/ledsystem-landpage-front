<template>
  <v-row class="my-16">
    <v-col cols="6" :order="offer.side == 'left' ? 2 : 1">
      <v-row>
        <v-col cols="12">
          <h2 v-text="offer.title"></h2>
          <p v-text="offer.subtitle" class="grey--text text--lighten-1"></p>
          <v-list
            color="transparent"
            class="pa-0"
          >
            <v-list-item
              v-for="(item, index) in offer.list"
              :key="index"
              class="pa-0"
            >
              <v-list-item-avatar class="pa-0 ma-0">
                <v-icon>mdi-check</v-icon>
              </v-list-item-avatar>
              <v-list-item-content
                class="pa-0"
                v-text="item"
              ></v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="6" :order="offer.side == 'left' ? 1 : 2">
      <v-img :src="offer.img" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['offer'],
  methods: {
    isSideLeft() {
      return this.offer.side == 'left'
    },
  },
}
</script>

<style lang="scss">
.information-card {
  opacity: .8;
  transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 1;
  }
}
</style>
