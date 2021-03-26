<template>
  <div>
    <v-card v-if="! fetchRealizationLoading">
      <v-card-title>Edycja</v-card-title>
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
          @click="handleSave"
          :loading="editRealizationLoading"
        >
          Zapisz
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RealizationForm from './../../../components/Admin/Realization/RealizationForm.vue'

export default {
  layout: 'admin',
  middleware: 'auth',
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  components: {
    RealizationForm,
  },
  computed: mapState({
    editRealizationLoading: state => state.admin.realizations.state.loading.editRealization,
    fetchRealizationLoading: state => state.admin.realizations.state.loading.realization,
    form: state => state.admin.realizations.state.form.realization,
  }),
  async mounted() {
    try {
      await this.findBySlug(this.slug)
    } catch (e) {
      alert("Coś poszło nie tak...")
    }
  },
  methods: {
    ...mapActions('admin/realizations', ['findBySlug', 'update']),

    async handleSave() {
      let valid = await this.$refs.realizationForm.$refs.observer.validate()

      if (! valid) {
        return
      }

      try {
        await this.update()
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
