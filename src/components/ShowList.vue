<template>

    <ul class="shows">
      <li
          class="col show"
          v-for="show in shows"
          :show="show"
          :key="show.slug"
      >
        <RouterLink :to="'/shows/'+show.slug" class="show-link">

          <img
              src="@/assets/img/shows/brazil.png"
              alt=""
              class="show-img"
          >

          <h3 class="show-title">{{ show.title }}</h3>
          <p class="show-subtitle">{{ show.subtitle }}</p>

        </RouterLink>
      </li>

    </ul>

</template>

<script>

export default {
  name: "ShowList",

  props: {
    shows: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.shows {
  @include row-reset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.show {
  width: 100%;
  @include respond-to(medium-up) {
    width: percentage(1/2);
  }
  @include respond-to(large-up) {
    width: percentage(1/3);
  }

  &-link {
    @include img-wrapper;
    @include block-hover;
    @include block-hover-height;
    height: 350px;
    display: flex;
    position: relative;
    text-align: center;

    @include hover {
      .show-subtitle{
        opacity: 1;
      }
    }

    @include respond-to(large-up) {
      height: 400px;
    }
    @include respond-to(xlarge-up) {
      height: 500px;
    }

  }

  &-title {
    background: linear-gradient(0deg, $basic-color-dark 0%, transparent);
    bottom: 0;
    color: $inverted-color;
    left: 0;
    margin-bottom: 0;
    opacity: 1;
    padding: 60px $offset $offset;
    position: absolute;
    text-transform: uppercase;
    width: 100%;
    z-index: 5;
  }

  &-subtitle {
    bottom: 0;
    opacity: 1;
    padding: 10px $offset;
    text-transform: uppercase;
    transform: translate(-50%, 0);
    width: 100%;

    @include respond-to(medium-up) {
      bottom: 50%;
      color: $inverted-color;
      font-weight: 500;
      left: 50%;
      margin-bottom: 0;
      opacity: 0;
      position: absolute;
      text-transform: none;
      transform: translate(-50%, 50%);
      width: 50%;
      z-index: 6;
    }
  }

  &-img {
    //height: 500px;
    height: 100%;
    max-width: none;
    width: auto;
  }
}

//@include respond-to(custom-medium-down){
//  p:not(.title){
//    display: none;
//  }
//}
//@include respond-to(custom-small-down){
//  .show-item{
//    height: 350px;
//  }
//}
//@include respond-to(custom-xsmall-down){
//  .show-item{
//    height: 250px;
//  }
//}

</style>