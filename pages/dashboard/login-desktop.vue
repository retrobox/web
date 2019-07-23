<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>Se connecter à l'application de Bureau</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div
        v-if="loading"
        class="loading-container">
        <div class="loading">
          <Icon
            value="fas fa-sync"
            spin />
        </div>
      </div>
      <div
        v-if="success">
        <Error
          :title="`Compte liée avec succès!`"
          :description="`Vous pouvez retourner sur votre application de bureau pour l'utiliser et fermer cet onglet`"
          icon="fas fa-check-circle" />
        <div class="flex justify-center mt-2 mb-3 pb-3">
          <a
            class="shop-checkout-thanks-button bg-blue hover:bg-blue-light text-white font-bold py-4 px-8 rounded inline-flex items-center button"
            @click="$router.push('/')">
            <Icon value="fas fa-home" />
            {{ $t('home') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/Icon";
import Error from "~/components/Error";

export default {
  middleware: 'authenticated',
  head() {
    return {
      title: "Se connecter sur l'application de Bureau"
    };
  },
  components: {
    Icon,
    Error
  },
  data() {
    return {
      user: {},
      fetched: false,
      orders: [],
      orderToView: {},
      destroyAccountConfirmation: false,
      success: false,
      loading: true
    };
  },
  mounted() {
    this.loading = true
    const urlParams = new URLSearchParams(window.location.search);
    this.$apitator.post('/account/login-desktop', {
        token: urlParams.get('token')
    }, { withAuth: true }).then(() => {        
        this.$store.commit('ADD_ALERT', {
            type: 'success',
            title: "Compte relié à l'application de bureau !",
            description: "Vous pouvez maintenant fermer cet onglet et retourner sur l'application"
        })
        this.loading = false
        this.success = true
    }).catch((err) => {
        console.log(err)
    })
  }
};
</script>