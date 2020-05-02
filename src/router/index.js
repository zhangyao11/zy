import Vue from 'vue'
import Router from 'vue-router'
import Film from "./../components/Film"
import Cinema from "./../components/Cinema"
import Center from "./../components/Center"

Vue.use(Router)

export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/film',
      component: Film
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

