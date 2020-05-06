import Vue from 'vue'

export default function (context) {
  let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  Vue.use({
    install: (context) => {
      let isSafari = () => /^((?!chrome|android).)*safari/i.test(userAgent)
      context.prototype.$isSafari = isSafari
      context.prototype.$imageAdapter = (url, options = {}) => {
        options = { fallback: '.png', ...options }
        let result = url + (isSafari() ? options.fallback : '.webp')
        if (options.css) {
          return `background-image: url('${result}');`
        }
        return result
      }
    }
  })
}