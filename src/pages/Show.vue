<template>

  <Breadcrumbs/>


  <div class="show-main">
    <div class="show-main-info">

      <div class="show-main-title">
        <h1>{{ show.title }}</h1>
        <ButtonLink to="#video" class="btn-small btn-rounded btn-inverted">Смотреть видео</ButtonLink>
      </div>

      <div class="show-main-txt">
        <p v-html="show.description"/>
        <p class="show-main-time">Продолжительность номера — {{ show.duration}}</p>
      </div>

    </div>

    <a :src="show.imageMain" class="show-main-img">
      <img :src="show.imageMain" :alt="show.alt" class="img">
    </a>
  </div>

  <p v-html="show.text" class="row medium-2 offset-top offset-bottom"/>

  <ul class="row show-gallery offset-top-20">
    <li
        v-for="(image, index) in show.imagesGallery"
        :key="index"
        class="img-wrapper"
    >
      <img :src="image" alt="" class="img">
    </li>
  </ul>

  <h2 id="video" class="row offset-top-20">Видео номера</h2>
  <div class="row with-video">
    <ul class="flex-wrap">
      <li
          v-for="(video, index) in show.videos"
          :key="index"
          class="col medium-2"
      >
        <VideoItem :src="video"/>
      </li>
    </ul>
  </div>

  <BeforeFooter/>

</template>

<script>
import {show} from "@/shows";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";
import VideoItem from "@/components/VideoItem";
import ButtonLink from "@/components/UI/ButtonLink";

export default {
  name: "Show",

  components: {ButtonLink, VideoItem, BeforeFooter, Breadcrumbs},

  data() {
    return {
      allShows: show,
      show: {},
    }
  },

  methods: {
    getShow() {
      this.show = this.allShows.find(show => show.slug === this.$route.params.slug)
    },
  },

  created() {
    this.getShow()
  },
}
</script>

<style lang="scss" scoped>
.show-main{
  @include respond-to(large-up) {
    position: relative;
    overflow-x: hidden;
  }

  &-info {
    @include respond-to(large-up) {
      left: 50%;
      transform: translate(0, -50%);
      top: 50%;
      position: absolute;
      width: 50%;
      z-index: 1;
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
    text-align: center;

    h1 {
      margin: 0;
    }

    @include respond-to(large-up) {
      justify-content: flex-start;
      padding: 20px 20px 30px 60px;
      width: 100%;
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

  &-img {
    display: none;
    @include respond-to(large-up) {
      display: block;
      min-height: 540px;
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