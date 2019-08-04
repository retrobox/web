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
            v-if="image.selected"
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
          <span v-if="pagination">({{ selected + 1 }}/{{ renderedImages.length }})</span>
          <span>&nbsp;</span>
          <span>{{ selectedImage.alt }}</span>
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
      listHeight: 'auto'
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
      start() {
      }
    }
  }
</script>

<style lang="scss">
  .image-slider-container {
    .image-list {
      .active {
        opacity: 1;
      }
      .not-active {
        opacity: 0;
      }
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

  /* Just some minimal styling for demo purposes */
.imgbox {
  position: relative;
  width: 640px;
  height: 480px;
  border: 1px solid black;
}

.imgbox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img {
  transition: opacity .5s;
}

</style>
