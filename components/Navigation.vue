<template>
  <div class="navigation-container">
    <nav 
      :class="{ 'mobile-nav' : $store.state.isMobile }"
      class="navigation">
      <div
        v-if="$store.state.isMobile"
        class="nav-item"
        @click="mobileMenu = !mobileMenu">
        <a>
          <span 
            v-if="!mobileMenu"
            :key="'1'">
            <Icon value="fas fa-angle-double-down" />
            {{ $t('menu.open') }}
          </span>
          <span
            v-if="mobileMenu"
            :key="'2'">
            <Icon value="fas fa-times-circle" />
            {{ $t('menu.close') }}
          </span>
        </a>
      </div>
      <transition name="main-transition">
        <div v-if="!$store.state.isMobile || mobileMenu">
          <div
            v-for="item in parsedTree"
            :key="item.slug"
            :class="{
              'active': item.isActive,
              'nav-item': true,
              'nav-item-divider': item.isDivider
            }"
          >
            <nuxt-link :to="localePath(item.route)">
              <Icon 
                v-if="item.icon !== undefined"
                :value="item.icon" />
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import Icon from "./Icon";

export default {
  name: "Navigation",
  components: { Icon },
  props: {
    tree: {    
      type: Array,
      required: true
    }
  },
  data: () => ({
    mobileMenu: false,
    isActive: false,
    parsedTree: []
  }),
  watch: {
    "$route": function () {
      this.checkIsActive()
    }
  },
  created () {
    this.checkIsActive()
  },
  methods: {
    checkIsActive: function () {
      this.parsedTree = this.tree.map(item => {
        item.isActive =
          '/' + this.$i18n.locale + item.path === this.$route.path ||
          this.$route.path.indexOf('/' + this.$i18n.locale + item.beginWith) !== -1
        return item
      })
    }
  }
};
</script>

