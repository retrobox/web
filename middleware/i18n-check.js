const acceptLanguageParser = require('accept-language-parser');

export default function ({ req, route, redirect }) {
    if (req !== undefined && route.fullPath.substring(3, 4) !== '/') {
        let locale = 'en'
        if (req.headers !== undefined && req.headers['accept-language'] !== undefined) {
            
            let languages = acceptLanguageParser.parse(req.headers['accept-language']);
            if (languages.filter(i => { return i.quality === 1 })[0].code === 'fr') {
                locale = 'fr'
            }
        }
        return redirect('/' + locale + route.fullPath)
    }
}
