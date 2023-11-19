<template>
  <div class="row">
    <h1>Как мы работаем?</h1>

    <Accordion
        :items="items"
        class="medium-10 large-8 centered offset-bottom"
    />
  </div>

  <BeforeFooter/>
</template>

<script>
import BeforeFooter from "@/components/BeforeFooter";
import Accordion from "@/components/Accordion";
import {how} from "@/info/how";
export default {
  name: "How",
  components: {Accordion, BeforeFooter},

  data() {
    return {
      items: how
    }
  }
}
</script>

<style scoped>

</style>