export default function ({ $axios }) {
  // console.log('accessToken', localStorage.getItem('accessToken'))

  $axios.setToken(localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : '', 'Bearer')
}
