<template>
  <div>
    <pre
      v-highlight
      :class="{ 'stacked-mode': stacked }"
      class="docs-code-container default-mode">
      <code
        :class="lang"
        style="white-space: pre-line"
        class="docs-code">{{ render }}</code>
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'DocsCode',
    components: {},
    props: {
      code: {
        default: '',
        type: String
      },
      lang: {
        default: 'bash',
        type: String
      },
      stacked: {
        default: false,
        type: Boolean
      }
    },
    data: () => ({
      render: ''
    }),
    created() {
      if (this.code.split('\n').length !== 1) {

        let started = false
        let newLines = []
        this.code.split('\n').forEach((line) => {
          // console.log(line)
          // console.log(!started && !(!line || /^\s*$/.test(line)))
          if (!started && !(!line || /^\s*$/.test(line))) {
            started = true
          }
          if (started) {
            newLines.push(line)
          }
        })
        let newLines2 = []
        started = false
        newLines.reverse().forEach((line) => {
          if (!started && !(!line || /^\s*$/.test(line))) {
            started = true
          }
          if (started) {
            newLines2.push(line)
          }
        })
        newLines2 = newLines2.reverse()
        this.render = newLines2.map((line) => {
          let chars = line.split('')
          let newChars = []
          let started = false
          for (let i = 0; i < chars.length; i++) {
            if (!started && chars[i] !== ' ') {
              started = true
            }
            if (started) {
              newChars.push(chars[i])
            }
          }
          return newChars.join('')
        }).join('\n')
      } else {
        this.render = this.code
      }
      /*
            let startAt = null
            let newLines = []
            console.log(lines)
            for (let i = 0; i < lines.length; i++) {
              if (lines[i] === '' && startAt === null) {
                break;
              }
              if (startAt === null && lines[i] !== '') {
                startAt = i
              }
              newLines.push(lines[i])
            }
            this.code = newLines.join('\n')*/
    },
    methods: {}
  }
</script>

<style lang="scss">
  .docs-code-container {
    &.default-mode {
      margin-bottom: -40px;
    }
    &.stacked-mode {
      margin-bottom: -70px !important;
    }
  }

  .docs-code {
    border-radius: 10px;
    white-space: pre-line;
  }
</style>
