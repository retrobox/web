<template>
  <div class="dashboard-page-container">
    <div class="dashboard-page">
      <Navigation
        :tree="tree"
        class="dashboard-nav-container" />
      <div class="dashboard-page-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon"
import Navigation from "~/components/Navigation"

export default {
  layout: "default",
  components: {Icon, Navigation},
  data() {
    return {
      tree: [
        {
          route: { name: 'dashboard' },
          beginWith: '/dashboard/console',
          name: this.$i18n.t('user-dash.navigation.console'),
          icon: 'fas fa-gamepad'
        },
        {
          route: { name: 'dashboard-game' },
          path: '/dashboard/game',
          name: this.$i18n.t('user-dash.navigation.games'),
          icon: 'fas fa-store'
        },
        {
          route: { name: 'dashboard-account' },
          path: '/dashboard/account',
          name: this.$i18n.t('user-dash.navigation.account'),
          icon: 'fas fa-user-circle'
        },
        {
          route: { name: 'dashboard-orders' },
          path: '/dashboard/orders',
          name: this.$i18n.t('user-dash.navigation.orders'),
          icon: 'fas fa-dollar-sign'
        }
      ]
    }
  }
}
</script>

