<template>
  <div v-if="fetched">
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('user-dash.title') }}</h1>
      </div>
    </div>
    <div class="container mx-auto account-dashboard">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <div class="account-card">
            <div class="account-card-content">
              <div class="account-card-avatar">
                <img :src="user.avatar"/>
              </div>
              <div class="account-card-details">
                <div class="account-card-item account-card-username">{{ user.username }}</div>
                <div class="account-card-item account-card-email">{{ user.email }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="account-actions">
            <a
              class="with-link account-action"
              @click="fetchData()">
              <Icon value="fas fa-sync-alt"/>
              {{ $t('user-dash.refresh') }}
            </a>
            <a
              class="with-link account-action"
              @click="openDestroyAccount()">
              <Icon value="fas fa-trash"/>
              {{ $t('user-dash.destroy') }}
            </a>
            <a
              v-if="user.is_admin"
              class="with-link account-action"
              @click="adminDashboard()">
              <Icon value="fas fa-shield-alt"/>
              {{ $t('user-dash.admin-panel') }}
            </a>
            <a
              class="with-link account-action"
              @click="logout()">
              <Icon value="fas fa-sign-out-alt"/>
              {{ $t('user-dash.disconnect') }}
            </a>
          </div>
        </div>
      </div>
      <div class="account-orders-container mt-4 mb-3 pt-4 pb-4">
        <h3 class="dividing mb-4">{{ $t('user-dash.table-title') }}</h3>
        <div class="shop-cart-container">
          <div
            v-if="orders.length === 0"
            class="shop-empty-container">
            <div class="shop-empty-icon">
              <Icon value="fas fa-times-circle"/>
            </div>
            <div class="shop-empty-title">
              <h3>
                {{ $t('user-dash.no-command') }}
              </h3>
            </div>
          </div>
          <div v-if="orders.length > 0">
            <div class="shop-cart-list list">
              <div class="list-head">
                <div>{{ $t('user-dash.first-column') }}</div>
                <div>{{ $t('user-dash.second-column') }}</div>
                <div>{{ $t('user-dash.third-column') }}</div>
                <div></div>
              </div>
              <div
                v-for="order in orders"
                :key="order.id"
                class="list-row">
                <div>€ {{ order.total_price }}</div>
                <div>{{ order.way }}</div>
                <div>{{ order.status }}</div>
                <div class="shop-cart-actions">
                  <a
                    :title="'Voir en détail'"
                    class="bg-grey hover:bg-grey-dark text-white font-bold py-1 px-2 rounded button"
                    @click="viewOrder(order)">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <no-ssr>
        <modal
          adaptive
          class="modal"
          height="auto"
          name="destroyAccount">
          <div class="p-4">
            <h3 class="mb-6 mt-3">{{ $t('user-dash.modal-account-delete-title') }}</h3>
            <p>
              {{ $t('user-dash.modal-account-delete-desc') }}
            </p>
            <br>
            <input
              id="destroy-confirmation"
              v-model="destroyAccountConfirmation"
              type="checkbox" />
            <label for="destroy-confirmation">{{ $t('user-dash.modal-account-delete-confirm') }}</label>
            <br>
            <br>
          </div>
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-1/2 button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
              @click="$modal.hide('destroyAccount')">
              {{ $t('user-dash.modal-account-delete-cancel') }}
            </div>
            <div
              class="w-full md:w-1/2 button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
              @click="destroyAccount()">
              {{ $t('user-dash.modal-account-delete-cancel-confirm') }}
            </div>
          </div>

        </modal>
        <modal
          adaptive
          class="modal"
          height="auto"
          name="orderView">
          <div class="p-4">
            <h3 class="mb-6 mt-3">{{ $t('user-dash.') }}Détails sur la commande #{{ orderToView.id }}</h3>
            <ul class="mb-2">
              <li class="mb-1">{{ $t('user-dash.modal-order-subtotal') }}{{ orderToView.sub_total_price }}</li>
              <li class="mb-1">{{ $t('user-dash.modal-order-shipping') }}{{ orderToView.total_shipping_price }}</li>
              <li class="mb-1">{{ $t('user-dash.modal-order-total') }}{{ orderToView.total_price }}</li>
              <li class="mb-1">{{ $t('user-dash.modal-order-payment') }}{{ orderToView.way }}</li>
              <li>{{ $t('user-dash.external-id') }}<code>{{ orderToView.on_way_id }}</code></li>
            </ul>
          </div>
          <div
            class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
            @click="$modal.hide('orderView')">
            {{ $t('close') }}
          </div>
        </modal>
      </no-ssr>
    </div>
  </div>
</template>

<script>
  import Icon from "../../components/Icon"

  export default {
    head() {
      return {
        title: this.$t('user-dash.titletitle')
      }
    },
    components: {
      Icon
    },
    data() {
      return {
        user: {},
        fetched: false,
        orders: [],
        orderToView: {},
        destroyAccountConfirmation: false
      }
    },
    watch: {
      '$store.state.isAuthenticated': function () {
        this.fetchData()
      }
    },
    beforeCreate () {
      this.$store.commit('SET_IS_LOADING', true)
    },
    mounted () {
      console.log('mounted')
      if (this.$store.state.isAuthenticated) {
        this.fetchData()
      }
    },
    methods: {
      fetchData() {
        console.log('fetch data...')
        setTimeout(() => {
          this.$apitator.get('/dashboard', {withAuth: true}).then((res) => {
            console.log('fetched data!!')
            this.user = res.data.data.user
            this.orders = res.data.data.orders.map((order) => {
              order.status = order.status === 'payed' ? "Payée" : "Annulé"
              order.way = order.way.substr(0, 1).toUpperCase() + order.way.substr(1).toLowerCase()
              return order
            })
            this.fetched = true
            this.$store.commit('SET_IS_LOADING', false)
          })
        }, 200)
      },
      openDestroyAccount() {
        this.$modal.show('destroyAccount')
      },
      destroyAccount() {
        if (this.destroyAccountConfirmation && confirm("Are you *really* sure of what your are doing?")) {
          this.$apitator.get('/dashboard/delete', {withAuth: true}).then(() => {
            this.logout(alert)
          })
        }
      },
      logout(alert = true) {
        this.$cookie.delete('user_token', {domain: this.$env.COOKIE_DOMAIN});
        this.$router.push('/')
        this.$store.commit('SET_AUTH', false)
        if (alert) {
          this.$store.commit('ADD_ALERT', {
            type: 'success',
            title: this.$i18n.t('account.logout.success.title'),
            description: this.$i18n.t('account.logout.success.description')
          })
        }
      },
      adminDashboard() {
        this.$store.commit('SET_IS_LOADING', true)
        window.location = this.$env.ADMIN_DASHBOARD_ENDPOINT
      },
      viewOrder (order) {
        this.orderToView = order
        this.$modal.show('orderView')
      }
    }
  }
</script>
