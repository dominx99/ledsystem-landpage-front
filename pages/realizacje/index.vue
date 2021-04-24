<template>
  <RealizationList />
</template>

<script>
import RealizationList from './../../components/Realizations/RealizationList.vue'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow'
        }
      ],
    }
  },
  components: {
    RealizationList,
  }
}
</script>
