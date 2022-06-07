<template>
  <div>
    <Header @open="drawer"></Header>
    <div class="slider">
      <div class="slide-track" style="z-index: 10">
        <div class="slide" v-for="(i, index) in coins" :key="i">
          <div class="q-pa-md">
            {{index}}
            {{i.usd}}
          </div>
        </div>
      </div>
    </div>
    <q-drawer side="right" v-model="openDrawer">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list separator>
          <q-item clickable v-ripple>
            <v-text>Dacxi</v-text>
          </q-item>

          <q-item clickable v-ripple @click="setCurrentContent">
            <q-item-section>
              <q-item-label>Price</q-item-label>
              <q-item-label caption>Follow the price in real time</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="setCurrentFilter">
            <q-item-section>
              <q-item-label>Historic</q-item-label>
              <q-item-label caption>Make history of the main crypto</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <!-- <q-page class="flex flex-center"> -->
    <div class="container" style="height: 100vh">
      <component :is="routeComponent"></component>
      <!-- <Content></Content>
      <Filter></Filter> -->
    </div>
    <!-- </q-page> -->
</div>
</template>

<script>
import { defineComponent } from 'vue'

// Componnet
import Header from 'src/components/Header.vue'
import Content from 'src/components/Content.vue'
import Filter from 'src/components/Filter.vue'

// mixins
import get from 'src/mixins/get.js'

// Lib
import { mapState } from 'vuex'

export default defineComponent({
  components: { Header, Content, Filter },
  mixins: [get],
  name: 'PageIndex',
  data () {
    return {
      openDrawer: false,
      routeComponent: 'Content'
    }
  },
  created () {
    this.getCoin()
    console.log('get cois', this.coin)
  },
  computed: {
    ...mapState('Coin', {
      coin: 'coin',
      current: 'current'
    })
  },
  methods: {
    setCurrentContent () {
      this.routeComponent = 'Content'
    },
    setCurrentFilter () {
      this.routeComponent = 'Filter'
    },
    drawer () {
      this.openDrawer = !this.openDrawer
    }
  }
})
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 350px;
}
/* body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
} */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 5));
  }
}
.slider {
  /* background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125); */
  height: 55px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 500px;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, var(--bs-light-gray) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 50px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 20s linear infinite;
  display: flex;
  width: calc(250px * 5);
}
.slider .slide {
  height: 100px;
  width: 100px;
  padding-left: 20px;
}
</style>
