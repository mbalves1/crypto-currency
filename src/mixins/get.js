import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      coins: ''
    }
  },
  methods: {
    ...mapMutations('Coin', {
      setCoin: 'SET_COIN'
    }),
    getCoin () {
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdacxi%2Ccosmos%2Cterra-luna&vs_currencies=usd&include_24hr_vol=true&include_market_cap=true')
        .then((data) => {
          this.coins = data.data
          this.setCoin(data.data)
        })
        .catch((err) => {
          console.log('err', err)
        })
    }
  }
}
