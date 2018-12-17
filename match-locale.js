console.log("Matching... \n");

let locales = [
  require('./assets/locales/fr.json'),
  require('./assets/locales/en.json')
];
let keys = [];
const all_keys = require('all-object-keys');
locales.forEach((locale) => {
  keys[locale._id] = all_keys(locale)
});
const colors = require('colors');
const colors_a = [
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan'
];
let errors = 0;
locales.forEach((origin_locale) => {
  locales.forEach((locale) => {
    let color = colors_a[Math.floor(Math.random()*colors_a.length)];
    colors_a.splice(colors_a.indexOf(color), 1);
    keys[origin_locale._id].forEach((item) => {
      if (keys[locale._id].indexOf(item) === -1) {
        console.log(colors[color](item + " in ") + colors.bold(locale._id));
        errors++
      }
    })
  });
  console.log("");
});

if (errors === 0) {
  console.log(colors.bold(colors.green('No errors')));
  console.log("");
} else {
  console.log(colors.bold(colors.red(`Found ${errors} error(s)`)));
  console.log("");
}
