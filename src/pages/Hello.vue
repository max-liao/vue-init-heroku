<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src = imgSrc style="display:block; margin:auto">
    <br>
  </div>
</template>

<script>
import logo from '../assets/logo.png'
// import { serverBus } from '../main'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome Max',
      imgSrc: logo
    }
  },
  methods: {
    sendCoins: function () {
      // Using the server bus
      console.log('Send Coins')
      // serverBus.$emit('sendCoins', this.AllCoins)
    }
  }
}
</script>
