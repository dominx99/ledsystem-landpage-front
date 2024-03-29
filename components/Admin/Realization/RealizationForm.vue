<template>
  <ValidationObserver ref="observer" v-slot="{ validate, reset }">
    <ValidationProvider
      v-slot="{ errors }"
      name="Nazwa"
      :rules="{
        required: true,
        min: 3,
      }"
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
    <ValidationProvider v-slot="{ errors }" name="Zdjęcia" :rules="imagesRules()">
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
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['isEdit'],
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: mapState({
    realization: state => state.admin.realizations.state.realization,
    backendErrors: state => state.admin.realizations.state.errors.editRealization,
    form: state => state.admin.realizations.state.form.realization,
  }),
  async mounted() {
    if (! this.isEdit) {
      return
    }

    this.hydrateRealizationForm(this.realization)
  },
  methods: {
    ...mapMutations('admin/realizations', ['hydrateRealizationForm']),

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

    imagesRules() {
      return {
        required: ! this.isEdit ? true : false,
        length: 1,
      }
    }
  }
}
</script>
