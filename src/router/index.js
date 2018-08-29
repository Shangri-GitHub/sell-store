import Vue from 'vue'
import Router from 'vue-router'
import navbar from '../components/nav-bar.vue'
import home from '../pages/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: navbar
    },
    {
      path: '/navbar',
      component: navbar,
      children: [
    //     {
    //       path: 'relaxfood',
    //       component: RelaxFood
    //     },
        {
          path: 'home',
          component: home
        },
    //     {
    //       path: 'clothes',
    //       component: Clothes
    //     },
      ]
    },
  ]
})
