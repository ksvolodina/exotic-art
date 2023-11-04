<template>
  <h1 class="row">О нас</h1>

  <div class="row flex-center offset-bottom">
    <div class="medium-8">
      <VideoItem src="https://player.vimeo.com/video/850249149?h=d8328e8695"/>
    </div>
  </div>

  <div class="row flex-center offset-bottom">
    <p class="medium-6 text-center">
      Мы работаем уже 7 лет, с 2016 года, и начинали как восточное шоу, однако великолепие бразильских
      карнавальных костюмов, а также энергия самбы затянула нас во всю эту безумную историю с поездками
      в Бразилию и постоянным участием в карнавале Рио-де-Жанейро. В итоге мы изменили свое направление
      на такое уникальное для России, как бразильская карнавальная самба, о чем ни секунды не жалеем.

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
        />
      </li>
    </ul>
  </div>


  <BeforeFooter/>
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

<style scoped>

</style>