export default {
  setLoading: ({ state }, name) => {
    state.loading[name] = true
  },

  removeLoading: ({ state }, name) => {
    state.loading[name] = false
  },

  setRealizations: ({ state }, realizations) => {
    state.realizations = realizations
  },

  setErrors({ state }, { name, errors }) {
    state.errors[name] = errors
  },
}
