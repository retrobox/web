# Web site

Web site of Retrobox project, made with Vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Docker image

This docker image expose on 80 port.

run it:

`sudo docker run -d -p 4242:80 --name retrobox.web retrobox/web`
