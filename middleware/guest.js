export default function ({ store, redirect }) {
  console.log('guest middleware')

  if (store.getters['auth/authorized']) {
    console.log('authorized')
    return redirect('/admin/realizacje')
  }
}
