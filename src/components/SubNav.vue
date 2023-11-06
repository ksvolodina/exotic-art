<template>
  <div class="btns sub-nav">
    <ButtonLink
        v-for="btn in btnsList"
        :key="btn.title"
        :to="`#${btn.href}`"
        class="btn-small btn-rounded btn-inverted-basic"
        @click.stop="$emit('click', $event)"
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

  methods: {
  }
}
</script>

<style lang="scss" scoped>

.sub-nav{
  background: $inverted-color;
  align-items: center;
  height: 52px;
  padding: $offset/2 0;
}
.fixed {
  box-shadow: $box-shadow;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>