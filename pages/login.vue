<template>
  <div>
    <div
      class="container mx-auto"
    >
      <Error
        :title="`Authentification requise`"
        :description="`Vous devez vous connecter à votre compte pour accéder à cette page`"
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
      title: "Pour accéder à cette page, vous devez vous connecter"
    };
  },
  mounted() {
    let urlSearchParams = new URLSearchParams(window.location.search)
    this.$store.commit('SET_LOGIN_REDIRECT_ROUTE', decodeURI(urlSearchParams.get('redirect')))
    setTimeout(() => {
        this.$modal.show("loginOrRegister");    
    }, 400)
  }
};
</script>
