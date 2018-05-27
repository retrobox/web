<template>
<div id="app">

  <fade-transition v-show="show">
    <div>
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
                    <img src="./assets/img/nav.png" class="header-title-logo">
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
                <a href="#" class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded button">
                  <icon name="shopping-cart" class="icon"></icon> {{$t('buy')}}
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
              <ul>                
                  <li>
                    <a href="#" :title="$t('facebook')">
                      <i class="fab fa-facebook-square icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" :title="$t('twitter')">
                      <i class="fab fa-twitter-square icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" :title="$t('github')">
                      <i class="fab fa-github icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" :title="$t('discord')">
                      <i class="fab fa-discord icon"></i>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <scale-transition>
          <router-view />
        </scale-transition>
        <section class="landing-section landing-bottom"></section>
      </div>
      <div class="footer-container">
        <div class="colored-divider-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="flex footer-content container mx-auto">
          <div class="w-1/3">
            <div class="footer-logo">
              <img src="./assets/img/footer.png">
            </div>
          </div>
          <div class="w-1/3">
            <div class="footer-links">
              <ul>
                <li>
                  <a href="#">{{$t('about')}}</a>
                </li>

                <li>
                  <a href="#">{{$t('blog')}}</a>
                </li>

                <li>
                  <a href="#">{{$t('terms-of-use')}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-1/3">
            <div class="footer-links">
              <ul>
                <li>
                  <a href="#">{{$t('get-help')}}</a>
                </li>

                <li>
                  <a href="#">{{$t('status')}}</a>
                </li>

                <li>
                  <a href="#">{{$t('developers')}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-content-bottom">
          <div class="container mx-auto">

            <div class="footer-inline-links">
              <ul>
                <li class="copyright"><a href="#">© Copyright 2018 Thingmill</a></li>
                <li><a @click="$router.push({name: 'Legals'})">{{$t('legals')}}</a></li>
              </ul>
            </div>
            <div class="footer-socials">
              <ul>
                <li>
                  <a href="#" :title="$t('facebook')">
                    <i class="fab fa-facebook-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" :title="$t('twitter')">
                    <i class="fab fa-twitter-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" :title="$t('github')">
                    <i class="fab fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#" :title="$t('discord')">
                    <i class="fab fa-discord icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fade-transition>

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
  created() {
    setTimeout(() => {
      this.show = true
    }, 400)
  }
}
</script>

<style lang="scss" src="./assets/styles/app.scss"></style>
