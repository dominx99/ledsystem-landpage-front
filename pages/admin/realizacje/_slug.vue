<template>
  <div>
    <v-card v-if="! fetchRealizationLoading">
      <v-tabs
        fixed-tabs
      >
        <v-tab>Informacje</v-tab>
        <v-tab>Zdjęcia</v-tab>
        <v-tab-item class="mt-5">
          <v-card-text>
            <RealizationForm
              ref="realizationForm"
              :isEdit="true"
            />
          </v-card-text>
          <v-card-text
            class="d-flex justify-end"
          >
            <v-btn
              color="primary"
              @click="handleSaveInformation"
              :loading="editRealizationLoading"
            >
              Zapisz
            </v-btn>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text class="mt-5">
            <RealizationImagesEdit :onSave="() => findBySlug(slug)" />
          </v-card-text>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import RealizationForm from './../../../components/Admin/Realization/RealizationForm'
import RealizationImagesEdit from './../../../components/Admin/Realization/RealizationImagesEdit.vue'

export default {
  layout: 'admin',
  middleware: 'auth',
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  components: {
    RealizationForm,
    RealizationImagesEdit,
  },
  computed: mapState({
    editRealizationLoading: state => state.admin.realizations.state.loading.editRealization,
    fetchRealizationLoading: state => state.admin.realizations.state.loading.realization,
    form: state => state.admin.realizations.state.form.realization,
    realization: state => state.admin.realizations.state.realization,
  }),
  async mounted() {
    try {
      await this.findBySlug(this.slug)
    } catch (e) {
      alert("Coś poszło nie tak...")
    }
  },
  methods: {
    ...mapActions('admin/realizations', [
      'findBySlug', 'update', 'fetchRealizationImages',
    ]),
    ...mapMutations('admin/realizations', [
      'clearErrors', 'clearRealizationFormImages',
    ]),

    async handleSaveInformation() {
      let valid = await this.$refs.realizationForm.$refs.observer.validate()

      if (! valid) {
        return
      }

      try {
        await this.update()

        this.clearRealizationFormImages()
        this.clearErrors('editRealization')
        this.fetchRealizationImages(this.realization.id)
      } catch (e) {
        alert('Coś poszło nie tak...')
      }
    },

    redirectToRealizationList() {
      this.$router.push({ name: 'admin-realizacje' })
    }
  }
}
</script>
