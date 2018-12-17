<template>
  <div>
    <Error
      :title="$t('not-found.title')"
      :description="$t('not-found.description')"
    />
  </div>
</template>

<script>
import Icon from "../components/Icon"
import Error from "../components/Error"
export default {
  components: {Icon, Error},
  layout: 'default',
  head () {
    return {
      title: 'Not found page'
    }
  },
  props: {
    error: {
      required: true,
      type: Object | Array
    }
  },
  created () {
    console.log(this.error)
  }
}
</script>
