export const state = () => ({
  title: '',
  titleContext: '',
  displayMobileNav: false,
  location: {
    root: ''
  },
  isLoading: false,
  loadingType: 'normal',
  showRouterView: true,
  alert: {
    type: '',
    title: '',
    description: '',
    enabled: false
  },
  cart: [],
  loginRedirectRoute: ""
});

export const mutations = {
  SET_TITLE(state, payload) {
    if (payload.context !== undefined && payload.key !== undefined) {
      state.title = payload.context.$t(payload.key)
      state.titleContext = payload
    } else {
      state.title = payload
    }
    document.title = state.title + " - Retrobox"
  },
  SET_LOCATION(state, payload) {
    state.location = payload
  },
  TOGGLE_NAV(state) {
    if (state.displayMobileNav) {
      document.getElementsByTagName('body')[0].className = ""
      state.displayMobileNav = false
    } else {
      document.getElementsByTagName('body')[0].className = "no-scroll"
      state.displayMobileNav = true
    }
  },
  SET_LOADING(state, payload) {
    state.loading = payload
    if (state.loadingType === 'normal') {
      if (payload) {
        state.showRouterView = false
      }
      if (payload === false) {
        state.showRouterView = true
      }
    } else {
      state.showRouterView = true
    }
  },
  ADD_ALERT(state, payload) {
    state.alert = {
      type: payload.type,
      title: payload.title,
      description: payload.description,
      enabled: true
    }
  },
  REMOVE_ALERT(state) {
    state.alert = {
      type: "",
      title: "",
      description: "",
      enabled: false
    }
  },
  CART_TOGGLE(state, payload) {
    if (state.cart[state.cart.indexOf(payload)] === undefined) {
      state.cart.push(payload)
    }else{
      state.cart.splice(state.cart.indexOf(payload), 1)
    }
  }
};

export const actions = {
};