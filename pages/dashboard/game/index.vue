<template>
  <div class="dashboard-page-container">
    <div class="dashboard-page">
      <DashboardNav />
      <div class="dashboard-page-content">
        <h1 class="dashboard-page-title">
          WIP [game list]
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from "../../../components/DashboardNav"

export default {
  middleware: 'authenticated',
  components: {
    DashboardNav
  },
  head() {
    return {
      title: "List of games"
    }
  }
}
</script>
