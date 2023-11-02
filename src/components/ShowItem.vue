<template>
  <RouterLink :to="`/shows/${show.slug}`" class="show-link img-wrapper">

    <img
        :src="show.imageList"
        :alt="show.alt"
        class="img"
    >

    <h3 class="show-title">{{ show.title }}</h3>
    <p class="show-subtitle">{{ show.subtitle }}</p>

  </RouterLink>
</template>

<script>
export default {
  name: "ShowItem",

  data() {
    return {
    }
  },

  props: {
    show: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.show {

  &-link {
    height: 350px;
    display: block;
    text-align: center;
    width: 100%;

    @include hover {
      .show-subtitle{
        opacity: 1;
      }
    }

    @include respond-to(large-up) {
      height: 400px;
    }
    @include respond-to(xlarge-up) {
      height: 500px;
    }

  }

  &-title {
    opacity: 0;
    @include respond-to(medium-up) {
      background: linear-gradient(0deg, $basic-color-dark 0%, transparent);
      bottom: 0;
      color: $inverted-color;
      left: 0;
      margin-bottom: 0;
      opacity: 1;
      padding: 60px $offset $offset;
      position: absolute;
      text-transform: uppercase;
      width: 100%;
      z-index: 5;
    }
  }

  &-subtitle {
    background: linear-gradient(0deg, $basic-color-dark 0%, transparent);
    bottom: 0;
    color: $inverted-color;
    font-weight: 500;
    left: 0;
    opacity: 1;
    padding: 60px $offset $offset;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
    z-index: 5;

    @include respond-to(medium-up) {
      background: none;
      bottom: 50%;
      left: 50%;
      margin-bottom: 0;
      opacity: 0;
      padding: 10px;
      text-transform: none;
      transform: translate(-50%, 50%);
      width: 50%;
      z-index: 5;
    }
  }

}

//@include respond-to(custom-medium-down){
//  p:not(.title){
//    display: none;
//  }
//}
</style>