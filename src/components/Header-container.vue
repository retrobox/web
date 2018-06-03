<template>
    <div class="header-container">
        <div class="header-top">
            <div class="container mx-auto header-top-content">
                <a href="#">
                    <icon name="sign-in-alt" class="icon"></icon>
                    {{$t('login')}}
                </a>
                <a href="#">
                    <icon name="pencil-alt" class="icon"></icon>
                    {{$t('register')}}
                </a>
            </div>
        </div>
        <div class="colored-divider-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="header-background">
            <div class="container mx-auto header-content">
                <div class="header-title-container">
                    <a @click="$router.push({name: 'Home'})">
                        <img src="../assets/img/nav.png" class="header-title-logo">
                    </a>
                </div>
                <nav class="header-nav-container">
                    <div class="nav-item with-link">
                        <a href="#">{{$t('home')}}</a>
                    </div>
                    <div class="nav-item with-link">
                        <a href="">{{$t('docs')}}</a>
                    </div>
                    <div class="nav-item with-link">
                        <a href="">{{$t('community')}}</a>
                    </div>
                    <div class="nav-item with-button">
                        <a href="#"
                           class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
                            <icon name="shopping-cart" class="icon"></icon>
                            {{$t('buy')}}
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="header-breadcrum">
            <div class="container mx-auto">

                <div class="breadcrum-location">
                    Vous êtes ici :
                    <ul>
                        <li class="item">Home</li>
                        <li class="divider">></li>
                        <li class="item">My page</li>
                    </ul>
                </div>
                <div class="breadcrum-socials">
                    <socials/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Socials from "./Socials.vue"
    export default {
        name: 'Header-container',
        components: {
            "socials": Socials
        },
        data() {
            return {}
        }
    }
</script>