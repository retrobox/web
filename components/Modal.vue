<template>
  <client-only>
    <transition name="modal-transition">
      <div
        v-if="enabled"
        class="custom-modal modal-overlay"
        @keydown.esc="hide"
        @click="backgroundClick">
        <div
          :class="width + '-width'"
          class="modal-container"
          @mouseover="mouseOver"
          @mouseleave="mouveLeave">
          <div class="modal-content">
            <div :class="!noMargin ? 'p-4': ''">
              <slot/>
            </div>
          </div>
          <div
            v-if="primaryLabel !== null || secondaryLabel !== null || closing === 'primary' || closing === 'secondary'"
            v-show="!hideActions"
            class="modal-actions">
            <div
              v-if="(secondaryLabel === null && primaryLabel !== null && closing === null) || (closing === 'primary' && secondaryLabel === null)"
              class="modal-single-action">
              <button
                ref="primaryButton"
                class="modal-button"
                @click="primaryCallback">
                <span v-if="closing === 'primary'">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </button>
            </div>
            <div
              v-if="(secondaryLabel !== null && closing === 'primary') || (primaryLabel !== null && closing === 'secondary')"
              class="modal-double-action">
              <button
                ref="primaryButton"
                class="w-full md:w-1/2 modal-button"
                @click="primaryCallback"
              >
                <span v-if="closing === 'primary'">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </button>
              <button
                ref="secondaryButton"
                class="w-full md:w-1/2 modal-button"
                @click="secondaryCallback"
              >
                <span v-if="closing === 'secondary'">{{ $t('close') }}</span>
                <span v-else>{{ secondaryLabel }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script>
export default {
  name: "Modal",
  props: {
    'primary-label': { type: String, default: null },
    'secondary-label': { type: String, default: null },
    'closing': { type: String, default: null },
    'width': { type: String, default: 'medium' },
    'no-margin': { type: Boolean, default: false },
    'hide-actions': { type: Boolean, default: false },
    'focus': { type: String,  default: 'primary' }
  },
  data: () => ({
    enabled: false,
    canBeClicked: true,
    previousFocusedElement: null
  }),
  methods: {
    show() {
      //document.body.style = "overflow-y: hidden !important;"
      return new Promise((resolve) => {
        this.enabled = true
        this.previousFocusedElement = document.activeElement
        this.$nextTick(() => {
          if (this.focus !== null && this.$refs[this.focus + 'Button'] !== undefined) {
            this.$refs[this.focus + 'Button'].focus()
          }
          resolve()
        })
      })
    },
    hide() {
      //document.body.style = "overflow-y: auto !important;"
      this.enabled = false
      this.$emit('close')
      if (this.focus !== null && this.previousFocusedElement !== null) {
        this.previousFocusedElement.focus()
      }
    },
    backgroundClick() {
      if (this.canBeClicked) {
        this.enabled = false
        this.$emit('close')
        //document.body.style = "overflow-y: auto !important;"
      }
    },
    mouseOver() {
      this.canBeClicked = false
    },
    mouveLeave() {
      this.canBeClicked = true
    },
    primaryCallback() {
      this.$emit('primary')
      if (this.closing === 'primary') {
        this.hide()
      }
    },
    secondaryCallback() {
      this.$emit('secondary')
      if (this.closing === 'secondary') {
        this.hide()
      }
    }
  }
}
</script>
