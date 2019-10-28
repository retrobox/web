export default function ({ store, redirect, route }) {
  store.commit('SET_MUST_BE_AUTHENTICATED', true)
  if (!store.state.isAuthenticated) {
    return redirect('/login?redirect=' + encodeURI(route.fullPath))
  }
}