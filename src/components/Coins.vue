
<template>
  <div>
    <br>
    <Btns v-for="(coins, index) in $store.getters.coinsGetter" :key="`coin-${index}`" v-bind:coin="coins"></Btns>
      <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>
<script>
import Btns from './CryptoButton'
import API from '../api/API'

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
  },

  watch: {
    $route: 'fetchData'
  },

  methods: {
    async fetchData () {
      await API.getCoin(this.$route.params.id)
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
