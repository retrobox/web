const axios = require('axios')
const fs = require('fs')

module.exports = async function getAppRoutes() {
  let routes = []
  let locales = ['fr', 'en']

  for (locale of locales) {
    // generate documentation routes from localized docs config
    let docConfigPath = __dirname + '/assets/content/' + locale + '/documentation.json'
    let docsTree = fs.readFileSync(docConfigPath)
    docsTree = JSON.parse(docsTree).tree
    for (docPage of docsTree) {
      routes.push('/' + locale + '/docs/' + docPage.slug)
    }

    // generate shop routes from api
    let res = await axios.get(process.env.API_ENDPOINT + '/shop/' + locale + '/categories')
    let categories = res.data.data.categories
    for (categorie of categories) {
      for (item of categorie.items) {
        routes.push('/' + locale + '/shop/' + item.slug)
      }
    }
  }

  return routes
}
