<template>
  <div class="light-block text-center">
    <div class="row">

      <h2 class="offset-bottom-small">Мы рады быть частью ваших событий!</h2>

      <p class="offset-bottom-small">
        На Вашем мероприятии все должно быть идеально.<br>
        Позвольте себе насладиться красотой.
      </p>

      <ButtonLink to="/contacts">Заказать шоу</ButtonLink>

    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";

export default {
  name: "BeforeFooter",
  components: {ButtonLink},
}
</script>

<style lang="scss" scoped>
</style>