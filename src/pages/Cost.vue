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
          :btns-list="btns"
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

  <section id="payment" class="section top-line top-line-colored top-line-large offset-bottom">
    <div class="row">
      <h2 class="h1 offset-top-0">Варианты оплаты</h2>

      <p class="medium-6 large-8 text-center centered offset-bottom-small">
        Мы работаем по предоплате от 50%.<br>
        До оплаты заказа необходимо утвердить все детали и убедиться,
        что вы сможете предоставить нам <RouterLink to="/how" class="link">гримерную</RouterLink> .
      </p>

      <ul class="colored">
        <li
            v-for="payment in payments"
            :key="payment.title"
            class="colored-li"
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
      const isSubNavFixed = subNav?.classList.contains('fixed')

      if (subNav && window.pageYOffset >= this.subNavTop && !isSubNavFixed) {
        subNav.classList.add('fixed')
      }
      if (window.pageYOffset < this.subNavTop && isSubNavFixed) {
        subNav.classList.remove('fixed')
      }
    },

    scrollToSection(event) {
      const idTarget = event.target.href.split('#').at(-1)
      const sectionTop = document.getElementById(idTarget).offsetTop

      window.scrollTo({
        top: sectionTop - 50,
        behavior: 'smooth'
      });
    },

    changeNav() {
      const links = document.querySelectorAll('.btns a')

      document.querySelectorAll('section').forEach( section => {
        if (
            window.pageYOffset >= (section.offsetTop - 52) &&
            window.pageYOffset < (section.offsetTop + section.offsetHeight)
        ) {
          links.forEach( link => {
            link.classList.remove('tag-active')
            const linkHref = link.href.split('#').at(-1)
            const sectionId = section.id.split('-')[0]
            if (sectionId === linkHref) {
              link.classList.add('tag-active')
            }
          })
        }
      })
    },

  },

  mounted() {
    this.subNavTop = this.$refs.subNav?.$el.getBoundingClientRect().top
    window.addEventListener('scroll', throttle(this.addFixed, 100))
    window.addEventListener('scroll', throttle(this.changeNav, 200))
  },

  beforeDestroy() {
    window.removeEventListener('scroll', throttle(this.addFixed, 100))
    window.removeEventListener('scroll', throttle(this.changeNav, 200))
  },

}
</script>

<style lang="scss" scoped>
.colored{
  margin-left: $offset;

  &-li {
    line-height: 1.6;
    position: relative;
    padding-bottom: $offset;

    &:last-child {
      padding-bottom: 0;
      &:after {
        height: calc(100% - 6px);
      }
    }

    &:before {
      background: $first-color;
      border-radius: 50%;
      content: '';
      display: block;
      height: 8px;
      position: absolute;
      left: -20px;
      top: 6px;
      width: 8px;
      z-index: 10;
    }

    &:after {
      background: $first-color;
      content: '';
      display: block;
      height: 100%;
      top: 6px;
      left: -17px;
      position: absolute;
      width: 2px;
    }
  }

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