<template>
  <div class="btns sub-nav">
    <ButtonLink
        v-for="btn in btnList"
        :key="btn.title"
        :to="`#${btn.href}`"
        :ref="setLinksRef"
        :class="{
          'tag-active': currentSection === btn.href
        }"
        class="btn-small btn-rounded btn-inverted-basic"
        @click.stop="$emit('click', btn.href)"
    >
      {{ btn.title }}
    </ButtonLink>
  </div>
</template>

<script>
import ButtonLink from "@/components/UI/ButtonLink";
import {throttle} from "@/helpers/throttle";

export default {
  name: "SubNav",

  components: {ButtonLink},

  data() {
    return {
      linksRef: [],
      currentSection: '',
    }
  },

  props: {
    btnList: {
      type: Array,
      required: true,
    },
    sectionsRef: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setLinksRef(el) {
      if (el?.$el) {
        this.linksRef.push(el.$el)
      }
    },

    changeNav() {
      this.sectionsRef.forEach( section => {
        if (
            window.pageYOffset >= (section.offsetTop - 52) &&
            window.pageYOffset < (section.offsetTop + section.offsetHeight)
        ) {
          this.currentSection = section.id.split('-')[0]
        }
      })
    },
  },

  mounted() {
    window.addEventListener('scroll', throttle(this.changeNav, 200))
    console.log(this.linksRef)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', throttle(this.changeNav, 200))
  },
}
</script>

<style lang="scss" scoped>

.sub-nav{
  background: $inverted-color;
  align-items: center;
  height: 52px;
  padding: $offset/2 0;
}
.fixed {
  box-shadow: $box-shadow;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>