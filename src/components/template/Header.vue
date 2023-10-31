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
    />

    <ul class="contacts">
      <li v-if="smallScreen" class="contacts-item">
        <a href="https://t.me/kseniasamba" class="btn btn-small btn-white btn-rounded">Telegram</a>
      </li>

      <li v-if="smallScreen"  class="contacts-item">
        <a href="https://wa.me/79817752781" class="btn btn-small btn-white btn-rounded">WhatsApp</a>
      </li>

      <li v-if="!smallScreen" class="contacts-item">
        <span class="">Санкт-Петербург</span>
      </li>

      <li class="contacts-item">
        <a v-if="smallScreen" href="tel:+79817752781" class="btn btn-small btn-white btn-rounded">Позвонить</a>
        <a v-else href="tel:+79817752781">+7 (981) 775-27-81</a>
      </li>
    </ul>

    <RouterLink to="/" class="logo" title="На главную">
      <img src="@/assets/logo.svg" alt="">
    </RouterLink>

    <RouterLink to="/contacts" class="btn nav-btn">Заказать шоу</RouterLink>

  </header>
</template>

<script>
import Button from "@/components/UI/Button";
import Nav from "@/components/template/Nav";

export default {
  name: "Header",
  components: {Nav, Button},

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
}
</script>

<style scoped>
</style>