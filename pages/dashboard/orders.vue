<template>
  <div class="dashboard-page-container">
    <div class="dashboard-page">
      <DashboardNav />
      <div class="dashboard-page-content">
        <div class="account-dashboard">
          <div class="account-orders-container">
            <h3 class="dividing mb-4">{{ $t("user-dash.table-title") }}</h3>
            <div class="shop-cart-container">
              <div 
                v-if="orders.length === 0" 
                class="shop-empty-container">
                <div class="shop-empty-icon">
                  <Icon value="fas fa-times-circle" />
                </div>
                <div class="shop-empty-title">
                  <h3>{{ $t("user-dash.no-command") }}</h3>
                </div>
              </div>
              <div v-if="orders.length > 0">
                <div class="shop-cart-list list">
                  <div class="list-head">
                    <div>{{ $t("user-dash.first-column") }}</div>
                    <div>{{ $t("user-dash.second-column") }}</div>
                    <div>{{ $t("user-dash.third-column") }}</div>
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
                        @click="viewOrder(order)"
                      >
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
              name="orderView">
              <div class="p-4">
                <h3 class="mb-6 mt-3">
                  {{ $t("user-dash.") }}Détails sur la commande #{{
                    orderToView.id
                  }}
                </h3>
                <ul class="mb-2">
                  <li class="mb-1">
                    {{ $t("user-dash.modal-order-subtotal")
                    }}{{ orderToView.sub_total_price }}
                  </li>
                  <li class="mb-1">
                    {{ $t("user-dash.modal-order-shipping")
                    }}{{ orderToView.total_shipping_price }}
                  </li>
                  <li class="mb-1">
                    {{ $t("user-dash.modal-order-total")
                    }}{{ orderToView.total_price }}
                  </li>
                  <li class="mb-1">
                    {{ $t("user-dash.modal-order-payment")
                    }}{{ orderToView.way }}
                  </li>
                  <li>
                    {{ $t("user-dash.external-id") }}
                    <code>{{ orderToView.on_way_id }}</code>
                  </li>
                </ul>
              </div>
              <div
                class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 text-center cancel-button"
                @click="$modal.hide('orderView')"
              >
                {{ $t("close") }}
              </div>
            </modal>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from "../../components/DashboardNav";
import Icon from "../../components/Icon";

export default {
  middleware: "authenticated",
  components: {
    DashboardNav,
    Icon
  },
  head() {
    return {
      title: "Your orders"
    };
  },
  data() {
    return {
      orders: [],
      orderToView: {}
    };
  },
  async asyncData(context) {
    let res = await context.app.apitator.graphQL(
      `query {
              getManyShopOrders {
                id,
                sub_total_price,
                total_shipping_price,
                total_price,
                on_way_id,
                way
              }
            }
          `,
      {},
      { withAuth: true }
    );
    let data = res.data.data;
    let orders = data.getManyShopOrders.map(order => {
      order.status = order.status === "payed" ? "Payée" : "Annulé";
      order.way =
        order.way.substr(0, 1).toUpperCase() +
        order.way.substr(1).toLowerCase();
      return order;
    });
    return {
      orders
    };
  },
  methods: {
    viewOrder(order) {
      this.orderToView = order;
      this.$modal.show("orderView");
    }
  }
};
</script>