export const state = () => ({
  groups: []
})

export const mutations = {
  SET_GROUPS: function (state, groups) {
    state.groups = groups
  }
}

export const actions = {
  fetchGroups({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/groups').then(({ data })=> {
        commit('SET_GROUPS', data)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  createGroup({ commit }, { name }) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/groups',{ name: name }).then(({ data })=> {
        resolve(data)
      }).catch(err => reject(err))
    })
  }
}

export const getters = {
}
