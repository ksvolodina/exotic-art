<template>

  <Breadcrumbs/>

  <div class="row">
    <h1>{{ show.title }}</h1>
    <p v-html="show.description" class="offset-top offset-bottom"/>
  </div>

  <BeforeFooter/>

</template>

<script>
import {shows} from "@/shows";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";

export default {
  name: "Show",

  components: {BeforeFooter, Breadcrumbs},

  data() {
    return {
      shows: shows,
      show: {},
    }
  },

  methods: {
    getShow() {
      this.show = this.shows.find(show => show.slug === this.$route.params.slug)
    }
  },

  mounted() {
    this.getShow()
  },
}
</script>

<style scoped>

</style>