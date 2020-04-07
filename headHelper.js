/**
 * Will generate meta tags for a page from title, description and keywords
 *
 * @param context
 * @param proprieties
 */
export function generateMetas(context, proprieties) {
  let defaults = {
    type: 'website',
    image: 'https://static.retrobox.tech/img/logo/logo_alone_square.png',
    keywords: 'retrobox, retro, box, thingmill, valentin derouet, etienne chevrollier, matthieu bessat, raspberry pi zero, diy, kit, rpi, rétrobox',
    author: 'Thingmill',
    copyright: '© 2020 Thingmill',
    url: 'https://retrobox.tech' + context.$nuxt.$route.path
  }
  proprieties = {...proprieties, ...defaults}

  return {
    title: proprieties.title,
    meta: [
      {name: 'description', content: proprieties.description}, //150 - 230 characters
      {name: 'keywords', content: proprieties.keywords},
      {name: 'author', content: proprieties.author},
      {name: 'copyright', content: proprieties.copyright},

      // opengraph
      {property: 'og:title', content: proprieties.title},
      {property: 'og:type', content: proprieties.type},
      {property: 'og:url', content: proprieties.url},
      {property: 'og:image', content: proprieties.image},

      // twitter
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: proprieties.title},
      {name: 'twitter:url', content: proprieties.url},
      {name: 'twitter:image:src', content: proprieties.image},
      {name: 'twitter:site', content: '@thingmill'}
    ]
  }
}
