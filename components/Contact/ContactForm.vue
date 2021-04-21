<template>
  <ValidationObserver ref="observer" v-slot="{ validate, reset }">
    <v-form class="contact-form pa-5 pa-md-10 dark3 darken-2" style="height: 100%;">
      <ValidationProvider
        v-slot="{ errors }"
        name="Email"
        :rules="{
          required: true,
          email: true,
        }"
      >
        <v-text-field
          label="Email"
          filled
          rounded
          required
          v-model="form.sender"
          :error-messages="errors"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        name="Temat"
        :rules="{
          required: true,
          min: 3,
        }"
      >
        <v-text-field
          label="Temat"
          filled
          rounded
          required
          v-model="form.subject"
          :error-messages="errors"
        />
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        name="Wiadomość"
        :rules="{
          required: true,
          min: 3,
        }"
      >
        <v-textarea
          label="Wiadomość"
          filled
          rounded
          required
          :error-messages="errors"
          v-model="form.body"
        ></v-textarea>
      </ValidationProvider>

      <v-btn
        color="primary"
        @click="handleSendEmail()"
        :loading="loading"
        rounded
        outlined
        style="width: 100%; padding: 1.8rem; font-size: 130%;"
      >Wyślij wiadomość</v-btn>

      <div style="clear:both"></div>
    </v-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: mapState({
    form:    state => state.guest.contact.state.form,
    errors:  state => state.guest.contact.state.errors,
    loading: state => state.guest.contact.state.loading,
  }),
  methods: {
    ...mapActions('guest/contact', ['sendEmail']),
    async handleSendEmail() {
      try {
        await this.$refs.observer.validate()

        this.sendEmail()

        this.$refs.observer.reset()
      } catch (e) {
        console.error('Failed to send email')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  width: 100%;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
    border-radius: 8px 0 0 8px;
  }
}
</style>
