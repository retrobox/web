import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        nav_toggled: false,
        title: "",
        title_context: {}
    },
    mutations: {
        SET_TITLE (state, payload) {
          if (payload.context != undefined && payload.key != undefined) {
            state.title = payload.context.$t(payload.key) + " - Retrobox"
            state.title_context = payload
          }else{
            state.title = payload
          }

          document.title = state.title

        },
        TOGGLE_NAV (state) {
            if (state.nav_toggled) {
                document.getElementsByTagName('body')[0].className = ""
                state.nav_toggled = false
            }else{
                document.getElementsByTagName('body')[0].className = "no-scroll"
                state.nav_toggled = true
            }
        }
    }
})
