export default function ({ $axios, redirect, env, store }) {
  console.log(env)
  $axios.defaults.baseURL = env.API_SERVER_URL;
  $axios.onRequest(config => {
    console.log('SPY: ' + config.url)
  })
}
