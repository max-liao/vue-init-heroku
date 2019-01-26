import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Doggo from '@/pages/Doggo'
import Cryptos from '@/pages/Cryptos'
import Coins from '@/components/Coins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/doggo',
      name: 'Doggo',
      component: Doggo
    },
    {
      path: '/cryptos',
      name: 'Cryptos',
      component: Cryptos
    },
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
