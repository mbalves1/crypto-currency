<template>
  <div class="q-pa-md boxx">
    <div v-for="(i, index) in coins" :key="i" class="boxx--cards">
      <q-card
        class="boxx--cards--card text-black"
      >
        <q-card-section>
          <div class="text-h6 q-ma-sm">
            <img class="q-mr-sm" v-if="index === 'bitcoin'" src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" />
            <img class="q-mr-sm" v-if="index === 'ethereum'" src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" />
            <img class="q-mr-sm" v-if="index === 'dacxi'" style="width: 30px" src="https://assets.coingecko.com/coins/images/4466/small/dacxi.png?1639042471" />
            <img class="q-mr-sm" v-if="index === 'cosmos'" style="width: 30px" src="https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960" />
            <img class="q-mr-sm" v-if="index === 'terra-luna'" style="width: 30px" src="https://assets.coingecko.com/coins/images/22951/small/LUNA_wh_small.png?1644226405" />
            <span style="text-transform: capitalize"> {{index}}</span>
          </div>
        </q-card-section>
        <q-separator ></q-separator>

        <q-card-section class="q-pt-sm">
          <span style="font-weight: 500">Price</span> - U$ {{format(i.usd)}}<br />
          <span style="font-weight: 500">Mkt Cap</span> - U${{format(i.usd_market_cap)}}<br />
          <span style="font-weight: 500">Vol in 24H</span> - U${{format(i.usd_24h_vol)}}<br />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapMutations, mapState } from 'vuex'

export default {
  created () {
    this.getCoin()
    this.timer = setInterval(this.getCoin, 20000)
  },
  data () {
    return {
      name: ['Bitcoin', 'Ethereum', 'Atom', 'Luna', 'Daxci'],
      coins: {
        bitcoin: {},
        ethereum: {},
        cosmos: {},
        timer: ''
      }
    }
  },
  computed: {
    ...mapState('Coin', {
      coinsObject: 'coin'
    })
  },
  methods: {
    ...mapMutations('Coin', {
      setCoin: 'SET_COIN'
    }),
    format (value) {
      return new Intl.NumberFormat('en-IN').format(value)
    },
    getCoin () {
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd&include_24hr_vol=true&include_market_cap=true')
        .then((data) => {
          this.coins = data.data
          this.setCoin(data.data)
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    cancelAutoUpdate () {
      clearInterval(this.timer)
    }
  },
  beforeUnmount () {
    this.cancelAutoUpdate()
  }
}
</script>
<style lang="scss" scoped>
.boxx {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  &--cards {
    display: grid;
    width: 290px;
    gap: 20px;
  }
}

@media (max-width: 631px) {
  .boxx {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
