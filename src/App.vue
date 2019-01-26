<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-link to="/doggo">Doggos</router-link>
    <router-link to="/cryptos">Cryptos</router-link>
    <router-view/>
  </div>
</template>

<script>
import {store} from './assets/vuex.js'

export default {
  name: 'App',
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: block;
}

#submit{
  margin:auto;
  padding-top: 10px;
}
</style>
