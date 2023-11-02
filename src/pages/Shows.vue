<template>

  <Breadcrumbs/>

  <div class="row">
    <h1>Репертуар</h1>

    <ShowList
        class="offset-bottom"
        :shows="shows"
    />

  </div>

  <BeforeFooter/>

</template>

<script>
import {shows} from "@/shows";
import ShowList from "@/components/ShowList";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";

export default {
  name: "Shows",

  components: {BeforeFooter, Breadcrumbs, ShowList},

  data() {
    return {
      shows: shows
    }
  },

}
</script>

<style lang="scss" scoped>

</style>