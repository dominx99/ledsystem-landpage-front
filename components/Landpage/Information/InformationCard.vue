<template>
<v-card
  :class="card.color"
  class="information-card mx-6 my-6"
>
  <v-card-title
    v-text="card.title"
  ></v-card-title>
  <v-card-text
    v-if="card.subtitle"
    v-text="card.subtitle"
  ></v-card-text>
  <v-list
    v-if="card.list"
    :class="card.color"
  >
    <v-list-item
      v-for="(item, index) in card.list"
      :key="index"
    >
      <v-list-item-icon>
        <v-icon
          color="green accent-1"
        >
          mdi-check
        </v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="item"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-card>
</template>

<script>
export default {
  props: ['card'],
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
