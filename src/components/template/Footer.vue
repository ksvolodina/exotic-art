<template>
  <footer>

    <div class="row footer-contacts">

      <ContactsLinks
        template-locate="footer"
      />

      <ul class="social-icons">
        <li><a href="https://www.instagram.com/exotic_art_show" class="ig-icon" title="Exotic Art в Инстаграм" target="_blank"></a></li>
        <li><a href="https://vk.com/exotic_art_show" class="vk-icon" title="Exotic Art Вконтакте" target="_blank"></a></li>
        <li><a href="https://www.youtube.com/channel/UCuC_ZwaYe4eZKvQ40zEVEMw?view_as=subscriber" class="youtube-icon" title="канал Exotic Art на Youtube" target="_blank"></a></li>
      </ul>

    </div>

    <div class="row top-line description footer-links">
      <RouterLink to="" class="link-white">Договор-оферта</RouterLink>
      <RouterLink to="" class="link-white">Политика конфеденциальности</RouterLink>
      <RouterLink to="" class="link-white">Согласие на обработку персональных данных</RouterLink>
    </div>
  </footer>
</template>

<script>
import ContactsLinks from "@/components/template/ContactsLinks";

export default {
  name: "Footer",
  components: {ContactsLinks},
}
</script>

<style lang="scss" scoped>
footer {
  background: $first-color;
  color: $inverted-color;
  padding: $offset 0;
}

.footer-contacts {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;

  @include respond-to(medium-up) {
    flex-direction: row;
    align-items: center;
  }

  .contacts {
    margin: 0;
  }
}

.footer-links{
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  opacity: .7;
}

.social-icons{
  display: flex;
  gap: 10px;

  [class*="-icon"]{
    background: url('~@/assets/img/social-icons.png') no-repeat;
    display: inline-block;
    height: 40px;
    opacity: .8;
    vertical-align: middle;
    width: 40px;

    @include hover {
      opacity: 1;
    }
  }
  .vk-icon{
    background-position: 0 0;
  }
  //.fb-icon{
  //  background-position: -45px 0;
  //}
  .ig-icon{
    background-position: -90px 0;
  }
  .youtube-icon{
    background-position: -135px 0;
  }
}

</style>