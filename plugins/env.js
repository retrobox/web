import Vue from 'vue'

Vue.prototype.$env = {
  docsEndpoint: process.env.docsEndpoint,
  apiEndpoint: process.env.apiEndpoint
};
