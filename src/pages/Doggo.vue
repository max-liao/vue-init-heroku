<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button class="btn-primary" @click.prevent="handleClick">
      <slot></slot>(Random Doggo - {{count}})
    </button>
    <br>
    <img v-if="count > 0" v-bind:src="dog" />
  </div>
</template>

<script>
import API from '../api/API'

export default {
  name: 'Doggos',
  data () {
    return {
      msg: 'Doggo API',
      count: 0,
      dog: {},
      breeds: []
    }
  },
  async created () {
    var breeds = await API.getBaseBreedsList()
    this.breeds = breeds.data.message
  },
  methods: {
    async handleClick () {
      this.count++
      var randomDog = await API.getRandomDog()
      this.dog = randomDog.data.message
      console.log(this.dog)
    }
  }
}
</script>

<style>
img {
  margin: 0 auto;
}
</style>
