<template>
  <RouterLink to="" class="btn">
    <slot></slot>
  </RouterLink>
</template>

<script>
export default {
  name: "ButtonLink",

  props: {
    isLink:{
      type: String,
      default: 'link'
    }
  },
}
</script>

<style scoped>

</style>