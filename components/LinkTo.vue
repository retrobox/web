<template>
  <a
    @click="trigger()"><slot /></a>
</template>

<script>
  export default {
    name: 'LinkTo',
    props: {
      to: {
        type: String,
        default: '/'
      }
    },
    methods: {
      'trigger': function () {
        this.$router.push(this.to)
        window.scrollTo(0, 0)
      }
    }
  }
</script>
