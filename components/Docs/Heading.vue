<template>
  <div>
    <h2
      :id="id"
      class="heading"
      @mouseenter="anchorVisible = true"
      @mouseleave="anchorVisible = false"
    >
      <a
        :class="{'anchor-heading-visible': anchorVisible}"
        class="anchor-heading"
        @click="setAs()">#</a>
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
          this.$scrollTo('#' + this.id)
        }, 1000)
      }
    },
    methods: {
      setAs: function () {
        this.$scrollTo('#' + this.id)
        window.location.hash = this.id
      }
    }
  }
</script>
