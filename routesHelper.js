const axios = require('axios')
const fs = require('fs')
const locales = ['fr', 'en']
const excludedRoutes = [
  'dashboard/', 'checkout', 'terms-of-sale', 'terms', 'legals', 'privacy', 'credits', 'login', 'test'
]

module.exports.getRoutes = async function getAppRoutes(getExcluded = false) {
  let routes = []
  for (locale of locales) {
    // generate documentation routes from localized docs config
    let docConfigPath = __dirname + '/assets/content/' + locale + '/documentation.json'
    let docsTree = fs.readFileSync(docConfigPath)
    docsTree = JSON.parse(docsTree).tree
    for (docPage of docsTree)
      if ((docPage.allow_indexing && !getExcluded) || (!docPage.allow_indexing && getExcluded))
        routes.push('/' + locale + '/docs/' + docPage.slug)

    // generate shop routes from api
    let res = await axios.get(process.env.API_ENDPOINT + '/shop/' + locale + '/categories')
    let categories = res.data.data.categories
    // only map the important shop items, ignore the rest of them
    for (categorie of categories)
      for (item of categorie.items)
        if ((item.allow_indexing && !getExcluded) || (!item.allow_indexing && getExcluded))
          routes.push('/' + locale + '/shop/' + item.slug)
  }

  return routes
}

module.exports.getExcludedRoutes = async function getExcludedRoutes() {
  let excludedPaths = []
  excludedRoutes.forEach(route => {
    locales.forEach(locale => {
      excludedPaths.push('/' + locale + '/' + route)
    })
  })
  excludedPaths = [...await module.exports.getRoutes(true), ...excludedPaths]
  return excludedPaths
}

module.exports.filterRoutes = function filterRoutes(routes) {
  return routes.filter(route => {
    for (let i = 0; i < excludedRoutes.length; i++)
      if (route.url.indexOf(excludedRoutes[i]) > -1)
        return false
    return true
  })
}
