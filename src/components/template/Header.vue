<template>
  <header class="row">

    <button
      class="nav-icon"
      :class="{'active': show}"
      @click="show = !show"
    >
    </button>

    <Nav
      :class="{'active': show}"
      v-if="smallScreen"
      @navClick="closeNav"
    />

    <ContactsLinks
        :small-screen="smallScreen"
    />

    <RouterLink to="/" class="logo" title="На главную">
      <img src="@/assets/img/logo.svg" alt="">
    </RouterLink>

    <ButtonLink to="/contacts" class="nav-btn">Заказать шоу</ButtonLink>

  </header>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";
import Nav from "@/components/template/Nav";
import ContactsLinks from "@/components/template/ContactsLinks";

export default {
  name: "Header",

  components: {ContactsLinks, Nav, ButtonLink},

  data() {
    return {
      show: false,
    }
  },

  props: {
    smallScreen: {
      type: Boolean,
      required: true,
    }
  },

  methods: {
    closeNav() {
      if (this.smallScreen) this.show = !this.show
    }
  },

}
</script>

<style lang="scss" scoped>
header {
  background: $light-color;
  box-shadow: $box-shadow inset;
  display: flex;
  flex-direction: column;
  padding: 60px 0 ($row-padding + 5px);
  position: relative;

  &:before {
    background: $basic-color;
    content: '';
    display: block;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @include respond-to(medium-up) {
    background: none;
    box-shadow: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;

    &:before {
      display: none;
    }
  }

}

.logo {
  @include transition;
  height: auto;
  margin: ($row-padding + 5px) auto;
  order: -1;
  width: min(90%, 300px);

  @include respond-to(medium-up) {
    margin: 0;
    order: initial;
  }

  @include hover {
    transform: scale(1.05);
  }

}

.nav-icon {
  height: 60px;
  width: 70px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100500;
  &:before, &:after {
    @include transition;
    border-top: 3px solid $inverted-color;
    content: '';
    display: block;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 30px;
  }
  &:before {
    border-bottom: 3px solid $inverted-color;
    height: 20px;
  }
  &.active {
    background: lighten($basic-color, 5%);
    &:before, &:after{
      margin-top: -2px;
      margin-left: -15px;
      width: 30px;
    }
    &:before {
      border-bottom: none;
      height: auto;
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  @include respond-to(medium-up) {
    display: none !important;
  }
}

.nav-btn {
  background: $inverted-color;
  color: $basic-color;
  position: absolute;
  right: $row-padding;
  top: 14px;
  z-index: 1;

  @include respond-to(medium-up) {
    background: $first-color;
    color: $inverted-color;
    position: static;
  }
}
</style>