<template>
  <div>
    <transition
      name="main-transition">
      <div
        :class="{ 'visible': show, 'bottom': atBottom }"
        class="go-to-top"
        @click="goToTop()">
        <Icon value="fas fa-arrow-up"/>
      </div>
    </transition>
  </div>
</template>

<style>
  .go-to-top {
    position: fixed;
    border: 1px solid #FAFAFA;
    background-color: #0a3d62;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    bottom: 1.58em;
    right: 1.58em;
    color: #f8fafc;
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .go-to-top.visible {
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.5s;
  }

  .go-to-top.bottom {
    bottom: 6em;
  }
</style>
<script>
  import Icon from "./Icon"

  export default {
    components: {Icon},
    data: () => ({
      show: false,
      atBottom: false
    }),
    mounted () {
      window.onscroll = () => {
        this.show = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        let position = window.scrollY
        this.atBottom = Math.ceil((position / (document.body.clientHeight - document.documentElement.clientHeight)) * 100) >= 98
      };
    },
    methods: {
      goToTop: function () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
