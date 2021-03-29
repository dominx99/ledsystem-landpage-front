<template>
  <v-row>
    <v-col
      cols="6"
      md="3"
      v-for="(image, index) in realization.images"
      :key="index"
    >
      <v-card>
        <v-img
          :src="thumbnail(image).url"
          class="rounded-lg"
          :aspect-ratio="16/9"
          :data-bp="original(image).url"
          aria-controls
        />
        <v-overlay
          absolute
          color="transparent"
          class="realization-edit-image-overlay"
        >
          <v-btn
            v-if="isMainImage(image)"
            icon
            color="yellow"
            @click="handleSetMainImage(image)"
          >
            <v-icon>mdi-star</v-icon>
          </v-btn>
          <v-btn
            v-else
            icon
            color="light"
            @click="handleSetMainImage(image)"
          >
            <v-icon>mdi-star</v-icon>
          </v-btn>

          <v-btn
            icon
            color="red"
            @click="handleRemoveImage(image)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-overlay>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  computed: mapState({
    realization:   state => state.admin.realizations.state.realization,
    backendErrors: state => state.admin.realizations.state.errors.editRealization,
    form:          state => state.admin.realizations.state.form.realization,
  }),
  methods: {
    ...mapActions('admin/realizations', [
      'removeImage', 'fetchRealizationImages', 'setMainImage', 'fetchRealizationMainImage',
    ]),
    thumbnail(images) {
      return images.find(image => image.type == 'thumbnail')
    },
    original(images) {
      return images.find(image => image.type == 'original')
    },
    async handleRemoveImage(images) {
      if (! confirm('Jesteś pewny, że chcesz usunąć ten obrazek?')) {
        return
      }

      if (images.length < 0) {
        return
      }

      if (this.isMainImage(images)) {
        alert('Nie można usunąć głównego obrazka')

        return
      }

      try {
        await this.removeImage(images[0].mediaId)

        this.fetchRealizationImages(this.realization.id)
      } catch (e) {
        alert('Nie udało się usunąc obrazka')
      }
    },
    async handleSetMainImage(images) {
      if (images.length < 0) {
        return
      }

      if (this.isMainImage(images)) {
        alert('Ten obrazek jest już głównym obrazkiem.')

        return
      }

      try {
        await this.setMainImage({
          realizationId: this.realization.id,
          mediaId: images[0].mediaId,
        })

        this.fetchRealizationImages(this.realization.id)
        this.fetchRealizationMainImage(this.realization.id)
      } catch (e) {
        alert('Nie udało się ustawić obrazka jako główny')
      }
    },
    isMainImage(images) {
      if (images.length < 0) {
        return false
      }

      if (this.realization.mainImage.length < 0) {
        return false
      }

      return this.realization.mainImage[0].mediaId === images[0].mediaId
    },
  }
}
</script>

<style lang="scss">
.realization-edit-image-overlay {
  .v-overlay__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
}
</style>
