// import { store } from 'quasar/wrappers'
// import { createStore } from 'vuex'

// import Coin from './Coin/index'

// /*
//  * If not building with SSR mode, you can
//  * directly export the Store instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Store instance.
//  */

// export default store(function (/* { ssrContext } */) {
//   const Store = createStore({

//     modules: {
//       Coin
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode and --debug builds only
//     strict: process.env.DEBUGGING
//   })

//   return Store
// })

// import Vue from 'vue'
import Vuex from 'vuex'

import Coin from './Coin'

// Vue.use(Vuex)

const modules = {
  Coin
}

const store = new Vuex.Store({ modules })

// Automatically run the `init` action if available for every module.
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`)
  }
}

export default store
