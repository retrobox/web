<template>
  <div>
    <div class="image-slider-container">
      <div
        :id="'image-list-' + id"
        :style="'height:' + listHeight + ';'"
        class="image-list">
        <div 
          v-for="(image) in renderedImages"
          :key="image.id"
          class="image-item">
          <DocsImage
            v-show="image.selected"
            :alt="image.alt"
            :src="image.src" 
            class="image-item-compo"
            @loaded="handleLoaded" />
        </div>
        <!-- <div
          class="image-item">
        </div> -->
      </div>
      <div class="image-slider-actions">
        <div 
          :class="{'disabled': selected === 0}"
          class="left"
          @click="left()">
          <i class="icon fas fa-chevron-left" />
        </div>
        <div class="page">
          <span v-if="pagination">({{ selected + 1 }}/{{ renderedImages.length }})</span>
          <span>&nbsp;</span>
          <span>{{ selectedImage.alt }}</span>
        </div>
        <div 
          :class="{'disabled': selected === renderedImages.length - 1}"
          class="right"
          @click="right()">
          <i class="icon fas fa-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DocsImage from "~/components/Docs/Image"
  export default {
    name: 'DocsImageSlider',
    components: {DocsImage},
    props: {
      images: {
        type: Array,
        default: () => {

        }
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      id: '',
      renderedImages: [],
      selected: 0,
      selectedImage: {},
      height: 0,
      hidden: false,
      listHeight: 'auto',
      isLoaded: false
    }),
    created() {
      this.id = Math.ceil(Math.random() * 10000)
      this.renderedImages = this.images.map(el => {
        el.selected = false
        el.id = Math.ceil(Math.random() * 10000)
        return el
      });
      this.renderedImages.map(el => {
        el.selected = this.renderedImages.indexOf(el) === this.selected
        return el
      })
      this.selectedImage = this.renderedImages.filter(el => {
        return this.renderedImages.indexOf(el) === this.selected
      })[0]
    },
    mounted() {
      if (!this.$isServer) {
        this.newTick()
      }
    },
    methods: {
      handleLoaded() {
        this.isLoaded = true
        this.listHeight = "auto"
      },
      left() {
        if (this.selected > 0) {
          this.selected = this.selected - 1
          this.render()
        }
      },
      right() {
        if (this.selected < this.images.length - 1) {
          this.selected = this.selected + 1
          this.render()
        }
      },
      render() {
        this.listHeight = document.querySelector('#image-list-' + this.id).scrollHeight + 'px'
        this.renderedImages = this.images.map(el => {
          el.selected = false
          el.id = Math.ceil(Math.random() * 10000)
          return el
        });
        this.selectedImage = this.renderedImages.filter(el => {
          return this.renderedImages.indexOf(el) === this.selected
        })[0]
        this.renderedImages.map(el => {
          el.selected = this.renderedImages.indexOf(el) === this.selected
          return el
        })
      },
      newTick() {
        setTimeout(() => {
          if (this.isLoaded) {
            if (this.selected === this.images.length - 1) {
              this.selected = 0
            } else {
              this.selected = this.selected + 1
            }
            this.render()
          }
          this.newTick()
        }, 3000)
      }
    }
  }
</script>

<style lang="scss">
  .image-slider-container {
    .image-item {
      transition: all 0.2s;
    }
    .image-slider-actions {
      display: grid;
      grid-template-columns: 20% 60% 20%;
      .disabled {
        opacity: 0.5;
        cursor: pointer !important;
      }
      .page {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .left,.right {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
