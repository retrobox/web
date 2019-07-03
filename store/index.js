export const state = () => ({
  title: '',
  titleContext: '',
  displayMobileNav: false,
  location: {
    root: '',
    sub: ''
  },
  isAuthenticated: false,
  user: {
    id: '',
    username: '',
    isAdmin: false
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
  shipping_total_price: 0,
  loginRedirectRoute: '',
  hasNuxtError: false,
  showBody: false,
  isMobile: false
});

import jwtDecode from "jwt-decode"

export const mutations = {
  SET_TITLE(state, payload) {
    state.title = payload
  },
  SET_LOCATION(state, payload) {
    state.location = payload
  },
  SET_AUTH (state, payload) {
    state.isAuthenticated = payload
  },
  LOAD_USER (state, token) {
    let user = jwtDecode(token).user
    state.isAuthenticated = true
    state.user = {
      id: user.id,
      username: user.username,
      isAdmin: !!user.is_admin
    }
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
  SET_SHIPPING_TOTAL_PRICE(state, payload) {
    state.shipping_total_price = payload
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
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload
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
      type: '',
      title: '',
      description: '',
      enabled: false
    }
  },
  CART_TOGGLE(state, payload) {
    if (state.cart.filter(item => payload.id === item.id).length === 0) {
      state.cart.push(payload)
    } else {
      state.cart.splice(state.cart.indexOf(payload), 1)
    }
  },
  EMPTY_CART (state) {
    state.cart = []
  },
  SET_LOGIN_REDIRECT_ROUTE (state, payload) {
    state.loginRedirectRoute = payload
  },
  SET_HAS_NUXT_ERROR (state, payload) {
    state.hasNuxtError = payload
  },
  SHOW_BODY (state, payload) {
    state.showBody = payload
  },
  SET_IS_MOBILE: (state, value) => {
    state.isMobile = value
  }
};

export const actions = {};
