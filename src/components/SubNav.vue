<template>
  <div class="btns offset-bottom">
    <ButtonLink
        v-for="btn in btnsList"
        :key="btn.title"
        :to="`#${btn.href}`"
        class="btn-small btn-rounded btn-inverted-basic"
    >
      {{ btn.title }}
    </ButtonLink>
  </div>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";

export default {
  name: "SubNav",

  components: {ButtonLink},

  props: {
    btnsList: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.fixed {
  @include transition;
  background: $inverted-color;
  box-shadow: $box-shadow;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>