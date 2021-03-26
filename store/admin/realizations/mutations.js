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

  setRealization: ({ state }, realization) => {
    state.realization = realization
  },

  setErrors({ state }, { name, errors }) {
    state.errors[name] = errors
  },

  hydrateRealizationForm({ state }, realization) {
    state.form.realization.id          = realization.id
    state.form.realization.name        = realization.name
    state.form.realization.slug        = realization.slug
    state.form.realization.description = realization.description
  },
}
