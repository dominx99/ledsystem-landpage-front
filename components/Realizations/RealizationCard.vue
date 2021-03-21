<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="teal dark3"
      >
        <v-img
          :aspect-ratio="16/7"
          :src="thumbnailUrl()"
        ></v-img>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="blue"
          >
            <v-btn
              v-text="realization.name"
              color="blue"
              :to="`/realizacje/${realization.slug}`"
            ></v-btn>
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
    }
  }
}
</script>
