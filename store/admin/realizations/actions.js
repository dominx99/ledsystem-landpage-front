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
  save({}, params) {
    let data = new FormData()

    for (let itemKey in params) {
      if (itemKey === 'images') {
        params.images.forEach((image, i) => {
          data.append(`images[${i}]`, image)
        })

        continue
      }

      data.append(itemKey, params[itemKey])
    }

    return this.$axios.post(`v1/realizations`, data)
  }
}
