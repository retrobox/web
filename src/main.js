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
import Tooltip from 'vue-directive-tooltip';
import VueCookie from 'vue-cookie'
import VueApitator from './apitator'
import VueStripeCheckout from 'vue-stripe-checkout';

console.log(process.env);

Vue.use(VModal, {dialog: true})
Vue.use(VueI18n)
Vue.component('icon', Icon)
Vue.use(Transitions)
Vue.use(VueCookie)
Vue.use(Tooltip);


Vue.config.productionTip = false

Vue.use(VueApitator, {
    rootUrl: process.env.API_ENDPOINT,
    graphQLUrl: process.env.API_ENDPOINT + "/graphql",
    params: {
        timeout: 190000
    }
});
Vue.use(VueStripeCheckout, {
  key: process.env.STRIPE_PUBLIC,
  image: 'https://i.imgur.com/sEtYLqg.png',
  locale: 'auto'
});

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
