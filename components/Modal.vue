<template>
  <div class="custom-modal">
    <transition name="modal-transition">
      <div
        v-if="enabled"
        class="modal-overlay"
        @click="backgroundClick">
        <div
          class="modal-container"
          @mouseover="mouseOver"
          @mouseleave="mouveLeave">
          <div class="modal-content">
            <div class="p-4">
              <h3 class="mb-6 mt-3">
                Title
              </h3>
              <p>Description</p>
              <br />
              <input
                id="destroy-confirmation"
                type="checkbox"
              />
              <label for="destroy-confirmation">
                Confirmation
              </label>
              <br />
              <br />
            </div>
          </div>
          <div
            v-if="primaryLabel !== null || secondaryLabel !== null"
            class="modal-actions">
            <div
              v-if="secondaryLabel === null"
              class="modal-single-action">
              <div
                class="modal-button"
                @click="primaryCallback">
                {{ primaryLabel }}
              </div>
            </div>
            <div
              v-if="secondaryLabel !== null"
              class="modal-double-action">
              <div
                class="w-full md:w-1/2 modal-button"
                @click="primaryCallback"
              >
                {{ primaryLabel }}
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
  </div>
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
    }
  },
  data: () => ({
    enabled: false,
    canBeClicked: true
  }),
  mounted() {
  },
  methods: {
    show() {
      //document.body.style = "overflow-y: hidden !important;"
      this.enabled = true
    },
    hide() {
      //document.body.style = "overflow-y: auto !important;"
      this.enabled = false
    },
    backgroundClick() {
      if (this.canBeClicked) {
        this.enabled = false
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
    },
    secondaryCallback() {
      this.$emit('secondary')
    }
  }
}
</script>