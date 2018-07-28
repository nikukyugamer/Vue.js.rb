export default function ({ store, route, redirect }) {
  if(route.fullPath !== '/login' && !store.state.user.currentUser) {
    redirect('/login')
  }
}
