export default function({store, redirect}) {
  if (!store.getters.getUserNow) {
    redirect('/SinginIn')
  }
}