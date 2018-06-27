<template>
    <div class="shop-header-container">
        <div class="shop-header-cart">
            <span class="shop-header-cart-amount">{{ $tc('shop.cart.items', $store.state.cart.length, { count: $store.state.cart.length }) }}</span>
            <a @click="$router.push({name: 'ShopCart'})"
               class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
                <icon name="shopping-cart" class="icon"></icon>
                {{$t('shop.cart.title')}}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShopHeader',
        data() {
            return {}
        }
    }
</script>
