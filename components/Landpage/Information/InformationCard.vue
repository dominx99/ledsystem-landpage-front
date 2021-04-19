<template>
</template>

<script>
export default {
  props: ['card'],
}
</script>

<style lang="scss">
.information-card {
  opacity: .8;
  transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 1;
  }
}
</style>
