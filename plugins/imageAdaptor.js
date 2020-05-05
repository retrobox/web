import Vue from 'vue'

export default function (context) {
  let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  Vue.use({
    install: (context) => {
      context.prototype.$imageAdapter = (url, options = {}) => {
        let isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
        isSafari = true
        options = { fallback: '.png', ...options }
        let result = url + (isSafari ? options.fallback : '.webp')
        if (options.css) {
          return `background-image: url('${result}');`
        }
        return result
      }
    }
  })
}