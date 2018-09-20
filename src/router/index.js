import Vue from 'vue'
import Router from 'vue-router'
import navbar from '../components/nav-bar.vue'
import detailsofgoods from '../components/DetailsOfGoods.vue'
import orderListPage from '../components/orderListPage.vue'
import discover from '../pages/discover/discover.vue'
import cart from '../pages/cart/cart.vue'
import me from '../pages/me/me.vue'
import home from '../pages/home/home.vue'
import relaxfood from '../pages/home/relax-food.vue'
import clothes from '../pages/home/clothes.vue'
import shoppingcart from '../pages/home/shopping-cart.vue'
import detail from '../pages/discover/detail.vue'
import selectAddress from '../components/address/selectAddress.vue'
import modifyAddress from '../components/address/modifyAddress.vue'

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
      path: '*',
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
      name:"detailsofgoods",
      path: '/detailsofgoods/:id',
      component: detailsofgoods
    },
    {
      name:"orderlistpage",
      path: '/orderlistpage',
      component: orderListPage
    },
    {
      name:"shoppingcart",
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      name:"selectAddress",
      path: '/selectAddress',
      component: selectAddress
    },
    {
      name:"modifyAddress",
      path: '/modifyAddress',
      component: modifyAddress
    }

  ]
})
