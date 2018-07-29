export default function ({ $axios, redirect, env, store }) {
  $axios.defaults.baseURL = env.API_SERVER_URL;
  $axios.onRequest(config => {
    let access_token = store.state.user.currentUser ? store.state.user.currentUser.access_token : 'guest'
    $axios.defaults.headers['Authorization'] = `Bearer ${access_token}`
  })
}
