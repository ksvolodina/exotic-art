<template>
  <RouterLink :to="to" class="btn">
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  name: "ButtonLink",

  props: {
    to: {
      type: String,
      default: ''
    },
    isLink:{
      type: String,
      default: 'link'
    }
  },
}
</script>

<style scoped>

</style>