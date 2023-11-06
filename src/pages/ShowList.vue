<template>

  <Breadcrumbs/>

  <div class="row">
    <h1>Репертуар</h1>

    <ul class="flex-wrap">
      <li
          class="show col medium-6 large-4"
          v-for="show in shows"
          :key="show.slug"
      >
        <ImgItem
            :title="show.title"
            :subtitle="show.subtitle"
            :link-src="`/shows/${show.slug}`"
            :img-src="show.imageList"
            :img-alt="show.alt"
        />
      </li>
    </ul>

  </div>

  <BeforeFooter class="offset-top"/>

</template>

<script>
import {shows} from "@/info/shows";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";
import ImgItem from "@/components/ImgItem";

export default {
  name: "ShowList",

  components: {BeforeFooter, Breadcrumbs, ImgItem},

  data() {
    return {
      shows: shows,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>