import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        nav_toggled: false,
        title: ""
    },
    mutations: {
        SET_TITLE (state, payload) {
          state.title = payload + " - Retrobox"
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
