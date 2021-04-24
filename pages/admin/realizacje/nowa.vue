<template>
  <v-card>
    <v-card-title>Nowa realizacja</v-card-title>
    <v-card-text>
      <ValidationObserver ref="observer" v-slot="{ validate, reset }">
        <ValidationProvider
          v-slot="{ errors }"
          name="Nazwa"
          rules="required|min:3"
        >
          <v-text-field
            outlined
            :error-messages="errors"
            color="primary"
            label="Nazwa"
            v-model="form.name"
            @input="handleName"
            required
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Slug" rules="required|slug|min:3">
          <v-text-field
            outlined
            :error-messages="[...errors, ...(backendErrors.slug)]"
            color="primary"
            label="Slug"
            v-model="form.slug"
            required
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Nazwa"
          :rules="{
            required: true,
            min: 3,
          }"
        >
          <v-textarea
            outlined
            :error-messages="errors"
            color="primary"
            label="Opis"
            v-model="form.description"
            required
          />
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Zdjęcia" rules="required|length:1">
          <v-file-input
            :error-messages="errors"
            v-model="form.images"
            color="primary"
            counter
            label="Zdjęcia"
            multiple
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="primary"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ form.images.length - 2 }} Plik(i)
              </span>
            </template>
          </v-file-input>
        </ValidationProvider>
      </ValidationObserver>
    </v-card-text>
    <v-card-text
      class="d-flex justify-end"
    >
      <v-btn
        color="primary"
        @click="handleSave"
        :loading="loading"
      >
        Zapisz
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ],
    }
  },
  layout: 'admin',
  middleware: 'auth',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: mapState({
    backendErrors: state => state.admin.realizations.state.errors.addRealization,
    loading: state => state.admin.realizations.state.loading.addRealization,
  }),
  data: () => ({
    form: {
      name: '',
      description: '',
      slug: '',
      images: [],
    },
  }),
  methods: {
    ...mapMutations('admin/realizations', ['setLoading', 'removeLoading', 'setErrors', 'clearErrors']),
    ...mapActions('admin/realizations', ['save']),

    slugify: text => {
      return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
    },

    handleName() {
      this.form.slug = this.slugify(this.form.name)
    },

    async handleSave() {
      try {
        this.clearErrors('addRealization')

        setTimeout(() => {
          this.$refs.observer.reset()
        }, 16)

        let valid = await this.$refs.observer.validate()

        this.setLoading('addRealization')

        await this.save(this.form)

        this.removeLoading('addRealization')

        this.redirectToRealizationList()
      } catch (e) {
        console.log('failed to save')
        console.error('error', e)

        if (
          e.response &&
          e.response.data &&
          e.response.data.errors
        ) {
          this.setErrors({
            name: 'addRealization',
            errors: e.response.data.errors,
          })
        }

        this.removeLoading('addRealization')
      }
    },

    redirectToRealizationList() {
      this.$router.push({ name: 'admin-realizacje' })
    }
  }
}
</script>
