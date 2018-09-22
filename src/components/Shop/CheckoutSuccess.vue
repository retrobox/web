<template>
    <div>
        <div class="cover-title">
            <div class="cover-title-content container mx-auto">
                <h1>{{$t('shop.checkout.success.thanks')}}</h1>
            </div>
        </div>
        <div class="shop-checkout-container container mx-auto">
            <div class="shop-checkout-thanks">
                <a @click="$router.push({name:'Home'})"
                   class="shop-checkout-thanks-button bg-blue hover:bg-blue-light text-white font-bold py-4 px-8 rounded inline-flex items-center button">
                    <icon name="home" class="icon"></icon>
                    {{$t('home')}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            //EMPTY THE SHOP CARD
            this.$store.commit('CART_EMPTY');

            this.$store.commit('ADD_ALERT', {
                type: 'success',
                title: this.$t('shop.checkout.success.title'),
                description: this.$t('shop.checkout.success.description')
            });
            this.$store.commit('SET_LOCATION', {
                root: this.$t('shop.title'),
                sub_root: this.$t('shop.checkout.success.thanks')
            });
            this.$store.commit('SET_TITLE', this.$t('shop.checkout.success.thanks'))
        }
    }
</script>
