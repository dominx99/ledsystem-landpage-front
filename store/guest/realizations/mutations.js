export default {
  setLoading: ({ state }, name) => {
    state.loading[name] = true
  },

  removeLoading: ({ state }, name) => {
    state.loading[name] = false
  },

  setRealizations: ({ state }, realizations) => {
    realizations = realizations.filter(
      realization => realization.mainImage.images.findIndex(image => image.type === 'thumbnail') !== -1
    )

    state.realizations = realizations
  },

  setRealizationsVisibleOnMainPage: ({ state }, realizationsVisibleOnMainPage) => {
    realizationsVisibleOnMainPage = realizationsVisibleOnMainPage.filter(
      realization => realization.mainImage.images.findIndex(image => image.type === 'thumbnail') !== -1
    )

    state.realizationsVisibleOnMainPage = realizationsVisibleOnMainPage
  },

  setRealization: ({ state }, realization) => {
    state.realization = realization
  },

  setErrors({ state }, { name, errors }) {
    state.errors[name] = errors
  },
}
