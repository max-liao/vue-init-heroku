<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src = imgSrc style="display:block; margin:auto">
    <Btns v-for="(coins, index) in AllCoins" :key="`coin-${index}`" v-bind:coin="coins"></Btns>
    <br>
    <button v-on:click="sendCoins">Send Coins</button>
  </div>
</template>

<script>
import logo from '../assets/logo.png'
import Btns from './CryptoButton'
import { serverBus } from '../main'

export default {
  name: 'Hello',
  components: {
    Btns
  },
  data () {
    return {
      msg: 'Welcome Max',
      imgSrc: logo,
      AllCoins: ['Bitcoin', 'Ripple', 'Ethereum', 'Eos']
    }
  },
  created () {
  },
  mounted () {
    // console.log(serverBus)
    // // serverBus.$emit('AllCoins', this.AllCoins)
    // this.sendCoins()
  },
  methods: {
    sendCoins: function () {
      // Using the server bus
      serverBus.$emit('sendCoins', this.AllCoins)
      // console.log(this.AllCoins)
    }
  }
}
</script>
