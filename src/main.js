// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Transitions from 'vue2-transitions'
import VueI18n from 'vue-i18n'
import Icon from 'vue-awesome/components/Icon'
import {store} from './store'
import 'vue-awesome/icons'
import VModal from 'vue-js-modal'
import VueCookie from 'vue-cookie'

console.log(process.env);

Vue.use(VModal, {dialog: true})
Vue.use(VueI18n)
Vue.component('icon', Icon)
Vue.use(Transitions)
Vue.use(VueCookie)

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'fr', // set locale
    messages: {
        fr: require('./assets/langs/fr.json'),
        en: require('./assets/langs/en.json'),
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    i18n,
    store
})
