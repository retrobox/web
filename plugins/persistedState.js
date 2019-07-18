import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'retrobox_store',
      paths: [
        'cart',
        'checkout'
      ]
    })(store)
  })
}
