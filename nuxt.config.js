if (process.env.NODE_ENV !== 'production' || process.env.ENV_FILE == 'local') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const marked = require('marked')
const renderer = new marked.Renderer();
const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const getRoutes = require('./getRoutes.js');

const FrMessages = require('./assets/locales/fr.json')
const EnMessages = require('./assets/locales/en.json')

const baseUrl = 'https://retrobox.tech'

module.exports = {
  mode: 'universal',

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    ['nuxt-env', {
      keys: [
        'API_ENDPOINT',
        'DOCS_ENDPOINT',
        'USER_DASHBOARD_ENDPOINT',
        'ADMIN_DASHBOARD_ENDPOINT',
        'WS_ENDPOINT',
        'COOKIE_DOMAIN',
        'STRIPE_PUBLIC'
      ]
    }],
    '@nuxtjs/sitemap'
  ],

  plugins: [
    '~/plugins/apitator.js',
    {src: '~/plugins/cookie.js', ssr: false},
    {src: '~/plugins/transition.js', ssr: false},
    {src: '~/plugins/modal.js', ssr: false},
    {src: '~/plugins/scrollTo.js', ssr: false},
    {src: '~/plugins/tooltip.js', ssr: false},
    {src: '~/plugins/stripe.js', ssr: false},
    {src: '~/plugins/persistedState.js', ssr: false},
    {src: '~/plugins/lazyLoad.js', ssr: false},
    {src: '~/plugins/highlight.js', ssr: false}
  ],

  head: {
    title: "Retrobox",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: "Retrobox"},
      {name: 'msapplication-TileColor', content: '#FF4C4C'},
      {name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#FF4C4C'},
      {name: 'author', content: 'Thingmill'},
      {property: 'og:title', content: 'RetroBox - A diy open-source console'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://www.retrobox.tech/'},
      {property: 'og:image', content: 'https://static.retrobox.tech/img/logo/logo.png'},
      {name: 'keywords', content: 'retrobox, retro, box, thingmill, valentin derouet, etienne chevrollier, matthieu bessat, raspberry pi zero, diy, kit, rpi, rétrobox'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'RetroBox - A diy open-source console'},
      {name: 'twitter:url', content: 'https://www.retrobox.tech/'},
      {name: 'twitter:description', content: 'RetroBox is the first open-source console, based on a Raspberry-Pi Zero.'},
      {name: 'twitter:image', content: 'https://static.retrobox.tech/img/logo/logo.png'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/android-icon-16x16.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/android-icon-36x36.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/android-icon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
      {rel: 'manifest', href: '/manifest.json'}
    ],
    script: [
      {src: '/analytics.js'}
    ]
  },

  router: {
    middleware: ['session', 'i18n-check']
  },

  i18n: {
    baseUrl,
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fr',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      cookieKey: 'i18n_redirected'
    },
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  sitemap: {
    hostname: baseUrl,
    routes() {
      return getRoutes();
    },
    path: '/sitemap.xml',
    gzip: true,
    generate: false
  },

  loading: {color: '#000'},

  css: [
    '~/assets/scss/main.scss'
  ],

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
      });
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'tailwindcss': tailwindJS,
        'autoprefixer': {}
      }
    }
  }
}
