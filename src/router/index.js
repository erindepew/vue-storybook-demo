import Vue from 'vue'
import Router from 'vue-router'
import Library from '@/components/Library'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Library',
      component: Library
    }
  ]
})
