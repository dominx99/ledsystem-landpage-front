export default {
  async sendEmail({ state, commit }) {
    try {
      commit('clearErrors')
      commit('setLoading')

      await this.$axios.post(`api/v1/contact/send-email`, state.state.form)

      commit('clearForm')
      commit('removeLoading')
    } catch (e) {
      console.error('Could not send email')

      if (e.response.status == 422 && e.response.data.errors) {
        commit('setErrors', e.response.data.errors)
      }

      commit('removeLoading')
    }
  },
}
