<template>
  <div>
    <div
      class="container mx-auto"
    >
      <Error
        :title="$t('login-required.error.title')"
        :description="$t('login-required.error.description')"
        icon="fas fa-lock"
      />
    </div>
  </div>
</template>

<script>
import Error from "~/components/Error";
export default {
  components: {
    Error
  },
  head() {
    return {
      title: this.$t('login-required.title')
    };
  },
  mounted() {
    let urlSearchParams = new URLSearchParams(window.location.search)
    this.$store.commit('SET_LOGIN_REDIRECT_ROUTE', decodeURI(urlSearchParams.get('redirect')))
    setTimeout(() => this.$store.commit('SET_LOGIN_MODAL', true), 400)
  }
};
</script>
