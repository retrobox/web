<template>
  <div>
    <div style="text-align: center">
      <img
        v-lazy="src"
        :id="'image-' + id"
        :alt="alt"
        @click="onClick"/>
    </div>

    <no-ssr>
      <modal
        :name="'imageModal' + id"
        :width="'920px'"
        height="auto"
        adaptive
        class="modal show-image-modal">
        <div style="text-align: center;">
          <img
            :src="src"
            :alt="alt">
        </div>
        <div
          class="button bg-grey-lighter hover:bg-grey-light text-gray-darker font-bold py-3 px-5 cancel-button"
          @click="$modal.hide('imageModal' + id)">
          {{ $t('close') }}
        </div>
      </modal>
    </no-ssr>
  </div>
</template>

<script>
  export default {
    name: 'DocsImage',
    props: {
      src: {
        default: '',
        type: String
      },
      alt: {
        default: '',
        type: String
      }
    },
    data: () => ({
      id: ''
    }),
    created() {
      this.id = Math.ceil(Math.random() * 10000);
    },
    methods: {
      onClick() {
        this.$modal.show('imageModal' + this.id)
      }
    }
  }
</script>

<style lang="scss">
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
