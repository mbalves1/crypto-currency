<template>
  <div class="q-pa-md">
    <div v-for="(i, index) in coins" :key="i" class="cards">
      <q-card
        class="cards--card text-black"
      >
        <q-card-section>
          <div class="text-h6">{{index}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{i.usd}}
          {{i.usd_market_cap}}
          {{i.usd_24h_vol}}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'

export default {
  created () {
    this.getCoin()
    setTimeout(() => this.getCoin(), 2000)
  },
  data () {
    return {
      name: ['Bitcoin', 'Ethereum', 'Atom', 'Luna', 'Daxci'],
      coins: {
        bitcoin: {},
        ethereum: {},
        cosmos: {}
      }
    }
  },
  computed: {
    ...mapState('Coin', {
      coinsObject: 'coin'
    }),
    format (value) {
      return value.toString().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
  },
  methods: {
    getCoin () {
      console.log('chamei')
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd&include_24hr_vol=true&include_market_cap=true')
        .then((data) => {
          console.log('data', data)
          this.coins = data.data
        })
        .catch((err) => {
          console.log('err', err)
        })
    }
  }
}
</script>
<style scoped>
.cards {
  display: grid;
  width: 200px;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
