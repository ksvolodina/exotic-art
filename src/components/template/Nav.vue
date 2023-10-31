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

<style scoped>

</style>