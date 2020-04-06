
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser');

// Redirect if www
app.use((req, res, next) => {
  if (req.headers['x-forwarded-host'] !== undefined && req.headers['x-forwarded-host'].indexOf('www.') > -1)
    return res.redirect(req.protocol + '://' + req.headers['x-forwarded-host'].replace('www.', '') + req.originalUrl)
  next()
})

app.set('port', port)
app.use(cookieParser())

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  /**
   * Shortcuts
   */
  app.get('/facebook', (req, res) => {
    return res.redirect(config.env.FACEBOOK_URL)
  })
  app.get('/twitter', (req, res) => {
    return res.redirect(config.env.TWITTER_URL)
  })
  app.get('/github', (req, res) => {
    return res.redirect(config.env.GITHUB_URL)
  })
  app.get('/discord', (req, res) => {
    return res.redirect(config.env.DISCORD_URL)
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
