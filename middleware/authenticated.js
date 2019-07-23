export default function ({ store, redirect, route, req }) {
  store.commit('SET_MUST_BE_AUTHENTICATED', true)
  if (!store.state.isAuthenticated) {
    return redirect('/login?redirect=' + route.path)
  }
}