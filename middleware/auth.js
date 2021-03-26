export default function ({ store, redirect }) {
  console.log('auth middleware')

  if (! store.getters['auth/authorized']) {
    console.log('not authorized')
    redirect('/login')
  }
}
