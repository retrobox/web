<template>
  <DashboardPage>
    <h1 class="dashboard-page-title">
      WIP [game list]
    </h1>
  </DashboardPage>
</template>

<script>
import DashboardPage from "../../../components/DashboardPage"

export default {
  middleware: 'authenticated',
  components: {
    DashboardPage
  },
  head() {
    return {
      title: "List of games"
    }
  }
}
</script>
