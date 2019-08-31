export const state = () => ({
  users: [
		{
			"uid": 0,
			"firstname": "Leanne",
			"lastname": "Graham",
			"email": "Sincere@april.biz",
			"password": "Sincere@april.biz",
			"phone": "1-770-736-8031 x56442",
			"objects": "6",
			"soldObject": "3",
			"lastlogin": "Date",
			"sessions": [
				{"id": "1", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "2", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "3", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "4", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "5", "timeLogin": "Date", "timeLogout": "Date"}],
			"isAdmin": "false",
			"photo": "https://via.placeholder.com/150/24f355"
		},
		{
			"uid": 1,
			"firstname": "Boy",
			"lastname": "Next",
			"email": "abs@ap.biz",
			"password": "abs@ap.biz",
			"phone": "1-770-736-8031 x56442",
			"objects": "2",
			"soldObject": "1",
			"lastlogin": "Date",
			"sessions": [
				{"id": "1", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "2", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "3", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "4", "timeLogin": "Date", "timeLogout": "Date"},
				{"id": "5", "timeLogin": "Date", "timeLogout": "Date"}],
			"isAdmin": "false",
			"photo": "https://via.placeholder.com/150/24f355"
		},
	]
})

export const mutations = {
  addUser(state, user) {
    state.users.push(user);
  }
}

export const actions = {
	// getUser(cxt, uid){
	// 	cxt.user(state, uid)
	// }
  // async fetch({commit}) {
  //   const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  //   commit('setUsers', users)
  // }
}

export const getters = {
	getUsers: state => state.users,
	getUser: (state, uid = 0) => state.users[uid]
}
