<template>
  <DashboardPage>
    <div class="account-dashboard">
      <div class="account-orders-container">
        <h3 class="dividing mb-4">
          {{ $t("user-dash.orders.title") }}
        </h3>
        <div class="shop-cart-container">
          <div 
            v-if="orders.length === 0" 
            class="shop-empty-container">
            <div class="shop-empty-icon">
              <Icon value="fas fa-times-circle" />
            </div>
            <div class="shop-empty-title">
              <h3>{{ $t("user-dash.orders.empty") }}</h3>
            </div>
          </div>
          <div v-if="orders.length > 0">
            <div class="shop-cart-list list">
              <div class="list-head">
                <div>{{ $t("user-dash.orders.total-amount") }}</div>
                <div>{{ $t("user-dash.orders.payment-method") }}</div>
                <div>{{ $t("user-dash.orders.status") }}</div>
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
                    v-if="order.bill_url != null"
                    :title="$t('user-dash.orders.view-bill')"
                    class="bg-grey hover:bg-grey-dark text-white font-bold py-1 px-2 rounded button"
                    @click="viewBill(order)"
                  >
                    <i class="fas fa-file-alt"></i>
                  </a>
                  <a
                    :title="$t('user-dash.orders.view-details')"
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
      <client-only>            
        <modal 
          adaptive 
          class="modal" 
          height="auto" 
          name="orderView">
          <div class="p-4">
            <h3 class="mb-6 mt-3">
              {{ $t("user-dash.orders.details") }}  
              #{{ orderToView.id }}
            </h3>
            <ul class="mb-2">
              <li class="mb-1">
                {{ $t("user-dash.orders.subtotal") }}
                € {{ orderToView.sub_total_price }}
              </li>
              <li class="mb-1">
                {{ $t("user-dash.orders.shipping") }}
                € {{ orderToView.total_shipping_price }}
              </li>
              <li class="mb-1">
                {{ $t("user-dash.orders.total") }}
                € {{ orderToView.total_price }}
              </li>
              <li class="mb-1">
                {{ $t("user-dash.orders.payment-method-details") }}
                {{ orderToView.way }}
              </li>
              <li>
                {{ $t("user-dash.orders.external-id") }}
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
      </client-only>
    </div>
  </DashboardPage>
</template>

<script>
import DashboardPage from "~/components/DashboardPage";
import Icon from "~/components/Icon";

export default {
  middleware: "authenticated",
  components: {
    DashboardPage,
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
        getManyShopOrders(all: false) {
          id
          sub_total_price
          total_shipping_price
          total_price
          on_way_id
          way
          status
          bill_url
        }
      }`, {}, { withAuth: true });
    let data = res.data.data;
    let orders = data.getManyShopOrders.map(order => {
      console.log(order.status)
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
    },
    viewBill(order) {
      if (order.bill_url != null) {
        window.open(order.bill_url)
      }
    }
  }
};
</script>
