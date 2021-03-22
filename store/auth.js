export const state = () => ({
  accessToken: localStorage.getItem('accessToken')
})

export const actions = {
  login({}, { email, password }) {
    return this.$axios.post('api/auth/login', {
      email,
      password,
    })
  },
}

export const mutations = {
  setAccessToken: (state, accessToken) => {
    state.accessToken = accessToken

    localStorage.setItem('accessToken', accessToken)
  },
}

export const getters = {
  authorized: state => {
    return (
      typeof state.accessToken === "string" &&
      state.accessToken !== ''
    )
  },
}


