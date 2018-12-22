import Vue from 'vue'
import VueApitator from 'vue-apitator';
import Client from '../node_modules/vue-apitator/dist/client.js';

export default ({ app }) => {
  let config = {
    baseUrl: app.$env.API_ENDPOINT,
    graphQLPath: '/graphql'
  }
  Vue.use(VueApitator, config);
  app.apitator = new Client(config)
}
