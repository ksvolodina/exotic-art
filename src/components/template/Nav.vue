<template>
  <nav>
    <ul class="nav-list row">
      <li
          v-for="link in links"
          :key="link.path"
          class="full-width"
      >
        <RouterLink
            :to="link.path"
            exact-active-class="active"
            class="nav-item"
        >
          {{ link.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
      links: [
        {
          name: 'Репертуар',
          path: '/shows'
        },
        {
          name: 'Стоимость',
          path: '/cost'
        },
        {
          name: 'Как мы работаем',
          path: '/how'
        },
        {
          name: 'Блог',
          path: '/blog'
        },
        {
          name: 'Контакты',
          path: '/contacts'
        },
        {
          name: 'О нас',
          path: '/about'
        },
      ]
    }
  },


}
</script>

<style lang="scss" scoped>
nav {
  @include transition;
  @include row-reset;
  background: lighten($basic-color, 5%);
  color: $inverted-color;
  max-height: 0;
  opacity: 0;
  order: -1;
  z-index: -1;

  &.active{
    max-height: 300px;
    opacity: 1;
    z-index: 1;
  }

  @include respond-to(medium-up) {
    background: $light-color;
    color: $basic-color;
    max-height: none;
    margin: 0;
    order: inherit;
    opacity: 1;
    z-index: 1;
  }
}

.nav-list {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;

  @include respond-to(medium-up) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}

.nav-item {
  @include transition;
  display: block;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;

  &:not(:last-child) {
    border-bottom: 1px solid transparentize($inverted-color, .9);
  }

  &.active {
    border-top-color: transparent;
    &:before, &:after {
      border: 1px solid $inverted-color;
      content: '';
      display: inline-block;
      height: 5px;
      margin-top: 5px;
      margin-right: -5px;
      transform: rotate(-45deg) translate(0, -100%);
      vertical-align: middle;
      width: 5px;
    }
    &:before {
      border-left-width: 0;
      border-top-width: 0;
      margin-right: 10px;
      position: static;
    }
    &:after {
      border-right-width: 0;
      border-bottom-width: 0;
      margin-left: 20px;
    }
  }

  @include respond-to(medium-only) {
    font-size: 14px;
    padding: 5px 0;
  }

  @include respond-to(medium-up) {
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    &.active{
      border-top-color: $basic-color;
      &:before{
        border: 8px solid transparent;
        border-top: 6px solid $basic-color;
        content: '';
        display: block;
        left: 50%;
        margin-left: -4px;
        margin-top: 0;
        position: absolute;
        top: -2px;
        transform: none;
        height: auto;
        width: auto;
      }
      &:after{
        display: none;
      }
    }
  }
  @include hover {
    border-top-color: $basic-color;
  }
}
</style>