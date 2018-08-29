import Vue from 'vue'
import Router from 'vue-router'
import footerbar from '../components/footer-bar.vue'
import navbar from '../components/nav-bar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: navbar
    }
  ]
})
