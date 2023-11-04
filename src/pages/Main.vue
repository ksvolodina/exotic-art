<template>

  <ul class="flex-wrap offset-bottom">
    <li
        class="show medium-6"
        v-for="show in shows"
        :key="show.slug"
    >
      <ImgItem
          :title="show.title"
          :subtitle="show.subtitle"
          :link-src="`/shows/${show.slug}`"
          :img-src="show.imageFrontpage"
          :img-alt="show.alt"
          class="frontpage-img"
      />
    </li>
  </ul>

  <h2 class="row medium-up-show">По-настоящему уникальное шоу для России</h2>

  <PromoItem
      tag="h3"
      :title="promoMain.title"
      :description="promoMain.description"
      :img-src="require('@/assets/img/promo/samba.jpg')"
      :show-page="false"
      class-img-wrapper="frontpage-img"
      class="offset-bottom-small frontpage-offset"
  />

  <h3 class="row medium-up-show">
    Опыт карнавала Рио-де-Жанейро, стильные костюмы и первоклассная самба -
    это шоу, от которого невозможно оторвать взгляд
  </h3>

  <div class="row flex-center offset-bottom">
    <div class="medium-8">
      <VideoItem src="https://player.vimeo.com/video/850249149?h=d8328e8695"/>
    </div>
  </div>

  <BeforeFooter/>
</template>

<script>
import {frontpage} from "@/info/shows";
import {promoMain} from "@/info/main";
import BeforeFooter from "@/components/BeforeFooter";
import ImgItem from "@/components/ImgItem";
import VideoItem from "@/components/VideoItem";
import PromoItem from "@/components/PromoItem";

export default {
  name: "Main",
  components: {PromoItem, VideoItem, BeforeFooter, ImgItem},

  data() {
    return {
      shows: frontpage,
      promoMain: promoMain
    }
  },
}
</script>

<style lang="scss" scoped>
.frontpage-offset {
  margin-top: -$offset;
  @include respond-to(medium-up) {
    margin-top: 0;
  }
}
</style>