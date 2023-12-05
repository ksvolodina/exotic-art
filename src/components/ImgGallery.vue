<template>
  <div class="gallery">

    <div
        class="gallery-imgs"
        :class="{
          'gallery-imgs-grid': smallScreen === false && isModal === false
        }"
    >
      <div
          v-for="image in images"
          :key="image"
          class="gallery-item col"
          :class="{
            'medium-6 large-4': isModal === false
          }"
      >
        <div
            class="img-wrapper"
            :class="{
              'no-hover': isModal === true
            }"
            @click="$emit('openModal')"
        >
          <img
              :src="image"
              :alt="imageAlt"
              class="img"
          >
        </div>
      </div>

    </div>

    <span class="gallery-icon" v-if="smallScreen === true || isModal === true">
      <svg viewBox="0 0 45.964 45.964">
          <path d="M32.399,40.565H11.113v1.297c0,2.24,1.838,4.051,4.076,4.051h26.733c2.239,0,4.042-1.811,4.042-4.051V15.13c0-2.237-1.803-4.068-4.042-4.068h-1.415v21.395C40.507,36.904,36.845,40.566,32.399,40.565z"></path>
          <path d="M0,4.102l0,28.355c0,2.241,1.814,4.067,4.051,4.067h28.365c2.237,0,4.066-1.826,4.066-4.067l0-28.356c0-2.238-1.828-4.051-4.066-4.051H4.051C1.814,0.05,0,1.862,0,4.102z"></path>
      </svg>
    </span>

    <ul class="gallery-dots" v-if="smallScreen === true || isModal === true">
      <li
          v-for="image in images"
          :key="image"
          class="gallery-dot"
      />
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ImgGallery",

  data() {
    return {
    }
  },

  props: {
    images: {
      type: Array,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Бразильское шоу на праздник в СПб'
    },
    isModal: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    ...mapGetters({
      smallScreen: "smallScreen"
    }),
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  @include row-reset;
  position: relative;

  &-imgs {
    width: 100%;
    height: $img-height;
    scroll-snap-type: x mandatory;
    -webkit-scroll-snap-type: x mandatory;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE и Edge */
    scrollbar-width: none;  /* Firefox */
  }

  &-imgs-grid {
    @include respond-to(medium-up) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: auto;
      overflow: auto;
      white-space: normal;
    }
  }

  &-item {
    scroll-snap-align: start;
    display: inline-block;
    width: 100%;
  }

  &-dots {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: $offset/2;
    transform: translateX(-50%);
  }

  &-dot {
    background: $inverted-color;
    border-radius: 50%;
    height: 6px;
    width: 6px;
    opacity: .7;
    margin: 0 3px;
  }

  &-dot-active {
    opacity: 1;
  }

  &-icon {
    fill: $inverted-color;
    position: absolute;
    z-index: 20;
    top: calc($offset/2);
    right: calc($offset/2 + $row-padding);
    width: 24px;
    height: 24px;
  }

}


.modal {
  .img-wrapper, .gallery-imgs {
    height: 95vh;
    width: 60vw;
  }
}
</style>