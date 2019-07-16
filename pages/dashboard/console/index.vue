<template>
  <div class="dashboard-page-container">
    <div class="dashboard-page">
      <DashboardNav />
      <div class="dashboard-page-content">
        <!-- <h1 class="dashboard-page-title">
          WIP [consoles]
        </h1> -->
        <div 
          v-if="consoles.length === 0" 
          class="shop-empty-container no-top-margin">
          <div class="shop-empty-icon">
            <Icon value="fas fa-times-circle" />
          </div>
          <div class="shop-empty-title">
            <h3>Vous n'avez pas encore de consoles</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from "../../../components/DashboardNav"
import Icon from "../../../components/Icon"
import Error from "../../../components/Error"

export default {
  middleware: 'authenticated',
  components: {
    DashboardNav,
    Icon,
    Error
  },
  head() {
    return {
      title: "List of consoles"
    }
  },
  data: () => ({
    consoles: []
  }),
  async asyncData({ app: { apitator } }) {
    let res = await apitator.graphQL(`query{getManyConsoles{
      id
    }}`, {}, {withAuth: true})
    return {
      consoles: res.data.data.getManyConsoles
    }
  }
}
</script>
