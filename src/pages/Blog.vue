<template>
  <Breadcrumbs v-if="smallScreen"/>

  <div class="row">
    <h1>Блог о нас и нашей работе</h1>
  </div>

  <BeforeFooter/>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeFooter from "@/components/BeforeFooter";

export default {
  name: "Blog",

  components: {BeforeFooter, Breadcrumbs},

  props: {
    smallScreen: {
      type: Boolean,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>