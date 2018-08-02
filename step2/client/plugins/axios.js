export default function ({ $axios, redirect, env, store }) {
  $axios.defaults.baseURL = env.API_SERVER_URL
  let access_token = 'guest'
  try {
   access_token = JSON.parse(localStorage['app']).user.currentUser.access_token
  }
  catch (e) {}
  $axios.setToken(access_token, 'Bearer')
}
