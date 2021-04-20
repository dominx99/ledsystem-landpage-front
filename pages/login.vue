<template>
  <v-card
    class="d-inline-flex auth-width flex-column"
  >
    <v-card-title
      class="deep-purple"
    >Logowanie</v-card-title>
    <v-card-text
      class="pt-8 pb-6"
    >
      <v-form>
        <v-alert
          v-if="error"
          color="red"
          v-text="error"
        ></v-alert>
        <v-text-field
          label="Email"
          filled
          type="email"
          v-model="form.email"
          v-on:keyup.enter="handleLoginClick()"
        />
        <v-text-field
          label="Hasło"
          filled
          type="password"
          v-model="form.password"
          v-on:keyup.enter="handleLoginClick()"
        />
        <v-btn
          class="float-right"
          color="deep-purple"
          @click="handleLoginClick()"
        >Zaloguj</v-btn>
        <div style="clear:both"></div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  layout: 'auth',
  middleware: 'guest',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
    error: '',
  }),
  methods: {
    ...mapMutations('auth', ['setAccessToken']),
    ...mapActions('auth', ['login']),

    async handleLoginClick() {
      try {
        let res = await this.login(this.form)

        this.setAccessToken(res.data.accessToken)
        this.redirectToAdminDashboard()
      } catch (e) {
        console.error(e)

        if (e.response.status !== 401) {
          return
        }

        if (
          e.response.data &&
          e.response.data.error
        ) {
          this.error = e.response.data.error
        }
      }
    },
    redirectToAdminDashboard() {
      this.$router.push('/admin/realizacje')
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-width {
  width: 100%;
  margin: 0 1rem;

  @media (min-width: 576px) {
    width: 480px;
  }
}
</style>
