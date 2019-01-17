<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <button class="btn-primary" @click.prevent="handleClick">
      <slot></slot>(clicked - {{count}})
    </button>
  </div>
</template>

<script>
import API from '../api/API'

export default {
  name: 'about',
  data () {
    return {
      msg: 'About Us',
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
