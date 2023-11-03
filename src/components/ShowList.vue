<template>
    <ul class="flex-wrap">
      <li
          class="show col medium-6 large-4"
          v-for="show in shows"
          :key="show.slug"
      >
        <ImgItem
            :title="show.title"
            :subtitle="show.subtitle"
            :link-src="`/shows/${show.slug}`"
            :img-src="show.imageList"
            :img-alt="show.alt"
        />
      </li>
    </ul>
</template>

<script>
import ImgItem from "@/components/ImgItem";

export default {
  name: "ShowList",
  components: {ImgItem},
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