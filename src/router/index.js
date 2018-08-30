import Vue from 'vue'
import Router from 'vue-router'
import navbar from '../components/nav-bar.vue'
import detailsofgoods from '../components/DetailsOfGoods.vue'
import discover from '../pages/discover/discover.vue'
import cart from '../pages/cart/cart.vue'
import me from '../pages/me/me.vue'
import home from '../pages/home/home.vue'
import relaxfood from '../pages/home/relax-food.vue'
import clothes from '../pages/home/clothes.vue'
import detail from '../pages/discover/detail.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',  // 默认hash
  // history: true,
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(to)
  //   console.log(from)
  //   console.log(savedPosition)
  //   console.log(window.scrollY)
  //
  // },
  routes: [
    {
      path: '/',
      redirect: '/navbar/home' //重定向
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
          component: home,
        },
        {
          path: 'clothes',
          component: clothes
        },
      ]
    },
    {
      path: '/discover',
      component: discover,
      children: [{
          path: 'detail',
          component: detail
        },
        {
          path: 'clothes',
          component: clothes
        }]
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/detailsofgoods',
      component: detailsofgoods
    }
  ]
})
