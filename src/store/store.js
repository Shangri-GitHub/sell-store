import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

export default new vuex.Store({
  state: {
    show: false,
    index: 0,
    shoppingCartData: [],
    // 选择地址后跳转的bug
    recordUrl: '',
    //保存微信登录进去的openId
    openId: window.location.hash.split("?")[1]
  }
})
