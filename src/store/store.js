import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state:{
    show:false,
    // 纪录导航的位置
    index:0,
    // 纪录页面的位置
    savePosition:0,
    shoppingCartData:[],
    // 选择地址后跳转的bug
    recordUrl:'',
  }
})
