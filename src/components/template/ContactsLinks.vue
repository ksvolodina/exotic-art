<template>
  <ul class="contacts">
    <li v-if="smallScreen" class="contacts-item">
      <a
          href="https://t.me/kseniasamba"
          class="btn btn-small btn-rounded"
          :class="isFooter ? 'btn-inverted' : 'btn-inverted-basic'"
      >
        Telegram
      </a>
    </li>

    <li v-if="smallScreen"  class="contacts-item">
      <a
          href="https://wa.me/79817752781"
          class="btn btn-small btn-rounded"
          :class="isFooter ? 'btn-inverted' : 'btn-inverted-basic'"
      >
        WhatsApp
      </a>
    </li>

    <li v-if="!smallScreen && !isFooter" class="contacts-item">
      Санкт-Петербург
    </li>

    <li class="contacts-item">
      <a
          v-if="smallScreen"
          href="tel:+79817752781"
          class="btn btn-small btn-rounded"
          :class="isFooter ? 'btn-inverted' : 'btn-inverted-basic'"
      >
        Позвонить
      </a>
      <a
          v-else href="tel:+79817752781"
          :class="isFooter ? 'link-white' : 'link'"
      >
        +7 (981) 775-27-81
      </a>
    </li>

    <li v-if="!smallScreen && isFooter">
      <a href="mailto:exotic.art.show@gmail.com" class="link-white">
        exotic.art.show@gmail.com
      </a>
    </li>

  </ul>
</template>

<script>
export default {
  name: "ContactsLinks",

  props: {
    smallScreen: {
      type: Boolean,
      required: true,
    },
    templateLocate: {
      type: String,
      default: 'header'
    }
  },

  computed: {
    isFooter() {
      return this.templateLocate === 'footer'
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;

  @include respond-to(medium-up) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0;
    margin: 0;
  }
}

.contacts-item {
  @include respond-to(medium-up) {
    margin-bottom: 0;
    width: 100%;
  }
}
</style>