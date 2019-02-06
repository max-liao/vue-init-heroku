<template>
<div class="BasicInputText">
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >
  <button id="AddCoinBtn" v-on:click="addCoin">
    <i class="fas fa-coins" aria-hidden="true"></i>
  </button>
</div>
</template>

<script>
import CryptosPage from '../pages/Cryptos'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  // data () {
  // },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  },

  methods: {
    addCoin: function (event) {
      this.addCoinParent(event, this.value)
    }
  },

  created () {
    this.addCoinParent = CryptosPage.methods.addCoin
  }
}
</script>
<style>
#AddCoinBtn{
  border-bottom: 1px solid rgba(227, 207, 28, 0.5);
  background: rgb(192, 230, 22);
}

#AddCoinBtn:active {
  background: rgb(136, 224, 20);
}

.BasicInputText{
  position: relative;
}
</style>
