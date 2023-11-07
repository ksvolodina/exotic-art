<template>
  <h1 class="row">О нас</h1>

  <div class="row flex-center offset-bottom">
    <div class="medium-8">
      <VideoItem src="https://player.vimeo.com/video/850249149?h=d8328e8695"/>
    </div>
  </div>

  <div class="row offset-bottom text-center">
    <p class="medium-8 large-6 centered">
      Мы работаем уже 7 лет, с 2016 года, и начинали как восточное шоу, однако великолепие бразильских
      карнавальных костюмов, а также энергия самбы затянула нас во всю эту безумную историю с поездками
      в Бразилию и постоянным участием в карнавале Рио-де-Жанейро. В итоге мы изменили свое направление
      на такое уникальное для России, как бразильская карнавальная самба, о чем ни секунды не жалеем.
    </p>
    <p class="medium-8 large-6 centered">
      Актуальный состав шоу представлен ниже, нас всего 4 человека. У нас нет вторых составов, так что
      к вам на мероприятие приедем именно мы и никто другой! Позже мы расскажем немного о каждом танцоре,
      а пока знакомьтесь ❤
    </p>
  </div>

  <div class="row">
    <ul class="flex-wrap">
      <li
          class="show col medium-6"
          v-for="person in team"
          :key="person.title"
      >
        <ImgItem
            tag="div"
            :title="person.title"
            :img-src="person.img"
            show-img-title="show-img-title"
        />
      </li>
    </ul>
  </div>

  <BeforeFooter class="offset-top"/>
</template>

<script>
import BeforeFooter from "@/components/BeforeFooter";
import VideoItem from "@/components/VideoItem";
import ImgItem from "@/components/ImgItem";
import {team} from "@/info/team";

export default {
  name: "About",
  components: {ImgItem, VideoItem, BeforeFooter},

  data() {
    return {
      team: team,
    }
  },
}
</script>

<style lang="scss" scoped>
.show-img-title {
  background: linear-gradient(0deg, $basic-color-dark 0%, transparent);
  bottom: 0;
  color: $inverted-color;
  display: block;
  left: 0;
  margin-bottom: 0;
  padding: 60px $offset $offset;
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  z-index: 5;
}
</style>