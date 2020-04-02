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
              v-if="secondaryLabel === null || (primaryClosing && secondaryLabel === NULL)"
              class="modal-single-action">
              <div
                class="modal-button"
                @click="primaryCallback">
                <span v-if="primaryClosing">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </div>
            </div>
            <div
              v-if="secondaryLabel !== null"
              class="modal-double-action">
              <div
                class="w-full md:w-1/2 modal-button"
                @click="primaryCallback"
              >
                <span v-if="primaryClosing">{{ $t('close') }}</span>
                <span v-else>{{ primaryLabel }}</span>
              </div>
              <div
                class="w-full md:w-1/2 modal-button"
                @click="secondaryCallback"
              >
                {{ secondaryLabel }}
              </div>
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
    }
  },
  data: () => ({
    enabled: false,
    canBeClicked: true
  }),
  methods: {
    show() {
      //document.body.style = "overflow-y: hidden !important;"
      this.enabled = true
    },
    hide() {
      //document.body.style = "overflow-y: auto !important;"
      this.enabled = false
      this.$emit('close')
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
        this.enabled = false
      }
    },
    secondaryCallback() {
      this.$emit('secondary')
    }
  }
}
</script>
