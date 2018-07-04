<template>
  <div>
    <div class="cover-title">
      <div class="cover-title-content container mx-auto">
        <h1>{{$t('contact-us')}}</h1>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="article">
        <div class="content contactus-container-container">
          <div v-if="$i18n.locale == 'en'">
            <div class="contactus-container">
              <div>
                <h2 class="dividing">By email</h2>
                <p>
                  By sending an email to: <a href="mailto:contact@retrobox.tech">contact@retrobox.tech</a>
                </p>
                <h2 class="dividing">By Discord</h2>
                <p>
                  By joining our discord guild with: <a href="https://discord.gg/TzNNQnP">this link</a>
                </p>

                <h2 class="dividing">By mail</h2>
                <p>
                  Thingmill<br />
                  1 chemin de badoire<br />
                  Heloup, 61250, France<br />
                </p>
                <h2 class="dividing">By a call</h2>
                <p>
                  +33 769997549
                </p>
              </div>
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.1831527803884!2d0.02048481564818878!3d48.39542577924495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e27535bafa57bb%3A0x7cd97fc8ad2efa55!2sThingmill!5e0!3m2!1sfr!2sfr!4v1530277084988" frameborder="0" style="border:0" allowfullscreen align="right"></iframe>
              </div>
            </div>
          </div>
          <!-- french version -->
          <div v-else>
            <div class="contactus-container">
              <div>
                <h2 class="dividing">Par email</h2>
                <p>
                  En nous envoyant un email à: <a href="mailto:contact@retrobox.tech">contact@retrobox.tech</a>
                </p>
                <h2 class="dividing">Par Discord</h2>
                <p>
                  En rejoignant notre serveur discord par : <a href="https://discord.gg/TzNNQnP">ce lien</a>
                </p>

                <h2 class="dividing">Avec Laposte</h2>
                <p>
                  Thingmill<br />
                  1 chemin de badoire<br />
                  Heloup, 61250, France<br />
                </p>
                <h2 class="dividing">Par téléphone</h2>
                <p>
                  +33 769997549
                </p>
              </div>
              <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.1831527803884!2d0.02048481564818878!3d48.39542577924495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e27535bafa57bb%3A0x7cd97fc8ad2efa55!2sThingmill!5e0!3m2!1sfr!2sfr!4v1530277084988" frameborder="0" style="border:0" allowfullscreen align="right"></iframe>
              </div>
            </div>
            </div>

          </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  created () {
    this.$store.commit('SET_TITLE', {context: this, key:'contact-us'})
    this.$store.commit('SET_LOCATION', {
        root: this.$t('home'),
        sub_root: this.$t('contact-us')
    })
  }
}
</script>

<style lang="scss" scoped>
.contactus-container-container {
  width: 100%;
}
.contactus-container {
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 1em;
  width: 100%;
  .map {
    width: 100%;
    iframe {
      width: 100%;
      height: 30em;
    }
    margin-top: 2em;
  }
}

@media (max-width: 700px) {
  .contactus-container {
    display: block;
  }
}

</style>
