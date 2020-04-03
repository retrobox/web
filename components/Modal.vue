<template>
  <client-only>
    <transition name="modal-transition">
      <div
        v-if="enabled"
        class="custom-modal modal-overlay"
        @click="backgroundClick">
        <div
          :class="width"
          class="modal-container"
          @mouseover="mouseOver"
          @mouseleave="mouveLeave">
          <div class="modal-content">
            <div :class="!noMargin ? 'p-4': ''">
              <slot/>
            </div>
          </div>
          <div
            v-if="primaryLabel !== null || secondaryLabel !== null || primaryClosing"
            v-show="!hideActions"
            class="modal-actions">
            <div
              v-if="secondaryLabel === null || (primaryClosing && secondaryLabel === null)"
              class="modal-single-action">
              <button
                ref="primaryButton"
                class="modal-button"
                @click="primaryCallback">
                <span v-if="primaryClosing">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </button>
            </div>
            <div
              v-if="secondaryLabel !== null"
              class="modal-double-action">
              <button
                ref="primaryButton"
                class="w-full md:w-1/2 modal-button"
                @click="primaryCallback"
              >
                <span v-if="primaryClosing">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </button>
              <button
                class="w-full md:w-1/2 modal-button"
                @click="secondaryCallback"
              >
                {{ secondaryLabel }}
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
    'primary-label': {
      type: String,
      default: null,
      required: false
    },
    'secondary-label': {
      type: String,
      default: null,
      required: false
    },
    'primary-closing': {
      type: Boolean,
      default: false
    },
    'width': {
      type: String,
      default: 'medium-width'
    },
    'no-margin': {
      type: Boolean,
      default: false
    },
    'hide-actions': {
      type: Boolean,
      default: false
    },
    'focus-primary': {
      type: Boolean,
      default: true
    }
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
          if (this.focusPrimary) {
            this.$refs.primaryButton.focus()
          }
          resolve()
        })
      })
    },
    hide() {
      //document.body.style = "overflow-y: auto !important;"
      this.enabled = false
      this.$emit('close')
      if (this.focusPrimary && this.previousFocusedElement !== null) {
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
      if (this.primaryClosing) {
        this.hide()
      }
    },
    secondaryCallback() {
      this.$emit('secondary')
    }
  }
}
</script>
