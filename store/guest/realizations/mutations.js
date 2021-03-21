export default {
  setLoading: ({ state }, name) => {
    state.loading[name] = true
  },

  removeLoading: ({ state }, name) => {
    state.loading[name] = false
  },

  setRealizations: ({ state }, realizations) => {
    realizations = realizations.filter(
      realization => realization.mainImage.findIndex(image => image.type === 'thumbnail') !== -1
    )

    state.realizations = realizations
  },

  setRealization: ({ state }, realization) => {
    state.realization = realization
  },

  setErrors({ state }, { name, errors }) {
    state.errors[name] = errors
  },
}
