import Vue from 'vue'
import VueApitator from 'vue-apitator';
import Client from '../node_modules/vue-apitator/dist/client.js';

let config = {
  baseUrl: process.env.apiEndpoint,
  graphQLPath: '/graphql'
}

Vue.use(VueApitator, config);

export default ({ app }) => {
  app.apitator = new Client(config)
}
