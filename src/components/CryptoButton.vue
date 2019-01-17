<template>
  <router-link v-bind:to="route">
      <button v-bind:id="coin" class="crypto">{{coin}}</button>
  </router-link>
</template>

<script>
module.exports = {
  data: function () {
    return {
      route: '/coins/' + this.coin
    }
  },
  props: {
    coin: ''
  },
  mounted () {
    // console.log('Button HTML', this.$el.innerHTML)
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
