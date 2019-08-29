export const state = () => ({
  users: [
		{
			"uid": 1,
			"firstname": "Leanne",
			"lastname": "Graham",
			"email": "Sincere@april.biz",
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
			"firstname": "Leanne",
			"lastname": "Graham",
			"email": "Sincere@april.biz",
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
	]
})

export const mutations = {
  addUser(state, user) {
    state.users.push(user);
  }
}

export const actions = {
  async fetch({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', users)
  }
}

export const getters = {
  users: state => state.users
}