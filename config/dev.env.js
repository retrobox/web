'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DOCS_ENDPOINT: '"http://localhost:9950"',
  API_ENDPOINT: '"http://localhost:8000"',
  STRIPE_PUBLIC: '"pk_test_vyGtkeybeUHvLZnXFbaHlXWC"',
  SHOP_ITEM_CONSOLE_BONUS_16GB: '"3.66"',
  SHOP_ITEM_CONSOLE_BONUS_32GB: '"9.86"'
})
