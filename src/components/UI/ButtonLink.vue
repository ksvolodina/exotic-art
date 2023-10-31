<template>

  <RouterLink to="" class="btn">
    <slot></slot>
  </RouterLink>
<!--  <button-->
<!--    class="btn"-->
<!--  >-->
<!--    <slot></slot>-->
<!--  </button>-->
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