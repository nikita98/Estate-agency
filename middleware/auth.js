export default function({store, redirect}) {
	console.log(store.getters["auth/getUserNow"]);
  if (!store.getters["auth/getUserNow"]) {
    // redirect('/SinginIn')
  }
}