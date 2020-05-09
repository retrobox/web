<template>
  <div class="shipping-form">
    <form 
      ref="form"
      :class="isLoading ? 'opacity-50' : ''"
      :disabled="isLoading">
      <div>
        <!-- First name and last name -->
        <div class="flex flex-wrap mb-4">
          <div class="w-full mb-4 md:w-1/2 md:pr-2 md:mb-0">
            <label
              for="first_name"
              class="label"
            >
              {{ $t("shop.shipping_details.form.first_name") }}
            </label>
            <input
              id="first_name"
              v-model="user.first_name"
              :placeholder="
                $t('shop.shipping_details.form.first_name_placeholder')
              "
              :disabled="isLoading"
              required
              autofocus
              class="text-field"
              type="text"
            />
          </div>
          <div class="w-full md:w-1/2 md:pl-2">
            <label
              class="label"
              for="last_name"
            >
              {{ $t("shop.shipping_details.form.last_name") }}
            </label>
            <input
              id="last_name"
              v-model="user.last_name"
              :placeholder="
                $t('shop.shipping_details.form.last_name_placeholder')
              "
              :disabled="isLoading"
              required
              class="text-field"
              type="text"
            />
          </div>
        </div>
        <!-- address_first_line -->
        <div class="mb-4">
          <label
            class="label"
            for="address_first_line"
          >
            {{ $t("shop.shipping_details.form.address_first_line") }}
          </label>
          <input
            id="address_first_line"
            v-model="user.address_first_line"
            :placeholder="
              $t('shop.shipping_details.form.address_first_line_placeholder')
            "
            :disabled="isLoading"
            required
            class="text-field"
            type="text"
          />
        </div>
        <!-- address_second_line -->
        <div class="mb-4">
          <label
            class="label"
            for="address_second_line"
          >
            {{ $t("shop.shipping_details.form.address_second_line") }}
          </label>
          <input
            id="address_second_line"
            v-model="user.address_second_line"
            :placeholder="
              $t('shop.shipping_details.form.address_second_line_placeholder')
            "
            :disabled="isLoading"
            class="text-field"
            type="text"
          />
        </div>
        <!-- Postal code and city -->
        <div class="flex flex-wrap mb-4">
          <div class="w-full mb-4 md:w-1/4 md:pr-2 md:mb-0">
            <label
              class="label"
              for="address_postal_code"
            >
              {{ $t("shop.shipping_details.form.address_postal_code") }}
            </label>
            <input
              id="address_postal_code"
              v-model="user.address_postal_code"
              :placeholder="
                $t('shop.shipping_details.form.address_postal_code_placeholder')
              "
              :disabled="isLoading"
              required
              class=" text-field"
              type="number"
              @input="postalCodeChanged"
            />
          </div>
          <div class="w-full md:w-3/4 md:pl-2">
            <label
              class="label"
              for="address_city"
            >
              {{ $t("shop.shipping_details.form.address_city") }}
            </label>
            <input
              id="address_city"
              v-model="user.address_city"
              :placeholder="
                $t('shop.shipping_details.form.address_city_placeholder')
              "
              :disabled="isLoading"
              required
              class="text-field"
              type="text"
            />
          </div>
        </div>
        <!-- country -->
        <div>
          <label
            class="label"
            for="address_country"
          >
            {{ $t("shop.shipping_details.form.address_country") }}
          </label>

          <div class="relative w-full">
            <select
              id="address_country"
              :disabled="isLoading"
              v-model="user.address_country"
              class="selection">
              <option
                :disabled="isLoading"
                value="" >
                Choose your country
              </option>
              <option
                v-for="country in countries"
                :key="country.code"
                :value="country.code">
                {{ country.name }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute flex items-center px-2 text-gray-700"
              style="top: 0!important;bottom: 0!important;right: 0!important;pointer-events: none!important;">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div
      v-if="isLoading"
      ref="overlay"
      class="loading-overlay">
      <div class="loading mb-3">
        <Icon
          value="fas fa-sync"
          spin />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icon'
import lodash from 'lodash'

export default {
  name: "ShippingDetailsForm",
  components: {
    Icon
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        address_first_line: "",
        address_second_line: "",
        address_city: "",
        address_postal_code: "",
        address_country: ''
      },
      countries: [],
      isLoading: true,
      watchInputs: false
    };
  },
  watch: {
    'user.address_country' () { this.onDetailsChanged() }
  },
  mounted() {
    if (!this.$isServer) {
      this.fetchData()
    }
  },
  methods: {
    showOverlay: function() {
      this.isLoading = true
      let offset = this.$refs.form.clientHeight
      this.$refs.overlay.style =
        'height: ' + offset + 'px; margin-top: -' + offset + 'px'
    },
    fetchData: function() {
      this.showOverlay()
      this.$apitator
        .graphQL(
          `query ($id: String!, $locale: String!){
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
            getCountries(locale: $locale) {
              code,
              name
            }
        }`,
          { id: this.$store.state.user.id, locale: this.$i18n.locale },
          { withAuth: true }
        )
        .then(response => {
          this.user = response.data.data.getOneUser;
          if (this.user.address_country === null || this.user.address_country.length === 0) {
            if (this.countries.filter(c => c.code === this.$i18n.locale.toUpperCase()).length === 1) {
              this.user.address_country = this.$i18n.locale.toUpperCase()
            } else {
              this.user.address_country = ''
            }
          }
          this.countries = response.data.data.getCountries
          this.isLoading = false
          this.$emit('fetched', {
            country: this.user.address_country,
            postalCode: this.user.address_postal_code
          })
          setTimeout(() => {
            this.watchInputs = true
          }, 100)
        })
    },
    save: function() {
      this.saving = true
      if (
        this.user.first_name !== "" &&
        this.user.first_name !== null &&
        this.user.last_name !== "" &&
        this.user.last_name !== null &&
        this.user.address_first_line !== "" &&
        this.user.address_first_line !== null &&
        this.user.address_city !== "" &&
        this.user.address_city !== null &&
        this.user.address_postal_code !== "" &&
        this.user.address_postal_code !== null &&
        this.user.address_country !== "" &&
        this.user.address_country !== null
      ) {
        // save and follow the steps
        this.$apitator
          .graphQL(
            `mutation ($user: UserUpdateInput) {
                updateUser(user: $user)
            }`,
            {
              user: {
                id: this.$store.state.user.id,
                first_name: this.user.first_name,
                last_name: this.user.last_name,
                address_first_line: this.user.address_first_line,
                address_second_line: this.user.address_second_line,
                address_city: this.user.address_city,
                address_postal_code: this.user.address_postal_code,
                address_country: this.user.address_country
              }
            },
            { withAuth: true }
          )
          .then(() => {
            this.$emit('saved')
          });
      } else {
        this.$emit('invalid')
        this.$store.commit("ADD_ALERT", {
          type: "error",
          title: this.$t("shop.shipping_details.form.error.title"),
          description: this.$t("shop.shipping_details.form.error.description")
        });
      }
    },
    getDetails: function() {
      return this.user
    },
    postalCodeChanged: function() {
      if (this.watchInputs) {
        this.debouncePostalCode()
      }
    },
    debouncePostalCode: lodash.debounce(function () {
      this.onDetailsChanged()
    }, 1500),
    onDetailsChanged: function() {
      if (this.watchInputs) {
        this.$emit('detailsChanged', {
          country: this.user.address_country,
          postalCode: this.user.address_postal_code
        })
      }
    }
  }
};
</script>
