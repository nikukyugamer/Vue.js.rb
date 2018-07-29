export const state = () => ({
  groups: [],
  currentGroup: null
})

export const mutations = {
  SET_GROUPS: function (state, groups) {
    state.groups = groups
  },
  SET_CURRENT_GROUP: function (state, currentGroup) {
    state.currentGroup = currentGroup
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
  },
  selectGroup({ commit, dispatch, state }, { groupId }) {
    return new Promise((resolve, reject) => {
      let group = state.groups.find( (element,key) => { return element.id == groupId } )
      commit('SET_CURRENT_GROUP', group)
      dispatch('article/fetchArticles', { groupId: group.id }, { root: true }).then((data)=> {
        resolve(data)
      }).catch(err => reject(err))
    })
  }
}

export const getters = {
}
