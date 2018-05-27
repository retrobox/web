<template>
<div class="not-found">
  <div class="not-found-content">
    <div class="not-found-icon">
      <icon name="exclamation-circle" class="icon" />
    </div>
    <div class="not-found-text">
      <h2 class="not-found-title">{{$t('not-found.title')}}</h2>
      <p class="not-found-description">{{$t('not-found.description')}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.not-found {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .not-found-content {
      color: #2c3e50;
      opacity: 0.8;
        display: grid;
        grid-template-columns: 20% 80%;
        grid-column-gap: 0.5em;

        .not-found-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                width: auto;
                height: 2em;
                max-width: 100%;
                max-height: 100%;
            }
        }

        .not-found-title {
          margin-bottom: 0.5em;
        }

    }
}
</style>
