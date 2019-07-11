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
        path: '/dashboard',
        beginWith: '/dashboard/console',
        name: 'Gérer ma console',
        icon: 'fas fa-gamepad'
      },
      {
        path: '/dashboard/game',
        name: 'Jeux rétros',
        icon: 'fas fa-store'
      },
      {
        path: '/dashboard/account',
        name: 'Mon profile',
        icon: 'fas fa-user-circle'
      },
      {
        path: '/dashboard/orders',
        name: 'Mes commandes',
        icon: 'fas fa-dollar-sign'
      }
    ]
  })
}
</script>

