<template>
  <section :id="section.id" class="section">
    <div class="row">

      <h2 class="h3">
        {{ section.title }}
      </h2>

      <p
          v-html="section.description"
          class="medium-6 centered text-center offset-bottom-small"/>

      <slot></slot>

    </div>
  </section>
</template>

<script>
export default {
  name: "CostSection",

  props: {
    section: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  padding-top: $offset;
  padding-bottom: $offset;
  @include respond-to(medium-up) {
    padding-top: $offset-large;
    padding-bottom: $offset-large;
  }
}
</style>