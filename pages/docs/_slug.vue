<template>
  <div>
    <div>
      <div class="cover-title">
        <div class="cover-title-content container mx-auto">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="article">
          <div
            :class="{ 'docs-mobile-nav' : $store.state.isMobile }"
            class="docs-nav">
            <nav>
              <div
                v-if="$store.state.isMobile"
                class="nav-item"
                @click="docMobileMenu = !docMobileMenu">
                <a>
                  <span
                    v-if="!docMobileMenu"
                    :key="'1'">
                    <Icon value="fas fa-angle-double-down"/> {{ $t('menu.open') }}
                  </span>
                  <span
                    v-if="docMobileMenu"
                    :key="'2'">
                    <Icon value="fas fa-times-circle"/> {{ $t('menu.close') }}
                  </span>
                </a>
              </div>
              <transition name="main-transition">
                <div v-if="!$store.state.isMobile || docMobileMenu">
                  <div
                    v-for="item in tree"
                    :key="item.slug"
                    :class="{'active': item.slug === $route.params.slug, 'nav-item': true, 'nav-item-divider': item.is_divider}">
                    <nuxt-link :to="'/docs/' + item.slug">{{ item.name }}</nuxt-link>
                  </div>
                </div>
              </transition>
            </nav>
          </div>
          <div class="docs-content">
            <!-- <a @click="fetchData()">Refresh</a> -->
            <div
              class="content doc-page-content">
              <component :is="currentComponent"></component>
            </div>
            <div class="navigation">
              <ul class="list-reset flex justify-between">
                <li class="mr-3">
                  <a
                    v-if="previous == null"
                    class="inline-block flex py-2 px-4 text-grey-light cursor-not-allowed disabled">
                    <Icon
                      left
                      value="fas fa-backward"/>
                    {{ $t('previous') }}
                  </a>
                  <nuxt-link
                    v-if="previous !== null"
                    :to="/docs/ + previous.slug"
                    class="inline-block flex border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                    <Icon
                      left
                      value="fas fa-backward"/>
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
                      value="fas fa-forward"/>
                  </a>
                  <nuxt-link
                    v-if="next !== null"
                    :to="/docs/ + next.slug"
                    class="inline-block flex border border-blue rounded py-2 px-4 bg-blue hover:bg-blue-dark text-white">
                    {{ $t('next') }}
                    <Icon
                      right
                      value="fas fa-forward"/>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from "../../components/Icon"

  export default {
    name: 'DocumentationPage',
    components: {
      'EnglishHome': () => import('../../docs/en/home'),
      'EnglishGettingStarted': () => import('../../docs/en/getting-started'),
      'FrenchHome': () => import('../../docs/fr/home'),
      'FrenchGettingStarted': () => import('../../docs/fr/getting-started'),
      'FrenchTools': () => import('../../docs/fr/tools'),
      'FrenchAssembly': () => import('../../docs/fr/assembly'),
      'FrenchFinishing': () => import('../../docs/fr/finishing'),
      'FrenchInstallation': () => import('../../docs/fr/installation'),
      'FrenchQuestions': () => import('../../docs/fr/questions'),
      'FrenchTroubleshooting': () => import('../../docs/fr/troubleshooting'),
      'FrenchManualInstallation': () => import('../../docs/fr/manual-installation'),
      'FrenchTechnicalSpecification': () => import('../../docs/fr/technical-specification'),
      Icon
    },
    head() {
      return {
        title: this.title,
        meta: [
          {property: 'og:title', content: this.title}
        ]
      }
    },
    data() {
      return {
        content: '',
        loading: false,
        title: '',
        tree: [],
        actual_item: {},
        actual_index: 0,
        next: null,
        previous: null,
        slug: '',
        docMobileMenu: false,
        currentComponent: ''
      }
    },
    async asyncData(context) {
      let docsConfig = require('../../assets/content/' + context.app.i18n.locale + '/documentation.json')
      let page = docsConfig.tree.filter((page) => page.slug === context.params.slug)[0]
      let indexOf = docsConfig.tree.indexOf(page)
      let componentNameLetters = context.params.slug.split('')
      componentNameLetters = componentNameLetters.map((letter, index) => {
        if (letter === '-') {
          return null;
        }
        if (componentNameLetters[index - 1] === '-' || index === 0) {
          return letter.toUpperCase()
        }
        return letter.toLowerCase()
      })
      let componentName = componentNameLetters.join('')
      componentName = (context.app.i18n.locale === 'fr' ? 'French' : 'English') + componentName
      return {
        title: page.name,
        tree: docsConfig.tree,
        currentComponent: componentName,
        previous: docsConfig.tree[indexOf - 1] === undefined ? null : docsConfig.tree[indexOf - 1],
        next: docsConfig.tree[indexOf + 1] === undefined ? null : docsConfig.tree[indexOf + 1]
      }
    }
  }
</script>
