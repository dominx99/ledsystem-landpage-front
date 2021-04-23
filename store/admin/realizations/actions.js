export default {
  async findBySlug({ commit }, slug) {
    try {
      commit('setLoading', 'realization')

      const res = await this.$axios.get(`api/v1/realizations/${slug}`)

      await commit('setRealization', res.data)

      commit('removeLoading', 'realization')
    } catch (e) {
      console.error("Could not load realization")

      commit('removeLoading', 'realization')
    }
  },
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

  async fetchRealizationImages({ commit }, realizationId) {
    try {
      commit('setLoading', 'realizationImages')

      const res = await this.$axios.get(`api/v1/realizations/${realizationId}/images`)

      await commit('setRealizationImages', res.data)

      commit('removeLoading', 'realizationImages')
    } catch (e) {
      console.error("Could not load realization images")

      commit('removeLoading', 'realizationImages')
    }
  },

  async fetchRealizationMainImage({ commit }, realizationId) {
    try {
      commit('setLoading', 'realizationMainImage')

      const res = await this.$axios.get(`api/v1/realizations/${realizationId}/main-image`)

      await commit('setRealizationMainImage', res.data)

      commit('removeLoading', 'realizationMainImage')
    } catch (e) {
      console.error("Could not load realization main image")

      commit('removeLoading', 'realizationMainImage')
    }
  },


  async update({ state, commit }) {
    try {
      commit('setLoading', 'editRealization')

      let params = state.state.form.realization

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

      await this.$axios.post('/api/v1/realizations/edit', data)

      commit('removeLoading', 'editRealization')
    } catch (e) {
      console.log('failed to save')
      console.error(e)

      if (
        e.response &&
        e.response.data &&
        e.response.data.errors
      ) {
        commit('setErrors', {
          name: 'editRealization',
          errors: e.response.data.errors,
        })
      }

      commit('removeLoading', 'editRealization')
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

    return this.$axios.post(`api/v1/realizations`, data)
  },

  removeImage({}, mediaId) {
    return this.$axios.post(`/api/v1/medias/${mediaId}/remove`)
  },

  setMainImage({}, { realizationId, mediaId }) {
    return this.$axios.post(`/api/v1/realizations/${realizationId}/set-main-image`, { mediaId })
  },

  removeRealization({}, realizationId) {
    return this.$axios.post(`/api/v1/realizations/${realizationId}/remove`)
  },

  updateRealizationMediasOrder({}, data) {
    return this.$axios.post(`/api/v1/medias/update-order`, data)
  },

  toggleRealizationVisibilityOnMainPage({}, { realizationId, isVisible }) {
    return this.$axios.post(`/api/v1/realizations/${realizationId}/update-visible-on-main-page`, { isVisible })
  }
}
