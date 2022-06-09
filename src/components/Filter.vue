<template>
<div class="box">
  <div style="max-width: 400px; margin-top: 50px" class="box-content">
    <span class="box-content--title">
      <h4>History Crypto</h4>
      <div class="tooltip">
        <p>First choose currency, then click calendar icon and choose date, then click clock icon and choose time</p>
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
                  <q-date v-model="date" mask="YYYY-MM-DD HH:mm" :event-color="(date) => date[9] % 2 === 0 ? 'blue' : 'orange'" today-btn>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Send" color="primary" flat />
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
        <div class="q-pt-md q-gutter-sm button">
          <q-btn
            :loading="loading"
            color="primary"
            @click="getHistory"
            style="width: 140px"
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
            style="width: 140px"
          >
            Clean
            <template v-slot:loading>
              <q-spinner-gears class="on-left" />
              ...
            </template>
          </q-btn>
      </div>
      <transition
        name="slide-fade">
        <div v-if="hasSearch" class="banner-response--currency">
          <h6>Currency</h6>
            <div class="border">
              <span>{{crypto.name}} </span>
              <span> {{format(crypto.currentPrice)}}</span>
            </div>
        </div>
      </transition>
    </div>
    </div>
  </div>
  <div v-if="arrayHistory.length > 0" class="box-history">
    <div style="display: flex; align-items: center; padding-bottom: 10px">
      <span>Logs</span>
      <div class="box-history--icon" @click="removeHistory">
        <q-icon name=close></q-icon>
      </div>
    </div>
    <div class="box-history--logs">
      <div v-for="i, index in arrayHistory" :key="index" class="box-history--content">
        <div>
          <span style="display: flex; flex-direction: row; padding: 10px">
            <span style="color: blue; margin-right: 15px">{{i[0]}}</span>
            <span style="margin-right: 15px">{{format(i[1])}}</span>
            {{i[2]}}
          </span>
        </div>
      </div>
    </div>
  </div>
  <q-dialog v-model="errorDate" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Please choose a valid date</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup @click="errorDate = false"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
   <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Would you like to save search logs?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="danger" v-close-popup />
          <q-btn flat label="Save register" color="primary" v-close-popup @click="saveRegister"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data () {
    return {
      date: '',
      today: moment(),
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
      loadingClean: false,
      hasSearch: false,
      saveRegisterToshow: false,
      arrayHistory: [
      ],
      confirm: false,
      errorDate: false
    }
  },
  methods: {
    getHistory () {
      this.loading = true
      const coin = this.model
      const date = moment(this.date).format('DD-MM-YYYY') || '10-10-2000'
      const today = moment().format('DD-MM-YYYY')
      if (date > today) {
        this.errorDate = true
        this.date = ''
        this.loading = false
      } else {
        try {
          axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`)
            .then((data) => {
              this.crypto.currentPrice = data.data.market_data.current_price.usd
              this.hasSearch = true
              this.crypto.name = data.data.name
              this.arrayHistory.push([data.data.name, data.data.market_data.current_price.usd, date])
              this.loading = false
            })
        } catch (err) {
          this.loading = false
        }
      }
    },
    removeHistory () {
      this.arrayHistory = []
    },
    cleanFilter () {
      this.loadingClean = true
      this.loading = false
      this.model = 'bitcoin'
      this.currentPrice = ''
      this.hasSearch = false
      this.date = ''
      this.loadingClean = false
    },
    format (value) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 9 }).format(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
h6 {
  margin: 0;
}
.box {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.box-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;
  // border: 2px solid var(--bs-gray);
  box-shadow: 0 8px 156px -50px var(--bs-gray);
  border-radius: 4px;
  &--title {
    h4 {
      margin: 12px 0 9px;
      text-align: center;
    }
  }
}

.box-history {
  margin-top: 50px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  // border: 2px solid var(--bs-gray);
  box-shadow: 0 8px 156px -50px var(--bs-gray);
  border-radius: 4px;
  max-width: 400px;
  max-height: 500px;

  &--logs {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }

  &--logs::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &--logs::-webkit-scrollbar
  {
    width: 3px;
    background-color: #F5F5F5;
  }

  &--logs::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: var(--bs-gray);
  }

  &--icon {
    margin-left: 325px;
    margin-bottom: 5px;
  }

  &--content {
    display: flex;
    flex-direction: row;
  }
}
.border {
  border-left: 3px solid rgb(34, 38, 85);
  padding-left: 10px;
  border-radius: 2px;
  background: var(--bs-light);
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;

  span {
    font-weight: 700;
  }
}
.tooltip {
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    width: 262px;
  }
}
.banner-response {
  display: flex;

  &--currency {
    margin-top: 20px;
  }
}

.button {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .box {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
}

</style>
