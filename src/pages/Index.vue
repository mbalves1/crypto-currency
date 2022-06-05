<template>
  <div>
    <Header></Header>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <div>
            <img src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" />
            Bitcoin
            <!-- {{this.coin.bitcoin.usd || 0}} -->
          </div>
        </div>
        <div class="slide">
          <div>
            <img src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" />
            Ethereum
            <!-- {{this.coin.ethereum.usd || 0}} -->
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 10px" src="https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471" />
            <!-- {{this.coin.dacxi.usd || 0}} -->
            Dacxi
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960" />
            <!-- {{this.coin.cosmos.usd || 0}} -->
            Cosmos
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/22951/small/LUNA_wh_small.png?1644226405" />
            <!-- {{this.coin|| 0}} -->
            Luna
          </div>
        </div>
        <div class="slide">
          <div>
            <img src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" />
            <!-- {{this.coin.bitcoin.usd || 0}} -->
            Bitcoin
          </div>
        </div>
        <div class="slide">
          <div>
            <img src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" />
            <!-- {{this.coin.ethereum.usd || 0}} -->
            Ethereum
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 10px" src="https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471" />
            <!-- {{this.coin.dacxi.usd || 0}} -->
            Dacxi
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960" />
            <!-- {{this.coin.cosmos.usd || 0}} -->
            Cosmos
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/22951/small/LUNA_wh_small.png?1644226405" />
            <!-- {{this.coin|| 0}} -->
            Luna
          </div>
        </div>
        <div class="slide">
          <div>
            <img src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" />
            <!-- {{this.coin.ethereum.usd || 0}} -->
            Ethereum
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 10px" src="https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471" />
            <!-- {{this.coin.dacxi.usd || 0}} -->
            Dacxi
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960" />
            <!-- {{this.coin.cosmos.usd || 0}} -->
            Cosmos
          </div>
        </div>
        <div class="slide">
          <div>
            <img style="width: 30px" src="https://assets.coingecko.com/coins/images/22951/small/LUNA_wh_small.png?1644226405" />
            <!-- {{this.coin|| 0}} -->
            Luna
          </div>
        </div>
      </div>
    </div>
    <!-- <q-page class="flex flex-center"> -->
    <Content></Content>

    <!-- </q-page> -->
</div>
</template>

<script>
import Header from 'src/components/Header.vue'
import { defineComponent } from 'vue'

import Content from 'src/components/Content.vue'
import get from 'src/mixins/get.js'
import { mapState } from 'vuex'

export default defineComponent({
  components: { Header, Content },
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
