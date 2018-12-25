<template>
  <div>
    <!--<fade-transition group>-->
    <div
      v-if="loading"
      :key="loading">
      <div class="loading">
        <Icon
          value="fas fa-sync"
          spin />
      </div>
    </div>
    <div
      v-if="loading === false"
      :key="loading">
      <div class="cover-title">
        <div class="cover-title-content container mx-auto">
          <h1>{{ $t('docs') }}</h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="article">
          <div class="docs-nav">
            <nav>
              <div class="nav-item active">
                <nuxt-link to="/docs">{{ $t('home') }}</nuxt-link>
              </div>
              <div
                v-for="item in items"
                v-if="item.is_divider === false"
                :key="item.slug"
                :class="{'nav-item-divider':item.is_divider}"
                class="nav-item">
                <nuxt-link :to="'/docs/' + item.slug">{{ item.name }}</nuxt-link>
              </div>
            </nav>
          </div>
          <div class="docs-content">
            <div
              class="content doc-page-content"
              v-html="content">
            </div>
            <div class="navigation">
              <ul class="list-reset flex justify-between">
                <li class="mr-3">
                  <a class="inline-block py-2 px-4 text-grey-light cursor-not-allowed disabled">{{ $t('previous') }}</a>
                </li>
                <li class="mr-3">
                </li>
                <li class="mr-3">
                  <nuxt-link
                    :to="'/docs/' + items[0].slug"
                    class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                    {{ $t('next') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--</fade-transition>-->
  </div>
</template>

<script>
  import axios from "axios"
  import Icon from "../../components/Icon"
  import * as marked from "marked"
  export default {
    name: 'DocumentationHome',
    components: {Icon},
    head () {
      return {
        title: this.$t('docs'),
        meta: [
          {property: 'og:title', content: this.$t('docs')}
        ]
      }
    },
    data() {
      return {
        content: '',
        loading: true,
        items: []
      }
    },
    watch: {
      '$i18n.locale' () {
        this.$forceUpdate()
      }
    },
    async asyncData (context) {
      let response = await context.$axios.get(context.app.$env.DOCS_ENDPOINT + '/config.json')
      let locale = response.data.locales.filter((item) => {
        return item.slug === context.app.i18n.locale
      })[0]
      let items = locale.tree.map((item) => {
        item.is_divider = item.type === 'divider';
        return item
      })
      let slug = locale.home.slug
      response = await context.$axios.get(context.app.$env.DOCS_ENDPOINT + '/content/' + context.app.i18n.locale + '/' + slug + '.md');
      return {
        content: marked(response.data),
        loading: false,
        items: items
      }
    }
  }
</script>
