
<template>
  <div>
    <br>
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
    <Btns v-for="(coins, index) in $store.getters.coinsGetter" :key="`coin-${index}`" v-bind:coin="coins"></Btns>
  </div>
</template>
<script>
import axios from 'axios'
import Btns from './CryptoButton'
// import { serverBus } from '../main'

export default {
  name: 'Coins',
  components: {
    Btns
  },
  data () {
    return {
      coin: {}
    }
  },

  created () {
    this.fetchData()
    // serverBus.$on('sendCoins', (coins) => {
    //   this.AllCoins = coins
    // })
  },

  watch: {
    $route: 'fetchData'
  },

  methods: {
    fetchData () {
      axios
        .get(
          'https://api.coinmarketcap.com/v1/ticker/' + this.$route.params.id + '/'
        )
        .then(resp => {
          this.coin = resp.data[0]
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.crypto{
  margin:auto;
  padding-top: auto;
}
</style>
