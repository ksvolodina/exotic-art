<template>
  <div class="contacts-wrap">

    <img :src="manager.img"
         :alt="manager.title"
         class="contacts-img"
    >

    <div class="row">
      <div class="medium-7 large-6">

        <div class="contacts-title">
          <h1 class="h2 contacts-title-h1">Контакты</h1>
          <p>
            Здравствуйте! Меня зовут Ксения, я руководитель шоу, и я с удовольствием отвечу на все ваши вопросы :)
          </p>
          <p>
            А еще я обязательно буду на площадке в день вашего мероприятия, и, скорее всего, в качестве одного из артистов.
          </p>
          <p>
            Надеюсь, скоро увидимся!
          </p>
        </div>

        <div class="contacts-list">
          <div
              v-for="contact in contacts"
              :key="contact.title"
              class="contacts-item"
          >
            <b class="contacts-txt medium-up-show">
              {{ contact.title }}
            </b>
            <div class="contacts-txt">
              <a :href="contact.link">
                {{ contact.txt }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {contacts} from "@/info/contacts";
import ImgItem from "@/components/ImgItem";
import {manager} from "@/info/team";

export default {
  name: "Contacts",
  components: {ImgItem},
  data() {
    return {
      contacts: contacts,
      manager: manager
    }
  },
}
</script>

<style lang="scss" scoped>
.contacts {

  &-wrap {
    overflow: hidden;
    padding-top: 60px;
    position: relative;

    @include respond-to(medium-up) {
      padding-top: 0;
    }
  }

  &-img {
    margin-left: -8%;
    position: relative;
    transform: scale(1.3);
    z-index: -1;

    @include respond-to(medium-up) {
      height: 100%;
      left: 50%;
      margin-left: 0;
      max-width: none;
      position: absolute;
      transform: translate(-35%, -50%);
      top: 50%;
      width: auto;
    }

    @include respond-to(large-up) {
      transform: translate(-30%, -50%) scale(1.1);
    }

  }

  &-list, &-title {
    padding: $offset;
    @include respond-to(medium-up) {
      padding: $offset-large;
    }
  }

  &-title {
    @include row-reset;
    background: $first-color;
    color: $inverted-color;
    text-align: center;

    @include respond-to(medium-up) {
      box-shadow: 0 10px 10px -10px transparentize($basic-color, .4) inset;
      margin-right: 0;
    }

    @include respond-to(large-up) {
      margin-left: 0;
    }

    &-h1 {
      background: $inverted-color;
      color: $basic-color;
      font-size: 25px;
      padding: $offset 0;
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 0;
      margin-bottom: $offset;
      width: 100%;

      @include respond-to(medium-up) {
        background: none;
        color: inherit;
        padding: 0;
        position: static;
      }
    }

  }

  &-list {
    display: table;
    margin: 0 auto;
    width: auto;

    @include respond-to(medium-up) {
      background: linear-gradient(90deg, $inverted-color 60%, transparent);
    }
  }

  &-item {
    margin-bottom: $offset/2;
    @include respond-to(medium-up) {
      display: table-row;
    }
  }

  &-txt {
    text-align: center;
    @include respond-to(medium-up) {
      text-align: left;
      display: table-cell;
      padding: $offset/2;
    }
  }

}

</style>