import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/footer-bar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
})
