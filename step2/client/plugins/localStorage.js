import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'app',
    paths: ['user.currentUser']
  })(store)
}
