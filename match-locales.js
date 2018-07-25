console.log("Matching... \n");

var locales = [
  require('./src/assets/langs/fr.json'),
  require('./src/assets/langs/en.json')
]
var keys = []
const all_keys = require('all-object-keys');
locales.forEach((locale) => {
  keys[locale._id] = all_keys(locale)
})
const colors = require('colors')
const colors_a = [
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan'
]
locales.forEach((origin_locale) => {
  locales.forEach((locale) => {
    var color = colors_a[Math.floor(Math.random()*colors_a.length)]
    colors_a.splice(colors_a.indexOf(color), 1);
    keys[origin_locale._id].forEach((item) => {
      if (keys[locale._id].indexOf(item) == -1) {
        console.log(colors[color](item + " in ") + colors.bold(locale._id));
      }
    })
  })
  console.log("");
})
