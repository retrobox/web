export default function ({ store, redirect }) {
    store.commit('SET_MUST_BE_AUTHENTICATED', true)
    if (!store.state.isAuthenticated) {
      return redirect('/')
    }
  }