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
import Icon from "../components/Icon"
import Navigation from "../components/Navigation"

export default {
  layout: "default",
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

