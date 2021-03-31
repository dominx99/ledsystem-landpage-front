<template>
  <div id="realizationEditImages">
    <draggable
      ghost-class="ghost"
      v-model="medias"
    >
      <transition-group
        type="transition"
        name="flip-list"
        class="row"
      >
        <v-col
          v-for="(media, index) in medias"
          :key="media.id"
          cols="6"
          md="3"
        >
          <v-card
            style="pointer-events: none;"
          >
            <v-img
              :src="thumbnail(media).url"
              class="rounded-lg"
              :aspect-ratio="16/9"
              :data-bp="original(media).url"
              aria-controls
              style="pointer-events: none;"
            />
            <v-overlay
              absolute
              color="transparent"
              class="realization-edit-image-overlay"
              style="pointer-events: none;"
            >
              <v-btn
                icon
                color="green"
                :data-bp="original(media).url"
                @click="openFullScreen($event, index)"
                class="bigpicture-image"
              >
                <v-icon>mdi-eye</v-icon>
              </v-btn>

              <v-btn
                v-if="isMainMedia(media)"
                icon
                color="yellow"
              >
                <v-icon>mdi-star</v-icon>
              </v-btn>
              <v-btn
                v-else
                icon
                color="light"
                @click="handleSetMainMedia(media)"
              >
                <v-icon>mdi-star</v-icon>
              </v-btn>

              <v-btn
                icon
                color="red"
                @click="handleRemoveMedia(media)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-overlay>
          </v-card>
        </v-col>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import BigPicture from 'bigpicture'

export default {
  components: {
      draggable,
  },
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  computed: {
    medias: {
      get() {
        return this.$store.state.admin.realizations.state.realization.medias
      },
      async set(medias) {
        let data = medias
          .map((media, index) => ({
            id: media.id,
            originalOrder: media.order,
            futureOrder: (index + 1),
          }))
          .filter(media => media.originalOrder != media.futureOrder)
          .map(media => ({
            mediaId: media.id,
            order: media.futureOrder,
          }))

        try {
          await this.updateRealizationMediasOrder({ medias: data })

          this.fetchRealizationImages(this.realization.id)
        } catch (e) {
          alert('Nie udało się zmienić kolejności')
        }
      },
    },
    ...mapState({
      realization:   state => state.admin.realizations.state.realization,
      backendErrors: state => state.admin.realizations.state.errors.editRealization,
      form:          state => state.admin.realizations.state.form.realization,
    }),
  },
  methods: {
    ...mapActions('admin/realizations', [
      'removeImage',
      'fetchRealizationImages',
      'setMainImage',
      'fetchRealizationMainImage',
      'updateRealizationMediasOrder',
    ]),
    thumbnail(media) {
      return media.images.find(image => image.type == 'thumbnail')
    },
    original(media) {
      return media.images.find(image => image.type == 'original')
    },
    async handleRemoveMedia(media) {
      if (! confirm('Jesteś pewny, że chcesz usunąć ten obrazek?')) {
        return
      }

      if (media.images.length < 0) {
        return
      }

      if (this.isMainMedia(media)) {
        alert('Nie można usunąć głównego obrazka')

        return
      }

      try {
        await this.removeImage(media.id)

        this.fetchRealizationImages(this.realization.id)
      } catch (e) {
        alert('Nie udało się usunąc obrazka')
      }
    },
    async handleSetMainMedia(media) {
      if (media.images.length < 0) {
        return
      }

      if (this.isMainMedia(media)) {
        alert('Ten obrazek jest już głównym obrazkiem.')

        return
      }

      try {
        await this.setMainImage({
          realizationId: this.realization.id,
          mediaId: media.id,
        })

        this.fetchRealizationImages(this.realization.id)
        this.fetchRealizationMainImage(this.realization.id)
      } catch (e) {
        alert('Nie udało się ustawić obrazka jako główny')
      }
    },
    isMainMedia(media) {
      if (media.images.length < 0) {
        return false
      }

      if (this.realization.mainImage.images.length < 0) {
        return false
      }

      return this.realization.mainImage.id === media.id
    },
    openFullScreen(e, key) {
      BigPicture({
        el: e.target,
        gallery: document.querySelectorAll('#realizationEditImages .bigpicture-image'),
        position: key,
      })
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
    pointer-events: none;
  }
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
}
</style>
