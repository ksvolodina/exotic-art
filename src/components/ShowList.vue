<template>
    <ul class="flex-wrap">
      <li
          class="show col medium-2 large-3"
          v-for="show in shows"
          :key="show.slug"
      >
        <ShowItem :show="show"/>
      </li>
    </ul>
</template>

<script>

import ShowItem from "@/components/ShowItem";
export default {
  name: "ShowList",
  components: {ShowItem},
  props: {
    shows: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.show {
  width: 100%;
}
</style>