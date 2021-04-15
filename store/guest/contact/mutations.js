export default {
  setLoading: ({ state }) => {
    state.loading = true
  },

  removeLoading: ({ state }) => {
    state.loading = false
  },

  clearForm: ({ state }) => {
    state.form = {
      sender: '',
      subject: '',
      body: '',
    }
  },

  clearErrors: ({ state }) => {
    state.errors = {}
  },

  setErrors: ({ state }, errors) => {
    console.log('error', errors)
    state.errors = errors
  }
}
