// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'font-awesome/css/font-awesome.min.css'
import 'mint-ui/lib/style.css'

import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import LyTab from 'ly-tab'
import './css/my-mint.scss';




Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(LyTab)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
