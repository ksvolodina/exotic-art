<template>
  <div class="app">

    <Header/>

    <Nav v-if="!smallScreen"/>

    <main>
      <RouterView/>
    </main>

    <Footer/>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from "@/components/template/Header";
import Nav from "@/components/template/Nav";
import Footer from "@/components/template/Footer";
import {throttle} from "@/helpers/throttle";

export default {
  components: {Header, Nav, Footer},

  data() {
    return {
    }
  },

  methods: {
    ...mapActions({
      setSiteWidth: "setSiteWidth",
    }),
  },

  computed: {
    ...mapGetters({
      smallScreen: "smallScreen"
    })
  },

  mounted() {
    window.addEventListener('resize', throttle(this.setSiteWidth, 100))
    this.setSiteWidth()
  },

  beforeDestroy() {
    window.removeEventListener('resize', throttle(this.setSiteWidth, 100))
  }
}
</script>

<style lang="scss">
html,
body{
  overflow-x: hidden;
}

.app{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header, footer{
  @include transition;
  display: block;
  width: 100%;
}

main{
  display: block;
  padding: 0;
  margin: 0 auto;
  flex: 1;
  width: 100%;
}

header, footer{
  @include transition;
  width: 100%;
}
</style>