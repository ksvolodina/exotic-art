<template>
  <div class="app">

    <Header
        :small-screen="smallScreen"
    />

    <Nav v-if="!smallScreen"/>

    <main>
      <RouterView/>
    </main>

    <BeforeFooter/>

    <Footer/>

  </div>
</template>

<script>
import Header from "@/components/template/Header";
import Nav from "@/components/template/Nav";
import BeforeFooter from "@/components/template/BeforeFooter";
import Footer from "@/components/template/Footer";

export default {
  data() {
    return {
      navShow: false,
      smallScreen: true,
    }
  },

  components: {Footer, BeforeFooter, Nav, Header},

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
    window.addEventListener('resize', this.getScreenWidth)
    this.getScreenWidth()
  },

  computed: {
  }
}
</script>

<style lang="scss">
</style>