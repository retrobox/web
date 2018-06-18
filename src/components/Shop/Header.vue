<template>
    <div class="shop-header-container">
        <div class="shop-header-cart">
            <span class="shop-header-cart-amount">{{ $tc('shop.cart.items', 88, { count: 80 }) }}</span>
            <a @click=""
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