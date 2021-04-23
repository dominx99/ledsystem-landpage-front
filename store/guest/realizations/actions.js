export default {
  async fetch({ commit }) {
    try {
      commit('setLoading', 'realizations')

      const res = await this.$axios.get(`api/v1/realizations`)

      commit('setRealizations', res.data)
      commit('removeLoading', 'realizations')
    } catch (e) {
      console.error("Could not load realizations")

      commit('removeLoading', 'realizations')
    }
  },
  async fetchVisibleOnMainPage({ commit }) {
    try {
      commit('setLoading', 'realizationsVisibleOnMainPage')

      const res = await this.$axios.get(`api/v1/realizations/visible-on-main-page`)

      commit('setRealizationsVisibleOnMainPage', res.data)
      commit('removeLoading', 'realizationsVisibleOnMainPage')
    } catch (e) {
      console.error("Could not load realizations")

      commit('removeLoading', 'realizationsVisibleOnMainPage')
    }
  },
  async find({ commit }, slug) {
    try {
      commit('setLoading', 'realization')

      const res = await this.$axios.get(`api/v1/realizations/${slug}`)

      commit('setRealization', res.data)
      commit('removeLoading', 'realization')
    } catch (e) {
      console.error("Could not load realization")

      commit('removeLoading', 'realization')
    }
  },
}
