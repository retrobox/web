<template>
  <div class="downloads">
    <div class="downloads-content container mx-auto">
      <div class="downloads-title-container">
        <div>
          <h2 class="downloads-title">
            {{ $t('downloads.page.title') }}
          </h2>
        </div>
      </div>
      <div class="downloads-container">
        <div class="downloads-description">
          {{ $t('downloads.page.description') }}
        </div>

        <div class="os-desktop">
          <button
            class="os-desktop-item win"
            @click="download('win')">
            <i class="icon fab fa-windows"></i>
            <div class="text">{{ $t('downloads.page.os-text.win') }}</div>
          </button>
          <button
            class="os-desktop-item mac"
            @click="download('mac')">
            <i class="icon fab fa-apple"></i>
            <div class="text">{{ $t('downloads.page.os-text.mac') }}</div>
          </button>
          <button
            class="os-desktop-item lin"
            @click="download('app_image')">
            <i class="icon fab fa-linux"></i>
            <div class="text">{{ $t('downloads.page.os-text.lin') }}</div>
          </button>
        </div>

        <div>
          <div class="os-mobile">
            <div class="os-mobile-item android disabled"><i class="fab fa-android icon"></i></div>
            <div class="os-mobile-item apple disabled"><i class="fab fa-apple icon"></i></div>
          </div>

          <div class="coming-soon"><h2>{{ $t('downloads.page.os-text.coming-soon') }}</h2></div>
        </div>
      </div>
    </div>
    <Modal
      ref="downloadModal"
      class="download-modal"
      closing="primary">
      <div class="download-modal-content">
        <h2 class="download-modal-title">
          {{ $t('downloads.modal.title') }}
        </h2>
        <div class="download-modal-icon">
          <i
            id="download-icon"
            class="icon fas fa-download"></i>
        </div>
        <p class="download-modal-description">
          {{ $t('downloads.modal.description') }}
        </p>
        <button
          class="inline-flex items-center button button-primary"
          @click="launchDownload()">
          {{ $t('downloads.modal.download') }}
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import Modal from "~/components/Modal"
  import {generateMetas} from "../headHelper"
  export default {
    components: {
      Modal
    },
    head() {
      return generateMetas(this, {
        title: this.$t('downloads.page.title'),
        description: this.$t('downloads.page.description')
      })
    },
    data: () => ({
      tag: '',
      versions: [],
      toDownload: ''
    }),
    async asyncData(context) {
      let data = (await context.app.apitator.get(`/downloads`)).data.data
      return {
        tag: data.version,
        versions: data.versions
      }
    },
    methods: {
      download (version) {
        this.toDownload = this.versions[version]
        this.$refs.downloadModal.show()
        setTimeout(() => {
          this.launchDownload()
          this.animateIcon()
        }, 400)
      },
      animateIcon () {
        let element = document.getElementById('download-icon')
        if (element != null) {
          element.classList.add('animated', 'bounce')
          element.addEventListener('animationend', () => {
            element.classList.remove('animated', 'bounce')
          })
        }
        setTimeout(this.animateIcon, 1800)
      },
      launchDownload () {
        window.location.href = this.toDownload.url;
      }
    }
  }
</script>
