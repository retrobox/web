<template>
  <Navigation
    :tree="tree"
    class="dashboard-nav-container" />
</template>

<script>
import Icon from "./Icon"
import Navigation from "./Navigation"

export default {
  name: 'DashboardNav',
  components: {Icon, Navigation},
  data: () => ({
    tree: [
      {
        route: { name: 'dashboard-console' },
        beginWith: '/dashboard/console',
        name: 'Gérer ma console',
        icon: 'fas fa-gamepad'
      },
      {
        route: { name: 'dashboard-game' },
        name: 'Jeux rétros',
        icon: 'fas fa-store'
      },
      {
        route: { name: 'dashboard-account' },
        name: 'Mon profile',
        icon: 'fas fa-user-circle'
      },
      {
        route: { name: 'dashboard-orders' },
        name: 'Mes commandes',
        icon: 'fas fa-dollar-sign'
      }
    ]
  })
}
</script>

