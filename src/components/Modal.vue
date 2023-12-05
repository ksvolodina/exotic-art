<template>
  <div
      class="modal"
      v-if="showModal === true"
      @click="$emit('update:showModal', false)"
  >
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    showModal: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparentize($basic-color-dark, .3);
  display: flex;
  position: fixed;
  z-index: 99999;
}

.modal-content{
  background: $inverted-color;
  border-radius: 12px;
  margin: auto;
}
</style>