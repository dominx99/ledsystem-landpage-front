export default {
  async fetch({ commit }) {
    try {
      commit('setLoading', 'realizations')

      const res = await this.$axios.get(`v1/realizations`)

      commit('setRealizations', res.data)
      commit('removeLoading', 'realizations')
    } catch (e) {
      console.error("Could not load realizations")

      commit('removeLoading', 'realizations')
    }
  },
}
