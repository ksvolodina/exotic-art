<template>
  <div class="promo">
    <div class="promo-info">

      <div class="promo-title">

        <component :is="tag">
          {{ title }}
        </component>

        <ButtonLink
            to="#video"
            class="btn-small btn-rounded btn-inverted"
            show-page="showPage"
            v-if="showPage"
        >
          Смотреть видео
        </ButtonLink>
      </div>

      <div class="promo-txt">
        <p v-html="description" class="promo-description"/>
        <p class="promo-time" v-if="showPage">Продолжительность номера — {{ duration }}</p>
      </div>

    </div>

    <div class="promo-img" :class="classImgWrapper">
      <img :src="imgSrc" :alt="imgAlt" class="img">
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";
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
    padding: $offset;
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
    display: none;
    @include respond-to(large-up) {
      display: block;
      height: 540px;
      overflow: hidden;
      position: relative;
      width: 70%;
    }
  }

  &-time{
    font-size: 14px;
    opacity: .6;
  }

}
</style>