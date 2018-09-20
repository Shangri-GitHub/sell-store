import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state:{
    show:false,
    index:0,
    shoppingCartData:[]
  }
})
