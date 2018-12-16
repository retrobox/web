import Vue from 'vue'
import VueStripeCheckout from 'vue-stripe-checkout'

Vue.use(VueStripeCheckout, process.env.STRIPE_PUBLIC);
