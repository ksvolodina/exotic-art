<template>
  <h4 class="cost-title">{{ cost.title }}</h4>
  <table class="cost-info">
    <tr>
      <td>1 номер</td>
      <td>{{ cost.one }}</td>
    </tr>
    <tr>
      <td>2 номера</td>
      <td>{{ cost.two }}</td>
    </tr>
    <tr>
      <td>3 номера</td>
      <td>{{ cost.three }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "CostItem",

  props: {
    cost: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.cost {

  &-title {
    margin-bottom: 0;
    padding: 10px;

    @include respond-to(medium-up) {
      background: $first-color;
      color: $inverted-color;
      margin: 0 -10px;
      position: relative;

      &:before, &:after{
        border: 5px solid transparent;
        border-top-color: $first-color-dark;
        bottom: -9px;
        content: '';
        display: block;
        height: 0;
        position: absolute;
        width: 0;
      }
      &:before{
        border-right-color: $first-color-dark;
        left: 0;
      }
      &:after{
        border-left-color: $first-color-dark;
        right: 0;
      }
    }
  }

  &-info {
    position: relative;
    z-index: 2;

    //@include respond-to(medium-up) {
    //  border: none;
    //}
  }

}
</style>