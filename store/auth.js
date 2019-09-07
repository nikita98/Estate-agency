export const state = () => ({
  userNow: null
})

export const mutations = {
  setUserNow (state, user) {
    state.userNow = user
  },
  clearUserNow (state) {
    state.userNow = null
  }
}

export const actions = {
  login ({ commit }, user) {
    commit('setUserNow', user)
  },
  logout ({ commit }) {
    commit('clearUserNow')
  }
}

export const getters = {
  getUserNow: state => state.userNow ? state.userNow : null
}
