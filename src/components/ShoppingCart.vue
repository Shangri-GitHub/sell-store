<template>
  <div>
    <!--购物车底部条-->
    <div class="cart">
      <div class="cart-item1" @click="heartFlag=!heartFlag">
        <i :class="[heartFlag?'fa fa-heart-o':'fa fa-heart red']" aria-hidden="true"></i>
        <div>
          关注
        </div>
      </div>
      <div class="cart-item1" @click="shopingCartCount">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        <div>
          购物车
        </div>
        <mt-badge v-if="cartNums.length>0" size="small" type="error">{{cartNums.length}}</mt-badge>
      </div>
      <div class="cart-item2" @click="getPopupVisible(1)">
        加入购物车
      </div>
      <div class="cart-item2" style="background: #f31b19" @click="getPopupVisible(2)">立即购买</div>
    </div>
    <!--弹框-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="popup">
        <div style="display: flex;border-bottom: 1px solid #efeeee;height: 16vh">
          <img class="popup-photo" :src="item.url" v-for="item in shoppingCartData.smallModelPhoto"/>
          <div>
            <div class="pupop-price"> ¥ {{shoppingCartData.productPrice * shoppingCartData.productRate}}</div>
            <div class="pupop-store">库存 {{shoppingCartData.productStock}}件</div>
            <div class="pupop-select">{{selectedText}}</div>
            <div><i @click="popupVisible=false" class="fa fa-times close" aria-hidden="true"></i></div>
          </div>
        </div>
        <div v-if="shoppingCartData.productColor" style="border-bottom: 1px solid #f5f5f5;">
          <div style="padding: 10px;color: #6b6b6b">
            颜色
          </div>
          <div>
            <chooser
              :selections="shoppingCartData.productColor"
              @on-change="onParamChange('color', $event)">
            </chooser>
          </div>
        </div>
        <div v-if="shoppingCartData.productSize" style="border-bottom: 1px solid #f5f5f5;">
          <div style="padding: 10px;color: #6b6b6b">
            尺码
          </div>
          <div>
            <chooser
              :selections="shoppingCartData.productSize"
              @on-change="onParamChange('size', $event)">
            </chooser>
          </div>
        </div>
        <div
          style="border-bottom: 1px solid #f5f5f5;display: flex;justify-content: space-between;align-items: center;height: 8vh;">
          <div style="padding-left: 10px;color: #6b6b6b">
            数量
          </div>
          <div style="display: flex;align-items: center;padding-right: 10px">
            <counter @on-change="onParamChange('buyNum', $event)"></counter>
          </div>
        </div>
        <div style="padding:  10px;">
          <div class="button" @click="shoppingCartHandler(popupButtonText)">{{popupButtonText == 1 ? "加入购物车" : "确定"}}
          </div>
        </div>

      </div>
    </mt-popup>


  </div>
</template>

<script>
  import Counter from '../components/base/counter'
  import Chooser from '../components/base/chooser'
  import {Toast} from 'mint-ui';
  export default {
    name: '',
    components: {
      Counter,
      Chooser
    },
    data() {
      return {
        cartNum:0,
        heartFlag: true,
        popupVisible: false,
        popupButtonText: 1,
        selectedText: "请选择颜色 尺码",
        selectedColor: "",
        selectedSize: "",
        selectedNum: 1

      }
    },
    methods: {
      shopingCartCount(){
        this.$router.push("/shoppingcart");
      },
      onParamChange (attr, val) {
        if (attr == "color") {
          this.selectedColor = val;
        } else if (attr == "size") {
          this.selectedSize = val;
        } else if (attr == "buyNum") {
          this.selectedNum = val;
        }
        // 提示用户选择商品
        if (this.selectedColor && !this.selectedSize) {
          this.selectedText = "请选择: 尺码";
        } else if (!this.selectedColor && this.selectedSize) {
          this.selectedText = "请选择: 颜色";
        } else if (this.selectedColor && this.selectedSize) {
          this.selectedText = "已选择: " + this.selectedColor + " " + this.selectedSize;
        } else {
          this.selectedText = "请选择颜色 尺码";
        }
      },
      getPopupVisible(index){
        /**
         * 1 是加入购物车 2 是立即购买
         * @type {boolean}
         */
        this.popupVisible = !this.popupVisible;
        this.popupButtonText = index;
      },
      shoppingCartHandler(id){
        /**
         * 1 点的购物车，显示加入成功
         * 2 是确定 跳转到 订单详情页去支付
         */
        // 跳转到订单
        if (!this.selectedColor || !this.selectedSize) {
          Toast(this.selectedText);
          return;
        }
        this.shoppingCartData.productColor = this.selectedColor;
        this.shoppingCartData.productSize = this.selectedSize;
        this.shoppingCartData.productQuantity = this.selectedNum;
        if (id == "1") {
          var that = this;
          that.$http.post('seller/cart/save', this.shoppingCartData).then(function (res) {
            that.$emit('showCartNums', null)
          })
          this.popupVisible = false;
        } else if (id == "2") {
          this.$store.state.shoppingCartData = [this.shoppingCartData];
//          this.$router.push({name: "orderlistpage", params: {shoppingCartData:[this.shoppingCartData]}});
          this.$router.push({name: "orderlistpage"});


        }
      }
    },
    props: ['cartNums','shoppingCartData'],
    mounted: function () {
//      this.cartNum = this.cartNums;
    },
  }
</script>

<style lang="scss" scoped>
  .mint-badge.is-size-small {
    padding: 1px 6px;
    position: absolute;
    top: 0;
  }

  .popup {
    width: 100vw;
    background: white;
    font-size: 0.8rem;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 6vh;
      background: #000000;
      color: white
    }
    .popup-photo {
      width: 30vw;
      height: 30vw;
      border: 2px solid #dddddd;
      position: relative;
      top: -6vh;
      left: 4vh;
    }
    .pupop-price {
      position: relative;
      left: 11vw;
      font-size: 1.4rem;
      margin-top: 10px;
      color: red;
    }
    .pupop-store {
      position: relative;
      left: 11vw;
      font-size: 0.8rem;
      color: #6d6d6d;
    }
    .pupop-select {
      position: relative;
      left: 10vw;
      font-size: .8rem;
      color: #3c3c3c;
      width: 53vw;

    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 1.5rem;
      color: #6d6d6d;
    }
  }

  .cart {
    width: 100vw;
    height: 8vh;
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 2;
    text-align: center;
    display: flex;
    align-items: center;
    .cart-item1 {
      position: relative;
      width: 15%;
      font-size: .8rem;
      i {
        font-size: 1.6rem;
      }
      .red {
        color: red;
      }

    }

    .cart-item2 {
      width: 35%;
      color: white;
      font-size: 1.1rem;
      background: #000000;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
</style>
