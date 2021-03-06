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
import addNewMoment from '../pages/discover/addNewMoment.vue'
import address from '../components/address/address.vue'
import selectAddress from '../components/address/selectAddress.vue'
import modifyAddress from '../components/address/modifyAddress.vue'
import showMoreProductsPage from '../components/showMoreProductsPage.vue'
import setting from '../pages/me/setting.vue'
import userinfo from '../pages/me/userinfo.vue'
import modifyUserinfo from '../pages/me/modifyUserinfo.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',  // 默认hash
  // history: true,
  routes: [
    {
      path: '*',
      redirect: '/navbar/home' //重定向
    },

    {
      path: '/navbar',
      component: navbar,
      meta: {
        title: 'home',
        keepAlive: true
      },
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
      name: "detailsofgoods",
      path: '/detailsofgoods/:id',
      component: detailsofgoods
    },
    {
      name: "orderlistpage",
      path: '/orderlistpage',
      component: orderListPage
    },
    {
      name: "shoppingcart",
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      name: "address",
      path: '/address',
      component: address
    },
    {
      name: "selectAddress",
      path: '/selectAddress',
      component: selectAddress
    },
    {
      name: "modifyAddress",
      path: '/modifyAddress',
      component: modifyAddress
    },
    {
      name: "setting",
      path: '/setting',
      component: setting
    },
    {
      name: "userinfo",
      path: '/userinfo',
      component: userinfo
    },
    {
      name: "modifyUserinfo",
      path: '/modifyUserinfo',
      component: modifyUserinfo
    },
    {
      name: "showMoreProductsPage",
      path: '/showMoreProductsPage/:type',
      component: showMoreProductsPage
    },
    {
      name: "addNewMoment",
      path: '/addNewMoment',
      component: addNewMoment
    }
  ]
})
