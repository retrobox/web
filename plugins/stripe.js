import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'

export default ({app}) => {
  Vue.use(VueStripeCheckout, app.$env.STRIPE_PUBLIC);
}
