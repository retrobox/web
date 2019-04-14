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
                  v-for="item in tree"
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
                    <a
                      v-if="previous == null"
                      class="inline-block flex py-2 px-4 text-grey-light cursor-not-allowed disabled">
                      <Icon
                        left
                        value="fas fa-backward" />
                      {{ $t('previous') }}
                    </a>
                    <nuxt-link
                      v-if="previous !== null"
                      :to="/docs/ + previous.slug"
                      class="inline-block flex border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
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
                      v-if="next === null"
                      class="inline-block flex py-2 px-4 text-grey-light cursor-not-allowed disabled">
                      {{ $t('next') }}
                      <Icon
                        right
                        value="fas fa-forward" />
                    </a>
                    <nuxt-link
                      v-if="next !== null"
                      :to="/docs/ + next.slug"
                      class="inline-block flex border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
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
    name: 'DocumentationPage',
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
        tree: [],
        actual_item: {},
        actual_index: 0,
        next: {},
        previous: {},
        slug: ''
      }
    },
    asyncData (context) {
      return new Promise((resolve) => {
          let slug = context.params.slug === undefined ? 'home' : context.params.slug
          context.$axios.get(context.app.$env.API_ENDPOINT + '/docs/' + context.app.i18n.locale + '/' + slug).then((response) => {
            let result = {
              content: marked(response.data.data.content),
              loading: false,
              slug: response.data.data.slug,
              tree: response.data.data.tree,
              next: response.data.data.next,
              previous: response.data.data.previous,
              title: response.data.data.title
            }
            return resolve(result)
          })
      })
    }
  }
</script>
