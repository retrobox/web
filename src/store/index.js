import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    nav_toggled: false,
    title: "",
    title_context: {},
    location: {
      root: "",
      sub_root: ""
    },
    loading: false,
    loading_type: 'normal',
    router_view_show: true,
    alert: {
      type: '',
      title: '',
      description: '',
      enabled: false
    },
    http_api_error: 0,
    cart: [],
    login_redirect_route: ""
  },
  mutations: {
    SET_TITLE(state, payload) {
      if (payload.context != undefined && payload.key != undefined) {
        state.title = payload.context.$t(payload.key)
        state.title_context = payload
      } else {
        state.title = payload
      }
      document.title = state.title + " - Retrobox"
    },
    SET_LOCATION(state, payload) {
      state.location = payload
    },
    TOGGLE_NAV(state) {
      if (state.nav_toggled) {
        document.getElementsByTagName('body')[0].className = ""
        state.nav_toggled = false
      } else {
        document.getElementsByTagName('body')[0].className = "no-scroll"
        state.nav_toggled = true
      }
    },
    SET_LOADING(state, payload) {
      state.loading = payload
      if (state.loading_type == 'normal') {
        if (payload) {
          state.router_view_show = false
        }
        if (payload == false) {
          state.router_view_show = true
        }
      } else {
        state.router_view_show = true
      }
    },

    ADD_HTTP_API_ERROR(state) {
      state.http_api_error = state.http_api_error + 1
    },

    SET_HTTP_API_ERROR(state, payload) {
      state.http_api_error = payload
    },

    ADD_ALERT(state, payload) {
      state.alert = {
        type: payload.type,
        title: payload.title,
        description: payload.description
      }
    },

    REMOVE_ALERT(state) {
      state.alert = {
        type: "",
        title: "",
        description: ""
      }
    },

    SET_LOADING_TYPE(state, payload) {
      state.loading_type = payload
    },

    CART_TOGGLE(state, payload) {
      if (state.cart[state.cart.indexOf(payload)] == undefined) {
        state.cart.push(payload)
      }else{
        state.cart.splice(state.cart.indexOf(payload), 1)
      }
    }
  },
  plugins: [createPersistedState({key: 'data_persited_vuex', paths: ['cart', 'cart_length']})]
})
