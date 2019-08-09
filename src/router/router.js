import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import About from '@/pages/About'
import ToDo from '@/pages/ToDo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   alias: '/home',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      alias: '/todo',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
