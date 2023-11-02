<template>
  <div class="video-wrapper">
    <iframe class="video" :src="src" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoItem",

  data() {
    return {
    }
  },

  props: {
    src: {
      type: String,
      default: ''
    },
  },

  computed: {
    // videoUrl() {
    // },
  },

}
</script>

<style lang="scss" scoped>
.video-wrapper{
  display: flex;
  padding: 56.25% 0 0 0;
  position: relative;
}

.video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>