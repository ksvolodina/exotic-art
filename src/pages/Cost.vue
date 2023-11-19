<template>

  <div class="row text-center">
    <h1>Стоимость</h1>
    <p class="offset-bottom">
      Цены, приведенные ниже, действуют только в пределах КАД г. Санкт-Петербурга.<br>
      Стоимость выездов в ЛО оговаривается отдельно и зависит от дальности.<br>
      <span>Цены на предновогодние даты не меняются.</span>
    </p>

    <div class="sub-nav-wrap medium-up-hide offset-bottom">
      <SubNav
          ref="subNav"
          :btn-list="btns"
          :sections-ref="sectionsRef"
          :class="{
            'fixed': isIntersection
          }"
          @click="scrollToSection"
      />
    </div>
  </div>

  <CostSection
      v-for="(section, index) in sections"
      :key="section.id"
      :section="section"
      :class="{
        'light-block': index%2 === 0
      }"
      :ref="setSectionsRef"
    >

      <ul v-if="index === 0" class="flex-wrap">
        <li
            v-for="cost in cost"
            :key="cost.title"
            class="col medium-4 text-center"
        >
          <CostItem :cost="cost"/>
        </li>
      </ul>

      <div v-if="index === 1" class="flex-wrap">
        <div class="col medium-6 large-4 text-center">
          <table>
            <tr>
              <th colspan="2">
                Без смены костюма
                <p class="description">
                  (используется один из тех, что будет в выбранных вами номерах):
                </p>
              </th>
            </tr>
            <tr>
              <td>2 артиста, 1 час</td>
              <td>10 000</td>
            </tr>
          </table>
        </div>
        <div class="col medium-6 large-4 text-center">
          <table>
            <tr>
              <th colspan="2">
                Со сменой костюма
                <p class="description">
                  (используется костюм, которого не будет в выбранных вами номерах):
                </p>
              </th>
            </tr>
            <tr>
              <td>2 артиста, 1 час</td>
              <td>15 000</td>
            </tr>
          </table>
        </div>
      </div>

      <table v-if="index === 2" class="medium-6 large-4 centered">
        <tr>
          <td>2 артиста, 1 час</td>
          <td>15 000</td>
        </tr>
      </table>

      <table v-if="index === 3" class="medium-6 large-4 centered">
        <tr>
          <th></th>
          <th>2 выхода</th>
          <th>3 выхода</th>
        </tr>
        <tr>
          <td>2 артиста</td>
          <td>20 000</td>
          <td>25 000</td>
        </tr>
      </table>
    </CostSection>

  <section
      :ref="setSectionsRef"
      id="payment"
      class="section top-line top-line-colored top-line-large offset-bottom"
  >
    <div class="row">
      <h2 class="h1 offset-top-0">Варианты оплаты</h2>

      <p class="medium-6 large-8 text-center centered offset-bottom-small">
        Мы работаем по предоплате от 50%.<br>
        До оплаты заказа необходимо утвердить все детали и убедиться,
        что вы сможете предоставить нам <RouterLink to="/how" class="link">гримерную</RouterLink> .
      </p>

      <ul class="list-colored">
        <li
            v-for="payment in payments"
            :key="payment.title"
            class="list-colored-item"
        >
          <h3 class="text-left">{{ payment.title }}</h3>
          <ul class="txt">
            <li
                v-for="condition in payment.conditions"
                :key="condition"
                v-html="condition"
            />
          </ul>
        </li>
      </ul>
    </div>
  </section>

  <BeforeFooter/>

</template>

<script>
import {btns, cost, payment, sections} from "@/info/cost";
import BeforeFooter from "@/components/BeforeFooter";
import CostItem from "@/components/CostItem";
import ButtonLink from "@/components/UI/ButtonLink";
import CostSection from "@/components/CostSection";
import SubNav from "@/components/SubNav";
import {throttle} from "@/helpers/throttle";

export default {
  name: "Cost",

  components: {SubNav, CostSection, ButtonLink, CostItem, BeforeFooter},

  data() {
    return {
      cost,
      btns,
      sections,
      payments: payment,
      subNavTop: 0,
      isIntersection: false,
      sectionsRef: [],
    }
  },

  methods: {

    setSectionsRef(el) {
      if (!el) return

      if (el.$el) {
        this.sectionsRef.push(el.$el)
      } else {
        this.sectionsRef.push(el)
      }
    },

    addFixed() {
      if (window.pageYOffset >= this.subNavTop) {
        this.isIntersection = true
      }
      if (window.pageYOffset < this.subNavTop) {
        this.isIntersection = false
      }
    },

    scrollToSection(href) {
      const sectionTop = this.sectionsRef.find(section => section.id === href).offsetTop
      window.scrollTo({
        top: sectionTop - 50,
        behavior: 'smooth'
      });
    },

  },

  mounted() {
    this.subNavTop = this.$refs.subNav?.$el.getBoundingClientRect().top
    window.addEventListener('scroll', throttle(this.addFixed, 100))
  },

  beforeDestroy() {
    window.removeEventListener('scroll', throttle(this.addFixed, 100))
  },
}
</script>

<style lang="scss" scoped>
.list-colored {
  @include respond-to(medium-up) {
    display: table;
    margin-left: auto;
    margin-right: auto;
    width: auto;
  }
}

.top-line.section {
  margin-top: 0;
}
.sub-nav-wrap {
  height: 52px;
}
</style>