export const state = () => ({
  articles: []
})

export const mutations = {
  SET_ARTICLES: function (state, articles) {
    state.articles = articles
  }
}

export const actions = {
  fetchArticles({ commit }, { groupId }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/groups/${groupId}/articles`).then(({ data })=> {
        commit('SET_ARTICLES', data)
        resolve(data)
      }).catch(err => reject(err))
    })
  },
  createArticle({ commit }, { groupId, body }) {
    return new Promise((resolve, reject) => {
      this.$axios.post(`/groups/${groupId}/articles`, { body: body }).then(({ data })=> {
        resolve(data)
      }).catch(err => reject(err))
    })
  }
}

export const getters = {
}
