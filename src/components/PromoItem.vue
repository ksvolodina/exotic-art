<template>
  <div class="promo">
    <div class="promo-info">

      <div class="promo-title" v-if="!smallScreen || showPage">

        <component :is="tag">
          {{ title }}
        </component>

        <ButtonLink
            class="btn-small btn-rounded btn-inverted"
            show-page="showPage"
            v-if="showPage"
            @click.stop="$emit('clickBtn', 'video')"
        >
          Смотреть видео
        </ButtonLink>
      </div>

      <div
          class="promo-txt medium-8 large-12 centered"
          :class="{
            'offset-bottom offset-top': showPage && smallScreen
          }"
      >
        <p v-html="description" class="promo-description"/>
        <p class="promo-time" v-if="showPage">Продолжительность номера — {{ duration }}</p>
      </div>

    </div>

    <div class="promo-img" :class="classImgWrapper" v-if="showPage || !smallScreen">
      <img :src="imgSrc" :alt="imgAlt" class="img">
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";
import {mapGetters} from "vuex";

export default {
  name: "PromoItem",

  components: {ButtonLink},

  props: {
    tag: {
      type: String,
      default: 'h1'
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    duration: {
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
    showPage: {
      type: Boolean,
      default: true,
    },
    classImgWrapper: {
      type: String,
      default: ''
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
.promo{
  @include respond-to(large-up) {
    position: relative;
  }

  &-info {
    @include respond-to(large-up) {
      left: 50%;
      transform: translate(0, -50%);
      top: 50%;
      position: absolute;
      width: 50%;
      z-index: 5;
    }
  }

  &-title{
    background: $first-color;
    color: $inverted-color;
    display: flex;
    flex-wrap: wrap;
    gap: $offset;
    align-items: center;
    justify-content: center;
    padding: $offset;

    h1, h3 {
      margin: 0;
    }

    @include respond-to(large-up) {
      justify-content: flex-start;
      padding: 20px 20px 30px 60px;
      width: 100%;

      h1, h3 {
        text-align: left;
      }
    }
  }

  &-txt{
    padding: 0 $row-padding;
    @include respond-to(medium-up) {
      padding: $row-padding;
    }
    @include respond-to(large-up) {
      background: $inverted-color;
      box-shadow: $box-shadow;
      margin-top: -20px;
      left: 20px;
      padding: 20px 60px 20px 40px;
      position: relative;
    }
  }

  &-description {
    @include respond-to(large-up) {
      width: 90%;
    }
  }

  &-img {
    display: block;
    height: $img-height;
    margin: 0 $row-padding;
    position: relative;
    @include respond-to(large-up) {
      height: 540px;
      margin: 0;
      overflow: hidden;
      width: 70%;
    }
  }

  &-time{
    color: $first-color;
    font-weight: 500;
  }

}
</style>