const axios = require('axios')
const fs = require('fs')
const locales = ['fr', 'en']

module.exports.getAppRoutes = async function getAppRoutes(getExcluded = false) {
  let routes = []

  for (locale of locales) {
    // generate documentation routes from localized docs config
    let docConfigPath = __dirname + '/assets/content/' + locale + '/documentation.json'
    let docsTree = fs.readFileSync(docConfigPath)
    docsTree = JSON.parse(docsTree).tree
    for (docPage of docsTree) {
      if (docPage.allow_indexing || getExcluded) {
        routes.push('/' + locale + '/docs/' + docPage.slug)
      }
    }

    // generate shop routes from api
    let res = await axios.get(process.env.API_ENDPOINT + '/shop/' + locale + '/categories')
    let categories = res.data.data.categories
    for (categorie of categories) {
      for (item of categorie.items) {
        // only map the important shop items, ignore the rest of them
        if (item.allow_indexing || getExcluded) {
          routes.push('/' + locale + '/shop/' + item.slug)
        }
      }
    }
  }

  return routes
}

module.exports.getExcludedRoutes = async function getExcludedRoutes() {
  let excludedRoutes = [
    'credits', 'dashboard/', 'legals', 'terms', 'terms-of-sale', 'privacy'
  ]
  let excludedPaths = []
  excludedRoutes.forEach(route => {
    locales.forEach(locale => {
      excludedPaths.push('/' + locale + '/' + route)
    })
  })
  excludedPaths = [...await module.exports.getAppRoutes(true), ...excludedPaths]
  return excludedPaths
}
