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
			"sessions": [
				{"id": "1", "timeLogin": "1567410235910", "timeLogout": "1567417235910"},
				{"id": "2", "timeLogin": "1567400235910", "timeLogout": "1567427235910"},
				{"id": "3", "timeLogin": "1567410535910", "timeLogout": "1567417935910"}
			],
			"isAdmin": "true",
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
			"sessions": [
				{"id": "1", "timeLogin": "1567410235910", "timeLogout": "1567417235910"},
				{"id": "2", "timeLogin": "1567400235910", "timeLogout": "1567427235910"},
				{"id": "3", "timeLogin": "1567410535910", "timeLogout": "1567417935910"}
			],
			"isAdmin": "",
			"photo": "https://via.placeholder.com/150/24f355"
		},
		{
			"uid": 2,
			"firstname": "Жора",
			"lastname": "Жованный",
			"email": "abs@ap.biz",
			"password": "abs@ap.biz",
			"phone": "1-770-736-8031 x56442",
			"objects": "2",
			"soldObject": "1",
			"sessions": [
				{"id": "1", "timeLogin": "1567410235910", "timeLogout": "1567417235910"},
				{"id": "2", "timeLogin": "1567400235910", "timeLogout": "1567427235910"},
				{"id": "3", "timeLogin": "1567410535910", "timeLogout": "1567417935910"}
			],
			"isAdmin": "",
			"photo": "https://via.placeholder.com/150/24f355"
		},
		{
			"uid": 3,
			"firstname": "Алексей",
			"lastname": "Крылов",
			"email": "lexa@ap.ru",
			"password": "lexxa777",
			"phone": "812889214891248",
			"objects": "2",
			"soldObject": "1",
			"sessions": [
				{"id": "1", "timeLogin": "1567410235910", "timeLogout": "1567417235910"},
				{"id": "2", "timeLogin": "1567400235910", "timeLogout": "1567427235910"},
				{"id": "3", "timeLogin": "1567410535910", "timeLogout": "1567417935910"}
			],
			"isAdmin": "",
			"photo": "https://via.placeholder.com/150/24f355"
		},
		{
			"uid": 4,
			"firstname": "Vova",
			"lastname": "Lopata",
			"email": "abs@ap.biz",
			"password": "abs@ap.biz",
			"phone": "1-770-736-8031 x56442",
			"objects": "2",
			"soldObject": "1",
			"sessions": [
				{"id": "1", "timeLogin": "1567410235910", "timeLogout": "1567417235910"},
				{"id": "2", "timeLogin": "1567400235910", "timeLogout": "1567427235910"},
				{"id": "3", "timeLogin": "1567410535910", "timeLogout": "1567417935910"}
			],
			"isAdmin": "",
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
	getUser: (state, uid = 0) => state.users[uid],
	getUserById: state => id => {
    return state.users.find(user => user.uid === id);
  }
}
