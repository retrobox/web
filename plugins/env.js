import Vue from 'vue'

Vue.prototype.$env = {
  docsEndpoint: process.env.DOCS_ENDPOINT,
  apiEndpoint: process.env.API_ENDPOINT
};
