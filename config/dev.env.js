'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DOCS_ENDPOINT: '"http://localhost:9950"',
  API_ENDPOINT: '"http://localhost:8000"',
  STRIPE_PUBLIC: '"pk_test_vyGtkeybeUHvLZnXFbaHlXWC"'
})
