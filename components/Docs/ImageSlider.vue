<template>
  <div>
    <div class="image-slider-container">
      <div class="image-list">
        <div 
          v-for="(image) in renderedImages"
          :key="image.id"
          class="image-item">
          <DocsImage
            v-show="image.selected"
            :alt="image.alt"
            :src="image.src" 
            class="image-item-compo"/>
        </div>
        <!-- <div
          class="image-item">
        </div> -->
      </div>
      <div class="image-slider-actions">
        <div 
          class="left"
          @click="left()">
          <i class="icon fas fa-chevron-left" />
        </div>
        <div class="page">
          {{ selectedImage.alt }}
        </div>
        <div 
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
      }
    },
    data: () => ({
      renderedImages: [],
      selected: 0,
      selectedImage: {}
    }),
    created() {
      this.render()
    },
    methods: {
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
          return el.selected
        })[0]
      }
    }
  }
</script>

<style lang="scss">
  .image-slider-container {
    .image-list {
      .selected {}
    } 
    .image-item {
      .image-item-compo {
      }
      .image-item-non-visible {
        opacity: 0;
      }
      .image-item-visible {
      }
    }
    .image-slider-actions {
      display: grid;
      grid-template-columns: 20% 60% 20%;
      
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
