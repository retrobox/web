import Vue from 'vue'

Vue.prototype.$env = {
  docsEndpoint: process.env.docsEndpoint,
  apiEndpoint: process.env.apiEndpoint,
  adminDashboardEndpoint: process.env.adminDashboardEndpoint,
  userDashboardEndpoint: process.env.userDashboardEndpoint,
  cookieDomain: process.env.cookieDomain,
  stripePublic: process.env.stripePublic
};
