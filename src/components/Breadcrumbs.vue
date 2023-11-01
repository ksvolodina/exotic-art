<template>
  <div class="row breadcrumbs">
    <a href="#" class="breadcrumbs-link link">Репертуар</a>
    <span>Антре</span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",

}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  color: $basic-color-light;
  font-size: 13px;
  line-height: 1.3;
  padding-top: 14px;
  padding-bottom: 9px;
  text-align: center;

  @include respond-to(medium-up) {
    text-align: left;
  }

  &-link {
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 5px;
    position: relative;
    &:after{
      content: '\203a';
      position: absolute;
      right: -10px;
    }
  }
}


</style>