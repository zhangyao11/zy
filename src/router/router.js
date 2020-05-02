import Vue from 'vue'
import Router from 'vue-router'

import Film from "./../views/Film"
import Nowplaying from "./../views/Film/Nowplaying"
import Comingsoon from "./../views/Film/Comingsoon"
import Cinema from "./../views/Cinema"
import City from "./../views/City"
import Detail from "./../views/Detail"
import Center from "./../views/Center"
import Login from "./../views/Login"


Vue.use(Router)

const router =  new Router({
  mode: "hash",   //网址中有/#/
  //mode:"history", //会向后端发请求
  routes: [
    {
      path: '/film',      
      component: Film,
      children: [
        {
          path: '/film/nowplaying', //两种写法
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '*',
          redirect: '/film/nowplaying'   //重定向
        },
      ]
    },
    {
      path: '/cinema',
      component: Cinema,     
    },
    {
      path: '/detail/:id',//动态路由
      name:"de",
      component: Detail,      
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '*',
      redirect:'/film/nowplaying'   //重定向
    },
  ]
})
export default router
