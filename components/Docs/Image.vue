<template>
  <div>
    <div
      :class="'docs-image-container ' + customClass"
      style="text-align: center">
      <img
        v-lazy="src"
        :id="'image-' + id"
        :alt="alt"
        @click="onClick"/>
    </div>

    <Modal
      :ref="'imageModal-' + id"
      width="large"
      class="show-image-modal"
      closing="primary">
      <div class="text-center">
        <img
          :src="src"
          :alt="alt">
      </div>
    </Modal>
  </div>
</template>

<script>
  import Modal from '~/components/Modal'
  export default {
    name: 'DocsImage',
    components: {
      Modal
    },
    props: {
      src: {
        default: '',
        type: String
      },
      alt: {
        default: '',
        type: String
      },
      margin: {
        default: '',
        type: String
      }
    },
    data: () => ({
      id: '',
      customClass: 'lel'
    }),
    created() {
      this.id = Math.ceil(Math.random() * 10000);
      if (this.margin != '') {
        this.customClass = 'w-full md:w-' + this.margin
      }
      if (!this.$isServer) {
        this.$Lazyload.$on('loaded', (image, formCache) => {
          if (this.src === image.src) {
            this.$emit('loaded')
          }
        })
      }
    },
    methods: {
      onClick() {
        this.$refs['imageModal-' + this.id].show()
        this.$emit('enter')
      },
      exitModal() {
        this.$refs['imageModal-' + this.id].hide()
        this.$emit('exit')
      }
    }
  }
</script>

<style lang="scss">
  .docs-image-container {
    text-align: center;
    margin: 0 auto;
  }

  .doc-image {
    .show-image-container {
      display: flex;
      justify-content: center;
      img {
        height: auto !important;
      }
    }
  }

  img[lazy='loaded'] {
    opacity: 0;
    animation-name: fadein;
    animation-duration: .5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-timing-function: ease-out;
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
