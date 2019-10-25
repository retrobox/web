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
    email: '',
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
  isMobile: false,
  userToken: '',
  mustBeAuthenticated: false,
  checkout: {
    subTotal: 0,
    country: '',
    shippingMethod: 'colissimo',
    shippingPrice: 0,
    total: 0,
    totalWeight: 0
  }
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
    state.userToken = token
    state.isAuthenticated = true
    state.user = {
      id: user.id,
      username: user.username,
      email: user.email,
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
  },
  SET_MUST_BE_AUTHENTICATED: (state, value) => {
    state.mustBeAuthenticated = value
  },
  SET_CHECKOUT: (state, payload) => {
    state.checkout = payload
  },
  SET_CHECKOUT_ITEMS: (state, payload) => {
    state.checkout.subTotal = (payload[0]).toFixed(2)
    state.checkout.total = (payload[0]).toFixed(2)
    state.checkout.totalWeight = payload[1]
  },
  SET_CHECKOUT_COUNTRY: (state, payload) => {
    state.checkout.country = payload
  },
  SET_CHECKOUT_SHIPPING_METHOD: (state, payload) => {
    state.checkout.shippingMethod = payload[0]
    state.checkout.shippingPrice = payload[1]
    state.checkout.total = (state.checkout.subTotal + payload[1]).toFixed(2)
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (
      req.cookies !== undefined &&
      req.cookies.user_token !== undefined &&
      req.cookies.user_token !== null
    ) {
        commit('LOAD_USER', req.cookies.user_token)
    }
  }
};
