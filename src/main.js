// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Transitions from 'vue2-transitions'
import VueI18n from 'vue-i18n'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons'

Vue.use(VueI18n)
Vue.component('icon', Icon)
Vue.config.productionTip = false

Vue.use(Transitions)

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages: {
    fr: require('./assets/langs/fr.json')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
