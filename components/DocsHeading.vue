<template>
  <div>
    <h2
      :id="id"
      class="heading"
      @mouseenter="anchorVisible = true"
      @mouseleave="anchorVisible = false"
    >
      <a
        :href="'#' + id"
        :class="{'anchor-heading-visible': anchorVisible}"
        class="anchor-heading">#</a>
      {{ label }}
    </h2>
  </div>
</template>

<script>
  export default {
    name: 'DocsHeading',
    props: {
      level: {
        default: 2,
        type: Number
      },
      label: {
        default: "",
        type: String
      },
      divider: {
        default: false,
        type: Boolean
      }
    },
    data: () => ({
      id: '',
      anchorVisible: false
    }),
    created() {
      this.id = this.label.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    mounted() {
      if (window.location.hash === '#' + this.id) {
        setTimeout(() => {
          console.log('match!')
          this.$scrollTo('#' + this.id)
          console.log('scrolled to !')
        }, 1000)
      }
    }
  }
</script>

<style lang="scss">
  .heading {
  }

  .anchor-heading {
    opacity: 0;
    float: left;
    margin-right: 0.5em;
    transition: .1s opacity !important;
  }

  .anchor-heading-visible {
    transition: .1s opacity !important;
    opacity: 1 !important;
  }
</style>
