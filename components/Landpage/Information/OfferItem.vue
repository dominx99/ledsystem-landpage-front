<template>
  <v-row class="my-md-16 my-8">
    <v-col cols="12" md="5" :offset-md="isOdd() ? 2 : 0" :order-md="isOdd() ? 2 : 1" order="2">
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
    <v-col cols="12" md="5" :offset-md="! isOdd() ? 2 : 0" :order-md="isOdd() ? 1 : 2" order="1">
      <v-img
        class="rounded-lg"
        :src="offer.img"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['offer', 'index'],
  methods: {
    isOdd() {
      return this.index % 2 == 1
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
