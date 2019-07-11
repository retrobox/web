<template>
  <DashboardPage>
    <h1 class="dashboard-page-title">
      WIP [one console]
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
      title: "Manage console..."
    }
  }
}
</script>
