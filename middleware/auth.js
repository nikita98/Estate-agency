export default function ({ store, redirect }) {
  if (!store.getters['auth/getUserNow']) {
    // redirect('/SinginIn')
  }
}
