<template>
  <div style="max-width: 400px;" class="box-content">
    <span class="box-content--title">
      <h4>History Crypto</h4>
      <div class="tooltip">
        <p>Do a search on the value of the currency</p>
        <span class="material-icons">
          info
          <q-tooltip>
              Choise a crypt
          </q-tooltip>
        </span>
      </div>
    </span>
    <div class="banner-response">
      <div>
        <div class="q-pt-md" style="max-width: 300px">
          <div class="q-gutter-md">
            <q-select filled v-model="model" :options="options" label="Currency" />
          </div>
        </div>
        <div class="q-pt-md" style="max-width: 300px">
          <q-input filled v-model="date">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="q-pt-md q-gutter-sm">
          <q-btn
            :loading="loading"
            color="primary"
            @click="getHistory"
            style="width: 150px"
          >
            History
            <template v-slot:loading>
              <q-spinner-gears class="on-left" />
              Search...
            </template>
          </q-btn>
          <q-btn
            :loading="loadingClean"
            color="primary"
            @click="cleanFilter"
            style="width: 150px"
          >
            Clean
            <template v-slot:loading>
              <q-spinner-gears class="on-left" />
              ...
            </template>
          </q-btn>
      </div>
      <div v-if="crypto.currentPrice !== ''" class="q-pa-md">
        <h6>Currency</h6>
        <div class="border">
          <span>{{crypto.name}} </span>
          <span> $ {{crypto.currentPrice}}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return {
      date: '',
      model: 'bitcoin',
      options: [
        'bitcoin', 'ethereum', 'cosmos', 'terra-luna', 'dacxi'
      ],
      loading: false,
      crypto: {
        currentPrice: '',
        name: '',
        symbol: ''
      },
      loadingClean: false
    }
  },
  methods: {
    getHistory () {
      this.loading = true
      const coin = this.model
      const date = moment(this.date).format('DD-MM-YYYY') || '10-10-2000'
      console.log('data', date)
      try {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`)
          .then((data) => {
            this.crypto.currentPrice = data.data.market_data.current_price.usd
            console.log('dta history', data.data)
            this.crypto.name = data.data.name
            this.loading = false
          })
      } catch (err) {
        this.loading = false
      }
    },
    cleanFilter () {
      this.loadingClean = true
      this.loading = false
      this.model = 'bitcoin'
      this.currentPrice = ''
      this.date = ''
      this.loadingClean = false
    }
  }
}
</script>

<style lang="scss" scoped>
h6 {
  margin: 0;
}
.box-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  // border: 2px solid var(--bs-gray);
  box-shadow: 0 8px 156px -50px var(--bs-gray);
  border-radius: 4px;
  &--title {
    h4 {
      margin: 12px 0 9px;
    }
  }
}
.border {
  border-left: 3px solid rgb(34, 38, 85);
  padding-left: 10px;
  border-radius: 2px;
  background: var(--bs-light);
  margin: 10px;
  padding: 10px;
}
.tooltip {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.banner-response {
  display: flex;
}
</style>
