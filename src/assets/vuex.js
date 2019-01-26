import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  hello: 'Welcome to Crypto Tracker',
  Coins: ['Bitcoin', 'Ethereum'],
  Doggos: []
}

const getters = {
  helloGetter: state => state.hello,
  coinsGetter: state => state.Coins
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations: {
    changeHello (state, change) {
      state.hello = change
    },
    addCoin (state, change) {
      state.Coins.push(change)
    }
  }
})
