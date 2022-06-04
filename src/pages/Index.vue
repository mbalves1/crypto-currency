<template>
  <div>
    <Header></Header>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
        <div class="slide">
          <q-card>
            Btc - 11
          </q-card>
        </div>
      </div>
    </div>
    <q-page class="flex flex-center">
    <Content></Content>
    </q-page>
</div>
</template>

<script>
import Header from 'src/components/Header.vue'
import { defineComponent } from 'vue'

import Content from 'src/components/Content.vue'

export default defineComponent({
  components: { Header, Content },
  name: 'PageIndex'
})
</script>
<style>

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
/*   background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125); */
  height: 55px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 500px;
}
.slider::before, .slider::after {
/*   background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%); */
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
