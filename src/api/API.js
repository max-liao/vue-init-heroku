import axios from 'axios'

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function () {
    return axios.get('https://dog.ceo/api/breeds/image/random')
  },
  getDogsOfBreed: function (breed) {
    return axios.get('https://dog.ceo/api/breed/' + breed + '/images')
  },
  getBaseBreedsList: function () {
    return axios.get('https://dog.ceo/api/breeds/list')
  },
  getCoin: function (coin) {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/' + coin + '/')
    // .then(resp => {
    //   this.coin = resp.data[0]
    //   // console.log(resp)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }
}
