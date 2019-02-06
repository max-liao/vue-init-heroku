<template>
  <div class="hello">
    <h1>{{ $store.getters.helloGetter }}</h1>
    <Btns v-for="(coins, index) in $store.getters.coinsGetter" :key="`coin-${index}`" v-bind:coin="coins"></Btns>
    <br>
    <br>
    <InputCoin v-model="inputText" placeholder="Add a cryptocurrency" @keydown.enter="addCoin"></InputCoin>
  </div>
</template>

<script>
import logo from '../assets/logo.png'
import Btns from '../components/CryptoButton'
import Coins from '../components/Coins'
import InputCoin from '../components/BasicInputText'
// import { serverBus } from '../main'

export default {
  name: 'Cryptos',
  data () {
    return {
      msg: 'Welcome Max',
      imgSrc: logo,
      inputText: ''
    }
  },
  components: {
    Btns,
    Coins,
    InputCoin
  },
  methods: {
    addCoin: function (event, value) {
      const coins = this.$store.getters.coinsGetter
      if (event.type === 'click' && !coins.includes(value)) {
        if (value) {
          this.$store.commit('addCoin', value)
        }
      } else if (this.inputText && !coins.includes(this.inputText)) {
        if (this.inputText) {
          this.$store.commit('addCoin', this.inputText)
        }
      }
    }
  }
}
</script>
