<template>

  <div class="accordion">

    <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
    >
      <div
          class="accordion-title"
          :class="{
            'active': openAccordion.includes(index)
          }"
          @click="setActive(index)"
      >
        {{ item.title }}
      </div>

      <div class="accordion-content">
        <div v-html="item.contentTxt"/>
        <ul v-if="item.contentList" class="txt offset-top-small">
          <li
              v-for="(li, index) in item.contentList"
              :key="index"
          >
            {{ li }}
          </li>
        </ul>
        <p v-if="item.contentAddition" class="message offset-top-small">{{ item.contentAddition }}</p>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "Accordion",

  data() {
    return {
      openAccordion: [0],
    }
  },

  props: {
    items: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    setActive(index) {
      if (!this.openAccordion.includes(index)) {
        this.openAccordion.push(index)
      } else {
        this.openAccordion = this.openAccordion.filter(el => el !== index)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.accordion {

  &-item {
    border: $border;
    counter-increment: section;
    position: relative;

    &:not(:first-child) {
      border-top: none;
    }
  }

  &-title {
    @include transition;
    cursor: pointer;
    font-weight: 500;
    margin: -1px -1px 0;
    padding: $offset/2 46px $offset/2 $offset;
    position: relative;

    @include respond-to(medium-up) {
      text-transform: uppercase;
    }

    &:before {
      content: counter(section) '.';
      margin-right: $offset/2;

      @include respond-to(medium-up) {
        color: darken($light-color, 20%);
        content: counter(section);
        font-size: 30px;
        font-weight: 400;
        margin-right: 0;
        opacity: .8;
        position: absolute;
        left: -35px;
        top: 50%;
        transform: translate(0, -50%);
      }
    }

    &:after{
      @include transition;
      border: 2px solid $basic-color-light;
      border-right-width: 0;
      border-top-width: 0;
      content: '';
      display: block;
      height: 8px;
      position: absolute;
      right: $offset;
      top: 50%;
      --arrow-transform: rotate(-45deg) translate(0, -100%);
      transform: var(--arrow-transform);
      width: 8px;
    }

    @include hover {
      background: transparentize($first-color, .4);
      border-color: transparentize($first-color, .5);
      color: $inverted-color;
      &:after{
        border-color: $inverted-color;
      }
    }

    &.active {
      background: $first-color;
      border-color: $first-color;
      color: $inverted-color;

      &:after {
        transform: var(--arrow-transform) scale(-1, -1);
        border-color: $inverted-color;
        margin-top: 3px;
      }

      & + .accordion-content {
        opacity: 1;
        height: auto;
        max-height: 100%;
        padding: $offset 0;
      }
    }
  }

  &-content {
    @include transition;
    height: 0;
    max-height: 0;
    opacity: 0;
    & > * {
      margin: 0 $offset;
    }
  }
}
</style>