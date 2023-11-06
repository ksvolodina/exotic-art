<template>
  <div class="app">

    <Header :small-screen="smallScreen"/>

    <Nav v-if="!smallScreen"/>

    <main>
      <RouterView/>
    </main>

    <Footer :small-screen="smallScreen"/>

  </div>
</template>

<script>
import Header from "@/components/template/Header";
import Nav from "@/components/template/Nav";
import Footer from "@/components/template/Footer";
import {throttle} from "@/helpers/throttle";

export default {
  components: {Header, Nav, Footer},

  data() {
    return {
      smallScreen: true,
    }
  },

  methods: {
    getScreenWidth() {
      if (window.innerWidth > 767) {
        this.smallScreen = false
      } else {
        this.smallScreen = true
      }
    },
  },

  mounted() {
    window.addEventListener('resize', throttle(this.getScreenWidth, 100))
    this.getScreenWidth()
  },

  beforeDestroy() {
    window.removeEventListener('resize', throttle(this.getScreenWidth, 100))
  }
}
</script>

<style lang="scss">
html,
body{
  height: 100%;
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