<template>
    <fade-transition group>
        <div v-if="$store.state.loading" key="$store.state.loading">
            <div class="loading">
                <icon name="sync" spin scale="3"></icon>
            </div>
        </div>
        <div v-if="$store.state.loading === false" key="$store.state.loading">
            <div class="cover-title">
                <div class="cover-title-content container mx-auto">
                    <h1>{{$t('shop.shipping_details.title')}}</h1>
                </div>
            </div>
            <div class="shop-checkout-container container mx-auto">
                <shop-header></shop-header>
                <div class="mt-4">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <!-- First name and last name -->
                        <div class="flex flex-wrap mb-4">
                            <div class="w-full mb-4 md:w-1/2 md:pr-2 md:mb-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="first_name">
                                    {{$t('shop.shipping_details.form.first_name')}}
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                       id="first_name"
                                       type="text"
                                       v-model="user.first_name"
                                       :placeholder="$t('shop.shipping_details.form.first_name_placeholder')">
                            </div>
                            <div class="w-full md:w-1/2 md:pl-2">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="last_name">
                                    {{$t('shop.shipping_details.form.last_name')}}
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                       id="last_name"
                                       type="text"
                                       v-model="user.last_name"
                                       :placeholder="$t('shop.shipping_details.form.last_name_placeholder')">
                            </div>
                        </div>
                        <!-- address_first_line -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="address_first_line">
                                {{$t('shop.shipping_details.form.address_first_line')}}
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                   id="address_first_line"
                                   type="text"
                                   v-model="user.address_first_line"
                                   :placeholder="$t('shop.shipping_details.form.address_first_line_placeholder')">
                        </div>
                        <!-- address_second_line -->
                        <div class="mb-4">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="address_second_line">
                                {{$t('shop.shipping_details.form.address_second_line')}}
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight  focus:outline-none focus:shadow-outline"
                                   id="address_second_line"
                                   type="text"
                                   v-model="user.address_second_line"
                                   :placeholder="$t('shop.shipping_details.form.address_second_line_placeholder')">
                        </div>
                        <!-- Postal code and city -->
                        <div class="flex flex-wrap mb-4">
                            <div class="w-full mb-4 md:w-1/4 md:pr-2 md:mb-0">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="address_postal_code">
                                    {{$t('shop.shipping_details.form.address_postal_code')}}
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                       id="address_postal_code"
                                       type="text"
                                       v-model="user.address_postal_code"
                                       :placeholder="$t('shop.shipping_details.form.address_postal_code_placeholder')">
                            </div>
                            <div class="w-full md:w-3/4 md:pl-2">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="address_city">
                                    {{$t('shop.shipping_details.form.address_city')}}
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                       id="address_city"
                                       v-model="user.address_city"
                                       type="text"
                                       :placeholder="$t('shop.shipping_details.form.address_city_placeholder')">
                            </div>
                        </div>
                        <!-- country -->
                        <div class="mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="address_country">
                                {{$t('shop.shipping_details.form.address_country')}}
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight  focus:outline-none focus:shadow-outline"
                                   id="address_country"
                                   type="text"
                                   v-model="user.address_country"
                                   :placeholder="$t('shop.shipping_details.form.address_country_placeholder')">
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                                    type="button"
                                    @click="$router.push({name: 'ShopCart'})">
                                {{$t('shop.shipping_details.previous')}}
                            </button>
                            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    @click="saveDetails">
                                {{$t('shop.shipping_details.next')}}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </fade-transition>
</template>

<script>
    import Header from "./Header.vue"

    const jwtDecode = require('jwt-decode');

    export default {
        name: 'ShippingDetails',
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
        components: {
            "shop-header": Header
        },
        methods: {
            fetchDetails: function () {
                let token = this.$cookie.get('user_token');
                this.user_id = jwtDecode(token).user.id;
                this.$apitator.query(this, {
                    body: {
                        query: `query ($id: String!){
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
                        variables: {
                            id: this.user_id
                        }
                    }
                }).then((response) => {
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
                    this.$apitator.query(this, {
                        body: {
                            query: `mutation ($user: UserUpdateInput) {
                                updateUser(user: $user)
                            }`,
                            variables: {
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
                            }
                        }
                    }).then((response) => {
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
        },
        created() {
            this.$store.commit('SET_LOCATION', {
                root: this.$t('shop.title'),
                sub_root: this.$t('shop.shipping_details.title')
            });
            this.$store.commit('SET_TITLE', this.$t('shop.shipping_details.title'));
            this.fetchDetails()
        }
    }
</script>
