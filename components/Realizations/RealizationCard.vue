<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="teal dark3"
        @click="goToRealization(realization.slug)"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="thumbnailUrl()"
        ></v-img>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="teal"
            class="realization-overlay"
          >
            <div
              v-text="realization.name"
              class="realization-header teal py-4"
            ></div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: ['realization'],
  methods: {
    thumbnailUrl() {
      return this.realization.mainImage.find(image => image.type == 'thumbnail').url
    },
    goToRealization(slug) {
      this.$router.push({ name: 'realizacje-slug', params: { slug } })
    }
  }
}
</script>

<style lang="scss">
.realization-overlay {
  .v-overlay__content {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;

    .realization-header {
      width: 100%;
      height: fit-content;
      opacity: .8;
      letter-spacing: 1px;
      font-weight: 700;
      text-align: center;
      transition: all .2s;
      border-radius: 8px 8px 0 0;
      text-transform: uppercase;
      animation: slideUp .3s ease-in-out forwards;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@keyframes slideUp {
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
}
</style>
