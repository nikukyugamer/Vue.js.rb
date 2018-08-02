export const state = () => ({
  currentUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    state.currentUser = user
  }
}

export const actions = {
  login({ commit }, { name }) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/sessions', { name }).then(({ data })=> {
        commit('SET_USER', data)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_USER', null)
      resolve(null)
    })
  }
}
export const getters = {
}
