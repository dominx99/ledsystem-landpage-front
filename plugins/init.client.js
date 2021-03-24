export default async function ({ store, app }) {
   // check if spa fallback, by checking if a value in store is empty for example
   if (!store.state.filled) {
     await store.dispatch('nuxtServerInit', app.context)
   }
}
