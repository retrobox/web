<template>
  <div v-html="markdown"></div>
</template>

<script>
  import marked from 'marked'
  export default {
    name: 'DocsMarkdown',
    props: {
      input: {
        default: '',
        type: String
      }
    },
    data: () => ({
      markdown: ''
    }),
    created() {
      this.markdown = marked(this.input)
    },
    methods: {}
  }
</script>
