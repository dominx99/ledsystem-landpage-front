export default function ({ $axios }) {
  $axios.setToken(localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '', 'Bearer')
}
