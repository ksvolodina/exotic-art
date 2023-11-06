<template>
  <div class="row text-center border-bottom negative">
    <h1>Стоимость</h1>
    <p class="offset-bottom">
      Цены, приведенные ниже, действуют только в пределах КАД г. Санкт-Петербурга.<br>
      Стоимость выездов в ЛО оговаривается отдельно и зависит от дальности.<br>
      <span>Цены на предновогодние даты не меняются.</span>
    </p>

    <SubNav
        ref="subNav"
        :btns-list="btns"
        class="medium-up-hide"
    />
  </div>

  <div
      v-for="(section, index) in sections"
      :key="section.id"
  >
    <CostSection
        :section="section"
        :class="{
          'light-block': index%2 === 0
        }"
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
  </div>

  <section class="top-line top-line-colored top-line-large offset-bottom">
    <div class="row">
      <h2 id="payment" class="h1 offset-top-0">Варианты оплаты</h2>

      <p class="medium-6 large-8 text-center centered offset-bottom-small">
        Мы работаем по предоплате от 50%.<br>
        До оплаты заказа необходимо утвердить все детали и убедиться,
        что вы сможете предоставить нам <RouterLink to="/how" class="link">гримерную</RouterLink> .
      </p>

      <ul class="colored">
        <li
            v-for="payment in payments"
            :key="payment.title"
        >
          <h3 class="text-left">{{ payment.title }}</h3>
          <ul class="txt offset-bottom-small">
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
      cost: cost,
      btns: btns,
      sections: sections,
      payments: payment,
      subNavTop: 0,
    }
  },

  methods: {
    addFixed() {
      const subNav = this.$refs.subNav?.$el
      if (window.pageYOffset >= this.subNavTop && !subNav?.classList.contains('fixed')) {
        subNav.classList.add('fixed')
      }
      if (window.pageYOffset < this.subNavTop && subNav?.classList.contains('fixed')) {
        subNav.classList.remove('fixed')
      }
    },
  },

  mounted() {
    this.subNavTop = this.$refs.subNav.$el?.offsetTop
    window.addEventListener('scroll', throttle(this.addFixed, 100))
  },

  beforeDestroy() {
    window.removeEventListener('scroll', throttle(this.addFixed, 100))
  },
}
</script>

<style lang="scss" scoped>
ul.colored{
  margin-left: 20px;
  & > li{
    line-height: 1.6;
    position: relative;
    padding-bottom: 10px;
    &:before{
      background: $first-color;
      border-radius: 50%;
      content: '';
      display: block;
      height: 8px;
      position: absolute;
      left: -20px;
      top: 8px;
      width: 8px;
      z-index: 10;
    }
    &:after{
      background: $first-color;
      content: '';
      display: block;
      height: 120%;
      top: 8px;
      left: -17px;
      position: absolute;
      width: 2px;
    }
    &:last-child:after{
      background: $inverted-color;
    }
  }
}
</style>