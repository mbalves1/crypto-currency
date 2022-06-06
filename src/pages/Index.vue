<template>
  <div>
    <Header></Header>
    <div class="slider">
      <div class="slide-track">
        <div class="slide" v-for="(i, index) in coin" :key="i">
          <div class="q-pa-md">
            {{index}}
          </div>
        </div>
      </div>
    </div>
    <!-- <q-page class="flex flex-center"> -->
    <div class="container" style="height: 100vh; overflow-y: scroll">
      <Content></Content>
      <Filter></Filter>
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
  created () {
    this.getCoin()
    console.log('get coin', this.coin)
  },
  computed: {
    ...mapState('Coin', {
      coin: 'coin'
    })
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
