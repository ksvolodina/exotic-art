<template>
  <div class="light-block text-center">
    <div class="row">

      <p class="h2">Мы рады быть частью ваших событий!</p>

      <p>
        На Вашем мероприятии все должно быть идеально.<br>
        Позвольте себе насладиться красотой.
      </p>

      <ButtonLink to="/contacts" class="offset-top-20">Заказать шоу</ButtonLink>

    </div>
  </div>
</template>

<script>
export default {
  name: "BeforeFooter",
}
</script>

<style lang="scss" scoped>
.light-block{
  background: $light-color;
  margin-top: $offset;
  padding: $offset 0;
  @include respond-to(medium-up){
    margin-top: $offset-large;
    padding: $offset-large 0;
  }
}
</style>