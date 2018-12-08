export default function (context) {
  if (context.req !== undefined) {
    let locale = context.app.i18n.fallbackLocale;
    if (context.req.cookies === undefined || context.req.cookies.locale === undefined) {
      let m;
      const regex = /fr/gm;
      if (context.req.headers !== undefined && context.req.headers['accept-language'] !== undefined) {
        m = regex.exec(context.req.headers['accept-language']);
        if (m !== null && m[0] === 'fr'){
          locale = 'fr'
        }
      }
    } else {
      locale = context.req.cookies.locale
    }
    context.app.i18n.locale = locale;
  }
}

