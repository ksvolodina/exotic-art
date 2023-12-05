<template>

  <component
      :is="tag"
      :to="linkSrc"
      :class="{
        'no-hover': !isLink
      }"
      class="img-wrapper"
  >
    <img
        :src="imgSrc"
        :alt="imgAlt"
        class="img"
    >

    <h3 v-if="title" class="img-title" :class="showImgTitle">{{ title }}</h3>
    <p v-if="subtitle" class="img-subtitle">{{ subtitle }}</p>
  </component>

</template>

<script>
export default {
  name: "ImgItem",

  data() {
    return {
    }
  },

  props: {
    tag: {
      type: String,
      default: 'RouterLink'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    linkSrc: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: 'Шоу-балет на праздник в СПб'
    },
    showImgTitle: {
      type: String,
      default: '',
    }
  },

  computed: {
    isLink() {
      return this.tag === 'RouterLink'
    }
  },

}
</script>

<style lang="scss" scoped>
.img {

  &-wrapper {

    @include hover {
      .img-subtitle{
        opacity: 1;
      }
    }

  }

  &-title {
    display: none;

    @mixin show-img-title {
      background: linear-gradient(0deg, $basic-color-dark 0%, transparent);
      bottom: 0;
      color: $inverted-color;
      display: block;
      left: 0;
      margin-bottom: 0;
      padding: 60px $offset $offset;
      position: absolute;
      text-transform: uppercase;
      width: 100%;
      z-index: 5;
    }

    &.show-img-title {
      @include show-img-title;
      & + .img-subtitle {
        display: none;
      }
    }

    @include respond-to(medium-up) {
      @include show-img-title;
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
</style>