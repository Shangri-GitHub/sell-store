import Vue from 'vue'
import Router from 'vue-router'
import navbar from '../components/nav-bar.vue'
import discover from '../pages/discover/discover.vue'
import cart from '../pages/cart/cart.vue'
import me from '../pages/me/me.vue'
import home from '../pages/home/home.vue'
import relaxfood from '../pages/home/relax-food.vue'
import clothes from '../pages/home/clothes.vue'



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
        {
          path: 'relaxfood',
          component: relaxfood
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'clothes',
          component: clothes
        },
      ]
    },
    {
      path: '/discover',
      component: discover
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/me',
      component: me
    }
  ]
})
