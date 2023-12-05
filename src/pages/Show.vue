<template>

  <Breadcrumbs/>

  <PromoItem
      :title="show.title"
      :description="show.description"
      :duration="show.duration"
      :img-src="show.imageMain"
      :img-alt="show.alt"
      @click-btn="scrollToBlock($refs[$event])"
  />

  <p v-html="show.text" class="row medium-8 large-6 offset-top offset-bottom"/>

  <div class="row">
    <ImgGallery
        :images="show.imagesGallery"
        :image-alt="show.alt"
        @openModal="showModal = true"
    />
  </div>

  <Modal v-model:showModal="showModal" v-if="!smallScreen">
    <ImgGallery
        :is-modal="true"
        :images="show.imagesGallery"
        :image-alt="show.alt"
    />
  </Modal>

  <h2 ref="video" class="row offset-top">Видео номера</h2>
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

  <BeforeFooter class="offset-top"/>

</template>

<script>
import {mapGetters} from "vuex";
import {show} from "@/info/shows";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";
import VideoItem from "@/components/VideoItem";
import PromoItem from "@/components/PromoItem";
import ImgGallery from "@/components/ImgGallery";
import Modal from "@/components/Modal";
import {scrollToBlock} from "@/helpers/scrollTo"

export default {
  name: "Show",

  components: {Modal, ImgGallery, PromoItem, VideoItem, BeforeFooter, Breadcrumbs},

  data() {
    return {
      allShows: show,
      show: {},
      showModal: false,
      scrollToBlock,
    }
  },

  methods: {
    getShow() {
      this.show = this.allShows.find(show => show.slug === this.$route.params.slug)
    },

  },

  computed: {
    ...mapGetters({
      smallScreen: "smallScreen"
    }),
  },

  created() {
    this.getShow()
  },


}
</script>

<style lang="scss" scoped>

</style>