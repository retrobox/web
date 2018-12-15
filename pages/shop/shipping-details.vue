<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{ $t('shop.shipping_details.title') }}</h1>
      </div>
    </div>
    <div class="shop-checkout-container container mx-auto">
      <ShopHeader/>
      <div class="mt-4">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <!-- First name and last name -->
          <div class="flex flex-wrap mb-4">
            <div class="w-full mb-4 md:w-1/2 md:pr-2 md:mb-0">
              <label
                for="first_name"
                class="block text-grey-darker text-sm font-bold mb-2">
                {{ $t('shop.shipping_details.form.first_name') }}
              </label>
              <input
                id="first_name"
                v-model="user.first_name"
                :placeholder="$t('shop.shipping_details.form.first_name_placeholder')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text">
            </div>
            <div class="w-full md:w-1/2 md:pl-2">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="last_name">
                {{ $t('shop.shipping_details.form.last_name') }}
              </label>
              <input
                id="last_name"
                v-model="user.last_name"
                :placeholder="$t('shop.shipping_details.form.last_name_placeholder')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text">
            </div>
          </div>
          <!-- address_first_line -->
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="address_first_line">
              {{ $t('shop.shipping_details.form.address_first_line') }}
            </label>
            <input
              id="address_first_line"
              v-model="user.address_first_line"
              :placeholder="$t('shop.shipping_details.form.address_first_line_placeholder')"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <!-- address_second_line -->
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="address_second_line">
              {{ $t('shop.shipping_details.form.address_second_line') }}
            </label>
            <input
              id="address_second_line"
              v-model="user.address_second_line"
              :placeholder="$t('shop.shipping_details.form.address_second_line_placeholder')"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight  focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <!-- Postal code and city -->
          <div class="flex flex-wrap mb-4">
            <div class="w-full mb-4 md:w-1/4 md:pr-2 md:mb-0">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="address_postal_code">
                {{ $t('shop.shipping_details.form.address_postal_code') }}
              </label>
              <input
                id="address_postal_code"
                v-model="user.address_postal_code"
                :placeholder="$t('shop.shipping_details.form.address_postal_code_placeholder')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text">
            </div>
            <div class="w-full md:w-3/4 md:pl-2">
              <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="address_city">
                {{ $t('shop.shipping_details.form.address_city') }}
              </label>
              <input
                id="address_city"
                v-model="user.address_city"
                :placeholder="$t('shop.shipping_details.form.address_city_placeholder')"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                type="text">
            </div>
          </div>
          <!-- country -->
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="address_country">
              {{ $t('shop.shipping_details.form.address_country') }}
            </label>
            <input
              id="address_country"
              v-model="user.address_country"
              :placeholder="$t('shop.shipping_details.form.address_country_placeholder')"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight  focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <div class="flex items-center justify-between">
            <button
              class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              type="button"
              @click="$router.push('/shop/cart')">
              {{ $t('shop.shipping_details.previous') }}
            </button>
            <button
              class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              @click="saveDetails">
              {{ $t('shop.shipping_details.next') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ShopHeader from "../../components/ShopHeader"

  // const jwtDecode = require('jwt-decode');

  export default {
    name: 'ShippingDetails',
    components: {ShopHeader},
    data() {
      return {
        user: {
          first_name: "",
          last_name: "",
          address_first_line: "",
          address_second_line: "",
          address_city: "",
          address_postal_code: "",
          address_country: ""
        },
        user_id: ""
      }
    },
    watch: {},
    created() {
      // this.fetchDetails()
    },
    methods: {
      fetchDetails: function () {
        let token = this.$cookie.get('user_token');
        this.user_id = jwtDecode(token).user.id;
        this.$apitator.query(
          `query ($id: String!){
            getOneUser(id: $id) {
              id,
              last_username,
              first_name,
              last_name,
              address_first_line,
              address_second_line,
              address_postal_code,
              address_city,
              address_country
            }
           }`,
          {id: this.user_id}
        ).then((response) => {
          this.user = response.data.data.getOneUser
        })
      },
      saveDetails: function () {
        if (
          this.user.first_name !== ""
          && this.user.first_name !== null
          && this.user.last_name !== ""
          && this.user.last_name !== null
          && this.user.address_first_line !== ""
          && this.user.address_first_line !== null
          && this.user.address_city !== ""
          && this.user.address_city !== null
          && this.user.address_postal_code !== ""
          && this.user.address_postal_code !== null
          && this.user.address_country !== ""
          && this.user.address_country !== null
        ) {
          // save and follow the steps
          this.$apitator.graphQL(
            `mutation ($user: UserUpdateInput) {
              updateUser(user: $user)
            }`, {
              user: {
                id: this.user_id,
                first_name: this.user.first_name,
                last_name: this.user.last_name,
                address_first_line: this.user.address_first_line,
                address_second_line: this.user.address_second_line,
                address_city: this.user.address_city,
                address_postal_code: this.user.address_postal_code,
                address_country: this.user.address_country
              }
            }).then(() => {
            //choose pay way
            this.$router.push({name: 'ShopCheckout'})
          })
        } else {
          this.$store.commit('ADD_ALERT', {
            type: 'error',
            title: this.$t('shop.shipping_details.form.error.title'),
            description: this.$t('shop.shipping_details.form.error.description')
          })
        }
      }
    }
  }
</script>
