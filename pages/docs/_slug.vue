<template>
  <div>
    <fade-transition group>
      <div
        v-if="loading"
        :key="'loading'">
        <div class="loading">
          <Icon
            value="sync"
            spin />
        </div>
      </div>
      <div
        v-if="loading === false"
        :key="'notLoading'">
        <div class="cover-title">
          <div class="cover-title-content container mx-auto">
            <h1>{{ title }}</h1>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="article">
            <div class="docs-nav">
              <nav>
                <div class="nav-item">
                  <nuxt-link to="/docs">{{ $t('home') }}</nuxt-link>
                </div>
                <div
                  v-for="item in items"
                  v-if="item.is_divider === false"
                  :key="item.slug"
                  :class="{'active': item.slug === $route.params.slug, 'nav-item': true, 'nav-item-divider': item.is_divider}">
                  <nuxt-link :to="'/docs/' + item.slug">{{ item.name }}</nuxt-link>
                </div>
              </nav>
            </div>
            <div class="docs-content">
              <!-- <a @click="fetchData()">Refresh</a> -->
              <div
                class="content doc-page-content"
                v-html="content">
              </div>
              <div class="navigation">
                <ul class="list-reset flex justify-between">
                  <li class="mr-3">
                    <nuxt-link
                      v-if="actual_index > 0"
                      :to="'/docs/' + items[actual_index - 1].slug"
                      class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                      <Icon
                        left
                        value="fas fa-backward" />
                      {{ $t('previous') }}
                    </nuxt-link>
                    <nuxt-link
                      v-if="actual_index === 0"
                      :to="'/docs'"
                      class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                      <Icon
                        left
                        value="fas fa-backward" />
                      {{ $t('previous') }}
                    </nuxt-link>
                  </li>
                  <li class="mr-3">
                  </li>
                  <li class="mr-3">
                    <a
                      v-if="actual_index === items.length - 1"
                      class="inline-block py-2 px-4 text-grey-light cursor-not-allowed disabled">
                      {{ $t('next') }}
                      <Icon
                        right
                        value="fas fa-forward" />
                    </a>
                    <nuxt-link
                      v-if="actual_index !== items.length - 1"
                      :to="'/docs/' + items[actual_index + 1].slug"
                      class="inline-block border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                      {{ $t('next') }}
                      <Icon
                        right
                        value="fas fa-forward" />
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fade-transition>
  </div>
</template>

<script>
  import marked from "marked"
  import Icon from "../../components/Icon"
  export default {
    name: 'DocumentationHome',
    components: {Icon},
    head () {
      return {
        title: this.title,
        meta: [
          {property: 'og:title', content: this.title}
        ]
      }
    },
    data () {
      return {
        content: '',
        loading: true,
        title: '',
        items: [],
        actual_item: {},
        actual_index: 0
      }
    },
    watch: {
      '$route' () {
        // this.fetchData()
      },
      '$i18n.locale' () {
        // this.fetchData()
      }
    },
    created () {
      // this.fetchData()
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
      let title = locale.tree.filter((item) => {
        return item.slug === context.params.slug
      })[0].name
      let actual_item = items.filter(item => {
        return item.slug === context.params.slug
      })[0]
      let actual_index = items.indexOf(actual_item)
      response = await context.$axios.get(context.app.$env.DOCS_ENDPOINT + '/content/' + context.app.i18n.locale + '/' + context.params.slug + '.md');
      return {
        content: marked(response.data),
        loading: false,
        items: items,
        actual_index: actual_index,
        actual_item: actual_item,
        title: title
      }
    }
  }
</script>
