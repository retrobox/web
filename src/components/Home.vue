<template>
  <div>
    <div class="landing-main-back"></div>
      <div class="landing-main">
        <div class="landing-main-content">
          <h1 class="landing-main-title">{{$t('landing.title')}}</h1>
          <p class="landing-main-subtitle">{{$t('landing.sub_title')}}</p>
          <div class="landing-main-actions">
            <a href="#go" class="button bg-transparent hover:bg-blue text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
              {{$t('landing.go')}}
            </a>
            <a href="#" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full button">
              <icon name="shopping-cart" class="icon"></icon> {{$t('buy')}}
            </a>
          </div>
        </div>
      </div>

      <section class="landing-section landing-about" id="go">
        <div class="landing-about-content">
          <div class="landing-about-text">
            <h2 class="landing-about-title">La console retro, facile</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="landing-about-pic">
            <img src="https://files.lefuturiste.fr/direct/2CC39D20F1F2EC8A4CDA.png">
          </div>
        </div>
      </section>

      <section class="landing-section landing-advantages">
        <div class="landing-advantages-content">
          <h2 class="landing-advantages-title">
            Plein d'advantages...
          </h2>
          <div class="landing-columns">
            <div class="landing-column">
              <div class="landing-column-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Une bibliothèque exeptionnelle</div>
                  <p class="text-grey-darker text-base">
                    Plus de 25,000 jeux en libre accès disponible gratuitement, découvrez plus de 25,000 jeux installable en quelques cliques grâce à notre bibliothèque
                  </p>
                </div>
              </div>
            </div>
            <div class="landing-column">
              <div class="landing-column-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Une console sans prise de tête</div>
                  <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div class="landing-column">
              <div class="landing-column-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Un console connecté</div>
                  <p class="text-grey-darker text-base">
                    Une console connectée, visionnez l’état de votre console à distance et contrôlez la dans les moindres détails (même depuis votre smartphone)
                  </p>
                </div>
              </div>
            </div>
            <div class="landing-column">
              <div class="landing-column-icon">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Flexible</div>
                  <p class="text-grey-darker text-base">
                    Un maximum de possibilité, poussez plus loin le principe de la console portable, branchez la à votre TV et jouez sans problème dans votre canapé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="landing-section landing-video">
        <div class="landing-video-content container mx-auto">
          <iframe class="landing-video-video" src="https://www.youtube.com/embed/9ZfN87gSjvI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </section>

      <section class="landing-section landing-startnow">
        <div class="landing-startnow-content container mx-auto">
          <h2 class="landing-startnow-title">Commence dès maintenant</h2>
          <div class="landing-columns">
            <div class="landing-column type-kited">
              <div class="landing-column-icon">
                <i class="fas fa-wrench"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Version kité</div>
                  <p class="text-grey-darker text-base">
                    Tu aime l'électronique, monte ta propre console grâce à cette version et personalise là !
                  </p>
                </div>

                <div class="px-6 py-4 landing-column-footer">
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 60,00</span>

                  <a href="#" class="button bg-transparent hover:bg-blue text-blue font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded-full">
                    <icon name="shopping-cart" class="icon"></icon>Acheter
                  </a>
                </div>
              </div>
            </div>
            <div class="landing-column type-already">
              <div class="landing-column-icon">
                <i class="fas fa-box-open"></i>
              </div>
              <div class="landing-column-content max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 title">Version préfaite</div>
                  <p class="text-grey-darker text-base">
                    Commence l'aventure directement !
                  </p>
                </div>
                <div class="px-6 py-4 landing-column-footer">
                  <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">EUR 60,00</span>

                  <a href="#" class="button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">
                    <icon name="shopping-cart" class="icon"></icon> Acheter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
