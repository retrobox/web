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
            <div class="shop-orders-mosaic">
              <div
                v-for="order in orders"
                :key="order.id"
                class="shop-order-card">
                <div class="shop-order-card-image-mosaic">
                  <div
                    v-for="image in order.images"
                    :style="image.style"
                    :key="image.id"
                    class="shop-order-card-image">
                  </div>
                  <!-- 'background-image: url(\'' + image.url + ''\'); width: ' + image.width + 'em' -->
                </div>
                <div class="shop-order-card-content">
                  <div class="shop-order-card-description">
                    <h4 class="shop-order-card-id">
                      {{ $t("user-dash.orders.order", { id: order.id.toUpperCase() }) }}
                    </h4>
                    <div class="shop-order-card-fields">
                      <div class="shop-order-card-field">
                        <div class="shop-order-card-field-icon">
                          <Icon value="fas fa-truck" />
                        </div>
                        <div class="shop-order-card-field-content">
                          {{ order.status }}
                        </div>
                      </div>
                      <div
                        :title="order.created_at"
                        class="shop-order-card-field">
                        <div class="shop-order-card-field-icon">
                          <Icon value="fas fa-clock" />
                        </div>
                        <div class="shop-order-card-field-content">
                          {{ $t('user-dash.orders.at', {date: order.created_at_from_now}) }}
                        </div>
                      </div>
                      <div class="shop-order-card-field">
                        <div class="shop-order-card-field-icon">
                          <Icon value="fas fa-euro-sign" />
                        </div>
                        <div class="shop-order-card-field-content">
                          {{ $t('user-dash.orders.total', {total: order.total_price}) }}
                        </div>
                      </div>
                      <div class="shop-order-card-field">
                        <div class="shop-order-card-field-icon">
                          <Icon value="fab fa-cc-paypal" />
                        </div>
                        <div class="shop-order-card-field-content">
                          {{ $t('user-dash.orders.way', {method: order.way}) }}
                        </div>
                      </div>
                      <div class="shop-order-card-field">
                        <div class="shop-order-card-field-icon">
                          <Icon value="fas fa-shopping-cart" />
                        </div>
                        <div class="shop-order-card-field-content">
                          <span v-if="order.items.length === 1">
                            {{ $t('user-dash.orders.item') }}
                          </span>
                          <span v-if="order.items.length > 1">
                            {{ $t('user-dash.orders.items', {items: order.items.length}) }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="shop-order-card-actions">
                    <button
                      class="shop-order-card-button shop-order-card-list"
                      @click="viewOrder(order)">
                      <Icon value="fas fa-list" />
                      {{ $t('user-dash.orders.details') }}
                    </button>
                    <button
                      v-if="order.bill_url !== null"
                      class="shop-order-card-button shop-order-card-bill"
                      @click="viewBill(order)">
                      <Icon value="fas fa-file-invoice" />
                      {{ $t('user-dash.orders.bill') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        ref="orderViewModal"
        primary-closing>
        <h4 class="mb-3 mt-3">
          {{ $t("user-dash.orders.details-title", {id: orderToView.id.toUpperCase()}) }}
        </h4>
        <div class="shop-order-item-card-mosaic">
          <div
            v-for="item in orderToView.items"
            :key="item.id"
            class="shop-order-item-card">
            <div
              :style="item.style"
              class="shop-order-item-card-image">
            </div>
            <div class="shop-order-item-card-content">
              <div class="shop-order-item-card-title">
                <h3>{{ item.title }}</h3>
              </div>
              <div class="shop-order-item-card-description">
                {{ item.description_short }} <br>
                <ul style="margin-top: .5em">
                  <li>{{ $t("user-dash.orders.detail.version") }} : {{ item.version }}</li>
                  <span v-if="item.pivot.shop_item_custom_option_storage !== null">
                    <li>{{ $t("user-dash.orders.detail.size") }} : {{ item.pivot.shop_item_custom_option_storage }} Gb</li>
                  </span>
                  <span v-if="item.pivot.shop_item_custom_option_color !== null">
                    <li :style="'color: ' + item.pivot.shop_item_custom_option_color">{{ $t("user-dash.orders.detail.color") }} : {{ item.pivot.shop_item_custom_option_color }}</li>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </DashboardPage>
</template>

<script>
import DashboardPage from "~/components/DashboardPage"
import Icon from "~/components/Icon"
import Modal from "~/components/Modal"
import moment from 'moment'

export default {
  middleware: "authenticated",
  components: {
    DashboardPage,
    Icon,
    Modal
  },
  head() {
    return {
      title: "Your orders"
    };
  },
  data() {
    return {
      orders: [],
      orderToView: {
        id: ''
      }
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
          created_at
          items {
            id
            title
            description_short
            image
            price,
            version,
            pivot {
              shop_item_custom_option_storage
              shop_item_custom_option_color
            }
          }
        }
      }`, {}, { withAuth: true });
    let data = res.data.data;
    let orders = data.getManyShopOrders.map(order => {
      order.status =
        order.status === 'payed' ?
          context.app.i18n.t('user-dash.orders.status.processing') :
        order.status === 'shipped' ?
          context.app.i18n.t('user-dash.orders.status.being-shipped') :
          context.app.i18n.t('user-dash.orders.status.cancel');
      order.raw_way = order.way
      order.way =
        order.way.substr(0, 1).toUpperCase() +
        order.way.substr(1).toLowerCase();

      let imagesToShow = order.items.slice(0, 4)
      let widths = []
      switch (imagesToShow.length) {
        case 1:
          widths = [10]
          break;
        case 2:
          widths = [5, 5]
          break;
        case 3:
          widths = [5, 5, 10]
          break;
        case 4:
          widths = [5, 5, 5, 5]
          break;
      }
      moment.locale(context.app.i18n.locale)
      order.created_at_from_now = moment(order.created_at).fromNow()
      order.images = imagesToShow.map(item => {
        return {
          id: item.id,
          style: `background-image: url('${item.image}'); width: ${widths[imagesToShow.indexOf(item)]}em`
        }
      })
      order.items = order.items.map(item => {
        item.style = `background-image: url('${item.image}')`
        return item
      })

      return order;
    });
    return {
      orders
    };
  },
  methods: {
    viewOrder(order) {
      this.orderToView = order
      this.$refs.orderViewModal.show()
    },
    viewBill(order) {
      if (order.bill_url != null) {
        window.open(order.bill_url)
      }
    }
  }
};
</script>
