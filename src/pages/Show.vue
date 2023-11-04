<template>

  <Breadcrumbs/>

  <PromoItem
      :title="show.title"
      :description="show.description"
      :duration="show.duration"
      :img-src="show.imageMain"
      :img-alt="show.alt"
  />

  <p v-html="show.text" class="row medium-6 offset-top offset-bottom"/>

  <ul class="row show-gallery">
    <li
        v-for="(image, index) in show.imagesGallery"
        :key="index"
        class="img-item img-wrapper"
    >
      <img :src="image" alt="" class="img">
    </li>
  </ul>

  <h2 id="video" class="row offset-top-20">Видео номера</h2>
  <div class="row">
    <ul class="flex-wrap">
      <li
          v-for="(video, index) in show.videos"
          :key="index"
          class="col medium-6"
      >
        <VideoItem :src="video"/>
      </li>
    </ul>
  </div>

  <BeforeFooter/>

</template>

<script>
import {show} from "@/info/shows";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";
import VideoItem from "@/components/VideoItem";
import PromoItem from "@/components/PromoItem";

export default {
  name: "Show",

  components: {PromoItem, VideoItem, BeforeFooter, Breadcrumbs},

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

</style>